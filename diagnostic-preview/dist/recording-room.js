// Local production workspace only. Nothing in this module supplies audio to assessment scoring.
export const RECORDING_LIMITS = Object.freeze({ maxFileBytes: 50 * 1024 * 1024, maxSessionBytes: 128 * 1024 * 1024, maxTakesPerClip: 5, maxRecordingSeconds: 300 });
const ALLOWED_EXTENSIONS = new Set(['wav', 'mp3', 'm4a', 'aac', 'ogg', 'webm', 'mp4', 'flac']);
const takes = new Map();
const sessionListeners = new Set();
let takeSequence = 0;
let unloadHandler = null;

export function validateAudioFile(file) {
  if (!file || typeof file.name !== 'string' || !Number.isFinite(file.size) || file.size <= 0) return { valid: false, reason: 'empty' };
  if (file.size > RECORDING_LIMITS.maxFileBytes) return { valid: false, reason: 'size' };
  const extension = file.name.split('.').at(-1).toLowerCase();
  if (!ALLOWED_EXTENSIONS.has(extension)) return { valid: false, reason: 'format' };
  // MIME and suffix are screening only; the browser player still has to decode the file.
  const mime = String(file.type || '').toLowerCase().split(';')[0];
  if (mime && !mime.startsWith('audio/') && !['video/webm', 'video/mp4', 'application/octet-stream'].includes(mime)) return { valid: false, reason: 'format' };
  return { valid: true, extension };
}

export function normalizeRecordingStimulus(stimulus) {
  if (!stimulus || typeof stimulus.id !== 'string' || !/^[a-z0-9][a-z0-9_-]{0,100}$/i.test(stimulus.id)) throw new TypeError('A safe, unique stimulus id is required.');
  const dialogue = stimulus.turns || stimulus.dialogue;
  const script = stimulus.scriptText ?? stimulus.transcript ?? stimulus.script ?? (Array.isArray(dialogue) ? dialogue.map(turn => `${turn.speaker}: ${turn.text}`).join('\n') : '');
  if (typeof script !== 'string' || !script.trim()) throw new TypeError(`Missing script: ${stimulus.id}`);
  const directions = stimulus.performanceDirections ?? stimulus.recordingDirection ?? '';
  return {
    id: stimulus.id,
    level: String(stimulus.targetLevel ?? stimulus.intendedLevel ?? stimulus.level ?? ''),
    type: String(stimulus.type ?? stimulus.kind ?? 'listening'),
    title: typeof stimulus.title === 'string' ? stimulus.title : stimulus.id,
    script: script.trim(),
    scriptVersion: stimulus.scriptVersion ?? stimulus.version ?? 'draft-unversioned',
    speakers: Array.isArray(stimulus.speakers) ? stimulus.speakers.map(speaker => typeof speaker === 'string' ? speaker : String(speaker.name ?? speaker.id ?? '')) : [],
    durationTargetSeconds: stimulus.durationTargetSeconds ?? null,
    performanceDirections: Array.isArray(directions) ? directions.join(' ') : String(directions),
    itemIds: Array.isArray(stimulus.itemIds) ? [...stimulus.itemIds] : [],
    audioStatus: 'pending_human',
  };
}

export function buildRecordingManifest(stimuli, summaries = []) {
  return {
    schemaVersion: 1,
    purpose: 'Local human-recording production review. This export cannot unlock scored listening.',
    generatedAt: new Date().toISOString(),
    approvedForAssessment: false,
    clips: stimuli.map(normalizeRecordingStimulus).map(clip => ({
      stimulusId: clip.id, intendedLevel: clip.level, itemIds: clip.itemIds,
      scriptVersion: clip.scriptVersion, scriptText: clip.script,
      status: 'awaiting_human_and_rights_review', runtimeAsset: null,
      takes: summaries.filter(take => take.stimulusId === clip.id).map(take => ({
        takeId: String(take.takeId), filename: String(take.filename), source: String(take.source),
        bytes: Number(take.bytes), mimeType: String(take.mimeType || ''),
        performerReference: String(take.performerReference || ''),
        scriptVersion: take.scriptVersion, scriptTextAtCapture: take.scriptTextAtCapture,
        downloadRequested: Boolean(take.downloadRequested), humanOriginVerified: false,
        rightsVerified: false, perceptualReviewPassed: false, approvedForAssessment: false,
      })),
    })),
  };
}

