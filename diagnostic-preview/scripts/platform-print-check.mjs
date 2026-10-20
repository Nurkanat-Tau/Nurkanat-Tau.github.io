import {createRequire} from 'node:module';
import {mkdir,readFile} from 'node:fs/promises';
import {SESSION_KEY} from '../dist/platform-engine.js';
const require=createRequire(import.meta.url),{chromium}=require('C:/Users/dajra/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
try{
 const context=await browser.newContext(),page=await context.newPage(),{session}=JSON.parse(await readFile('artifacts/platform/attempt.json','utf8'));
 await context.addInitScript(({key,s})=>localStorage.setItem(key,JSON.stringify(s)),{key:SESSION_KEY,s:session});await mkdir('artifacts/platform/print',{recursive:true});
 for(const lang of ['ru','en']){await page.emulateMedia({media:'screen'});await page.goto('http://127.0.0.1:4173/#my-report',{waitUntil:'networkidle'});await page.locator(`[data-language="${lang}"]`).click();await page.emulateMedia({media:'print'});await page.pdf({path:`artifacts/platform/print/report-${lang}.pdf`,format:'A4',printBackground:true,margin:{top:'14mm',bottom:'14mm',left:'12mm',right:'12mm'}});}
 console.log('Personal report print outputs created for visual review in both languages.');
}finally{await browser.close();}
