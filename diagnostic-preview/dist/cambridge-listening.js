/**
 * Original questions based on recordings and transcripts supplied by the user.
 * These are not Cambridge-authored questions and have no validated IELTS/CEFR
 * score interpretation. Audio assets are local excerpts with separate provenance.
 */
export const LISTENING_VERSION = 'cambridge-source-sample-1.0';
export const listeningMetadata = {
  status: 'uncalibrated_source_based_sample',
  questionCount: 10,
  stimulusCount: 4,
  sourceBook: 'Cambridge IELTS 21',
  sourceTest: 1,
  questionAuthorship: 'Original questions and bilingual feedback written for this project',
  sourceMaterial: 'User-supplied published recordings and matching PDF transcripts',
  officialQuestions: false,
  affiliatedOrEndorsed: false,
  validatedScoreConversion: false,
  cefrLevelsAssigned: false,
  clusterPolicy: 'Responses sharing a recording form a single stimulus cluster; they are not independent confirmations.',
  exposurePolicy: 'Record prior familiarity with these published recordings. A familiar recording cannot provide fresh placement evidence.',
  administration: 'Read the questions for a clip, then listen to that clip. Practice replays are allowed and must not be described as standard IELTS administration.',
  transcriptPolicy: 'Do not display source scripts while recording a listening response. Evidence and explanations belong in answer review.',
  evidenceTimingPolicy: 'Approximate excerpt-relative timings copied from the audio manifest’s automatic alignment. Use for review navigation, not precise speech segmentation or scoring.',
};

const pair = (en, ru) => ({ en, ru });
const wrong = (choiceIndex, en, ru) => ({ choiceIndex, en, ru });
const stimulus = (id, title, type, part, sourceTrack, pdfPage, printedPage, summary) => ({
  id, domain: 'listening', targetLevel: null, targetLevelStatus: 'not_assigned',
  title, type, sourceLabel: `Cambridge IELTS 21 · Test 1 · Part ${part}`,
  audio: `listening/${id}.mp3`, durationSeconds: null,
  audioStatus: 'available_for_private_practice',
  source: 'user_supplied_published_recording',
  summary, clusterId: id,
  provenance: {
    book: 'Cambridge IELTS 21', test: 1, part, sourceTrack,
    sourcePdf: 'IELTS 21.pdf', pdfPage, printedPage,
    questionSource: 'Original project questions; source transcript checked visually and as extracted text',
    audioManifest: 'listening/audio-manifest.json',
  },
});
const item = value => ({
  domain: 'listening', targetLevel: null, targetLevelStatus: 'not_assigned',
  validationStatus: 'uncalibrated_source_based_sample',
  reviewStatus: 'editorially_source_checked_uncalibrated',
  source: 'original_question_based_on_user_supplied_recording',
  intendedCEFRDescriptor: {
    scale: 'Oral comprehension',
    paraphrase: 'A sample of understanding recorded spoken English. No CEFR level or sublevel is assigned to this new question.',
    status: 'construct_description_only_no_level_claim',
  },
  ...value,
});

export const listeningStimuli = [
  stimulus('c21-t1-sailing', 'Choosing a sailing course', 'dialogue', 1, 'C21T1P1.1.mp3', 98, 97,
    pair('A caller asks a sailing club about introductory courses and what they include.', 'Звонящий узнаёт в парусном клубе о вводных курсах и о том, что в них входит.')),
  stimulus('c21-t1-makeup', 'Starting work as a makeup artist', 'monologue_with_introduction', 2, 'C21T1P2.1.mp3', 99, 98,
    pair('An experienced film makeup artist discusses early work and the realities of the job.', 'Опытный киногримёр рассказывает о первых шагах и реальных условиях работы.')),
  stimulus('c21-t1-resources', 'Evaluating study resources', 'dialogue', 3, 'C21T1P3.2.mp3', 101, 100,
    pair('Two students discuss the strengths and weaknesses of resources about marine environments.', 'Двое студентов обсуждают достоинства и недостатки материалов о морской среде.')),
  stimulus('c21-t1-rubber', 'Why natural rubber is difficult to supply', 'academic_monologue', 4, 'C21T1P4.mp3', 102, 101,
    pair('A lecturer explains constraints on the production and reuse of natural rubber.', 'Лектор объясняет ограничения производства и повторного использования натурального каучука.')),
];

