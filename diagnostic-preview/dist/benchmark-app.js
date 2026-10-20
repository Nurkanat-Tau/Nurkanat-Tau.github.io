import { items, stimuli, recordingStimuli, BENCHMARK_VERSION } from './assessment-bank.js';
import { benchmarkExampleReport } from './benchmark-report.js';
import { createAttempt, playableItems, loadAttempt, recordAnswer, summarize, escapeHTML as esc, STORAGE_KEY, DOMAINS } from './benchmark-engine.js';
import { renderHome } from './benchmark-home.js';
import { PLATFORM_ROUTES,renderPlatform,mountPlatform,platformSummary } from './platform-app.js';
import { listeningPlayerHTML, mountListeningPlayer, clearListeningPositions, listeningAnswerAvailable } from './listening-player.js';
import { mountRecordingRoom } from './recording-room.js';

const root = document.querySelector('#app');
const playable = playableItems(items);
const stimulusById = new Map(stimuli.map(stimulus => [stimulus.id, stimulus]));
const WHATSAPP = 'https://wa.me/77085501378';
let storageAvailable = true;
const read = key => { try { return localStorage.getItem(key); } catch { storageAvailable = false; return null; } };
let language = read('nurkanat-benchmark-language') === 'en' ? 'en' : 'ru';
let attempt = loadAttempt(read(STORAGE_KEY), items, BENCHMARK_VERSION);
let selection = validSelection(attempt?.draft) ? attempt.draft : null;
let bankFilter = 'all';
let recordingCleanup = null;
let audioCleanup = null;
let platformCleanup = null;
let toastTimer;
const t = (ru, en) => language === 'ru' ? ru : en;
const local = value => typeof value === 'object' && value ? value[language] ?? value.en ?? '' : value ?? '';
const domainName = domain => ({ language: t('Языковые средства', 'Language use'), reading: t('Чтение', 'Reading'), listening: t('Аудирование', 'Listening'), writing: t('Письмо', 'Writing'), speaking: t('Говорение', 'Speaking') })[domain] ?? domain;
const route = () => location.hash.slice(1).split('?')[0] || 'home';
const button = (label, action, cls = 'primary') => `<button type="button" class="button ${cls}" data-action="${action}">${esc(label)}</button>`;
const linkButton = (label, href, cls = '') => `<a class="button ${cls}" href="${href}">${esc(label)}</a>`;
const list = entries => `<ul>${entries.map(entry => `<li>${esc(entry)}</li>`).join('')}</ul>`;
const refs = ids => `<span class="muted small">${ids.map(id => `<a href="#${id}" data-evidence="${id}">${esc(id)}</a>`).join(' · ')}</span>`;

function validSelection(value) { return Number.isInteger(value) && value >= -1 && value < (playable[attempt?.position ?? 0]?.choices.length ?? 0); }
function persist() {
  if (!attempt) return;
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...attempt, draft: selection })); }
  catch { storageAvailable = false; showStorageWarning(); }
}
function showStorageWarning() {
  if (document.querySelector('.storage-warning')) return;
  const warning = document.createElement('div'); warning.className = 'storage-warning'; warning.setAttribute('role', 'status');
  warning.textContent = t('Браузер не сохраняет прогресс. Завершите образец в этой вкладке; обновление страницы удалит ответы.', 'Your browser cannot save progress. Finish the sample in this tab; refreshing will lose the answers.');
  root.prepend(warning);
}
function toast(message) {
  const node = document.querySelector('#toast'); clearTimeout(toastTimer); node.textContent = message; node.hidden = false;
  toastTimer = setTimeout(() => { node.hidden = true; }, 5000);
}
function navigate(destination) { if (route() === destination) render(true); else location.hash = destination; }
function header() {
  const current = route();
  return `<header class="site-header"><div class="wrap header-row"><a class="brand" href="#home" aria-label="${t('Нұрқанат — главная', 'Nurkanat — home')}"><span class="brand-icon">N.</span><span><strong>${t('Нұрқанат Дайраш', 'Nurkanat Dairash')}</strong><small>ENGLISH IN DETAIL</small></span></a><nav class="nav" aria-label="${t('Основная навигация', 'Main navigation')}">${[['bank',t('Банк заданий','Question bank')],['my-report',t('Мой разбор','My report')],['courses',t('Курсы','Courses')]].map(([id,label])=>`<a href="#${id}" ${current===id?'aria-current="page"':''}>${label}</a>`).join('')}</nav><div class="lang" role="group" aria-label="${t('Язык интерфейса','Interface language')}">${['ru','en'].map(code=>`<button type="button" data-language="${code}" class="${language===code?'active':''}" aria-pressed="${language===code}">${code.toUpperCase()}</button>`).join('')}</div></div></header>`;
}
function footer() { return `<footer class="footer"><div class="wrap"><span>${t('Нұрқанат Дайраш · Пилотная платформа · 16+', 'Nurkanat Dairash · Pilot platform · Ages 16+')}</span><span>${t('CEFR-границы ещё не подтверждены исследованием.', 'CEFR boundaries have not yet been validated.')}</span><a href="#sample">${t('Демо 30','30-question demo')}</a><a href="#teacher-review">${t('Преподавателю','For teachers')}</a><a href="#pilot-lab">${t('Проверка качества','Validation workspace')}</a><a href="${WHATSAPP}" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a></div></footer>`; }

