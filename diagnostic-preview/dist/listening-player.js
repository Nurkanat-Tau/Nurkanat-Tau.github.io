import {escapeHTML as esc} from './benchmark-engine.js';
const positions = new Map();
export function clearListeningPositions(){positions.clear();}
export function listeningAnswerAvailable(){const player=document.querySelector('.listening-player');return !player||(player.dataset.heard==='true'&&player.dataset.failed!=='true');}

export function listeningPlayerHTML(stimulus, related, language){
  const t=(ru,en)=>language==='ru'?ru:en;
  const src=typeof stimulus.audio==='string'?stimulus.audio:stimulus.audio?.src;
  return `<section class="listening-player" aria-label="${t('Аудиозапись задания','Task recording')}"><div class="eyebrow">${t('Живая речь · аудирование','Human voices · listening')}</div><h2>${esc(stimulus.title)}</h2><p class="small">${t('Сначала прочитайте вопросы к записи. Можно слушать повторно. Это тренировочный образец, без ограничения числа прослушиваний.','Read the questions for this recording first. You can replay it. This practice sample has no listening limit.')}</p><audio id="task-audio" controls preload="metadata" src="${esc(src)}" aria-label="${esc(stimulus.title)}"></audio><p class="small muted audio-status" role="status">${t('Загружаем запись…','Loading recording…')}</p><details class="audio-help"><summary>${t('Не слышно запись?','Cannot hear the recording?')}</summary><p>${t('Проверьте громкость и наушники. Повторите загрузку. Если звук не работает, отметьте техническую проблему: она будет показана отдельно от неверных ответов.','Check your volume and headphones. Retry loading. If audio is unavailable, record a technical problem: it will appear separately from incorrect answers.')}</p><div class="actions"><button type="button" class="button" data-audio-retry>${t('Загрузить заново','Reload audio')}</button><button type="button" class="button quiet" data-action="audio-unavailable">${t('Пропустить из-за звука','Skip: audio unavailable')}</button></div></details><details class="clip-questions"><summary>${t('Все вопросы к этой записи','All questions for this recording')} · ${related.length}</summary><ol lang="en">${related.map(item=>`<li><strong>${esc(item.prompt)}</strong><ol type="A">${item.choices.map(choice=>`<li>${esc(choice)}</li>`).join('')}</ol></li>`).join('')}</ol></details><p class="audio-credit small muted">${esc(stimulus.sourceLabel || 'User-supplied Cambridge IELTS recording')} · ${t('Новые вопросы Нұрқаната; это не официальный тест IELTS.','New questions by Nurkanat; this is not an official IELTS test.')}</p></section>`;
}

export function mountListeningPlayer(container, stimulus, language, onAvailability=()=>{}){
  const audio=container.querySelector('#task-audio');
  if(!audio)return()=>{};
  const status=container.querySelector('.audio-status');
  const t=(ru,en)=>language==='ru'?ru:en;
  const previous=positions.get(stimulus.id);
  let failed=false;
  let heard=previous?.heard===true;
  const sync=()=>{container.dataset.heard=String(heard);container.dataset.failed=String(failed);onAvailability();};
  sync();
  const ready=()=>{
    failed=false;
    status.textContent=t('Запись готова. Нажмите ▶ перед отправкой ответа.','Recording ready. Press ▶ before submitting an answer.');
    sync();
    if(previous&&Number.isFinite(audio.duration)&&previous.time<audio.duration)audio.currentTime=previous.time;
    if(previous?.playing)audio.play().catch(()=>{status.textContent=t('Нажмите ▶, чтобы продолжить.','Press ▶ to continue.');});
  };
  const error=()=>{failed=true;sync();status.textContent=t('Запись не загрузилась. Повторите загрузку или отметьте проблему со звуком.','The recording did not load. Retry or record an audio problem.');container.querySelector('.audio-help').open=true;};
  const play=()=>{status.textContent=t('Прослушивание · обычная скорость','Listening · normal speed');};
  const ended=()=>{status.textContent=t('Запись закончилась. При необходимости прослушайте ещё раз.','Recording finished. Replay if you need to.');};
  const retry=()=>{status.textContent=t('Загружаем запись…','Loading recording…');audio.load();};
  const speed=()=>{if(audio.playbackRate!==1)audio.playbackRate=1;};
  const progressed=()=>{if(!heard&&!audio.paused&&audio.currentTime>0.25){heard=true;sync();}};
  audio.addEventListener('loadedmetadata',ready);audio.addEventListener('error',error);audio.addEventListener('play',play);audio.addEventListener('ended',ended);audio.addEventListener('ratechange',speed);
  audio.addEventListener('timeupdate',progressed);
  container.querySelector('[data-audio-retry]').addEventListener('click',retry);
  return()=>{positions.set(stimulus.id,{time:failed?0:audio.currentTime,playing:!audio.paused&&!audio.ended&&!failed,heard});audio.pause();audio.removeEventListener('loadedmetadata',ready);audio.removeEventListener('error',error);audio.removeEventListener('play',play);audio.removeEventListener('ended',ended);audio.removeEventListener('ratechange',speed);audio.removeEventListener('timeupdate',progressed);};
}

