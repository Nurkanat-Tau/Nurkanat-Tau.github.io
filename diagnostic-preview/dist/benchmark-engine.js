export const ATTEMPT_VERSION = 'benchmark-sample-1';
export const STORAGE_KEY = 'nurkanat-benchmark-sample-1';
export const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];
export const DOMAINS = ['language', 'reading', 'listening'];

// Listening is deliberately outside the playable sample until reviewed human
// recordings are delivered. Browser imports are rehearsal takes, never evidence.
export function playableItems(items) {
  return items.filter(item => item.domain === 'language' || item.domain === 'reading');
}

export function createAttempt(bankVersion) {
  return { version: ATTEMPT_VERSION, bankVersion, answers: {}, position: 0, finished: false };
}

export function validateAttempt(candidate, items, bankVersion) {
  if (!candidate || candidate.version !== ATTEMPT_VERSION || candidate.bankVersion !== bankVersion ||
      !candidate.answers || typeof candidate.answers !== 'object' || Array.isArray(candidate.answers) ||
      !Number.isInteger(candidate.position) || typeof candidate.finished !== 'boolean') return false;
  const playable = playableItems(items);
  if (candidate.position < 0 || candidate.position >= playable.length) return false;
  const byId = new Map(playable.map(item => [item.id, item]));
  for (const [id, value] of Object.entries(candidate.answers)) {
    const item = byId.get(id);
    if (!item || !(value === null || (Number.isInteger(value) && value >= 0 && value < item.choices.length))) return false;
  }
  if (candidate.finished && Object.keys(candidate.answers).length !== playable.length) return false;
  return true;
}

export function loadAttempt(raw, items, bankVersion) {
  try {
    const value = JSON.parse(raw);
    return validateAttempt(value, items, bankVersion) ? value : null;
  } catch { return null; }
}

export function recordAnswer(attempt, item, choice, items, bankVersion) {
  if (!validateAttempt(attempt, items, bankVersion)) throw new Error('Invalid attempt');
  const playable = playableItems(items);
  const current = playable[attempt.position];
  if (attempt.finished || current.id !== item.id) throw new Error('Unexpected item');
  if (!(choice === null || (Number.isInteger(choice) && choice >= 0 && choice < current.choices.length))) throw new Error('Invalid choice');
  const answers = { ...attempt.answers, [current.id]: choice };
  const atEnd = attempt.position === playable.length - 1;
  return { ...attempt, answers, position: Math.min(attempt.position + 1, playable.length - 1), finished: atEnd && Object.keys(answers).length === playable.length };
}

export function summarize(attempt, items) {
  const answers = attempt?.answers || {};
  return DOMAINS.map(domain => {
    const selected = items.filter(item => item.domain === domain);
    if (domain === 'listening') return { domain, total: selected.length, answered: 0, correct: 0, skipped: 0, pending: selected.length, status: 'awaiting-human-audio' };
    let answered = 0, correct = 0, skipped = 0;
    for (const item of selected) {
      if (!Object.hasOwn(answers, item.id)) continue;
      if (answers[item.id] === null) skipped++;
      else { answered++; if (answers[item.id] === item.correctIndex) correct++; }
    }
    return { domain, total: selected.length, answered, correct, skipped, pending: selected.length - answered - skipped, status: 'sample-only' };
  });
}

export function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}
