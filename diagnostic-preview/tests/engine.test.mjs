import test from 'node:test';
import assert from 'node:assert/strict';
import { createAttempt, getNextQuestion, submitAnswer, getProgress, getReport, validateAttempt, LEVEL_LABELS, ENGINE_VERSION } from '../dist/engine.js';
import { QUESTIONS } from '../dist/bank.js';

const bank = ['language', 'reading', 'listening'].flatMap(domain => Array.from({ length: 5 }, (_, level) =>
  Array.from({ length: 15 }, (_, index) => ({
    id: `${domain}-${level}-${index}`, level, domain, subskill: 'fixture',
    prompt: `Fixture ${domain} ${level} ${index}`, options: ['right', 'wrong', 'also wrong'], answer: 0, explanation: 'Fixture only.',
  }))).flat());

function run(mode = 'full', choose = () => 0, seed = 'fixture') {
  let attempt = createAttempt(mode, seed);
  while (!getProgress(attempt).complete) {
    const question = getNextQuestion(attempt, bank);
    assert.ok(question);
    attempt = submitAnswer(attempt, question, choose(question, attempt));
  }
  return attempt;
}

test('full and quick formats have exact limits and explicit completion', () => {
  for (const [mode, count] of [['full', 30], ['quick', 12]]) {
    const attempt = run(mode);
    assert.equal(attempt.answers.length, count);
    assert.equal(new Set(attempt.answers.map(answer => answer.itemId)).size, count);
    assert.equal(getProgress(attempt).complete, true);
    assert.equal(getProgress(attempt).percent, 100);
    assert.equal(getNextQuestion(attempt, bank), null);
    assert.equal(getReport(attempt, bank).complete, true);
    assert.equal(validateAttempt(attempt, bank), true);
  }
  assert.equal(getReport(run('quick'), bank).domains.listening.assessed, false);
});

test('all wrong or unknown answers do not award A1', () => {
  for (const response of [1, null]) {
    const report = getReport(run('full', () => response), bank);
    assert.equal(report.overall.belowFloor, true);
    assert.equal(report.overall.level, null);
    assert.match(report.overall.label, /not yet demonstrated/);
    for (const domain of Object.values(report.domains)) {
      assert.equal(domain.belowFloor, true);
      assert.equal(domain.level, null);
    }
  }
});

test('all correct assessment supports a level only with at least three observations', () => {
  const report = getReport(run(), bank);
  assert.equal(report.provisional, true);
  assert.equal(report.overall.level, null);
  assert.equal(report.overall.range.upper, 4);
  assert.equal(report.domains.language.level, 4);
  assert.equal(report.domains.reading.level, 3);
  assert.equal(report.domains.listening.level, 3);
  assert.equal(report.domains.reading.evidenceByLevel[4].total, 1);
  assert.equal(report.domains.reading.upperBoundaryPending, true);
  assert.equal(report.domains.reading.upperBoundaryLevel, 4);
  assert.equal(report.domains.reading.rangeKind, 'sampled_evidence_boundary');
  assert.equal(LEVEL_LABELS[4], 'C1');
  assert.match(report.caveat, /unvalidated/);
});

test('domain routing is independent and changes only after complete three-item blocks', () => {
  const attempt = run('full', question => question.domain === 'language' ? 0 : 1);
  const language = attempt.answers.filter(answer => answer.domain === 'language').map(answer => answer.level);
  const reading = attempt.answers.filter(answer => answer.domain === 'reading').map(answer => answer.level);
  assert.deepEqual(language, [1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4]);
  assert.deepEqual(reading, [1, 2, 0, 0, 0, 0, 0, 0, 0]);
  const report = getReport(attempt, bank);
  assert.equal(report.overall.range.lower, null, 'A weak domain must not disappear from the overall range');
  assert.equal(report.overall.range.upper, 4);
});

test('reloads select the same question and different seeds vary equivalent items', () => {
  let attempt = createAttempt('full', 'resume');
  attempt = submitAnswer(attempt, getNextQuestion(attempt, bank), 0);
  const reloaded = JSON.parse(JSON.stringify(attempt));
  assert.equal(validateAttempt(reloaded, bank), true);
  assert.equal(getNextQuestion(attempt, bank).id, getNextQuestion(reloaded, bank).id);
  const firstIds = new Set(Array.from({ length: 10 }, (_, n) => getNextQuestion(createAttempt('full', `seed-${n}`), bank).id));
  assert.ok(firstIds.size > 1);
});

test('submissions are pure and repeated identical submissions are idempotent', () => {
  const attempt = createAttempt();
  const question = getNextQuestion(attempt, bank);
  const next = submitAnswer(attempt, question, 0);
  assert.equal(attempt.answers.length, 0);
  assert.equal(next.answers.length, 1);
  assert.notEqual(next, attempt);
  assert.equal(submitAnswer(next, question, 0), next);
  assert.throws(() => submitAnswer(next, question, 1), /already been submitted/);
});

