export const SESSION_VERSION='focused-assessment-1';
export const SESSION_KEY='nurkanat-focused-assessment-1';
export const LEVELS=['A1','A2','B1','B2','C1'];
export const DOMAINS=['language','reading','listening'];
export const FORM_COUNT=8;
export const evidenceGroup=item=>item.independenceGroupId||item.stimulusId;
export const validResponse=(value,item)=>value===null||(value==='unavailable'&&item.domain==='listening')||(Number.isInteger(value)&&value>=0&&value<item.choices.length);
function random(seed){let a=seed>>>0;return()=>{a+=0x6D2B79F5;let t=a;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};}
function shuffle(values,rng){const a=[...values];for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function clusters(items,domain){const result=new Map();for(const q of items.filter(q=>q.domain===domain)){if(!result.has(q.stimulusId))result.set(q.stimulusId,[]);result.get(q.stimulusId).push(q);}return [...result.values()];}

// These are parallel practice/pilot forms with content balance, not an IRT adaptive test.
// No response threshold here claims to establish a CEFR level.
export function buildForm(items,seed=1){
 const formIndex=((seed-1)%FORM_COUNT+FORM_COUNT)%FORM_COUNT,rng=random(74021+formIndex),blocks=[];
 const language=[];
 for(const [levelIndex,level]of LEVELS.entries()){
  const pool=shuffle(items.filter(q=>q.domain==='language'&&q.targetLevel===level),random(711+levelIndex));if(pool.length<8)throw new Error(`Insufficient language coverage: ${level}`);
  const anchors=pool.slice(0,2),rotating=pool.slice(2);language.push(...anchors,...Array.from({length:6},(_,i)=>rotating[(formIndex*6+i)%rotating.length]));
 }
 const ordered=shuffle(language,rng);
 for(let i=0;i<ordered.length;i+=5)blocks.push({id:`language-${i/5+1}`,domain:'language',itemIds:ordered.slice(i,i+5).map(q=>q.id),stimulusId:null});
 const reading=clusters(items,'reading'),extraLevels=['A1','A2','B1','B2','A1','A2','B1','B2'];
 for(const [levelIndex,level]of LEVELS.entries()){
  const pool=shuffle(reading.filter(group=>group[0].targetLevel===level&&group.length===5),random(812+levelIndex));
  const anchored=level==='A2'||level==='B1',count=1+(extraLevels[formIndex]===level?1:0);
  if(pool.length<count+(anchored?1:0))throw new Error(`Insufficient reading coverage: ${level}`);
  const rotating=anchored?pool.slice(1):pool,offset=formIndex+extraLevels.slice(0,formIndex).filter(l=>l===level).length;
  const selected=[...(anchored?[pool[0]]:[]),...Array.from({length:count},(_,i)=>rotating[(offset+i)%rotating.length])];
  for(const group of selected)blocks.push({id:group[0].stimulusId,domain:'reading',stimulusId:group[0].stimulusId,itemIds:group.map(q=>q.id)});
 }
 const listening=shuffle(clusters(items,'listening'),random(913));
 if(listening.length<3)throw new Error('Insufficient listening recordings');
 const anchor=listening[0],rotating=listening.slice(1),usage=new Map(rotating.map(g=>[g[0].stimulusId,0]));let chosen;
 for(let form=0;form<=formIndex;form++){
  const candidates=shuffle(rotating,random(914+form)).sort((a,b)=>usage.get(a[0].stimulusId)-usage.get(b[0].stimulusId)),target=40-anchor.length,ways=new Map([[0,[]]]);
  for(const group of candidates)for(const [count,selected]of [...ways.entries()].sort((a,b)=>b[0]-a[0])){const total=count+group.length;if(total<=target&&!ways.has(total))ways.set(total,[...selected,group]);}
  if(!ways.has(target))throw new Error('The listening bank cannot supply40questions in complete recording groups');
  chosen=[anchor,...ways.get(target)];for(const group of chosen.slice(1))usage.set(group[0].stimulusId,usage.get(group[0].stimulusId)+1);
 }
 for(const group of chosen)blocks.push({id:group[0].stimulusId,domain:'listening',stimulusId:group[0].stimulusId,itemIds:group.map(q=>q.id)});
 if(new Set(blocks.flatMap(b=>b.itemIds)).size!==120)throw new Error('Form contains duplicate or missing questions');
 return blocks;
}
export function createSession({items,bankVersion,seed,id,goal='',createdAt=new Date().toISOString()}){
 return {version:SESSION_VERSION,bankVersion,id,seed,formId:`F${((seed-1)%FORM_COUNT+FORM_COUNT)%FORM_COUNT+1}`,createdAt,goal:String(goal).slice(0,300),blocks:buildForm(items,seed),position:0,answers:{},firstResponses:{},completedBlocks:[],audioExposure:{},writing:{},finished:false};
}
export function validateSession(session,items,bankVersion){
 if(!session||session.version!==SESSION_VERSION||session.bankVersion!==bankVersion||typeof session.id!=='string'||session.id.length>100||!session.id||!Number.isInteger(session.seed)||!Number.isInteger(session.position)||typeof session.finished!=='boolean'||typeof session.goal!=='string'||session.goal.length>300)return false;
 let expected;try{expected=buildForm(items,session.seed);}catch{return false;}
 if(session.formId!==`F${((session.seed-1)%FORM_COUNT+FORM_COUNT)%FORM_COUNT+1}`||typeof session.createdAt!=='string'||!Number.isFinite(Date.parse(session.createdAt)))return false;
 if(JSON.stringify(session.blocks)!==JSON.stringify(expected)||session.position<0||session.position>=expected.length)return false;
 const byId=new Map(items.map(q=>[q.id,q])),allowed=new Set(expected.flatMap(b=>b.itemIds));
 for(const field of ['answers','firstResponses']){
  if(!session[field]||typeof session[field]!=='object'||Array.isArray(session[field]))return false;
  for(const [id,value]of Object.entries(session[field]))if(!allowed.has(id)||!validResponse(value,byId.get(id)))return false;
 }
 if(Object.keys(session.firstResponses).some(id=>!Object.hasOwn(session.answers,id)))return false;
 for(const block of expected){const committed=block.itemIds.filter(id=>Object.hasOwn(session.firstResponses,id)).length;if(committed!==0&&committed!==block.itemIds.length)return false;}
 if(!Array.isArray(session.completedBlocks)||new Set(session.completedBlocks).size!==session.completedBlocks.length)return false;
 for(const id of session.completedBlocks){const block=expected.find(b=>b.id===id);if(!block||block.itemIds.some(q=>!Object.hasOwn(session.answers,q)||!Object.hasOwn(session.firstResponses,q)))return false;}
 if(session.finished!==(session.completedBlocks.length===expected.length))return false;
 if(!session.audioExposure||typeof session.audioExposure!=='object'||Array.isArray(session.audioExposure))return false;
 for(const [id,value]of Object.entries(session.audioExposure))if(!expected.some(b=>b.domain==='listening'&&b.stimulusId===id)||!value||typeof value!=='object'||(value.familiar!==undefined&&typeof value.familiar!=='boolean')||(value.starts!==undefined&&(!Number.isFinite(value.starts)||value.starts<0)))return false;
 if(!session.writing||typeof session.writing!=='object'||Array.isArray(session.writing)||Object.keys(session.writing).length>12||Object.entries(session.writing).some(([key,v])=>!/^[a-z][a-z0-9-]{1,70}$/.test(key)||typeof v!=='string'||v.length>10000))return false;
 return true;
}
export function loadSession(raw,items,bankVersion){try{const s=JSON.parse(raw);return validateSession(s,items,bankVersion)?s:null;}catch{return null;}}
export function answerQuestion(session,id,value,items){
 const block=session.blocks[session.position],item=items.find(q=>q.id===id);
 if(!item||!block.itemIds.includes(id)||!validResponse(value,item))throw new Error('Invalid response');
 return {...session,answers:{...session.answers,[id]:value},completedBlocks:session.completedBlocks.filter(b=>b!==block.id),finished:false};
}
export function completeBlock(session){
 const block=session.blocks[session.position];if(block.itemIds.some(id=>!Object.hasOwn(session.answers,id)))throw new Error('Every question needs a response or an unsure choice');
 const completedBlocks=[...new Set([...session.completedBlocks,block.id])],firstResponses={...session.firstResponses};
 for(const id of block.itemIds)if(!Object.hasOwn(firstResponses,id))firstResponses[id]=session.answers[id];
 const finished=completedBlocks.length===session.blocks.length;
 const next=session.blocks.findIndex((b,index)=>index>session.position&&!completedBlocks.includes(b.id));
 const firstPending=session.blocks.findIndex(b=>!completedBlocks.includes(b.id));
 return {...session,firstResponses,completedBlocks,finished,position:finished?session.blocks.length-1:next>=0?next:firstPending};
}
export function summarizeSession(session,items){
 const ids=new Set(session.blocks.flatMap(b=>b.itemIds)),selected=items.filter(q=>ids.has(q.id));
 const domainStats=DOMAINS.map(domain=>{
  const pool=selected.filter(q=>q.domain===domain);let correct=0,incorrect=0,unsure=0,unavailable=0,pending=0;
  for(const item of pool){if(!Object.hasOwn(session.answers,item.id))pending++;else if(session.answers[item.id]==='unavailable')unavailable++;else if(session.answers[item.id]===null)unsure++;else if(session.answers[item.id]===item.correctIndex)correct++;else incorrect++;}
  return {domain,total:pool.length,correct,incorrect,unsure,unavailable,pending,observed:pool.length-unavailable-pending};
 });
 const tagMap=new Map();
 for(const item of selected){
  if(!Object.hasOwn(session.answers,item.id)||session.answers[item.id]==='unavailable')continue;
  // The first tag is the author's broad diagnostic skill; secondary tags are catalogue metadata.
  for(const tag of (item.tags||[]).slice(0,1)){const key=`${item.domain}:${tag}`;if(!tagMap.has(key))tagMap.set(key,{domain:item.domain,tag,total:0,correct:0,unsure:0,itemIds:[],stimulusIds:new Set()});const row=tagMap.get(key);row.total++;row.correct+=session.answers[item.id]===item.correctIndex?1:0;row.unsure+=session.answers[item.id]===null?1:0;row.itemIds.push(item.id);row.stimulusIds.add(evidenceGroup(item));}
 }
 const skills=[...tagMap.values()].map(row=>({...row,stimulusIds:[...row.stimulusIds],enoughEvidence:row.total>=3&&row.stimulusIds.size>=2}));
 const gaps=skills.filter(row=>row.enoughEvidence&&row.correct/row.total<.8).sort((a,b)=>(b.total-b.correct)/b.total-(a.total-a.correct)/a.total||b.total-a.total).slice(0,3);
 const strengths=skills.filter(row=>row.enoughEvidence&&row.correct/row.total>=.8).sort((a,b)=>b.total-a.total).slice(0,3);
 const familiarClips=Object.values(session.audioExposure).filter(e=>e.familiar===true).length;
 return {domainStats,skills,gaps,strengths,familiarClips,cefrLevel:null,confidenceInterval:null,sublevel:null,scope:'Responses to this form only; not calibrated proficiency'};
}
export function exportSession(session,items){return {type:'nurkanat-pilot-attempt',exportVersion:1,session,summary:summarizeSession(session,items),notice:'Contains learning responses. Share only by choice. No validated CEFR result.'};}
