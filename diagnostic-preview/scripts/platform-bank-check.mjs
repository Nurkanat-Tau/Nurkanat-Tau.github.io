import assert from 'node:assert/strict';
import {readFile,access,writeFile,mkdir} from 'node:fs/promises';
import {bankItems,bankStimuli,BANK_VERSION,bankStatus} from '../dist/platform-bank.js';
import {buildForm,FORM_COUNT,DOMAINS,LEVELS} from '../dist/platform-engine.js';
import {skillLabels} from '../dist/platform-copy.js';
const normalized=value=>String(value).toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim();
assert.equal(bankItems.length,600);assert.equal(new Set(bankItems.map(q=>q.id)).size,600);
assert.equal(new Set(bankStimuli.map(s=>s.id)).size,bankStimuli.length);
assert.deepEqual(DOMAINS.map(d=>bankItems.filter(q=>q.domain===d).length),[240,240,120]);
assert.equal(bankStatus.validatedForCEFRPlacement,false);assert.equal(bankStatus.learnerCalibrationCount,0);
const lookup=new Map(bankStimuli.map(s=>[s.id,s])),fingerprints=new Set(),keys=[0,0,0,0],tags=new Set();
for(const q of bankItems){
 assert.ok(lookup.has(q.stimulusId),q.id+' source');assert.equal(lookup.get(q.stimulusId).domain,q.domain);
 assert.equal(q.choices.length,4,q.id+' four options');assert.equal(new Set(q.choices.map(x=>x.normalize('NFKC').replace(/[‘’]/g,"'").replace(/\s+/g,' ').trim().toLowerCase())).size,4,q.id+' distinct options');
 assert.ok(Number.isInteger(q.correctIndex)&&q.correctIndex>=0&&q.correctIndex<4,q.id+' valid key');keys[q.correctIndex]++;
 assert.equal(q.distractorRationales.length,3);assert.deepEqual(q.distractorRationales.map(r=>r.choiceIndex).sort(),[0,1,2,3].filter(i=>i!==q.correctIndex),q.id+' rationale mapping');
 for(const field of ['construct','explanation','scopeLimits'])for(const lang of ['ru','en'])assert.ok(typeof q[field]?.[lang]==='string'&&q[field][lang].trim().length>=10,`${q.id}/${field}/${lang}`);
 for(const rationale of q.distractorRationales)for(const lang of ['ru','en'])assert.ok(typeof rationale[lang]==='string'&&rationale[lang].trim().length>=8,`${q.id}/distractor/${lang}`);
 assert.ok(typeof q.answerEvidence==='string'&&q.answerEvidence.length>10,q.id+' evidence');
 assert.ok(q.tags?.length>0,q.id+' skill tags');q.tags.forEach(tag=>tags.add(tag));
 assert.ok(skillLabels[q.tags[0]],q.id+' localized primary diagnostic skill');
 assert.doesNotMatch([q.prompt,...q.choices,q.answerEvidence].join(' '),/\bTODO\b|\bTBD\b|placeholder|lorem ipsum|undefined|\[object Object\]/i,q.id+' unfinished text');
 const source=lookup.get(q.stimulusId),text=source.text??source.context??source.passage??source.id;
 const fingerprint=normalized(text+' '+q.prompt+' '+q.choices.join(' '));assert.ok(!fingerprints.has(fingerprint),q.id+' duplicate question/context');fingerprints.add(fingerprint);
 if(q.domain==='listening'){
  assert.ok(q.independenceGroupId&&q.independenceGroupId===source.independenceGroupId,q.id+' source-family linkage');
  assert.equal(q.targetLevel,null,q.id+' unsupported listening level');assert.ok(q.evidenceTiming,q.id+' listening evidence timing');
  assert.ok(q.evidenceTiming.startSeconds>=0&&q.evidenceTiming.endSeconds>q.evidenceTiming.startSeconds,q.id+' evidence range');
  const duration=source.durationSeconds??source.audio?.durationSeconds;assert.ok(Number.isFinite(duration)&&q.evidenceTiming.endSeconds<=duration+.15,q.id+' evidence inside recording');
 }else assert.equal(q.targetLevelStatus,'author_hypothesis');
}
for(const level of LEVELS)assert.equal(bankItems.filter(q=>q.domain==='language'&&q.targetLevel===level).length,48);
const passages=bankStimuli.filter(s=>s.domain==='reading');assert.equal(passages.length,48);
const readingCounts=[];
for(const passage of passages){const count=passage.text.trim().split(/\s+/).length;readingCounts.push({id:passage.id,level:passage.targetLevel,words:count});assert.equal(bankItems.filter(q=>q.stimulusId===passage.id).length,5);assert.ok(count>=45&&count<=600,passage.id+' substantive passage length');}
const audio=bankStimuli.filter(s=>s.domain==='listening');assert.ok(audio.length>=24);
assert.equal(new Set(audio.map(s=>s.independenceGroupId)).size,16,'16 underlying conversations/talks');
for(const source of audio){const src=typeof source.audio==='string'?source.audio:source.audio?.src;assert.ok(src&&!src.includes('..')&&!src.startsWith('http'));await access(new URL('../dist/'+src,import.meta.url));}
for(const name of ['language','reading','listening'])assert.equal(await readFile(new URL(`../docs/large-${name}-bank.mjs`,import.meta.url),'utf8'),await readFile(new URL(`../dist/large-${name}-bank.js`,import.meta.url),'utf8'),name+' reviewed/browser mirror');
const covered=new Set(),forms=[];
for(let seed=1;seed<=FORM_COUNT;seed++){
 const blocks=buildForm(bankItems,seed),ids=blocks.flatMap(b=>b.itemIds);ids.forEach(id=>covered.add(id));assert.equal(ids.length,120);
 assert.deepEqual(DOMAINS.map(d=>blocks.filter(b=>b.domain===d).flatMap(b=>b.itemIds).length),[40,40,40]);
 for(const block of blocks.filter(b=>b.domain!=='language'))assert.deepEqual(block.itemIds,bankItems.filter(q=>q.stimulusId===block.stimulusId).map(q=>q.id));
 forms.push({seed,blocks:blocks.length,itemIds:ids});
}
assert.equal(covered.size,600,'every bank item is reachable in the eight focused forms');
await mkdir('artifacts/platform',{recursive:true});
await writeFile('artifacts/platform/bank-qa.json',JSON.stringify({result:'passed',bankVersion:BANK_VERSION,items:bankItems.length,counts:[240,240,120],passages:passages.length,recordings:audio.length,keyPositions:keys,skillTags:[...tags].sort(),readingLengths:readingCounts,forms,learnerValidation:false,claims:'Structural and source-link checks only; editorial review is separate.'},null,2));
console.log(`PASS:600complete questions;48passages;${audio.length}recordings;eight120-question forms cover all600items; mirrors identical.`);
