/**
 * Preview-only, deterministic placement heuristic. This is not a calibrated
 * CEFR examination. The production scorer and private item keys belong on a
 * server; this local preview deliberately makes no security claim.
 */
export const LEVEL_LABELS = Object.freeze(['A1', 'A2', 'B1', 'B2', 'C1']);
export const ENGINE_VERSION = 2;
const DOMAINS = Object.freeze(['language', 'reading', 'listening']);
const LIMITS = Object.freeze({
  quick: Object.freeze({ language: 6, reading: 6, listening: 0 }),
  full: Object.freeze({ language: 12, reading: 9, listening: 9 }),
});
const CAVEAT = 'This is an unvalidated placement heuristic for a working preview. It estimates only the online skills sampled. Speaking and writing require teacher assessment; these results are not an official CEFR or IELTS score.';
// A conservative editorial rule, not a calibrated cut score. Three items are
// a minimum evidence safeguard; they are not sufficient to establish validity.
const MIN_LEVEL_OBSERVATIONS = 3;
const MIN_LEVEL_CORRECT = 3;
const MIN_LEVEL_PROPORTION = 0.75;

function hash(value) {
  let result = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    result ^= value.charCodeAt(i);
    result = Math.imul(result, 16777619);
  }
  return result >>> 0;
}

function validQuestion(question) {
  return question && typeof question === 'object'
    && typeof question.id === 'string' && question.id.length > 0
    && Number.isInteger(question.level) && question.level >= 0 && question.level <= 4
    && DOMAINS.includes(question.domain)
    && typeof question.prompt === 'string'
    && Array.isArray(question.options) && question.options.length >= 2
    && question.options.every(option => typeof option === 'string')
    && Number.isInteger(question.answer)
    && question.answer >= 0 && question.answer < question.options.length;
}

function itemVersion(question) {
  return String(hash(JSON.stringify([
    question.version ?? null, question.id, question.level, question.domain,
    question.prompt, question.options, question.answer, question.passage ?? null,
    question.transcript ?? null, question.audio ?? null,
  ])));
}

function basicAttempt(value) {
  return value && typeof value === 'object' && !Array.isArray(value)
    && value.version === ENGINE_VERSION && Object.hasOwn(LIMITS, value.mode)
    && typeof value.seed === 'string' && value.seed.length > 0 && value.seed.length <= 128
    && Array.isArray(value.answers) && value.answers.length <= 30;
}

function assertBasic(attempt) {
  if (!basicAttempt(attempt)) throw new TypeError('Invalid or unsupported assessment attempt.');
  const seen = new Set();
  const counts = { language: 0, reading: 0, listening: 0 };
  for (const answer of attempt.answers) {
    if (!answer || typeof answer.itemId !== 'string' || seen.has(answer.itemId)
      || !DOMAINS.includes(answer.domain) || typeof answer.correct !== 'boolean'
      || !Number.isInteger(answer.level) || answer.level < 0 || answer.level > 4
      || !(answer.response === null || (Number.isInteger(answer.response) && answer.response >= 0))
      || typeof answer.itemVersion !== 'string') {
      throw new TypeError('Invalid saved answer.');
    }
    const active = DOMAINS.find(domain => counts[domain] < LIMITS[attempt.mode][domain]);
    if (active !== answer.domain) throw new TypeError('Saved sections are out of order.');
    counts[answer.domain] += 1;
    seen.add(answer.itemId);
  }
}

export function createAttempt(mode = 'full', seed = 'preview') {
  if (!Object.hasOwn(LIMITS, mode)) throw new TypeError('Mode must be quick or full.');
  const normalizedSeed = String(seed);
  if (!normalizedSeed || normalizedSeed.length > 128) throw new TypeError('Invalid assessment seed.');
  return { version: ENGINE_VERSION, mode, seed: normalizedSeed, answers: [] };
}

function targetLevel(answers) {
  if (answers.length === 0) return 1;
  if (answers.length === 1) return 2;
  const probesCorrect = Number(answers[0].correct) + Number(answers[1].correct);
  let level = probesCorrect === 2 ? 2 : probesCorrect === 0 ? 0 : 1;
  for (let start = 2; start + 3 <= answers.length; start += 3) {
    const correct = answers.slice(start, start + 3).filter(answer => answer.correct).length;
    if (correct === 3) level = Math.min(4, level + 1);
    else if (correct <= 1) level = Math.max(0, level - 1);
  }
  return level;
}