function home() { return renderHome({language,resumable:!!attempt&&!attempt.finished,button,linkButton,WHATSAPP,platform:platformSummary()}); }

function stimulusText(stimulus) {
  if (!stimulus) return '';
  const value = stimulus.text ?? stimulus.passage ?? stimulus.context ?? stimulus.scriptText ?? stimulus.transcript ?? stimulus.script;
  if (typeof value === 'string') return value;
  const turns = stimulus.turns ?? stimulus.dialogue;
  return Array.isArray(turns) ? turns.map(turn => `${turn.speaker || turn.role}: ${turn.text}`).join('\n') : '';
}
function sample() {
  if (!attempt) return `<main id="main" class="narrow page empty-state"><h1>${t('Попробуйте новые задания', 'Try the new questions')}</h1><p>${t('30 заданий на языковые средства, чтение и аудирование. Без таймера. Ответы сохраняются в этом браузере.', '30 language-use, reading and listening questions. No timer. Answers are saved in this browser.')}</p>${button(t('Начать', 'Start'),'start')}</main>`;
  if (attempt.finished) return results();
  const item = playable[attempt.position], stimulus = stimulusById.get(item.stimulusId);
  const inDomain = playable.filter(q=>q.domain===item.domain), number = inDomain.findIndex(q=>q.id===item.id)+1;
  const progress = Object.keys(attempt.answers).length;
  return `<main id="main" class="wrap page"><div class="progress-head"><span>${esc(domainName(item.domain))} · ${number} / ${inDomain.length}</span><span>${t('Сохранено ответов', 'Responses saved')}: ${progress} / ${playable.length}</span></div><div class="progress" role="progressbar" aria-label="${t('Ответы в образце', 'Responses in the sample')}" aria-valuemin="0" aria-valuemax="${playable.length}" aria-valuenow="${progress}"><span style="width:${progress/playable.length*100}%"></span></div><div class="question-shell"><section class="question-card"><div class="eyebrow">${t('Задание', 'Question')} ${attempt.position+1} / ${playable.length}</div>${item.domain==='listening'?listeningPlayerHTML(stimulus,items.filter(q=>q.stimulusId===stimulus.id),language):stimulusText(stimulus)?`<div class="context" lang="en">${esc(stimulusText(stimulus))}</div>`:''}<h1 lang="en">${esc(item.prompt)}</h1><form id="answer-form"><fieldset class="options"><legend>${t('Выберите один ответ', 'Choose one answer')}</legend>${item.choices.map((choice,index)=>`<label class="option"><input type="radio" name="answer" value="${index}" ${selection===index?'checked':''}><span lang="en">${esc(choice)}</span></label>`).join('')}<label class="option skip"><input type="radio" name="answer" value="-1" ${selection===-1?'checked':''}><span>${t('Пока не знаю', 'I’m not sure')}</span></label></fieldset><div class="question-actions"><button type="button" class="button quiet" data-action="previous" ${attempt.position===0?'disabled':''}>← ${t('Назад', 'Back')}</button><button class="button primary" type="submit" ${selection===null?'disabled':''}>${attempt.position===playable.length-1?t('Посмотреть ответы', 'Review responses'):t('Продолжить', 'Continue')} →</button></div></form></section><aside class="question-aside"><h3>${t('Сначала попробуйте самостоятельно', 'Try it independently first')}</h3><p>${t('Не открывайте ключи в каталоге до завершения. Если вы не знаете ответ, так и отметьте — угадывать не обязательно.', 'Keep the answer catalogue closed until you finish. If you are unsure, say so; guessing is optional.')}</p><p>${t('Можно сделать паузу и вернуться в этом же браузере. Язык интерфейса меняется без потери ответа.', 'You can pause and return in this browser. Switching interface language preserves your response.')}</p><p>${t('Образец показывает работу заданий. Он не выдаёт уровень A1–C1.', 'The sample demonstrates the tasks. It does not assign an A1–C1 level.')}</p><a href="#home" class="text-link">${t('Сохранить и выйти', 'Save and leave')} →</a></aside></div></main>`;
}

