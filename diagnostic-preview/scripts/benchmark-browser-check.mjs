import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {mkdir,readFile,writeFile} from 'node:fs/promises';
import {items} from '../dist/benchmark-content.js';
const require=createRequire(import.meta.url);
const {chromium}=require('C:/Users/dajra/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
await mkdir('artifacts/benchmark',{recursive:true});
const failures=[],checks=[];
const context=await browser.newContext({viewport:{width:1440,height:1000},deviceScaleFactor:1,acceptDownloads:true});
const page=await context.newPage();
page.on('pageerror',error=>failures.push(error.message));
page.on('response',response=>{if(response.status()>=400)failures.push(`${response.status()} ${response.url()}`);});
const base='http://127.0.0.1:4173/';
async function go(route){await page.goto(base+'#'+route,{waitUntil:'networkidle'});await page.locator('main h1').waitFor();}
async function overflow(label){assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),label);checks.push(label);}
async function locale(code){await page.locator(`[data-language="${code}"]`).click();assert.equal(await page.locator('html').getAttribute('lang'),code);}
try{
 await go('home');assert.equal(await page.locator('html').getAttribute('lang'),'ru');
 assert.match(await page.locator('.hero').innerText(),/30 заданий подготовлены/);
 assert.equal(await page.locator('.strip > *').count(),3,'statistics strip contains only three metrics');
 assert.equal(await page.locator('main > section > .grid-3').count(),1,'feature grid occupies its own full-width section');
 await overflow('desktop Russian home fits');await page.screenshot({path:'artifacts/benchmark/home-ru-desktop.png',fullPage:true});
 await locale('en');assert.doesNotMatch(await page.locator('body').innerText(),/[\u0400-\u04ff]/);
 await page.screenshot({path:'artifacts/benchmark/home-en-desktop.png',fullPage:true});
 await page.locator('[data-action="start"]').click();await page.locator('#answer-form').waitFor();
 const first=items.filter(q=>q.domain!=='listening')[0];
 await page.locator(`input[name="answer"][value="${first.correctIndex}"]`).check();
 await locale('ru');assert.ok(await page.locator(`input[value="${first.correctIndex}"]`).isChecked());
 await page.reload({waitUntil:'networkidle'});assert.ok(await page.locator(`input[value="${first.correctIndex}"]`).isChecked(),'unsent selection survives reload');
 await page.setViewportSize({width:390,height:844});await overflow('mobile question fits');
 await page.screenshot({path:'artifacts/benchmark/question-ru-mobile.png',fullPage:true});
 const playable=items.filter(q=>q.domain!=='listening');
 for(let index=0;index<playable.length;index++){
   const q=playable[index];assert.equal(await page.locator('.question-card h1').innerText(),q.prompt);
   await page.locator(`input[name="answer"][value="${q.correctIndex}"]`).check();await page.locator('#answer-form button[type="submit"]').click();
 }
 await page.locator('.result-count').first().waitFor();assert.equal(await page.locator('.result-count').first().innerText(),'10 / 10');
 assert.match(await page.locator('.grid-3').innerText(),/Не оценивалось/);assert.equal(await page.locator('.review-item').count(),20);await overflow('mobile completed responses fit');
 const responsesDownload=page.waitForEvent('download');await page.locator('[data-action="download-responses"]').click();const rd=await responsesDownload;await rd.saveAs('artifacts/benchmark/sample-responses-ru.json');
 const responses=JSON.parse(await readFile('artifacts/benchmark/sample-responses-ru.json','utf8'));assert.equal(responses.cefrLevel,null);assert.equal(responses.listeningAssessed,false);assert.equal(responses.responses.length,20);
 await page.screenshot({path:'artifacts/benchmark/results-ru-mobile.png',fullPage:true});
 await go('questions');assert.equal(await page.locator('.review-item').count(),30);
 await page.locator('[data-filter="listening"]').click();assert.equal(await page.locator('.review-item').count(),10);
 await page.locator('.review-item').first().locator('summary').click();assert.match(await page.locator('.review-body').first().innerText(),/не считается выполнением аудирования/);
 assert.equal(await page.locator('audio').count(),0);await overflow('mobile open listening script fits');
 await go('example-report');assert.equal(await page.locator('.report-section').count(),6);assert.equal(await page.locator('.evidence').count(),10);assert.equal(await page.locator('.correction').count(),4);
 assert.match(await page.locator('.notice').innerText(),/Вымышленный пример/);
 await page.locator('[data-evidence="EX-W1"]').first().click();assert.equal(new URL(page.url()).hash,'#example-report','evidence navigation does not replace application route');
 await locale('en');assert.doesNotMatch(await page.locator('body').innerText(),/[\u0400-\u04ff]/);
 await overflow('mobile English report fits');
 const pdfDownload=page.waitForEvent('download');await page.locator('.report-toolbar a[download]').click();const pd=await pdfDownload;await pd.saveAs('artifacts/benchmark/downloaded-example-en.pdf');assert.equal((await readFile('artifacts/benchmark/downloaded-example-en.pdf')).subarray(0,5).toString(),'%PDF-');
 await page.setViewportSize({width:1440,height:1000});await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:'artifacts/benchmark/report-en-top.png'});
 await page.locator('#EX-W1').scrollIntoViewIfNeeded();await page.screenshot({path:'artifacts/benchmark/report-writing-en.png'});
 const reportDownload=page.waitForEvent('download');await page.locator('[data-action="download-report"]').click();const hd=await reportDownload;await hd.saveAs('artifacts/benchmark/example-report-en.html');
 const standalone=await readFile('artifacts/benchmark/example-report-en.html','utf8');assert.ok(standalone.includes('Fictional example'));assert.ok(standalone.includes('my manager changed my shift yesterday'));assert.ok(!standalone.includes('undefined'));assert.ok(!standalone.includes('[object Object]'));
 await page.evaluate(()=>{window.print=()=>{window.__printCalled=true;};});await page.locator('[data-action="print"]').click();assert.ok(await page.evaluate(()=>window.__printCalled));
 await go('recordings');assert.equal(await page.locator('.recording-card').count(),10);assert.doesNotMatch(await page.locator('body').innerText(),/[\u0400-\u04ff]/);
 assert.equal(await page.locator('audio').count(),0,'no invented listening audio');await page.locator('.recording-script').first().locator('summary').click();assert.ok((await page.locator('.recording-script pre').first().innerText()).length>100);
 for(const width of [320,390,768,1440]){await page.setViewportSize({width,height:900});await overflow(`recording workspace fits at ${width}`);}
 await page.screenshot({path:'artifacts/benchmark/recording-en-desktop.png'});
 const scriptsDownload=page.waitForEvent('download');await page.locator('[data-room-action="export-scripts"]').click();const sd=await scriptsDownload;await sd.saveAs('artifacts/benchmark/recording-scripts.txt');assert.ok((await readFile('artifacts/benchmark/recording-scripts.txt','utf8')).includes('human-c1'));
 for(const view of ['home','questions','example-report','courses']){await go(view);await page.setViewportSize({width:320,height:800});await overflow(`${view} fits at 320`);}
 await go('home');await page.locator('[data-action="start"]').click();
 for(let i=0;i<playable.length;i++){await page.locator('input[value="-1"]').check();await page.locator('#answer-form button[type="submit"]').click();}
 assert.equal(await page.locator('.result-count').first().innerText(),'0 / 10');assert.match(await page.locator('.grid-3').innerText(),/Unsure: 10/);checks.push('all-correct and all-unknown flows preserve separate unassessed listening');
 await page.evaluate(()=>localStorage.setItem('nurkanat-benchmark-sample-1','broken'));await go('sample');assert.equal(await page.locator('#answer-form').count(),0);assert.ok(await page.locator('[data-action="start"]').count());checks.push('corrupt storage recovers');
 const denied=await browser.newContext({viewport:{width:390,height:844}});await denied.addInitScript(()=>Object.defineProperty(window,'localStorage',{get(){throw new Error('blocked');}}));const deniedPage=await denied.newPage();await deniedPage.goto(base);await deniedPage.locator('[data-action="start"]').click();await deniedPage.locator('input[value="0"]').check();await deniedPage.locator('#answer-form button[type="submit"]').click();assert.ok(await deniedPage.locator('.storage-warning').count());checks.push('blocked storage still permits in-memory assessment with visible warning');await denied.close();
 assert.deepEqual(failures,[]);
 await writeFile('artifacts/benchmark/browser-qa.json',JSON.stringify({checks,consoleErrors:failures,realHumanAudioTested:false,realMicrophoneTested:false},null,2));
 console.log(`Passed ${checks.length} browser checks: complete flows, recovery, RU/EN, report export, scripts, mobile widths. No page/network errors.`);
}finally{await browser.close();}
