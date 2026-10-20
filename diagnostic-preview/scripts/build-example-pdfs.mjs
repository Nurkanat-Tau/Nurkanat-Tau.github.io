import {createRequire} from 'node:module';
import {mkdir,copyFile} from 'node:fs/promises';
const require=createRequire(import.meta.url);
const {chromium}=require('C:/Users/dajra/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
await mkdir('output/pdf',{recursive:true});await mkdir('dist/reports',{recursive:true});
try{
 for(const locale of ['ru','en']){
  const page=await browser.newPage({viewport:{width:1200,height:1000}});
  await page.goto('http://127.0.0.1:4173/#example-report',{waitUntil:'networkidle'});
  await page.locator(`[data-language="${locale}"]`).click();
  await page.locator('.report-section').first().waitFor();
  await page.evaluate(async()=>{document.querySelectorAll('details').forEach(node=>node.open=true);await document.fonts.ready;});
  await page.emulateMedia({media:'print'});
  const file=`output/pdf/english-diagnostic-example-${locale}.pdf`;
  await page.pdf({path:file,format:'A4',printBackground:true,preferCSSPageSize:true,displayHeaderFooter:true,headerTemplate:'<span></span>',footerTemplate:`<div style="font-family:Arial;font-size:8px;color:#657187;width:100%;text-align:center">${locale==='ru'?'Вымышленный пример · Нұрқанат Дайраш':'Fictional example · Nurkanat Dairash'} &nbsp; · &nbsp; <span class="pageNumber"></span> / <span class="totalPages"></span></div>`});
  await copyFile(file,`dist/reports/example-${locale}.pdf`);await page.close();console.log(file);
 }
}finally{await browser.close();}
