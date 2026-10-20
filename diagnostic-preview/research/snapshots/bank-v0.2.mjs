// Original demonstration content. Intended levels are authoring targets, not calibrated results.
export const BANK_VERSION = 'preview-0.2.0-draft';
export const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];
export const validation = 'draft';
export const targetsReviewed = false;

export const QUESTIONS = [
  // A1 — language: four grammar and four vocabulary items.
  {
    id: 'a1-g01', level: 0, domain: 'language', subskill: 'Грамматика: глагол be',
    prompt: 'My name is Lena. I ___ a student.',
    options: ['are', 'is', 'am', 'be'], answer: 2,
    explanation: 'С местоимением I используется форма am: I am a student.'
  },
  {
    id: 'a1-g02', level: 0, domain: 'language', subskill: 'Грамматика: Present Simple',
    prompt: 'Arman ___ English every evening.',
    options: ['studies', 'study', 'studying', 'are studying'], answer: 0,
    explanation: 'В Present Simple после he, she или имени одного человека к глаголу добавляется окончание: studies.'
  },
  {
    id: 'a1-g03', level: 0, domain: 'language', subskill: 'Грамматика: множественное число',
    prompt: 'There are three ___ on the table.',
    options: ['a cup', 'cup', 'cup of tea', 'cups'], answer: 3,
    explanation: 'После three требуется множественное число: three cups.'
  },
  {
    id: 'a1-g04', level: 0, domain: 'language', subskill: 'Грамматика: притяжательные слова',
    prompt: 'This is my brother. ___ name is Sam.',
    options: ['Her', 'His', 'Him', 'He'], answer: 1,
    explanation: 'Перед существительным name нужно притяжательное слово His: His name.'
  },
  {
    id: 'a1-v01', level: 0, domain: 'language', subskill: 'Лексика: повседневные действия',
    prompt: 'I am thirsty. I want to ___ some water.',
    options: ['read', 'wear', 'drink', 'open'], answer: 2,
    explanation: 'Thirsty означает «хочу пить»; с water в этом контексте подходит drink.'
  },
  {
    id: 'a1-v02', level: 0, domain: 'language', subskill: 'Лексика: места в городе',
    prompt: 'I want to borrow a book. I go to the ___.',
    options: ['library', 'airport', 'kitchen', 'station'], answer: 0,
    explanation: 'Library — библиотека, где можно взять книгу на время.'
  },
  {
    id: 'a1-v03', level: 0, domain: 'language', subskill: 'Лексика: предметы и действия',
    prompt: 'Please ___ the window. It is cold in here.',
    options: ['eat', 'draw', 'listen', 'close'], answer: 3,
    explanation: 'Close the window означает «закрыть окно»; это соответствует ситуации с холодом.'
  },
  {
    id: 'a1-v04', level: 0, domain: 'language', subskill: 'Лексика: простые прилагательные',
    prompt: 'The bag has nothing inside. It is ___.',
    options: ['late', 'empty', 'busy', 'young'], answer: 1,
    explanation: 'Empty означает «пустой»: внутри сумки ничего нет.'
  },
  {
    id: 'a1-r01', level: 0, domain: 'reading', subskill: 'Чтение: детали сообщения',
    passage: 'Hi Dana! I am at the cafe next to the library. I have a blue jacket. Your book is in my bag. Come here at three. See you soon! — Mira',
    prompt: 'Where is Mira?',
    options: ['In the library', 'At the cafe', 'At home', 'In a shop'], answer: 1,
    explanation: 'В сообщении прямо сказано: I am at the cafe. Библиотека находится рядом.'
  },
  {
    id: 'a1-r02', level: 0, domain: 'reading', subskill: 'Чтение: простые объявления',
    passage: 'Art Club: Monday at 4 p.m., Room 2. Bring a pencil and a notebook. Paper and paints are here. New students are welcome. The club is free.',
    prompt: 'What should students bring?',
    options: ['Paints and paper', 'Money for the club', 'A pencil and a notebook', 'A picture for the teacher'], answer: 2,
    explanation: 'Bring a pencil and a notebook — инструкция принести карандаш и блокнот.'
  },
  {
    id: 'a1-r03', level: 0, domain: 'reading', subskill: 'Чтение: расписание',
    passage: 'Our small shop is open from Monday to Saturday. We open at nine in the morning and close at six in the evening. On Sunday, the shop is closed.',
    prompt: 'When is the shop closed all day?',
    options: ['On Sunday', 'On Monday', 'On Friday', 'On Saturday'], answer: 0,
    explanation: 'Последнее предложение сообщает, что в воскресенье магазин закрыт.'
  },
  {
    id: 'a1-r04', level: 0, domain: 'reading', subskill: 'Чтение: личная информация',
    passage: 'My name is Tom. I live with my sister near a park. I work in a hotel in the morning. In the evening, I cook dinner and study English at home.',
    prompt: 'What does Tom do in the evening?',
    options: ['He works in a hotel.', 'He plays in the park.', 'He visits his sister.', 'He studies English.'], answer: 3,
    explanation: 'Tom пишет: In the evening ... study English at home.'
  },
  {
    id: 'a1-l01', level: 0, domain: 'listening', subskill: 'Аудирование: конкретная информация',
    transcript: 'Hello, my name is Sara. I am a teacher. I work at a small school near my house. I walk to work every morning.',
    audio: 'audio/a1-l01.wav', prompt: 'What is Sara’s job?',
    options: ['A driver', 'A doctor', 'A teacher', 'A cook'], answer: 2,
    explanation: 'Сара говорит: I am a teacher — она учитель.'
  },
  {
    id: 'a1-l02', level: 0, domain: 'listening', subskill: 'Аудирование: простая просьба',
    transcript: 'Ben, please bring your green bag tomorrow. Your books are in the classroom, so you do not need them. Bring your lunch in the bag.',
    audio: 'audio/a1-l02.wav', prompt: 'What colour is the bag Ben should bring?',
    options: ['Green', 'Blue', 'Black', 'Red'], answer: 0,
    explanation: 'В просьбе звучит green bag — зелёная сумка.'
  },
  {
    id: 'a1-l03', level: 0, domain: 'listening', subskill: 'Аудирование: время встречи',
    transcript: 'Hi, Nina. Let us meet at the park at two o’clock. I have a lesson at four, so I can stay for one hour.',
    audio: 'audio/a1-l03.wav', prompt: 'What time is the meeting?',
    options: ['At one o’clock', 'At four o’clock', 'At three o’clock', 'At two o’clock'], answer: 3,
    explanation: 'Встреча назначена на two o’clock. Четыре часа — время урока.'
  },
  {
    id: 'a1-l04', level: 0, domain: 'listening', subskill: 'Аудирование: нужный предмет',
    transcript: 'I have my phone and my keys. My ticket is on the table at home. I need to go back and get it before I take the bus.',
    audio: 'audio/a1-l04.wav', prompt: 'What is at home?',
    options: ['The phone', 'The ticket', 'The keys', 'The bus'], answer: 1,
    explanation: 'Говорящий оставил дома билет: My ticket is on the table at home.'
  },

  // A2 — language: four grammar and four vocabulary items.
  {
    id: 'a2-g01', level: 1, domain: 'language', subskill: 'Грамматика: Past Simple',
    prompt: 'Yesterday we ___ the bus to the museum.',
    options: ['take', 'taking', 'takes', 'took'], answer: 3,
    explanation: 'Yesterday указывает на прошлое; прошедшая форма take — took.'
  },
  {
    id: 'a2-g02', level: 1, domain: 'language', subskill: 'Грамматика: сравнение',
    prompt: 'This box is ___ than that one. Can you help me carry it?',
    options: ['heavy', 'heavier', 'heaviest', 'most heavy'], answer: 1,
    explanation: 'Для сравнения двух предметов с than нужна сравнительная степень: heavier.'
  },
  {
    id: 'a2-g03', level: 1, domain: 'language', subskill: 'Грамматика: Past Continuous',
    prompt: 'At eight last night, I ___ dinner when the phone rang.',
    options: ['was cooking', 'am cooking', 'cook', 'have cooked'], answer: 0,
    explanation: 'Was cooking описывает действие, которое продолжалось в момент звонка в прошлом.'
  },
  {
    id: 'a2-g04', level: 1, domain: 'language', subskill: 'Грамматика: слова количества',
    prompt: 'We have not got ___ milk left, so I will buy some.',
    options: ['many', 'a', 'any', 'few'], answer: 2,
    explanation: 'В отрицании с неисчисляемым milk подходит any: have not got any milk.'
  },
  {
    id: 'a2-v01', level: 1, domain: 'language', subskill: 'Лексика: транспорт',
    prompt: 'I arrived at the station too late and ___ my train.',
    options: ['lost', 'missed', 'forgot', 'left'], answer: 1,
    explanation: 'Miss a train означает «опоздать на поезд»; lose относится к потере предмета.'
  },
  {
    id: 'a2-v02', level: 1, domain: 'language', subskill: 'Лексика: покупки',
    prompt: 'The cashier gave me a ___ showing what I bought and how much I paid.',
    options: ['recipe', 'map', 'menu', 'receipt'], answer: 3,
    explanation: 'Receipt — чек с покупками и оплаченной суммой. Recipe — рецепт блюда.'
  },
  {
    id: 'a2-v03', level: 1, domain: 'language', subskill: 'Лексика: повседневные просьбы',
    prompt: 'May I ___ your pen for a minute? I will give it back soon.',
    options: ['owe', 'spend', 'borrow', 'lend'], answer: 2,
    explanation: 'Borrow означает «взять на время». Lend — дать кому-то на время.'
  },
  {
    id: 'a2-v04', level: 1, domain: 'language', subskill: 'Лексика: самочувствие',
    prompt: 'I slept for only three hours last night, so I feel very ___.',
    options: ['tired', 'crowded', 'expensive', 'delicious'], answer: 0,
    explanation: 'Tired — уставший: это соответствует недостатку сна.'
  },
  {
    id: 'a2-r01', level: 1, domain: 'reading', subskill: 'Чтение: изменения в планах',
    passage: 'Hello everyone. We planned to have our class picnic in the park on Saturday, but heavy rain is expected. We will meet at the community centre instead. Please arrive at twelve, as planned. Bring your own lunch. There is a kitchen where we can make tea, and we can play games in the main room.',
    prompt: 'What has changed about the picnic?',
    options: ['Its starting time', 'Its location', 'The day it will happen', 'Who will bring the food'], answer: 1,
    explanation: 'Изменилось место: вместо парка встреча пройдёт в community centre. Время осталось прежним.'
  },
  {
    id: 'a2-r02', level: 1, domain: 'reading', subskill: 'Чтение: условия услуги',
    passage: 'Bicycle hire is available every day from ten until six. A helmet is included in the price. You must leave an identity document at the desk and collect it when you return the bicycle. Children under twelve must ride with an adult. Please bring every bicycle back at least fifteen minutes before we close.',
    prompt: 'What must a customer leave at the desk during the hire?',
    options: ['A helmet', 'A bicycle lock', 'An identity document', 'A child’s ticket'], answer: 2,
    explanation: 'Условие прямо требует оставить identity document и забрать его при возврате велосипеда.'
  },
  {
    id: 'a2-r03', level: 1, domain: 'reading', subskill: 'Чтение: последовательность событий',
    passage: 'When Amir moved to a new town, he did not know anyone. First, he joined an online group for local runners. After chatting there for a week, he went to their Saturday run. He was worried because he was slow, but another beginner ran with him. Now they train together twice a week.',
    prompt: 'What did Amir do before going to the Saturday run?',
    options: ['He trained twice a week with a friend.', 'He moved away from the town.', 'He won a local race.', 'He joined an online running group.'], answer: 3,
    explanation: 'Сначала Amir присоединился к онлайн-группе, а через неделю пошёл на совместную пробежку.'
  },
  {
    id: 'a2-r04', level: 1, domain: 'reading', subskill: 'Чтение: причина решения',
    passage: 'I used to buy lunch near my office every day. The food was nice, but waiting in the queue took most of my lunch break. Last month I started bringing food from home. I still spend about the same amount on ingredients, but now I have time for a short walk after eating.',
    prompt: 'Why did the writer start bringing lunch from home?',
    options: ['To spend less time waiting', 'To stop eating cooked food', 'To learn to cook with colleagues', 'To reduce the cost of ingredients'], answer: 0,
    explanation: 'Главная причина — длинная очередь. Автор отмечает, что тратит примерно столько же денег.'
  },
  {
    id: 'a2-l01', level: 1, domain: 'listening', subskill: 'Аудирование: изменение расписания',
    transcript: 'Hello, this is the sports centre. Your swimming lesson will start at half past six tomorrow, not six o’clock. The teacher has a meeting earlier. The lesson will still be forty minutes long, and you should use the same entrance as usual.',
    audio: 'audio/a2-l01.wav', prompt: 'What is different about tomorrow’s lesson?',
    options: ['The teacher', 'Its length', 'The entrance', 'Its starting time'], answer: 3,
    explanation: 'Урок начнётся в 6:30 вместо 6:00. Длительность и вход не меняются.'
  },
  {
    id: 'a2-l02', level: 1, domain: 'listening', subskill: 'Аудирование: нужное действие',
    transcript: 'Hi, Alex. I collected the concert tickets this morning. You do not need to print anything. Please meet me outside the station at seven. Bring a warm jacket because we may wait outside the concert hall for a while.',
    audio: 'audio/a2-l02.wav', prompt: 'What does Alex need to bring?',
    options: ['Printed tickets', 'A warm jacket', 'A station map', 'Food for the concert'], answer: 1,
    explanation: 'В сообщении просят взять тёплую куртку. Печатать билеты не нужно.'
  },
  {
    id: 'a2-l03', level: 1, domain: 'listening', subskill: 'Аудирование: причина выбора',
    transcript: 'I usually go to work by bus. Today I walked because the weather was lovely and I had plenty of time. It took longer, of course, but I enjoyed it. Tomorrow I need to arrive early, so I will take the bus again.',
    audio: 'audio/a2-l03.wav', prompt: 'Why did the speaker walk today?',
    options: ['The weather was good and there was enough time.', 'The buses were not running.', 'Walking was the fastest way to arrive.', 'The speaker had lost a bus ticket.'], answer: 0,
    explanation: 'Говорящий называет хорошую погоду и достаточный запас времени; про отмену автобусов речи нет.'
  },
  {
    id: 'a2-l04', level: 1, domain: 'listening', subskill: 'Аудирование: описание проблемы',
    transcript: 'The room was clean and the bed was comfortable. The hotel staff were friendly too. My only problem was the noise from the street. Cars passed all night, and I could not sleep well. Next time I will ask for a room at the back.',
    audio: 'audio/a2-l04.wav', prompt: 'What was the speaker unhappy about?',
    options: ['The bed', 'The cleaning', 'The street noise', 'The hotel staff'], answer: 2,
    explanation: 'Проблемой был шум машин с улицы, из-за которого было трудно спать.'
  },

  // B1 — language: four grammar and four vocabulary items.
  {
    id: 'b1-g01', level: 2, domain: 'language', subskill: 'Грамматика: Present Perfect',
    prompt: 'I moved here in 2022 and still live here. I ___ here since 2022.',
    options: ['lived', 'am living', 'have lived', 'had lived'], answer: 2,
    explanation: 'Have lived связывает начало в прошлом с настоящим; since указывает момент начала.'
  },
  {
    id: 'b1-g02', level: 2, domain: 'language', subskill: 'Грамматика: условие в будущем',
    prompt: 'If the weather ___ tomorrow, we will have lunch outside.',
    options: ['improves', 'will improve', 'would improve', 'improving'], answer: 0,
    explanation: 'В придаточном условия с if для реального будущего используется Present Simple: improves.'
  },
  {
    id: 'b1-g03', level: 2, domain: 'language', subskill: 'Грамматика: относительные предложения',
    prompt: 'That is the artist ___ paintings we saw at the exhibition.',
    options: ['which', 'who', 'whom', 'whose'], answer: 3,
    explanation: 'Whose выражает принадлежность: картины этого художника.'
  },
  {
    id: 'b1-g04', level: 2, domain: 'language', subskill: 'Грамматика: пассивный залог',
    prompt: 'The old bridge ___ by local workers in 1980.',
    options: ['built', 'was built', 'has built', 'was building'], answer: 1,
    explanation: 'Мост был построен: was built. Сам мост не выполнял действие.'
  },
  {
    id: 'b1-v01', level: 2, domain: 'language', subskill: 'Лексика: услуги и возврат средств',
    prompt: 'Our flight was cancelled, and the airline offered to ___ the full cost of the ticket.',
    options: ['charge', 'borrow', 'refund', 'owe'], answer: 2,
    explanation: 'Refund означает «вернуть уплаченную сумму»; авиакомпания предлагает возместить стоимость билета.'
  },
  {
    id: 'b1-v02', level: 2, domain: 'language', subskill: 'Лексика: устойчивые сочетания',
    prompt: 'The noise made it difficult to ___ attention to the presentation.',
    options: ['pay', 'spend', 'offer', 'cost'], answer: 0,
    explanation: 'Устойчивое сочетание pay attention означает «уделять внимание».'
  },
  {
    id: 'b1-v03', level: 2, domain: 'language', subskill: 'Лексика: отношения и договорённости',
    prompt: 'Mira always does what she promises. She is very ___.',
    options: ['temporary', 'crowded', 'ordinary', 'reliable'], answer: 3,
    explanation: 'Reliable — надёжный человек, на которого можно положиться.'
  },
  {
    id: 'b1-v04', level: 2, domain: 'language', subskill: 'Лексика: решение проблем',
    prompt: 'The first plan was too expensive, so we needed to find an ___.',
    options: ['achievement', 'alternative', 'attendance', 'advertisement'], answer: 1,
    explanation: 'Alternative — другой возможный вариант вместо первоначального плана.'
  },
  {
    id: 'b1-r01', level: 2, domain: 'reading', subskill: 'Чтение: основная мысль',
    passage: 'When our company introduced one day of home working each week, I expected to finish much more work. There would be no office conversations to interrupt me. At first, however, I kept checking messages because I wanted everyone to know I was available. It was only after my manager suggested agreeing on two specific times for updates that things improved. Now I can focus for longer, and my colleagues know when they will hear from me. Working from home helped, but changing how we communicated mattered more.',
    prompt: 'What mainly helped the writer work more effectively?',
    options: ['Answering every message immediately', 'Working at home every day', 'Agreeing on when to communicate', 'Avoiding all contact with colleagues'], answer: 2,
    explanation: 'Поворотным моментом стало согласование двух конкретных времён для сообщений, а не сам переход домой.'
  },
  {
    id: 'b1-r02', level: 2, domain: 'reading', subskill: 'Чтение: объяснение изменения',
    passage: 'Our neighbourhood book club used to choose a long novel every month. Several people stopped coming because they could not finish the books in time. We first considered meeting less often, but members said the regular conversation was what they enjoyed most. Instead, we now alternate between novels and short stories. People who cannot finish a novel can still join the next meeting without feeling behind. Attendance has improved, although the group has not become larger: some former members have simply started coming again.',
    prompt: 'Why did the club introduce short stories?',
    options: ['To make regular participation easier', 'To replace all discussion of novels', 'To attract professional writers', 'To reduce the number of meetings'], answer: 0,
    explanation: 'Более короткие тексты позволили участникам возвращаться к обсуждениям, сохранив регулярные встречи.'
  },
  {
    id: 'b1-r03', level: 2, domain: 'reading', subskill: 'Чтение: позиция автора',
    passage: 'I bought a second-hand camera before my holiday. Online reviews warned that it was heavy and had fewer automatic features than newer models. Both points were true. Yet learning to adjust the settings made me think carefully about each photograph. I took fewer pictures, but I liked a higher proportion of them. I would not recommend this camera to someone who wants quick family snapshots. For a beginner interested in learning photography, however, its limitations can be useful.',
    prompt: 'Who does the writer think would benefit most from the camera?',
    options: ['Someone who needs the lightest model', 'Someone who wants everything controlled automatically', 'Someone who only wants quick family pictures', 'Someone who wants to learn photographic techniques'], answer: 3,
    explanation: 'Автор рекомендует камеру начинающим, желающим освоить настройки и осознанно учиться фотографии.'
  },
  {
    id: 'b1-r04', level: 2, domain: 'reading', subskill: 'Чтение: условие и исключение',
    passage: 'The community workshop lends tools to registered members. Most tools can be borrowed for a week without an extra charge. Powered equipment requires a short safety session before the first loan, even if members have used similar equipment elsewhere. Reservations are recommended but do not guarantee availability: a tool may need repairs after its return. If this happens, staff will contact the next borrower and suggest another date or a suitable replacement. Members should therefore avoid making arrangements that depend on a particular tool being ready.',
    prompt: 'What should members understand about a reservation?',
    options: ['It removes the need for safety training.', 'The reserved tool might not be available on the planned day.', 'It allows them to keep a tool for longer than a week.', 'Staff will always provide an identical replacement.'], answer: 1,
    explanation: 'После возврата инструменту может потребоваться ремонт, поэтому бронь не гарантирует выдачу в нужный день.'
  },
  {
    id: 'b1-l01', level: 2, domain: 'listening', subskill: 'Аудирование: причина перемены',
    transcript: 'I joined the evening language class because it fitted around my job. The lessons themselves were useful, but I was often too tired to concentrate. I considered stopping altogether. Then the school offered a Saturday morning group. It takes more of my weekend, but I remember much more from each lesson now. For me, the change was worth it.',
    audio: 'audio/b1-l01.wav', prompt: 'Why did the speaker change classes?',
    options: ['The original teacher was unhelpful.', 'The evening class became too expensive.', 'The new class was closer to work.', 'Tiredness made evening learning difficult.'], answer: 3,
    explanation: 'Говорящий был слишком уставшим вечером; в субботу материал запоминается лучше.'
  },
  {
    id: 'b1-l02', level: 2, domain: 'listening', subskill: 'Аудирование: важное различие',
    transcript: 'We are keeping the same number of weekly meetings, but changing their purpose. The Monday meeting will be for sharing information, so please send your updates beforehand. On Thursday, we will discuss problems that need decisions. There is no reason to repeat every update on Thursday. We want that meeting to produce clear actions, rather than another list of what everyone has done.',
    audio: 'audio/b1-l02.wav', prompt: 'What is the main purpose of Thursday’s meeting?',
    options: ['To read all the Monday updates again', 'To make decisions about problems', 'To reduce the number of team members', 'To collect information for a newsletter'], answer: 1,
    explanation: 'Четверг посвящён проблемам, требующим решений и конкретных действий.'
  },
  {
    id: 'b1-l03', level: 2, domain: 'listening', subskill: 'Аудирование: ожидания и результат',
    transcript: 'Before I volunteered at the festival, I imagined spending the day near the stage and meeting musicians. In fact, I mainly answered visitors’ questions and helped people find their seats. That sounds less exciting, but I enjoyed being useful. I did not meet any performers. I did, however, make friends with the other volunteers, and we are planning to help again next year.',
    audio: 'audio/b1-l03.wav', prompt: 'What did the speaker value about the actual experience?',
    options: ['Helping people and meeting other volunteers', 'Watching every performance from the stage', 'Getting personal advice from musicians', 'Having very little work to do'], answer: 0,
    explanation: 'Хотя встречи с музыкантами не состоялись, говорящему понравились помощь посетителям и новые друзья.'
  },
  {
    id: 'b1-l04', level: 2, domain: 'listening', subskill: 'Аудирование: рекомендация',
    transcript: 'If you are visiting the island for the first time, do not try to see every village in one day. The map makes the distances look short, but the roads are narrow and buses are infrequent. Choose one area and explore it properly. You will spend less time checking timetables and have more opportunities to stop somewhere interesting without worrying about missing the last bus.',
    audio: 'audio/b1-l04.wav', prompt: 'What does the speaker recommend?',
    options: ['Visiting every village by bus', 'Avoiding the island’s villages completely', 'Exploring a limited area without rushing', 'Using the map instead of checking bus times'], answer: 2,
    explanation: 'Рекомендация — выбрать одну часть острова и изучить её спокойно, учитывая редкие автобусы.'
  },

  // B2 — language: four grammar and four vocabulary items.
  {
    id: 'b2-g01', level: 3, domain: 'language', subskill: 'Грамматика: нереальное прошлое',
    prompt: 'If we had checked the address before leaving, we ___ at the wrong building.',
    options: ['would not arrive', 'will not have arrived', 'had not arrived', 'would not have arrived'], answer: 3,
    explanation: 'Нереальное условие в прошлом: if + had checked, would not have arrived.'
  },
  {
    id: 'b2-g02', level: 3, domain: 'language', subskill: 'Грамматика: сожаление о прошлом',
    prompt: 'I missed the final announcement. I wish I ___ more carefully.',
    options: ['listen', 'had listened', 'would listen', 'have listened'], answer: 1,
    explanation: 'Для сожаления о завершённом прошлом после wish используется Past Perfect: had listened.'
  },
  {
    id: 'b2-g03', level: 3, domain: 'language', subskill: 'Грамматика: пассивная конструкция',
    prompt: 'The missing painting is believed ___ during the building work last year.',
    options: ['to have been damaged', 'to damage', 'having damaged', 'that it damaged'], answer: 0,
    explanation: 'Is believed to have been damaged передаёт предположение о пассивном действии, произошедшем раньше.'
  },
  {
    id: 'b2-g04', level: 3, domain: 'language', subskill: 'Грамматика: предпочтение',
    prompt: 'I would rather you ___ the draft today, before I send the final version tomorrow.',
    options: ['reviewing', 'have reviewed', 'reviewed', 'to review'], answer: 2,
    explanation: 'После would rather с другим подлежащим используется форма прошедшего времени: you reviewed; здесь речь о предпочтении на сегодня.'
  },
  {
    id: 'b2-v01', level: 3, domain: 'language', subskill: 'Лексика: договорённости',
    prompt: 'Neither side got everything it wanted, but they reached a ___ that both could accept.',
    options: ['prediction', 'compromise', 'permission', 'distraction'], answer: 1,
    explanation: 'Compromise — взаимоприемлемое соглашение, при котором стороны идут на уступки.'
  },
  {
    id: 'b2-v02', level: 3, domain: 'language', subskill: 'Лексика: точность информации',
    prompt: 'The headline was technically true but ___: it left out information that would have changed readers’ understanding.',
    options: ['confidential', 'compulsory', 'irrelevant', 'misleading'], answer: 3,
    explanation: 'Misleading означает «вводящий в заблуждение»; формальная правдивость не исключает искажённого впечатления.'
  },
  {
    id: 'b2-v03', level: 3, domain: 'language', subskill: 'Лексика: ограничения',
    prompt: 'Limited storage space was the main ___ on how much equipment we could buy.',
    options: ['outcome', 'incentive', 'constraint', 'contribution'], answer: 2,
    explanation: 'Constraint — ограничивающий фактор; нехватка места ограничивает количество оборудования.'
  },
  {
    id: 'b2-v04', level: 3, domain: 'language', subskill: 'Лексика: оценка изменений',
    prompt: 'The new timetable is still ___; the school may change it after receiving feedback.',
    options: ['provisional', 'irreversible', 'irrelevant', 'identical'], answer: 0,
    explanation: 'Provisional — предварительный, допускающий дальнейшие изменения.'
  },
  {
    id: 'b2-r01', level: 3, domain: 'reading', subskill: 'Чтение: аргумент и ограничение',
    passage: 'A library extended its opening hours after residents said they could not visit during the working day. Evening attendance was initially low, leading some councillors to describe the change as a waste of money. The librarian pointed out that the announcement had appeared mainly inside the building, where it was most likely to reach people who could already visit. When the library advertised through local employers and transport stops, evening visits increased. This does not prove that every extra hour is cost-effective: staffing costs still need to be compared with use. It does show why judging a new service before its intended users know about it can produce a misleading conclusion.',
    prompt: 'What is the writer’s main point?',
    options: ['Libraries should ignore attendance when setting their hours.', 'Employers should pay the cost of evening library services.', 'A service’s early results may reflect poor communication rather than lack of need.', 'Every extension of library opening hours eventually becomes cost-effective.'], answer: 2,
    explanation: 'Автор показывает, что низкая посещаемость могла быть следствием слабого информирования нужной аудитории, сохраняя оговорку о расходах.'
  },
  {
    id: 'b2-r02', level: 3, domain: 'reading', subskill: 'Чтение: позиция и доказательства',
    passage: 'The city’s new cycle route attracted enthusiastic reviews from people who already cycled regularly. Officials cited those responses as evidence that the route would persuade more residents to leave their cars at home. Yet the survey had been distributed through cycling clubs, and respondents were not asked how they had travelled before the route opened. The design may well be successful, and existing cyclists’ experiences remain relevant to safety and comfort. However, a claim about changing travel habits requires evidence from people whose habits might change. A broader survey, together with observations over time, would address a different question from the one the original feedback answered.',
    prompt: 'What is the main weakness in the officials’ conclusion?',
    options: ['Their evidence does not establish the change in behaviour they claim.', 'Their evidence suggests that regular cyclists find the new route uncomfortable.', 'They relied on observations over time when a single survey would have been more reliable.', 'They gathered views from prospective cyclists but overlooked those already using the route.'], answer: 0,
    explanation: 'Отзывы действующих велосипедистов не доказывают, что автомобилисты перешли на велосипед; вывод выходит за рамки собранных данных.'
  },
  {
    id: 'b2-r03', level: 3, domain: 'reading', subskill: 'Чтение: сопоставление подходов',
    passage: 'At first, the museum tried to make its displays accessible by shortening every description. Visitors found the labels easier to scan, but some complained that the objects now seemed disconnected from any meaningful story. The revised design keeps a brief explanation beside each object and offers optional longer accounts through printed guides and audio. It requires more editorial work than simply cutting text. Nevertheless, the curator believes the effort is justified: visitors should be able to choose how deeply to engage without having to decide between an overwhelming wall of information and an object with almost no context.',
    prompt: 'What problem does the revised design aim to solve?',
    options: ['Visitors are spending too long listening to every audio guide.', 'Printed guides contain information unrelated to the exhibits.', 'Museum staff want to remove all descriptions from the displays.', 'A single fixed amount of information does not suit all visitors.'], answer: 3,
    explanation: 'Новый подход сочетает краткое объяснение и дополнительные материалы, позволяя посетителю выбрать глубину знакомства.'
  },
  {
    id: 'b2-r04', level: 3, domain: 'reading', subskill: 'Чтение: скрытая предпосылка',
    passage: 'A manager proposed rewarding staff for the number of customer requests they closed each day. The idea sounded straightforward: completed requests were easy to count, and the company wanted shorter queues. One employee raised a concern. A complicated request could take an hour to resolve properly, while a simple one might take minutes. If the reward depended only on totals, staff could become reluctant to accept difficult cases or close them before the customer’s problem was solved. The employee did not oppose measuring performance; she wanted the measure to reflect the result the company actually cared about.',
    prompt: 'Which assumption behind the proposed reward does the employee challenge?',
    options: ['Customer requests can ever be counted accurately.', 'A higher number of closed requests necessarily means better service.', 'Some customer problems take longer than others.', 'Employees care about receiving rewards.'], answer: 1,
    explanation: 'Сотрудница оспаривает равенство количества закрытых обращений и качества решения проблем клиентов.'
  },
  {
    id: 'b2-l01', level: 3, domain: 'listening', subskill: 'Аудирование: оговорка в оценке',
    transcript: 'I was pleased when the company offered flexible working hours. I could finally avoid the busiest trains. What I had not expected was how much coordination it would take. A quick conversation became difficult when everyone started at a different time. We have now agreed on a few hours when we are all available, while keeping the rest flexible. I would still recommend the arrangement, but I would not present it as something that works without planning. The freedom is valuable precisely because we have agreed on some boundaries.',
    audio: 'audio/b2-l01.wav', prompt: 'How does the speaker view flexible working hours?',
    options: ['They should replace all shared working time.', 'They are useful only for people who work alone.', 'They created problems that cannot be solved.', 'They are beneficial when supported by agreed coordination.'], answer: 3,
    explanation: 'Позиция положительная, но с условием: гибкости помогают согласованные часы доступности и планирование.'
  },
  {
    id: 'b2-l02', level: 3, domain: 'listening', subskill: 'Аудирование: изменение мнения',
    transcript: 'When a friend suggested recording myself giving a presentation, I thought it would mainly reveal awkward gestures. It did reveal a few, but that was not the most useful part. I discovered that I rushed through the explanation of the main idea and spent far too long on background details. Watching without sound might have helped my posture, but listening to the whole recording helped me reorganise what I was saying. My next presentation was clearer even though I still moved my hands quite a lot.',
    audio: 'audio/b2-l02.wav', prompt: 'What was the main benefit of reviewing the recording?',
    options: ['Removing every distracting gesture', 'Improving the organisation and emphasis of the content', 'Learning to speak without any background information', 'Finding a way to avoid giving presentations'], answer: 1,
    explanation: 'Главная польза — перераспределение внимания между основной идеей и второстепенными подробностями.'
  },
  {
    id: 'b2-l03', level: 3, domain: 'listening', subskill: 'Аудирование: причина решения',
    transcript: 'Some colleagues were surprised when I applied for the training role instead of the team leader position. The salary was the same, and becoming a team leader would have sounded more impressive. But when I thought about the parts of my current job I looked forward to, showing new starters how things worked was always near the top. Checking performance reports was not. Before deciding, I asked to run a short workshop with the training team. Preparing it took more work than I expected, but I enjoyed the session enough to want to do it again. That experience mattered more to me than a change in title.',
    audio: 'audio/b2-l03.wav', prompt: 'Why did the speaker choose the training role?',
    options: ['Its everyday responsibilities matched the work the speaker found most rewarding.', 'It offered a quicker route to managing a larger team.', 'It made use of a formal qualification that the previous role did not require.', 'It reduced the amount of time the speaker would spend preparing work.'], answer: 0,
    explanation: 'Говорящему нравилось обучать новых сотрудников. Пробный семинар подтвердил интерес к этой работе, несмотря на подготовку; зарплата и более высокий статус не были причиной выбора.'
  },
  {
    id: 'b2-l04', level: 3, domain: 'listening', subskill: 'Аудирование: подразумеваемая позиция',
    transcript: 'People often ask why I still go to a language class when there are so many free materials online. It is not that the class gives me access to information I could never find elsewhere. The difference is that I have to use what I know with other people, and someone notices the mistakes I no longer hear in my own speech. I use online materials as well. In fact, they help me arrive with more to say. For me, the two approaches work together.',
    audio: 'audio/b2-l04.wav', prompt: 'What does the speaker particularly value about classes?',
    options: ['Exclusive information that is unavailable online', 'The opportunity to avoid independent study', 'Interaction and feedback that complement self-study', 'The guarantee of making no mistakes when speaking'], answer: 2,
    explanation: 'Занятия ценны практикой общения и обратной связью; онлайн-материалы при этом дополняют обучение.'
  },

  // C1 — language: four grammar and four vocabulary items.
  {
    id: 'c1-g01', level: 4, domain: 'language', subskill: 'Грамматика: смешанное условие',
    prompt: 'If the team had documented its decisions properly, we ___ so much time reconstructing them now.',
    options: ['would not be spending', 'would not have been spent', 'will not spend', 'had not spent'], answer: 0,
    explanation: 'Условие относится к прошлому, а результат — к настоящему: had documented → would not be spending now.'
  },
  {
    id: 'c1-g02', level: 4, domain: 'language', subskill: 'Грамматика: уступительная конструкция',
    prompt: 'Which sentence preserves the meaning of: "Much as I admire the proposal’s ambition, I cannot support it without a credible budget"?',
    options: ['I admire the proposal’s ambition because I cannot support its current budget.', 'Although I admire its ambition, a credible budget is necessary before I can support it.', 'My support for the proposal depends on its ambition rather than on its budget.', 'A credible budget would remove the need for the proposal to be ambitious.'], answer: 1,
    explanation: 'Much as вводит уступку: автор ценит амбициозность, но одного этого недостаточно для поддержки. Приемлемый бюджет остаётся необходимым условием; он не назван гарантией поддержки.'
  },
  {
    id: 'c1-g03', level: 4, domain: 'language', subskill: 'Грамматика: инверсия',
    prompt: 'Which sentence means that the directors first understood the scale of the problem when the independent review was published?',
    options: ['Only after the directors understood the scale of the problem was the independent review published.', 'By the time the independent review was published, the directors had already understood the scale of the problem.', 'Even after the independent review was published, the directors did not understand the scale of the problem.', 'Not until the independent review was published did the directors understand the scale of the problem.'], answer: 3,
    explanation: 'Not until ... did the directors understand означает, что понимание возникло только при публикации обзора. Остальные варианты помещают понимание раньше публикации либо отрицают его даже после неё.'
  },
  {
    id: 'c1-g04', level: 4, domain: 'language', subskill: 'Грамматика: модальность в прошлом',
    prompt: 'I printed all the documents, then discovered the panel already had digital copies. I ___ them after all.',
    options: ['must not print', 'could not have printed', 'need not have printed', 'would not print'], answer: 2,
    explanation: 'Need not have printed означает, что действие было выполнено, но необходимости в нём не оказалось.'
  },
  {
    id: 'c1-v01', level: 4, domain: 'language', subskill: 'Лексика: заявленная и действительная цель',
    prompt: 'The changes were ___ introduced to simplify the procedure, although staff suspected that cutting costs was the real aim.',
    options: ['ostensibly', 'inadvertently', 'unanimously', 'retrospectively'], answer: 0,
    explanation: 'Ostensibly — согласно заявленной или внешне очевидной цели; контекст противопоставляет её предполагаемой реальной причине.'
  },
  {
    id: 'c1-v02', level: 4, domain: 'language', subskill: 'Лексика: степень поддержки',
    prompt: 'The reviewer gave the proposal a ___ endorsement: she supported its aims but attached several important conditions.',
    options: ['categorical', 'unreserved', 'redundant', 'qualified'], answer: 3,
    explanation: 'Qualified endorsement — поддержка с оговорками. Unreserved и categorical означали бы отсутствие таких ограничений.'
  },
  {
    id: 'c1-v03', level: 4, domain: 'language', subskill: 'Лексика: оценка аргумента',
    prompt: 'Once the missing records were recovered, his claim became ___: the documents directly contradicted it.',
    options: ['incidental', 'untenable', 'tentative', 'comprehensive'], answer: 1,
    explanation: 'Untenable — несостоятельный, такой, который невозможно убедительно защищать перед имеющимися доказательствами.'
  },
  {
    id: 'c1-v04', level: 4, domain: 'language', subskill: 'Лексика: подтверждение доказательствами',
    prompt: 'The witness’s account was ___ by security footage showing the same sequence of events.',
    options: ['superseded', 'circumvented', 'corroborated', 'retracted'], answer: 2,
    explanation: 'Corroborated — подтверждён независимыми данными; запись показывает ту же последовательность событий.'
  },
  {
    id: 'c1-r01', level: 4, domain: 'reading', subskill: 'Чтение: допущения аргумента',
    passage: 'A university evaluated a mentoring programme by comparing participants’ graduation rates with those of students who had not volunteered. Participants performed better, and the programme was promptly described as transformative. The comparison is suggestive, but it leaves an important question unresolved: whether students willing to seek mentoring were already more likely to persist. This is not a reason to abandon the programme. Nor does it establish that mentoring had no effect. It means that the observed difference cannot straightforwardly be attributed to mentoring alone. A stronger evaluation might compare similarly motivated applicants who received access at different times, while also examining how the support was used. Such work would be less convenient than publishing a single impressive figure, but more useful for deciding which elements deserve further investment.',
    prompt: 'Which conclusion is most consistent with the writer’s argument?',
    options: ['Volunteering for mentoring proves that a student needs no support.', 'The favourable comparison cannot by itself establish the programme’s causal effect.', 'The programme should be cancelled until every influence on graduation is known.', 'Graduation rates are irrelevant to evaluating student support.'], answer: 1,
    explanation: 'Различие может частично отражать исходную мотивацию участников. Автор не отрицает пользу программы, а ограничивает причинный вывод.'
  },
  {
    id: 'c1-r02', level: 4, domain: 'reading', subskill: 'Чтение: тон и прагматический смысл',
    passage: 'The consultation was, by the organisers’ account, exceptionally thorough. Residents could complete a questionnaire, attend an exhibition, or submit comments online. What they could not do was question whether the proposed development should proceed: the documents treated that decision as settled and asked only about finishes, planting, and access arrangements. To call the exercise entirely pointless would be unfair; those details affect daily life, and several suggestions were adopted. Nevertheless, the language of shared decision-making sat awkwardly beside the narrow range of decisions actually open to influence. The difficulty was not that the public had been asked about practical matters, but that the exercise was presented as conferring a broader mandate than its questions could reasonably establish.',
    prompt: 'What is the writer chiefly criticising?',
    options: ['The failure to offer residents several ways to respond', 'The assumption that small design details matter to residents', 'The decision to adopt suggestions received during consultation', 'The gap between the consultation’s limited scope and the authority claimed for it'], answer: 3,
    explanation: 'Критика касается несоответствия: обсуждение деталей представили как широкое общественное одобрение всего проекта.'
  },
  {
    id: 'c1-r03', level: 4, domain: 'reading', subskill: 'Чтение: функция оговорки',
    passage: 'Calls for researchers to communicate uncertainty are often interpreted as demands to surround every finding with so many qualifications that nothing useful remains. That is an understandable fear, especially when public debate rewards confident statements. Yet uncertainty need not be presented as a catalogue of every imaginable limitation. It can be organised around the decisions a reader faces: which conclusion is robust, which depends on a contested assumption, and what new evidence would materially change the recommendation. This does require editorial judgement. It also means resisting the temptation to treat all unknowns as equally important. The aim is neither to make research sound conclusive nor to make action impossible, but to give readers a proportionate account of what the evidence permits.',
    prompt: 'Why does the writer say that not all unknowns should be treated as equally important?',
    options: ['Some uncertainties matter more than others for the decision being considered.', 'Public explanations should prioritise uncertainties that have generated the most disagreement.', 'Only uncertainties that researchers can express numerically are suitable for public discussion.', 'Unknowns that cannot presently be resolved should be left out of recommendations.'], answer: 0,
    explanation: 'Автор предлагает соотносить неопределённость с конкретным решением: важнее те неизвестные, которые способны изменить вывод или рекомендацию.'
  },
  {
    id: 'c1-r04', level: 4, domain: 'reading', subskill: 'Чтение: различие между понятиями',
    passage: 'When an organisation publishes the rules by which it allocates funding, it becomes more transparent in one sense: applicants can see the stated criteria. Whether it becomes more accountable is another matter. If rejected applicants cannot obtain an explanation of how the criteria were applied, or challenge an apparent error, publication may illuminate the process without creating any effective obligation to justify particular decisions. Transparency can support accountability, but it does not automatically supply it. Conversely, a review mechanism that operates entirely behind closed doors may correct individual mistakes while leaving wider concerns about consistency unresolved. A credible system therefore needs both accessible information about the rules and practical ways of testing whether decisions actually follow them.',
    prompt: 'Which arrangement best addresses the distinction made in the passage?',
    options: ['Publishing general criteria while refusing to discuss individual decisions', 'Reviewing complaints privately without explaining the criteria to applicants', 'Publishing criteria and allowing reasoned decisions to be questioned through review', 'Publishing every applicant’s personal information to demonstrate openness'], answer: 2,
    explanation: 'Предложенный баланс объединяет доступные правила и механизм проверки конкретных решений по этим правилам.'
  },
  {
    id: 'c1-l01', level: 4, domain: 'listening', subskill: 'Аудирование: оценка художественного решения',
    transcript: 'I admired the production more than I enjoyed its final scene. For most of the evening, the two leads allowed you to see why the same memory might mean something quite different to each character. Neither account was comfortable to accept, which was what made their conversations so absorbing. Then, in the closing voice-over, we were effectively told which version to believe and what lesson to take away. I can understand the wish to give the audience a satisfying conclusion. But I would have preferred the director to trust what the actors had already achieved, rather than settle a question they had made interesting precisely by leaving room for doubt.',
    audio: 'audio/c1-l01.wav', prompt: 'What is the speaker’s main criticism of the ending?',
    options: ['It introduces a separate conflict that distracts from the relationship developed earlier.', 'It asks the audience to infer a change in attitude that the actors have not shown.', 'It imposes a definite interpretation on material that was more effective when ambiguous.', 'It gives supporting characters more attention than the central relationship deserves.'], answer: 2,
    explanation: 'Говорящий ценит неоднозначность, созданную актёрами. Финальный голос за кадром навязывает одну версию и вывод, тем самым устраняя пространство для интерпретации, которое делало спектакль интересным.'
  },
  {
    id: 'c1-l02', level: 4, domain: 'listening', subskill: 'Аудирование: вежливое косвенное намерение',
    transcript: 'Thank you for thinking of me for the panel. The subject is certainly one I care about, and the date itself would be manageable. My hesitation is that I have been away from classroom teaching for several years. I could discuss the research, but your audience seems to be looking for accounts of what happens in a classroom from day to day. I would be uneasy letting my former job title suggest that I could offer that perspective. Mara still teaches and has been working on precisely this issue. If you are happy for me to do so, I can put you in touch with her. I suspect she would give your audience a more useful evening.',
    audio: 'audio/c1-l02.wav', prompt: 'What is the speaker mainly doing in this response?',
    options: ['Steering the invitation towards someone with more relevant current experience.', 'Accepting the invitation provided the organiser can change the proposed date.', 'Offering to join the panel if discussion is restricted to published research.', 'Asking the organiser to exclude personal classroom accounts from the panel.'], answer: 0,
    explanation: 'Говорящий вежливо направляет организатора к Маре: она продолжает преподавать и лучше соответствует ожиданиям аудитории. Дата подходит; предложение обсудить исследования не является условным согласием участвовать.'
  },
  {
    id: 'c1-l03', level: 4, domain: 'listening', subskill: 'Аудирование: логика возражения',
    transcript: 'The claim that customers prefer the automated option is based on a sharp rise in its use. But during the same period, the staffed desk was open for fewer hours and telephone waiting times increased. People may indeed appreciate the convenience of automation; we should not assume otherwise. Equally, choosing the only reasonably accessible route is not the same as expressing an unconstrained preference. Before using these figures to justify removing personal assistance altogether, I would want to know what happens when customers can genuinely choose between options of comparable availability.',
    audio: 'audio/c1-l03.wav', prompt: 'What further evidence would best address the speaker’s concern?',
    options: ['Satisfaction scores from customers who already use the automated service', 'Customers’ choices when human and automated help are similarly accessible', 'Transaction totals before and after the staffed desk’s opening hours were reduced', 'The operating cost per customer for each of the two service routes'], answer: 1,
    explanation: 'Чтобы судить о предпочтении, нужно сравнить выбор при сопоставимой доступности вариантов, а не при ухудшении одного из них.'
  },
  {
    id: 'c1-l04', level: 4, domain: 'listening', subskill: 'Аудирование: разграничение утверждений',
    transcript: 'I support making the training available to everyone. What I hesitate to endorse is the promise that access alone will close the skills gap. Employees differ in how much time they can devote to learning, how confident they feel asking questions, and whether their managers let them apply new skills. If we announce equal access and then treat unequal outcomes as evidence of unequal effort, we risk overlooking those conditions. Offering the course is a worthwhile first step. The next is to find out who can actually make use of it and remove obstacles where we can.',
    audio: 'audio/c1-l04.wav', prompt: 'Which statement best captures the speaker’s distinction?',
    options: ['Training should be offered only to employees who already perform well.', 'Differences in outcomes demonstrate differences in effort.', 'Managers should replace formal training with informal questions.', 'Equal access is valuable but does not ensure an equal opportunity to benefit.'], answer: 3,
    explanation: 'Говорящий поддерживает общий доступ, но отделяет его от реальной возможности учиться и применять знания в разных условиях.'
  }
];