test('invalid option indexes, mode, wrong section, and engine versions are rejected', () => {
  const attempt = createAttempt();
  const question = getNextQuestion(attempt, bank);
  for (const answer of [-1, 3, 0.5, undefined, '0', NaN]) {
    assert.throws(() => submitAnswer(attempt, question, answer), RangeError);
  }
  assert.throws(() => createAttempt('mystery'), TypeError);
  assert.throws(() => submitAnswer(attempt, bank.find(q => q.domain === 'listening'), 0), /different section/);
  assert.equal(validateAttempt({ ...attempt, version: 0 }, bank), false);
  assert.equal(validateAttempt({ ...attempt, version: ENGINE_VERSION - 1 }, bank), false);
});

test('storage validation rejects tampering, incompatible content, duplicates and unknown IDs', () => {
  const attempt = run('quick');
  for (const mutate of [
    a => { a.answers[0].correct = false; },
    a => { a.answers[0].response = 9; },
    a => { a.answers[0].itemId = 'unknown'; },
    a => { a.answers[0].level = 4; },
    a => { a.answers[0].domain = 'reading'; },
    a => { a.answers[1] = a.answers[0]; },
    a => { a.answers.reverse(); },
    a => { a.answers[0].itemVersion = 'old'; },
  ]) {
    const copy = structuredClone(attempt);
    mutate(copy);
    assert.equal(validateAttempt(copy, bank), false);
  }
  const changedBank = structuredClone(bank);
  changedBank.find(q => q.id === attempt.answers[0].itemId).prompt += ' revised';
  assert.equal(validateAttempt(attempt, changedBank), false);
  assert.equal(validateAttempt(attempt, [...bank, bank[0]]), false);
  assert.equal(validateAttempt(null, bank), false);
});

test('incomplete reports say so and omit unassessed domain estimates', () => {
  let attempt = createAttempt();
  const empty = getReport(attempt, bank);
  assert.equal(empty.complete, false);
  assert.equal(empty.overall.level, null);
  assert.equal(empty.domains.language.assessed, false);
  attempt = submitAnswer(attempt, getNextQuestion(attempt, bank), 0);
  const partial = getReport(attempt, bank);
  assert.equal(partial.domains.language.assessed, true);
  assert.equal(partial.domains.language.level, null);
  assert.equal(partial.domains.reading.assessed, false);
});

test('depleted target level falls back to nearby items without duplicates or infinite loops', () => {
  const tiny = bank.filter(q => q.domain === 'language' && q.level === 0).slice(0, 2);
  let attempt = createAttempt();
  for (let i = 0; i < 2; i += 1) {
    const question = getNextQuestion(attempt, tiny);
    assert.equal(question.level, 0);
    attempt = submitAnswer(attempt, question, 0);
  }
  assert.equal(getNextQuestion(attempt, tiny), null);
  assert.equal(getProgress(attempt).complete, false);
  assert.equal(getReport(attempt, tiny).exhausted, true);
  assert.equal(getNextQuestion(createAttempt(), []), null);
});

test('one correct response never establishes a level and three correct are required', () => {
  let attempt = createAttempt();
  for (let i = 0; i < 3; i += 1) {
    const question = getNextQuestion(attempt, bank);
    attempt = submitAnswer(attempt, question, i === 1 ? 0 : 1);
  }
  let report = getReport(attempt, bank);
  assert.equal(report.domains.language.level, null);
  assert.equal(report.domains.language.evidenceStatus, 'insufficient');
  assert.equal(report.domains.language.upperBoundaryPending, true);
  assert.equal(report.domains.language.range, null);

  // Two correct among three observations at B1 used to satisfy the rule.
  // It no longer does, even though the preceding high probe was correct.
  attempt = createAttempt();
  for (let i = 0; i < 4; i += 1) {
    attempt = submitAnswer(attempt, getNextQuestion(attempt, bank), i === 3 ? 1 : 0);
  }
  report = getReport(attempt, bank);
  assert.equal(report.domains.language.evidenceByLevel[2].total, 3);
  assert.equal(report.domains.language.evidenceByLevel[2].correct, 2);
  assert.equal(report.domains.language.level, null);
});

test('equal raw totals at different routed difficulties do not imply the same level', () => {
  const assessLanguage = pattern => {
    let attempt = createAttempt('full', 'same-total');
    for (const correct of pattern) {
      const question = getNextQuestion(attempt, bank);
      attempt = submitAnswer(attempt, question, correct ? 0 : 1);
    }
    return getReport(attempt, bank).domains.language;
  };
  const higher = assessLanguage([true, true, true, true, true, true, true, true, false, false, false, false]);
  const lower = assessLanguage([false, false, true, true, true, true, true, true, true, true, false, false]);
  assert.equal(higher.correct, 8);
  assert.equal(lower.correct, 8);
  assert.equal(higher.level, 3);
  assert.equal(lower.level, 1);

  // Exposes a real small-sample limitation: one response can cross an
  // editorial support threshold. This is not claimed as score stability.
  const thresholdMet = assessLanguage([true, true, true, true]);
  const thresholdMissed = assessLanguage([true, true, true, false]);
  assert.equal(thresholdMet.level, 2);
  assert.equal(thresholdMissed.level, null);
});

