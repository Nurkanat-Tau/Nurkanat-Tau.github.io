/**
 * Run with the local preview serving dist/ at http://127.0.0.1:4173:
 *   node scripts/audio-check.mjs
 * Optional environment overrides: AUDIO_CHECK_BASE_URL, PLAYWRIGHT_MODULE, EDGE_PATH.
 * Checks binary format and browser decoding; it does NOT assess perceived speech quality.
 */
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
import {readFile, writeFile, mkdir} from 'node:fs/promises';
import {dirname, resolve, relative, isAbsolute, sep} from 'node:path';
import {fileURLToPath} from 'node:url';
import {QUESTIONS, BANK_VERSION} from '../dist/bank.js';

const projectRoot=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const distRoot=resolve(projectRoot,'dist');
const audioRoot=resolve(distRoot,'audio');
const baseURL=process.env.AUDIO_CHECK_BASE_URL || 'http://127.0.0.1:4173/';
assert.ok(['127.0.0.1','localhost','[::1]'].includes(new URL(baseURL).hostname),
  'Audio QA is intended for a local preview only.');
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const generationScript=await readFile(resolve(projectRoot,'scripts/generate-audio.ps1'),'utf8');
assert.match(generationScript,/SelectVoice\('Microsoft Zira Desktop'\)/);
assert.match(generationScript,/\$speech\.Rate\s*=\s*-1/);
const manifestBytes=await readFile(resolve(projectRoot,'artifacts/audio-manifest.json'));
const manifest=JSON.parse(manifestBytes.toString('utf8').replace(/^\uFEFF/,''));
const questions=QUESTIONS.filter(q=>q.domain==='listening');
assert.equal(questions.length,20,'Expected exactly 20 listening items in this draft.');
assert.equal(new Set(questions.map(q=>q.audio)).size,20,'Audio paths must be unique.');

function waveInfo(buffer,label){
  assert.ok(buffer.length>=44,`${label}: incomplete WAV header`);
  assert.equal(buffer.toString('ascii',0,4),'RIFF',`${label}: missing RIFF signature`);
  assert.equal(buffer.toString('ascii',8,12),'WAVE',`${label}: missing WAVE signature`);
  assert.equal(buffer.readUInt32LE(4)+8,buffer.length,`${label}: RIFF length mismatch`);
  let format=null,data=null,offset=12;
  while(offset+8<=buffer.length){
    const name=buffer.toString('ascii',offset,offset+4);
    const size=buffer.readUInt32LE(offset+4);
    const start=offset+8;
    assert.ok(start+size<=buffer.length,`${label}: truncated ${name} chunk`);
    if(name==='fmt '){
      assert.ok(size>=16,`${label}: incomplete fmt chunk`);
      assert.equal(format,null,`${label}: multiple fmt chunks`);
      format={encoding:buffer.readUInt16LE(start),channels:buffer.readUInt16LE(start+2),
        sampleRateHz:buffer.readUInt32LE(start+4),byteRate:buffer.readUInt32LE(start+8),
        blockAlign:buffer.readUInt16LE(start+12),bitsPerSample:buffer.readUInt16LE(start+14)};
    }
    if(name==='data'){
      assert.equal(data,null,`${label}: multiple data chunks`);
      data={start,size};
    }
    offset=start+size+(size%2);
  }
  assert.equal(offset,buffer.length,`${label}: trailing or malformed chunk data`);
  assert.ok(format&&data,`${label}: fmt and data chunks are required`);
  assert.deepEqual(format,{encoding:1,channels:1,sampleRateHz:22050,byteRate:44100,blockAlign:2,bitsPerSample:16},
    `${label}: expected mono 22050 Hz 16-bit PCM`);
  assert.equal(data.size%format.blockAlign,0,`${label}: partial sample frame`);
  const sampleFrames=data.size/format.blockAlign;
  const durationSeconds=sampleFrames/format.sampleRateHz;
  assert.ok(durationSeconds>1&&durationSeconds<300,`${label}: unexpected duration ${durationSeconds}`);
  let peak=0;
  for(let i=data.start;i<data.start+data.size;i+=2)peak=Math.max(peak,Math.abs(buffer.readInt16LE(i)));
  assert.ok(peak>0,`${label}: audio contains only zero-valued samples`);
  return {encoding:'PCM',channels:format.channels,sampleRateHz:format.sampleRateHz,
    bitsPerSample:format.bitsPerSample,sampleFrames,dataBytes:data.size,durationSeconds,
    peakSampleMagnitude:peak};
}