function reviewItem(item, response, showResponse = false) {
  const stimulus = stimulusById.get(item.stimulusId);
  const listening = item.domain === 'listening';
  const src = typeof stimulus?.audio==='string'?stimulus.audio:stimulus?.audio?.src;
  const responseText = response==='unavailable'?t('Не оценивалось: проблема со звуком','Not assessed: audio problem'):response===null?t('Пока не знаю','I’m not sure'):item.choices[response];
  return `<details class="review-item" data-item-id="${esc(item.id)}"><summary><span class="tag ${listening?'warm':'soft'}">${listening?t('Аудио','Audio'):esc(item.targetLevel)}</span> ${esc(domainName(item.domain))} · <span lang="en">${esc(item.prompt)}</span></summary><div class="review-body">${listening?`<p class="small muted" style="margin-top:18px">${esc(stimulus.sourceLabel || 'Cambridge IELTS · supplied recording')} · ${t('Новые вопросы для практики. Не официальный тест IELTS.','New practice questions. Not an official IELTS test.')}</p><audio controls preload="none" src="${esc(src)}" aria-label="${esc(stimulus.title)}"></audio>`:`<div class="context" lang="en">${esc(stimulusText(stimulus))}</div>`}<ol type="A" class="review-choices" lang="en">${item.choices.map((choice,index)=>`<li class="${index===item.correctIndex?'correct':''}">${esc(choice)} ${index===item.correctIndex?'✓':''}</li>`).join('')}</ol>${showResponse?`<p><strong>${t('Ваш ответ','Your response')}:</strong> ${esc(responseText)}</p>`:''}<h3>${t('Почему этот ответ','Why this answer')}</h3><p>${esc(local(item.explanation))}</p>${listening?`<p class="audio-evidence"><strong>${t('Основание в записи','Evidence in the recording')}:</strong> <span lang="en">${esc(item.answerEvidence)}</span></p>${item.evidenceTiming?`<button type="button" class="button quiet" data-action="listen-evidence" data-evidence-start="${Math.max(0,item.evidenceTiming.startSeconds-1)}">▶ ${t('Послушать этот фрагмент','Listen to this part')} · ~${Math.floor(item.evidenceTiming.startSeconds/60)}:${String(Math.floor(item.evidenceTiming.startSeconds%60)).padStart(2,'0')}</button>`:''}`:''}<h3>${t('Почему не другие варианты','Why the alternatives do not fit')}</h3>${(item.distractorRationales||[]).map(reason=>`<p><strong>${String.fromCharCode(65+reason.choiceIndex)}.</strong> ${esc(local(reason))}</p>`).join('')}<h3>${t('Что проверяет задание','What the task examines')}</h3><p>${esc(local(item.construct))}</p><p class="muted">${esc(local(item.scopeLimits))}</p><p class="small muted">${esc(item.id)} · ${listening?t('Уровень сложности ещё не установлен исследованием','Difficulty has not yet been established through research'):t('Цель автора','Authoring target')+': '+esc(item.targetLevel)+' · '+t('Уровень задания не калиброван','Item level not calibrated')}</p></div></details>`;
}

