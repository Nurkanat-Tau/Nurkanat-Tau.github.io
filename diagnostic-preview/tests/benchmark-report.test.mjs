import test from 'node:test';
import assert from 'node:assert/strict';
import report from '../dist/benchmark-report.js';

// These checks protect the worked example's evidence and presentation contract.
// They do not validate CEFR assignments, translations, or assessment quality.
const locales = report.availableLocales;
const evidenceFor = content => Object.values(content.evidence).flat();
const nonblank = (value, label) => assert.ok(typeof value === 'string' && value.trim(), label);

function visit(value, callback, path = '$') {
  callback(value, path);
  if (Array.isArray(value)) value.forEach((entry, index) => visit(entry, callback, `${path}[${index}]`));
  else if (value && typeof value === 'object') {
    for (const [key, entry] of Object.entries(value)) visit(entry, callback, `${path}.${key}`);
  }
}

function compareLocaleStructure(left, right, path = '$') {
  assert.equal(typeof left, typeof right, `${path}: locale type mismatch`);
  assert.equal(Array.isArray(left), Array.isArray(right), `${path}: locale container mismatch`);
  if (Array.isArray(left)) {
    assert.equal(left.length, right.length, `${path}: a locale lost an entry`);
    left.forEach((entry, index) => compareLocaleStructure(entry, right[index], `${path}[${index}]`));
  } else if (left && typeof left === 'object') {
    assert.deepEqual(Object.keys(left).sort(), Object.keys(right).sort(), `${path}: locale keys differ`);
    for (const key of Object.keys(left)) compareLocaleStructure(left[key], right[key], `${path}.${key}`);
  } else if (typeof left === 'string') {
    nonblank(left, `${path}: empty Russian text`);
    nonblank(right, `${path}: empty English text`);
    // Identity and evidence linkage must not change with the interface language.
    if (/\.(?:id|skill|level|role|speaker)$|\.evidenceIds\[\d+\]$/.test(path)) {
      assert.equal(left, right, `${path}: locale changed an assessment fact`);
    }
  } else {
    assert.equal(left, right, `${path}: locale changed a numeric or boolean fact`);
  }
}

test('the example cannot silently become a completed assessment or an audio-backed review', () => {
  assert.equal(report.kind, 'fictional-worked-example');
  assert.equal(report.isActualAssessment, false);
  assert.equal(report.humanReviewCompleted, false);
  assert.equal(report.hasAudioRecordings, false);
  for (const locale of locales) {
    const content = report.locales[locale];
    nonblank(content.exampleNotice, `${locale}: missing visible example notice`);
    for (const entry of [...content.evidence.listening, ...content.evidence.speaking, ...content.evidence.writing]) {
      nonblank(entry.sourceNote, `${locale}/${entry.id}: missing source limitation`);
      visit(entry, (value, path) => {
        assert.ok(!/\.(?:audioUrl|audioSrc|recordingUrl|timestamp|startTime|endTime|reviewedBy|reviewedAt)$/i.test(path), `${path}: fabricated recording/review metadata`);
      });
    }
    for (const entry of content.evidence.speaking) {
      assert.ok(entry.turns.some(turn => turn.role === 'learner'), `${entry.id}: no learner excerpt`);
      assert.ok(entry.turns.some(turn => turn.role === 'interviewer'), `${entry.id}: no interaction context`);
      entry.turns.forEach(turn => nonblank(turn.text, `${entry.id}: empty speaking turn`));
      nonblank(entry.unavailableEvidence, `${entry.id}: unavailable pronunciation/fluency evidence must be visible`);
    }
  }
});

test('Russian and English retain the same evidence, structure, and original English samples', () => {
  assert.equal(report.defaultLocale, 'ru');
  assert.deepEqual([...locales].sort(), ['en', 'ru']);
  assert.deepEqual(Object.keys(report.locales).sort(), ['en', 'ru']);
  compareLocaleStructure(report.locales.ru, report.locales.en);
  assert.doesNotMatch(JSON.stringify(report.locales.en), /[\u0400-\u04ff]/, 'English switch left Cyrillic feedback');
  const russian = new Map(evidenceFor(report.locales.ru).map(entry => [entry.id, entry]));
  for (const english of evidenceFor(report.locales.en)) {
    const translated = russian.get(english.id);
    // Interface translation must not rewrite the evidence used to justify feedback.
    for (const field of ['passage', 'context', 'transcript', 'turns', 'original', 'options']) {
      if (field in english) assert.deepEqual(translated[field], english[field], `${english.id}/${field}: original sample changed`);
    }
    if (english.annotations) {
      assert.deepEqual(translated.annotations.map(x => x.quote), english.annotations.map(x => x.quote), `${english.id}: annotation quotes changed`);
    }
  }
});

