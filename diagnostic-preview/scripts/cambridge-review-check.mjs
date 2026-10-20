import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {writeFile} from 'node:fs/promises';
import {items} from '../dist/assessment-bank.js';
const require=createRequire(import.meta.url);
const {chromium}=require('C:/Users/dajra/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
try{
 const page=await browser.newPage();await page.goto('http://127.0.0.1:4173/#questions');await page.locator('[data-filter="listening"]').click();
 for(const item of items.filter(q=>q.domain==='listening')){
  const review=page.locator(`[data-item-id="${item.id}"]`);await review.locator('summary').click();await review.locator('[data-action="listen-evidence"]').click();
  await page.waitForFunction(({id,target})=>{const a=document.querySelector(`[data-item-id="${id}"] audio`);return !a.paused&&a.currentTime>=target-.2&&a.currentTime<target+4;},{id:item.id,target:Math.max(0,item.evidenceTiming.startSeconds-1)});
  assert.equal(await page.locator('audio').evaluateAll(nodes=>nodes.filter(a=>!a.paused).length),1,'review clips cannot overlap');
 }
 const response=await page.request.get('http://127.0.0.1:4173/listening/c21-t1-sailing.mp3',{headers:{Range:'bytes=0-99'}});assert.equal(response.status(),206);assert.equal((await response.body()).length,100);assert.equal(response.headers()['content-type'],'audio/mpeg');
 const invalid=await page.request.get('http://127.0.0.1:4173/listening/c21-t1-sailing.mp3',{headers:{Range:'bytes=999999999-'}});assert.equal(invalid.status(),416);
 await writeFile('artifacts/cambridge/review-qa.json',JSON.stringify({result:'passed',checks:['all10evidencebuttons seek to supported span','review audio cannot overlap','audio range requests206and416','correctMIME'],learnerValidation:false},null,2));console.log('PASS:10review evidence seeks, no overlapping playback, HTTP range handling.');
}finally{await browser.close();}
