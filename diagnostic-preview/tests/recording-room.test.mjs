import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { RECORDING_LIMITS, validateAudioFile, normalizeRecordingStimulus, buildRecordingManifest } from '../dist/recording-room.js';
import { stimuli, items, BENCHMARK_VERSION } from '../docs/benchmark-content.mjs';

const clip = { id: 'human-a1-monologue-01', intendedLevel: 'A1', type: 'monologue', scriptText: 'The class starts at ten.', scriptVersion: 'review-1', itemIds: ['bench-a1-listening-monologue'] };

test('audio screening rejects empty, excessive, non-audio and misleading active file types', () => {
  assert.deepEqual(validateAudioFile(null), { valid: false, reason: 'empty' });
  assert.equal(validateAudioFile({ name: 'take.wav', size: 0 }).valid, false);
  assert.equal(validateAudioFile({ name: 'take.wav', size: NaN }).valid, false);
  assert.equal(validateAudioFile({ name: 'take.wav', size: RECORDING_LIMITS.maxFileBytes + 1 }).reason, 'size');
  assert.equal(validateAudioFile({ name: 'take.html', size: 10, type: 'audio/wav' }).reason, 'format');
  assert.equal(validateAudioFile({ name: 'take.wav', size: 10, type: 'text/html' }).reason, 'format');
  assert.equal(validateAudioFile({ name: 'take.exe', size: 10, type: 'application/octet-stream' }).valid, false);
});

test('audio screening accepts common capture containers without claiming they decode', () => {
  for (const [name, type] of [['TAKE.WAV', 'audio/wav'], ['take.m4a', 'audio/mp4'], ['take.webm', 'video/webm'], ['take.mp3', ''], ['take.ogg', 'audio/ogg;codecs=opus']]) {
    assert.equal(validateAudioFile({ name, type, size: 120 }).valid, true, name);
  }
  assert.equal(validateAudioFile({ name: 'take.wav', type: '', size: RECORDING_LIMITS.maxFileBytes }).valid, true);
});

test('stimulus normalization preserves original English script and linkage without granting approval', () => {
  const normalized = normalizeRecordingStimulus(clip);
  assert.equal(normalized.script, clip.scriptText);
  assert.deepEqual(normalized.itemIds, clip.itemIds);
  assert.notEqual(normalized.itemIds, clip.itemIds);
  assert.equal(normalized.audioStatus, 'pending_human');
  assert.deepEqual(normalizeRecordingStimulus(normalized), normalized);
  const dialogue = normalizeRecordingStimulus({ id: 'conversation', level: 'B1', dialogue: [{ speaker: 'A', text: 'Can you help?' }, { speaker: 'B', text: 'Of course.' }], speakers: [{ name: 'A' }, { name: 'B' }], performanceDirections: ['Natural.', 'No answer emphasis.'] });
  assert.equal(dialogue.script, 'A: Can you help?\nB: Of course.');
  assert.deepEqual(dialogue.speakers, ['A', 'B']);
  assert.equal(dialogue.performanceDirections, 'Natural. No answer emphasis.');
  assert.equal(normalizeRecordingStimulus({ ...clip, intendedLevel: undefined, targetLevel: 'A2' }).level, 'A2');
});

test('missing scripts and selector-unsafe identifiers fail before rendering', () => {
  for (const value of [null, {}, { id: 'safe', script: '' }, { id: 'x"]<script>', script: 'Hello' }]) assert.throws(() => normalizeRecordingStimulus(value), TypeError);
});

test('manifest cannot promote imported or microphone takes through caller approval fields', () => {
  const manifest = buildRecordingManifest([clip], [{ stimulusId: clip.id, takeId: 'take-1', filename: 'take.wav', bytes: 200, source: 'microphone_capture', mimeType: 'audio/wav', performerReference: 'P01', approvedForAssessment: true, humanOriginVerified: true, rightsVerified: true, runtimeAsset: '/approved.wav', downloadRequested: true }]);
  assert.equal(manifest.approvedForAssessment, false);
  assert.equal(manifest.clips[0].runtimeAsset, null);
  assert.equal(manifest.clips[0].status, 'awaiting_human_and_rights_review');
  const exported = manifest.clips[0].takes[0];
  for (const key of ['approvedForAssessment', 'humanOriginVerified', 'rightsVerified', 'perceptualReviewPassed']) assert.equal(exported[key], false, key);
  assert.equal(exported.downloadRequested, true);
  assert.equal('blob' in exported, false);
  assert.equal('runtimeAsset' in exported, false);
});

test('manifest only links takes to their matching stimulus and records stale script provenance', () => {
  const input = [{ stimulusId: clip.id, takeId: 'take-2', filename: 'old.wav', bytes: 50, source: 'local_import', scriptVersion: 'older-draft', scriptTextAtCapture: 'Earlier wording.' }, { stimulusId: 'different-clip', takeId: 'other', filename: 'other.wav' }];
  const manifest = buildRecordingManifest([clip], input);
  assert.equal(manifest.clips[0].takes.length, 1);
  assert.equal(manifest.clips[0].scriptVersion, 'review-1');
  assert.equal(manifest.clips[0].takes[0].scriptVersion, 'older-draft');
  assert.equal(manifest.clips[0].takes[0].scriptTextAtCapture, 'Earlier wording.');
  assert.equal(manifest.clips[0].takes[0].downloadRequested, false);
  assert.equal(input[0].downloadRequested, undefined);
});

test('ten pending human slots match the original scripts and cannot point to legacy synthetic audio', async () => {
  const manifest = JSON.parse(await readFile(new URL('../docs/human-audio-manifest.template.json', import.meta.url), 'utf8'));
  const source = stimuli.filter(stimulus => stimulus.domain === 'listening');
  assert.equal(source.length, 10);
  assert.equal(manifest.clips.length, 10);
  assert.equal(new Set(manifest.clips.map(item => item.id)).size, 10);
  assert.equal(manifest.syntheticAllowed, false);
  assert.equal(manifest.approvedForAssessment, false);
  assert.equal(manifest.sourceVersion, BENCHMARK_VERSION);
  for (const target of ['A1', 'A2', 'B1', 'B2', 'C1']) assert.equal(manifest.clips.filter(item => item.intendedLevel === target).length, 2);
  for (const slot of manifest.clips) {
    const script = source.find(stimulus => stimulus.id === slot.id);
    assert.ok(script, slot.id);
    assert.equal(slot.scriptSha256, createHash('sha256').update(script.script, 'utf8').digest('hex'), `${slot.id}: manifest must match final script`);
    assert.deepEqual(slot.durationTargetSeconds, script.durationTargetSeconds);
    assert.equal(slot.performanceDirections, script.performanceDirections);
    assert.deepEqual(slot.itemIds, items.filter(item => item.stimulusId === slot.id).map(item => item.id));
    assert.equal(slot.runtimeAsset, null);
    assert.equal(slot.assets.archivalMaster, null);
    assert.equal(slot.assets.delivery, null);
    assert.deepEqual(slot.actualPerformers, []);
    assert.equal(slot.recording.actualHumanVerified, false);
    assert.equal(slot.review.approvedForAssessment, false);
  }
});
