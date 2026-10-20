import {createRequire} from 'node:module';
import {mkdir,writeFile,readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {SESSION_KEY} from '../dist/platform-engine.js';
const require=createRequire(import.meta.url),{chromium}=require('C:/Users/dajra/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
const base='http://127.0.0.1:4173/',checks=[],out='artifacts/platform',errors=[];
await mkdir(out,{recursive:true});
const saved=page=>page.evaluate(key=>JSON.parse(localStorage.getItem(key)),SESSION_KEY);
const select=(page,id,value)=>page.locator(`[data-p-question="${id}"][value="${value}"]`).check();
async function start(page){await page.goto(base+'#assessment-setup');await page.locator('input[name=age]').check();await page.locator('input[name=understand]').check();await page.locator('#platform-setup-form button[type=submit]').click();await page.locator('#platform-answer-form').waitFor();return saved(page);}
async function pair({suppressStorage=false}={}){
 const context=await browser.newContext({acceptDownloads:true});
 if(suppressStorage)await context.addInitScript(()=>window.addEventListener('storage',event=>event.stopImmediatePropagation(),true));
 const a=await context.newPage(),b=await context.newPage();
 for(const page of[a,b])page.on('pageerror',error=>errors.push(error.message));
 const initial=await start(a);await b.goto(base+'#assessment');await b.locator('#platform-answer-form').waitFor();
 return {context,a,b,initial,ids:initial.blocks[0].itemIds};
}
async function copy(page,action='conflict-backup',name='tab-recovery.json'){
 const download=page.waitForEvent('download');await page.locator(`[data-p-action="${action}"]`).click();const file=await download;await file.saveAs(`${out}/${name}`);return JSON.parse(await readFile(`${out}/${name}`,'utf8'));
}
try{
 {
  const {context,a,b,initial,ids}=await pair();await select(a,ids[0],0);
  await b.locator('.platform-conflict-warning[role=alert]').waitFor();
  assert.ok(await b.locator(`[data-p-question="${ids[1]}"][value="1"]`).isDisabled());
  assert.equal((await saved(a)).answers[ids[0]],0);
  await a.reload({waitUntil:'networkidle'});assert.ok(await a.locator(`[data-p-question="${ids[0]}"][value="0"]`).isChecked());
  await b.locator('[data-language=en]').click();assert.match(await b.locator('.platform-conflict-warning').innerText(),/Another tab changed/);assert.doesNotMatch(await b.locator('.platform-conflict-warning').innerText(),/[\u0400-\u04ff]/);
  const backup=await copy(b,'conflict-reload','conflict-normal-backup.json');assert.equal(backup.session.id,initial.id);
  await b.locator('#platform-answer-form').waitFor();assert.ok(await b.locator(`[data-p-question="${ids[0]}"][value="0"]`).isChecked());
  await select(b,ids[1],1);await a.locator('.platform-conflict-warning[role=alert]').waitFor();
  const current=await saved(b);assert.equal(current.answers[ids[0]],0);assert.equal(current.answers[ids[1]],1);
  checks.push('storage events pause stale input; latest-load downloads the old tab and preserves both subsequently saved answers');
  checks.push('conflict guidance and actions work in Russian and English');await context.close();
 }
 // Suppress delivery to prove that comparison, rather than notification alone, protects storage.
 {
  const {context,a,b,ids}=await pair({suppressStorage:true});await select(a,ids[0],0);
  await a.waitForFunction(({key,id})=>JSON.parse(localStorage.getItem(key)).answers[id]===0,{key:SESSION_KEY,id:ids[0]});
  await select(b,ids[1],1);await b.locator('.platform-conflict-warning[role=alert]').waitFor();
  const current=await saved(a);assert.equal(current.answers[ids[0]],0);assert.equal(Object.hasOwn(current.answers,ids[1]),false);
  const backup=await copy(b,'conflict-backup','conflict-stale-backup.json');assert.equal(backup.session.answers[ids[1]],1);assert.equal(Object.hasOwn(backup.session.answers,ids[0]),false);
  checks.push('missed storage event cannot overwrite canonical answers; rejected local response is retained in a separate export');
  await context.close();
 }
 // Force two writes to wait for the same real Web Lock, then release them.
 {
  const {context,a,b,ids}=await pair({suppressStorage:true});
  await a.evaluate(key=>{navigator.locks.request(key+':write',async()=>{window.__qaLockHeld=true;await new Promise(resolve=>{window.__qaRelease=resolve;});});},SESSION_KEY);
  await a.waitForFunction(()=>window.__qaLockHeld);await select(a,ids[0],0);await select(b,ids[1],1);await a.evaluate(()=>window.__qaRelease());
  await a.waitForFunction(key=>Object.keys(JSON.parse(localStorage.getItem(key)).answers).length===1,SESSION_KEY);
  const current=await saved(a),loser=Object.hasOwn(current.answers,ids[0])?b:a,missing=Object.hasOwn(current.answers,ids[0])?ids[1]:ids[0];
  await loser.locator('.platform-conflict-warning[role=alert]').waitFor();const backup=await copy(loser,'conflict-backup','conflict-race-backup.json');
  assert.equal(backup.session.answers[missing],missing===ids[1]?1:0);assert.equal(Object.keys(current.answers).length,1);
  checks.push('simultaneous queued writes are serialized; losing snapshot is preserved without a silent merge');await context.close();
 }
 {
  const {context,a,b}=await pair({suppressStorage:true});await a.goto(base+'#writing');await b.goto(base+'#writing');
  const id=await a.locator('[data-p-writing]').first().getAttribute('data-p-writing');
  await a.locator('[data-p-writing]').first().fill('The first tab owns this saved draft.');
  await a.waitForFunction(({key,id})=>JSON.parse(localStorage.getItem(key)).writing[id]?.startsWith('The first tab'),{key:SESSION_KEY,id});
  await b.locator('[data-p-writing]').first().fill('The second tab has a different unsaved draft.');await b.locator('.platform-conflict-warning[role=alert]').waitFor();
  assert.equal((await saved(a)).writing[id],'The first tab owns this saved draft.');
  b.once('dialog',dialog=>dialog.accept());await b.reload({waitUntil:'networkidle'});
  assert.equal(await b.locator('[data-p-writing]').first().inputValue(),'The first tab owns this saved draft.');
  const backup=await copy(b,'conflict-backup','conflict-writing-backup.json');assert.equal(backup.session.writing[id],'The second tab has a different unsaved draft.');
  checks.push('conflicting writing survives a reload in an isolated per-tab recovery copy');await context.close();
 }
 {
  const {context,a,b,initial}=await pair();const replacement=await start(a);assert.notEqual(replacement.id,initial.id);await b.locator('.platform-conflict-warning[role=alert]').waitFor();
  const backup=await copy(b,'conflict-reload','conflict-replaced-attempt.json');assert.equal(backup.session.id,initial.id);assert.equal((await saved(b)).id,replacement.id);
  checks.push('stale tab cannot restore an attempt replaced in another tab');await context.close();
 }
 {
  const context=await browser.newContext({acceptDownloads:true});await context.addInitScript(()=>Object.defineProperty(navigator,'locks',{value:undefined}));const page=await context.newPage();
  await start(page);await page.locator('.platform-storage-warning').waitFor();const input=page.locator('[data-p-question]').first();const id=await input.getAttribute('data-p-question');await input.check();assert.equal(await saved(page),null);
  const download=page.waitForEvent('download');await page.locator('[data-p-action=export-attempt]').click();await(await download).saveAs(`${out}/conflict-no-lock-backup.json`);const data=JSON.parse(await readFile(`${out}/conflict-no-lock-backup.json`,'utf8'));assert.equal(data.session.answers[id],0);
  checks.push('without Web Locks, answers remain usable/exportable in memory and shared storage is never overwritten');await context.close();
 }
 assert.deepEqual(errors,[]);await writeFile(`${out}/conflict-qa.json`,JSON.stringify({result:'passed',checks,errors},null,2));console.log(`PASS: ${checks.length} cross-tab conflict and recovery checks.`);
}finally{await browser.close();}