export function getProgress(attempt) {
  assertBasic(attempt);
  const domains = Object.fromEntries(DOMAINS.map(domain => {
    const answered = attempt.answers.filter(answer => answer.domain === domain).length;
    const total = LIMITS[attempt.mode][domain];
    return [domain, { answered, total, remaining: total - answered, complete: answered === total, included: total > 0 }];
  }));
  const total = Object.values(LIMITS[attempt.mode]).reduce((sum, count) => sum + count, 0);
  const answered = attempt.answers.length;
  return {
    answered, total, remaining: total - answered,
    percent: Math.round(answered / total * 100), complete: answered === total,
    currentDomain: DOMAINS.find(domain => !domains[domain].complete) ?? null,
    domains,
  };
}

export function getNextQuestion(attempt, questions) {
  assertBasic(attempt);
  if (!Array.isArray(questions)) throw new TypeError('A question bank is required.');
  const progress = getProgress(attempt);
  if (progress.complete) return null;
  const answeredIds = new Set(attempt.answers.map(answer => answer.itemId));
  const domainAnswers = attempt.answers.filter(answer => answer.domain === progress.currentDomain);
  const target = targetLevel(domainAnswers);
  const unique = new Map();
  for (const question of questions) {
    if (validQuestion(question) && question.domain === progress.currentDomain && !answeredIds.has(question.id)) {
      if (!unique.has(question.id)) unique.set(question.id, question);
    }
  }
  const candidates = [...unique.values()];
  candidates.sort((left, right) => {
    const distance = Math.abs(left.level - target) - Math.abs(right.level - target);
    if (distance !== 0) return distance;
    const order = hash(`${attempt.seed}:${left.id}`) - hash(`${attempt.seed}:${right.id}`);
    return order || left.id.localeCompare(right.id, 'en');
  });
  // A depleted bank returns null; progress remains incomplete. Never invent
  // responses or silently certify a shorter assessment as complete.
  return candidates[0] ?? null;
}

export function submitAnswer(attempt, question, answerIndex) {
  assertBasic(attempt);
  if (!validQuestion(question)) throw new TypeError('Invalid question.');
  if (!(answerIndex === null || (Number.isInteger(answerIndex) && answerIndex >= 0 && answerIndex < question.options.length))) {
    throw new RangeError('Choose an available answer or null for I do not know.');
  }
  const previous = attempt.answers.find(answer => answer.itemId === question.id);
  if (previous) {
    if (previous.response === answerIndex && previous.itemVersion === itemVersion(question)) return attempt;
    throw new Error('This question has already been submitted.');
  }
  const progress = getProgress(attempt);
  if (progress.complete) throw new Error('The assessment is already complete.');
  if (question.domain !== progress.currentDomain) throw new Error('This question belongs to a different section.');
  const answer = {
    itemId: question.id, response: answerIndex,
    correct: answerIndex !== null && answerIndex === question.answer,
    level: question.level, domain: question.domain, itemVersion: itemVersion(question),
  };
  return { ...attempt, answers: [...attempt.answers, answer] };
}

export function validateAttempt(value, questions) {
  try {
    assertBasic(value);
    if (!Array.isArray(questions)) return false;
    const bank = new Map();
    for (const question of questions) {
      if (!validQuestion(question) || bank.has(question.id)) return false;
      bank.set(question.id, question);
    }
    let replay = createAttempt(value.mode, value.seed);
    for (const answer of value.answers) {
      const question = bank.get(answer.itemId);
      if (!question || answer.level !== question.level || answer.domain !== question.domain
        || answer.itemVersion !== itemVersion(question)
        || answer.correct !== (answer.response !== null && answer.response === question.answer)
        || (answer.response !== null && answer.response >= question.options.length)) return false;
      // Reloads resume the same route; changed bank membership requires a new
      // attempt rather than mixing question sets and scoring assumptions.
      if (getNextQuestion(replay, questions)?.id !== question.id) return false;
      replay = submitAnswer(replay, question, answer.response);
    }
    return true;
  } catch {
    return false;
  }
}

