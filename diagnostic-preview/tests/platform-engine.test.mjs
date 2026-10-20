import test from 'node:test';
import assert from 'node:assert/strict';
import {buildForm,createSession,validateSession,loadSession,answerQuestion,completeBlock,summarizeSession,FORM_COUNT} from '../dist/platform-engine.js';
import {analyzePilot,wilson} from '../dist/platform-validation.js';
import {weekPlan} from '../dist/platform-copy.js';
// Explicitly synthetic fixtures for software assertions, never validation evidence.
const items=[];
for(const level of ['A1','A2','B1','B2','C1'])for(let i=0;i<48;i++)items.push({id:`L-${level}-${i}`,domain:'language',targetLevel:level,stimulusId:`LC-${level}-${i}`,choices:['a','b','c','d'],correctIndex:i%4,tags:['past-time']});
for(const level of ['A1','A2','B1','B2','C1'])for(let p=0;p<(level==='C1'?8:10);p++)for(let i=0;i<5;i++)items.push({id:`R-${level}-${p}-${i}`,domain:'reading',targetLevel:level,stimulusId:`RP-${level}-${p}`,choices:['a','b','c','d'],correctIndex:i%4,tags:['inference']});
for(let p=0;p<32;p++)for(let i=0;i<(p<8?3:4);i++)items.push({id:`A-${p}-${i}`,domain:'listening',targetLevel:null,stimulusId:`AP-${p}`,choices:['a','b','c','d'],correctIndex:i%4,tags:['reason']});
const version='synthetic-test-fixtures',lookup=new Map(items.map(q=>[q.id,q]));
const fresh=(seed=1,id='test')=>createSession({items,bankVersion:version,seed,id});
function finish(s,choice=q=>q.correctIndex){while(!s.finished){for(const id of s.blocks[s.position].itemIds)s=answerQuestion(s,id,choice(lookup.get(id)),items);s=completeBlock(s);}return s;}
test('eight reproducible120-question forms cover the entire600-item bank',()=>{
 const covered=new Set(),signatures=new Set();
 for(let seed=1;seed<=FORM_COUNT;seed++){
  const form=buildForm(items,seed);assert.deepEqual(form,buildForm(items,seed));
  assert.equal(new Set(form.flatMap(b=>b.itemIds)).size,120);signatures.add(JSON.stringify(form));
  for(const domain of ['language','reading','listening'])assert.equal(form.filter(b=>b.domain===domain).flatMap(b=>b.itemIds).length,40);
  for(const block of form.filter(b=>b.domain!=='language'))assert.deepEqual(block.itemIds,items.filter(q=>q.stimulusId===block.stimulusId).map(q=>q.id),'passage/recording clusters stay intact');
  form.flatMap(b=>b.itemIds).forEach(id=>covered.add(id));
 }
 assert.equal(signatures.size,8);assert.equal(covered.size,600);
});
test('forms share anchor evidence but are not identical',()=>{
 const a=new Set(buildForm(items,1).flatMap(b=>b.itemIds)),b=buildForm(items,2).flatMap(x=>x.itemIds);const overlap=b.filter(id=>a.has(id)).length;assert.ok(overlap>=22&&overlap<120);
});
test('incomplete blocks cannot finish and invalid input cannot mutate state',()=>{
 const s=fresh(),id=s.blocks[0].itemIds[0];assert.throws(()=>completeBlock(s));
 for(const value of [-1,4,'0','unavailable',{},undefined])assert.throws(()=>answerQuestion(s,id,value,items));
 assert.throws(()=>answerQuestion(s,'missing',0,items));assert.equal(Object.keys(s.answers).length,0);
});
test('correct, wrong, unknown and technical failures are separately accounted for',()=>{
 const correct=finish(fresh());assert.ok(validateSession(correct,items,version));
 const report=summarizeSession(correct,items);assert.ok(report.domainStats.every(r=>r.correct===40));assert.equal(report.cefrLevel,null);assert.equal(report.sublevel,null);
 const mixed=finish(fresh(),q=>q.domain==='listening'?'unavailable':q.domain==='reading'?null:(q.correctIndex+1)%4);const rows=summarizeSession(mixed,items).domainStats;
 assert.equal(rows[0].incorrect,40);assert.equal(rows[1].unsure,40);assert.equal(rows[2].unavailable,40);assert.equal(rows[2].observed,0);
});
test('resumption checks the bank version, fixed form and answer ownership',()=>{
 let s=fresh();s=answerQuestion(s,s.blocks[0].itemIds[0],null,items);assert.deepEqual(loadSession(JSON.stringify(s),items,version),s);
 for(const bad of [{...s,bankVersion:'old'},{...s,formId:'F999'},{...s,createdAt:'not-a-date'},{...s,position:999},{...s,finished:true},{...s,answers:{unknown:0}},{...s,blocks:[]},{...s,completedBlocks:[s.blocks[0].id]},{...s,audioExposure:{unknown:{familiar:true}}},{...s,writing:{x:12}}])assert.equal(validateSession(bad,items,version),false);
 assert.equal(loadSession('{broken',items,version),null);
});
test('first committed response stays immutable when an answer is edited',()=>{
 let s=fresh();const ids=s.blocks[0].itemIds;for(const id of ids)s=answerQuestion(s,id,null,items);s=completeBlock(s);s={...s,position:0};s=answerQuestion(s,ids[0],lookup.get(ids[0]).correctIndex,items);s=completeBlock(s);
 assert.equal(s.firstResponses[ids[0]],null);assert.equal(s.answers[ids[0]],lookup.get(ids[0]).correctIndex);assert.ok(validateSession(s,items,version));
});
test('descriptive skill patterns require at least three observations and two stimuli',()=>{
 const s=finish(fresh());const report=summarizeSession(s,items);assert.ok(report.strengths.every(r=>r.total>=3&&r.stimulusIds.length>=2));
 const small={...s,answers:{}};for(const id of small.blocks.find(b=>b.domain==='reading').itemIds)small.answers[id]=lookup.get(id).correctIndex;
 assert.equal(summarizeSession(small,items).strengths.length,0);
});
test('pilot analysis rejects duplicates and stale records; no data means no reliability',()=>{
 const s=finish(fresh());const data=analyzePilot([{session:s},{session:s},{session:{...s,bankVersion:'old'}}],items,version);
 assert.equal(data.accepted,1);assert.equal(data.rejected.length,2);assert.ok(data.forms.every(f=>f.itemAlpha===null));assert.equal(data.validatedCEFR,false);
 assert.equal(analyzePilot([],items,version).forms.length,0);
 assert.ok(analyzePilot([{session:finish(fresh(6))}],items,version).forms.every(form=>form.formId==='F6'));
});
test('pilot raw counts exclude familiar audio and technical failures',()=>{
 let s=finish(fresh());const block=s.blocks.find(b=>b.domain==='listening');s.audioExposure[block.stimulusId]={familiar:true,starts:1};
 const result=analyzePilot([{session:s}],items,version),row=result.items.find(q=>q.id===block.itemIds[0]);assert.equal(row.n,0);assert.equal(row.familiar,1);assert.ok(!result.forms.some(f=>f.domain==='listening'));
});
test('consistency is calculated within an exact form and remains explicitly exploratory',()=>{
 const entries=Array.from({length:32},(_,n)=>({session:finish(fresh(1,`synthetic-${n}`),q=>n%2===0?q.correctIndex:(q.correctIndex+1)%4)}));
 const result=analyzePilot(entries,items,version);assert.ok(result.forms.every(f=>Math.abs(f.itemAlpha-1)<1e-10));assert.ok(result.forms.every(f=>f.discrimination.length===40));assert.equal(result.validatedCEFR,false);
 const zero=analyzePilot(entries.map((e,i)=>({session:finish(fresh(1,`zero-${i}`))})),items,version);assert.ok(zero.forms.every(f=>f.itemAlpha===null));
});
test('Wilson intervals handle extremes without fabricated certainty',()=>{assert.equal(wilson(0,0),null);assert.ok(wilson(0,10).high>.2);assert.ok(wilson(10,10).low<.8);assert.ok(wilson(5,10).low<.5&&wilson(5,10).high>.5);});
test('two excerpts from one conversation do not create independent skill evidence',()=>{
 const related=items.map(q=>q.domain==='listening'?{...q,independenceGroupId:'one-conversation'}:q);
 const s=finish(fresh());const report=summarizeSession(s,related);
 assert.equal(report.strengths.filter(r=>r.domain==='listening').length,0);
 assert.ok(report.skills.filter(r=>r.domain==='listening').every(r=>r.stimulusIds.length===1));
 const entries=Array.from({length:32},(_,n)=>({session:finish(fresh(1,`family-${n}`),q=>n%2?q.correctIndex:(q.correctIndex+1)%4)}));
 assert.equal(analyzePilot(entries,related,version).forms.find(f=>f.domain==='listening').stimulusClusterAlpha,null);
});
test('secondary catalogue tags do not duplicate diagnostic findings',()=>{
 const tagged=items.map(q=>({...q,tags:[...q.tags,'same-skill-alias']}));
 const report=summarizeSession(finish(fresh()),tagged);assert.ok(report.skills.every(s=>s.tag!=='same-skill-alias'));
});
test('each practice week has a distinct task in both languages',()=>{
 for(const lang of ['ru','en']){const plans=[1,2,3,4].map(w=>weekPlan(w,{domain:'reading',tag:'inference'},lang));assert.equal(new Set(plans.map(p=>p.title)).size,4);assert.equal(new Set(plans.map(p=>p.body)).size,4);assert.ok(plans.every(p=>p.body.length>100));}
});
test('a strong pattern is not also presented as a top weakness',()=>{
 const s=finish(fresh()),id=s.blocks.find(b=>b.domain==='reading').itemIds[0];s.answers[id]=(lookup.get(id).correctIndex+1)%4;
 const report=summarizeSession(s,items),keys=new Set(report.strengths.map(r=>r.domain+':'+r.tag));assert.ok(report.gaps.every(r=>!keys.has(r.domain+':'+r.tag)));
});
test('committed records must contain whole blocks and consistent completion state',()=>{
 const done=finish(fresh());assert.equal(validateSession({...done,finished:false},items,version),false);
 const freshSession=fresh(),id=freshSession.blocks[0].itemIds[0];assert.equal(validateSession({...freshSession,answers:{[id]:null},firstResponses:{[id]:null}},items,version),false);
 const edited={...done,position:0};const changed=answerQuestion(edited,edited.blocks[0].itemIds[0],null,items);assert.ok(validateSession(changed,items,version));
});
