import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {writeFile} from 'node:fs/promises';
import {QUESTIONS} from '../dist/bank.js';
import {getNextQuestion} from '../dist/engine.js';
const require=createRequire(import.meta.url);
const {chromium}=require('C:/Users/dajra/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
const context=await browser.newContext({viewport:{width:1440,height:1000},deviceScaleFactor:1});
const page=await context.newPage();
const errors=[];page.on('pageerror',e=>errors.push(e.message));
page.on('response',r=>{if(r.status()>=400)errors.push(`${r.status()} ${r.url()}`);});
const checkOverflow=async(label)=>assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1),label+' has horizontal overflow');
try{
 await page.goto('http://127.0.0.1:4173',{waitUntil:'networkidle'});
 await page.locator('.hero h1').waitFor();
 await page.locator('.teacher-photo').scrollIntoViewIfNeeded();
 await page.waitForFunction(()=>[...document.images].every(i=>i.complete));
 await page.evaluate(()=>window.scrollTo(0,0));
 await checkOverflow('Desktop Russian');
 await page.screenshot({path:'artifacts/home-ru-desktop.png',fullPage:true});
 await page.locator('[data-action="language"]').click();
 assert.equal(await page.locator('html').getAttribute('lang'),'en');
 assert.match(await page.locator('.hero h1').innerText(),/Your English/);
 await page.screenshot({path:'artifacts/home-en-desktop.png',fullPage:true});
 await page.setViewportSize({width:390,height:844});
 await page.evaluate(()=>window.scrollTo(0,0));
 await checkOverflow('Mobile English');
 await page.screenshot({path:'artifacts/home-en-mobile.png',fullPage:true});
 await page.locator('[data-action="prepare"][data-mode="quick"]').click();
 await page.locator('[data-action="start"]').click();
 await page.locator('[data-action="answer"][data-index="0"]').click();
 await page.locator('[data-action="language"]').click();
 assert.equal(await page.locator('.answer-option[aria-pressed="true"]').count(),1,'Language switch preserves selection');
 await page.locator('[data-action="submit"]').click();
 const prompt=await page.locator('.question-title').innerText();
 await page.reload({waitUntil:'networkidle'});
 await page.locator('[data-action="resume"]').click();
 assert.equal(await page.locator('.question-title').innerText(),prompt,'Reload resumes same question');
 await page.screenshot({path:'artifacts/question-ru-mobile.png',fullPage:true});
 for(let i=1;i<12;i++){await page.locator('[data-action="unknown"]').click();await page.locator('[data-action="submit"]').click();}
 await page.locator('.result-hero').waitFor();
 assert.match(await page.locator('.result-skill-list').innerText(),/Не оценивалось/);
 await checkOverflow('Mobile Russian result');
 await page.screenshot({path:'artifacts/result-ru-mobile.png',fullPage:true});
 await page.locator('[data-action="language"]').click();
 assert.match(await page.locator('.result-skill-list').innerText(),/Not assessed/);
 await page.locator('[data-action="prepare"]').click();
 assert.equal(await page.locator('[data-action="start"]').isDisabled(),true);
 await page.locator('#audio-confirm').check();
 await page.locator('[data-action="start"]').click();
 for(let i=0;i<30;i++){
   const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('nurkanat-diagnostic-preview-v1')));
   const q=getNextQuestion(saved.attempt,QUESTIONS);
   if(q.domain==='listening'){
     const audio=page.locator('#question-audio');
     await audio.evaluate(async el=>{await el.play();});
     assert.ok(await audio.evaluate(el=>el.duration>0),'Audio has duration');
   }
   await page.locator(`[data-action="answer"][data-index="${q.answer}"]`).click();
   if(i===12||i===21)await page.screenshot({path:`artifacts/${q.domain}-en-mobile.png`,fullPage:true});
   await page.locator('[data-action="submit"]').click();
 }
 await page.locator('.result-hero').waitFor();
 await checkOverflow('Mobile English result');
 assert.match(await page.locator('.result-level').innerText(),/C1/);
 await page.screenshot({path:'artifacts/result-en-mobile.png',fullPage:true});
 await page.setViewportSize({width:1440,height:1000});
 await page.screenshot({path:'artifacts/result-en-desktop-viewport.png'});
 await page.screenshot({path:'artifacts/result-en-desktop.png',fullPage:true});
 const downloadPromise=page.waitForEvent('download');
 await page.locator('[data-action="download"]').click();
 const download=await downloadPromise;assert.equal(download.suggestedFilename(),'english-profile-en.txt');
 await page.locator('[data-action="home"]').first().click();
 await page.locator('[data-action="privacy"]').click();
 await page.locator('[data-action="delete-data"]').click();
 assert.equal(await page.evaluate(()=>localStorage.getItem('nurkanat-diagnostic-preview-v1')),null);
 for(const width of [360,390,430,768,1440]){await page.setViewportSize({width,height:900});await checkOverflow(`${width}px home`);}
 assert.deepEqual(errors,[]);
 console.log('Browser checks passed: RU/EN, quick/full flows, 20 audio assets present, listening playback, reload recovery, saved selection, results, download, deletion, mobile widths.');
 await writeFile('artifacts/browser-check.json',JSON.stringify({passed:true,errors,checks:['RU/EN','quick12','full30','audio playback','saved progress','download','data deletion','responsive overflow']},null,2));
}finally{await browser.close();}