function results() {
  if (!attempt?.finished) return `<main id="main" class="narrow page empty-state"><h1>${t('Сначала завершите образец', 'Complete the sample first')}</h1>${linkButton(t('Вернуться к заданиям', 'Return to questions'),'#sample','primary')}</main>`;
  return `<main id="main" class="wrap page"><div class="page-intro"><div class="eyebrow">${t('Ваши ответы · образец', 'Your responses · sample')}</div><h1>${t('Посмотрите на конкретные задания', 'Look at the actual tasks')}</h1><p class="muted">${t('Здесь видны ответы и их объяснения. Количество правильных ответов на этом небольшом образце не переводится в CEFR-уровень.', 'Review your responses and their explanations. Correct answers on this small sample are not converted into a CEFR level.')}</p></div><div class="grid-3">${summarize(attempt,items).map(row=>`<article class="card"><h3>${esc(domainName(row.domain))}</h3>${row.status==='not-assessed'?`<div class="result-count" style="font-size:25px">${t('Не оценивалось', 'Not assessed')}</div><p>${t('Все задания пропущены из-за проблемы со звуком. Балл не выставлен.', 'All tasks were skipped because audio was unavailable. No score is assigned.')}</p>`:`<div class="result-count">${row.correct}<span> / ${row.total-row.unavailable}</span></div><p>${t('верных ответов в образце', 'correct responses in the sample')}</p><p>${t('Выбрано ответов', 'Options selected')}: ${row.answered} · ${t('«Не знаю»', 'Unsure')}: ${row.skipped}</p>${row.unavailable?`<p class="audio-issue">${t('Не оценивалось из-за звука','Not assessed due to audio')}: ${row.unavailable}. ${t('Эти задания исключены из счёта.','These tasks are excluded from the count.')}</p>`:''}`}</article>`).join('')}</div><div class="notice blue results-note">${t('Этот результат относится только к вашим ответам здесь. Полный пример ниже описывает вымышленного ученика и не является вашим личным отчётом.', 'These results describe only your responses here. The complete example below concerns a fictional learner and is not your personal report.')}</div><div class="actions">${linkButton(t('Посмотреть полный пример отчёта', 'View the complete example report'),'#example-report','primary')}${button(t('Скачать мои ответы', 'Download my responses'),'download-responses','')}${button(t('Пройти заново', 'Try again'),'start','quiet')}</div><div class="review-list"><h2>${t('Разбор каждого ответа', 'Every answer explained')}</h2>${playable.map(item=>reviewItem(item,attempt.answers[item.id],true)).join('')}</div></main>`;
}

function catalogue() {
  const selected = bankFilter==='all'?items:items.filter(item=>item.domain===bankFilter);
  return `<main id="main" class="wrap page"><div class="page-intro"><div class="eyebrow">${t('Каталог образца · открытые ключи', 'Sample catalogue · answers included')}</div><h1>${t('30 заданий. Понятный смысл каждого.', '30 questions. A purpose for each.')}</h1><p class="muted">${t('По 10 заданий на языковые средства, чтение и аудирование. Для аудирования — четыре записи из вашей коллекции Cambridge и новые вопросы к ним. Все задания пока не калиброваны по CEFR.', 'Ten questions each for language use, reading and listening. Listening uses four recordings from your Cambridge collection with newly written questions. None of these tasks has been calibrated against CEFR.')}</p></div><div class="notice blue">${t('Если хотите сначала попробовать образец без подсказок, пройдите задания до просмотра ключей. К каждому заданию на слух доступны запись и объяснение ответа.', 'To try the sample without hints, complete it before viewing the keys. Each listening task includes its recording and answer explanation.')}</div><div class="filters" role="group" aria-label="${t('Навык', 'Skill')}">${['all',...DOMAINS].map(domain=>`<button type="button" data-filter="${domain}" aria-pressed="${bankFilter===domain}" class="${bankFilter===domain?'selected':''}">${domain==='all'?t('Все 30','All 30'):esc(domainName(domain))+' · 10'}</button>`).join('')}</div><div class="review-list">${selected.map(item=>reviewItem(item)).join('')}</div></main>`;
}

