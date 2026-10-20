// Editorial diagnostic only: this fixed-bank shortcut result is not learner accuracy.
import { listeningItems } from '../docs/large-listening-bank.mjs';
import { writeFile, mkdir } from 'node:fs/promises';
const root=new URL('../',import.meta.url);
let longest=0,shortest=0;
for(const x of listeningItems){
 const n=x.choices.map(s=>s.trim().split(/\s+/).length),max=Math.max(...n),min=Math.min(...n);
 longest+=n[x.correctIndex]===max?1/n.filter(z=>z===max).length:0;
 shortest+=n[x.correctIndex]===min?1/n.filter(z=>z===min).length:0;
}
const result={items:listeningItems.length,tiePolicy:'Uniform choice among tied alternatives',
 initialDraft:{longestOption:0.525,shortestOption:0.1402777777777778},
 current:{longestOption:longest/listeningItems.length,shortestOption:shortest/listeningItems.length},
 interpretation:'A fixed-bank editorial diagnostic, not a statistical estimate of student ability or psychometric validation. Editing these cues does not establish that semantic shortcuts or weak distractors are absent.'};
await mkdir(new URL('artifacts/cambridge/',root),{recursive:true});
await writeFile(new URL('artifacts/cambridge/large-listening-length-audit.json',root),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
