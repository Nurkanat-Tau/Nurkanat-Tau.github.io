import test from 'node:test';
import assert from 'node:assert/strict';
import {items, stimuli, BENCHMARK_VERSION} from '../dist/benchmark-content.js';
import {createAttempt,playableItems,validateAttempt,loadAttempt,recordAnswer,summarize,escapeHTML,DOMAINS,LEVELS} from '../dist/benchmark-engine.js';

const playable=playableItems(items);
test('sample blueprint and stimulus linkage remain complete and bilingual',()=>{
  assert.equal(items.length,30);assert.equal(new Set(items.map(q=>q.id)).size,30);
  assert.equal(new Set(stimuli.map(s=>s.id)).size,stimuli.length);
  for(const domain of DOMAINS)for(const level of LEVELS)assert.equal(items.filter(q=>q.domain===domain&&q.targetLevel===level).length,2,`${domain}/${level}`);
  for(const q of items){
    assert.equal(q.targetLevelStatus,'author_hypothesis');
    assert.ok(stimuli.find(s=>s.id===q.stimulusId&&s.domain===q.domain));
    assert.equal(new Set(q.choices).size,q.choices.length);
    assert.ok(Number.isInteger(q.correctIndex)&&q.correctIndex>=0&&q.correctIndex<q.choices.length);
    for(const field of ['construct','explanation','scopeLimits'])for(const lang of ['ru','en'])assert.ok(q[field][lang]?.length>10,`${q.id}/${field}/${lang}`);
    assert.deepEqual(q.distractorRationales.map(r=>r.choiceIndex).sort(),q.choices.map((_,i)=>i).filter(i=>i!==q.correctIndex));
    assert.ok(q.answerEvidence);
  }
});
test('all ten listening tasks await human recording and cannot enter the online sample',()=>{
  const audio=stimuli.filter(s=>s.domain==='listening');assert.equal(audio.length,10);
  for(const level of LEVELS){const clips=audio.filter(s=>s.targetLevel===level);assert.deepEqual(clips.map(c=>c.type).sort(),['dialogue','monologue']);}
  for(const s of audio){assert.equal(s.audioStatus,'pending_human');assert.equal(s.audio,null);assert.ok(s.script?.length>30);}
  assert.equal(playable.length,20);assert.ok(playable.every(q=>q.domain!=='listening'));
});
test('all correct returns sample counts without manufacturing CEFR results',()=>{
  let a=createAttempt(BENCHMARK_VERSION);
  for(const q of playable)a=recordAnswer(a,q,q.correctIndex,items,BENCHMARK_VERSION);
  assert.ok(a.finished);assert.ok(validateAttempt(a,items,BENCHMARK_VERSION));
  const report=summarize(a,items);for(const domain of ['language','reading'])assert.deepEqual(report.find(r=>r.domain===domain),{domain,total:10,answered:10,correct:10,skipped:0,pending:0,status:'sample-only'});
  assert.equal(report.find(r=>r.domain==='listening').status,'awaiting-human-audio');
  assert.ok(report.every(r=>!('level' in r)&&!('confidence' in r)&&!('percentage' in r)));
});
test('unknown answers stay separate from listening that was never assessed',()=>{
  let a=createAttempt(BENCHMARK_VERSION);for(const q of playable)a=recordAnswer(a,q,null,items,BENCHMARK_VERSION);
  const report=summarize(a,items);assert.equal(report[0].skipped,10);assert.equal(report[0].answered,0);assert.equal(report[2].skipped,0);assert.equal(report[2].pending,10);
});
test('mixed responses, resumption and back edits keep exact counts',()=>{
  let a=createAttempt(BENCHMARK_VERSION);
  for(let i=0;i<playable.length;i++){const q=playable[a.position];a=recordAnswer(a,q,i%3===0?null:i%3===1?q.correctIndex:(q.correctIndex+1)%q.choices.length,items,BENCHMARK_VERSION);a=loadAttempt(JSON.stringify(a),items,BENCHMARK_VERSION);assert.ok(a);}
  const summary=summarize(a,items);assert.equal(summary[0].correct+summary[1].correct,7);assert.equal(summary[0].skipped+summary[1].skipped,7);
  a={...a,finished:false,position:0};a=recordAnswer(a,playable[0],playable[0].correctIndex,items,BENCHMARK_VERSION);
  assert.equal(Object.keys(a.answers).length,20);assert.equal(summarize(a,items)[0].skipped,3);
});
test('invalid, stale, listening-contaminated and unfinished storage is rejected',()=>{
  assert.equal(loadAttempt('broken',items,BENCHMARK_VERSION),null);
  for(const variant of [null,[],{}, {...createAttempt(BENCHMARK_VERSION),position:99},{...createAttempt('old')},{...createAttempt(BENCHMARK_VERSION),finished:true},{...createAttempt(BENCHMARK_VERSION),answers:{[playable[0].id]:99}},{...createAttempt(BENCHMARK_VERSION),answers:{[items.find(q=>q.domain==='listening').id]:0}}])assert.equal(validateAttempt(variant,items,BENCHMARK_VERSION),false);
});
test('out-of-order submissions and invalid choices cannot corrupt an attempt',()=>{
  const a=createAttempt(BENCHMARK_VERSION);
  for(const choice of [-1,9,'0',undefined,NaN])assert.throws(()=>recordAnswer(a,playable[0],choice,items,BENCHMARK_VERSION));
  assert.throws(()=>recordAnswer(a,playable[1],0,items,BENCHMARK_VERSION));
  assert.equal(Object.keys(a.answers).length,0);
});
test('untrusted imported strings cannot become HTML',()=>assert.equal(escapeHTML('<img src=x onerror="bad">&'), '&lt;img src=x onerror=&quot;bad&quot;&gt;&amp;'));