function domainReport(domain, answers, required) {
  const total = answers.length;
  const correct = answers.filter(answer => answer.correct).length;
  const base = {
    domain, assessed: total > 0, included: required > 0, complete: total === required && required > 0,
    provisional: true, total, correct, required, skipped: answers.filter(answer => answer.response === null).length,
    level: null, label: required === 0 ? 'Not assessed in this format' : 'Not yet assessed',
    range: null, belowFloor: false, upperBoundaryPending: false, upperBoundaryLevel: null,
    evidenceStatus: total === 0 ? 'not_assessed' : 'insufficient',
    rangeKind: 'sampled_evidence_boundary',
    evidenceByLevel: LEVEL_LABELS.map((label, level) => ({
      level, label, total: answers.filter(answer => answer.level === level).length,
      correct: answers.filter(answer => answer.level === level && answer.correct).length,
    })),
  };
  if (total === 0) return base;
  if (total < 3) return { ...base, label: 'Not enough evidence yet' };
  if (correct === 0) {
    const sawFloor = answers.some(answer => answer.level === 0);
    return { ...base, belowFloor: sawFloor, evidenceStatus: sawFloor ? 'floor_not_demonstrated' : 'insufficient', label: sawFloor ? 'A1 not yet demonstrated' : 'Not enough evidence at the lower levels', range: sawFloor ? { lower: null, upper: 0, label: 'Below A1–A1; teacher confirmation needed' } : null };
  }
  const supported = base.evidenceByLevel.filter(row => row.total >= MIN_LEVEL_OBSERVATIONS
    && row.correct >= MIN_LEVEL_CORRECT && row.correct / row.total >= MIN_LEVEL_PROPORTION);
  const level = supported.length ? supported[supported.length - 1].level : null;
  const higherSparse = base.evidenceByLevel.filter(row => row.level > (level ?? -1)
    && row.correct > 0 && row.total < MIN_LEVEL_OBSERVATIONS);
  const upperBoundaryPending = higherSparse.length > 0;
  const upperBoundaryLevel = upperBoundaryPending ? higherSparse[higherSparse.length - 1].level : null;
  if (level === null) {
    return { ...base, upperBoundaryPending, upperBoundaryLevel,
      label: 'Not enough consistent evidence for a level', evidenceStatus: 'insufficient' };
  }
  const lower = level;
  const upper = upperBoundaryLevel ?? level;
  return { ...base, level, upperBoundaryPending, upperBoundaryLevel, evidenceStatus: 'minimum_support_met',
    label: `${LEVEL_LABELS[level]} — provisional indication`,
    range: { lower, upper, label: lower === upper ? LEVEL_LABELS[lower] : `${LEVEL_LABELS[lower]}–${LEVEL_LABELS[upper]}` } };
}

export function getReport(attempt, questions) {
  if (!validateAttempt(attempt, questions)) throw new TypeError('Cannot report an invalid or incompatible saved attempt.');
  const progress = getProgress(attempt);
  const domains = Object.fromEntries(DOMAINS.map(domain => [domain, domainReport(
    domain, attempt.answers.filter(answer => answer.domain === domain), LIMITS[attempt.mode][domain],
  )]));
  const assessed = Object.values(domains).filter(domain => domain.assessed);
  const estimated = assessed.filter(domain => domain.level !== null);
  const allBelowFloor = assessed.length > 0 && assessed.every(domain => domain.belowFloor);
  let overall = { label: 'Not enough evidence yet', level: null, range: null, provisional: true, belowFloor: false,
    upperBoundaryPending: assessed.some(domain => domain.upperBoundaryPending),
    insufficientDomains: assessed.filter(domain => domain.evidenceStatus === 'insufficient').map(domain => domain.domain),
    rangeKind: 'sampled_evidence_boundary',
  };
  if (allBelowFloor) {
    overall = { ...overall, label: 'A1 not yet demonstrated', belowFloor: true, range: { lower: null, upper: 0, label: 'Below A1–A1; teacher confirmation needed' } };
  } else if (estimated.length) {
    const lower = assessed.some(domain => domain.belowFloor) ? null : Math.min(...estimated.map(domain => domain.range.lower));
    const upper = Math.max(...estimated.map(domain => domain.range.upper));
    const rangeLabel = `${lower === null ? 'Below A1' : LEVEL_LABELS[lower]}–${LEVEL_LABELS[upper]}`;
    overall = { ...overall, label: `Online skill range: ${rangeLabel}`, range: { lower, upper, label: rangeLabel } };
  }
  return {
    version: ENGINE_VERSION, mode: attempt.mode, provisional: true,
    complete: progress.complete, exhausted: !progress.complete && getNextQuestion(attempt, questions) === null,
    answered: progress.answered, total: progress.total,
    correct: attempt.answers.filter(answer => answer.correct).length,
    overall, domains, caveat: CAVEAT,
  };
}