test('resume rejects internally consistent answers from a question outside its seeded route', () => {
  const start = createAttempt('full', 'route-integrity');
  const expected = getNextQuestion(start, bank);
  const alternate = bank.find(question => question.domain === expected.domain && question.level === expected.level && question.id !== expected.id);
  const internallyConsistent = submitAnswer(start, alternate, 0);
  assert.equal(internallyConsistent.answers[0].correct, true);
  assert.equal(validateAttempt(internallyConsistent, bank), false);
});

function randomGenerator(seed) {
  let state = seed >>> 0;
  return () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function simulate(realBank, mode, seed, answerer) {
  let attempt = createAttempt(mode, seed);
  for (let n = 0; n < 31 && !getProgress(attempt).complete; n += 1) {
    const question = getNextQuestion(attempt, realBank);
    assert.ok(question, `Bank unexpectedly exhausted for ${seed}`);
    attempt = submitAnswer(attempt, question, answerer(question, n));
  }
  assert.equal(getProgress(attempt).complete, true);
  return { attempt, report: getReport(attempt, realBank) };
}

test('real bank completes routes and every awarded level meets the evidence rule', t => {
  const exposure = Object.fromEntries(['language', 'reading', 'listening'].map(domain => [domain, Array(5).fill(0)]));
  let checked = 0;
  for (const mode of ['quick', 'full']) {
    for (let seed = 0; seed < 20; seed += 1) {
      for (const strategy of ['correct', 'wrong', 'alternating', 'unknown']) {
        const { attempt, report } = simulate(QUESTIONS, mode, `${mode}-${seed}-${strategy}`, (question, index) => {
          if (strategy === 'correct' || (strategy === 'alternating' && index % 2 === 0)) return question.answer;
          return strategy === 'unknown' ? null : (question.answer + 1) % question.options.length;
        });
        for (const answer of attempt.answers) exposure[answer.domain][answer.level] += 1;
        for (const domain of Object.values(report.domains)) {
          if (domain.level === null) continue;
          const evidence = domain.evidenceByLevel[domain.level];
          assert.ok(evidence.total >= 3);
          assert.ok(evidence.correct >= 3);
          assert.ok(evidence.correct / evidence.total >= 0.75);
        }
        checked += 1;
      }
    }
  }
  assert.ok(Object.values(exposure).every(levels => levels.every(count => count > 0)));
  t.diagnostic(JSON.stringify({ routes: checked, exposureByLevel: exposure }));
});

test('synthetic uniform guessing does not routinely produce high-level support', t => {
  const trials = 1000;
  const random = randomGenerator(20261021);
  const counts = { anyLevel: 0, b2OrC1: 0, c1: 0, noLevel: 0 };
  for (let trial = 0; trial < trials; trial += 1) {
    const { report } = simulate(QUESTIONS, 'full', `guess-${trial}`, question => Math.floor(random() * question.options.length));
    const levels = Object.values(report.domains).map(domain => domain.level).filter(level => level !== null);
    if (levels.length) counts.anyLevel += 1;
    else counts.noLevel += 1;
    if (levels.some(level => level >= 3)) counts.b2OrC1 += 1;
    if (levels.includes(4)) counts.c1 += 1;
  }
  // These are regression ceilings for this synthetic null model, not evidence
  // of real-world specificity, calibrated accuracy, or CEFR validity.
  assert.ok(counts.b2OrC1 / trials < 0.03);
  assert.ok(counts.c1 / trials < 0.01);
  t.diagnostic(JSON.stringify({ model: 'uniform-option-guessing', trials, counts }));
});

test('synthetic mastery profiles show aggregate sensitivity without claiming validity', t => {
  const summaries = [];
  const trialsPerProfile = 150;
  for (let ability = 0; ability <= 4; ability += 1) {
    const random = randomGenerator(44721);
    let evidenceIndex = 0;
    let supportedDomains = 0;
    for (let trial = 0; trial < trialsPerProfile; trial += 1) {
      const { report } = simulate(QUESTIONS, 'full', `mastery-${trial}`, question => {
        // Explicit toy model: 95% correct up to the assumed boundary and
        // chance-level performance above it. This does not model real pupils.
        const p = question.level <= ability ? 0.95 : 1 / question.options.length;
        return random() < p ? question.answer : (question.answer + 1) % question.options.length;
      });
      for (const domain of Object.values(report.domains)) {
        evidenceIndex += domain.level ?? -1;
        if (domain.level !== null) supportedDomains += 1;
      }
    }
    summaries.push({ assumedBoundary: LEVEL_LABELS[ability], meanEvidenceIndex: evidenceIndex / (trialsPerProfile * 3), supportedDomains, trials: trialsPerProfile });
  }
  for (let i = 1; i < summaries.length; i += 1) {
    assert.ok(summaries[i].meanEvidenceIndex > summaries[i - 1].meanEvidenceIndex,
      `Aggregate synthetic sensitivity failed at ${summaries[i].assumedBoundary}`);
  }
  t.diagnostic(JSON.stringify({ model: 'toy-mastery-boundary', summaries }));
});
