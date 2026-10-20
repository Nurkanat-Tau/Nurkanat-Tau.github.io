/**
 * Worked report content for a fictional adult learner. Not a real assessment.
 * No level here was established by human marking or calibrated scoring.
 * Original English task/sample text intentionally remains English in both locales.
 */
const T=(ru,en)=>({ru,en});
const content={
  title:T('Как может выглядеть ваш личный разбор','What your personal assessment could look like'),
  exampleNotice:T(
    'Вымышленный пример. Данияр, его ответы и наблюдения созданы для демонстрации отчёта. Уровни заданы в сценарии, а не установлены проверкой. Это не результат реального ученика и не образец уже выполненной преподавателем оценки.',
    'Fictional example. Daniyar, his answers, and the observations were created to demonstrate the report. Levels are assigned within the scenario, not established by assessment. This is not a real learner’s result or a claim that a teacher has completed a review.'),
  learner:{name:T('Данияр — вымышленный участник','Daniyar — fictional learner'),age:22,
    goal:T('Свободнее участвовать в занятиях и повседневных разговорах; читать материалы по интересам.','Participate more comfortably in classes and everyday conversations, while reading about personal interests.'),
    availablePractice:T('Около 15 минут четыре раза в неделю.','Approximately 15 minutes, four times a week.')},
  summary:{
    heading:T('Чтение — ваша опора. Главный следующий шаг — понимать, как меняется разговор.','Reading is a strength. The next priority is following changes within a conversation.'),
    body:T('В этом сценарии Данияр понимает позицию автора и условия в письменных сообщениях. На слух он удерживает простые детали, но в разговоре о встрече выбирает первоначальное время вместо окончательного. Его письменные просьбы понятны, хотя формы глаголов не всегда соответствуют времени события.',
      'In this scenario, Daniyar understands a writer’s position and conditions in written messages. In listening, he retains simple details but selects an original meeting time instead of the final arrangement. His written requests are clear, although verb forms do not always match the time of the event.'),
    noOverall:T('Общего балла «A2–B2» здесь нет. Отдельные навыки описывают разные возможности; рекомендация по группе объясняется отдельно.','There is no “A2–B2 overall score.” Separate skills describe different capabilities, and the course recommendation has its own rationale.')},
  profile:[
    {id:'reading',label:T('Чтение','Reading'),level:'B2',levelNote:T('Уровень в вымышленном сценарии','Level in the fictional scenario'),
      interpretation:T('Различает общую рекомендацию и оговорку; учитывает условие, меняющее практическое решение.','Distinguishes an overall recommendation from a reservation and follows a condition that changes a practical decision.'),evidenceIds:['EX-R1','EX-R2'],
      limits:T('Два показанных ответа иллюстрируют вывод; сами по себе они не устанавливают B2.','The two displayed responses illustrate the interpretation; they do not establish B2 by themselves.')},
    {id:'listening',label:T('Аудирование','Listening'),level:'A2',levelNote:T('Уровень в вымышленном сценарии','Level in the fictional scenario'),
      interpretation:T('В сценарии узнаёт время и место в простом сообщении, но теряет обновлённую договорённость в диалоге.','In the scenario, identifies time and place in a simple message but loses an updated arrangement in a conversation.'),evidenceIds:['EX-L1','EX-L2'],
      limits:T('Здесь показан текст сценария, а не запись. Прочтение транскрипта не является проверкой аудирования.','These are written scenarios, not recordings. Reading a transcript is not a listening assessment.')},
    {id:'speaking',label:T('Говорение','Speaking'),level:'B1',levelNote:T('Иллюстрация; реальная оценка преподавателя не проводилась','Illustration; no actual teacher assessment has taken place'),
      interpretation:T('Строит связный короткий рассказ и просит уточнить непонятный вопрос; формы прошедшего времени нестабильны.','Builds a connected short account and asks for clarification when needed; past-time forms are inconsistent.'),evidenceIds:['EX-S1','EX-S2'],
      limits:T('По письменному фрагменту нельзя оценить произношение, скорость, длительность пауз или качество реального взаимодействия.','A written excerpt cannot establish pronunciation, speaking rate, pause duration, or the quality of live interaction.')},
    {id:'writing',label:T('Письмо','Writing'),level:'B1',levelNote:T('Иллюстрация; реальная оценка преподавателя не проводилась','Illustration; no actual teacher assessment has taken place'),
      interpretation:T('Ясно сообщает проблему и желаемое действие; в рассказе есть последовательность и вывод. Нужна работа с глагольными формами и некоторыми связями между предложениями.','Explains a problem and requested action clearly; the account has a sequence and a conclusion. Verb forms and some sentence connections need attention.'),evidenceIds:['EX-W1','EX-W2'],
      limits:T('Уровень иллюстративный. В реальной работе нужны оценка по рубрике, условия выполнения и дополнительная проверка пограничных случаев.','The level is illustrative. A real result requires rubric-based marking, known task conditions, and additional review for borderline cases.')},
    {id:'language',label:T('Языковые средства','Language use'),level:'B1',levelNote:T('Поддерживающее свидетельство, не отдельный общий уровень','Supporting evidence, not a separate overall proficiency level'),
      interpretation:T('Распознаёт временную последовательность и уместную просьбу; применение форм в собственном тексте менее устойчиво.','Recognises time relationships and an appropriate request; using forms consistently in original writing is less secure.'),evidenceIds:['EX-U1','EX-U2','EX-W1'],
      limits:T('Выбор готового ответа не доказывает свободное владение конструкцией в речи или письме.','Selecting an answer does not demonstrate spontaneous control of the construction in speaking or writing.')}
  ],
  strengths:[
    {id:'strength-reading',title:T('Вы читаете не только отдельные факты','You read beyond isolated facts'),
      observation:T('В EX-R1 выбран ответ, сохраняющий и похвалу маршрута, и оговорку о его сложности. В EX-R2 учтено, что резервное помещение не вмещает всех гостей.','In EX-R1, the chosen answer preserves both praise for the route and the reservation about its difficulty. In EX-R2, the response accounts for the backup room’s limited capacity.'),evidenceIds:['EX-R1','EX-R2'],
      useIt:T('Сохраняйте чтение на интересном и достаточно сложном уровне, даже когда отдельно укрепляете аудирование.','Keep reading interesting, suitably challenging material while working separately on listening.')},
    {id:'strength-purpose',title:T('Ваши сообщения помогают собеседнику действовать','Your messages give the reader something clear to act on'),
      observation:T('В EX-W1 понятны причина обращения, желаемый перенос и два вопроса организатору. Ошибки не скрывают цель письма.','EX-W1 clearly states the reason for writing, the requested change, and two questions for the organiser. Errors do not hide the message’s purpose.'),evidenceIds:['EX-W1'],
      useIt:T('Сначала сохраняйте ясную структуру «проблема → просьба → нужные детали», затем проверяйте формы.','Keep the clear “problem → request → needed details” structure, then check the language forms.')},
    {id:'strength-repair',title:T('Вы умеете поддержать разговор, когда не всё понятно','You have a way to keep a conversation going when something is unclear'),
      observation:T('В EX-S2 Данияр называет непонятное выражение и после переформулировки даёт ответ с причиной. Это полезнее, чем угадывать вопрос.','In EX-S2, Daniyar identifies the unclear expression and, after rephrasing, gives an answer with a reason. This is more useful than guessing the question.'),evidenceIds:['EX-S2'],
      useIt:T('Продолжайте использовать короткие уточнения: “Do you mean…?” и “Could you say that another way?”','Continue using brief clarification requests such as “Do you mean…?” and “Could you say that another way?”')}
  ],
  priorities:[
    {id:'priority-listening',title:T('Удерживать окончательное решение, когда собеседники меняют план','Keep track of the final decision when speakers change a plan'),
      observation:T('В EX-L2 ответ 10:00 относится к отвергнутому варианту. Окончательная договорённость — 10:30 у южных ворот.','In EX-L2, 10:00 belongs to the rejected option. The final arrangement is 10:30 at the south gate.'),evidenceIds:['EX-L2'],
      nextAction:T('В коротком новом диалоге записывайте две строки: “сначала предложили” и “в итоге решили”. Только после второго прослушивания сравнивайте с транскриптом.','For a new short conversation, write two lines: “first proposed” and “finally agreed.” Compare with the transcript only after a second listen.'),
      successCheck:T('На новом материале называйте финальное время, место или действие и объясняйте, какой прежний вариант был отменён. Один успех не означает смену уровня.','On new material, identify the final time, place, or action and explain which earlier option was dropped. A single success does not indicate a level change.')},
    {id:'priority-forms',title:T('Согласовывать форму глагола со временем сообщения','Match verb forms to the time relationship you mean'),
      observation:T('В EX-W1 “change … yesterday” требует “changed”, а “have already pay” — “have already paid”. В EX-S1 “Last month I start” показывает похожую нестабильность.','In EX-W1, “change … yesterday” needs “changed,” and “have already pay” needs “have already paid.” EX-S1’s “Last month I start” shows a related inconsistency.'),evidenceIds:['EX-W1','EX-S1','EX-U1'],
      nextAction:T('Пишите короткие реальные сообщения: одно о завершённом событии со временем, другое о действии, важном сейчас. Отмечайте указатель времени и проверяйте весь глагольный оборот.','Write short messages about real situations: one completed event with a time reference and one action relevant now. Mark the time cue and check the complete verb phrase.'),
      successCheck:T('Через несколько дней составьте новые сообщения без образца. Проверяйте перенос навыка, а не только исправленный текст.','A few days later, write new messages without a model. Check transfer to a new situation, not just the corrected text.')}
  ],
  evidence:{
    reading:[
      {id:'EX-R1',title:T('Чтение: рекомендация с оговоркой','Reading: a recommendation with a reservation'),
        passage:'The river walk is described online as an easy afternoon out. That is fair if you stop at the old bridge. Beyond it, the path becomes narrow and uneven, and the final climb is quite steep. I enjoyed the quieter section most, but I would not send a family there expecting a gentle stroll. The route deserves its popularity; the description needs to be clearer about whom the whole walk will suit.',
        question:'What is the writer’s overall view?',
        options:['The route is worthwhile, but its full length is more demanding than the description suggests.','The route’s popularity is undeserved because the final section is unsafe for every visitor.','The easy first section is the only part the writer enjoyed.'],key:0,learnerAnswer:0,
        interpretation:T('Ответ сохраняет положительную оценку маршрута и ограничение для определённых посетителей. Автор не объявляет маршрут плохим для всех.','The response preserves the positive evaluation and the qualification for particular visitors. The writer does not reject the route for everyone.')},
      {id:'EX-R2',title:T('Чтение: условие, меняющее решение','Reading: a condition that changes a decision'),
        passage:'We have sixty bookings for the outdoor film night. If it rains, the upstairs room is available, but it holds only forty people. Please do not promise everyone an indoor place yet. We can offer the first forty customers a choice of moving indoors or receiving a refund; the remaining customers will need a refund or a place at the next screening. The weather decision will be made on Friday morning.',
        question:'What should the organiser avoid saying before Friday’s decision?',
        options:['The event might have to move indoors.','Every ticket holder is guaranteed a place if the event moves indoors.','Some customers may be offered a later screening.'],key:1,learnerAnswer:1,
        interpretation:T('Ответ учитывает одновременно шестьдесят бронирований и сорок мест; наличие помещения не означает наличие места для каждого.','The response brings together sixty bookings and forty seats: having a room does not mean having space for everyone.')}
    ],
    listening:[
      {id:'EX-L1',title:T('Аудирование: простое сообщение','Listening: a straightforward message'),
        sourceNote:T('Вымышленное событие для отчёта. Аудиозаписи нет; ниже приведён предполагаемый текст записи и придуманный ответ.','Fictional report scenario. There is no recording; the intended transcript and an invented response appear below.'),
        transcript:'Hello, this is a reminder about your cooking lesson on Thursday. It starts at six in Room Three. Please bring a container so you can take your food home.',
        question:'When does the lesson start?',options:['Thursday at six.','Tuesday at six.','Thursday at three.'],key:0,learnerAnswer:0,
        interpretation:T('В сценарии сохранены явно названные день и время. Этот ответ не показывает, как человек справится с длинным разговором.','In the scenario, the explicitly stated day and time are retained. This response does not show how someone would handle an extended conversation.')},
      {id:'EX-L2',title:T('Аудирование: изменённая договорённость','Listening: a revised arrangement'),
        sourceNote:T('Вымышленный диалог и ответ. Реального прослушивания или аудиозаписи в этом примере нет.','Fictional dialogue and response. No real listening session or recording exists for this example.'),
        turns:[{speaker:'Maya',text:'Shall we meet by the north gate at ten?'},{speaker:'Ali',text:'I can’t get there that early. Would half past ten work?'},{speaker:'Maya',text:'That’s fine. Oh, but the north gate is closed this weekend.'},{speaker:'Ali',text:'Then let’s use the south gate. Same time—half past ten?'},{speaker:'Maya',text:'Yes. I’ll see you there.'}],
        question:'What is the final arrangement?',options:['The north gate at ten.','The south gate at ten.','The south gate at half past ten.'],key:2,learnerAnswer:1,
        interpretation:T('Выбранный ответ удерживает новое место, но оставляет прежнее время. Это конкретная цель для практики слежения за изменениями, а не основание считать все навыки слабыми.','The selected answer retains the new place but keeps the earlier time. This is a specific target for practising changes in an exchange, not evidence that every skill is weak.')}
    ],
    language:[
      {id:'EX-U1',title:T('Языковые средства: порядок событий','Language use: sequence of events'),
        context:'The bus left at 8:05. I reached the stop at 8:10.',question:'Which sentence matches the situation?',
        options:['The bus was about to leave when I reached the stop.','The bus had already left when I reached the stop.','The bus was still waiting when I reached the stop.'],key:1,learnerAnswer:1,
        interpretation:T('Верно распознана последовательность. Подсказка “already” тоже помогает; это не самостоятельное доказательство владения Past Perfect в собственной речи.','The sequence is recognised correctly. “Already” also provides a cue; this is not independent evidence of productive command of the past perfect.')},
      {id:'EX-U2',title:T('Языковые средства: уместная просьба','Language use: an appropriate request'),
        context:'You need an organiser to move your booking, but you do not know whether another place is available.',question:'Which request leaves the availability open?',
        options:['I confirm that you have moved my booking.','You moved my booking yesterday.','Would it be possible to move my booking to Sunday?'],key:2,learnerAnswer:2,
        interpretation:T('Выбран вопрос о возможности, а не утверждение о том, что перенос уже состоялся. Такая же понятная цель есть в EX-W1.','The answer asks about a possibility instead of asserting that the change has already happened. EX-W1 also communicates a clear request.')}
    ],
    speaking:[
      {id:'EX-S1',title:T('Говорение: короткий рассказ','Speaking: a short account'),
        sourceNote:T('Вымышленный текстовый пример, записи нет. Это не расшифровка реального интервью; время и произношение не измерялись.','Fictional text example; no recording. This is not a transcript of an actual interview, and timing and pronunciation were not measured.'),
        turns:[{role:'interviewer',text:'Tell me about something new you tried recently.'},{role:'learner',text:'Last month I start a cooking class. At first I was worried because I usually cook only simple food. In the first lesson we made soup, and mine was too salty. The teacher showed me how to fix it. I liked that we could try again, not only listen. Now I cook for my family sometimes.'}],
        observations:[T('Есть событие, исходное чувство, проблема, помощь и результат; мысль связана и понятна.','There is an event, an initial feeling, a problem, help, and an outcome; the account is connected and understandable.'),T('“Last month I start” → “Last month I started”. Остальные формы “was”, “made”, “showed” показывают, что ошибка не одинакова во всех предложениях.','“Last month I start” → “Last month I started.” The forms “was,” “made,” and “showed” show that the same error does not occur in every sentence.')],
        unavailableEvidence:T('Нельзя приписывать этому тексту беглость, определённый акцент или уверенное произношение.','This text cannot be credited with fluency, a particular accent, or confident pronunciation.')},
      {id:'EX-S2',title:T('Говорение: уточнение вопроса','Speaking: clarifying a question'),
        sourceNote:T('Вымышленный пример, аудиозаписи и временных отметок нет.','Fictional example; there is no audio recording or timing data.'),
        turns:[{role:'interviewer',text:'What would make your daily journey less stressful?'},{role:'learner',text:'Could you explain “less stressful”? Do you mean easier?'},{role:'interviewer',text:'Yes. What would make the trip easier for you?'},{role:'learner',text:'More buses in the morning. Sometimes I wait twenty minutes and then the bus is crowded. If there were more buses, I could leave home later and still arrive on time.'}],
        observations:[T('Просьба об уточнении адресная: названо непонятное выражение и предложено значение.','The clarification request is specific: it identifies the unclear expression and proposes a meaning.'),T('После переформулировки дано предложение с причиной и возможным результатом. В реальном разговоре нужно проверить, насколько часто требуется такая помощь.','After rephrasing, the learner gives a proposal, reason, and possible result. In a real conversation, the assessor should check how often this help is needed.')],
        unavailableEvidence:T('Нельзя считать один придуманный обмен подтверждением устойчивого самостоятельного взаимодействия.','One invented exchange cannot confirm consistently independent interaction.')}
    ],
    writing:[
      {id:'EX-W1',title:T('Письмо 1: перенос бронирования','Writing 1: changing a booking'),
        instruction:T('Напишите организатору: объясните, почему не сможете прийти в субботу, попросите перенести бронирование и уточните оплату и время.','Write to the organiser: explain why you cannot attend on Saturday, request a change, and ask about payment and timing.'),
        sourceNote:T('Оригинальный вымышленный текст с намеренно включёнными ошибками.','Original fictional learner text containing intentional errors.'),
        original:'Hello Marina,\nI booked a place on Saturday’s photography workshop, but my manager change my shift yesterday and now I work until two. I would like to move my booking to Sunday if a place is available. I have already pay for Saturday, so could you tell me if I need to pay anything more?\nI don’t have a camera, but I can bring my phone. On the website it says that phones are fine. Please let me know what time Sunday’s workshop starts and whether you can move my booking.\nThank you,\nDaniyar',
        annotations:[
          {id:'W1-A1',quote:'my manager change my shift yesterday',suggestion:'my manager changed my shift yesterday',category:T('Форма прошедшего времени','Past-time verb form'),note:T('Yesterday привязывает изменение к завершённому прошлому. Здесь нужна форма changed.','Yesterday locates the change in a completed past time, so changed is needed.')},
          {id:'W1-A2',quote:'I have already pay for Saturday',suggestion:'I have already paid for Saturday',category:T('Форма после have','Form after have'),note:T('В обороте have already … нужна форма paid. Это не правило «always use Present Perfect with already»: замечание относится к уже выбранной в тексте конструкции.','The phrase have already … needs paid. This is not a rule to always use the present perfect with already; the correction concerns the construction already chosen in the text.')}
        ],
        whatWorks:T('Причина и просьба появляются сразу. “If a place is available” учитывает возможность отказа. Вопросы об оплате и начале занятия позволяют организатору ответить по существу.','The reason and request appear immediately. “If a place is available” acknowledges that the change may not be possible. Questions about payment and the start time give the organiser clear points to answer.'),
        nextRevision:T('Исправьте две формы, затем составьте новое письмо о другой завершённой ситуации. Не заменяйте весь текст сложными фразами ради впечатления.','Correct the two forms, then write a new message about a different completed situation. Do not replace the whole message with elaborate language merely to sound impressive.')},
      {id:'EX-W2',title:T('Письмо 2: опыт и вывод','Writing 2: an experience and its lesson'),
        instruction:T('Опишите план, который изменился, и объясните, что вы сделаете иначе в следующий раз.','Describe a plan that changed and explain what you would do differently next time.'),
        sourceNote:T('Оригинальный вымышленный текст; это не работа реального студента.','Original fictional text; this is not a real student’s submission.'),
        original:'Last summer my brother and I decided to cycle to a lake near our town. We had never done a long ride before, so we prepared some food and checked the map.\nBefore we left, my brother and our neighbour checked my bike. He said it was ready. After an hour, one wheel became loose, and we decided to walk back rather than risk a longer ride.\nI was disappointed, however I learned something useful. Next time I will check the bikes more carefully and take a small repair kit. A good plan is not only about where you want to arrive.',
        annotations:[
          {id:'W2-A1',quote:'my brother and our neighbour checked my bike. He said it was ready.',suggestion:T('Если это был сосед: “Our neighbour said it was ready.” Если брат: “My brother said it was ready.”','If the neighbour said it: “Our neighbour said it was ready.” If the brother did: “My brother said it was ready.”'),category:T('Ясность отсылки','Reference clarity'),note:T('У he два возможных предшественника. Нельзя выбрать одного за автора; нужно уточнить, кто говорил.','He has two possible antecedents. The reviewer cannot choose the intended person for the writer; the reference needs clarification.')},
          {id:'W2-A2',quote:'I was disappointed, however I learned something useful.',suggestion:'I was disappointed. However, I learned something useful.',category:T('Граница предложений','Sentence boundary'),note:T('Здесь соединены два самостоятельных предложения. Точка и запятая после However делают границу ясной; возможны и другие корректные способы соединения.','These are two independent clauses. A full stop and a comma after However make the boundary clear; other correct ways to join the clauses are also possible.')}
        ],
        whatWorks:T('Подготовка, проблема, решение и вывод идут последовательно. Последний абзац связан с опытом, а не добавлен как отвлечённый лозунг.','Preparation, problem, decision, and lesson appear in a clear sequence. The final paragraph connects to the experience rather than adding an unrelated slogan.'),
        nextRevision:T('Уточните, кто говорил, и разделите предложение с however. Сохраните собственную последовательность и голос.','Clarify who spoke and repair the sentence with however. Keep the writer’s own sequence and voice.')}
    ]
  },
  rubricRationale:[
    {skill:'reading',criterion:T('Позиция и условия','Position and conditions'),observation:T('EX-R1 и EX-R2 показывают две разные операции: сохранить оговорку автора и применить ограничение вместимости.','EX-R1 and EX-R2 illustrate two different operations: preserving a writer’s qualification and applying a capacity constraint.'),evidenceIds:['EX-R1','EX-R2'],furtherEvidenceNeeded:T('Другие тексты, типы задач и устойчивый результат на новой форме.','Other texts and task types, plus consistent performance on a new form.')},
    {skill:'listening',criterion:T('Явные детали и пересмотр договорённости','Explicit details and revised arrangements'),observation:T('В придуманном наборе ответов EX-L1 успешен, а EX-L2 сохраняет устаревшее время. Это различие полезнее единого процента.','In the fictional responses, EX-L1 is successful while EX-L2 retains an outdated time. That distinction is more useful than one undifferentiated percentage.'),evidenceIds:['EX-L1','EX-L2'],furtherEvidenceNeeded:T('Реальные человеческие записи, известные условия прослушивания и несколько независимых ситуаций.','Actual human recordings, known listening conditions, and several independent situations.')},
    {skill:'speaking',criterion:T('Связность, взаимодействие и языковой контроль','Coherence, interaction, and language control'),observation:T('EX-S1 содержит связный рассказ и отдельную ошибку времени; EX-S2 показывает полезное уточнение. Произношение и беглость по этому материалу не оцениваются.','EX-S1 contains a connected account and a past-form error; EX-S2 illustrates useful clarification. Pronunciation and fluency are not assessed from this material.'),evidenceIds:['EX-S1','EX-S2'],furtherEvidenceNeeded:T('Живое интервью с несколькими задачами, наблюдение за самостоятельностью ответа и оценка обученным преподавателем.','A live interview with several tasks, observation of response independence, and a trained teacher’s assessment.')},
    {skill:'writing',criterion:T('Выполнение задачи, организация, точность','Task achievement, organisation, and accuracy'),observation:T('Оба текста выполняют коммуникативную задачу и имеют понятную структуру. Замечания привязаны к конкретным формам и отсылке, а не к общей характеристике «слабая грамматика».','Both texts fulfil their communicative purpose and have a clear structure. Comments identify specific forms and a reference issue rather than labelling the grammar generally weak.'),evidenceIds:['EX-W1','EX-W2'],furtherEvidenceNeeded:T('Реальные самостоятельные тексты, известное время выполнения и проверка по согласованной рубрике; при пограничном решении — второй взгляд.','Actual independent submissions, known task conditions, and an agreed rubric; a second review for a borderline decision.')}
  ],
  fourWeekPlan:{
    title:T('Четыре недели целевой практики','Four weeks of focused practice'),
    scope:T('Пример маршрута для этого профиля: четыре занятия по 15 минут в неделю. Он не обещает переход на следующий уровень за месяц. Используйте новые учебные материалы, не действующие задания диагностического банка.','An example route for this profile: four 15-minute sessions each week. It does not promise a level increase in a month. Use new practice materials, not active diagnostic-bank items.'),
    weeks:[
      {week:1,focus:T('Отделять первый вариант от окончательного','Separate the first proposal from the final arrangement'),
        activities:[T('Два занятия: слушайте новый короткий диалог об изменении плана. После первого раза запишите общую ситуацию; после второго — что предложили и на чём остановились.','Two sessions: listen to a new short conversation about a changed plan. After the first listen, note the situation; after the second, note the first proposal and final agreement.'),T('Два занятия: сравните свои заметки с транскриптом и перескажите решение в трёх предложениях.','Two sessions: compare your notes with the transcript and retell the final decision in three sentences.')],
        check:T('В конце недели выполните такую же задачу на незнакомом диалоге и отметьте, какая информация потерялась.','At the end of the week, try the same task with an unfamiliar conversation and record what information was lost.'),
        adapt:T('Если потерян общий смысл, выбирайте более короткий и ясный материал. Не начинайте с ускорения записи.','If the overall meaning is lost, choose shorter, clearer material. Do not begin by speeding up the audio.')},
      {week:2,focus:T('Проверять время и форму в своих сообщениях','Check time and form in your own messages'),
        activities:[T('Два занятия: напишите по 60–90 слов о завершённом событии. Подчеркните yesterday, last week и другие указатели; проверьте связанные с ними формы.','Two sessions: write 60–90 words about a completed event. Underline yesterday, last week, and other time references; check the related verb forms.'),T('Два занятия: составьте короткие просьбы с актуальным результатом — уже оплатил, ещё не получил ответ. Проверьте выбранный оборот целиком.','Two sessions: write short requests with a current consequence—you have already paid or have not received a reply yet. Check the complete construction you chose.')],
        check:T('Спустя два дня напишите новое сообщение без старого текста перед глазами.','Two days later, write a new message without looking at the previous one.'),
        adapt:T('Если ошибки повторяются, оставьте один тип ситуации на несколько попыток и получите короткую проверку.','If errors persist, practise one situation type over several attempts and request a brief review.')},
      {week:3,focus:T('Соединить слушание и понятный пересказ','Connect listening with a clear retelling'),
        activities:[T('Два занятия: после нового разговора запишите четыре опорных слова и устно перескажите проблему, варианты и решение.','Two sessions: after a new conversation, note four keywords and retell the problem, options, and decision aloud.'),T('Два занятия: обсудите с партнёром небольшой реальный выбор. Используйте уточнение, если не поняли вопрос; затем подтвердите договорённость.','Two sessions: discuss a small real choice with a partner. Ask for clarification when needed, then confirm the agreement.')],
        check:T('Партнёр должен суметь повторить то же итоговое решение. Сравните смысл, а не совпадение слов.','Your partner should be able to repeat the same final decision. Compare meaning, not identical wording.'),
        adapt:T('При отсутствии партнёра можно записать пересказ для себя, но это не заменяет проверку взаимодействия.','If no partner is available, record a retelling for yourself, but do not treat that as an interaction assessment.')},
      {week:4,focus:T('Проверить перенос на новый материал','Check transfer to new material'),
        activities:[T('Одно занятие: новый диалог с изменением плана; одно — новое письмо с просьбой и причиной.','One session: a new conversation with a revised plan; another: a new request message with a reason.'),T('Одно занятие: короткий разговор с последующими вопросами; одно — сравнение новых ответов с первой неделей и выбор дальнейшего приоритета.','One session: a short conversation with follow-up questions; another: compare the new work with week one and choose the next priority.')],
        check:T('Отмечайте: удержано ли итоговое решение, понятна ли просьба, исправились ли формы без подсказки. При наличии преподавателя обсудите конкретные примеры.','Check whether the final decision was retained, the request was clear, and forms improved without prompting. Discuss concrete examples with a teacher when available.'),
        adapt:T('Если изменился только знакомый текст, продолжайте практику переноса. Повтор того же теста не подтверждает рост уровня.','If only the familiar text improved, continue practising transfer. Repeating the same test does not confirm a proficiency increase.')}
    ]},
  placement:{
    title:T('Группа под профиль, а не среднее арифметическое','A course matched to the profile, not an arithmetic average'),
    recommendation:T('В этом сценарии — B1 с целевой поддержкой аудирования, при выполнении условий ниже.','In this scenario: B1 with focused listening support, provided the conditions below are met.'),
    rationale:T('Связные речь и письмо B1 в сценарии дают основание рассмотреть эту группу. Чтение B2 стоит сохранять как сильную сторону. Аудирование A2 требует поддержки и проверки реальной доступности занятия.','The scenario’s connected B1 speaking and writing give a reason to consider this group. B2 reading should remain a strength. A2 listening calls for support and a check that the actual class is accessible.'),
    requiredBeforeConfirmation:[T('Преподаватель проводит реальное интервью и проверяет реальные письменные работы. В этом демонстрационном отчёте такой проверки не было.','A teacher conducts an actual interview and reviews actual writing. That review has not occurred in this demonstration.'),T('Ученик следует обычным объяснениям и заданиям группы с периодическим уточнением, без постоянного перевода или упрощения.','The learner can follow ordinary class explanations and tasks with occasional clarification, rather than continual translation or simplification.'),T('Доступны поддержка аудирования и нагрузка, совместимая с расписанием ученика.','Focused listening support is available and the workload fits the learner’s schedule.')],
    ifUnmet:T('Если условия не выполнены, сначала нужен переходный модуль или другая группа, затем пересмотр размещения. Один сильный навык не отменяет трудностей другого.','If those conditions are unmet, use a bridge module or a different group, then reconsider placement. Strength in one skill does not remove difficulty in another.'),
    b2Readiness:T('Группа B2 требует дополнительных свидетельств: понимать её устные задания и обсуждения, развивать ответы и выполнять письменные задачи этого курса. Само по себе чтение B2 этого не подтверждает.','A B2 group requires additional evidence: following its spoken tasks and discussions, developing responses, and completing its writing demands. B2 reading alone does not establish that readiness.')},
  clarification:{
    title:T('Как уточнить результат, если он кажется неожиданным','How to clarify an unexpected result'),
    steps:[T('Назовите конкретный навык и пример, который не согласуется с вашим опытом. Можно указать трудность со звуком, усталость, непонятную инструкцию или помощь извне.','Identify the skill and an example that seems inconsistent with your experience. Mention audio problems, fatigue, unclear instructions, or outside assistance where relevant.'),T('Попросите объяснить связь между заданием, вашим ответом и выводом. Процент сам по себе не объясняет уровень.','Ask how the task, your response, and the interpretation connect. A percentage alone does not explain a level.'),T('При недостаточных данных используйте дополнительные новые задачи и живую проверку. Повтор знакомых вопросов не является независимым подтверждением.','Where evidence is insufficient, use additional new tasks and a live check. Repeating familiar questions is not independent confirmation.')],
    separation:T('Уточнение результата и покупка курса — разные решения. Отчёт должен быть полезен, даже если вы не записываетесь.','Clarifying a result and buying a course are separate decisions. The report should remain useful even if you do not enrol.')},
  courseFit:{
    title:T('Выбрать темп после подтверждения группы','Choose a pace after confirming placement'),
    standard:{name:T('Стандартный курс','Standard course'),duration:T('Ориентир: около 6 месяцев на программу уровня','Indicative duration: approximately 6 months for a level programme'),
      fit:T('Подходит, если нужен устойчивый график с временем на практику между занятиями. Для этого профиля важно заранее предусмотреть аудирование.','May suit a steady schedule with time to practise between lessons. For this profile, listening support should be planned in advance.')},
    intensive:{name:T('Интенсив','Intensive course'),duration:T('Ориентир: около 3 месяцев на программу уровня','Indicative duration: approximately 3 months for a level programme'),
      fit:T('Рассматривается при возможности регулярно заниматься чаще. Сначала нужно обсудить реальную недельную нагрузку и доступность устной части курса.','Consider when more frequent regular study is feasible. Discuss the actual weekly workload and access to the course’s spoken demands first.')},
    note:T('Длительность программы не гарантирует переход на следующий CEFR-уровень. Расписание, стоимость, наличие группы и включённая поддержка требуют подтверждения.','Programme duration does not guarantee progression to the next CEFR level. Schedule, fees, group availability, and included support need confirmation.')}
};

function localize(value,locale){
  if(Array.isArray(value))return value.map(item=>localize(item,locale));
  if(value&&typeof value==='object'){
    if(Object.keys(value).length===2&&Object.hasOwn(value,'ru')&&Object.hasOwn(value,'en'))return value[locale];
    return Object.fromEntries(Object.entries(value).map(([key,item])=>[key,localize(item,locale)]));
  }
  return value;
}

export const benchmarkExampleReport={
  schemaVersion:1,
  id:'benchmark-fictional-report-01',
  kind:'fictional-worked-example',
  defaultLocale:'ru',
  availableLocales:['ru','en'],
  isActualAssessment:false,
  humanReviewCompleted:false,
  hasAudioRecordings:false,
  displayOverallLevel:false,
  locales:{ru:localize(content,'ru'),en:localize(content,'en')}
};
export default benchmarkExampleReport;