function evidenceHTML(e, type) {
  let result = `<article class="evidence" id="${esc(e.id)}"><div class="evidence-label">${esc(e.id)}</div><h3>${esc(e.title)}</h3>`;
  if (e.sourceNote) result += `<p class="small muted">${esc(e.sourceNote)}</p>`;
  if (e.instruction) result += `<p lang="en"><strong>${t('Задача', 'Task')}:</strong> ${esc(e.instruction)}</p>`;
  const input = e.passage ?? e.context ?? e.transcript ?? e.original;
  if (input) result += `<blockquote class="quote" lang="en">${esc(input)}</blockquote>`;
  if (e.turns) result += `<div class="quote" lang="en">${e.turns.map(turn=>`<p><strong>${esc(turn.speaker || (turn.role==='learner'?'Daniyar':'Interviewer'))}:</strong> ${esc(turn.text)}</p>`).join('')}</div>`;
  if (e.question) result += `<p lang="en"><strong>${esc(e.question)}</strong></p><ol type="A" lang="en">${e.options.map(option=>`<li>${esc(option)}</li>`).join('')}</ol><p><strong>${t('Ответ в примере', 'Response in the example')}:</strong> <span lang="en">${esc(e.options[e.learnerAnswer])}</span></p><p><strong>${t('Ключ', 'Key')}:</strong> <span lang="en">${esc(e.options[e.key])}</span></p>`;
  if (e.interpretation) result += `<p>${esc(e.interpretation)}</p>`;
  if (e.annotations) result += e.annotations.map(annotation=>`<div class="correction"><div class="evidence-label">${esc(annotation.category)}</div><p lang="en"><del>${esc(annotation.quote)}</del><br>→ <ins>${esc(annotation.suggestion)}</ins></p><p>${esc(annotation.note)}</p></div>`).join('');
  if (e.whatWorks) result += `<h4>${t('Что уже получается', 'What works already')}</h4><p>${esc(e.whatWorks)}</p><h4>${t('Следующая правка', 'Next revision')}</h4><p>${esc(e.nextRevision)}</p>`;
  if (e.observations) result += list(e.observations);
  if (e.unavailableEvidence) result += `<p class="small muted">${esc(e.unavailableEvidence)}</p>`;
  return result+'</article>';
}

const reportSections = () => [t('Профиль','Profile'),t('Сильные стороны и приоритеты','Strengths and priorities'),t('Примеры ответов','Response evidence'),t('Разбор письма и речи','Writing and speaking'),t('План на четыре недели','Four-week plan'),t('Рекомендация и уточнение','Placement and clarification')];
function reportHTML() {
  const r = benchmarkExampleReport.locales[language], labels = reportSections();
  const section = (index,body)=>`<section class="report-section" id="report-${index+1}"><div class="section-index">0${index+1} / ${t('ЛИЧНЫЙ РАЗБОР', 'PERSONAL ASSESSMENT')}</div><h2>${labels[index]}</h2>${body}</section>`;
  return `<div class="page-intro"><div class="eyebrow">${t('Полный пример отчёта', 'Complete example report')}</div><h1>${esc(r.title)}</h1><div class="report-title-meta"><span class="tag">${esc(r.learner.name)}</span><span class="tag soft">${t('Пример · не ваш результат', 'Example · not your result')}</span></div><p class="muted">${esc(r.learner.goal)}</p></div><div class="notice">${esc(r.exampleNotice)}</div><div class="report-toolbar no-print">${button(t('Печать / сохранить PDF', 'Print / save PDF'),'print','primary')}${button(t('Скачать отчёт HTML', 'Download HTML report'),'download-report','')}${linkButton(t('Попробовать задания', 'Try the questions'),'#sample','quiet')}</div><div class="report-layout"><nav class="report-nav no-print" aria-label="${t('Разделы отчёта','Report sections')}">${labels.map((label,index)=>`<a href="#report-${index+1}" data-report-section="report-${index+1}">0${index+1} · ${label}</a>`).join('')}</nav><div class="report-content">${section(0,`<h3>${esc(r.summary.heading)}</h3><p>${esc(r.summary.body)}</p><table class="skill-table"><thead><tr><th>${t('Навык','Skill')}</th><th>${t('Пример','Example')}</th><th>${t('Что это означает','What it means')}</th></tr></thead><tbody>${r.profile.map(p=>`<tr><td>${esc(p.label)}</td><td><span class="level-chip">${esc(p.level)}</span></td><td>${esc(p.interpretation)}<br><span class="small muted">${esc(p.levelNote)}</span><br>${refs(p.evidenceIds)}</td></tr>`).join('')}</tbody></table><p class="small muted" style="margin-top:20px">${esc(r.summary.noOverall)}</p><details><summary>${t('Основания и ограничения примера','Basis and limits of this example')}</summary>${r.profile.map(p=>`<p><strong>${esc(p.label)}.</strong> ${esc(p.limits)}</p>`).join('')}</details>`)}${section(1,`<h3>${t('На что можно опереться','What to build on')}</h3>${r.strengths.map(p=>`<article class="priority"><h3>${esc(p.title)}</h3><p>${esc(p.observation)}</p>${refs(p.evidenceIds)}<p style="margin-top:12px">${esc(p.useIt)}</p></article>`).join('')}<h3>${t('Что даст наиболее полезный следующий шаг','The most useful next priorities')}</h3>${r.priorities.map(p=>`<article class="priority"><h3>${esc(p.title)}</h3><p>${esc(p.observation)}</p>${refs(p.evidenceIds)}<h4>${t('Что делать','What to do')}</h4><p>${esc(p.nextAction)}</p><h4>${t('Как проверить перенос','How to check transfer')}</h4><p>${esc(p.successCheck)}</p></article>`).join('')}`)}${section(2,['reading','listening','language'].map(type=>`<h3>${esc(domainName(type))}</h3>${r.evidence[type].map(e=>evidenceHTML(e,type)).join('')}`).join(''))}${section(3,`${r.evidence.writing.map(e=>evidenceHTML(e,'writing')).join('')}${r.evidence.speaking.map(e=>evidenceHTML(e,'speaking')).join('')}<h3>${t('Как строится обоснование','How the interpretation is supported')}</h3>${r.rubricRationale.map(row=>`<article class="priority"><h4>${esc(domainName(row.skill))} · ${esc(row.criterion)}</h4><p>${esc(row.observation)}</p>${refs(row.evidenceIds)}<p class="small muted" style="margin-top:12px">${t('Что ещё нужно проверить','Further evidence needed')}: ${esc(row.furtherEvidenceNeeded)}</p></article>`).join('')}`)}${section(4,`<p>${esc(r.fourWeekPlan.scope)}</p><p class="muted">${esc(r.learner.availablePractice)}</p>${r.fourWeekPlan.weeks.map(week=>`<article class="week"><div class="eyebrow">${t('Неделя','Week')} ${week.week}</div><h3>${esc(week.focus)}</h3>${list(week.activities)}<h4>${t('Проверка','Check')}</h4><p>${esc(week.check)}</p><p class="muted">${esc(week.adapt)}</p></article>`).join('')}`)}${section(5,`<h3>${esc(r.placement.title)}</h3><p><strong>${esc(r.placement.recommendation)}</strong></p><p>${esc(r.placement.rationale)}</p><h4>${t('Перед подтверждением группы','Before confirming placement')}</h4>${list(r.placement.requiredBeforeConfirmation)}<p>${esc(r.placement.ifUnmet)}</p><p>${esc(r.placement.b2Readiness)}</p><h3>${esc(r.clarification.title)}</h3>${list(r.clarification.steps)}<p>${esc(r.clarification.separation)}</p><h3>${esc(r.courseFit.title)}</h3>${['standard','intensive'].map(key=>`<h4>${esc(r.courseFit[key].name)}</h4><p><strong>${esc(r.courseFit[key].duration)}</strong><br>${esc(r.courseFit[key].fit)}</p>`).join('')}<p class="small muted">${esc(r.courseFit.note)}</p><div class="actions no-print"><a class="button primary" href="${WHATSAPP}" target="_blank" rel="noopener noreferrer">${t('Обсудить обучение в WhatsApp','Discuss learning on WhatsApp')} ↗</a></div>`)}</div></div>`;
}