const files=[];
for(const question of questions){
  assert.equal(typeof question.transcript,'string',`${question.id}: transcript required`);
  const filePath=resolve(distRoot,question.audio);
  const relativeAudio=relative(audioRoot,filePath);
  assert.ok(relativeAudio&&!relativeAudio.startsWith(`..${sep}`)&&relativeAudio!=='..'&&!isAbsolute(relativeAudio),
    `${question.id}: audio path escapes local audio directory`);
  const manifestItem=manifest.find(item=>item.id===question.id);
  assert.ok(manifestItem,`${question.id}: missing generation-manifest entry`);
  assert.equal(manifestItem.file,question.audio,`${question.id}: manifest path is stale`);
  assert.equal(manifestItem.text,question.transcript,`${question.id}: manifest transcript is stale`);
  const bytes=await readFile(filePath);
  files.push({id:question.id,file:question.audio,
    transcriptSha256:hash(Buffer.from(question.transcript,'utf8')),
    audioSha256:hash(bytes),byteLength:bytes.length,...waveInfo(bytes,question.id)});
}

const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_MODULE ||
  'C:/Users/dajra/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browser=await chromium.launch({headless:true,executablePath:process.env.EDGE_PATH ||
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
let browserVersion;
try{
  browserVersion=browser.version();
  const page=await browser.newPage();
  await page.goto(baseURL,{waitUntil:'domcontentloaded'});
  const decoded=await page.evaluate(async records=>{
    const audioContext=new OfflineAudioContext(1,1,22050);
    const outcomes=[];
    for(const record of records){
      const response=await fetch(new URL(record.file,location.href),{cache:'no-store'});
      if(!response.ok)throw new Error(`${record.id}: HTTP ${response.status}`);
      const bytes=await response.arrayBuffer();
      const digest=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes)))
        .map(b=>b.toString(16).padStart(2,'0')).join('');
      const buffer=await audioContext.decodeAudioData(bytes);
      outcomes.push({id:record.id,audioSha256:digest,channels:buffer.numberOfChannels,
        sampleRateHz:buffer.sampleRate,sampleFrames:buffer.length,durationSeconds:buffer.duration});
    }
    return outcomes;
  },files.map(({id,file})=>({id,file})));
  assert.equal(decoded.length,20,'Browser must decode every listening asset.');
  for(const result of decoded){
    const source=files.find(file=>file.id===result.id);
    assert.equal(result.audioSha256,source.audioSha256,`${result.id}: served bytes differ from local file`);
    assert.equal(result.channels,source.channels,`${result.id}: decoded channel mismatch`);
    assert.equal(result.sampleRateHz,source.sampleRateHz,`${result.id}: decoded rate mismatch`);
    assert.equal(result.sampleFrames,source.sampleFrames,`${result.id}: decoded sample count mismatch`);
    assert.ok(Math.abs(result.durationSeconds-source.durationSeconds)<0.001,`${result.id}: duration mismatch`);
    source.browserDecode={passed:true,sampleFrames:result.sampleFrames,durationSeconds:result.durationSeconds};
  }
}finally{await browser.close();}

const provenance={
  schemaVersion:1,
  bankVersion:BANK_VERSION,
  metadataRecordedAt:new Date().toISOString(),
  purpose:'Generation metadata and technical file/decode verification; not human perceptual review.',
  generation:{
    engine:'Windows System.Speech.Synthesis.SpeechSynthesizer',
    voice:'Microsoft Zira Desktop',rate:-1,volume:100,
    sampleRateHz:22050,channels:1,bitsPerSample:16,encoding:'PCM',
    settingsSource:'scripts/generate-audio.ps1',settingsSourceSha256:hash(Buffer.from(generationScript,'utf8')),
    manifestSource:'artifacts/audio-manifest.json',manifestSourceSha256:hash(manifestBytes),
    basis:'Voice, rate, and volume are recorded from the generation script. Format is read from WAV headers. Manifest transcripts match the current bank; hashes identify the exact source text and audio bytes. This is not a cryptographic proof that a particular voice produced those bytes.'
  },
  verification:{localWavHeadersAndDurations:'passed',all20BrowserDecoded:'passed',
    servedBytesMatchLocalFiles:'passed',browser:'Microsoft Edge',browserVersion,
    browserDecoder:'OfflineAudioContext.decodeAudioData at 22050 Hz',
    humanPerceptualReview:'not performed',
    limitation:'Decoding and a nonzero waveform do not establish intelligibility, naturalness, pronunciation quality, or transcript fidelity by listening.'},
  files
};
await mkdir(resolve(projectRoot,'docs'),{recursive:true});
await writeFile(resolve(projectRoot,'docs/audio-provenance.json'),JSON.stringify(provenance,null,2)+'\n');
console.log(`Audio checks passed: ${files.length} WAV headers, durations, current manifest transcripts, exact served-byte hashes, and Edge decoding.`);
console.log('Saved docs/audio-provenance.json. Human perceptual review was not performed.');
