import assert from 'node:assert/strict';
import {access,readFile} from 'node:fs/promises';
import {QUESTIONS} from '../dist/bank.js';
import {createAttempt,getNextQuestion,submitAnswer,getProgress,getReport,validateAttempt} from '../dist/engine.js';
assert.equal(QUESTIONS.length,80);
assert.equal(new Set(QUESTIONS.map(q=>q.id)).size,80);
for(const level of [0,1,2,3,4])for(const [domain,count]of [['language',8],['reading',4],['listening',4]])assert.equal(QUESTIONS.filter(q=>q.level===level&&q.domain===domain).length,count);
for(const q of QUESTIONS){assert.ok(q.prompt&&q.explanation&&q.explanationEn&&q.subskillEn,`${q.id} needs bilingual feedback`);assert.ok(q.answer>=0&&q.answer<q.options.length);assert.equal(new Set(q.options).size,q.options.length);if(q.domain==='reading')assert.ok(q.passage);if(q.domain==='listening'){assert.ok(q.transcript);await access(new URL('../dist/'+q.audio,import.meta.url));}}
for(const mode of ['quick','full'])for(const strategy of ['correct','wrong','mixed'])for(let seed=0;seed<25;seed++){
 let a=createAttempt(mode,`${seed}`);while(!getProgress(a).complete){const q=getNextQuestion(a,QUESTIONS);assert.ok(q,'Bank must cover every route');const response=strategy==='correct'?q.answer:strategy==='wrong'?null:a.answers.length%3?q.answer:null;a=submitAnswer(a,q,response);}
 assert.ok(validateAttempt(a,QUESTIONS));assert.ok(getReport(a,QUESTIONS).complete);
}
for(const file of ['index.html','styles.css','details.css','app.js','feedback.js','engine.js','bank.js','assets/teacher.jpg','assets/favicon.svg'])await access(new URL('../dist/'+file,import.meta.url));
const html=await readFile(new URL('../dist/index.html',import.meta.url),'utf8');assert.ok(html.includes('noindex,nofollow'));
console.log('Passed: bank structure, 150 complete routes, saved-attempt replay, media and page assets.');