function recordings() {
  return `<main id="main" class="wrap page"><div class="page-intro"><div class="eyebrow">${t('Мастерская живых записей','Human recording workspace')}</div><h1>${t('Ваш голос. Настоящий разговор.', 'Your voice. A real conversation.')}</h1><p class="muted">${t('10 сценариев: по монологу и диалогу для каждого целевого уровня. Для пяти диалогов нужен второй собеседник. Запишите разговор вместе, без подчёркивания правильных ответов.', '10 scripts: a monologue and dialogue at every authoring target. The five dialogues need a second speaker. Record the exchange together without emphasising the answers.')}</p></div><div class="notice blue" style="margin-bottom:24px">${t('Записи остаются на вашем устройстве и не отправляются на сервер. Скачайте нужные дубли перед закрытием или обновлением вкладки. После записи нужны проверка прав, естественности и соответствия заданию; автоматического допуска в тест нет.', 'Recordings stay on your device and are not uploaded. Download the takes you want before closing or refreshing this tab. Recordings still need rights, naturalness, and task checks; they are never automatically admitted to the assessment.')}</div><div id="recording-room"></div></main>`;
}
function courses() {
  return `<main id="main" class="wrap page"><div class="page-intro"><div class="eyebrow">${t('Обучение после разбора','Learning after assessment')}</div><h1>${t('Выбрать подходящий темп.', 'Choose a pace that fits.')}</h1><p class="muted">${t('Группа подбирается после подтверждения навыков и обсуждения вашей цели. Программа должна учитывать сильные стороны и конкретные пробелы.', 'Placement follows a review of your skills and goals. The programme should account for your strengths and specific gaps.')}</p></div><div class="course-grid"><article class="card"><div class="eyebrow">${t('Стандартный курс','Standard course')}</div><strong>6 ${t('месяцев','months')}</strong><p style="margin-top:18px">${t('Ориентир для программы одного уровня. Регулярные занятия с временем для практики между встречами.', 'An indicative duration for a level programme. Regular lessons with time to practise between sessions.')}</p></article><article class="card"><div class="eyebrow">${t('Интенсив','Intensive course')}</div><strong>3 ${t('месяца','months')}</strong><p style="margin-top:18px">${t('Ориентир при более частых занятиях. Подходит, если вы можете выделять больше времени на обучение каждую неделю.', 'An indicative duration with more frequent study. Consider this if you can devote more time to learning each week.')}</p></article></div><p class="small muted" style="margin-top:20px">${t('Сроки не гарантируют переход на следующий CEFR-уровень. Расписание, стоимость, наличие группы и нагрузка обсуждаются лично.', 'These durations do not guarantee advancement to the next CEFR level. Schedule, fees, availability, and workload are discussed individually.')}</p><div class="teacher-banner"><img src="assets/teacher.jpg" alt="${t('Нұрқанат Дайраш','Nurkanat Dairash')}" width="140" height="160"><div><h2>${t('Начнём с вашей цели.', 'Start with your goal.')}</h2><p>${t('Напишите Нұрқанату, для чего вам английский и какой график подходит. Покупка курса не является условием получения полезного разбора.', 'Tell Nurkanat why you need English and what schedule suits you. A useful assessment should not depend on buying a course.')}</p><a href="${WHATSAPP}" target="_blank" rel="noopener noreferrer" class="button">${t('Написать в WhatsApp','Message on WhatsApp')} ↗</a></div></div></main>`;
}