// English feedback is attached to each exported item after the authored bank is built.
// These are explanations of the intended keys, not evidence of calibrated difficulty.
const ENGLISH_FEEDBACK = {
  'a1-g01': {
    subskillEn: 'Grammar: the verb be',
    explanationEn: "Use am with I: I am a student. Are goes with you, we and they; is goes with he, she and it."
  },
  'a1-g02': {
    subskillEn: 'Grammar: present simple',
    explanationEn: "In the present simple, a singular third-person subject takes an -s ending. Study becomes studies: Arman studies English."
  },
  'a1-g03': {
    subskillEn: 'Grammar: plural nouns',
    explanationEn: "Three requires a plural countable noun: three cups. A cup, cup and cup of tea are singular forms."
  },
  'a1-g04': {
    subskillEn: 'Grammar: possessive words',
    explanationEn: "His is the possessive word that fits before name when referring to the brother: His name is Sam. He and him cannot modify name in this way."
  },
  'a1-v01': {
    subskillEn: 'Vocabulary: everyday actions',
    explanationEn: "Thirsty means needing or wanting a drink. Drink some water is the expression that fits this situation."
  },
  'a1-v02': {
    subskillEn: 'Vocabulary: places in town',
    explanationEn: "A library is a place where people can borrow books. Borrowing means taking something temporarily and returning it later."
  },
  'a1-v03': {
    subskillEn: 'Vocabulary: objects and actions',
    explanationEn: "Close the window means shut it. This is the appropriate request when an open window is making the room cold."
  },
  'a1-v04': {
    subskillEn: 'Vocabulary: basic adjectives',
    explanationEn: "Empty means containing nothing. The first sentence explains that there is nothing inside the bag."
  },
  'a1-r01': {
    subskillEn: 'Reading: message details',
    explanationEn: "Mira says, 'I am at the cafe.' The library is a nearby landmark, not the place where she is waiting."
  },
  'a1-r02': {
    subskillEn: 'Reading: simple notices',
    explanationEn: "The notice explicitly asks students to bring a pencil and a notebook. Paper and paints are already provided, and the club is free."
  },
  'a1-r03': {
    subskillEn: 'Reading: opening times',
    explanationEn: "The final sentence says the shop is closed on Sunday. It opens from nine until six on Monday through Saturday."
  },
  'a1-r04': {
    subskillEn: 'Reading: personal information',
    explanationEn: "Tom says he studies English at home in the evening. His hotel work takes place in the morning."
  },
  'a1-l01': {
    subskillEn: 'Listening: specific information',
    explanationEn: "Sara explicitly says, 'I am a teacher.' The school is her workplace, and walking describes her journey there."
  },
  'a1-l02': {
    subskillEn: 'Listening: a simple request',
    explanationEn: "The speaker asks Ben to bring his green bag. The books are already in the classroom, and his lunch should go in the bag."
  },
  'a1-l03': {
    subskillEn: 'Listening: meeting times',
    explanationEn: "The meeting is at two o'clock. Four o'clock is the time of the speaker's lesson, and one hour is how long the speaker can stay."
  },
  'a1-l04': {
    subskillEn: 'Listening: identifying an item',
    explanationEn: "The speaker says the ticket is on the table at home. The phone and keys are already with the speaker."
  },

  'a2-g01': {
    subskillEn: 'Grammar: past simple',
    explanationEn: "Yesterday places the action in the past. Took is the past simple form of take: we took the bus."
  },
  'a2-g02': {
    subskillEn: 'Grammar: comparatives',
    explanationEn: "Than introduces a comparison between the two boxes. The comparative form of heavy is heavier, with -y changing to -ier."
  },
  'a2-g03': {
    subskillEn: 'Grammar: past continuous',
    explanationEn: "Was cooking describes an action in progress when another past event occurred. The phone rang during the cooking."
  },
  'a2-g04': {
    subskillEn: 'Grammar: quantity words',
    explanationEn: "Use any in this negative statement with the uncountable noun milk: we have not got any milk. Many, a and few do not fit milk here."
  },
  'a2-v01': {
    subskillEn: 'Vocabulary: transport',
    explanationEn: "Miss a train means fail to catch it, often because you arrive too late. Lose usually refers to no longer having or finding something."
  },
  'a2-v02': {
    subskillEn: 'Vocabulary: shopping',
    explanationEn: "A receipt records purchases and the amount paid. A recipe gives instructions for preparing food."
  },
  'a2-v03': {
    subskillEn: 'Vocabulary: everyday requests',
    explanationEn: "Borrow means take something temporarily and return it. Lend means give something temporarily, while owe describes a debt. The promise to give the pen back supports borrow."
  },
  'a2-v04': {
    subskillEn: 'Vocabulary: how people feel',
    explanationEn: "Tired means needing rest. Sleeping for only three hours provides the reason for feeling tired."
  },
  'a2-r01': {
    subskillEn: 'Reading: changes to plans',
    explanationEn: "The location changes from the park to the community centre because rain is expected. The day and starting time stay the same, and everyone still brings lunch."
  },
  'a2-r02': {
    subskillEn: 'Reading: service conditions',
    explanationEn: "Customers must leave an identity document at the desk and collect it when they return the bicycle. A helmet is included in the hire."
  },
  'a2-r03': {
    subskillEn: 'Reading: sequence of events',
    explanationEn: "Amir first joined an online running group. After chatting there for a week, he attended the Saturday run; regular training with his new friend came later."
  },
  'a2-r04': {
    subskillEn: 'Reading: reasons for a decision',
    explanationEn: "The writer changed the lunch routine to avoid spending most of the break in a queue. The text explicitly says the cost remained about the same."
  },
  'a2-l01': {
    subskillEn: 'Listening: timetable changes',
    explanationEn: "The lesson moves from six o'clock to half past six. Its forty-minute length and the usual entrance remain unchanged."
  },
  'a2-l02': {
    subskillEn: 'Listening: required actions',
    explanationEn: "Alex is asked to bring a warm jacket because there may be a wait outside. The tickets have already been collected, so nothing needs printing."
  },
  'a2-l03': {
    subskillEn: 'Listening: reasons for a choice',
    explanationEn: "The speaker walked because the weather was lovely and there was plenty of time. Walking took longer than the usual bus journey."
  },
  'a2-l04': {
    subskillEn: 'Listening: identifying a problem',
    explanationEn: "The speaker's only complaint is street noise from passing cars. The room, bed and staff all receive positive comments."
  },

  'b1-g01': {
    subskillEn: 'Grammar: present perfect',
    explanationEn: "Have lived connects a situation that began in the past with the present: the speaker still lives there. Since introduces the starting point, 2022."
  },
  'b1-g02': {
    subskillEn: 'Grammar: a future condition',
    explanationEn: "For this real future condition, use the present simple after if and will in the main clause: if the weather improves, we will have lunch outside."
  },
  'b1-g03': {
    subskillEn: 'Grammar: relative clauses',
    explanationEn: "Whose expresses the relationship between the artist and the paintings: the paintings belong to, or were made by, that artist."
  },
  'b1-g04': {
    subskillEn: 'Grammar: passive voice',
    explanationEn: "The bridge receives the action, so the sentence needs the passive form was built. The workers performed the action, and 1980 fixes it in the past."
  },
  'b1-v01': {
    subskillEn: 'Vocabulary: services and refunds',
    explanationEn: "Refund means return money that has already been paid. The airline offers to return the full ticket cost after cancelling the flight."
  },
  'b1-v02': {
    subskillEn: 'Vocabulary: common word combinations',
    explanationEn: "Pay attention is the established expression for concentrating on something. Spend, offer and cost do not combine with attention in this sentence."
  },
  'b1-v03': {
    subskillEn: 'Vocabulary: trust and commitments',
    explanationEn: "Reliable describes someone you can depend on. Consistently doing what she promises is evidence of that quality."
  },
  'b1-v04': {
    subskillEn: 'Vocabulary: solving problems',
    explanationEn: "An alternative is another possible choice. Because the original plan costs too much, the group needs a different option."
  },
  'b1-r01': {
    subskillEn: 'Reading: the main idea',
    explanationEn: "The turning point was agreeing on two specific times for updates. This reduced constant message-checking and allowed longer periods of concentration."
  },
  'b1-r02': {
    subskillEn: 'Reading: explaining a change',
    explanationEn: "Alternating novels with short stories made it easier for members to participate regularly without falling behind. The club kept its regular meetings."
  },
  'b1-r03': {
    subskillEn: 'Reading: the writer’s viewpoint',
    explanationEn: "The writer values learning to adjust the camera's settings and think about each picture. The recommendation is for someone learning photography, not someone seeking effortless snapshots."
  },
  'b1-r04': {
    subskillEn: 'Reading: conditions and exceptions',
    explanationEn: "A reserved tool may need repairs after its previous loan, so it might not be ready on the planned day. Staff can suggest another date or a suitable replacement, but availability is not guaranteed."
  },
  'b1-l01': {
    subskillEn: 'Listening: reasons for a change',
    explanationEn: "The evening lessons were useful, but tiredness made concentration difficult. Moving to Saturday mornings improved how much the speaker remembered."
  },
  'b1-l02': {
    subskillEn: 'Listening: an important distinction',
    explanationEn: "Thursday's meeting is for discussing problems and making decisions that lead to clear actions. Monday is the information-sharing meeting."
  },
  'b1-l03': {
    subskillEn: 'Listening: expectations and outcomes',
    explanationEn: "Although the speaker did not meet performers, helping visitors felt useful and working with other volunteers led to friendships. Those were the valued outcomes."
  },
  'b1-l04': {
    subskillEn: 'Listening: a recommendation',
    explanationEn: "The speaker recommends choosing one area and exploring it properly. Narrow roads and infrequent buses make an island-wide itinerary difficult and rushed."
  },

  'b2-g01': {
    subskillEn: 'Grammar: an unreal past condition',
    explanationEn: "This imagines a different past outcome. Use if + past perfect with would have + past participle: if we had checked, we would not have arrived at the wrong building."
  },
  'b2-g02': {
    subskillEn: 'Grammar: regret about the past',
    explanationEn: "The announcement has already been missed. After wish, the past perfect expresses regret about that completed past event: I wish I had listened more carefully."
  },
  'b2-g03': {
    subskillEn: 'Grammar: a reporting passive',
    explanationEn: "Is believed to have been damaged reports a belief about an earlier event. The perfect infinitive places the damage before the present belief, and the passive shows that the painting received the action."
  },
  'b2-g04': {
    subskillEn: 'Grammar: expressing a preference',
    explanationEn: "After would rather, a different subject is followed by a past form for a present or future preference: I would rather you reviewed it today. The review itself is not being placed in the past."
  },
  'b2-v01': {
    subskillEn: 'Vocabulary: reaching agreement',
    explanationEn: "A compromise is an agreement involving concessions: neither side gets everything it wants, but both can accept the outcome."
  },
  'b2-v02': {
    subskillEn: 'Vocabulary: accuracy and impression',
    explanationEn: "Misleading means creating a mistaken impression. A statement can be technically true yet misleading if it leaves out important context."
  },
  'b2-v03': {
    subskillEn: 'Vocabulary: limitations',
    explanationEn: "A constraint is a limiting factor. In this case, storage space restricts the amount of equipment the group can buy."
  },
  'b2-v04': {
    subskillEn: 'Vocabulary: evaluating changes',
    explanationEn: "Provisional means temporary or not yet final. The timetable may be changed after the school receives feedback."
  },
  'b2-r01': {
    subskillEn: 'Reading: an argument and its limits',
    explanationEn: "Low early attendance may have reflected failure to reach the intended users. The writer keeps the separate cost-effectiveness question open, so the passage does not claim every extension will succeed."
  },
  'b2-r02': {
    subskillEn: 'Reading: claims and evidence',
    explanationEn: "Feedback from existing cyclists can inform safety and comfort, but it does not establish that drivers changed how they travel. The officials' conclusion goes beyond what their survey measured."
  },
  'b2-r03': {
    subskillEn: 'Reading: comparing approaches',
    explanationEn: "Visitors differ in how much detail they want. Brief labels plus optional longer accounts let them choose without forcing either overwhelming information or too little context on everyone."
  },
  'b2-r04': {
    subskillEn: 'Reading: an underlying assumption',
    explanationEn: "The employee challenges the assumption that more closed requests necessarily mean better service. Totals may reward avoiding difficult cases or closing them before the problem is solved."
  },
  'b2-l01': {
    subskillEn: 'Listening: a qualified evaluation',
    explanationEn: "The speaker supports flexible hours but emphasises coordination. Agreed shared availability makes the flexibility workable; it does not remove the need for planning."
  },
  'b2-l02': {
    subskillEn: 'Listening: changing an evaluation',
    explanationEn: "The main benefit was recognising poor balance between the main idea and background details. Reviewing the whole recording helped the speaker reorganise the content, even though hand gestures remained."
  },
  'b2-l03': {
    subskillEn: 'Listening: reasons for a decision',
    explanationEn: "The speaker enjoyed helping new starters, and running a workshop confirmed that interest despite the preparation involved. Salary and a more impressive title did not explain the choice."
  },
  'b2-l04': {
    subskillEn: 'Listening: an implied viewpoint',
    explanationEn: "The speaker values using English with others and receiving feedback on unnoticed mistakes. Online materials add useful preparation, so classes and self-study complement each other."
  },

  'c1-g01': {
    subskillEn: 'Grammar: a mixed conditional',
    explanationEn: "The imagined condition is in the past, but its consequence is ongoing now. Had documented therefore pairs with would not be spending in this mixed conditional."
  },
  'c1-g02': {
    subskillEn: 'Grammar: a concessive construction',
    explanationEn: "Much as introduces a concession: admiration alone is not enough for support. A credible budget remains a necessary condition; the sentence does not say that a budget would guarantee support."
  },
  'c1-g03': {
    subskillEn: 'Grammar: inversion',
    explanationEn: "Not until the review was published did the directors understand places their first understanding at publication. The other versions put understanding earlier or say it was still absent afterwards."
  },
  'c1-g04': {
    subskillEn: 'Grammar: past necessity',
    explanationEn: "Need not have printed means the printing happened but was unnecessary. The speaker only discovered afterwards that the panel already had copies."
  },
  'c1-v01': {
    subskillEn: 'Vocabulary: stated and actual purposes',
    explanationEn: "Ostensibly introduces an apparent or stated purpose that may differ from the real one. The announced aim was simplification, while staff suspected cost-cutting."
  },
  'c1-v02': {
    subskillEn: 'Vocabulary: degrees of support',
    explanationEn: "A qualified endorsement is support with reservations or conditions. This contrasts with an unreserved endorsement, which expresses support without such qualifications."
  },
  'c1-v03': {
    subskillEn: 'Vocabulary: evaluating an argument',
    explanationEn: "Untenable means no longer defensible. Records directly contradicting the claim make it impossible to maintain convincingly."
  },
  'c1-v04': {
    subskillEn: 'Vocabulary: supporting evidence',
    explanationEn: "Corroborated means supported or confirmed by additional evidence. The security footage independently matches the witness's account."
  },
  'c1-r01': {
    subskillEn: 'Reading: assumptions in an argument',
    explanationEn: "Volunteers may have differed from non-participants before mentoring began. The favourable comparison therefore cannot isolate mentoring's causal contribution. The writer neither rules out a benefit nor calls for cancellation."
  },
  'c1-r02': {
    subskillEn: 'Reading: tone and pragmatic meaning',
    explanationEn: "The consultation could influence design details but not the decision to proceed. The criticism concerns presenting that limited exercise as a broader public mandate, not denying that the details mattered."
  },
  'c1-r03': {
    subskillEn: 'Reading: the purpose of a qualification',
    explanationEn: "Uncertainties differ in their relevance to a decision. The writer recommends explaining which assumptions could materially alter the conclusion, rather than treating every unknown as equally consequential."
  },
  'c1-r04': {
    subskillEn: 'Reading: distinguishing concepts',
    explanationEn: "Published criteria provide transparency; explanations and a meaningful review process support accountability for individual decisions. The recommended arrangement includes both."
  },
  'c1-l01': {
    subskillEn: 'Listening: evaluating an artistic choice',
    explanationEn: "The speaker values the ambiguity created by the actors. The final voice-over supplies one version and lesson, removing the room for interpretation that had made the production absorbing."
  },
  'c1-l02': {
    subskillEn: 'Listening: a politely implied intention',
    explanationEn: "The speaker gently redirects the organiser to Mara, whose current classroom experience better fits the audience. The date is possible, and mentioning research expertise is not a conditional acceptance."
  },
  'c1-l03': {
    subskillEn: 'Listening: the logic of an objection',
    explanationEn: "Increased automated use may reflect reduced access to staffed help rather than preference. Choices made when both options are similarly accessible would better address that alternative explanation."
  },
  'c1-l04': {
    subskillEn: 'Listening: distinguishing claims',
    explanationEn: "The speaker supports universal access but distinguishes it from a practical opportunity to benefit. Time, confidence and managerial support can affect outcomes independently of effort."
  }
};

for (const item of QUESTIONS) {
  const feedback = ENGLISH_FEEDBACK[item.id];
  if (!feedback) throw new Error(`Missing English feedback for ${item.id}`);
  Object.assign(item, feedback);
}
