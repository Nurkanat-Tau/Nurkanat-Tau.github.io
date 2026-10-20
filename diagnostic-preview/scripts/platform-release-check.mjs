import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {readFile,readdir,writeFile,mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
const run=promisify(execFile),results=[];
async function snapshot(directory){const rows={};for(const entry of await readdir(directory,{withFileTypes:true})){const path=directory+'/'+entry.name;if(entry.isDirectory())Object.assign(rows,await snapshot(path));else rows[path]=createHash('sha256').update(await readFile(path)).digest('hex');}return rows;}
const before=await snapshot('dist');
const commands=[
 ['--test','tests/benchmark-*.test.mjs','tests/recording-room.test.mjs','tests/platform-engine.test.mjs'],
 ['scripts/benchmark-check.mjs'],['scripts/platform-bank-check.mjs'],
 ['scripts/cambridge-audio-check.mjs'],['scripts/large-listening-bank-check.mjs'],
 ['scripts/large-listening-shortcut-check.mjs'],['scripts/language-editorial-audit.mjs'],['scripts/cambridge-browser-check.mjs'],
 ['scripts/platform-browser-check.mjs'],['scripts/platform-resilience-check.mjs'],
 ['scripts/platform-conflict-check.mjs'],
 ['scripts/cambridge-review-check.mjs'],['scripts/recording-room-check.mjs'],
 ['scripts/platform-audio-browser-check.mjs'],['scripts/platform-print-check.mjs']
];
for(const args of commands){
 const start=Date.now();try{const {stdout}=await run(process.execPath,args,{maxBuffer:8*1024*1024,windowsHide:true,timeout:300000});results.push({command:['node',...args].join(' '),passed:true,milliseconds:Date.now()-start,output:stdout.trim()});console.log('PASS '+args.join(' '));}catch(error){console.error('FAILED '+args.join(' ')+'\n'+(error.stderr||error.stdout||error.message));process.exitCode=1;break;}
}
assert.deepEqual(await snapshot('dist'),before,'Deployed content must stay unchanged throughout the release suite');
await mkdir('artifacts/platform',{recursive:true});await writeFile('artifacts/platform/release-qa.json',JSON.stringify({result:process.exitCode?'failed':'passed',createdAt:new Date().toISOString(),checks:results,distHashes:before,scope:'Software, structure, media integrity and browser checks. Not learner-based validation; PDF visual inspection is recorded separately.'},null,2));
if(!process.exitCode)console.log(`All ${results.length} release commands passed against unchanged deployment files.`);
