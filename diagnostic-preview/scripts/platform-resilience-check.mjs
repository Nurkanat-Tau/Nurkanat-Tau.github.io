import {createRequire} from 'node:module';
import {mkdir,writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {bankItems,BANK_VERSION} from '../dist/platform-bank.js';
import {SESSION_KEY,createSession,answerQuestion,completeBlock,exportSession} from '../dist/platform-engine.js';
const require=createRequire(import.meta.url),{chromium}=require('C:/Users/dajra/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'}),checks=[];
const upload=(name,text)=>({name,mimeType:'application/json',buffer:Buffer.from(text)});
try{
 const page=await browser.newPage();await page.goto('http://127.0.0.1:4173/#assessment-setup');
 await page.locator('#attempt-import').setInputFiles(upload('broken.json','{bad'));
 await page.waitForFunction(()=>document.querySelector('.toast')?.textContent.includes('импортировать'));
 assert.equal(await page.locator('#platform-setup-form').count(),1);checks.push('malformed attempt cannot replace current state');
 let s=createSession({items:bankItems,bankVersion:BANK_VERSION,seed:1,id:'resilience-qa',goal:'<img src=x onerror="window.__xss=true">'});
 while(!s.finished){for(const id of s.blocks[s.position].itemIds)s=answerQuestion(s,id,null,bankItems);s=completeBlock(s);}
 const stale={...s,bankVersion:'obsolete'};await page.locator('#attempt-import').setInputFiles(upload('stale.json',JSON.stringify({session:stale})));
 await page.waitForFunction(()=>document.querySelector('.toast')?.textContent.includes('Несовместимый'));assert.equal(await page.locator('#platform-setup-form').count(),1);checks.push('stale bank version rejected');
 await page.locator('#attempt-import').setInputFiles(upload('valid.json',JSON.stringify(exportSession(s,bankItems))));await page.locator('.platform-result-cards').waitFor();assert.equal(await page.locator('main img').count(),0);assert.equal(await page.evaluate(()=>window.__xss),undefined);assert.match(await page.locator('main').innerText(),/<img src=x/);checks.push('imported goal is displayed as text, not executable markup');
 await page.goto('http://127.0.0.1:4173/#teacher-review');await page.locator('#teacher-import').setInputFiles(upload('valid.json',JSON.stringify({session:s})));await page.locator('#teacher-feedback-form').waitFor();await page.locator('input[name=reviewer]').fill('QA');await page.locator('select[name=writing-level]').selectOption('C1');let downloads=0;page.on('download',()=>downloads++);await page.locator('#teacher-feedback-form button').click();await page.waitForFunction(()=>document.querySelector('.toast')?.textContent.includes('основания'));assert.equal(downloads,0);checks.push('unsupported teacher level cannot be exported without evidence');
 await page.evaluate(key=>localStorage.setItem(key,'{broken'),SESSION_KEY);await page.goto('http://127.0.0.1:4173/#assessment');await page.reload({waitUntil:'networkidle'});await page.locator('main h1').waitFor();assert.equal(await page.locator('#platform-answer-form').count(),0);assert.equal(await page.locator('a[href="#assessment-setup"]').count(),1);checks.push('corrupted local attempt recovers without fabricating a result');
 const quota=await browser.newContext();await quota.addInitScript(()=>{Storage.prototype.setItem=function(){throw new DOMException('full','QuotaExceededError');};});const qp=await quota.newPage();await qp.goto('http://127.0.0.1:4173/#assessment-setup');await qp.locator('input[name=age]').check();await qp.locator('input[name=understand]').check();await qp.locator('#platform-setup-form button[type=submit]').click();await qp.locator('#platform-answer-form').waitFor();assert.ok(await qp.locator('.platform-storage-warning').isVisible());await qp.locator('[data-p-question]').first().check();assert.ok(await qp.locator('.platform-storage-warning').isVisible());await quota.close();checks.push('storage quota failure leaves a persistent backup warning and usable in-memory answers');
 await mkdir('artifacts/platform',{recursive:true});await writeFile('artifacts/platform/resilience-qa.json',JSON.stringify({result:'passed',checks},null,2));console.log(`PASS: ${checks.length} malformed-data, XSS and evidence-gating checks.`);
}finally{await browser.close();}