const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
function sessionTakes() { return [...takes.values()].flat(); }
function refreshUnloadWarning() {
  if (typeof window === 'undefined') return;
  const unsaved = sessionTakes().some(take => !take.downloadRequested);
  if (unsaved && !unloadHandler) {
    unloadHandler = event => { event.preventDefault(); event.returnValue = ''; };
    window.addEventListener('beforeunload', unloadHandler);
  } else if (!unsaved && unloadHandler) {
    window.removeEventListener('beforeunload', unloadHandler); unloadHandler = null;
  }
}
function extensionForMime(mime) {
  if (mime.includes('ogg')) return 'ogg';
  if (mime.includes('mp4')) return 'm4a';
  if (mime.includes('wav')) return 'wav';
  return 'webm';
}

/** Mount a private, local-only production tool. Returns a cleanup function with hasUnsaved(). */
export function mountRecordingRoom(container, { language = 'ru', stimuli = [], onNotice = () => {} } = {}) {
  if (!container || typeof container.addEventListener !== 'function') throw new TypeError('A recording-room container is required.');
  const t = (ru, en) => language === 'ru' ? ru : en;
  const clips = stimuli.map(normalizeRecordingStimulus);
  if (new Set(clips.map(clip => clip.id)).size !== clips.length) throw new TypeError('Duplicate stimulus ids.');
  const clipById = new Map(clips.map(clip => [clip.id, clip]));
  const urls = new Map();
  const downloadTimers = new Set();
  let disposed = false, active = null, requesting = null, requestSerial = 0;
  const notice = message => {
    if (disposed) return;
    const status = container.querySelector('[data-room-status]');
    if (status) status.textContent = message;
    onNotice(message);
  };
  const takeSummary = take => ({ takeId: take.id, stimulusId: take.stimulusId, filename: take.filename, source: take.source, bytes: take.blob.size, mimeType: take.blob.type, performerReference: take.performerReference, scriptVersion: take.scriptVersion, scriptTextAtCapture: take.script, downloadRequested: take.downloadRequested });
  const byId = id => container.querySelector(`[data-room-card="${id}"]`);
  const localUrl = take => {
    if (!urls.has(take.id)) urls.set(take.id, URL.createObjectURL(take.blob));
    return urls.get(take.id);
  };
  function updateControls() {
    if (disposed) return;
    for (const button of container.querySelectorAll('[data-room-action="record"]')) button.disabled = !!active || !!requesting;
    for (const button of container.querySelectorAll('[data-room-action="stop"]')) button.disabled = active?.stimulusId !== button.dataset.clip;
    for (const node of container.querySelectorAll('[data-room-recording-state]')) {
      node.textContent = active?.stimulusId === node.dataset.roomRecordingState
        ? t('Идёт запись…', 'Recording…')
        : requesting === node.dataset.roomRecordingState ? t('Ожидаем разрешение на микрофон…', 'Waiting for microphone permission…') : '';
    }
  }
  function renderTakes(clipId) {
    if (disposed) return;
    const region = byId(clipId)?.querySelector('[data-room-takes]');
    if (!region) return;
    const list = takes.get(clipId) || [];
    region.innerHTML = list.length ? list.map(take => `<div class="recording-take" data-room-take="${esc(take.id)}"><div><strong>${esc(take.filename)}</strong><p class="recording-meta">${take.source === 'microphone_capture' ? t('Запись микрофона', 'Microphone take') : t('Локальный файл', 'Local file')} · ${(take.blob.size / 1024 / 1024).toFixed(2)} MB · ${t('Не проверено', 'Unreviewed')}</p></div><audio controls preload="metadata" src="${esc(localUrl(take))}" aria-label="${esc(t('Прослушать дубль', 'Audition take'))} ${esc(take.filename)}"></audio><p data-room-audio-status class="recording-meta"></p><div class="recording-actions"><button type="button" class="button secondary" data-room-action="download-take" data-take="${esc(take.id)}">${take.downloadRequested ? t('Скачать ещё раз', 'Download again') : t('Скачать дубль', 'Download take')}</button><button type="button" class="text-link" data-room-action="delete-take" data-take="${esc(take.id)}">${t('Удалить из этой сессии', 'Remove from session')}</button></div></div>`).join('') : `<p class="recording-meta">${t('Дублей пока нет. Запись и загрузка файла не подтверждают человеческое происхождение, права или качество.', 'No takes yet. Recording or importing a file does not establish human origin, rights, or quality.')}</p>`;
    for (const audio of region.querySelectorAll('audio')) {
      audio.addEventListener('loadedmetadata', () => {
        const status = audio.parentElement.querySelector('[data-room-audio-status]');
        if (status) status.textContent = Number.isFinite(audio.duration) ? t(`Длительность: ${Math.round(audio.duration)} с. Качество требует прослушивания.`, `Duration: ${Math.round(audio.duration)} s. Listening review is still required.`) : t('Длительность не определена; проверьте скачанный файл.', 'Duration unavailable; check the downloaded file.');
      });
      audio.addEventListener('error', () => {
        const status = audio.parentElement.querySelector('[data-room-audio-status]');
        if (status) status.textContent = t('Браузер не воспроизвёл файл. Проверьте формат и попробуйте WAV, MP3 или M4A. Дубль не одобрен.', 'The browser could not play this file. Check the format and try WAV, MP3, or M4A. This take remains unapproved.');
      });
    }
  }
  function saveTake(clip, blob, source, originalName = '', performerReference = '') {
    if (!blob.size || blob.size > RECORDING_LIMITS.maxFileBytes) { notice(t('Дубль пустой или превышает 50 МБ. Запишите короче.', 'The take is empty or exceeds 50 MB. Record a shorter take.')); return false; }
    const list = takes.get(clip.id) || [];
    if (list.length >= RECORDING_LIMITS.maxTakesPerClip || sessionTakes().reduce((sum, take) => sum + take.blob.size, 0) + blob.size > RECORDING_LIMITS.maxSessionBytes) {
      notice(t('Достигнут лимит сессии: 5 дублей на клип или 128 МБ. Скачайте нужные дубли, затем удалите их из сессии.', 'Session limit reached: 5 takes per clip or 128 MB. Download takes you need, then remove them from this session.')); return false;
    }
    const id = `take-${Date.now()}-${++takeSequence}`;
    const extension = originalName ? originalName.split('.').at(-1).toLowerCase() : extensionForMime(blob.type);
    const take = { id, stimulusId: clip.id, blob, source, filename: `${clip.id}-${id}.${extension}`, performerReference, scriptVersion: clip.scriptVersion, script: clip.script, downloadRequested: false };
    takes.set(clip.id, [...list, take]); refreshUnloadWarning();
    for (const listener of sessionListeners) listener(clip.id);
    notice(t('Дубль сохранён только в памяти этой страницы. Скачайте его и проверьте файл; оценивание не разблокировано.', 'Take kept only in this page’s memory. Download it and verify the file; scored listening is still locked.'));
    return true;
  }
  function download(blob, filename) {
    const url = URL.createObjectURL(blob), link = document.createElement('a');
    link.href = url; link.download = filename; link.hidden = true;
    document.body.append(link); link.click(); link.remove();
    const timer = setTimeout(() => { URL.revokeObjectURL(url); downloadTimers.delete(timer); }, 30000);
    downloadTimers.add(timer); // Separate URLs avoid interrupting a playing audition.
    return url;
  }
  function stopActive() {
    if (!active) return;
    const state = active;
    if (state.recorder.state !== 'inactive') {
      try { state.recorder.stop(); } catch {
        state.failed = true; clearTimeout(state.deadline); active = null; updateControls();
        notice(t('Не удалось завершить дубль. Запись отклонена; повторите после проверки устройства.', 'Could not finish this take. It was discarded; check the device and retry.'));
      }
    }
    state.stream.getTracks().forEach(track => track.stop());
  }
  async function startRecording(clip) {
    if (active || requesting || disposed) return;
    const card = byId(clip.id);
    if (!card.querySelector('[data-room-consent]').checked) { notice(t('Перед записью подтвердите согласие всех участников и своё право записывать их.', 'Before recording, confirm every participant’s consent and your authority to record them.')); return; }
    if (!globalThis.isSecureContext || !navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
      notice(t('Запись недоступна в этом браузере или подключении. Используйте HTTPS/localhost и совместимый браузер либо запишите звук отдельно и выберите файл.', 'Recording is unavailable in this browser or connection. Use HTTPS/localhost and a compatible browser, or record externally and select the file.')); return;
    }
    if ((takes.get(clip.id) || []).length >= RECORDING_LIMITS.maxTakesPerClip || sessionTakes().reduce((sum, take) => sum + take.blob.size, 0) >= RECORDING_LIMITS.maxSessionBytes) {
      notice(t('Перед новым дублем скачайте и удалите ненужные записи: достигнут лимит памяти сессии.', 'Download and remove unwanted takes before recording: this session has reached its memory limit.')); return;
    }
    const ticket = ++requestSerial;
    requesting = clip.id; updateControls();
    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      if (disposed || ticket !== requestSerial) { stream.getTracks().forEach(track => track.stop()); return; }
      const mimeType = ['audio/webm;codecs=opus', 'audio/mp4', 'audio/ogg;codecs=opus', 'audio/webm'].find(mime => MediaRecorder.isTypeSupported?.(mime));
      const recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
      const state = { recorder, stream, chunks: [], bytes: 0, failed: false, interrupted: false, stimulusId: clip.id, performerReference: card.querySelector('[data-room-performer]').value.trim(), deadline: null, startedAt: Date.now() };
      active = state;
      recorder.addEventListener('dataavailable', event => {
        if (!event.data?.size || state.failed) return;
        state.bytes += event.data.size;
        if (state.bytes > RECORDING_LIMITS.maxFileBytes) { state.failed = true; stopActive(); notice(t('Запись превысила 50 МБ и отклонена. Сделайте более короткий дубль.', 'Recording exceeded 50 MB and was discarded. Make a shorter take.')); }
        else state.chunks.push(event.data);
      });
      recorder.addEventListener('error', () => { state.failed = true; stopActive(); notice(t('Микрофон или кодировщик прервал запись. Этот дубль не сохранён; проверьте устройство и повторите.', 'The microphone or encoder interrupted recording. This take was not saved; check your device and retry.')); });
      recorder.addEventListener('stop', () => {
        clearTimeout(state.deadline); state.stream.getTracks().forEach(track => track.stop());
        if (!state.failed) saveTake(clip, new Blob(state.chunks, { type: recorder.mimeType || state.chunks[0]?.type || 'audio/webm' }), 'microphone_capture', '', state.performerReference);
        if (state.interrupted) notice(t('Микрофон отключился. Проверьте дубль: запись могла оборваться. При необходимости запишите заново.', 'The microphone disconnected. Review the take: it may be incomplete. Record again if needed.'));
        if (active === state) active = null;
        updateControls();
      }, { once: true });
      for (const track of stream.getAudioTracks()) track.addEventListener('ended', () => {
        if (recorder.state === 'recording') { state.interrupted = true; stopActive(); }
      }, { once: true });
      recorder.start(1000);
      state.deadline = setTimeout(() => { notice(t('Достигнут лимит записи: 5 минут. Проверьте дубль.', 'The 5-minute recording limit was reached. Review the take.')); stopActive(); }, RECORDING_LIMITS.maxRecordingSeconds * 1000);
      notice(t('Микрофон включён. Нажмите «Остановить», когда закончите.', 'Microphone is on. Press Stop when finished.'));
    } catch (error) {
      stream?.getTracks().forEach(track => track.stop());
      if (active?.stimulusId === clip.id) { clearTimeout(active.deadline); active = null; }
      const errors = {
        NotAllowedError: t('Доступ к микрофону отклонён. Разрешите его в настройках браузера или выберите готовый файл.', 'Microphone permission was denied. Allow it in browser settings or select an existing file.'),
        NotFoundError: t('Микрофон не найден. Подключите устройство или выберите готовый файл.', 'No microphone was found. Connect a device or select an existing file.'),
        NotReadableError: t('Микрофон занят или недоступен. Закройте другие приложения записи и повторите.', 'The microphone is busy or unavailable. Close other recording apps and try again.'),
        AbortError: t('Запись прервана устройством. Проверьте подключение и повторите.', 'Recording was interrupted by the device. Check the connection and retry.'),
      };
      notice(errors[error?.name] || t('Не удалось начать запись. Проверьте браузер и микрофон или выберите готовый файл.', 'Could not start recording. Check your browser and microphone or select an existing file.'));
    } finally {
      if (ticket === requestSerial) requesting = null;
      updateControls();
    }
  }
  container.innerHTML = `<section class="recording-room" aria-labelledby="recording-room-title"><div class="section-head"><div><p class="section-kicker">${t('МАСТЕРСКАЯ ЧЕЛОВЕЧЕСКОЙ ЗАПИСИ', 'HUMAN RECORDING WORKSPACE')}</p><h2 id="recording-room-title">${t('Сценарии готовы к живым голосам.', 'Scripts ready for real voices.')}</h2></div></div><p>${t('Это рабочий инструмент для записи и прослушивания, не тест аудирования. Все сценарии — черновики для проверки. Все дубли требуют подтверждения человеческого происхождения, прав и качества.', 'This is a recording and audition tool, not a listening test. Every script is a review draft. Every take needs verification of human origin, rights, and quality.')}</p><p>${t('Пять монологов можно записать самостоятельно. Для пяти диалогов нужен второй реальный собеседник: читайте роли вместе, реагируя друг на друга.', 'You can record the five monologues yourself. The five dialogues need a second real speaker: read the roles together, responding to each other.')}</p><p class="recording-warning">${t('Файлы не отправляются на сервер. Дубли остаются в памяти вкладки при переходах внутри приложения, но пропадут после обновления или закрытия. Скачайте и проверьте нужные файлы. Запись микрофона не заменяет студийный мастер.', 'Files are not uploaded. Takes remain in tab memory when navigating inside this app, but disappear on refresh or close. Download and check files you need. Browser capture is not a studio master.')}</p><div class="recording-actions"><button type="button" class="button secondary" data-room-action="export-scripts">${t('Скачать все сценарии', 'Download all scripts')}</button><button type="button" class="button secondary" data-room-action="export-manifest">${t('Скачать ведомость дублей', 'Download take manifest')}</button></div><p role="status" aria-live="polite" data-room-status class="recording-status"></p><div class="recording-grid">${clips.map(clip => `<article class="recording-card" data-room-card="${clip.id}"><div class="recording-card-head"><span class="report-badge">${esc(clip.level)} · ${t('Авторский ориентир', 'Authoring target')}</span><span class="recording-meta">${t('Ожидает живой записи', 'Awaiting human recording')}</span></div><h3>${esc(clip.title)}</h3><p class="recording-meta">${esc(clip.id)}${clip.speakers.length ? ` · ${esc(clip.speakers.join(', '))}` : ''}${clip.durationTargetSeconds ? ` · ${t('План', 'Target')}: ${esc(Array.isArray(clip.durationTargetSeconds) ? clip.durationTargetSeconds.join('–') : clip.durationTargetSeconds)} ${t('с', 's')}` : ''}</p><details class="recording-script"><summary>${t('Открыть сценарий и режиссёрские указания', 'Open script and performance directions')}</summary><p>${esc(clip.performanceDirections)}</p><pre>${esc(clip.script)}</pre></details><label class="recording-field">${t('Коды исполнителей (без личных данных)', 'Performer references (no personal details)')}<input type="text" data-room-performer maxlength="100" placeholder="P01, P02" autocomplete="off"></label><label class="recording-consent"><input type="checkbox" data-room-consent> ${t('Все участники согласны на эту запись; у меня есть право её сделать. Это не заменяет проверку прав для публикации.', 'All participants consent to this recording and I have authority to make it. This does not replace publication-rights review.')}</label><div class="recording-actions"><button type="button" class="button primary" data-room-action="record" data-clip="${clip.id}">${t('Записать микрофон', 'Record microphone')}</button><button type="button" class="button secondary" data-room-action="stop" data-clip="${clip.id}" disabled>${t('Остановить', 'Stop')}</button></div><p role="status" class="recording-meta" data-room-recording-state="${clip.id}"></p><label class="recording-file">${t('Или выбрать готовый аудиофайл · до 50 МБ', 'Or select an existing audio file · up to 50 MB')}<input type="file" accept="audio/*,.wav,.mp3,.m4a,.aac,.ogg,.webm,.mp4,.flac" data-room-file="${clip.id}"></label><div data-room-takes></div></article>`).join('')}</div></section>`;
  for (const clip of clips) renderTakes(clip.id);
  async function click(event) {
    const button = event.target.closest('[data-room-action]');
    if (!button || !container.contains(button) || button.disabled) return;
    const action = button.dataset.roomAction, clip = clipById.get(button.dataset.clip);
    if (action === 'record' && clip) { await startRecording(clip); return; }
    if (action === 'stop') { stopActive(); return; }
    if (action === 'export-scripts') {
      const text = clips.map(item => `${item.id} | ${item.level} authoring target | ${item.scriptVersion}\n${item.performanceDirections}\n\n${item.script}\n`).join('\n---\n\n');
      download(new Blob(['DRAFT HUMAN-RECORDING SCRIPTS — NOT CALIBRATED\n\n', text], { type: 'text/plain;charset=utf-8' }), 'human-recording-scripts.txt'); return;
    }
    if (action === 'export-manifest') { download(new Blob([JSON.stringify(buildRecordingManifest(clips, sessionTakes().map(takeSummary)), null, 2)], { type: 'application/json' }), 'human-recording-takes.pending.json'); return; }
    const take = sessionTakes().find(item => item.id === button.dataset.take);
    if (!take) return;
    if (action === 'download-take') {
      download(take.blob, take.filename); take.downloadRequested = true; refreshUnloadWarning();
      button.textContent = t('Скачать ещё раз', 'Download again');
      notice(t('Запрошено скачивание. Проверьте папку загрузок: браузер не подтверждает нам, что файл сохранён.', 'Download requested. Check your downloads folder: the browser does not confirm that the file was saved.'));
    }
    if (action === 'delete-take') {
      const row = button.closest('[data-room-take]'); row?.querySelector('audio')?.pause();
      takes.set(take.stimulusId, (takes.get(take.stimulusId) || []).filter(item => item !== take));
      if (urls.has(take.id)) { URL.revokeObjectURL(urls.get(take.id)); urls.delete(take.id); }
      refreshUnloadWarning(); for (const listener of sessionListeners) listener(take.stimulusId);
      notice(t('Дубль удалён из памяти страницы. Скачанный файл на устройстве сохранён.', 'Take removed from page memory. Any downloaded file stays on your device.'));
    }
  }
  function change(event) {
    const input = event.target;
    if (!input.matches('[data-room-file]')) return;
    const file = input.files?.[0], clip = clipById.get(input.dataset.roomFile);
    input.value = '';
    if (!file || !clip) return;
    const result = validateAudioFile(file);
    if (!result.valid) { notice(result.reason === 'size' ? t('Файл больше 50 МБ. Экспортируйте более короткий или сжатый дубль.', 'File exceeds 50 MB. Export a shorter or compressed take.') : t('Выберите непустой аудиофайл WAV, MP3, M4A, AAC, OGG, WebM или FLAC.', 'Choose a nonempty WAV, MP3, M4A, AAC, OGG, WebM, or FLAC audio file.')); return; }
    saveTake(clip, file, 'local_import', file.name, byId(clip.id).querySelector('[data-room-performer]').value.trim());
  }
  const captureUnload = event => { if (active || requesting) { event.preventDefault(); event.returnValue = ''; } };
  window.addEventListener('beforeunload', captureUnload);
  sessionListeners.add(renderTakes);
  container.addEventListener('click', click); container.addEventListener('change', change);
  function cleanup() {
    if (disposed) return;
    disposed = true; requestSerial++; requesting = null;
    if (active) { clearTimeout(active.deadline); stopActive(); }
    container.querySelectorAll('audio').forEach(audio => { audio.pause(); audio.removeAttribute('src'); audio.load(); });
    for (const url of urls.values()) URL.revokeObjectURL(url);
    urls.clear();
    // Download URLs expire on their short timer, including after a navigation within the app.
    window.removeEventListener('beforeunload', captureUnload);
    sessionListeners.delete(renderTakes);
    container.removeEventListener('click', click); container.removeEventListener('change', change);
  }
  cleanup.hasUnsaved = () => !!active || !!requesting || sessionTakes().some(take => !take.downloadRequested);
  return cleanup;
}
