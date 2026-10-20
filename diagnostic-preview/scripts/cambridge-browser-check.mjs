import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {mkdir,readFile,writeFile} from 'node:fs/promises';
import {items,stimuli,BENCHMARK_VERSION} from '../dist/assessment-bank.js';
import {createAttempt,STORAGE_KEY} from '../dist/benchmark-engine.js';
const require=createRequire(import.meta.url);
const {chromium}=require('C:/Users/dajra/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
const base='http://127.0.0.1:4173/',out='artifacts/cambridge';
await mkdir(out,{recursive:true});
const checks=[],failures=[];
const context=await browser.newContext({viewport:{width:1440,height:1000},acceptDownloads:true});
const page=await context.newPage();
page.on('pageerror',error=>failures.push(error.message));
page.on('response',response=>{if(response.status()>=400)failures.push(`${response.status()} ${response.url()}`);});
const go=async route=>{await page.goto(base+'#'+route,{waitUntil:'networkidle'});await page.locator('main h1').waitFor();};
const locale=async lang=>{await page.locator(`[data-language="${lang}"]`).click();assert.equal(await page.locator('html').getAttribute('lang'),lang);};
const overflow=async name=>{assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),name);checks.push(name);};
const clips=stimuli.filter(s=>s.domain==='listening');
try{
 await go('home');assert.equal(await page.locator('html').getAttribute('lang'),'ru');assert.ok(await page.locator('.home-teacher img').count());
 await page.screenshot({path:`${out}/home-ru-desktop.png`,fullPage:true});await overflow('Russian home desktop');
 await locale('en');assert.doesNotMatch(await page.locator('body').innerText(),/[\u0400-\u04ff]/);await page.screenshot({path:`${out}/home-en-desktop.png`,fullPage:true});
 await go('sample');await page.locator('[data-action="start"]').first().click();await page.locator('#answer-form').waitFor();
 await page.locator(`input[value="${items[0].correctIndex}"]`).check();await locale('ru');await page.reload({waitUntil:'networkidle'});assert.ok(await page.locator(`input[value="${items[0].correctIndex}"]`).isChecked());checks.push('draft and RU/EN switching preserve selection');
 await page.setViewportSize({width:390,height:844});
 let seen=new Set();
 for(const item of items){
  assert.equal(await page.locator('.question-card h1').innerText(),item.prompt);
  if(item.domain==='listening'){
   assert.equal(await page.locator('.context').count(),0,'listening never exposes a transcript');
   if(!seen.has(item.stimulusId)){
    await page.waitForFunction(()=>{const a=document.querySelector('#task-audio');return a.readyState>=1&&a.duration>10;});
    await page.locator('.clip-questions summary').click();assert.equal(await page.locator('.clip-questions > ol > li').count(),items.filter(q=>q.stimulusId===item.stimulusId).length);
    assert.equal(await page.locator('.clip-questions ol ol li').count(),items.filter(q=>q.stimulusId===item.stimulusId).length*4);
    await page.locator('.clip-questions summary').click();
    await page.evaluate(()=>document.querySelector('#task-audio').play());await page.waitForFunction(()=>document.querySelector('#task-audio').currentTime>0.3);
    await overflow(`listening ${item.stimulusId} at390`);
    if(!seen.size){await page.screenshot({path:`${out}/listening-ru-mobile.png`,fullPage:true});await locale('en');await page.waitForFunction(()=>document.querySelector('#task-audio').currentTime>0.2);assert.doesNotMatch(await page.locator('body').innerText(),/[\u0400-\u04ff]/);await locale('ru');}
    seen.add(item.stimulusId);
   }
  }
  await page.locator(`input[value="${item.correctIndex}"]`).check();await page.locator('#answer-form button[type="submit"]').click();
 }
 await page.locator('.result-count').first().waitFor();assert.deepEqual(await page.locator('.result-count').allInnerTexts(),['10 / 10','10 / 10','10 / 10']);assert.equal(await page.locator('.review-item').count(),30);
 await overflow('completed30questions mobile');await page.screenshot({path:`${out}/results-ru-mobile.png`,fullPage:true});checks.push('all30questions complete; all4real recordings play');
 const download=page.waitForEvent('download');await page.locator('[data-action="download-responses"]').click();await(await download).saveAs(`${out}/responses.json`);
 const responses=JSON.parse(await readFile(`${out}/responses.json`,'utf8'));assert.equal(responses.cefrLevel,null);assert.equal(responses.listeningAssessed,true);assert.equal(responses.responses.length,30);checks.push('download contains listening responses without invented CEFR');
 await go('questions');await page.locator('[data-filter="listening"]').click();assert.equal(await page.locator('.review-item').count(),10);await page.locator('.review-item summary').first().click();assert.ok(await page.locator('.audio-evidence').first().isVisible());assert.equal(await page.locator('audio').count(),10);await overflow('listening answer evidence mobile');
 await go('example-report');assert.equal(await page.locator('.report-section').count(),6);assert.equal(await page.locator('.evidence').count(),10);assert.equal(await page.locator('.correction').count(),4);await locale('en');assert.doesNotMatch(await page.locator('body').innerText(),/[\u0400-\u04ff]/);
 const pdf=page.waitForEvent('download');await page.locator('.report-toolbar a[download]').click();await(await pdf).saveAs(`${out}/example.pdf`);assert.equal((await readFile(`${out}/example.pdf`)).subarray(0,5).toString(),'%PDF-');
 const html=page.waitForEvent('download');await page.locator('[data-action="download-report"]').click();await(await html).saveAs(`${out}/example.html`);assert.ok((await readFile(`${out}/example.html`,'utf8')).includes('Fictional example'));checks.push('full example report and PDF/HTML export remain functional');
 await go('recordings');assert.equal(await page.locator('.recording-card').count(),10);checks.push('original recording workspace retained');
 for(const view of ['home','questions','example-report','courses']){await go(view);for(const width of [320,390,768,1440]){await page.setViewportSize({width,height:900});await overflow(`${view} ${width}`);} }
 await go('home');await page.setViewportSize({width:390,height:844});await page.screenshot({path:`${out}/home-en-mobile.png`,fullPage:true});await go('results');await page.locator('[data-action="start"]').first().click();
 for(const item of items){await page.locator('input[value="-1"]').check();await page.locator('#answer-form button[type="submit"]').click();}
 await page.locator('.result-count').first().waitFor();
 assert.deepEqual(await page.locator('.result-count').allInnerTexts(),['0 / 10','0 / 10','0 / 10']);assert.equal((await page.locator('.grid-3').innerText()).match(/Unsure: 10/g).length,3);checks.push('all-unsure flow never claims a level');
 await page.evaluate(key=>localStorage.setItem(key,'broken'),STORAGE_KEY);await go('sample');assert.equal(await page.locator('#answer-form').count(),0);checks.push('corrupt saved attempt recovers');
 const audioAttempt=createAttempt(BENCHMARK_VERSION);audioAttempt.position=20;for(const item of items.slice(0,20))audioAttempt.answers[item.id]=item.correctIndex;
 const broken=await browser.newContext();await broken.addInitScript(({a,key})=>localStorage.setItem(key,JSON.stringify(a)),{a:audioAttempt,key:STORAGE_KEY});await broken.route('**/listening/**',route=>route.abort());
 const bp=await broken.newPage();await bp.goto(base+'#sample');await bp.waitForFunction(()=>document.querySelector('.audio-help')?.open);assert.match(await bp.locator('.audio-status').innerText(),/не загрузилась/);
 await bp.locator('input[value="0"]').check();assert.ok(await bp.locator('#answer-form button[type="submit"]').isDisabled());
 await bp.locator('#answer-form').evaluate(form=>form.dispatchEvent(new Event('submit',{bubbles:true,cancelable:true})));assert.equal(await bp.locator('.question-card h1').innerText(),items[20].prompt);
 for(let i=0;i<10;i++){await bp.locator('.audio-help').evaluate(el=>{el.open=true;});await bp.locator('[data-action="audio-unavailable"]').click();}
 await bp.locator('.result-count').first().waitFor();assert.match(await bp.locator('.grid-3').innerText(),/Не оценивалось/);assert.equal(await bp.locator('.result-count').last().innerText(),'Не оценивалось');checks.push('failed audio is not scored as zero or incorrect');await broken.close();
 const denied=await browser.newContext();await denied.addInitScript(()=>Object.defineProperty(window,'localStorage',{get(){throw new Error('blocked');}}));const dp=await denied.newPage();await dp.goto(base+'#sample');await dp.locator('[data-action="start"]').first().click();await dp.locator('input[value="0"]').check();await dp.locator('#answer-form button[type="submit"]').click();assert.ok(await dp.locator('.storage-warning').count());checks.push('blocked storage works in memory with visible notice');await denied.close();
 const decoded=await page.evaluate(async sources=>{
  const ctx=new AudioContext();try{return await Promise.all(sources.map(async src=>{const response=await fetch(src);const data=await response.arrayBuffer();const buffer=await ctx.decodeAudioData(data);return {src,duration:buffer.duration,channels:buffer.numberOfChannels,sampleRate:buffer.sampleRate};}));}finally{await ctx.close();}
 },clips.map(s=>typeof s.audio==='string'?s.audio:s.audio.src));
 for(const audio of decoded){assert.ok(audio.duration>10);assert.ok(audio.channels>=1);}checks.push('all4files fully decode in browser');
 assert.deepEqual(failures,[]);
 await writeFile(`${out}/browser-qa.json`,JSON.stringify({checks,decoded,pageErrors:failures,learnerValidation:false,realMicrophoneTested:false},null,2));console.log(`PASS: ${checks.length} browser checks;4decoded real recordings; no page/network errors.`);
}finally{await browser.close();}
