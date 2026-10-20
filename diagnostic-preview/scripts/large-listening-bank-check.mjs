// Private-media QA: no upload, playback synthesis, external transcription, or CEFR conversion.
import assert from 'node:assert/strict';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { listeningItems as items, listeningStimuli as stimuli, listeningMetadata } from '../docs/large-listening-bank.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
const json=async p=>JSON.parse(await readFile(path.join(root,p),'utf8'));
const sha=bytes=>createHash('sha256').update(bytes).digest('hex');
const publicManifest=await json('docs/large-listening-audio-manifest.json');
assert.deepEqual(publicManifest,await json('dist/listening-bank/audio-manifest.json'));
assert.equal(await readFile(path.join(root,'docs/large-listening-bank.mjs'),'utf8'),await readFile(path.join(root,'dist/large-listening-bank.js'),'utf8'));
assert.ok(!/sourceLocation|[A-Za-z]:[\\/]/.test(JSON.stringify(publicManifest)),'No private source paths');
assert.equal(publicManifest.syntheticSpeechUsed,false);
assert.equal(publicManifest.publicRedistributionPermissionEstablished,false);
assert.equal(publicManifest.paidUsePermissionEstablished,false);
assert.equal(listeningMetadata.validatedScoreConversion,false);
assert.equal(items.length,120);assert.equal(stimuli.length,32);assert.equal(publicManifest.clips.length,32);
assert.equal(new Set(items.map(x=>x.id)).size,120);assert.equal(new Set(stimuli.map(x=>x.id)).size,32);
assert.equal(new Set(items.map(x=>x.prompt.trim().toLowerCase())).size,120);
const skills=new Set(['gist','explicit-detail','reason','speaker-attitude','change-of-plan','qualification','agreement','inference','sequence']);
const counts={},skillCounts={},keys=[0,0,0,0],timings=[];
for(const x of items){
 const s=stimuli.find(v=>v.id===x.stimulusId);assert.ok(s,x.id+' stimulus');
 assert.equal(x.targetLevel,null);assert.equal(s.targetLevel,null);assert.equal(x.clusterId,s.id);
 assert.equal(x.choices.length,4);assert.equal(new Set(x.choices).size,4);assert.ok(Number.isInteger(x.correctIndex)&&x.correctIndex>=0&&x.correctIndex<4);
 assert.equal(x.distractorRationales.length,3);assert.deepEqual(x.distractorRationales.map(d=>d.choiceIndex).sort(),[0,1,2,3].filter(i=>i!==x.correctIndex));
 for(const d of [x.explanation,x.construct,...x.distractorRationales]) assert.ok(d.en?.trim()&&d.ru?.trim(),x.id+' bilingual feedback');
 assert.ok(x.tags.length&&x.tags.every(t=>skills.has(t)));assert.ok(typeof x.topic==='string'&&!x.tags.includes(x.topic));
 assert.ok(x.evidenceTiming.startSeconds>=0&&x.evidenceTiming.endSeconds>x.evidenceTiming.startSeconds&&x.evidenceTiming.endSeconds<=s.durationSeconds+.1,x.id+' evidence within clip');
 const c=publicManifest.clips.find(v=>v.id===s.id),e=c.answerEvidence.find(v=>v.itemId===x.id);assert.ok(e);assert.equal(e.startSeconds,x.evidenceTiming.startSeconds);assert.equal(e.endSeconds,x.evidenceTiming.endSeconds);
 counts[s.id]=(counts[s.id]??0)+1;keys[x.correctIndex]++;for(const t of x.tags)skillCounts[t]=(skillCounts[t]??0)+1;
 timings.push({itemId:x.id,stimulusId:s.id,startSeconds:e.startSeconds,endSeconds:e.endSeconds});
}
assert.ok(Object.values(counts).every(n=>n===3||n===4));
assert.deepEqual([...new Set(items.map(x=>x.sourceTest))].sort(),[1,2,3,4]);
assert.ok(keys.every(n=>n>=25&&n<=35),'Balanced correct-answer positions');
// Verify that whole-cluster selection can reach the focused form's exact 40 answers.
let reachable=new Set([0]);for(const n of Object.values(counts))reachable=new Set([...reachable,...[...reachable].map(x=>x+n)]);assert.ok(reachable.has(40));
function frames(bytes){
 const result=[];let p=0;if(bytes.subarray(0,3).toString()==='ID3')p=10+((bytes[6]&127)<<21)+((bytes[7]&127)<<14)+((bytes[8]&127)<<7)+(bytes[9]&127);
 const rates=[44100,48000,32000],bitrates=[0,32,40,48,56,64,80,96,112,128,160,192,224,256,320];
 while(p+4<=bytes.length){const h=bytes.readUInt32BE(p),r=rates[(h>>>10)&3],b=bitrates[(h>>>12)&15];if((h>>>21)!==2047||((h>>>19)&3)!==3||((h>>>17)&3)!==1||!r||!b){p++;continue;}const n=Math.floor(144000*b/r)+((h>>>9)&1);if(p+n>bytes.length)break;result.push({offset:p,bytes:bytes.subarray(p,p+n)});p+=n;}return result;
}
let privateManifest;
try{privateManifest=await json('artifacts/cambridge/large-source-audio-manifest.json');}
catch(e){if(e.code==='ENOENT')throw new Error('Public source omits Cambridge recordings and private provenance. Rebuild with your locally permitted source files and scripts/large-listening-audio-build.py before private audio QA.');throw e;}
const sources=new Map(),audio=[];
for(const c of publicManifest.clips){
 const privateClip=privateManifest.clips.find(x=>x.id===c.id);assert.ok(privateClip);
 if(!sources.has(privateClip.sourceLocation)){const bytes=await readFile(privateClip.sourceLocation);sources.set(privateClip.sourceLocation,{bytes,frames:frames(bytes)});}
 const source=sources.get(privateClip.sourceLocation),bytes=await readFile(path.join(root,'dist',c.src));
 assert.equal(sha(source.bytes),c.sourceSha256,c.id+' source SHA');assert.equal(sha(bytes),c.sha256,c.id+' output SHA');assert.equal(bytes.length,c.bytes);
 const outFrames=frames(bytes);assert.ok(outFrames.length>1000);
 const copied=Buffer.concat(outFrames.slice(1).map(f=>f.bytes)),offset=source.bytes.indexOf(copied);assert.ok(offset>=0,c.id+' byte-identical compressed packet sequence');
 const fi=source.frames.findIndex(f=>f.offset===offset);assert.ok(fi>=0);const packetTime=fi*1152/c.measurements.sampleRateHz;
 assert.ok(Math.abs(packetTime-c.requestedSourceStartSeconds)<.06,c.id+' source frame position');
 assert.ok(Math.abs(c.durationSeconds-(c.requestedSourceEndSeconds-c.requestedSourceStartSeconds))<.2);
 assert.equal(c.measurements.decodeSucceeded,true);assert.equal(c.measurements.decodedFullScaleSampleCount,0);
 audio.push({id:c.id,bytes:bytes.length,sha256:c.sha256,durationSeconds:c.durationSeconds,actualSourcePacketStartSeconds:packetTime,exactCompressedAudioSequencePreserved:true});
}
const report={result:'passed',checks:['120 unique original/reused project questions','32 whole recording clusters of 3–4 questions','bilingual explanations and distinct-key distractor rationales','skill-only tags and no CEFR assignments','120 bounded evidence timings and manifest parity','source and excerpt SHA-256','all MP3 compressed packets identical to source subsequences','source start boundaries within 60 milliseconds','decoded duration and no full-scale PCM samples','exact 40-response whole-cluster selection possible'],
 items:items.length,clips:stimuli.length,sourceTracks:sources.size,uniqueAudioSeconds:audio.reduce((s,x)=>s+x.durationSeconds,0),audioBytes:audio.reduce((s,x)=>s+x.bytes,0),correctPositions:keys,skillCounts,clusterCounts:counts,audio,
 limitations:['These checks do not measure real-learner accuracy, distractor functioning or CEFR validity.','Local ASR alignment is approximate and is not a human perceptual review.','Familiarity with published material can invalidate fresh placement evidence.','Public/paid use rights are not established.']};
await mkdir(path.join(root,'artifacts/cambridge'),{recursive:true});await writeFile(path.join(root,'artifacts/cambridge/large-bank-integrity.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({...report,audio:audio.map(({id,durationSeconds,exactCompressedAudioSequencePreserved})=>({id,durationSeconds,exactCompressedAudioSequencePreserved}))},null,2));