// Durations measure the encoded local excerpts. Boundaries refer to the supplied
// source tracks. Local ASR aligned the speech with the source transcript; this is
// not a claim of human perceptual review or psychometric validation.
const verifiedExcerptMeasurements = {
  'c21-t1-sailing': { durationSeconds: 151.106372, sourceStartSeconds: 117.4, sourceEndSeconds: 268.5 },
  'c21-t1-makeup': { durationSeconds: 139.612494, sourceStartSeconds: 76, sourceEndSeconds: 215.6 },
  'c21-t1-resources': { durationSeconds: 133.343107, sourceStartSeconds: 8.7, sourceEndSeconds: 142.05 },
  'c21-t1-rubber': { durationSeconds: 145.463923, sourceStartSeconds: 124.55, sourceEndSeconds: 270 },
};
for (const value of listeningStimuli) {
  const measurement = verifiedExcerptMeasurements[value.id];
  value.durationSeconds = measurement.durationSeconds;
  value.provenance = {
    ...value.provenance,
    sourceStartSeconds: measurement.sourceStartSeconds,
    sourceEndSeconds: measurement.sourceEndSeconds,
    audioAlignment: 'local_ASR_checked_against_supplied_transcript',
    humanPerceptualReviewCompleted: false,
  };
}

export const listeningItems = [
  item({
    id: 'c21-t1-listening-01', stimulusId: 'c21-t1-sailing',
    evidenceTiming: { startSeconds: 22.86, endSeconds: 34.72 },
    construct: pair('Recognising the purpose of a service offered to beginners', 'Понимание цели услуги, предлагаемой начинающим'),
    prompt: 'What is the main purpose of a Taster Day?',
    choices: [
      'To prepare experienced sailors to become instructors.',
      'To help beginners decide whether they want to continue sailing.',
      'To test whether applicants are ready to join the sailing club.',
      'To give club members a refresher before a more advanced course.',
    ], correctIndex: 1,
    explanation: pair(
      'The woman describes an introduction for people who have never sailed, so they can discover whether they enjoy it and want to carry on.',
      'Женщина описывает вводное занятие для тех, кто ещё не ходил под парусом: оно помогает понять, нравится ли им это и хотят ли они продолжать.'),
    distractorRationales: [
      wrong(0, 'The day is for first-time participants, not instructor training.', 'День рассчитан на новичков, а не на подготовку инструкторов.'),
      wrong(2, 'The caller is not told that this is a club-entry test; membership is a separate choice.', 'Звонящему не говорят, что это проверка для вступления в клуб; членство обсуждается отдельно.'),
      wrong(3, 'It is described as an introduction for people who have never sailed, not a refresher for existing sailors.', 'Это знакомство с парусным спортом для тех, кто ещё не пробовал, а не повторение для опытных участников.'),
    ],
    answerEvidence: 'The introduction is intended to help a first-time sailor discover whether they enjoy sailing and want to continue.',
    sourceEvidence: { printedPage: 97, cue: 'find out whether you enjoy it', relation: 'Explicit purpose in the description of Taster Days.' },
    scopeLimits: pair('Understanding one stated service purpose. This recording contains three linked questions and has no assigned CEFR difficulty.', 'Понимание одной прямо названной цели. Три вопроса относятся к одной записи; уровень сложности CEFR им не присвоен.'),
  }),
  item({
    id: 'c21-t1-listening-02', stimulusId: 'c21-t1-sailing',
    evidenceTiming: { startSeconds: 71.2, endSeconds: 101.3 },
    construct: pair('Combining details to understand the structure of a course', 'Объединение деталей для понимания структуры курса'),
    prompt: 'How does the woman describe the Level 1 course?',
    choices: [
      'It teaches theory first; students return another weekend for practical work.',
      'It consists of harbour practice; students learn the theory independently.',
      'It allows students to practise alone after a short safety demonstration.',
      'It combines theory with practical sailing supported by an instructor.',
    ], correctIndex: 3,
    explanation: pair(
      'She explicitly calls it a mix of theory and practical skills. Beginners go out in training dinghies with an instructor who also checks their understanding of safety.',
      'Она прямо называет курс сочетанием теории и практики. Новички выходят в учебных лодках с инструктором, который также проверяет понимание безопасности.'),
    distractorRationales: [
      wrong(0, 'The two-day course includes both types of learning; separate weekends for theory and practice are not described.', 'Оба вида обучения входят в двухдневный курс; отдельных выходных для теории и практики не описано.'),
      wrong(1, 'Theory is part of the course, including weather and tides; it is not left entirely to independent study.', 'Теория, в том числе погода и приливы, входит в курс и не оставляется полностью для самостоятельного изучения.'),
      wrong(2, 'The instructor goes in the training dinghy with the learners; solo practice is not the described arrangement.', 'Инструктор находится в учебной лодке вместе с участниками; самостоятельный выход без него не описывается.'),
    ],
    answerEvidence: 'The course mixes theory and practical skills, and beginners sail in training dinghies with an instructor.',
    sourceEvidence: { printedPage: 97, cue: 'a mix of theory and practical skills', relation: 'The following explanation identifies the instructor’s presence in the dinghy.' },
    scopeLimits: pair('Integration of explicit course details. No sailing knowledge is required; this is not a separate independent stimulus from the other sailing questions.', 'Объединение прямо названных деталей курса. Знания парусного спорта не нужны; это тот же стимул, что и в других вопросах о курсе.'),
  }),
  item({
    id: 'c21-t1-listening-03', stimulusId: 'c21-t1-sailing',
    evidenceTiming: { startSeconds: 110.72, endSeconds: 121.92 },
    construct: pair('Combining an optional decision with the condition for a discount', 'Объединение необязательного решения с условием получения скидки'),
    prompt: 'What does the woman say about joining the sailing club?',
    choices: [
      'He can decide later, and members pay less for the Level 1 course.',
      'He must join before booking, and the course is included in the membership fee.',
      'He needs another person to join with him to get the members’ course discount.',
      'He can join after earning the certificate, which is required for the course discount.',
    ], correctIndex: 0,
    explanation: pair(
      'The woman says Level 1 is cheaper for members. When the caller is unsure about joining, she says he has plenty of time to decide; she does not make immediate membership compulsory.',
      'Женщина говорит, что для членов клуба курс Level 1 дешевле. Когда звонящий сомневается насчёт вступления, она отвечает, что у него достаточно времени решить; немедленное вступление не является обязательным.'),
    distractorRationales: [
      wrong(1, 'She offers time to decide and describes a course discount, not compulsory membership or a course included in a membership fee.', 'Она даёт время на решение и говорит о скидке на курс, а не об обязательном членстве или включении курса в членский взнос.'),
      wrong(2, 'The two-person discount belongs to the separate Taster Day. It is not stated as a requirement for the members’ Level 1 discount.', 'Скидка для двух человек относится к отдельному Taster Day. Она не названа условием скидки для членов клуба на Level 1.'),
      wrong(3, 'The certificate is awarded after completing Level 1 and leads towards Level 2; it is not a condition for the membership discount.', 'Сертификат выдают после завершения Level 1, затем можно переходить к Level 2; он не назван условием скидки для членов клуба.'),
    ],
    answerEvidence: 'Members receive a Level 1 course discount, and the caller is told there is plenty of time to decide about joining.',
    sourceEvidence: { printedPage: 97, cue: 'a discount for members; plenty of time to decide', relation: 'The price condition and the response to the caller’s uncertainty identify the two parts of the answer.' },
    scopeLimits: pair('Two explicit conditions in the same course conversation; no assumption about real sailing-club policies is needed.', 'Два прямых условия в том же разговоре о курсе; предположения о правилах настоящих парусных клубов не нужны.'),
  }),
  item({
    id: 'c21-t1-listening-04', stimulusId: 'c21-t1-makeup',
    evidenceTiming: { startSeconds: 29.36, endSeconds: 50.37 },
    construct: pair('Understanding a recommendation and its stated trade-off', 'Понимание рекомендации и указанного в ней компромисса'),
    prompt: 'Why can work on a low-budget short film be worthwhile for someone starting out?',
    choices: [
      'It normally includes meals as well as transport costs.',
      'It gives trainees responsibility for specialist effects.',
      'It offers useful experience even though the work is unpaid.',
      'It guarantees a paid role on the next production.',
    ], correctIndex: 2,
    explanation: pair(
      'Claire says that the work will be unpaid but can still be worth doing for the experience. She does not promise a future job or specialist-effects duties.',
      'Клэр говорит, что работа будет неоплачиваемой, но может быть полезна ради опыта. Она не обещает следующую работу или задачи по специальным эффектам.'),
    distractorRationales: [
      wrong(0, 'She advises checking that transport is covered and says catering is very unlikely, so trainees should bring food.', 'Она советует убедиться, что транспорт оплачивается, и говорит, что питания, скорее всего, не будет: еду нужно взять с собой.'),
      wrong(1, 'Special-effects makeup is described as highly specialised, and trainees should not expect practical experience in it.', 'Грим для специальных эффектов назван узкой специализацией, практики в которой стажёрам ожидать не стоит.'),
      wrong(3, 'No guarantee of a later paid position is made.', 'Гарантии последующей оплачиваемой должности не даётся.'),
    ],
    answerEvidence: 'The work is unpaid, but Claire identifies the experience as the reason it can be worthwhile.',
    sourceEvidence: { printedPage: 98, cue: 'worth it for the experience', relation: 'Concession immediately follows the statement that the work is unpaid.' },
    scopeLimits: pair('Understanding the speaker’s advice, not endorsing employment conditions. Two questions share this recording.', 'Понимание совета говорящей, а не одобрение условий труда. Два вопроса относятся к одной записи.'),
  }),
  item({
    id: 'c21-t1-listening-05', stimulusId: 'c21-t1-makeup',
    evidenceTiming: { startSeconds: 115.17, endSeconds: 139.09 },
    construct: pair('Following a speaker’s change in attitude over time', 'Понимание изменения отношения говорящей со временем'),
    prompt: 'How has Claire’s reaction to meeting famous actors changed?',
    choices: [
      'She once felt at ease, but now worries more about making mistakes.',
      'She once found it overwhelming, but now treats it as a normal part of work.',
      'She once avoided speaking, but now regularly asks actors for photographs.',
      'She once found it exciting, but now thinks it prevents her doing useful work.',
    ], correctIndex: 1,
    explanation: pair(
      'Claire recalls being so overwhelmed that she could hardly speak. She contrasts this with now seeing contact with actors as an ordinary part of the job.',
      'Клэр вспоминает, что раньше была настолько ошеломлена, что почти не могла говорить. Теперь встречи с актёрами для неё — обычная часть работы.'),
    distractorRationales: [
      wrong(0, 'The initial reaction was not ease; she describes being overwhelmed. A growing fear of mistakes is not stated.', 'Вначале она не чувствовала себя свободно: она была ошеломлена. О нарастающем страхе ошибок не говорится.'),
      wrong(2, 'She mentions asking for selfies as behaviour to avoid, not as her current practice.', 'Просьбы о селфи приводятся как поведение, которого стоит избегать, а не как её нынешняя привычка.'),
      wrong(3, 'She calls it normal now; she does not say that it obstructs useful work.', 'Теперь она называет такие встречи нормой, но не говорит, что они мешают полезной работе.'),
    ],
    answerEvidence: 'She contrasts her earlier overwhelmed reaction with now considering it a normal part of the job.',
    sourceEvidence: { printedPage: 98, cue: 'At first ... overwhelming; Now ... a normal part', relation: 'Explicit past–present contrast in the paragraph about famous actors.' },
    scopeLimits: pair('An explicit contrast of attitude; no conclusion about understanding subtle unstated emotions in other recordings.', 'Явное сопоставление отношения в прошлом и настоящем; не вывод о понимании тонких невысказанных эмоций в других записях.'),
  }),
  item({
    id: 'c21-t1-listening-06', stimulusId: 'c21-t1-resources',
    evidenceTiming: { startSeconds: 10.82, endSeconds: 33.64 },
    construct: pair('Matching a specific criticism to the resource being discussed', 'Соотнесение конкретного критического замечания с обсуждаемым материалом'),
    prompt: 'What weakness do the students identify in the article about invasive lionfish?',
    choices: [
      'It gives too little explanation for its claims about environmental danger.',
      'It is too technically complex for either student to follow.',
      'It relies on a documentary made ten years earlier.',
      'It argues that lionfish cannot expand beyond their original habitat.',
    ], correctIndex: 0,
    explanation: pair(
      'Phil accepts that the danger may be real, but says the writer gives too little information to explain it. Lucy agrees. Their criticism is the lack of supporting explanation.',
      'Фил допускает, что опасность реальна, но говорит, что автор почти не объясняет её. Люси соглашается. Претензия относится к недостатку обоснования.'),
    distractorRationales: [
      wrong(1, 'Difficulty following technical content is discussed later in relation to metal toxicity.', 'Непонятность технического материала обсуждается позднее применительно к токсичности металлов.'),
      wrong(2, 'Being ten years old is the criticism of the microplastics documentary, not of this article.', 'Десятилетняя давность — замечание о документальном фильме о микропластике, а не об этой статье.'),
      wrong(3, 'Lucy describes the article as claiming that the fish are expanding their habitat, not denying that expansion.', 'Люси говорит, что статья утверждает расширение ареала рыб, а не отрицает его.'),
    ],
    answerEvidence: 'The writer claims environmental danger but provides little information explaining why.',
    sourceEvidence: { printedPage: 100, cue: 'didn’t really provide much information to explain why', relation: 'Phil’s criticism, followed by Lucy’s agreement.' },
    scopeLimits: pair('Resource–evaluation mapping within a single discussion; the factual truth of the environmental claim is not tested.', 'Соотнесение материала и оценки внутри одного обсуждения; фактическая истинность экологического утверждения не проверяется.'),
  }),
  item({
    id: 'c21-t1-listening-07', stimulusId: 'c21-t1-resources',
    evidenceTiming: { startSeconds: 74.9, endSeconds: 101.24 },
    construct: pair('Preserving a qualified positive evaluation after initial difficulty', 'Сохранение положительной оценки с оговоркой о первоначальной трудности'),
    prompt: 'What do the students conclude about the book on coastal ecosystems?',
    choices: [
      'It contains helpful diagrams but remains too technical for them to understand.',
      'It explains familiar ideas clearly but adds little to what they already know.',
      'It demands effort at first but ultimately improves understanding of the issues.',
      'It begins with a useful overview but becomes less clear as the detail increases.',
    ], correctIndex: 2,
    explanation: pair(
      'Lucy says the book was hard going at first but left her with a much better understanding. Phil agrees and praises the summary and diagrams.',
      'Люси говорит, что сначала читать было трудно, но в итоге она гораздо лучше поняла вопросы. Фил соглашается и хвалит изложение и схемы.'),
    distractorRationales: [
      wrong(0, 'The diagrams help, and both students report increased understanding rather than continued failure to understand.', 'Схемы помогают, а оба студента говорят об улучшении понимания, а не о сохраняющейся непонятности.'),
      wrong(1, 'Stating what everybody already knows is their criticism of a pollution podcast, not their final judgement of the book.', 'Изложение того, что и так всем известно, — их критика подкаста о загрязнении, а не итоговая оценка книги.'),
      wrong(3, 'This reverses the direction of the experience: difficulty comes first, followed by improved understanding.', 'Здесь опыт развёрнут наоборот: в записи сначала трудность, затем улучшение понимания.'),
    ],
    answerEvidence: 'Initial difficulty gives way to better understanding; the other student agrees and values the diagrams.',
    sourceEvidence: { printedPage: 100, cue: 'hard going at first ... much better understanding', relation: 'Lucy’s contrast and Phil’s subsequent agreement.' },
    scopeLimits: pair('One qualified evaluation, not a judgement of the listener’s ability to read the book; shares the resources-discussion cluster.', 'Одна оценка с оговоркой, а не проверка способности слушателя читать саму книгу; вопрос входит в общий блок обсуждения материалов.'),
  }),
  item({
    id: 'c21-t1-listening-08', stimulusId: 'c21-t1-resources',
    evidenceTiming: { startSeconds: 119.12, endSeconds: 133.1 },
    construct: pair('Understanding what makes a presentation one-sided', 'Понимание причины односторонности изложения'),
    prompt: 'Why do the students describe the podcast about floating marine cities as one-sided?',
    choices: [
      'It considers environmental damage but leaves out possible benefits for people.',
      'It describes only existing cities and avoids discussing future possibilities.',
      'It uses the views of residents but excludes the opinions of researchers.',
      'It emphasises benefits for people while overlooking environmental effects.',
    ], correctIndex: 3,
    explanation: pair(
      'Lucy calls the account one-sided. Phil explains that it focuses on benefits to people and ignores effects on the environment.',
      'Люси называет изложение односторонним. Фил объясняет: оно сосредоточено на выгодах для людей и игнорирует последствия для окружающей среды.'),
    distractorRationales: [
      wrong(0, 'This reverses what is included and excluded: human benefits receive attention; environmental effects do not.', 'Этот вариант меняет местами включённое и пропущенное: внимание уделяется выгодам людям, а не экологическим последствиям.'),
      wrong(1, 'A contrast between existing and future cities is not their stated criticism.', 'Различие между существующими и будущими городами не является названной ими претензией.'),
      wrong(2, 'They do not criticise the selection of resident versus researcher voices.', 'Они не критикуют выбор голосов жителей вместо исследователей.'),
    ],
    answerEvidence: 'The discussion identifies human benefits as the focus and environmental effects as the omitted perspective.',
    sourceEvidence: { printedPage: 100, cue: 'benefit people and ignored the effects on the environment', relation: 'Phil clarifies Lucy’s preceding description of a one-sided picture.' },
    scopeLimits: pair('The omitted perspective is supplied in the conversation; no outside knowledge of floating cities is required.', 'Пропущенная точка зрения названа в разговоре; внешние знания о плавучих городах не требуются.'),
  }),
  item({
    id: 'c21-t1-listening-09', stimulusId: 'c21-t1-rubber',
    evidenceTiming: { startSeconds: 40.48, endSeconds: 74.4 },
    construct: pair('Following a causal explanation about production and demand', 'Понимание причинного объяснения связи производства и спроса'),
    prompt: 'Why does the long wait before rubber trees begin producing make planning difficult?',
    choices: [
      'Farmers have to make planting decisions long before the future demand is known.',
      'Farmers must wait for demand to fall before harvesting their rubber.',
      'The trees need increasingly precise weather conditions as they mature.',
      'Farmers need more workers each year simply because the trees are older.',
    ], correctIndex: 0,
    explanation: pair(
      'Other crops can be changed relatively quickly as demand rises or falls. Rubber trees must be planted many years ahead, making such adjustment harder.',
      'Другие культуры можно сравнительно быстро менять при росте или падении спроса. Каучуковые деревья приходится сажать на много лет вперёд, что затрудняет такую адаптацию.'),
    distractorRationales: [
      wrong(1, 'Falling demand is an example of a change growers may need to respond to, not a condition for harvesting.', 'Падение спроса — пример изменения, на которое нужно реагировать, а не условие начала сбора.'),
      wrong(2, 'Climate requirements are a separate constraint; the lecturer does not say they become more demanding as the trees mature.', 'Требования к климату — отдельное ограничение; лектор не говорит, что по мере взросления деревьев эти требования усиливаются.'),
      wrong(3, 'Manual extraction is discussed separately; increasing worker numbers as trees age is not the explanation given.', 'Ручной сбор обсуждается отдельно; рост числа работников по мере старения деревьев не назван причиной.'),
    ],
    answerEvidence: 'Planting eight to ten years ahead makes it difficult to adjust production when demand changes.',
    sourceEvidence: { printedPage: 101, cue: 'if you have to plant eight or ten years ahead', relation: 'The comparison with other crops explains the planning consequence.' },
    scopeLimits: pair('Understanding the lecturer’s causal comparison, not knowledge of agriculture or a measure of quantitative reasoning.', 'Понимание причинного сравнения лектора, а не знание сельского хозяйства или оценка математического мышления.'),
  }),
  item({
    id: 'c21-t1-listening-10', stimulusId: 'c21-t1-rubber',
    evidenceTiming: { startSeconds: 127.68, endSeconds: 145.14 },
    construct: pair('Distinguishing a limited possibility from impossibility', 'Различение ограниченной возможности и невозможности'),
    prompt: 'What does the lecturer say about recycling rubber?',
    choices: [
      'It is straightforward, but demand for the recycled product is too low.',
      'It is impossible, unlike the recycling of water and glass.',
      'It is possible, but its difficulty restricts the supply available.',
      'It is possible only after rubber has been mixed with another material.',
    ], correctIndex: 2,
    explanation: pair(
      'The lecturer explicitly says recycling rubber is possible but very difficult. This difficulty contributes to the limit on available supply.',
      'Лектор прямо говорит, что переработка каучука возможна, но очень трудна. Эта трудность также ограничивает доступное количество материала.'),
    distractorRationales: [
      wrong(0, 'The difficulty of recycling, not weak demand for a recycled product, is the reason stated.', 'Названная причина — трудность переработки, а не слабый спрос на переработанный продукт.'),
      wrong(1, 'The lecturer says recycling is possible, so describing it as impossible loses an important qualification.', 'Лектор говорит, что переработка возможна; слово «невозможна» убирает важную оговорку.'),
      wrong(3, 'No requirement to mix rubber with another material is stated in this explanation.', 'Требование смешивать каучук с другим материалом в этом объяснении не названо.'),
    ],
    answerEvidence: 'Recycling rubber is possible, but very difficult, which reduces how much rubber is available.',
    sourceEvidence: { printedPage: 101, cue: 'although this is also possible with rubber, it’s very difficult', relation: 'Concession preserves possibility while explaining a supply constraint.' },
    scopeLimits: pair('A qualification in the same lecture extract; not independent confirmation of the preceding rubber item or a CEFR-level judgement.', 'Оговорка в том же отрывке лекции; не независимое подтверждение предыдущего вопроса и не суждение об уровне CEFR.'),
  }),
];

export default { LISTENING_VERSION, listeningMetadata, listeningStimuli, listeningItems };
