import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
import { performance } from 'node:perf_hooks';
import { createAttempt, getNextQuestion, submitAnswer, getProgress, getReport, ENGINE_VERSION } from './snapshots/engine-v2.mjs';
import { QUESTIONS, BANK_VERSION } from './snapshots/bank-v0.2.mjs';

// Research sandbox only. This file never writes dist/ or changes a live scorer.
const DOMAINS = ['language', 'reading', 'listening'];
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];
const POLICIES = ['editorial_endpoint', 'independent_binomial', 'block_conservative'];
const CURRENT_TRIALS = 10_000;
const NULL_TRIALS = 10_000;
const PROFILE_TRIALS = 1_000;
const FAMILY_ALPHA = 0.01;
// A cell can contribute either its six-item core endpoint or its sixteen-item
// core+confirmation endpoint. Both are potentially data-selected looks, even
// though the participant receives only one final report. Count both.
const POSSIBLE_ENDPOINTS_PER_CELL = 2;
const CELL_ALPHA = FAMILY_ALPHA / (DOMAINS.length * LEVELS.length * POSSIBLE_ENDPOINTS_PER_CELL);
const started = performance.now();

function rng(seed) {
  let state = seed >>> 0;
  return () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function hash(text) {
  let value = 2166136261;
  for (const char of text) {
    value ^= char.charCodeAt(0);
    value = Math.imul(value, 16777619);
  }
  return value >>> 0;
}

function wilson(successes, n) {
  if (n === 0) return { successes, n, estimate: null, lower: null, upper: null, method: 'Wilson 95%, marginal' };
  const z = 1.959963984540054;
  const estimate = successes / n;
  const denominator = 1 + z * z / n;
  const center = (estimate + z * z / (2 * n)) / denominator;
  const half = z * Math.sqrt(estimate * (1 - estimate) / n + z * z / (4 * n * n)) / denominator;
  return { successes, n, estimate, lower: Math.max(0, center - half), upper: Math.min(1, center + half), method: 'Wilson 95%, marginal' };
}

const tailCache = new Map();
function binomialUpperTail(correct, n, p = 0.25) {
  const key = `${correct}:${n}:${p}`;
  if (tailCache.has(key)) return tailCache.get(key);
  let probability = (1 - p) ** n;
  let tail = correct === 0 ? probability : 0;
  for (let k = 1; k <= n; k += 1) {
    probability *= (n - k + 1) / k * p / (1 - p);
    if (k >= correct) tail += probability;
  }
  tailCache.set(key, tail);
  return tail;
}

function minimumSuccesses(n, threshold = CELL_ALPHA) {
  for (let k = 0; k <= n; k += 1) if (binomialUpperTail(k, n) <= threshold) return k;
  return null;
}

assert.ok(Math.abs(binomialUpperTail(6, 6) - 0.25 ** 6) < 1e-12);
assert.ok(Math.abs(binomialUpperTail(0, 6) - 1) < 1e-12);
assert.equal(wilson(0, 10000).estimate, 0);
assert.ok(wilson(0, 10000).upper > 0, 'Zero observed events must not be reported as zero risk.');

function currentEngineExperiment() {
  const random = rng(20261021);
  const counts = { anyDomain: 0, allDomains: 0, first1000AnyDomain: 0 };
  const domains = Object.fromEntries(DOMAINS.map(domain => [domain, { support: 0, b2OrC1: 0, c1: 0, levels: Array(5).fill(0) }]));
  for (let trial = 0; trial < CURRENT_TRIALS; trial += 1) {
    let attempt = createAttempt('full', `guess-${trial}`);
    while (!getProgress(attempt).complete) {
      const item = getNextQuestion(attempt, QUESTIONS);
      assert.ok(item, 'Current real bank must not exhaust.');
      attempt = submitAnswer(attempt, item, Math.floor(random() * item.options.length));
    }
    const report = getReport(attempt, QUESTIONS);
    let supported = 0;
    for (const domain of DOMAINS) {
      const level = report.domains[domain].level;
      if (level === null) continue;
      supported += 1;
      domains[domain].support += 1;
      domains[domain].levels[level] += 1;
      if (level >= 3) domains[domain].b2OrC1 += 1;
      if (level === 4) domains[domain].c1 += 1;
    }
    if (supported > 0) {
      counts.anyDomain += 1;
      if (trial < 1000) counts.first1000AnyDomain += 1;
    }
    if (supported === 3) counts.allDomains += 1;
  }
  return {
    trials: CURRENT_TRIALS, seed: 20261021, responseModel: 'independent uniform random option selection',
    endpoint: 'completed full 30-item attempt only; no interim reporting or early stopping',
    anyDomainSupport: wilson(counts.anyDomain, CURRENT_TRIALS),
    allDomainsSupport: wilson(counts.allDomains, CURRENT_TRIALS),
    first1000AnyDomain: wilson(counts.first1000AnyDomain, 1000),
    domains: Object.fromEntries(DOMAINS.map(domain => [domain, {
      anyLevelSupport: wilson(domains[domain].support, CURRENT_TRIALS),
      b2OrC1Support: wilson(domains[domain].b2OrC1, CURRENT_TRIALS),
      c1Support: wilson(domains[domain].c1, CURRENT_TRIALS),
      supportedLevelCounts: Object.fromEntries(LEVELS.map((level, index) => [level, domains[domain].levels[index]])),
    }])),
  };
}

// Each generated item is an original mathematical placeholder, not a reviewed
// language task. Values 0..4 are intended authoring cells, not calibrated CEFR.
function responsesAtLevel(level, count, probability, groupSize, rho, random, phase) {
  const groups = [];
  let total = 0;
  while (total < count) {
    const size = Math.min(groupSize, count - total);
    const shared = random() < rho;
    const sharedSuccess = random() < probability;
    const outcomes = Array.from({ length: size }, () => shared ? sharedSuccess : random() < probability);
    groups.push({ level, phase, outcomes, correct: outcomes.filter(Boolean).length, total: size });
    total += size;
  }
  return groups;
}

function sumGroups(groups) {
  return { total: groups.reduce((sum, group) => sum + group.total, 0), correct: groups.reduce((sum, group) => sum + group.correct, 0) };
}

function candidateDomain(probabilities, dependency, random, domain) {
  const groupSize = domain === 'language' ? 1 : dependency.groupSize;
  const rho = domain === 'language' ? 0 : dependency.rho;
  const core = LEVELS.map((_, level) => responsesAtLevel(level, 6, probabilities[level], groupSize, rho, random, 'core'));
  // Generate potential confirmation responses at all five levels before
  // routing. Only ten at the selected level are delivered/scored. This makes
  // the selection and multiplicity assumptions explicit and reproducible.
  const potentialConfirmation = LEVELS.map((_, level) => responsesAtLevel(level, 10, probabilities[level], groupSize, rho, random, 'confirmation'));
  const candidates = core.map((groups, level) => ({ level, ...sumGroups(groups) })).filter(row => row.correct >= 4);
  const selected = candidates.length ? candidates[candidates.length - 1].level : 0;
  const endpoint = core.map((groups, level) => level === selected ? [...groups, ...potentialConfirmation[level]] : groups);
  assert.equal(endpoint.flat().reduce((sum, group) => sum + group.total, 0), 40);
  const results = {};
  for (const policy of POLICIES) {
    const supported = [];
    endpoint.forEach((groups, level) => {
      const { total, correct } = sumGroups(groups);
      const editorial = total >= 3 && correct >= 3 && correct / total >= 0.75;
      if (!editorial) return;
      let accepted = false;
      if (policy === 'editorial_endpoint') accepted = true;
      else if (policy === 'independent_binomial') accepted = binomialUpperTail(correct, total) <= CELL_ALPHA;
      else {
        // One conservative Bernoulli unit per independent stimulus: all of
        // its items correct. At marginal chance p=.25, P(all correct)<=.25,
        // even under arbitrary within-stimulus dependence. Independence of
        // different stimuli remains a necessary, unverified assumption.
        const successfulBlocks = groups.filter(group => group.correct === group.total).length;
        accepted = binomialUpperTail(successfulBlocks, groups.length) <= CELL_ALPHA;
      }
      if (accepted) supported.push(level);
    });
    results[policy] = supported.length ? supported[supported.length - 1] : null;
  }
  return { results, selected };
}

const dependencies = [
  { name: 'independent_items_paired_stimuli', rho: 0, groupSize: 2 },
  { name: 'paired_stimuli_rho_0.30', rho: 0.30, groupSize: 2 },
  { name: 'four_item_stimuli_rho_0.60', rho: 0.60, groupSize: 4 },
];

const secure = level => LEVELS.map((_, index) => index < level ? 0.95 : index === level ? 0.90 : index === level + 1 ? 0.35 : 0.25);
const profiles = [
  { name: 'chance_null', probabilities: DOMAINS.map(() => Array(5).fill(0.25)), targets: [null, null, null], trials: NULL_TRIALS },
  ...LEVELS.map((level, index) => ({ name: `secure_${level}`, probabilities: DOMAINS.map(() => secure(index)), targets: [index, index, index], trials: PROFILE_TRIALS })),
  { name: 'emerging_B1_not_mastered', probabilities: DOMAINS.map(() => [0.97, 0.90, 0.70, 0.40, 0.27]), targets: [1, 1, 1], trials: PROFILE_TRIALS },
  { name: 'uneven_B1_A2_B2', probabilities: [secure(2), secure(1), secure(3)], targets: [2, 1, 3], trials: PROFILE_TRIALS },
  { name: 'high_ability_with_15pct_lapses', probabilities: DOMAINS.map(() => [0.85, 0.85, 0.85, 0.85, 0.85]), targets: [4, 4, 4], trials: PROFILE_TRIALS },
];

function emptyCounters() {
  return { supported: 0, exact: 0, overOne: 0, overTwoPlus: 0, underOne: 0, underTwoPlus: 0, abstain: 0, levels: Array(5).fill(0) };
}

function candidateExperiment(profile, dependency) {
  const aggregates = Object.fromEntries(POLICIES.map(policy => [policy, { anySupported: 0, allSupported: 0, domains: DOMAINS.map(emptyCounters) }]));
  const boundarySelection = DOMAINS.map(() => Array(5).fill(0));
  for (let trial = 0; trial < profile.trials; trial += 1) {
    const outputs = DOMAINS.map((domain, index) => {
      const random = rng(hash(`candidate-v1:${profile.name}:${dependency.name}:${trial}:${domain}`));
      const result = candidateDomain(profile.probabilities[index], dependency, random, domain);
      boundarySelection[index][result.selected] += 1;
      return result.results;
    });
    for (const policy of POLICIES) {
      const aggregate = aggregates[policy];
      const supportCount = outputs.filter(output => output[policy] !== null).length;
      if (supportCount > 0) aggregate.anySupported += 1;
      if (supportCount === 3) aggregate.allSupported += 1;
      outputs.forEach((output, index) => {
        const level = output[policy];
        const count = aggregate.domains[index];
        const target = profile.targets[index];
        if (level === null) { count.abstain += 1; return; }
        count.supported += 1;
        count.levels[level] += 1;
        if (target === null) return;
        const error = level - target;
        if (error === 0) count.exact += 1;
        else if (error === 1) count.overOne += 1;
        else if (error >= 2) count.overTwoPlus += 1;
        else if (error === -1) count.underOne += 1;
        else count.underTwoPlus += 1;
      });
    }
  }
  return {
    profile: profile.name, dependence: dependency.name, trials: profile.trials,
    assumedTargets: profile.targets.map(target => target === null ? null : LEVELS[target]),
    probabilitiesByDomain: Object.fromEntries(DOMAINS.map((domain, index) => [domain, profile.probabilities[index]])),
    boundarySelection: Object.fromEntries(DOMAINS.map((domain, index) => [domain, boundarySelection[index]])),
    policies: Object.fromEntries(POLICIES.map(policy => {
      const aggregate = aggregates[policy];
      return [policy, {
        anyDomainSupported: wilson(aggregate.anySupported, profile.trials),
        allDomainsSupported: wilson(aggregate.allSupported, profile.trials),
        domains: Object.fromEntries(DOMAINS.map((domain, index) => {
          const count = aggregate.domains[index];
          const targetKnown = profile.targets[index] !== null;
          return [domain, {
            coverage: wilson(count.supported, profile.trials),
            abstention: wilson(count.abstain, profile.trials),
            exactUnconditional: targetKnown ? wilson(count.exact, profile.trials) : null,
            exactAmongSupported: targetKnown ? wilson(count.exact, count.supported) : null,
            overOne: targetKnown ? wilson(count.overOne, profile.trials) : null,
            overTwoPlus: targetKnown ? wilson(count.overTwoPlus, profile.trials) : null,
            underOne: targetKnown ? wilson(count.underOne, profile.trials) : null,
            underTwoPlus: targetKnown ? wilson(count.underTwoPlus, profile.trials) : null,
            supportedLevelCounts: Object.fromEntries(LEVELS.map((level, i) => [level, count.levels[i]])),
          }];
        })),
      }];
    })),
  };
}

const files = ['snapshots/engine-v2.mjs', 'snapshots/bank-v0.2.mjs'];
const provenance = {};
for (const file of files) provenance[file] = createHash('sha256').update(await readFile(new URL(file, import.meta.url))).digest('hex');
let current;
if (process.argv.includes('--reuse-current')) {
  const cache = JSON.parse(await readFile(new URL('./current-engine-cache.json', import.meta.url), 'utf8'));
  assert.deepEqual(cache.sha256, provenance, 'Cached current-engine simulation does not match frozen source hashes.');
  assert.equal(cache.result.trials, CURRENT_TRIALS);
  current = cache.result;
  console.log('Reusing the completed 10,000-run current-engine experiment with matching frozen source hashes.');
} else {
  console.log('Reproducing current scorer on 10,000 independent uniform-guessing attempts...');
  current = currentEngineExperiment();
  await writeFile(new URL('./current-engine-cache.json', import.meta.url), JSON.stringify({ sha256: provenance, result: current }, null, 2) + '\n');
}
console.log(JSON.stringify({ currentAnyDomain: current.anyDomainSupport, perDomain: Object.fromEntries(DOMAINS.map(domain => [domain, current.domains[domain].anyLevelSupport.estimate])) }));
const comparisons = [];
for (const dependency of dependencies) {
  for (const profile of profiles) comparisons.push(candidateExperiment(profile, dependency));
  console.log(`Completed candidate scenarios: ${dependency.name}`);
}

const output = {
  schemaVersion: 1,
  date: '2026-10-21', timezone: 'Asia/Qyzylorda',
  scope: 'Synthetic research only; no human calibration, CEFR validity, or production scoring change.',
  currentSnapshot: { engineVersion: ENGINE_VERSION, bankVersion: BANK_VERSION, bankItems: QUESTIONS.length, sha256: provenance },
  methods: {
    currentTrials: CURRENT_TRIALS, candidateNullTrialsPerDependence: NULL_TRIALS, candidateLearnerTrialsPerScenario: PROFILE_TRIALS,
    interval: 'Wilson 95% marginal binomial intervals per participant, per domain or any-domain indicator; not simultaneous intervals; no pooled-domain independence assumption.',
    blueprint: { deliveredPerDomain: 40, deliveredTotal: 120, corePerIntendedLevel: 6, corePerDomain: 30, confirmationItems: 10, selection: 'highest core cell with >=4/6 correct, else A1; one confirmation block; fixed endpoint, no retest or optional stopping' },
    policies: {
      editorial_endpoint: 'At completed endpoint: n>=3, correct>=3, fraction>=.75 at each level; select highest supported.',
      independent_binomial: 'Same editorial gate plus exact upper-tail Binomial(n,.25) <= .01/(5 levels * 3 domains * 2 possible endpoints); independence assumption required.',
      block_conservative: 'Same raw editorial gate plus Binomial(number of independent stimulus blocks,.25) tail for all-correct blocks <= .01/30; arbitrary within-block dependence allowed, between-block independence required.',
    },
    familyAlpha: FAMILY_ALPHA, perCellAlpha: CELL_ALPHA, possibleEndpointsPerCell: POSSIBLE_ENDPOINTS_PER_CELL,
    binomialMinimumCorrect: Object.fromEntries([2, 3, 5, 6, 8, 10, 16].map(n => [n, minimumSuccesses(n)])),
    syntheticItems: 'Mathematical response placeholders with intended level and stimulus-group identity; no actual language content and no empirically estimated item parameters.',
    dependence: 'Within a passage, probability rho uses one shared Bernoulli(p); otherwise items are independent Bernoulli(p). This preserves marginal p and gives within-block ICC rho. Different passages independent. Language items independent.',
    nullDistinction: 'Candidate dependent-null scenarios have marginal success .25 but are NOT independent uniform option guessing; they deliberately stress binomial misspecification.',
    nominalTargets: 'Assumed secure boundaries chosen for sensitivity exercises, not observed learner truth. The emerging-B1 profile is nominally A2 with B1 probability .70.',
  },
  currentEngine: current,
  candidateComparisons: comparisons,
};
await writeFile(new URL('./results.json', import.meta.url), JSON.stringify(output, null, 2) + '\n');
console.log(`Saved research/results.json (${((performance.now() - started) / 1000).toFixed(1)} seconds).`);
