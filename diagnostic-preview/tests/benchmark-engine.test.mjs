import test from 'node:test';
import assert from 'node:assert/strict';
import {items, stimuli, recordingStimuli, BENCHMARK_VERSION} from '../dist/assessment-bank.js';
import {createAttempt,playableItems,validateAttempt,loadAttempt,recordAnswer,summarize,escapeHTML,DOMAINS,LEVELS} from '../dist/benchmark-engine.js';
const playable=playableItems(items);
test('30 distinct bilingual questions link to a real stimulus and complete rationales',()=>{
 assert.equal(items.length,30);assert.equal(new Set(items.map(q=>q.id)).size,30);
 assert.equal(new Set(stimuli.map(s=>s.id)).size,stimuli.length);
 for(const domain of DOMAINS)assert.equal(items.filter(q=>q.domain===domain).length,10);
 for(const domain of ['language','reading'])for(const level of LEVELS)assert.equal(items.filter(q=>q.domain===domain&&q.targetLevel===level).length,2);
 for(const q of items){
  assert.ok(stimuli.find(s=>s.id===q.stimulusId&&s.domain===q.domain));
  assert.equal(new Set(q.choices).size,q.choices.length);
  assert.ok(Number.isInteger(q.correctIndex)&&q.correctIndex>=0&&q.correctIndex<q.choices.length);
  for(const field of ['construct','explanation','scopeLimits'])for(const lang of ['ru','en'])assert.ok(q[field][lang]?.length>10,`${q.id}/${field}/${lang}`);
  assert.deepEqual(q.distractorRationales.map(r=>r.choiceIndex).sort(),q.choices.map((_,i)=>i).filter(i=>i!==q.correctIndex));
  assert.ok(q.answerEvidence);
 }
});
test('four real listening sources unlock ten questions without invented CEFR labels',()=>{
 const clips=stimuli.filter(s=>s.domain==='listening');assert.equal(clips.length,4);assert.equal(playable.length,30);
 for(const s of clips)assert.ok(typeof s.audio==='string'?s.audio:s.audio?.src);
 for(const q of items.filter(q=>q.domain==='listening'))assert.ok(!LEVELS.includes(q.targetLevel));
 assert.equal(recordingStimuli.length,10,'original scripts remain available for future owned recordings');
 assert.equal(playableItems([{domain:'listening',audioReady:false}]).length,0);
});
function complete(choose){let a=createAttempt(BENCHMARK_VERSION);for(const q of playable)a=recordAnswer(a,q,choose(q),items,BENCHMARK_VERSION);return a;}
test('all-correct counts30 with no CEFR, probability or reliability claim',()=>{
 const a=complete(q=>q.correctIndex);assert.ok(a.finished);assert.ok(validateAttempt(a,items,BENCHMARK_VERSION));
 for(const row of summarize(a,items)){assert.deepEqual(row,{domain:row.domain,total:10,answered:10,correct:10,skipped:0,unavailable:0,pending:0,status:'sample-only'});assert.ok(!('level' in row)&&!('confidence' in row));}
});
test('unknown answers and audio failures remain distinct in counts and resumption',()=>{
 const a=complete(q=>q.domain==='listening'?'unavailable':null);
 const summary=summarize(loadAttempt(JSON.stringify(a),items,BENCHMARK_VERSION),items);
 assert.equal(summary[0].skipped,10);assert.equal(summary[0].answered,0);
 assert.deepEqual(summary[2],{domain:'listening',total:10,answered:0,correct:0,skipped:0,unavailable:10,pending:0,status:'not-assessed'});
 assert.equal(summarize(complete(()=>null),items)[2].skipped,10);
});
test('mixed audio failures do not hide answered evidence or turn failures into errors',()=>{
 let count=0;const a=complete(q=>q.domain==='listening'&&count++<4?'unavailable':q.correctIndex);
 const listening=summarize(a,items)[2];assert.equal(listening.correct,6);assert.equal(listening.unavailable,4);assert.equal(listening.skipped,0);assert.equal(listening.pending,0);
});
test('back edits replace responses rather than double counting',()=>{
 let a=complete(()=>null);a={...a,finished:false,position:0};a=recordAnswer(a,playable[0],playable[0].correctIndex,items,BENCHMARK_VERSION);
 assert.equal(Object.keys(a.answers).length,30);assert.equal(summarize(a,items)[0].skipped,9);assert.equal(summarize(a,items)[0].correct,1);
});
test('corrupt or old storage, impossible choices and audio failure on reading are rejected',()=>{
 assert.equal(loadAttempt('broken',items,BENCHMARK_VERSION),null);
 for(const variant of [null,[],{}, {...createAttempt(BENCHMARK_VERSION),position:99},createAttempt('old'),{...createAttempt(BENCHMARK_VERSION),finished:true},{...createAttempt(BENCHMARK_VERSION),answers:{[playable[0].id]:99}},{...createAttempt(BENCHMARK_VERSION),answers:{[playable[0].id]:'unavailable'}},{...createAttempt(BENCHMARK_VERSION),answers:{'missing-id':0}}])assert.equal(validateAttempt(variant,items,BENCHMARK_VERSION),false);
 const a=createAttempt(BENCHMARK_VERSION);for(const choice of [-1,9,'0',undefined,NaN,'unavailable'])assert.throws(()=>recordAnswer(a,playable[0],choice,items,BENCHMARK_VERSION));
 assert.throws(()=>recordAnswer(a,playable[1],0,items,BENCHMARK_VERSION));
});
test('untrusted strings cannot become HTML',()=>assert.equal(escapeHTML('<img src=x onerror="bad">&'),'&lt;img src=x onerror=&quot;bad&quot;&gt;&amp;'));
