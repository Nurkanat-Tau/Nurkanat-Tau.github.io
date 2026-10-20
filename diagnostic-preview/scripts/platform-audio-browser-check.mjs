import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
import {listeningStimuli} from '../dist/large-listening-bank.js';
const require=createRequire(import.meta.url),{chromium}=require('C:/Users/dajra/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'}),results=[];
try{
 for(const source of listeningStimuli){
  // A fresh page releases each decoded AudioBuffer before the next large clip.
  const page=await browser.newPage();await page.goto('http://127.0.0.1:4173/');
  const result=await page.evaluate(async({src,expected})=>{
   const response=await fetch(src);if(!response.ok)throw Error('HTTP '+response.status);
   const bytes=await response.arrayBuffer(),context=new AudioContext();
   const decoded=await context.decodeAudioData(bytes),info={duration:decoded.duration,sampleRate:decoded.sampleRate,channels:decoded.numberOfChannels};await context.close();
   const audio=new Audio(src);audio.controls=true;document.body.append(audio);
   await new Promise((resolve,reject)=>{audio.onloadedmetadata=resolve;audio.onerror=()=>reject(Error('Native media error'));});
   await audio.play();await new Promise((resolve,reject)=>{const limit=setTimeout(()=>reject(Error('Playback did not advance')),5000);audio.ontimeupdate=()=>{if(audio.currentTime>.25){clearTimeout(limit);resolve();}};});
   audio.pause();const advanced=audio.currentTime;audio.currentTime=Math.min(expected-1,Math.max(2,expected/2));
   await new Promise((resolve,reject)=>{const limit=setTimeout(()=>reject(Error('Seek failed')),5000);audio.onseeked=()=>{clearTimeout(limit);resolve();};});
   const seek=audio.currentTime;audio.remove();return {...info,advanced,seek};
  },{src:source.audio,expected:source.durationSeconds});
  assert.ok(Math.abs(result.duration-source.durationSeconds)<.25,source.id+' full decode duration');assert.ok(result.advanced>.25);assert.ok(result.seek>1);results.push({id:source.id,...result});await page.close();
 }
 await mkdir('artifacts/platform',{recursive:true});await writeFile('artifacts/platform/audio-browser-qa.json',JSON.stringify({result:'passed',recordings:results,scope:'Full browser decode, native playback and seeking; not a human perceptual review.'},null,2));console.log(`PASS: all ${results.length} recordings fully decode, play and seek in Edge.`);
}finally{await browser.close();}
