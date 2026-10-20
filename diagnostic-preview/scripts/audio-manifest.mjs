import {writeFile} from 'node:fs/promises';
import {QUESTIONS} from '../dist/bank.js';
await writeFile(new URL('../artifacts/audio-manifest.json',import.meta.url),JSON.stringify(QUESTIONS.filter(q=>q.domain==='listening').map(q=>({id:q.id,text:q.transcript,file:q.audio}))), 'utf8');
