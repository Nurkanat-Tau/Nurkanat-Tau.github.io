// Verify the private, user-supplied excerpts. Does not send audio anywhere.
import assert from 'node:assert/strict';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const privatePath = path.join(root, 'artifacts/cambridge/source-audio-manifest.json');
let manifest;
try { manifest = JSON.parse(await readFile(privatePath, 'utf8')); }
catch (error) {
  if (error.code === 'ENOENT') throw new Error('Private source manifest is absent. Public source excludes Cambridge recordings. Run cambridge-audio-build.py with your local source folder and FFmpeg path before audio-integrity QA.');
  throw error;
}
const documentationManifest = JSON.parse(await readFile(path.join(root, 'docs/cambridge-audio-manifest.json'), 'utf8'));
const publicManifest = JSON.parse(await readFile(path.join(root, 'dist/listening/audio-manifest.json'), 'utf8'));
assert.deepEqual(documentationManifest, publicManifest, 'Documentation and runtime sanitized manifests must match');

function mp3Frames(bytes) {
  const frames = [];
  let cursor = 0;
  if (bytes.subarray(0, 3).toString() === 'ID3') cursor = 10 + ((bytes[6] & 127) << 21) + ((bytes[7] & 127) << 14) + ((bytes[8] & 127) << 7) + (bytes[9] & 127);
  const rates = [44100, 48000, 32000];
  const bitrates = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320];
  while (cursor + 4 <= bytes.length) {
    const header = bytes.readUInt32BE(cursor);
    const version = (header >>> 19) & 3, layer = (header >>> 17) & 3;
    const rate = rates[(header >>> 10) & 3], bitrate = bitrates[(header >>> 12) & 15];
    if ((header >>> 21) !== 2047 || version !== 3 || layer !== 1 || !rate || !bitrate) { cursor++; continue; }
    const length = Math.floor(144000 * bitrate / rate) + ((header >>> 9) & 1);
    if (cursor + length > bytes.length) break;
    frames.push({ offset: cursor, bytes: bytes.subarray(cursor, cursor + length) });
    cursor += length;
  }
  return frames;
}

assert.equal(manifest.clips.length, 4);
assert.equal(manifest.syntheticSpeechUsed, false);
assert.equal(manifest.publicRedistributionPermissionEstablished, false);
assert.equal(manifest.paidUsePermissionEstablished, false);
assert.equal(publicManifest.clips.length, 4);
assert.ok(!JSON.stringify(publicManifest).includes('sourceLocation'));
assert.ok(!/[A-Za-z]:[\\/]/.test(JSON.stringify(publicManifest)), 'Runtime manifest must not expose local absolute paths');
const results = [];
for (const clip of manifest.clips) {
  const source = await readFile(clip.sourceLocation);
  const bytes = await readFile(path.join(root, 'dist', clip.src));
  assert.equal(hash(source), clip.sourceSha256, clip.id + ': source hash');
  assert.equal(hash(bytes), clip.sha256, clip.id + ': excerpt hash');
  assert.equal(bytes.length, clip.bytes);
  assert.ok(clip.durationSeconds > 60 && clip.durationSeconds < 240);
  assert.ok(Math.abs(clip.durationSeconds - (clip.requestedSourceEndSeconds - clip.requestedSourceStartSeconds)) < 0.2);
  const frames = mp3Frames(bytes);
  assert.ok(frames.length > 1000, clip.id + ': valid MPEG1 LayerIII frame sequence');
  // FFmpeg writes an output Xing/Info seek frame; all following compressed audio
  // frames must be one byte-identical contiguous subsequence of the source file.
  const compressedAudio = Buffer.concat(frames.slice(1).map(frame => frame.bytes));
  const sourceOffset = source.indexOf(compressedAudio);
  assert.ok(sourceOffset >= 0, clip.id + ': audio packet sequence must be copied, not re-encoded');
  const sourceFrame = mp3Frames(source).findIndex(frame => frame.offset === sourceOffset);
  assert.ok(sourceFrame >= 0, clip.id + ': copied sequence starts on a source frame boundary');
  const actualFrameStartSeconds = sourceFrame * 1152 / clip.measurements.sampleRateHz;
  assert.ok(Math.abs(actualFrameStartSeconds - clip.requestedSourceStartSeconds) < 0.06);
  const runtime = publicManifest.clips.find(entry => entry.id === clip.id);
  for (const key of ['src', 'durationSeconds', 'bytes', 'sha256']) assert.equal(runtime[key], clip[key], clip.id + ': runtime parity ' + key);
  assert.equal(clip.measurements.decodeSucceeded, true);
  assert.equal(clip.measurements.decodedFullScaleSampleCount, 0);
  results.push({ id: clip.id, bytes: bytes.length, sha256: clip.sha256, audioFrames: frames.length - 1,
    sourceFrameIndex: sourceFrame, actualSourcePacketStartSeconds: actualFrameStartSeconds,
    exactCompressedAudioSequencePreserved: true, durationSeconds: clip.durationSeconds });
}
const report = { result: 'passed', checks: ['source and output SHA-256', 'runtime manifest parity and no local paths', 'four bounded excerpts', 'exact compressed audio packet sequence preservation', 'source frame boundary and seek tolerance', 'decode measurements and no full-scale PCM samples'], clips: results,
  limitation: 'Technical integrity and local ASR alignment do not establish human listening quality, licensing, publisher authenticity, or CEFR validity.' };
await mkdir(path.join(root, 'artifacts/cambridge'), { recursive: true });
await writeFile(path.join(root, 'artifacts/cambridge/audio-integrity.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