function render(focus = false) {
  recordingCleanup?.(); recordingCleanup = null;
  audioCleanup?.(); audioCleanup = null;
  platformCleanup?.(); platformCleanup = null;
  document.documentElement.lang = language;
  document.querySelector('.skip-link').textContent = t('Перейти к содержимому','Skip to content');
  document.title = t('Английский в деталях — Нұрқанат Дайраш','English in detail — Nurkanat Dairash');
  let body;
  if(PLATFORM_ROUTES.has(route()))body=renderPlatform(route(),language); else switch (route()) {
    case 'sample': body=sample();break;
    case 'results':body=results();break;
    case 'questions':body=catalogue();break;
    case 'example-report':body=`<main id="main" class="wrap page report-page">${reportHTML()}</main>`;break;
    case 'recordings':body=recordings();break;
    case 'courses':body=courses();break;
    default:body=home();
  }
  root.innerHTML = header()+body+footer();
  if(route()==='example-report'){
    const toolbar=document.querySelector('.report-toolbar');
    toolbar.insertAdjacentHTML('afterbegin',linkButton(t('Скачать PDF','Download PDF'),`reports/example-${language}.pdf`,'primary'));
    toolbar.firstElementChild.setAttribute('download',`english-diagnostic-example-${language}.pdf`);
    toolbar.querySelector('[data-action="print"]').classList.remove('primary');
  }
  if(PLATFORM_ROUTES.has(route()))platformCleanup=mountPlatform(root,{language,onRender:()=>render(true),onNotice:toast});
  if(!storageAvailable) showStorageWarning();
  if(route()==='recordings') recordingCleanup=mountRecordingRoom(document.querySelector('#recording-room'),{language,stimuli:recordingStimuli.map(s=>({...s,scriptVersion:BENCHMARK_VERSION,itemIds:items.filter(item=>item.stimulusId===s.id).map(item=>item.id)})),onNotice:toast});
  if(route()==='sample'&&attempt&&!attempt.finished&&playable[attempt.position].domain==='listening')audioCleanup=mountListeningPlayer(document.querySelector('.listening-player'),stimulusById.get(playable[attempt.position].stimulusId),language,updateSubmit);
  if(focus){const title=document.querySelector('main h1');if(title){title.tabIndex=-1;title.focus({preventScroll:true});}window.scrollTo(0,0);}
}

