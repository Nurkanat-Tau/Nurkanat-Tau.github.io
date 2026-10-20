// Mocked browser lifecycle checks. These do not record or validate a real human voice.
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import assert from 'node:assert/strict';
const require = createRequire(import.meta.url);
const { chromium } = require('C:/Users/dajra/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const source = await readFile(new URL('../dist/recording-room.js', import.meta.url), 'utf8');
const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', request.url === '/recording-room.js' ? 'text/javascript' : 'text/html');
  response.end(request.url === '/recording-room.js' ? source : '<!doctype html><div id="room"></div>');
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
let browser;
try {
  browser = await chromium.launch({ headless: true, executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe' });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(`http://127.0.0.1:${server.address().port}`);
  await page.evaluate(async () => {
    window.roomModule = await import('/recording-room.js');
    window.clips = [{ id: 'human-a1-monologue-01', level: 'A1', type: 'monologue', script: 'A real script.', scriptVersion: 'v1' }];
    window.stopCalls = 0; window.permissionCalls = 0; window.mockMode = 'deny';
    window.makeStream = () => {
      const track = new EventTarget();
      track.stop = () => { window.stopCalls++; };
      window.lastTrack = track;
      return { getTracks: () => [track], getAudioTracks: () => [track] };
    };
    Object.defineProperty(navigator, 'mediaDevices', { configurable: true, value: { getUserMedia: async () => {
      window.permissionCalls++;
      if (window.mockMode === 'deny') throw new DOMException('denied', 'NotAllowedError');
      if (window.mockMode === 'missing') throw new DOMException('missing', 'NotFoundError');
      if (window.mockMode === 'late') return new Promise(resolve => { window.resolvePermission = resolve; });
      return window.makeStream();
    } } });
    window.MediaRecorder = class extends EventTarget {
      static isTypeSupported() { return true; }
      constructor(stream, options) { super(); this.state = 'inactive'; this.mimeType = options?.mimeType || 'audio/webm'; }
      start() { this.state = 'recording'; }
      stop() {
        this.state = 'inactive';
        queueMicrotask(() => {
          const event = new Event('dataavailable');
          event.data = new Blob(['mock capture bytes, not real audio'], { type: this.mimeType });
          this.dispatchEvent(event); this.dispatchEvent(new Event('stop'));
        });
      }
    };
    window.mount = language => { window.cleanup = window.roomModule.mountRecordingRoom(document.querySelector('#room'), { language, stimuli: window.clips }); };
    window.mount('ru');
  });
  await page.locator('[data-room-action="record"]').click();
  assert.equal(await page.evaluate(() => window.permissionCalls), 0, 'Consent required before permission');
  await page.locator('[data-room-consent]').check();
  await page.locator('[data-room-action="record"]').click();
  await page.waitForFunction(() => document.querySelector('[data-room-status]').textContent.includes('отклонён'));
  assert.equal(await page.locator('[data-room-action="record"]').isEnabled(), true, 'Denial recovers controls');
  await page.evaluate(() => { window.mockMode = 'missing'; });
  await page.locator('[data-room-action="record"]').click();
  await page.waitForFunction(() => document.querySelector('[data-room-status]').textContent.includes('не найден'));
  await page.evaluate(() => { window.mockMode = 'ok'; });
  await page.locator('[data-room-action="record"]').click();
  assert.equal(await page.locator('[data-room-action="stop"]').isEnabled(), true);
  await page.locator('[data-room-action="stop"]').click();
  await page.locator('[data-room-take]').waitFor();
  assert.equal(await page.evaluate(() => window.cleanup.hasUnsaved()), true);
  await page.evaluate(() => { window.cleanup(); window.mount('en'); });
  assert.equal(await page.locator('[data-room-take]').count(), 1, 'Take survives language remount');
  assert.match(await page.locator('[data-room-take]').innerText(), /Unreviewed/);
  await page.waitForFunction(() => document.querySelector('[data-room-audio-status]').textContent.includes('could not play'));
  await page.locator('[data-room-consent]').check();
  await page.locator('[data-room-action="record"]').click();
  await page.evaluate(() => { window.cleanup(); window.mount('ru'); });
  await page.waitForFunction(() => document.querySelectorAll('[data-room-take]').length === 2);
  assert.ok(await page.evaluate(() => window.stopCalls) >= 2, 'Cleanup releases live microphone');
  await page.evaluate(() => { window.cleanup(); window.mount('en'); window.mockMode = 'late'; });
  await page.locator('[data-room-consent]').check();
  await page.locator('[data-room-action="record"]').click();
  await page.evaluate(() => { window.cleanup(); window.resolvePermission(window.makeStream()); });
  await page.waitForFunction(() => window.stopCalls >= 3);
  assert.equal(await page.locator('[data-room-take]').count(), 2, 'Late permission does not start capture');
  await page.evaluate(() => window.mount('en'));
  const downloadedManifest = page.waitForEvent('download');
  await page.locator('[data-room-action="export-manifest"]').click();
  const manifest = JSON.parse(await readFile(await (await downloadedManifest).path(), 'utf8'));
  assert.equal(manifest.approvedForAssessment, false);
  assert.equal(manifest.clips[0].runtimeAsset, null);
  assert.equal(manifest.clips[0].takes.length, 2);
  assert.equal(manifest.clips[0].takes.every(take => take.humanOriginVerified === false), true);
  const downloadTake = page.waitForEvent('download');
  await page.locator('[data-room-action="download-take"]').first().click();
  assert.ok((await downloadTake).suggestedFilename().endsWith('.webm'));
  await page.locator('[data-room-action="delete-take"]').first().click();
  assert.equal(await page.locator('[data-room-take]').count(), 1);
  await page.locator('[data-room-action="delete-take"]').first().click();
  assert.equal(await page.evaluate(() => window.cleanup.hasUnsaved()), false);
  await page.locator('[data-room-file]').setInputFiles({ name: 'import.wav', mimeType: 'audio/wav', buffer: Buffer.from('deliberately invalid mock audio') });
  assert.equal(await page.locator('[data-room-take]').count(), 1);
  assert.match(await page.locator('[data-room-take]').innerText(), /Local file/);
  await page.locator('[data-room-action="delete-take"]').first().click();
  await page.evaluate(() => { window.mockMode = 'ok'; });
  await page.locator('[data-room-consent]').check();
  await page.locator('[data-room-action="record"]').click();
  await page.evaluate(() => window.lastTrack.dispatchEvent(new Event('ended')));
  await page.waitForFunction(() => document.querySelector('[data-room-status]').textContent.includes('microphone disconnected'));
  assert.equal(await page.locator('[data-room-take]').count(), 1, 'Unexpected track end retains a reviewable partial take');
  assert.equal(await page.locator('[data-room-action="record"]').isEnabled(), true);
  await page.locator('[data-room-action="delete-take"]').first().click();
  await page.evaluate(() => window.cleanup());
  assert.deepEqual(errors, []);
  console.log(JSON.stringify({ result: 'passed', checks: ['explicit consent precedes permission', 'permission-denied and missing-device recovery', 'capture-stop retains pending local take', 'English remount preserves take', 'unplayable file gives visible error', 'cleanup during capture stops tracks and retains final take', 'late permission released after cleanup', 'manifest and take downloads', 'import and deletion', 'microphone disconnection stops capture and warns of an incomplete take', 'no uncaught page errors'], scope: 'Mocked lifecycle only. No actual microphone, human performance, intelligibility, rights, or mobile-device compatibility verified.' }, null, 2));
} finally {
  await browser?.close();
  await new Promise(resolve => server.close(resolve));
}
