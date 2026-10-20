import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {mkdir, readFile, writeFile} from 'node:fs/promises';
import {BANK_VERSION, QUESTIONS} from '../dist/bank.js';
import {createAttempt, getNextQuestion, submitAnswer, validateAttempt} from '../dist/engine.js';

const require = createRequire(import.meta.url);
const {chromium} = require('C:/Users/dajra/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const BASE = process.env.PREVIEW_URL || 'http://127.0.0.1:4173';
const STORE = 'nurkanat-diagnostic-preview-v1';
const LANG = 'nurkanat-language';
const browser = await chromium.launch({headless: true, executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
await mkdir('artifacts', {recursive: true});
const results = [];

function fixture(mode, count, seed = 'resilience-fixture') {
  let attempt = createAttempt(mode, seed);
  for (let index = 0; index < count; index++) {
    const question = getNextQuestion(attempt, QUESTIONS);
    // Include both right answers and errors so the report exercises both cases.
    const response = index % 4 === 0 ? null : question.answer;
    attempt = submitAnswer(attempt, question, response);
  }
  assert.ok(validateAttempt(attempt, QUESTIONS), 'Generated fixture must be a valid attempt');
  return {bank: BANK_VERSION, attempt, heard: []};
}

async function openPage(context, saved = undefined) {
  const page = await context.newPage();
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  await page.addInitScript(({saved, store, language}) => {
    localStorage.setItem(language, 'en');
    if (saved !== undefined) localStorage.setItem(store, typeof saved === 'string' ? saved : JSON.stringify(saved));
  }, {saved, store: STORE, language: LANG});
  await page.goto(BASE, {waitUntil: 'domcontentloaded'});
  await page.locator('.hero h1').waitFor();
  return {page, pageErrors};
}

async function readSaved(page) {
  return page.evaluate(key => JSON.parse(localStorage.getItem(key) || 'null'), STORE);
}

async function startQuick(page) {
  await page.locator('[data-action="prepare"][data-mode="quick"]').click();
  await page.locator('[data-action="start"]').click();
  await page.locator('.question-title').waitFor();
}

async function check(name, work) {
  const context = await browser.newContext({viewport: {width: 1100, height: 850}, acceptDownloads: true});
  try {
    const detail = await work(context);
    results.push({name, passed: true, detail});
    console.log(`PASS ${name}`);
  } catch (error) {
    const message = error.stack || String(error);
    results.push({name, passed: false, error: message});
    const page = context.pages().at(-1);
    if (page) await page.screenshot({path: `artifacts/resilience-${name}.png`, fullPage: true}).catch(() => {});
    console.error(`FAIL ${name}: ${error.message}`);
  } finally {
    await context.close();
  }
}

try {
  await check('stale-tab-preserves-newer-answers', async context => {
    const {page: primary, pageErrors: primaryErrors} = await openPage(context);
    await startQuick(primary);
    const {page: stale, pageErrors: staleErrors} = await openPage(context);
    await stale.locator('[data-action="resume"]').click();
    await stale.locator('[data-action="answer"][data-index="1"]').click();
    await primary.locator('[data-action="answer"][data-index="0"]').click();
    await primary.locator('[data-action="submit"]').click();
    await stale.locator('#reload-page').waitFor();
    const newer = await readSaved(primary);
    assert.equal(newer.attempt.answers.length, 1);
    await stale.keyboard.press('Escape');
    await stale.locator('[data-action="answer"][data-index="2"]').click();
    assert.equal(await stale.locator('[data-action="submit"]').isDisabled(), true, 'Closing the conflict dialog must not permit a stale answer');
    assert.deepEqual(await readSaved(stale), newer, 'Selecting in a stale tab must not alter saved answers');

    // A language re-render must not permit a stale state to overwrite the newer attempt.
    await stale.locator('[data-action="language"]').click();
    const reRenderedEnabled = await stale.locator('[data-action="submit"]').isEnabled();
    if (reRenderedEnabled) {
      await stale.locator('[data-action="submit"]').click();
      await stale.locator('.hero h1').waitFor();
    } else {
      await stale.locator('[data-action="pause"]').click();
      assert.deepEqual(await readSaved(stale), newer, 'Pausing a stale tab must preserve the newer attempt');
      await stale.reload({waitUntil: 'domcontentloaded'});
      await stale.locator('.hero h1').waitFor();
    }
    assert.deepEqual(await readSaved(stale), newer, 'Re-render/submission or pause must preserve the newer attempt');
    await stale.locator('[data-action="resume"]').click();
    assert.equal(await stale.locator('[role="progressbar"]').getAttribute('aria-valuenow'), '1', 'Reload must restore the newest response');
    assert.deepEqual(primaryErrors, []);
    assert.deepEqual(staleErrors, []);
    return {newerAnswerCount: 1, dialogDismissalSafe: true, languageRerenderSubmitWasEnabled: reRenderedEnabled};
  });

  await check('storage-failure-keeps-in-memory-progress', async context => {
    const {page, pageErrors} = await openPage(context);
    await page.evaluate(key => {
      const nativeSet = Storage.prototype.setItem;
      Storage.prototype.setItem = function(name, value) {
        if (name === key) throw new DOMException('Test quota exceeded', 'QuotaExceededError');
        return nativeSet.call(this, name, value);
      };
    }, STORE);
    await startQuick(page);
    assert.match(await page.locator('.save-status').innerText(), /Could not save/);
    for (let index = 0; index < 3; index++) {
      await page.locator('[data-action="unknown"]').click();
      await page.locator('[data-action="submit"]').click();
    }
    assert.equal(await page.locator('[role="progressbar"]').getAttribute('aria-valuenow'), '3');
    assert.match(await page.locator('.save-status').innerText(), /Could not save/);
    assert.equal(await readSaved(page), null, 'Storage failure must not be falsely represented as a persistent save');
    const prompt = await page.locator('.question-title').innerText();
    await page.locator('[data-action="pause"]').click();
    await page.locator('[data-action="resume"]').click();
    assert.equal(await page.locator('.question-title').innerText(), prompt, 'Same-tab pause/resume should use the in-memory attempt');
    assert.deepEqual(pageErrors, []);
    return {answeredInMemory: 3, persistentSave: false, warningVisible: true};
  });

  await check('failed-audio-cannot-score-unheard-response', async context => {
    const saved = fixture('full', 21, 'resilience-audio');
    assert.equal(getNextQuestion(saved.attempt, QUESTIONS).domain, 'listening');
    let releaseAudio;
    const audioGate = new Promise(resolve => { releaseAudio = resolve; });
    await context.route('**/audio/**', async route => {
      await audioGate;
      await route.abort('failed').catch(() => {});
    });
    const {page, pageErrors} = await openPage(context, saved);
    await page.locator('[data-action="resume"]').click();
    await page.locator('[data-action="answer"][data-index="0"]').click();
    assert.equal(await page.locator('[data-action="submit"]').isDisabled(), true, 'Answering before playback must be disabled');
    await page.locator('#question-audio').evaluate(audio => {
      window.__resiliencePlayOutcome = 'pending';
      audio.play().then(() => { window.__resiliencePlayOutcome = 'resolved'; }).catch(error => { window.__resiliencePlayOutcome = error.name; });
    });
    releaseAudio();
    await page.locator('#audio-error').waitFor({state: 'visible'});
    const current = getNextQuestion(saved.attempt, QUESTIONS);
    const playedSeconds = await page.locator('#question-audio').evaluate(audio => audio.currentTime);
    const enabledAfterFailure = await page.locator('[data-action="submit"]').isEnabled();
    if (enabledAfterFailure) await page.locator('[data-action="submit"]').click();
    const after = await readSaved(page);
    const detail = {question: current.id, playedSeconds, enabledAfterFailure, answeredBefore: 21, answeredAfter: after.attempt.answers.length, heard: after.heard};
    assert.equal(after.attempt.answers.length, 21, `Unheard audio was scored: ${JSON.stringify(detail)}`);
    assert.equal(enabledAfterFailure, false, `Failed audio enabled submission: ${JSON.stringify(detail)}`);
    assert.equal(after.heard.includes(current.id), false, 'A failed play request must not count as heard');
    assert.deepEqual(pageErrors, []);
    return detail;
  });

  await check('tampered-or-invalid-attempts-recover-safely', async context => {
    const valid = fixture('quick', 2, 'resilience-tampered');
    const cases = [
      ['malformed-json', '{not valid JSON'],
      ['wrong-bank', {...valid, bank: 'not-this-bank'}],
      ['wrong-engine-version', {...valid, attempt: {...valid.attempt, version: -1}}],
      ['invalid-mode', {...valid, attempt: {...valid.attempt, mode: '__proto__'}}],
      ['invalid-answer-id', {...valid, attempt: {...valid.attempt, answers: valid.attempt.answers.map((answer, index) => index ? answer : {...answer, itemId: 'does-not-exist'})}}],
      ['forged-correctness', {...valid, attempt: {...valid.attempt, answers: valid.attempt.answers.map((answer, index) => index ? answer : {...answer, correct: !answer.correct})}}],
      ['duplicate-answer', {...valid, attempt: {...valid.attempt, answers: [valid.attempt.answers[0], valid.attempt.answers[0]]}}],
      ['invalid-answer-shape', {...valid, attempt: {...valid.attempt, answers: 'unexpected'}}],
    ];
    for (const [name, saved] of cases) {
      const {page, pageErrors} = await openPage(context, saved);
      assert.equal(await page.locator('[data-action="resume"]').count(), 0, `${name} must not expose a resumable attempt`);
      await startQuick(page);
      const fresh = await readSaved(page);
      assert.ok(validateAttempt(fresh.attempt, QUESTIONS), `${name} must allow a valid fresh start`);
      assert.equal(fresh.attempt.answers.length, 0);
      assert.deepEqual(pageErrors, [], `${name} must not cause uncaught errors`);
      await page.close();
    }
    return {recoveredCases: cases.map(([name]) => name)};
  });

  await check('english-feedback-and-seven-day-download', async context => {
    const saved = fixture('full', 30, 'resilience-report');
    const {page, pageErrors} = await openPage(context, saved);
    await page.locator('[data-action="resume"]').click();
    await page.locator('.result-hero').waitFor();
    const reviews = page.locator('.answer-review > .review-item');
    assert.equal(await reviews.count(), saved.attempt.answers.length);
    for (let index = 0; index < saved.attempt.answers.length; index++) {
      const answer = saved.attempt.answers[index];
      const question = QUESTIONS.find(item => item.id === answer.itemId);
      const review = reviews.nth(index);
      await review.locator('> summary').click();
      assert.equal(await review.locator('.review-explanation').innerText(), question.explanationEn, `${question.id}: complete English explanation`);
      assert.ok((await review.locator('> summary').innerText()).includes(question.subskillEn), `${question.id}: English subskill label`);
      assert.ok((await review.locator('.review-body').innerText()).includes(question.options[question.answer]), `${question.id}: correct answer displayed`);
    }
    assert.equal(await page.locator('.practice-days > details').count(), 7);
    const downloadPromise = page.waitForEvent('download');
    await page.locator('[data-action="download"]').click();
    const download = await downloadPromise;
    assert.equal(download.suggestedFilename(), 'english-profile-en.txt');
    await download.saveAs('artifacts/resilience-report-en.txt');
    const report = await readFile('artifacts/resilience-report-en.txt', 'utf8');
    assert.match(report, /Your first week of practice/);
    assert.match(report, /1\. Understand your answers/);
    assert.match(report, /7\. Transfer the skill to a new task/);
    assert.match(report, /ANSWER REVIEW/);
    for (const answer of saved.attempt.answers) {
      const question = QUESTIONS.find(item => item.id === answer.itemId);
      assert.ok(report.includes(question.id) && report.includes(question.explanationEn), `${question.id}: full explanation must survive download`);
    }
    assert.ok(!report.includes('undefined'), 'Downloaded report must not contain missing-value placeholders');
    assert.deepEqual(pageErrors, []);
    await page.screenshot({path: 'artifacts/resilience-expanded-feedback-en.png', fullPage: true});
    return {reviewedItems: 30, practiceDays: 7, download: 'artifacts/resilience-report-en.txt'};
  });
} finally {
  await browser.close();
  await writeFile('artifacts/browser-resilience.json', JSON.stringify({passed: results.every(result => result.passed), results}, null, 2));
}

if (results.some(result => !result.passed)) process.exitCode = 1;
