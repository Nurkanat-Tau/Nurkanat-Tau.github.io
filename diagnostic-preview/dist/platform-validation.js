import {validateSession,DOMAINS,LEVELS,evidenceGroup} from './platform-engine.js';
const mean=a=>a.reduce((x,y)=>x+y,0)/a.length;
const variance=a=>{const m=mean(a);return mean(a.map(x=>(x-m)**2));};
export function wilson(successes,n){if(!n)return null;const z=1.959963984540054,p=successes/n,denominator=1+z*z/n,center=(p+z*z/(2*n))/denominator,half=z*Math.sqrt((p*(1-p)+z*z/(4*n))/n)/denominator;return {low:Math.max(0,center-half),high:Math.min(1,center+half)};}
function correlation(xs,ys){if(xs.length<3)return null;const mx=mean(xs),my=mean(ys),vx=variance(xs),vy=variance(ys);if(!vx||!vy)return null;return mean(xs.map((x,i)=>(x-mx)*(ys[i]-my)))/Math.sqrt(vx*vy);}
function alpha(rows){if(rows.length<30||rows[0]?.length<2)return null;const k=rows[0].length,totals=rows.map(row=>row.reduce((a,b)=>a+b,0)),v=variance(totals);if(v===0)return null;return k/(k-1)*(1-Array.from({length:k},(_,i)=>variance(rows.map(row=>row[i]))).reduce((a,b)=>a+b,0)/v);}

// This is an inspection tool for supplied pilot records, never a validation certificate.
export function analyzePilot(entries,items,bankVersion){
 if(!Array.isArray(entries)||entries.length>10000)throw new Error('Supply an array of at most10000attempt exports');
 const byId=new Map(items.map(q=>[q.id,q])),seen=new Set(),accepted=[],rejected=[];
 for(const [index,entry]of entries.entries()){
  const session=entry?.session;
  if(!validateSession(session,items,bankVersion)){rejected.push({index,reason:'invalid-or-stale-session'});continue;}
  if(seen.has(session.id)){rejected.push({index,reason:'duplicate-attempt-id'});continue;}
  seen.add(session.id);accepted.push({session,reference:entry.reference||null});
 }
 const itemStats=new Map(items.map(q=>[q.id,{id:q.id,domain:q.domain,stimulusId:q.stimulusId,n:0,correct:0,unsure:0,technical:0,familiar:0,options:Array(q.choices.length).fill(0)}]));
 const forms=new Map();
 for(const {session,reference}of accepted){
  for(const [id,response]of Object.entries(session.firstResponses)){
   const q=byId.get(id),stat=itemStats.get(id);
   if(response==='unavailable'){stat.technical++;continue;}
   if(q.domain==='listening'&&session.audioExposure[q.stimulusId]?.familiar){stat.familiar++;continue;}
   stat.n++;if(response===null)stat.unsure++;else{stat.options[response]++;if(response===q.correctIndex)stat.correct++;}
  }
  for(const domain of DOMAINS){
   const ids=session.blocks.filter(b=>b.domain===domain).flatMap(b=>b.itemIds).sort();
   const usable=ids.every(id=>Object.hasOwn(session.firstResponses,id)&&session.firstResponses[id]!=='unavailable'&&!(domain==='listening'&&session.audioExposure[byId.get(id).stimulusId]?.familiar));
   if(!usable)continue;
   const signature=domain+':'+ids.join('|');
   if(!forms.has(signature))forms.set(signature,{formId:session.formId,domain,itemIds:ids,rows:[],references:[]});
   const form=forms.get(signature);form.rows.push(ids.map(id=>session.firstResponses[id]===byId.get(id).correctIndex?1:0));
   const level=reference?.levels?.[domain];form.references.push(LEVELS.includes(level)?level:null);
  }
 }
 const formStats=[...forms.values()].map(form=>{
  const totals=form.rows.map(row=>row.reduce((a,b)=>a+b,0));
  const groupIds=[...new Set(form.itemIds.map(id=>evidenceGroup(byId.get(id))))];
  const grouped=form.rows.map(row=>groupIds.map(group=>row.reduce((sum,value,i)=>sum+(evidenceGroup(byId.get(form.itemIds[i]))===group?value:0),0)));
  return {formId:form.formId,domain:form.domain,itemIds:form.itemIds,n:form.rows.length,meanCorrect:mean(totals),itemAlpha:alpha(form.rows),stimulusClusterAlpha:alpha(grouped),discrimination:form.rows.length>=30?form.itemIds.map((id,i)=>({id,correctedItemRest:correlation(form.rows.map(row=>row[i]),form.rows.map(row=>row.reduce((sum,value,j)=>sum+(i===j?0:value),0)))})):[],referenceGroups:LEVELS.map(level=>{const values=totals.filter((_,i)=>form.references[i]===level);return {level,n:values.length,meanCorrect:values.length?mean(values):null};})};
 });
 return {type:'pilot-inspection',bankVersion,received:entries.length,accepted:accepted.length,rejected,completed:accepted.filter(e=>e.session.finished).length,incomplete:accepted.filter(e=>!e.session.finished).length,items:[...itemStats.values()].map(stat=>({...stat,proportionCorrect:stat.n?stat.correct/stat.n:null,interval95:wilson(stat.correct,stat.n),status:stat.n<30?'too-few-observations':'descriptive-only'})),forms:formStats,validatedCEFR:false,limitations:['Only explicitly supplied records are analysed. Identity and independence are not verified.','Partial attempts remain visible; technical failures and familiar recordings are excluded from item accuracy.','Raw item proportions depend on the sampled learners. They are not CEFR difficulty calibrations.','Consistency and item-rest correlations require at least30 complete domain responses on the exact same form. This threshold is a reporting safeguard, not a sufficient study sample size.','Reading/listening responses share stimuli. Item alpha can overstate independent information; cluster alpha is exploratory too.','Neither alpha nor a large bank establishes valid cutoffs, fairness, precise sublevels or equivalence between different forms.']};
}