test('every profile, priority, strength, and rubric observation resolves to displayed evidence', () => {
  for (const locale of locales) {
    const content = report.locales[locale];
    const evidence = evidenceFor(content);
    const byId = new Map(evidence.map(entry => [entry.id, entry]));
    assert.equal(byId.size, evidence.length, `${locale}: duplicate evidence IDs`);
    for (const entry of evidence) {
      nonblank(entry.id, 'evidence ID');
      const source = entry.passage ?? entry.context ?? entry.transcript ?? entry.original ?? entry.turns?.map(turn => turn.text).join('\n');
      nonblank(source, `${entry.id}: referenced evidence has no displayed source`);
    }
    for (const observation of [...content.profile, ...content.strengths, ...content.priorities, ...content.rubricRationale]) {
      assert.ok(observation.evidenceIds.length > 0, `${observation.id ?? observation.skill}: unsupported observation`);
      for (const id of observation.evidenceIds) assert.ok(byId.has(id), `${locale}: dangling evidence reference ${id}`);
    }
    visit(content, value => {
      if (typeof value === 'string') {
        for (const [reference] of value.matchAll(/\bEX-[RLSWU]\d+\b/g)) assert.ok(byId.has(reference), `${locale}: dangling prose reference ${reference}`);
      }
    });
    assert.ok(content.strengths.length > 0 && content.strengths.length <= 3);
    assert.ok(content.priorities.length > 0 && content.priorities.length <= 3);
    content.priorities.forEach(priority => {
      nonblank(priority.nextAction, `${priority.id}: no usable action`);
      nonblank(priority.successCheck, `${priority.id}: no way to check progress`);
    });
  }
});

test('writing annotations quote the actual uncorrected submission exactly and unambiguously', () => {
  for (const locale of locales) {
    const ids = new Set();
    for (const writing of report.locales[locale].evidence.writing) {
      nonblank(writing.instruction, `${writing.id}: task context missing`);
      nonblank(writing.original, `${writing.id}: original submission missing`);
      assert.ok(writing.annotations.length > 0, `${writing.id}: corrections missing`);
      for (const annotation of writing.annotations) {
        assert.ok(!ids.has(annotation.id), `duplicate annotation ${annotation.id}`);
        ids.add(annotation.id);
        nonblank(annotation.quote, `${annotation.id}: empty anchor`);
        const first = writing.original.indexOf(annotation.quote);
        assert.ok(first >= 0, `${annotation.id}: quote no longer occurs in original`);
        assert.equal(writing.original.indexOf(annotation.quote, first + 1), -1, `${annotation.id}: ambiguous repeated anchor`);
        nonblank(annotation.suggestion, `${annotation.id}: missing suggestion`);
        assert.notEqual(annotation.suggestion, annotation.quote, `${annotation.id}: no actual feedback`);
        nonblank(annotation.note, `${annotation.id}: correction rationale missing`);
      }
    }
  }
});

test('worked task answers remain within their choices and preserve both success and error evidence', () => {
  for (const locale of locales) {
    const objective = evidenceFor(report.locales[locale]).filter(entry => entry.options);
    assert.ok(objective.length > 0);
    for (const entry of objective) {
      assert.equal(new Set(entry.options).size, entry.options.length, `${entry.id}: duplicate choices`);
      for (const field of ['key', 'learnerAnswer']) {
        assert.ok(Number.isInteger(entry[field]) && entry[field] >= 0 && entry[field] < entry.options.length, `${entry.id}/${field}: invalid answer index`);
      }
      nonblank(entry.question, `${entry.id}: missing question`);
      nonblank(entry.interpretation, `${entry.id}: missing interpretation`);
    }
    const listening = report.locales[locale].evidence.listening;
    assert.ok(listening.some(entry => entry.key === entry.learnerAnswer), 'listening needs the successful explicit-detail example');
    assert.ok(listening.some(entry => entry.key !== entry.learnerAnswer), 'listening priority needs the unsuccessful revised-plan example');
  }
});

test('the deliberately uneven profile stays separate from conditional course placement', () => {
  assert.equal(report.displayOverallLevel, false);
  for (const locale of locales) {
    const content = report.locales[locale];
    const skills = Object.fromEntries(content.profile.map(skill => [skill.id, skill.level]));
    assert.equal(Object.keys(skills).length, content.profile.length, 'duplicate skill');
    assert.deepEqual(skills, { reading: 'B2', listening: 'A2', speaking: 'B1', writing: 'B1', language: 'B1' });
    nonblank(content.summary.noOverall, `${locale}: profile interpretation missing`);
    visit(content, (_value, path) => {
      assert.ok(!/\.(?:overallLevel|overallScore|aggregateLevel|aggregateScore|averageLevel|averageScore|levelRange|minLevel|maxLevel)$/i.test(path), `${path}: an aggregate replaced the skill profile`);
    });
    assert.ok(content.placement.requiredBeforeConfirmation.length > 0, 'placement must remain conditional');
    content.placement.requiredBeforeConfirmation.forEach(condition => nonblank(condition, 'empty placement condition'));
    nonblank(content.placement.ifUnmet, 'missing alternative when conditions are unmet');
    nonblank(content.placement.b2Readiness, 'reading strength must not automatically establish B2 class readiness');
    nonblank(content.courseFit.note, 'course-duration qualification missing');
    nonblank(content.clarification.separation, 'result clarification must remain separate from course purchase');
  }
});

test('the practice route has four usable weeks with a check and an adaptation', () => {
  for (const locale of locales) {
    const weeks = report.locales[locale].fourWeekPlan.weeks;
    assert.deepEqual(weeks.map(week => week.week), [1, 2, 3, 4]);
    for (const week of weeks) {
      nonblank(week.focus, 'weekly focus');
      assert.ok(week.activities.length > 0, `week ${week.week}: no activities`);
      week.activities.forEach(activity => nonblank(activity, 'empty practice activity'));
      nonblank(week.check, `week ${week.week}: no progress check`);
      nonblank(week.adapt, `week ${week.week}: no adaptation`);
    }
  }
});