function download(name, contents, type='application/json') {
  const url=URL.createObjectURL(new Blob([contents],{type})); const a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function updateSubmit(){const submit=document.querySelector('#answer-form button[type="submit"]');if(submit)submit.disabled=selection===null||(selection!==-1&&!listeningAnswerAvailable());}
function saveResponse(response){
  attempt=recordAnswer(attempt,playable[attempt.position],response,items,BENCHMARK_VERSION);
  const saved=attempt.answers[playable[attempt.position].id];
  selection=typeof saved==='number'?saved:saved===null?-1:null;persist();
  if(attempt.finished)navigate('results');else render(true);
}
root.addEventListener('change', event=>{
  if(event.target.matches('input[name="answer"]')){selection=Number(event.target.value);persist();const submit=document.querySelector('#answer-form button[type="submit"]');if(submit)updateSubmit();}
});
root.addEventListener('submit', event=>{
  if(event.target.id!=='answer-form')return;event.preventDefault();
  if(!attempt || selection===null || !validSelection(selection) || (selection!==-1&&!listeningAnswerAvailable()))return;
  saveResponse(selection===-1?null:selection);
});
root.addEventListener('click',async event=>{
  const element=event.target.closest('button,a');if(!element)return;
  if(element.dataset.language){language=element.dataset.language;try{localStorage.setItem('nurkanat-benchmark-language',language);}catch{storageAvailable=false;}render();document.querySelector(`[data-language="${language}"]`)?.focus();return;}
  if(element.dataset.filter){bankFilter=element.dataset.filter;render();return;}
  const anchor=element.dataset.evidence||element.dataset.reportSection;
  if(anchor){event.preventDefault();document.getElementById(anchor)?.scrollIntoView({behavior:'smooth',block:'start'});return;}
  switch(element.dataset.action){
    case 'start':clearListeningPositions();attempt=createAttempt(BENCHMARK_VERSION);selection=null;persist();navigate('sample');break;
    case 'resume':navigate('sample');break;
    case 'audio-unavailable':if(attempt&&!attempt.finished&&playable[attempt.position].domain==='listening')saveResponse('unavailable');break;
    case 'previous':if(attempt.position>0){attempt={...attempt,position:attempt.position-1};selection=Object.hasOwn(attempt.answers,playable[attempt.position].id)?(attempt.answers[playable[attempt.position].id]??-1):null;persist();render(true);}break;
    case 'listen-evidence':{const audio=element.closest('.review-body')?.querySelector('audio');if(audio){for(const other of root.querySelectorAll('audio'))if(other!==audio)other.pause();try{audio.currentTime=Number(element.dataset.evidenceStart);await audio.play();}catch{toast(t('Не удалось открыть аудио. Повторите попытку.','Audio could not play. Please try again.'));}}break;}
    case 'print':window.print();break;
    case 'download-responses':download(`nurkanat-sample-responses-${language}.json`,JSON.stringify({type:'benchmark-sample-responses',bankVersion:BENCHMARK_VERSION,cefrLevel:null,listeningAssessed:summarize(attempt,items).find(row=>row.domain==='listening').status!=='not-assessed',notice:t('Ответы только на образец. CEFR-уровень не установлен.','Sample responses only. No CEFR level established.'),summary:summarize(attempt,items),responses:playable.map(item=>({id:item.id,prompt:item.prompt,status:attempt.answers[item.id]==='unavailable'?'audio-unavailable':attempt.answers[item.id]===null?'unsure':'answered',selected:typeof attempt.answers[item.id]==='number'?item.choices[attempt.answers[item.id]]:null,correct:item.choices[item.correctIndex],explanation:local(item.explanation)}))},null,2));break;
    case 'download-report':try{const response=await fetch('benchmark.css');if(!response.ok)throw new Error('style');const css=await response.text();const content=reportHTML().replace(/<a href="#([^"]+)" data-evidence="[^"]+">/g,'<a href="#$1">');download(`nurkanat-example-report-${language}.html`,`<!doctype html><html lang="${language}"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(benchmarkExampleReport.locales[language].title)}</title><style>${css}\n.no-print{display:none!important}.report-layout{display:block}.report-page{max-width:900px}</style><body><main class="wrap page report-page">${content}</main></body></html>`,'text/html;charset=utf-8');}catch{toast(t('Не удалось скачать отчёт. Попробуйте печать или повторите загрузку.','The report could not be downloaded. Try printing or retry the download.'));}break;
  }
});
root.addEventListener('play',event=>{if(event.target.tagName==='AUDIO')for(const audio of root.querySelectorAll('audio'))if(audio!==event.target)audio.pause();},true);
window.addEventListener('hashchange',()=>render(true));
render();




