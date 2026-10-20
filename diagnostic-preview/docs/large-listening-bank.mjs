/** Original project questions; user-supplied published audio is kept private.
 * This bank is uncalibrated. No CEFR conversion, affiliation, or redistribution licence is asserted.
 */
export const LISTENING_VERSION = 'large-listening-1.0';
export const listeningMetadata = {
  "status": "uncalibrated_source_based_bank",
  "version": "large-listening-1.0",
  "questionCount": 120,
  "stimulusCount": 32,
  "sourceTests": [
    1,
    2,
    3,
    4
  ],
  "questionAuthorship": "110 newly authored project questions and 10 previously reviewed original project questions; publisher questions are not reproduced.",
  "sourceMaterial": "User-supplied Cambridge IELTS21-labelled recordings and matching PDF transcripts",
  "officialQuestions": false,
  "affiliatedOrEndorsed": false,
  "validatedScoreConversion": false,
  "cefrLevelsAssigned": false,
  "syntheticSpeechUsed": false,
  "publicRedistributionPermissionEstablished": false,
  "paidUsePermissionEstablished": false,
  "clusterPolicy": "Select and administer complete 3–4 question recording clusters. Answers sharing a clip are dependent; independenceGroupId groups two excerpts from the same conversation or talk. Count source families for evidence diversity, not just file names.",
  "exposurePolicy": "Record prior familiarity and repeat exposure. Published recordings cannot supply fresh placement evidence when already known.",
  "administration": "Practice: read the complete question group, then listen. Record replays and pauses; this is not official IELTS administration.",
  "transcriptPolicy": "Do not display transcripts during the response. Review feedback and approximate evidence links are shown after answering.",
  "evidenceTimingPolicy": "Approximate review-navigation intervals from local automatic word alignment and supplied transcript checks; not word-perfect speech segmentation.",
  "validationLimit": "Technical integrity and source checks do not establish item difficulty, CEFR accuracy, reliability, human perceptual review, or commercial rights.",
  "answerOrderEditorialPass": {
    "seed": "listening-option-order-v1",
    "algorithm": "Seeded Fisher–Yates permutation of a balanced key-position bag across 110 items sorted by ID, followed by independently seeded distractor permutations per item.",
    "scope": "110 new items only; original ten approved sample items preserved.",
    "purpose": "Removes the earlier predictable numeric-ID key cycle; does not establish distractor quality or assessment validity."
  }
};
export const listeningStimuli = [
  {
    "id": "c21-t1-sailing",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Choosing a sailing course",
    "type": "dialogue",
    "topic": "courses",
    "sourceLabel": "Cambridge IELTS 21 · Test 1 · Part 1",
    "sourceTest": 1,
    "independenceGroupId": "c21-t1-p1",
    "audio": "listening-bank/c21-t1-sailing.mp3",
    "durationSeconds": 151.106372,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t1-sailing",
    "summary": {
      "en": "A caller asks a sailing club about introductory courses and what they include.",
      "ru": "Звонящий узнаёт в парусном клубе о вводных курсах и о том, что в них входит."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 1,
      "part": 1,
      "sourceTrack": "C21T1P1.1.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 98,
      "pdfPages": [
        98
      ],
      "printedPage": 97,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 117.4,
      "sourceEndSeconds": 268.5,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t1-sailing-preparation",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Preparing for the sailing course",
    "type": "dialogue",
    "topic": "courses",
    "sourceLabel": "Cambridge IELTS 21 · Test 1 · Part 1",
    "sourceTest": 1,
    "independenceGroupId": "c21-t1-p1",
    "audio": "listening-bank/c21-t1-sailing-preparation.mp3",
    "durationSeconds": 86.714535,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t1-sailing-preparation",
    "summary": {
      "en": "Preparing for the sailing course",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 1,
      "part": 1,
      "sourceTrack": "C21T1P1.2.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 98,
      "pdfPages": [
        98,
        99
      ],
      "printedPage": 97,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 7.9,
      "sourceEndSeconds": 94.6,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t1-makeup",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Starting work as a makeup artist",
    "type": "monologue_with_introduction",
    "topic": "work",
    "sourceLabel": "Cambridge IELTS 21 · Test 1 · Part 2",
    "sourceTest": 1,
    "independenceGroupId": "c21-t1-p2",
    "audio": "listening-bank/c21-t1-makeup.mp3",
    "durationSeconds": 139.612494,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t1-makeup",
    "summary": {
      "en": "An experienced film makeup artist discusses early work and the realities of the job.",
      "ru": "Опытный киногримёр рассказывает о первых шагах и реальных условиях работы."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 1,
      "part": 2,
      "sourceTrack": "C21T1P2.1.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 99,
      "pdfPages": [
        99
      ],
      "printedPage": 98,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 76,
      "sourceEndSeconds": 215.6,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t1-makeup-duties",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "A makeup trainee’s responsibilities",
    "type": "monologue",
    "topic": "work",
    "sourceLabel": "Cambridge IELTS 21 · Test 1 · Part 2",
    "sourceTest": 1,
    "independenceGroupId": "c21-t1-p2",
    "audio": "listening-bank/c21-t1-makeup-duties.mp3",
    "durationSeconds": 88.699841,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t1-makeup-duties",
    "summary": {
      "en": "A makeup trainee’s responsibilities",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 1,
      "part": 2,
      "sourceTrack": "C21T1P2.2.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 100,
      "pdfPages": [
        100
      ],
      "printedPage": 99,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 9.3,
      "sourceEndSeconds": 98,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t1-lecture-review",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Discussing a marine biology lecture",
    "type": "dialogue",
    "topic": "study",
    "sourceLabel": "Cambridge IELTS 21 · Test 1 · Part 3",
    "sourceTest": 1,
    "independenceGroupId": "c21-t1-p3",
    "audio": "listening-bank/c21-t1-lecture-review.mp3",
    "durationSeconds": 127.988005,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t1-lecture-review",
    "summary": {
      "en": "Discussing a marine biology lecture",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 1,
      "part": 3,
      "sourceTrack": "C21T1P3.1.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 100,
      "pdfPages": [
        100,
        101
      ],
      "printedPage": 99,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 57.6,
      "sourceEndSeconds": 185.6,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t1-resources",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Evaluating study resources",
    "type": "dialogue",
    "topic": "study",
    "sourceLabel": "Cambridge IELTS 21 · Test 1 · Part 3",
    "sourceTest": 1,
    "independenceGroupId": "c21-t1-p3",
    "audio": "listening-bank/c21-t1-resources.mp3",
    "durationSeconds": 133.343107,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t1-resources",
    "summary": {
      "en": "Two students discuss the strengths and weaknesses of resources about marine environments.",
      "ru": "Двое студентов обсуждают достоинства и недостатки материалов о морской среде."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 1,
      "part": 3,
      "sourceTrack": "C21T1P3.2.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 101,
      "pdfPages": [
        101
      ],
      "printedPage": 100,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 8.7,
      "sourceEndSeconds": 142.05,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t1-rubber",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Constraints on natural rubber production",
    "type": "academic_monologue",
    "topic": "industry",
    "sourceLabel": "Cambridge IELTS 21 · Test 1 · Part 4",
    "sourceTest": 1,
    "independenceGroupId": "c21-t1-p4",
    "audio": "listening-bank/c21-t1-rubber.mp3",
    "durationSeconds": 145.463923,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t1-rubber",
    "summary": {
      "en": "A lecturer explains constraints on the production and reuse of natural rubber.",
      "ru": "Лектор объясняет ограничения производства и повторного использования натурального каучука."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 1,
      "part": 4,
      "sourceTrack": "C21T1P4.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 102,
      "pdfPages": [
        102
      ],
      "printedPage": 101,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 124.55,
      "sourceEndSeconds": 270,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t1-rubber-alternatives",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Threats to rubber supplies and alternatives",
    "type": "academic_monologue",
    "topic": "industry",
    "sourceLabel": "Cambridge IELTS 21 · Test 1 · Part 4",
    "sourceTest": 1,
    "independenceGroupId": "c21-t1-p4",
    "audio": "listening-bank/c21-t1-rubber-alternatives.mp3",
    "durationSeconds": 181.408413,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t1-rubber-alternatives",
    "summary": {
      "en": "Threats to rubber supplies and alternatives",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 1,
      "part": 4,
      "sourceTrack": "C21T1P4.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 102,
      "pdfPages": [
        102,
        103
      ],
      "printedPage": 101,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 270.8,
      "sourceEndSeconds": 452.2,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t2-courses-food",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Enquiring about short courses",
    "type": "dialogue",
    "topic": "courses",
    "sourceLabel": "Cambridge IELTS 21 · Test 2 · Part 1",
    "sourceTest": 2,
    "independenceGroupId": "c21-t2-p1",
    "audio": "listening-bank/c21-t2-courses-food.mp3",
    "durationSeconds": 148.729229,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t2-courses-food",
    "summary": {
      "en": "Enquiring about short courses",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 2,
      "part": 1,
      "sourceTrack": "C21T2P1.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 103,
      "pdfPages": [
        103
      ],
      "printedPage": 102,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 91.4,
      "sourceEndSeconds": 240.1,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t2-courses-crafts",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Choosing craft and practical classes",
    "type": "dialogue",
    "topic": "courses",
    "sourceLabel": "Cambridge IELTS 21 · Test 2 · Part 1",
    "sourceTest": 2,
    "independenceGroupId": "c21-t2-p1",
    "audio": "listening-bank/c21-t2-courses-crafts.mp3",
    "durationSeconds": 153.692494,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t2-courses-crafts",
    "summary": {
      "en": "Choosing craft and practical classes",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 2,
      "part": 1,
      "sourceTrack": "C21T2P1.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 103,
      "pdfPages": [
        103,
        104
      ],
      "printedPage": 102,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 281.5,
      "sourceEndSeconds": 435.2,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t2-walks",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Two local walking routes",
    "type": "monologue",
    "topic": "travel",
    "sourceLabel": "Cambridge IELTS 21 · Test 2 · Part 2",
    "sourceTest": 2,
    "independenceGroupId": "c21-t2-p2",
    "audio": "listening-bank/c21-t2-walks.mp3",
    "durationSeconds": 112.419025,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t2-walks",
    "summary": {
      "en": "Two local walking routes",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 2,
      "part": 2,
      "sourceTrack": "C21T2P2.1.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 104,
      "pdfPages": [
        104
      ],
      "printedPage": 103,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 45.7,
      "sourceEndSeconds": 158.1,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t2-mine",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Visiting a former coal mine",
    "type": "monologue",
    "topic": "travel",
    "sourceLabel": "Cambridge IELTS 21 · Test 2 · Part 2",
    "sourceTest": 2,
    "independenceGroupId": "c21-t2-p2",
    "audio": "listening-bank/c21-t2-mine.mp3",
    "durationSeconds": 120.229637,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t2-mine",
    "summary": {
      "en": "Visiting a former coal mine",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 2,
      "part": 2,
      "sourceTrack": "C21T2P2.2.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 104,
      "pdfPages": [
        104,
        105
      ],
      "printedPage": 103,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 8.9,
      "sourceEndSeconds": 129.1,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t2-food-course",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Giving feedback on a food science course",
    "type": "discussion",
    "topic": "study",
    "sourceLabel": "Cambridge IELTS 21 · Test 2 · Part 3",
    "sourceTest": 2,
    "independenceGroupId": "c21-t2-p3",
    "audio": "listening-bank/c21-t2-food-course.mp3",
    "durationSeconds": 202.619841,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t2-food-course",
    "summary": {
      "en": "Giving feedback on a food science course",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 2,
      "part": 3,
      "sourceTrack": "C21T2P3.1.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 105,
      "pdfPages": [
        105,
        106
      ],
      "printedPage": 104,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 55.3,
      "sourceEndSeconds": 257.9,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t2-food-project",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Developing a new snack",
    "type": "discussion",
    "topic": "study",
    "sourceLabel": "Cambridge IELTS 21 · Test 2 · Part 3",
    "sourceTest": 2,
    "independenceGroupId": "c21-t2-p3",
    "audio": "listening-bank/c21-t2-food-project.mp3",
    "durationSeconds": 108.030454,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t2-food-project",
    "summary": {
      "en": "Developing a new snack",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 2,
      "part": 3,
      "sourceTrack": "C21T2P3.2.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 106,
      "pdfPages": [
        106
      ],
      "printedPage": 105,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 9.5,
      "sourceEndSeconds": 117.5,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t2-cruise-problems",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Pressures on cruise destinations and operators",
    "type": "academic_monologue",
    "topic": "tourism",
    "sourceLabel": "Cambridge IELTS 21 · Test 2 · Part 4",
    "sourceTest": 2,
    "independenceGroupId": "c21-t2-p4",
    "audio": "listening-bank/c21-t2-cruise-problems.mp3",
    "durationSeconds": 174.512086,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t2-cruise-problems",
    "summary": {
      "en": "Pressures on cruise destinations and operators",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 2,
      "part": 4,
      "sourceTrack": "C21T2P4.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 107,
      "pdfPages": [
        107
      ],
      "printedPage": 106,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 74,
      "sourceEndSeconds": 248.5,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t2-cruise-changes",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Cruise companies adapt to younger customers",
    "type": "academic_monologue",
    "topic": "tourism",
    "sourceLabel": "Cambridge IELTS 21 · Test 2 · Part 4",
    "sourceTest": 2,
    "independenceGroupId": "c21-t2-p4",
    "audio": "listening-bank/c21-t2-cruise-changes.mp3",
    "durationSeconds": 120.464739,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t2-cruise-changes",
    "summary": {
      "en": "Cruise companies adapt to younger customers",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 2,
      "part": 4,
      "sourceTrack": "C21T2P4.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 107,
      "pdfPages": [
        107,
        108
      ],
      "printedPage": 106,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 248.95,
      "sourceEndSeconds": 369.4,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t3-ferry-planning",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Planning an island ferry trip",
    "type": "dialogue",
    "topic": "travel",
    "sourceLabel": "Cambridge IELTS 21 · Test 3 · Part 1",
    "sourceTest": 3,
    "independenceGroupId": "c21-t3-p1",
    "audio": "listening-bank/c21-t3-ferry-planning.mp3",
    "durationSeconds": 99.410045,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t3-ferry-planning",
    "summary": {
      "en": "Planning an island ferry trip",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 3,
      "part": 1,
      "sourceTrack": "C21T3P1.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 108,
      "pdfPages": [
        108
      ],
      "printedPage": 107,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 91.9,
      "sourceEndSeconds": 191.3,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t3-ferry-practical",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Practical advice for a family ferry trip",
    "type": "dialogue",
    "topic": "travel",
    "sourceLabel": "Cambridge IELTS 21 · Test 3 · Part 1",
    "sourceTest": 3,
    "independenceGroupId": "c21-t3-p1",
    "audio": "listening-bank/c21-t3-ferry-practical.mp3",
    "durationSeconds": 114.900658,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t3-ferry-practical",
    "summary": {
      "en": "Practical advice for a family ferry trip",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 3,
      "part": 1,
      "sourceTrack": "C21T3P1.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 108,
      "pdfPages": [
        108,
        109
      ],
      "printedPage": 107,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 248.4,
      "sourceEndSeconds": 363.3,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t3-street-food-start",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Choosing where to sell street food",
    "type": "monologue",
    "topic": "business",
    "sourceLabel": "Cambridge IELTS 21 · Test 3 · Part 2",
    "sourceTest": 3,
    "independenceGroupId": "c21-t3-p2",
    "audio": "listening-bank/c21-t3-street-food-start.mp3",
    "durationSeconds": 121.1178,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t3-street-food-start",
    "summary": {
      "en": "Choosing where to sell street food",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 3,
      "part": 2,
      "sourceTrack": "C21T3P2.1.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 109,
      "pdfPages": [
        109
      ],
      "printedPage": 108,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 43.5,
      "sourceEndSeconds": 164.6,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t3-street-food-problems",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Lessons from street food businesses",
    "type": "monologue",
    "topic": "business",
    "sourceLabel": "Cambridge IELTS 21 · Test 3 · Part 2",
    "sourceTest": 3,
    "independenceGroupId": "c21-t3-p2",
    "audio": "listening-bank/c21-t3-street-food-problems.mp3",
    "durationSeconds": 152.020658,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t3-street-food-problems",
    "summary": {
      "en": "Lessons from street food businesses",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 3,
      "part": 2,
      "sourceTrack": "C21T3P2.2.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 109,
      "pdfPages": [
        109,
        110
      ],
      "printedPage": 108,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 10.6,
      "sourceEndSeconds": 162.6,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t3-fashion-values",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Evaluating fashion claims",
    "type": "dialogue",
    "topic": "environment",
    "sourceLabel": "Cambridge IELTS 21 · Test 3 · Part 3",
    "sourceTest": 3,
    "independenceGroupId": "c21-t3-p3",
    "audio": "listening-bank/c21-t3-fashion-values.mp3",
    "durationSeconds": 111.974943,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t3-fashion-values",
    "summary": {
      "en": "Evaluating fashion claims",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 3,
      "part": 3,
      "sourceTrack": "C21T3P3.1.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 110,
      "pdfPages": [
        110
      ],
      "printedPage": 109,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 45.5,
      "sourceEndSeconds": 157.45,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t3-fashion-fabrics",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Comparing fabric production methods",
    "type": "dialogue",
    "topic": "environment",
    "sourceLabel": "Cambridge IELTS 21 · Test 3 · Part 3",
    "sourceTest": 3,
    "independenceGroupId": "c21-t3-p3",
    "audio": "listening-bank/c21-t3-fashion-fabrics.mp3",
    "durationSeconds": 142.068005,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t3-fashion-fabrics",
    "summary": {
      "en": "Comparing fabric production methods",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 3,
      "part": 3,
      "sourceTrack": "C21T3P3.2.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 111,
      "pdfPages": [
        111
      ],
      "printedPage": 110,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 11.4,
      "sourceEndSeconds": 153.45,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t3-invasive-causes",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "How invasive species cause problems and spread",
    "type": "academic_monologue",
    "topic": "ecology",
    "sourceLabel": "Cambridge IELTS 21 · Test 3 · Part 4",
    "sourceTest": 3,
    "independenceGroupId": "c21-t3-p4",
    "audio": "listening-bank/c21-t3-invasive-causes.mp3",
    "durationSeconds": 142.825556,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t3-invasive-causes",
    "summary": {
      "en": "How invasive species cause problems and spread",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 3,
      "part": 4,
      "sourceTrack": "C21T3P4.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 111,
      "pdfPages": [
        111,
        112
      ],
      "printedPage": 110,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 73.5,
      "sourceEndSeconds": 216.3,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t3-invasive-control",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Invasive species in the UK and monitoring",
    "type": "academic_monologue",
    "topic": "ecology",
    "sourceLabel": "Cambridge IELTS 21 · Test 3 · Part 4",
    "sourceTest": 3,
    "independenceGroupId": "c21-t3-p4",
    "audio": "listening-bank/c21-t3-invasive-control.mp3",
    "durationSeconds": 181.460658,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t3-invasive-control",
    "summary": {
      "en": "Invasive species in the UK and monitoring",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 3,
      "part": 4,
      "sourceTrack": "C21T3P4.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 112,
      "pdfPages": [
        112
      ],
      "printedPage": 111,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 290.25,
      "sourceEndSeconds": 471.7,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t4-shopping-errands",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "A shopper describes his visit to town",
    "type": "dialogue",
    "topic": "daily-life",
    "sourceLabel": "Cambridge IELTS 21 · Test 4 · Part 1",
    "sourceTest": 4,
    "independenceGroupId": "c21-t4-p1",
    "audio": "listening-bank/c21-t4-shopping-errands.mp3",
    "durationSeconds": 116.10229,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t4-shopping-errands",
    "summary": {
      "en": "A shopper describes his visit to town",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 4,
      "part": 1,
      "sourceTrack": "C21T4P1.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 113,
      "pdfPages": [
        113
      ],
      "printedPage": 112,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 101,
      "sourceEndSeconds": 217.1,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t4-shopping-opinions",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Views on local shopping facilities",
    "type": "dialogue",
    "topic": "daily-life",
    "sourceLabel": "Cambridge IELTS 21 · Test 4 · Part 1",
    "sourceTest": 4,
    "independenceGroupId": "c21-t4-p1",
    "audio": "listening-bank/c21-t4-shopping-opinions.mp3",
    "durationSeconds": 92.565964,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t4-shopping-opinions",
    "summary": {
      "en": "Views on local shopping facilities",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 4,
      "part": 1,
      "sourceTrack": "C21T4P1.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 113,
      "pdfPages": [
        113,
        114
      ],
      "printedPage": 112,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 264.9,
      "sourceEndSeconds": 357.45,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t4-exhibition-benefits",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "An exhibitor’s experience and benefits",
    "type": "monologue",
    "topic": "business",
    "sourceLabel": "Cambridge IELTS 21 · Test 4 · Part 2",
    "sourceTest": 4,
    "independenceGroupId": "c21-t4-p2",
    "audio": "listening-bank/c21-t4-exhibition-benefits.mp3",
    "durationSeconds": 128.614943,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t4-exhibition-benefits",
    "summary": {
      "en": "An exhibitor’s experience and benefits",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 4,
      "part": 2,
      "sourceTrack": "C21T4P2.1.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 114,
      "pdfPages": [
        114
      ],
      "printedPage": 113,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 42.7,
      "sourceEndSeconds": 171.3,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t4-exhibition-speakers",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Choosing a business exhibition talk",
    "type": "monologue",
    "topic": "business",
    "sourceLabel": "Cambridge IELTS 21 · Test 4 · Part 2",
    "sourceTest": 4,
    "independenceGroupId": "c21-t4-p2",
    "audio": "listening-bank/c21-t4-exhibition-speakers.mp3",
    "durationSeconds": 170.306372,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t4-exhibition-speakers",
    "summary": {
      "en": "Choosing a business exhibition talk",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 4,
      "part": 2,
      "sourceTrack": "C21T4P2.2.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 114,
      "pdfPages": [
        114,
        115
      ],
      "printedPage": 113,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 9.2,
      "sourceEndSeconds": 179.5,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t4-future-housing",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Planning a housing presentation",
    "type": "dialogue",
    "topic": "study",
    "sourceLabel": "Cambridge IELTS 21 · Test 4 · Part 3",
    "sourceTest": 4,
    "independenceGroupId": "c21-t4-p3",
    "audio": "listening-bank/c21-t4-future-housing.mp3",
    "durationSeconds": 95.308821,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t4-future-housing",
    "summary": {
      "en": "Planning a housing presentation",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 4,
      "part": 3,
      "sourceTrack": "C21T4P3.1.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 115,
      "pdfPages": [
        115
      ],
      "printedPage": 114,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 49.9,
      "sourceEndSeconds": 145.2,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t4-housing-features",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Evaluating future housing features",
    "type": "dialogue",
    "topic": "design",
    "sourceLabel": "Cambridge IELTS 21 · Test 4 · Part 3",
    "sourceTest": 4,
    "independenceGroupId": "c21-t4-p3",
    "audio": "listening-bank/c21-t4-housing-features.mp3",
    "durationSeconds": 148.703107,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t4-housing-features",
    "summary": {
      "en": "Evaluating future housing features",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 4,
      "part": 3,
      "sourceTrack": "C21T4P3.2.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 115,
      "pdfPages": [
        115,
        116
      ],
      "printedPage": 114,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 9.1,
      "sourceEndSeconds": 157.8,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t4-music-recovery",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "A review of music in surgical recovery",
    "type": "academic_monologue",
    "topic": "research",
    "sourceLabel": "Cambridge IELTS 21 · Test 4 · Part 4",
    "sourceTest": 4,
    "independenceGroupId": "c21-t4-p4",
    "audio": "listening-bank/c21-t4-music-recovery.mp3",
    "durationSeconds": 156.226372,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t4-music-recovery",
    "summary": {
      "en": "A review of music in surgical recovery",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 4,
      "part": 4,
      "sourceTrack": "C21T4P4.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 116,
      "pdfPages": [
        116,
        117
      ],
      "printedPage": 115,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 75.1,
      "sourceEndSeconds": 231.3,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  },
  {
    "id": "c21-t4-music-evidence",
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "title": "Interpreting music research findings",
    "type": "academic_monologue",
    "topic": "research",
    "sourceLabel": "Cambridge IELTS 21 · Test 4 · Part 4",
    "sourceTest": 4,
    "independenceGroupId": "c21-t4-p4",
    "audio": "listening-bank/c21-t4-music-evidence.mp3",
    "durationSeconds": 120.778209,
    "audioStatus": "available_for_private_practice",
    "source": "user_supplied_published_recording",
    "clusterId": "c21-t4-music-evidence",
    "summary": {
      "en": "Interpreting music research findings",
      "ru": "Фрагмент записи для вопросов на аудирование. Текст не показывается до ответа."
    },
    "provenance": {
      "book": "Cambridge IELTS 21",
      "test": 4,
      "part": 4,
      "sourceTrack": "C21T4P4.mp3",
      "sourcePdf": "IELTS 21.pdf",
      "pdfPage": 117,
      "pdfPages": [
        117
      ],
      "printedPage": 116,
      "questionSource": "Original project questions based on supplied recording and matching transcript; no publisher questions reproduced.",
      "sourceStartSeconds": 235.7,
      "sourceEndSeconds": 356.45,
      "audioManifest": "listening-bank/audio-manifest.json",
      "audioAlignment": "local_automatic_word_times_checked_against_supplied_transcript",
      "humanPerceptualReviewCompleted": false
    }
  }
];
export const listeningItems = [
  {
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "editorially_source_checked_uncalibrated",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "A sample of understanding recorded spoken English. No CEFR level or sublevel is assigned to this new question.",
      "status": "construct_description_only_no_level_claim"
    },
    "id": "c21-t1-listening-01",
    "stimulusId": "c21-t1-sailing",
    "evidenceTiming": {
      "startSeconds": 22.86,
      "endSeconds": 34.72
    },
    "construct": {
      "en": "Recognising the purpose of a service offered to beginners",
      "ru": "Понимание цели услуги, предлагаемой начинающим"
    },
    "prompt": "What is the main purpose of a Taster Day?",
    "choices": [
      "To prepare experienced sailors to become instructors.",
      "To help beginners decide whether they want to continue sailing.",
      "To test whether applicants are ready to join the sailing club.",
      "To give club members a refresher before a more advanced course."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "The woman describes an introduction for people who have never sailed, so they can discover whether they enjoy it and want to carry on.",
      "ru": "Женщина описывает вводное занятие для тех, кто ещё не ходил под парусом: оно помогает понять, нравится ли им это и хотят ли они продолжать."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The day is for first-time participants, not instructor training.",
        "ru": "День рассчитан на новичков, а не на подготовку инструкторов."
      },
      {
        "choiceIndex": 2,
        "en": "The caller is not told that this is a club-entry test; membership is a separate choice.",
        "ru": "Звонящему не говорят, что это проверка для вступления в клуб; членство обсуждается отдельно."
      },
      {
        "choiceIndex": 3,
        "en": "It is described as an introduction for people who have never sailed, not a refresher for existing sailors.",
        "ru": "Это знакомство с парусным спортом для тех, кто ещё не пробовал, а не повторение для опытных участников."
      }
    ],
    "answerEvidence": "The introduction is intended to help a first-time sailor discover whether they enjoy sailing and want to continue.",
    "sourceEvidence": {
      "printedPage": 97,
      "cue": "find out whether you enjoy it",
      "relation": "Explicit purpose in the description of Taster Days."
    },
    "scopeLimits": {
      "en": "Understanding one stated service purpose. This recording contains three linked questions and has no assigned CEFR difficulty.",
      "ru": "Понимание одной прямо названной цели. Три вопроса относятся к одной записи; уровень сложности CEFR им не присвоен."
    },
    "clusterId": "c21-t1-sailing",
    "sourceTest": 1,
    "topic": "courses",
    "tags": [
      "gist"
    ],
    "skill": "gist",
    "independenceGroupId": "c21-t1-p1"
  },
  {
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "editorially_source_checked_uncalibrated",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "A sample of understanding recorded spoken English. No CEFR level or sublevel is assigned to this new question.",
      "status": "construct_description_only_no_level_claim"
    },
    "id": "c21-t1-listening-02",
    "stimulusId": "c21-t1-sailing",
    "evidenceTiming": {
      "startSeconds": 71.2,
      "endSeconds": 101.3
    },
    "construct": {
      "en": "Combining details to understand the structure of a course",
      "ru": "Объединение деталей для понимания структуры курса"
    },
    "prompt": "How does the woman describe the Level 1 course?",
    "choices": [
      "It teaches theory first; students return another weekend for practical work.",
      "It consists of harbour practice; students learn the theory independently.",
      "It allows students to practise alone after a short safety demonstration.",
      "It combines theory with practical sailing supported by an instructor."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "She explicitly calls it a mix of theory and practical skills. Beginners go out in training dinghies with an instructor who also checks their understanding of safety.",
      "ru": "Она прямо называет курс сочетанием теории и практики. Новички выходят в учебных лодках с инструктором, который также проверяет понимание безопасности."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The two-day course includes both types of learning; separate weekends for theory and practice are not described.",
        "ru": "Оба вида обучения входят в двухдневный курс; отдельных выходных для теории и практики не описано."
      },
      {
        "choiceIndex": 1,
        "en": "Theory is part of the course, including weather and tides; it is not left entirely to independent study.",
        "ru": "Теория, в том числе погода и приливы, входит в курс и не оставляется полностью для самостоятельного изучения."
      },
      {
        "choiceIndex": 2,
        "en": "The instructor goes in the training dinghy with the learners; solo practice is not the described arrangement.",
        "ru": "Инструктор находится в учебной лодке вместе с участниками; самостоятельный выход без него не описывается."
      }
    ],
    "answerEvidence": "The course mixes theory and practical skills, and beginners sail in training dinghies with an instructor.",
    "sourceEvidence": {
      "printedPage": 97,
      "cue": "a mix of theory and practical skills",
      "relation": "The following explanation identifies the instructor’s presence in the dinghy."
    },
    "scopeLimits": {
      "en": "Integration of explicit course details. No sailing knowledge is required; this is not a separate independent stimulus from the other sailing questions.",
      "ru": "Объединение прямо названных деталей курса. Знания парусного спорта не нужны; это тот же стимул, что и в других вопросах о курсе."
    },
    "clusterId": "c21-t1-sailing",
    "sourceTest": 1,
    "topic": "courses",
    "tags": [
      "explicit-detail"
    ],
    "skill": "explicit-detail",
    "independenceGroupId": "c21-t1-p1"
  },
  {
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "editorially_source_checked_uncalibrated",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "A sample of understanding recorded spoken English. No CEFR level or sublevel is assigned to this new question.",
      "status": "construct_description_only_no_level_claim"
    },
    "id": "c21-t1-listening-03",
    "stimulusId": "c21-t1-sailing",
    "evidenceTiming": {
      "startSeconds": 110.72,
      "endSeconds": 121.92
    },
    "construct": {
      "en": "Combining an optional decision with the condition for a discount",
      "ru": "Объединение необязательного решения с условием получения скидки"
    },
    "prompt": "What does the woman say about joining the sailing club?",
    "choices": [
      "He can decide later, and members pay less for the Level 1 course.",
      "He must join before booking, and the course is included in the membership fee.",
      "He needs another person to join with him to get the members’ course discount.",
      "He can join after earning the certificate, which is required for the course discount."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "The woman says Level 1 is cheaper for members. When the caller is unsure about joining, she says he has plenty of time to decide; she does not make immediate membership compulsory.",
      "ru": "Женщина говорит, что для членов клуба курс Level 1 дешевле. Когда звонящий сомневается насчёт вступления, она отвечает, что у него достаточно времени решить; немедленное вступление не является обязательным."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "She offers time to decide and describes a course discount, not compulsory membership or a course included in a membership fee.",
        "ru": "Она даёт время на решение и говорит о скидке на курс, а не об обязательном членстве или включении курса в членский взнос."
      },
      {
        "choiceIndex": 2,
        "en": "The two-person discount belongs to the separate Taster Day. It is not stated as a requirement for the members’ Level 1 discount.",
        "ru": "Скидка для двух человек относится к отдельному Taster Day. Она не названа условием скидки для членов клуба на Level 1."
      },
      {
        "choiceIndex": 3,
        "en": "The certificate is awarded after completing Level 1 and leads towards Level 2; it is not a condition for the membership discount.",
        "ru": "Сертификат выдают после завершения Level 1, затем можно переходить к Level 2; он не назван условием скидки для членов клуба."
      }
    ],
    "answerEvidence": "Members receive a Level 1 course discount, and the caller is told there is plenty of time to decide about joining.",
    "sourceEvidence": {
      "printedPage": 97,
      "cue": "a discount for members; plenty of time to decide",
      "relation": "The price condition and the response to the caller’s uncertainty identify the two parts of the answer."
    },
    "scopeLimits": {
      "en": "Two explicit conditions in the same course conversation; no assumption about real sailing-club policies is needed.",
      "ru": "Два прямых условия в том же разговоре о курсе; предположения о правилах настоящих парусных клубов не нужны."
    },
    "clusterId": "c21-t1-sailing",
    "sourceTest": 1,
    "topic": "courses",
    "tags": [
      "qualification"
    ],
    "skill": "qualification",
    "independenceGroupId": "c21-t1-p1"
  },
  {
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "editorially_source_checked_uncalibrated",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "A sample of understanding recorded spoken English. No CEFR level or sublevel is assigned to this new question.",
      "status": "construct_description_only_no_level_claim"
    },
    "id": "c21-t1-listening-04",
    "stimulusId": "c21-t1-makeup",
    "evidenceTiming": {
      "startSeconds": 29.36,
      "endSeconds": 50.37
    },
    "construct": {
      "en": "Understanding a recommendation and its stated trade-off",
      "ru": "Понимание рекомендации и указанного в ней компромисса"
    },
    "prompt": "Why can work on a low-budget short film be worthwhile for someone starting out?",
    "choices": [
      "It normally includes meals as well as transport costs.",
      "It gives trainees responsibility for specialist effects.",
      "It offers useful experience even though the work is unpaid.",
      "It guarantees a paid role on the next production."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "Claire says that the work will be unpaid but can still be worth doing for the experience. She does not promise a future job or specialist-effects duties.",
      "ru": "Клэр говорит, что работа будет неоплачиваемой, но может быть полезна ради опыта. Она не обещает следующую работу или задачи по специальным эффектам."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "She advises checking that transport is covered and says catering is very unlikely, so trainees should bring food.",
        "ru": "Она советует убедиться, что транспорт оплачивается, и говорит, что питания, скорее всего, не будет: еду нужно взять с собой."
      },
      {
        "choiceIndex": 1,
        "en": "Special-effects makeup is described as highly specialised, and trainees should not expect practical experience in it.",
        "ru": "Грим для специальных эффектов назван узкой специализацией, практики в которой стажёрам ожидать не стоит."
      },
      {
        "choiceIndex": 3,
        "en": "No guarantee of a later paid position is made.",
        "ru": "Гарантии последующей оплачиваемой должности не даётся."
      }
    ],
    "answerEvidence": "The work is unpaid, but Claire identifies the experience as the reason it can be worthwhile.",
    "sourceEvidence": {
      "printedPage": 98,
      "cue": "worth it for the experience",
      "relation": "Concession immediately follows the statement that the work is unpaid."
    },
    "scopeLimits": {
      "en": "Understanding the speaker’s advice, not endorsing employment conditions. Two questions share this recording.",
      "ru": "Понимание совета говорящей, а не одобрение условий труда. Два вопроса относятся к одной записи."
    },
    "clusterId": "c21-t1-makeup",
    "sourceTest": 1,
    "topic": "work",
    "tags": [
      "reason"
    ],
    "skill": "reason",
    "independenceGroupId": "c21-t1-p2"
  },
  {
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "editorially_source_checked_uncalibrated",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "A sample of understanding recorded spoken English. No CEFR level or sublevel is assigned to this new question.",
      "status": "construct_description_only_no_level_claim"
    },
    "id": "c21-t1-listening-05",
    "stimulusId": "c21-t1-makeup",
    "evidenceTiming": {
      "startSeconds": 115.17,
      "endSeconds": 139.09
    },
    "construct": {
      "en": "Following a speaker’s change in attitude over time",
      "ru": "Понимание изменения отношения говорящей со временем"
    },
    "prompt": "How has Claire’s reaction to meeting famous actors changed?",
    "choices": [
      "She once felt at ease, but now worries more about making mistakes.",
      "She once found it overwhelming, but now treats it as a normal part of work.",
      "She once avoided speaking, but now regularly asks actors for photographs.",
      "She once found it exciting, but now thinks it prevents her doing useful work."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "Claire recalls being so overwhelmed that she could hardly speak. She contrasts this with now seeing contact with actors as an ordinary part of the job.",
      "ru": "Клэр вспоминает, что раньше была настолько ошеломлена, что почти не могла говорить. Теперь встречи с актёрами для неё — обычная часть работы."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The initial reaction was not ease; she describes being overwhelmed. A growing fear of mistakes is not stated.",
        "ru": "Вначале она не чувствовала себя свободно: она была ошеломлена. О нарастающем страхе ошибок не говорится."
      },
      {
        "choiceIndex": 2,
        "en": "She mentions asking for selfies as behaviour to avoid, not as her current practice.",
        "ru": "Просьбы о селфи приводятся как поведение, которого стоит избегать, а не как её нынешняя привычка."
      },
      {
        "choiceIndex": 3,
        "en": "She calls it normal now; she does not say that it obstructs useful work.",
        "ru": "Теперь она называет такие встречи нормой, но не говорит, что они мешают полезной работе."
      }
    ],
    "answerEvidence": "She contrasts her earlier overwhelmed reaction with now considering it a normal part of the job.",
    "sourceEvidence": {
      "printedPage": 98,
      "cue": "At first ... overwhelming; Now ... a normal part",
      "relation": "Explicit past–present contrast in the paragraph about famous actors."
    },
    "scopeLimits": {
      "en": "An explicit contrast of attitude; no conclusion about understanding subtle unstated emotions in other recordings.",
      "ru": "Явное сопоставление отношения в прошлом и настоящем; не вывод о понимании тонких невысказанных эмоций в других записях."
    },
    "clusterId": "c21-t1-makeup",
    "sourceTest": 1,
    "topic": "work",
    "tags": [
      "change-of-plan"
    ],
    "skill": "change-of-plan",
    "independenceGroupId": "c21-t1-p2"
  },
  {
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "editorially_source_checked_uncalibrated",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "A sample of understanding recorded spoken English. No CEFR level or sublevel is assigned to this new question.",
      "status": "construct_description_only_no_level_claim"
    },
    "id": "c21-t1-listening-06",
    "stimulusId": "c21-t1-resources",
    "evidenceTiming": {
      "startSeconds": 10.82,
      "endSeconds": 33.64
    },
    "construct": {
      "en": "Matching a specific criticism to the resource being discussed",
      "ru": "Соотнесение конкретного критического замечания с обсуждаемым материалом"
    },
    "prompt": "What weakness do the students identify in the article about invasive lionfish?",
    "choices": [
      "It gives too little explanation for its claims about environmental danger.",
      "It is too technically complex for either student to follow.",
      "It relies on a documentary made ten years earlier.",
      "It argues that lionfish cannot expand beyond their original habitat."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "Phil accepts that the danger may be real, but says the writer gives too little information to explain it. Lucy agrees. Their criticism is the lack of supporting explanation.",
      "ru": "Фил допускает, что опасность реальна, но говорит, что автор почти не объясняет её. Люси соглашается. Претензия относится к недостатку обоснования."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "Difficulty following technical content is discussed later in relation to metal toxicity.",
        "ru": "Непонятность технического материала обсуждается позднее применительно к токсичности металлов."
      },
      {
        "choiceIndex": 2,
        "en": "Being ten years old is the criticism of the microplastics documentary, not of this article.",
        "ru": "Десятилетняя давность — замечание о документальном фильме о микропластике, а не об этой статье."
      },
      {
        "choiceIndex": 3,
        "en": "Lucy describes the article as claiming that the fish are expanding their habitat, not denying that expansion.",
        "ru": "Люси говорит, что статья утверждает расширение ареала рыб, а не отрицает его."
      }
    ],
    "answerEvidence": "The writer claims environmental danger but provides little information explaining why.",
    "sourceEvidence": {
      "printedPage": 100,
      "cue": "didn’t really provide much information to explain why",
      "relation": "Phil’s criticism, followed by Lucy’s agreement."
    },
    "scopeLimits": {
      "en": "Resource–evaluation mapping within a single discussion; the factual truth of the environmental claim is not tested.",
      "ru": "Соотнесение материала и оценки внутри одного обсуждения; фактическая истинность экологического утверждения не проверяется."
    },
    "clusterId": "c21-t1-resources",
    "sourceTest": 1,
    "topic": "study",
    "tags": [
      "speaker-attitude"
    ],
    "skill": "speaker-attitude",
    "independenceGroupId": "c21-t1-p3"
  },
  {
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "editorially_source_checked_uncalibrated",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "A sample of understanding recorded spoken English. No CEFR level or sublevel is assigned to this new question.",
      "status": "construct_description_only_no_level_claim"
    },
    "id": "c21-t1-listening-07",
    "stimulusId": "c21-t1-resources",
    "evidenceTiming": {
      "startSeconds": 74.9,
      "endSeconds": 101.24
    },
    "construct": {
      "en": "Preserving a qualified positive evaluation after initial difficulty",
      "ru": "Сохранение положительной оценки с оговоркой о первоначальной трудности"
    },
    "prompt": "What do the students conclude about the book on coastal ecosystems?",
    "choices": [
      "It contains helpful diagrams but remains too technical for them to understand.",
      "It explains familiar ideas clearly but adds little to what they already know.",
      "It demands effort at first but ultimately improves understanding of the issues.",
      "It begins with a useful overview but becomes less clear as the detail increases."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "Lucy says the book was hard going at first but left her with a much better understanding. Phil agrees and praises the summary and diagrams.",
      "ru": "Люси говорит, что сначала читать было трудно, но в итоге она гораздо лучше поняла вопросы. Фил соглашается и хвалит изложение и схемы."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The diagrams help, and both students report increased understanding rather than continued failure to understand.",
        "ru": "Схемы помогают, а оба студента говорят об улучшении понимания, а не о сохраняющейся непонятности."
      },
      {
        "choiceIndex": 1,
        "en": "Stating what everybody already knows is their criticism of a pollution podcast, not their final judgement of the book.",
        "ru": "Изложение того, что и так всем известно, — их критика подкаста о загрязнении, а не итоговая оценка книги."
      },
      {
        "choiceIndex": 3,
        "en": "This reverses the direction of the experience: difficulty comes first, followed by improved understanding.",
        "ru": "Здесь опыт развёрнут наоборот: в записи сначала трудность, затем улучшение понимания."
      }
    ],
    "answerEvidence": "Initial difficulty gives way to better understanding; the other student agrees and values the diagrams.",
    "sourceEvidence": {
      "printedPage": 100,
      "cue": "hard going at first ... much better understanding",
      "relation": "Lucy’s contrast and Phil’s subsequent agreement."
    },
    "scopeLimits": {
      "en": "One qualified evaluation, not a judgement of the listener’s ability to read the book; shares the resources-discussion cluster.",
      "ru": "Одна оценка с оговоркой, а не проверка способности слушателя читать саму книгу; вопрос входит в общий блок обсуждения материалов."
    },
    "clusterId": "c21-t1-resources",
    "sourceTest": 1,
    "topic": "study",
    "tags": [
      "qualification"
    ],
    "skill": "qualification",
    "independenceGroupId": "c21-t1-p3"
  },
  {
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "editorially_source_checked_uncalibrated",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "A sample of understanding recorded spoken English. No CEFR level or sublevel is assigned to this new question.",
      "status": "construct_description_only_no_level_claim"
    },
    "id": "c21-t1-listening-08",
    "stimulusId": "c21-t1-resources",
    "evidenceTiming": {
      "startSeconds": 119.12,
      "endSeconds": 133.1
    },
    "construct": {
      "en": "Understanding what makes a presentation one-sided",
      "ru": "Понимание причины односторонности изложения"
    },
    "prompt": "Why do the students describe the podcast about floating marine cities as one-sided?",
    "choices": [
      "It considers environmental damage but leaves out possible benefits for people.",
      "It describes only existing cities and avoids discussing future possibilities.",
      "It uses the views of residents but excludes the opinions of researchers.",
      "It emphasises benefits for people while overlooking environmental effects."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "Lucy calls the account one-sided. Phil explains that it focuses on benefits to people and ignores effects on the environment.",
      "ru": "Люси называет изложение односторонним. Фил объясняет: оно сосредоточено на выгодах для людей и игнорирует последствия для окружающей среды."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "This reverses what is included and excluded: human benefits receive attention; environmental effects do not.",
        "ru": "Этот вариант меняет местами включённое и пропущенное: внимание уделяется выгодам людям, а не экологическим последствиям."
      },
      {
        "choiceIndex": 1,
        "en": "A contrast between existing and future cities is not their stated criticism.",
        "ru": "Различие между существующими и будущими городами не является названной ими претензией."
      },
      {
        "choiceIndex": 2,
        "en": "They do not criticise the selection of resident versus researcher voices.",
        "ru": "Они не критикуют выбор голосов жителей вместо исследователей."
      }
    ],
    "answerEvidence": "The discussion identifies human benefits as the focus and environmental effects as the omitted perspective.",
    "sourceEvidence": {
      "printedPage": 100,
      "cue": "benefit people and ignored the effects on the environment",
      "relation": "Phil clarifies Lucy’s preceding description of a one-sided picture."
    },
    "scopeLimits": {
      "en": "The omitted perspective is supplied in the conversation; no outside knowledge of floating cities is required.",
      "ru": "Пропущенная точка зрения названа в разговоре; внешние знания о плавучих городах не требуются."
    },
    "clusterId": "c21-t1-resources",
    "sourceTest": 1,
    "topic": "study",
    "tags": [
      "speaker-attitude"
    ],
    "skill": "speaker-attitude",
    "independenceGroupId": "c21-t1-p3"
  },
  {
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "editorially_source_checked_uncalibrated",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "A sample of understanding recorded spoken English. No CEFR level or sublevel is assigned to this new question.",
      "status": "construct_description_only_no_level_claim"
    },
    "id": "c21-t1-listening-09",
    "stimulusId": "c21-t1-rubber",
    "evidenceTiming": {
      "startSeconds": 40.48,
      "endSeconds": 74.4
    },
    "construct": {
      "en": "Following a causal explanation about production and demand",
      "ru": "Понимание причинного объяснения связи производства и спроса"
    },
    "prompt": "Why does the long wait before rubber trees begin producing make planning difficult?",
    "choices": [
      "Farmers have to make planting decisions long before the future demand is known.",
      "Farmers must wait for demand to fall before harvesting their rubber.",
      "The trees need increasingly precise weather conditions as they mature.",
      "Farmers need more workers each year simply because the trees are older."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "Other crops can be changed relatively quickly as demand rises or falls. Rubber trees must be planted many years ahead, making such adjustment harder.",
      "ru": "Другие культуры можно сравнительно быстро менять при росте или падении спроса. Каучуковые деревья приходится сажать на много лет вперёд, что затрудняет такую адаптацию."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "Falling demand is an example of a change growers may need to respond to, not a condition for harvesting.",
        "ru": "Падение спроса — пример изменения, на которое нужно реагировать, а не условие начала сбора."
      },
      {
        "choiceIndex": 2,
        "en": "Climate requirements are a separate constraint; the lecturer does not say they become more demanding as the trees mature.",
        "ru": "Требования к климату — отдельное ограничение; лектор не говорит, что по мере взросления деревьев эти требования усиливаются."
      },
      {
        "choiceIndex": 3,
        "en": "Manual extraction is discussed separately; increasing worker numbers as trees age is not the explanation given.",
        "ru": "Ручной сбор обсуждается отдельно; рост числа работников по мере старения деревьев не назван причиной."
      }
    ],
    "answerEvidence": "Planting eight to ten years ahead makes it difficult to adjust production when demand changes.",
    "sourceEvidence": {
      "printedPage": 101,
      "cue": "if you have to plant eight or ten years ahead",
      "relation": "The comparison with other crops explains the planning consequence."
    },
    "scopeLimits": {
      "en": "Understanding the lecturer’s causal comparison, not knowledge of agriculture or a measure of quantitative reasoning.",
      "ru": "Понимание причинного сравнения лектора, а не знание сельского хозяйства или оценка математического мышления."
    },
    "clusterId": "c21-t1-rubber",
    "sourceTest": 1,
    "topic": "industry",
    "tags": [
      "reason"
    ],
    "skill": "reason",
    "independenceGroupId": "c21-t1-p4"
  },
  {
    "domain": "listening",
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "editorially_source_checked_uncalibrated",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "A sample of understanding recorded spoken English. No CEFR level or sublevel is assigned to this new question.",
      "status": "construct_description_only_no_level_claim"
    },
    "id": "c21-t1-listening-10",
    "stimulusId": "c21-t1-rubber",
    "evidenceTiming": {
      "startSeconds": 127.68,
      "endSeconds": 145.14
    },
    "construct": {
      "en": "Distinguishing a limited possibility from impossibility",
      "ru": "Различение ограниченной возможности и невозможности"
    },
    "prompt": "What does the lecturer say about recycling rubber?",
    "choices": [
      "It is straightforward, but demand for the recycled product is too low.",
      "It is impossible, unlike the recycling of water and glass.",
      "It is possible, but its difficulty restricts the supply available.",
      "It is possible only after rubber has been mixed with another material."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "The lecturer explicitly says recycling rubber is possible but very difficult. This difficulty contributes to the limit on available supply.",
      "ru": "Лектор прямо говорит, что переработка каучука возможна, но очень трудна. Эта трудность также ограничивает доступное количество материала."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The difficulty of recycling, not weak demand for a recycled product, is the reason stated.",
        "ru": "Названная причина — трудность переработки, а не слабый спрос на переработанный продукт."
      },
      {
        "choiceIndex": 1,
        "en": "The lecturer says recycling is possible, so describing it as impossible loses an important qualification.",
        "ru": "Лектор говорит, что переработка возможна; слово «невозможна» убирает важную оговорку."
      },
      {
        "choiceIndex": 3,
        "en": "No requirement to mix rubber with another material is stated in this explanation.",
        "ru": "Требование смешивать каучук с другим материалом в этом объяснении не названо."
      }
    ],
    "answerEvidence": "Recycling rubber is possible, but very difficult, which reduces how much rubber is available.",
    "sourceEvidence": {
      "printedPage": 101,
      "cue": "although this is also possible with rubber, it’s very difficult",
      "relation": "Concession preserves possibility while explaining a supply constraint."
    },
    "scopeLimits": {
      "en": "A qualification in the same lecture extract; not independent confirmation of the preceding rubber item or a CEFR-level judgement.",
      "ru": "Оговорка в том же отрывке лекции; не независимое подтверждение предыдущего вопроса и не суждение об уровне CEFR."
    },
    "clusterId": "c21-t1-rubber",
    "sourceTest": 1,
    "topic": "industry",
    "tags": [
      "qualification"
    ],
    "skill": "qualification",
    "independenceGroupId": "c21-t1-p4"
  },
  {
    "id": "large-c21-t1-listening-001",
    "domain": "listening",
    "stimulusId": "c21-t1-sailing",
    "clusterId": "c21-t1-sailing",
    "sourceTest": 1,
    "topic": "courses",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "When would the caller qualify for the lower Taster Day price?",
    "choices": [
      "If he enrolled on the Level 1 course afterwards.",
      "If he already belonged to the club.",
      "If he joined a group of at least eight people.",
      "If he booked with a second participant."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "The Taster Day price falls for each person when two people book. The caller says he would attend alone.",
      "ru": "Цена Taster Day на человека ниже, если записываются двое. Звонящий говорит, что придёт один."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "No later course booking is required for this price.",
        "ru": "Для этой цены не требуется запись на следующий курс."
      },
      {
        "choiceIndex": 1,
        "en": "The membership discount applies to Level 1, a different offer.",
        "ru": "Скидка для членов клуба относится к другому предложению — Level 1."
      },
      {
        "choiceIndex": 2,
        "en": "Eight describes the usual group size, not a booking condition.",
        "ru": "Восемь — обычный размер группы, а не условие скидки."
      }
    ],
    "answerEvidence": "The Taster Day price falls for each person when two people book. The caller says he would attend alone.",
    "evidenceTiming": {
      "startSeconds": 35.5,
      "endSeconds": 49.74
    },
    "sourceEvidence": {
      "pdfPage": 98,
      "pdfPages": [
        98
      ],
      "printedPage": 97,
      "sourceStartSeconds": 152.9,
      "sourceEndSeconds": 167.14,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t1-p1"
  },
  {
    "id": "large-c21-t1-listening-002",
    "domain": "listening",
    "stimulusId": "c21-t1-sailing-preparation",
    "clusterId": "c21-t1-sailing-preparation",
    "sourceTest": 1,
    "topic": "courses",
    "skill": "explicit-detail",
    "tags": [
      "explicit-detail"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Identifying explicitly stated information",
      "ru": "Поиск прямо названной информации"
    },
    "prompt": "Which ability does the woman say is essential before joining the course?",
    "choices": [
      "Being able to swim.",
      "Being able to sail a small boat alone.",
      "Being confident manoeuvring a boat near the harbour.",
      "Being able to identify local tides."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "She stresses swimming ability, and the caller says he feels confident in the water.",
      "ru": "Она подчёркивает необходимость уметь плавать; звонящий отвечает, что уверенно чувствует себя в воде."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "Sailing is what the beginner course teaches.",
        "ru": "Парусному спорту обучают на курсе для новичков."
      },
      {
        "choiceIndex": 2,
        "en": "The learner is a beginner; independent boat handling is not required.",
        "ru": "Участник — новичок; самостоятельное управление лодкой не требуется."
      },
      {
        "choiceIndex": 3,
        "en": "Tides are taught during the course, not listed here as an entry requirement.",
        "ru": "Приливы изучают на курсе; их знание не названо условием записи."
      }
    ],
    "answerEvidence": "She stresses swimming ability, and the caller says he feels confident in the water.",
    "evidenceTiming": {
      "startSeconds": 6.2,
      "endSeconds": 13
    },
    "sourceEvidence": {
      "pdfPage": 98,
      "pdfPages": [
        98
      ],
      "printedPage": 97,
      "sourceStartSeconds": 14.1,
      "sourceEndSeconds": 20.9,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t1-p1"
  },
  {
    "id": "large-c21-t1-listening-003",
    "domain": "listening",
    "stimulusId": "c21-t1-sailing-preparation",
    "clusterId": "c21-t1-sailing-preparation",
    "sourceTest": 1,
    "topic": "courses",
    "skill": "explicit-detail",
    "tags": [
      "explicit-detail"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Identifying explicitly stated information",
      "ru": "Поиск прямо названной информации"
    },
    "prompt": "Which plan matches the equipment arrangements?",
    "choices": [
      "Hire all clothes from the club and bring only toiletries.",
      "Bring a life jacket; collect swimming trunks from the club.",
      "Bring swimwear and trainers; borrow the club’s protective equipment.",
      "Bring a wetsuit; borrow a towel from the instructor."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "The club provides wetsuits and life jackets, while participants bring swimming trunks, old trainers and a towel.",
      "ru": "Клуб предоставляет гидрокостюмы и спасательные жилеты, а участники приносят плавки, старые кроссовки и полотенце."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Personal clothing is required; the conversation does not offer an all-clothes hire service.",
        "ru": "Личную одежду нужно принести; прокат всей одежды не предлагается."
      },
      {
        "choiceIndex": 1,
        "en": "Life jackets are provided; trunks are not.",
        "ru": "Спасательные жилеты предоставляют, а плавки нужно принести."
      },
      {
        "choiceIndex": 3,
        "en": "Wetsuits are provided and a towel must be brought.",
        "ru": "Гидрокостюмы предоставляют, а полотенце приносят с собой."
      }
    ],
    "answerEvidence": "The club provides wetsuits and life jackets, while participants bring swimming trunks, old trainers and a towel.",
    "evidenceTiming": {
      "startSeconds": 14.38,
      "endSeconds": 30.68
    },
    "sourceEvidence": {
      "pdfPage": 99,
      "pdfPages": [
        99
      ],
      "printedPage": 98,
      "sourceStartSeconds": 22.28,
      "sourceEndSeconds": 38.58,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t1-p1"
  },
  {
    "id": "large-c21-t1-listening-004",
    "domain": "listening",
    "stimulusId": "c21-t1-sailing-preparation",
    "clusterId": "c21-t1-sailing-preparation",
    "sourceTest": 1,
    "topic": "courses",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "Why does the woman offer to send the caller a link?",
    "choices": [
      "To let him complete a compulsory sailing examination.",
      "To enable him to join a live class instead of attending.",
      "To show him where to buy equipment before attending.",
      "To help him become familiar with what the training will involve."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "The online training videos are suggested because he wants some preparation and does not know what to expect.",
      "ru": "Он хочет немного подготовиться и не знает, чего ожидать, поэтому ему рекомендуют учебные видеозаписи."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "No examination is mentioned as a condition of attendance.",
        "ru": "Экзамен как условие участия не упоминается."
      },
      {
        "choiceIndex": 1,
        "en": "The videos prepare him for the course; they do not replace attendance.",
        "ru": "Видео готовят его к курсу, но не заменяют посещение."
      },
      {
        "choiceIndex": 2,
        "en": "The link is for training videos, not an equipment shop.",
        "ru": "Ссылка ведёт к учебным видео, а не в магазин."
      }
    ],
    "answerEvidence": "The online training videos are suggested because he wants some preparation and does not know what to expect.",
    "evidenceTiming": {
      "startSeconds": 45.82,
      "endSeconds": 66.38
    },
    "sourceEvidence": {
      "pdfPage": 99,
      "pdfPages": [
        99
      ],
      "printedPage": 98,
      "sourceStartSeconds": 53.72,
      "sourceEndSeconds": 74.28,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t1-p1"
  },
  {
    "id": "large-c21-t1-listening-005",
    "domain": "listening",
    "stimulusId": "c21-t1-sailing-preparation",
    "clusterId": "c21-t1-sailing-preparation",
    "sourceTest": 1,
    "topic": "courses",
    "skill": "explicit-detail",
    "tags": [
      "explicit-detail"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Identifying explicitly stated information",
      "ru": "Поиск прямо названной информации"
    },
    "prompt": "How can the caller keep his valuables secure at the club?",
    "choices": [
      "Leave them at the café counter.",
      "Use a locker in the changing rooms.",
      "Store them in a locked bicycle basket.",
      "Ask an instructor to carry them in the boat."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "The woman confirms that plenty of lockers are available in the changing rooms.",
      "ru": "Женщина подтверждает, что в раздевалках есть много шкафчиков."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The café is discussed for food, not secure storage.",
        "ru": "Кафе упоминается в связи с едой, а не хранением вещей."
      },
      {
        "choiceIndex": 2,
        "en": "Cycling explains his concern, but bicycle storage is not offered.",
        "ru": "Велосипед объясняет его вопрос, но хранение на велосипеде не предлагается."
      },
      {
        "choiceIndex": 3,
        "en": "The woman offers lockers, not an instructor’s custody.",
        "ru": "Она предлагает шкафчики, а не хранение у инструктора."
      }
    ],
    "answerEvidence": "The woman confirms that plenty of lockers are available in the changing rooms.",
    "evidenceTiming": {
      "startSeconds": 69.82,
      "endSeconds": 82.8
    },
    "sourceEvidence": {
      "pdfPage": 99,
      "pdfPages": [
        99
      ],
      "printedPage": 98,
      "sourceStartSeconds": 77.72,
      "sourceEndSeconds": 90.7,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t1-p1"
  },
  {
    "id": "large-c21-t1-listening-006",
    "domain": "listening",
    "stimulusId": "c21-t1-makeup",
    "clusterId": "c21-t1-makeup",
    "sourceTest": 1,
    "topic": "work",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "What opportunity does Claire say a large production is likely to give a trainee?",
    "choices": [
      "Selecting the principal actors whose makeup they will personally apply.",
      "Learning both hairstyling and makeup within a single combined department.",
      "Taking practical responsibility for advanced special-effects makeup.",
      "Working with people from varied age groups and backgrounds."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "She highlights experience with different ages and ethnicities, while warning that special effects are a separate specialist area.",
      "ru": "Она выделяет опыт работы с разными возрастами и этническими группами, но предупреждает, что спецэффекты — отдельная специализация."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "No control over casting or principal-actor duties is promised.",
        "ru": "Выбор актёров и работа с главными исполнителями не обещаются."
      },
      {
        "choiceIndex": 1,
        "en": "The two functions are in separate departments on large productions.",
        "ru": "На крупных проектах эти функции относятся к разным отделам."
      },
      {
        "choiceIndex": 2,
        "en": "She explicitly warns trainees not to expect this specialised practice.",
        "ru": "Она прямо предупреждает, что такой специализированной практики ожидать не стоит."
      }
    ],
    "answerEvidence": "She highlights experience with different ages and ethnicities, while warning that special effects are a separate specialist area.",
    "evidenceTiming": {
      "startSeconds": 55.15,
      "endSeconds": 84
    },
    "sourceEvidence": {
      "pdfPage": 99,
      "pdfPages": [
        99
      ],
      "printedPage": 98,
      "sourceStartSeconds": 131.15,
      "sourceEndSeconds": 160,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t1-p2"
  },
  {
    "id": "large-c21-t1-listening-007",
    "domain": "listening",
    "stimulusId": "c21-t1-makeup",
    "clusterId": "c21-t1-makeup",
    "sourceTest": 1,
    "topic": "work",
    "skill": "speaker-attitude",
    "tags": [
      "speaker-attitude"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Recognising a speaker’s evaluation or preference",
      "ru": "Распознавание оценки или предпочтения говорящего"
    },
    "prompt": "How does Claire advise trainees to respond to pressure from a director?",
    "choices": [
      "Wait until the director leaves before resuming work.",
      "Copy the calm professional approach of their supervisor.",
      "Explain publicly why the director’s criticism is unreasonable.",
      "Avoid asking their supervisor for examples of good practice."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "She uses the senior artists’ professionalism as a model and tells trainees to remain calm.",
      "ru": "Она приводит профессионализм старших гримёров как образец и советует сохранять спокойствие."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Stopping work until the director leaves is not her advice.",
        "ru": "Она не советует останавливать работу до ухода режиссёра."
      },
      {
        "choiceIndex": 2,
        "en": "She recommends composure, not public confrontation.",
        "ru": "Она рекомендует выдержку, а не публичный спор."
      },
      {
        "choiceIndex": 3,
        "en": "The supervisor is the model to follow, not someone to avoid.",
        "ru": "На руководителя нужно ориентироваться, а не избегать его."
      }
    ],
    "answerEvidence": "She uses the senior artists’ professionalism as a model and tells trainees to remain calm.",
    "evidenceTiming": {
      "startSeconds": 88.91,
      "endSeconds": 112.8
    },
    "sourceEvidence": {
      "pdfPage": 99,
      "pdfPages": [
        99
      ],
      "printedPage": 98,
      "sourceStartSeconds": 164.91,
      "sourceEndSeconds": 188.8,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t1-p2"
  },
  {
    "id": "large-c21-t1-listening-008",
    "domain": "listening",
    "stimulusId": "c21-t1-makeup-duties",
    "clusterId": "c21-t1-makeup-duties",
    "sourceTest": 1,
    "topic": "work",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "Why might a trainee need to cleanse and moisturise an actor’s skin quickly?",
    "choices": [
      "To prevent the makeup artist’s schedule from slipping.",
      "To demonstrate a new technique to the principal cast.",
      "To avoid having to record the makeup afterwards.",
      "To ensure the actor does not need any makeup."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "Some actors arrive unprepared; completing the skin preparation promptly keeps the makeup work on schedule.",
      "ru": "Некоторые актёры приходят неподготовленными; быстрая подготовка кожи помогает гримёру соблюдать график."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "This is preparation for the artist, not a demonstration for the cast.",
        "ru": "Это подготовка к работе гримёра, а не демонстрация для актёров."
      },
      {
        "choiceIndex": 2,
        "en": "Preparation does not remove the separate continuity-recording duty.",
        "ru": "Подготовка не отменяет отдельную обязанность вести записи для повторных съёмок."
      },
      {
        "choiceIndex": 3,
        "en": "It prepares the skin for makeup rather than replacing makeup.",
        "ru": "Она готовит кожу к гриму, а не заменяет грим."
      }
    ],
    "answerEvidence": "Some actors arrive unprepared; completing the skin preparation promptly keeps the makeup work on schedule.",
    "evidenceTiming": {
      "startSeconds": 16.12,
      "endSeconds": 34.68
    },
    "sourceEvidence": {
      "pdfPage": 100,
      "pdfPages": [
        100
      ],
      "printedPage": 99,
      "sourceStartSeconds": 25.42,
      "sourceEndSeconds": 43.98,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t1-p2"
  },
  {
    "id": "large-c21-t1-listening-009",
    "domain": "listening",
    "stimulusId": "c21-t1-makeup-duties",
    "clusterId": "c21-t1-makeup-duties",
    "sourceTest": 1,
    "topic": "work",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "What is the main purpose of keeping carefully organised makeup photographs?",
    "choices": [
      "To demonstrate which actor’s finished makeup required the highest production cost.",
      "To replace the need for a separate file for each actor.",
      "To reproduce the same appearance when scenes are filmed again later.",
      "To allow the trainee to publish every photograph immediately."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "The photographs support continuity: makeup may need to be recreated months later for a reshoot.",
      "ru": "Фотографии помогают сохранять единообразие: при повторной съёмке грим может потребоваться воспроизвести через несколько месяцев."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The stated purpose is continuity, not comparing expenditure.",
        "ru": "Названная цель — повторение образа, а не сравнение расходов."
      },
      {
        "choiceIndex": 1,
        "en": "Printed photographs go into individual actors’ files, not replace them.",
        "ru": "Распечатки помещают в отдельные папки актёров, а не заменяют их."
      },
      {
        "choiceIndex": 3,
        "en": "Permission and publication are separate matters; this task is continuity.",
        "ru": "Разрешение на публикацию — отдельный вопрос; здесь речь о повторении образа."
      }
    ],
    "answerEvidence": "The photographs support continuity: makeup may need to be recreated months later for a reshoot.",
    "evidenceTiming": {
      "startSeconds": 36.12,
      "endSeconds": 56.3
    },
    "sourceEvidence": {
      "pdfPage": 100,
      "pdfPages": [
        100
      ],
      "printedPage": 99,
      "sourceStartSeconds": 45.42,
      "sourceEndSeconds": 65.6,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t1-p2"
  },
  {
    "id": "large-c21-t1-listening-010",
    "domain": "listening",
    "stimulusId": "c21-t1-makeup-duties",
    "clusterId": "c21-t1-makeup-duties",
    "sourceTest": 1,
    "topic": "work",
    "skill": "inference",
    "tags": [
      "inference"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Drawing an inference supported by the recording",
      "ru": "Вывод, опирающийся на содержание записи"
    },
    "prompt": "What attitude does Claire suggest can improve a trainee’s future employment prospects?",
    "choices": [
      "Willingly helping with routine tasks alongside their main makeup duties.",
      "Insisting on a specialist role before helping the team.",
      "Accepting only duties that add new pictures to a portfolio.",
      "Avoiding routine tasks once a first film credit has been earned."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "She links a positive, helpful response to general duties with obtaining another film job.",
      "ru": "Она связывает позитивную готовность выполнять общие обязанности с возможностью получить следующую работу в кино."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "Demanding a specialist role contradicts the flexible attitude she recommends.",
        "ru": "Требование узкой роли противоречит рекомендуемой готовности помогать."
      },
      {
        "choiceIndex": 2,
        "en": "Her examples include washing and refreshments, not only portfolio work.",
        "ru": "Её примеры включают стирку и напитки, а не только работу для портфолио."
      },
      {
        "choiceIndex": 3,
        "en": "She encourages willingness, not refusal after gaining experience.",
        "ru": "Она поощряет готовность помогать, а не отказ после первого опыта."
      }
    ],
    "answerEvidence": "She links a positive, helpful response to general duties with obtaining another film job.",
    "evidenceTiming": {
      "startSeconds": 57.82,
      "endSeconds": 70.78
    },
    "sourceEvidence": {
      "pdfPage": 100,
      "pdfPages": [
        100
      ],
      "printedPage": 99,
      "sourceStartSeconds": 67.12,
      "sourceEndSeconds": 80.08,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t1-p2"
  },
  {
    "id": "large-c21-t1-listening-011",
    "domain": "listening",
    "stimulusId": "c21-t1-makeup-duties",
    "clusterId": "c21-t1-makeup-duties",
    "sourceTest": 1,
    "topic": "work",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "What distinguishes the makeup work a trainee may be asked to do?",
    "choices": [
      "It involves supervising experienced artists rather than applying makeup.",
      "It is on one selected extra with unlimited preparation time.",
      "It is on leading actors and requires unusually complex effects.",
      "It involves applying makeup rapidly to groups of extras."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "Claire limits this work to extras and stresses speed when there are many of them.",
      "ru": "Клэр ограничивает эту работу массовкой и подчёркивает необходимость быстрого темпа, когда людей много."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "She describes applying makeup, not supervising senior staff.",
        "ru": "Она описывает нанесение грима, а не руководство старшими сотрудниками."
      },
      {
        "choiceIndex": 1,
        "en": "She says not to spend too long on each person.",
        "ru": "Она говорит не тратить слишком много времени на каждого."
      },
      {
        "choiceIndex": 2,
        "en": "She excludes the principal cast and does not assign complex effects here.",
        "ru": "Она исключает главных актёров и не поручает здесь сложные спецэффекты."
      }
    ],
    "answerEvidence": "Claire limits this work to extras and stresses speed when there are many of them.",
    "evidenceTiming": {
      "startSeconds": 71.82,
      "endSeconds": 88.36
    },
    "sourceEvidence": {
      "pdfPage": 100,
      "pdfPages": [
        100
      ],
      "printedPage": 99,
      "sourceStartSeconds": 81.12,
      "sourceEndSeconds": 97.66,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t1-p2"
  },
  {
    "id": "large-c21-t1-listening-012",
    "domain": "listening",
    "stimulusId": "c21-t1-lecture-review",
    "clusterId": "c21-t1-lecture-review",
    "sourceTest": 1,
    "topic": "study",
    "skill": "agreement",
    "tags": [
      "agreement"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Tracking speakers’ agreement and final decisions",
      "ru": "Отслеживание согласия и итоговых решений говорящих"
    },
    "prompt": "What do both students particularly value about the lecture’s focus?",
    "choices": [
      "It repeated the student’s previous assignment in greater detail.",
      "It concentrated only on problems already solved by policy changes.",
      "It avoided long-term questions in favour of current headlines.",
      "It addressed future problems receiving little widespread attention today."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "Lucy welcomes the long-term focus, and Phil agrees that these issues may become important despite limited current attention.",
      "ru": "Люси ценит долгосрочную направленность, и Фил соглашается: эти вопросы могут стать важными, хотя сейчас им уделяют мало внимания."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The earlier assignment is background, not the lecture’s main value.",
        "ru": "Прошлая работа — контекст, а не главное достоинство лекции."
      },
      {
        "choiceIndex": 1,
        "en": "Many problems remain without clear solutions.",
        "ru": "У многих проблем пока нет понятного решения."
      },
      {
        "choiceIndex": 2,
        "en": "They praise the opposite: attention to future issues.",
        "ru": "Они хвалят противоположное — внимание к будущим проблемам."
      }
    ],
    "answerEvidence": "Lucy welcomes the long-term focus, and Phil agrees that these issues may become important despite limited current attention.",
    "evidenceTiming": {
      "startSeconds": 9.67,
      "endSeconds": 29.01
    },
    "sourceEvidence": {
      "pdfPage": 100,
      "pdfPages": [
        100
      ],
      "printedPage": 99,
      "sourceStartSeconds": 67.27,
      "sourceEndSeconds": 86.61,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t1-p3"
  },
  {
    "id": "large-c21-t1-listening-013",
    "domain": "listening",
    "stimulusId": "c21-t1-lecture-review",
    "clusterId": "c21-t1-lecture-review",
    "sourceTest": 1,
    "topic": "study",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "Which statement best captures their view of the lecture’s conclusion?",
    "choices": [
      "It was pessimistic because the speaker rejected all policy changes.",
      "It was cheerful because the threats were limited to one country.",
      "It was reassuring because a single global solution had been agreed.",
      "It was troubling overall, though some national policy responses were identified."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "Phil finds the lack of clear solutions discouraging; Lucy qualifies this by noting possible policy changes, which he identifies as national.",
      "ru": "Фила тревожит отсутствие ясных решений; Люси уточняет, что предлагались изменения политики, которые он относит к национальному уровню."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Policy possibilities were discussed, not rejected entirely.",
        "ru": "Возможные изменения политики обсуждались, а не полностью отвергались."
      },
      {
        "choiceIndex": 1,
        "en": "The examples showed worldwide threats, not a single-country problem.",
        "ru": "Примеры показывали глобальные угрозы, а не проблему одной страны."
      },
      {
        "choiceIndex": 2,
        "en": "No agreed global solution is reported.",
        "ru": "О согласованном глобальном решении не говорится."
      }
    ],
    "answerEvidence": "Phil finds the lack of clear solutions discouraging; Lucy qualifies this by noting possible policy changes, which he identifies as national.",
    "evidenceTiming": {
      "startSeconds": 29.01,
      "endSeconds": 48.75
    },
    "sourceEvidence": {
      "pdfPage": 100,
      "pdfPages": [
        100
      ],
      "printedPage": 99,
      "sourceStartSeconds": 86.61,
      "sourceEndSeconds": 106.35,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t1-p3"
  },
  {
    "id": "large-c21-t1-listening-014",
    "domain": "listening",
    "stimulusId": "c21-t1-lecture-review",
    "clusterId": "c21-t1-lecture-review",
    "sourceTest": 1,
    "topic": "study",
    "skill": "speaker-attitude",
    "tags": [
      "speaker-attitude"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Recognising a speaker’s evaluation or preference",
      "ru": "Распознавание оценки или предпочтения говорящего"
    },
    "prompt": "What do the students regard as especially impressive about the research team?",
    "choices": [
      "Many experts from different professional backgrounds worked together.",
      "Its members produced separate reports without needing to work together directly.",
      "Its international membership was something unheard of today.",
      "All its members had exactly the same specialism."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "They praise the number and diversity of experts. International membership is mentioned too, but described as unsurprising now.",
      "ru": "Они хвалят число специалистов и разнообразие их опыта. Международный состав тоже упоминается, но уже не считается необычным."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "They praise collaboration; remote working makes it possible.",
        "ru": "Они хвалят сотрудничество; удалённая работа его обеспечивает."
      },
      {
        "choiceIndex": 2,
        "en": "They explicitly say international teamwork is not unusual now.",
        "ru": "Они прямо говорят, что международная работа сейчас не необычна."
      },
      {
        "choiceIndex": 3,
        "en": "The different backgrounds, not identical training, impress them.",
        "ru": "Их впечатляет различие опыта, а не одинаковая подготовка."
      }
    ],
    "answerEvidence": "They praise the number and diversity of experts. International membership is mentioned too, but described as unsurprising now.",
    "evidenceTiming": {
      "startSeconds": 62.11,
      "endSeconds": 100.39
    },
    "sourceEvidence": {
      "pdfPage": 100,
      "pdfPages": [
        100,
        101
      ],
      "printedPage": 99,
      "sourceStartSeconds": 119.71,
      "sourceEndSeconds": 157.99,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t1-p3"
  },
  {
    "id": "large-c21-t1-listening-015",
    "domain": "listening",
    "stimulusId": "c21-t1-lecture-review",
    "clusterId": "c21-t1-lecture-review",
    "sourceTest": 1,
    "topic": "study",
    "skill": "speaker-attitude",
    "tags": [
      "speaker-attitude"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Recognising a speaker’s evaluation or preference",
      "ru": "Распознавание оценки или предпочтения говорящего"
    },
    "prompt": "Why do the students like the lecturer’s approach to statistics?",
    "choices": [
      "The lecturer deliberately left numerical evidence out of both the talk and supporting materials.",
      "The lecturer used figures instead of making any general points.",
      "The lecturer emphasised what the figures meant without overwhelming the audience.",
      "The lecturer asked students to memorise every figure before discussing it."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "The figures were available, but the talk concentrated on the broader messages they supported.",
      "ru": "Цифры были доступны, но основное внимание уделялось общим выводам, которые они подтверждали."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The figures were available; their meaning was emphasised.",
        "ru": "Цифры были доступны; акцент делался на их смысле."
      },
      {
        "choiceIndex": 1,
        "en": "General conclusions were the focus, not something omitted.",
        "ru": "Общие выводы были в центре внимания, а не отсутствовали."
      },
      {
        "choiceIndex": 3,
        "en": "No memorisation task is described.",
        "ru": "Задание запоминать цифры не описывается."
      }
    ],
    "answerEvidence": "The figures were available, but the talk concentrated on the broader messages they supported.",
    "evidenceTiming": {
      "startSeconds": 100.99,
      "endSeconds": 112.2
    },
    "sourceEvidence": {
      "pdfPage": 101,
      "pdfPages": [
        101
      ],
      "printedPage": 100,
      "sourceStartSeconds": 158.59,
      "sourceEndSeconds": 169.8,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t1-p3"
  },
  {
    "id": "large-c21-t1-listening-016",
    "domain": "listening",
    "stimulusId": "c21-t1-resources",
    "clusterId": "c21-t1-resources",
    "sourceTest": 1,
    "topic": "study",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "Why do the students consider the microplastics documentary less useful now?",
    "choices": [
      "It is too recent to have been checked by experts.",
      "It was made when the subject was much less widely understood.",
      "It contains no discussion of the environmental risks.",
      "It is too long for either student to have finished it."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "Its age matters because awareness of microplastics has changed; one student stopped and the other finished but agreed it felt dated.",
      "ru": "Возраст фильма важен, потому что осведомлённость о микропластике изменилась; один студент прекратил просмотр, другой досмотрел, но согласился, что фильм устарел."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "It was made ten years earlier, not recently.",
        "ru": "Он был снят десять лет назад, а не недавно."
      },
      {
        "choiceIndex": 2,
        "en": "They criticise its age, not a stated absence of all risk discussion.",
        "ru": "Они критикуют устаревание, а не полное отсутствие обсуждения рисков."
      },
      {
        "choiceIndex": 3,
        "en": "One student explicitly watched to the end.",
        "ru": "Один студент прямо говорит, что досмотрел его."
      }
    ],
    "answerEvidence": "Its age matters because awareness of microplastics has changed; one student stopped and the other finished but agreed it felt dated.",
    "evidenceTiming": {
      "startSeconds": 34.38,
      "endSeconds": 54.72
    },
    "sourceEvidence": {
      "pdfPage": 101,
      "pdfPages": [
        101
      ],
      "printedPage": 100,
      "sourceStartSeconds": 43.08,
      "sourceEndSeconds": 63.42,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t1-p3"
  },
  {
    "id": "large-c21-t1-listening-017",
    "domain": "listening",
    "stimulusId": "c21-t1-rubber",
    "clusterId": "c21-t1-rubber",
    "sourceTest": 1,
    "topic": "industry",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "Why can rubber-tree cultivation not simply be expanded into many other regions?",
    "choices": [
      "Plantations must stay close to the factories that process their latex.",
      "The trees can survive only in the country where they originated.",
      "The trees need coastal land with a regular supply of salt water.",
      "The trees require a restricted combination of climate and altitude."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "The lecturer lists temperature, rainfall and altitude requirements, restricting cultivation to areas around the equator.",
      "ru": "Лектор перечисляет требования к температуре, осадкам и высоте, ограничивающие выращивание районами около экватора."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The stated geographical limits are growing conditions, not factory proximity.",
        "ru": "Названные географические ограничения касаются условий роста, а не близости завода."
      },
      {
        "choiceIndex": 1,
        "en": "Trees originated in Brazil but are grown in Southeast Asia.",
        "ru": "Деревья происходят из Бразилии, но выращиваются в Юго-Восточной Азии."
      },
      {
        "choiceIndex": 2,
        "en": "Rainfall, temperature and altitude are listed; salt water is not a requirement.",
        "ru": "Названы осадки, температура и высота; солёная вода не требуется."
      }
    ],
    "answerEvidence": "The lecturer lists temperature, rainfall and altitude requirements, restricting cultivation to areas around the equator.",
    "evidenceTiming": {
      "startSeconds": 74.45,
      "endSeconds": 100.95
    },
    "sourceEvidence": {
      "pdfPage": 102,
      "pdfPages": [
        102
      ],
      "printedPage": 101,
      "sourceStartSeconds": 199,
      "sourceEndSeconds": 225.5,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t1-p4"
  },
  {
    "id": "large-c21-t1-listening-018",
    "domain": "listening",
    "stimulusId": "c21-t1-rubber",
    "clusterId": "c21-t1-rubber",
    "sourceTest": 1,
    "topic": "industry",
    "skill": "explicit-detail",
    "tags": [
      "explicit-detail"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Identifying explicitly stated information",
      "ru": "Поиск прямо названной информации"
    },
    "prompt": "Which feature of rubber extraction is presented as a production constraint?",
    "choices": [
      "It uses a recent fully automated system that often fails.",
      "It requires replacing each tree after a single collection.",
      "Collection can begin only after each tree has been cut down.",
      "Extraction remains labour-intensive because latex is still collected manually."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "Workers cut the trunk and collect latex in small cups; the lecturer calls this labour-intensive.",
      "ru": "Работники делают надрезы на стволе и собирают латекс в небольшие ёмкости; лектор называет процесс трудоёмким."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The described method is old and manual, not new and automated.",
        "ru": "Описанный способ старый и ручной, а не новый и автоматический."
      },
      {
        "choiceIndex": 1,
        "en": "Trees are cut for collection, not said to be replaced each time.",
        "ru": "На деревьях делают надрезы; об их замене после каждого сбора не говорится."
      },
      {
        "choiceIndex": 2,
        "en": "Workers cut the trunk’s surface to collect latex; felling is not described.",
        "ru": "Для сбора латекса надрезают поверхность ствола; вырубка не описывается."
      }
    ],
    "answerEvidence": "Workers cut the trunk and collect latex in small cups; the lecturer calls this labour-intensive.",
    "evidenceTiming": {
      "startSeconds": 100.95,
      "endSeconds": 125.34
    },
    "sourceEvidence": {
      "pdfPage": 102,
      "pdfPages": [
        102
      ],
      "printedPage": 101,
      "sourceStartSeconds": 225.5,
      "sourceEndSeconds": 249.89,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t1-p4"
  },
  {
    "id": "large-c21-t1-listening-019",
    "domain": "listening",
    "stimulusId": "c21-t1-rubber-alternatives",
    "clusterId": "c21-t1-rubber-alternatives",
    "sourceTest": 1,
    "topic": "industry",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "Why does the ancestry of many Southeast Asian rubber trees create a risk?",
    "choices": [
      "The original seeds were selected for yield without checking their industrial quality.",
      "Their ancestry prevents the trees from growing in plantations.",
      "Their ancestors grew too slowly to produce usable rubber.",
      "Their limited genetic variety makes a disease potentially widespread."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "Many trees descend from a small original seed stock, leaving little genetic diversity and greater vulnerability to disease.",
      "ru": "Многие деревья происходят от небольшого исходного набора семян, поэтому генетическое разнообразие мало и уязвимость к болезням выше."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The account links the small seed stock to low diversity, not poor rubber quality.",
        "ru": "В записи малое число семян связано с низким разнообразием, а не плохим каучуком."
      },
      {
        "choiceIndex": 1,
        "en": "They already grow on plantations.",
        "ru": "Их уже выращивают на плантациях."
      },
      {
        "choiceIndex": 2,
        "en": "The point is disease vulnerability, not the ancestors’ growth rate.",
        "ru": "Речь об уязвимости к болезням, а не о скорости роста предков."
      }
    ],
    "answerEvidence": "Many trees descend from a small original seed stock, leaving little genetic diversity and greater vulnerability to disease.",
    "evidenceTiming": {
      "startSeconds": 6.83,
      "endSeconds": 42.21
    },
    "sourceEvidence": {
      "pdfPage": 102,
      "pdfPages": [
        102
      ],
      "printedPage": 101,
      "sourceStartSeconds": 277.63,
      "sourceEndSeconds": 313.01,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t1-p4"
  },
  {
    "id": "large-c21-t1-listening-020",
    "domain": "listening",
    "stimulusId": "c21-t1-rubber-alternatives",
    "clusterId": "c21-t1-rubber-alternatives",
    "sourceTest": 1,
    "topic": "industry",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "What encourages some farmers to replace rubber cultivation with palm oil?",
    "choices": [
      "Farmers find palm oil easier to cultivate and more financially rewarding.",
      "Palm-oil harvests require less labour but bring farmers lower financial returns.",
      "Palm oil allows farmers to meet demand for the same industrial rubber products.",
      "New regulations require rubber plantations to be converted to palm-oil production."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "The lecturer gives ease of cultivation and profitability as the reasons for the switch.",
      "ru": "Лектор объясняет переход простотой выращивания и большей прибыльностью."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "The lecturer says the alternative is more profitable, not less.",
        "ru": "Лектор говорит о большей, а не меньшей прибыльности."
      },
      {
        "choiceIndex": 2,
        "en": "The speaker presents palm oil as an alternative crop, not a rubber substitute.",
        "ru": "Пальмовое масло названо другой культурой, а не заменой каучука."
      },
      {
        "choiceIndex": 3,
        "en": "No compulsory regulation is mentioned.",
        "ru": "Обязательное регулирование не упоминается."
      }
    ],
    "answerEvidence": "The lecturer gives ease of cultivation and profitability as the reasons for the switch.",
    "evidenceTiming": {
      "startSeconds": 42.21,
      "endSeconds": 58.23
    },
    "sourceEvidence": {
      "pdfPage": 102,
      "pdfPages": [
        102
      ],
      "printedPage": 101,
      "sourceStartSeconds": 313.01,
      "sourceEndSeconds": 329.03,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t1-p4"
  },
  {
    "id": "large-c21-t1-listening-021",
    "domain": "listening",
    "stimulusId": "c21-t1-rubber-alternatives",
    "clusterId": "c21-t1-rubber-alternatives",
    "sourceTest": 1,
    "topic": "industry",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "What limits the replacement of natural rubber by synthetic rubber?",
    "choices": [
      "Synthetic rubber cannot be used in any product exposed to heat.",
      "Synthetic rubber can already replace natural rubber in every tyre.",
      "It lacks the strength that certain demanding industrial applications require.",
      "Synthetic manufacture depends on the same limited supply of plantation latex."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "Some engine and kitchen products suit synthetic rubber, but aircraft tyres require the strength of natural rubber.",
      "ru": "Синтетический каучук подходит для некоторых деталей двигателей и кухонных изделий, но авиационным шинам нужна прочность натурального."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Cooking equipment is one of the examples where it works.",
        "ru": "Кухонная посуда приведена как пример успешного использования."
      },
      {
        "choiceIndex": 1,
        "en": "Aircraft tyres are explicitly a case where replacement does not work.",
        "ru": "Авиационные шины прямо названы случаем, где замена не подходит."
      },
      {
        "choiceIndex": 3,
        "en": "Synthetic rubber is contrasted with natural rubber, not described as dependent on plantation latex.",
        "ru": "Синтетический каучук противопоставляется натуральному, а не описывается как зависимый от латекса плантаций."
      }
    ],
    "answerEvidence": "Some engine and kitchen products suit synthetic rubber, but aircraft tyres require the strength of natural rubber.",
    "evidenceTiming": {
      "startSeconds": 79.12,
      "endSeconds": 121.6
    },
    "sourceEvidence": {
      "pdfPage": 102,
      "pdfPages": [
        102
      ],
      "printedPage": 101,
      "sourceStartSeconds": 349.92,
      "sourceEndSeconds": 392.4,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t1-p4"
  },
  {
    "id": "large-c21-t1-listening-022",
    "domain": "listening",
    "stimulusId": "c21-t1-rubber-alternatives",
    "clusterId": "c21-t1-rubber-alternatives",
    "sourceTest": 1,
    "topic": "industry",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "Why are dandelions still of interest despite producing relatively little rubber?",
    "choices": [
      "They produce more rubber per plant than rubber trees.",
      "Their adaptability partly offsets their relatively small rubber yield.",
      "They need the same narrow climate conditions as rubber trees.",
      "They have already replaced plantation trees in most countries."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "Their small yield is balanced against adaptability and modest soil requirements; research is still underway.",
      "ru": "Небольшой выход каучука сопоставляется с приспособляемостью и невысокими требованиями к почве; исследования продолжаются."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The lecturer explicitly says their yield is smaller.",
        "ru": "Лектор прямо говорит, что выход у них меньше."
      },
      {
        "choiceIndex": 2,
        "en": "Their greater adaptability is the contrast with rubber trees.",
        "ru": "Их большая приспособляемость как раз противопоставляется каучуковым деревьям."
      },
      {
        "choiceIndex": 3,
        "en": "Projects are investigating the possibility, not reporting universal replacement.",
        "ru": "Проекты изучают возможность использования, а не сообщают о повсеместной замене."
      }
    ],
    "answerEvidence": "Their small yield is balanced against adaptability and modest soil requirements; research is still underway.",
    "evidenceTiming": {
      "startSeconds": 150.6,
      "endSeconds": 181.02
    },
    "sourceEvidence": {
      "pdfPage": 102,
      "pdfPages": [
        102,
        103
      ],
      "printedPage": 101,
      "sourceStartSeconds": 421.4,
      "sourceEndSeconds": 451.82,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t1-p4"
  },
  {
    "id": "large-c21-t2-listening-001",
    "domain": "listening",
    "stimulusId": "c21-t2-courses-food",
    "clusterId": "c21-t2-courses-food",
    "sourceTest": 2,
    "topic": "courses",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "Why does the caller think she may need to make a booking soon?",
    "choices": [
      "Some of the classes may run out of places.",
      "All courses become more expensive after January.",
      "Her replacement information leaflet must arrive before she can register for a class.",
      "The college is about to stop offering one-day classes."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "She has heard that places are filling quickly, which creates urgency even though she has not yet chosen a class.",
      "ru": "Она слышала, что места быстро занимают, поэтому торопится, хотя ещё не выбрала занятие."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "No general price increase is mentioned.",
        "ru": "Общее повышение цен не упоминается."
      },
      {
        "choiceIndex": 2,
        "en": "The lost leaflet prompts the enquiry; it is not a registration requirement.",
        "ru": "Потеря листовки вызывает звонок; её наличие не является условием записи."
      },
      {
        "choiceIndex": 3,
        "en": "No closure of the programme is announced.",
        "ru": "О закрытии программы не сообщается."
      }
    ],
    "answerEvidence": "She has heard that places are filling quickly, which creates urgency even though she has not yet chosen a class.",
    "evidenceTiming": {
      "startSeconds": 5.93,
      "endSeconds": 24.59
    },
    "sourceEvidence": {
      "pdfPage": 103,
      "pdfPages": [
        103
      ],
      "printedPage": 102,
      "sourceStartSeconds": 97.33,
      "sourceEndSeconds": 115.99,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p1"
  },
  {
    "id": "large-c21-t2-listening-002",
    "domain": "listening",
    "stimulusId": "c21-t2-courses-food",
    "clusterId": "c21-t2-courses-food",
    "sourceTest": 2,
    "topic": "courses",
    "skill": "change-of-plan",
    "tags": [
      "change-of-plan"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Distinguishing an earlier position from a later change",
      "ru": "Различение исходной позиции и последующего изменения"
    },
    "prompt": "What happens after the caller asks about the Vietnamese cooking class?",
    "choices": [
      "She asks the college to move the class to a new date.",
      "She accepts a cancellation place at the corrected price.",
      "She reserves two places while choosing a second class.",
      "She declines a waiting-list place and asks about another class."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "The class is full. The man offers a waiting list, but she declines and moves on to bread making.",
      "ru": "Класс заполнен. Мужчина предлагает лист ожидания, но она отказывается и переходит к выпечке хлеба."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "She does not request a date change.",
        "ru": "Она не просит изменить дату."
      },
      {
        "choiceIndex": 1,
        "en": "No cancellation place is offered or accepted.",
        "ru": "Освободившееся место не предлагают и не подтверждают."
      },
      {
        "choiceIndex": 2,
        "en": "She does not reserve any Vietnamese class places.",
        "ru": "Она не бронирует места на вьетнамскую кухню."
      }
    ],
    "answerEvidence": "The class is full. The man offers a waiting list, but she declines and moves on to bread making.",
    "evidenceTiming": {
      "startSeconds": 38.29,
      "endSeconds": 67.67
    },
    "sourceEvidence": {
      "pdfPage": 103,
      "pdfPages": [
        103
      ],
      "printedPage": 102,
      "sourceStartSeconds": 129.69,
      "sourceEndSeconds": 159.07,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p1"
  },
  {
    "id": "large-c21-t2-listening-003",
    "domain": "listening",
    "stimulusId": "c21-t2-courses-food",
    "clusterId": "c21-t2-courses-food",
    "sourceTest": 2,
    "topic": "courses",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "What should the caller understand about the quoted bread-making fee?",
    "choices": [
      "The quoted fee already includes every ingredient.",
      "The fee depends entirely on how many pizzas she makes.",
      "Ingredients cost extra, but the exact charge is uncertain.",
      "The additional payment is definitely more than the class fee."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "The class costs £48 plus ingredients. The man gives only a tentative upper estimate for that extra charge.",
      "ru": "Занятие стоит 48 фунтов плюс ингредиенты. Дополнительную плату мужчина оценивает лишь приблизительно."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "He explicitly separates the ingredient charge.",
        "ru": "Он прямо выделяет отдельную плату за ингредиенты."
      },
      {
        "choiceIndex": 1,
        "en": "No per-pizza pricing is described.",
        "ru": "Оплата за каждую пиццу не описывается."
      },
      {
        "choiceIndex": 3,
        "en": "His estimate is no more than £20, below the £48 fee.",
        "ru": "Он предполагает не больше 20 фунтов, что меньше платы 48 фунтов."
      }
    ],
    "answerEvidence": "The class costs £48 plus ingredients. The man gives only a tentative upper estimate for that extra charge.",
    "evidenceTiming": {
      "startSeconds": 75.05,
      "endSeconds": 87.89
    },
    "sourceEvidence": {
      "pdfPage": 103,
      "pdfPages": [
        103
      ],
      "printedPage": 102,
      "sourceStartSeconds": 166.45,
      "sourceEndSeconds": 179.29,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p1"
  },
  {
    "id": "large-c21-t2-listening-004",
    "domain": "listening",
    "stimulusId": "c21-t2-courses-food",
    "clusterId": "c21-t2-courses-food",
    "sourceTest": 2,
    "topic": "courses",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "Why are participants asked to bring a mirror to the face-massage class?",
    "choices": [
      "They practise on themselves and need to see their movements.",
      "They practise on a partner and must check the partner’s expression.",
      "The tutor demonstrates movements through mirrors rather than facing the group.",
      "They need to compare their reflections before and after the full course."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "The mirror lets learners watch what they are doing while practising the technique on their own faces.",
      "ru": "Зеркало позволяет видеть свои действия при отработке техники на собственном лице."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "The technique is practised on oneself, not a partner.",
        "ru": "Технику отрабатывают на себе, а не на партнёре."
      },
      {
        "choiceIndex": 2,
        "en": "Participants use mirrors to watch their own practice.",
        "ru": "Участники смотрят в зеркало на собственную практику."
      },
      {
        "choiceIndex": 3,
        "en": "The stated reason is seeing what they are doing during practice.",
        "ru": "Названная причина — видеть свои действия во время практики."
      }
    ],
    "answerEvidence": "The mirror lets learners watch what they are doing while practising the technique on their own faces.",
    "evidenceTiming": {
      "startSeconds": 130.11,
      "endSeconds": 147.41
    },
    "sourceEvidence": {
      "pdfPage": 103,
      "pdfPages": [
        103
      ],
      "printedPage": 102,
      "sourceStartSeconds": 221.51,
      "sourceEndSeconds": 238.81,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p1"
  },
  {
    "id": "large-c21-t2-listening-005",
    "domain": "listening",
    "stimulusId": "c21-t2-courses-crafts",
    "clusterId": "c21-t2-courses-crafts",
    "sourceTest": 2,
    "topic": "courses",
    "skill": "change-of-plan",
    "tags": [
      "change-of-plan"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Distinguishing an earlier position from a later change",
      "ru": "Различение исходной позиции и последующего изменения"
    },
    "prompt": "Which detail about the candle-making class has been revised?",
    "choices": [
      "Its date has moved from January to April.",
      "Its remaining places have all been cancelled.",
      "Its natural ingredients have been replaced by artificial ones.",
      "Its fee has risen from £52 to £110."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "The man checks the schedule and explains that the April date replaces an earlier January date.",
      "ru": "Мужчина проверяет расписание и объясняет, что апрельская дата заменила январскую."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "A few places are still available.",
        "ru": "Несколько мест ещё есть."
      },
      {
        "choiceIndex": 2,
        "en": "Natural materials remain a reason for the class’s popularity.",
        "ru": "Натуральные материалы по-прежнему названы причиной популярности."
      },
      {
        "choiceIndex": 3,
        "en": "£110 refers to a different silk-painting class used for comparison.",
        "ru": "110 фунтов — цена другого курса росписи по шёлку для сравнения."
      }
    ],
    "answerEvidence": "The man checks the schedule and explains that the April date replaces an earlier January date.",
    "evidenceTiming": {
      "startSeconds": 0.32,
      "endSeconds": 16.74
    },
    "sourceEvidence": {
      "pdfPage": 103,
      "pdfPages": [
        103
      ],
      "printedPage": 102,
      "sourceStartSeconds": 281.82,
      "sourceEndSeconds": 298.24,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p1"
  },
  {
    "id": "large-c21-t2-listening-006",
    "domain": "listening",
    "stimulusId": "c21-t2-courses-crafts",
    "clusterId": "c21-t2-courses-crafts",
    "sourceTest": 2,
    "topic": "courses",
    "skill": "explicit-detail",
    "tags": [
      "explicit-detail"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Identifying explicitly stated information",
      "ru": "Поиск прямо названной информации"
    },
    "prompt": "What does the caller say when the candle-making class is discussed?",
    "choices": [
      "She had to cancel her own place in the January class.",
      "A friend gave her a candle made after attending the class.",
      "She used the same natural-material technique when teaching a candle-making course herself.",
      "She disliked a candle bought from the college shop."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "Her friend attended and said the candles made good gifts; the caller had received one herself.",
      "ru": "Её подруга посещала курс и считала свечи хорошими подарками; одну она подарила самой звонящей."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The schedule changed, but the caller does not report cancelling a booking.",
        "ru": "Расписание изменилось, но звонящая не говорит, что отменяла запись."
      },
      {
        "choiceIndex": 2,
        "en": "She reports her friend’s attendance, not teaching the class herself.",
        "ru": "Она рассказывает о посещении подругой, а не о собственном преподавании."
      },
      {
        "choiceIndex": 3,
        "en": "The candle was a gift, and no dislike is expressed.",
        "ru": "Свечу подарили; недовольство ею не выражается."
      }
    ],
    "answerEvidence": "Her friend attended and said the candles made good gifts; the caller had received one herself.",
    "evidenceTiming": {
      "startSeconds": 17.54,
      "endSeconds": 46.86
    },
    "sourceEvidence": {
      "pdfPage": 103,
      "pdfPages": [
        103,
        104
      ],
      "printedPage": 102,
      "sourceStartSeconds": 299.04,
      "sourceEndSeconds": 328.36,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p1"
  },
  {
    "id": "large-c21-t2-listening-007",
    "domain": "listening",
    "stimulusId": "c21-t2-courses-crafts",
    "clusterId": "c21-t2-courses-crafts",
    "sourceTest": 2,
    "topic": "courses",
    "skill": "explicit-detail",
    "tags": [
      "explicit-detail"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Identifying explicitly stated information",
      "ru": "Поиск прямо названной информации"
    },
    "prompt": "What must a silk-painting participant provide?",
    "choices": [
      "A special set of dyes bought from the teacher.",
      "Enough silk for every learner in the group.",
      "Something to keep dye off their clothes.",
      "A finished scarf to copy during the lesson."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "The man says silk is not required from participants, but an apron or old shirt is needed because dye can stain clothing.",
      "ru": "Мужчина говорит, что приносить шёлк не нужно, но нужен фартук или старая рубашка: краситель оставляет пятна."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "He does not tell participants to buy a dye set.",
        "ru": "Он не требует покупать набор красителей."
      },
      {
        "choiceIndex": 1,
        "en": "He rejects the caller’s suggestion that she must bring silk.",
        "ru": "Он отвергает предположение, что нужно принести шёлк."
      },
      {
        "choiceIndex": 3,
        "en": "A scarf is an example of an outcome, not something to bring.",
        "ru": "Шарф — пример результата, а не обязательная вещь с собой."
      }
    ],
    "answerEvidence": "The man says silk is not required from participants, but an apron or old shirt is needed because dye can stain clothing.",
    "evidenceTiming": {
      "startSeconds": 78.5,
      "endSeconds": 96.36
    },
    "sourceEvidence": {
      "pdfPage": 104,
      "pdfPages": [
        104
      ],
      "printedPage": 103,
      "sourceStartSeconds": 360,
      "sourceEndSeconds": 377.86,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p1"
  },
  {
    "id": "large-c21-t2-listening-008",
    "domain": "listening",
    "stimulusId": "c21-t2-courses-crafts",
    "clusterId": "c21-t2-courses-crafts",
    "sourceTest": 2,
    "topic": "courses",
    "skill": "sequence",
    "tags": [
      "sequence"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Following events, procedures or proposed actions in order",
      "ru": "Понимание порядка событий, процедур или действий"
    },
    "prompt": "How is the practical work in the DIY class organised?",
    "choices": [
      "Learners choose advanced electrical repairs instead of basic tasks.",
      "Learners build a shelf before receiving any tool instruction.",
      "Tool practice comes before attaching a shelf to a wall.",
      "Learners watch repairs but do not handle tools themselves."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "Tool use comes first; fixing a shelf to a wall is the following practical application.",
      "ru": "Сначала осваивают инструменты, затем применяют их, закрепляя полку на стене."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The course is for beginners and no advanced electrical task is offered.",
        "ru": "Курс для новичков; сложные электромонтажные работы не предлагаются."
      },
      {
        "choiceIndex": 1,
        "en": "This reverses the stated order.",
        "ru": "Здесь перепутан названный порядок."
      },
      {
        "choiceIndex": 3,
        "en": "The class includes practical tool use and a job.",
        "ru": "Занятие включает практическое использование инструментов."
      }
    ],
    "answerEvidence": "Tool use comes first; fixing a shelf to a wall is the following practical application.",
    "evidenceTiming": {
      "startSeconds": 119.32,
      "endSeconds": 148.62
    },
    "sourceEvidence": {
      "pdfPage": 104,
      "pdfPages": [
        104
      ],
      "printedPage": 103,
      "sourceStartSeconds": 400.82,
      "sourceEndSeconds": 430.12,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p1"
  },
  {
    "id": "large-c21-t2-listening-009",
    "domain": "listening",
    "stimulusId": "c21-t2-walks",
    "clusterId": "c21-t2-walks",
    "sourceTest": 2,
    "topic": "travel",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "Why is the coastal route described as suitable for families?",
    "choices": [
      "It avoids demanding uphill sections.",
      "It remains inside the town throughout.",
      "It provides a guide for every family.",
      "It can only be completed by taking a ferry."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "The speaker explicitly links family suitability with the absence of strenuous climbs.",
      "ru": "Говорящий прямо связывает пригодность маршрута для семей с отсутствием тяжёлых подъёмов."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "The walk follows a coastal route and turns inland near a castle.",
        "ru": "Маршрут идёт вдоль берега и немного уходит вглубь к замку."
      },
      {
        "choiceIndex": 2,
        "en": "No individual guide service is mentioned.",
        "ru": "Индивидуальное сопровождение не упоминается."
      },
      {
        "choiceIndex": 3,
        "en": "The ferry is a nearby option, not a requirement for the walk.",
        "ru": "Паром — соседняя возможность, а не обязательная часть прогулки."
      }
    ],
    "answerEvidence": "The speaker explicitly links family suitability with the absence of strenuous climbs.",
    "evidenceTiming": {
      "startSeconds": 13.8,
      "endSeconds": 21.78
    },
    "sourceEvidence": {
      "pdfPage": 104,
      "pdfPages": [
        104
      ],
      "printedPage": 103,
      "sourceStartSeconds": 59.5,
      "sourceEndSeconds": 67.48,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p2"
  },
  {
    "id": "large-c21-t2-listening-010",
    "domain": "listening",
    "stimulusId": "c21-t2-walks",
    "clusterId": "c21-t2-walks",
    "sourceTest": 2,
    "topic": "travel",
    "skill": "explicit-detail",
    "tags": [
      "explicit-detail"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Identifying explicitly stated information",
      "ru": "Поиск прямо названной информации"
    },
    "prompt": "What helps walkers understand the castle even though little of it remains?",
    "choices": [
      "A reconstructed interior is open for guided tours.",
      "The old market stalls beside it still demonstrate traditional trading.",
      "Information displays show how it used to look.",
      "The route map contains photographs of every room."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "The castle is now largely stones, but information boards explain its former appearance.",
      "ru": "От замка в основном остались камни, но информационные стенды показывают его прежний облик."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "No reconstructed interior or tours are described.",
        "ru": "Восстановленные помещения и экскурсии не описаны."
      },
      {
        "choiceIndex": 1,
        "en": "The market town has vanished.",
        "ru": "Рыночный город исчез."
      },
      {
        "choiceIndex": 3,
        "en": "The speaker says a map is unnecessary; the boards provide the explanation.",
        "ru": "Карта не обязательна; сведения дают стенды."
      }
    ],
    "answerEvidence": "The castle is now largely stones, but information boards explain its former appearance.",
    "evidenceTiming": {
      "startSeconds": 35.36,
      "endSeconds": 59.56
    },
    "sourceEvidence": {
      "pdfPage": 104,
      "pdfPages": [
        104
      ],
      "printedPage": 103,
      "sourceStartSeconds": 81.06,
      "sourceEndSeconds": 105.26,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p2"
  },
  {
    "id": "large-c21-t2-listening-011",
    "domain": "listening",
    "stimulusId": "c21-t2-walks",
    "clusterId": "c21-t2-walks",
    "sourceTest": 2,
    "topic": "travel",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "How does the speaker contrast the heritage route at night and during the day?",
    "choices": [
      "Night visitors cannot enter; daytime visitors need special tickets.",
      "Night visitors climb the castle; daytime walkers take the island ferry.",
      "Night visitors need guides; daytime walkers follow a crowded market.",
      "Night visitors photograph stars; daytime walkers experience quiet woodland."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "The high viewpoint attracts night-sky photographers, while the wooded valley is described as very quiet in daylight.",
      "ru": "Высокая точка привлекает фотографов ночного неба, а лесная долина днём описывается как очень тихая."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "No night closure or special ticket rule is given.",
        "ru": "Запрет ночного посещения и особые билеты не названы."
      },
      {
        "choiceIndex": 1,
        "en": "Castle and ferry details belong to the coastal route.",
        "ru": "Замок и паром относятся к прибрежному маршруту."
      },
      {
        "choiceIndex": 2,
        "en": "Neither night guides nor a daytime market are stated.",
        "ru": "Ни ночные проводники, ни дневной рынок не упоминаются."
      }
    ],
    "answerEvidence": "The high viewpoint attracts night-sky photographers, while the wooded valley is described as very quiet in daylight.",
    "evidenceTiming": {
      "startSeconds": 66.3,
      "endSeconds": 93.02
    },
    "sourceEvidence": {
      "pdfPage": 104,
      "pdfPages": [
        104
      ],
      "printedPage": 103,
      "sourceStartSeconds": 112,
      "sourceEndSeconds": 138.72,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p2"
  },
  {
    "id": "large-c21-t2-listening-012",
    "domain": "listening",
    "stimulusId": "c21-t2-walks",
    "clusterId": "c21-t2-walks",
    "sourceTest": 2,
    "topic": "travel",
    "skill": "sequence",
    "tags": [
      "sequence"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Following events, procedures or proposed actions in order",
      "ru": "Понимание порядка событий, процедур или действий"
    },
    "prompt": "Where does the heritage walk finish?",
    "choices": [
      "Back at the mine’s original car-park starting point.",
      "At the remains of the market town.",
      "On the island reached from the harbour.",
      "At the tower on the highest point."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "After following the hilltops, the route descends to its starting point at the mine car park.",
      "ru": "После пути по вершинам холмов маршрут спускается к исходной точке — парковке у шахты."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "The vanished town is near the other route’s castle.",
        "ru": "Исчезнувший город находится у замка на другом маршруте."
      },
      {
        "choiceIndex": 2,
        "en": "The island belongs to the separate coastal description.",
        "ru": "Остров упоминается в отдельном описании побережья."
      },
      {
        "choiceIndex": 3,
        "en": "Climbing the tower is optional, not the finishing point.",
        "ru": "Подъём на башню необязателен и не является финишем."
      }
    ],
    "answerEvidence": "After following the hilltops, the route descends to its starting point at the mine car park.",
    "evidenceTiming": {
      "startSeconds": 93.28,
      "endSeconds": 111.96
    },
    "sourceEvidence": {
      "pdfPage": 104,
      "pdfPages": [
        104
      ],
      "printedPage": 103,
      "sourceStartSeconds": 138.98,
      "sourceEndSeconds": 157.66,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p2"
  },
  {
    "id": "large-c21-t2-listening-013",
    "domain": "listening",
    "stimulusId": "c21-t2-mine",
    "clusterId": "c21-t2-mine",
    "sourceTest": 2,
    "topic": "travel",
    "skill": "sequence",
    "tags": [
      "sequence"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Following events, procedures or proposed actions in order",
      "ru": "Понимание порядка событий, процедур или действий"
    },
    "prompt": "What can visitors do immediately before entering the historical exhibition?",
    "choices": [
      "Leave heavy bags and borrow raincoats after passing the ticket office.",
      "Wash in the bathhouse before buying a ticket.",
      "Visit the pony field through the covered walkway.",
      "Collect examples of early hand tools from the northern display building."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "The exhibition lies beyond the room with lockers and raincoats, which is reached through the ticket office.",
      "ru": "Выставка находится за помещением со шкафчиками и плащами, куда проходят через кассу."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "The bathhouse is a separate historical display.",
        "ru": "Баня — отдельный исторический объект."
      },
      {
        "choiceIndex": 2,
        "en": "The pony field has no covered-walkway approach.",
        "ru": "К полю с пони нет крытого перехода."
      },
      {
        "choiceIndex": 3,
        "en": "Tools are exhibited separately, not collected before entering the history exhibition.",
        "ru": "Инструменты выставлены отдельно, а не выдаются перед входом на историческую выставку."
      }
    ],
    "answerEvidence": "The exhibition lies beyond the room with lockers and raincoats, which is reached through the ticket office.",
    "evidenceTiming": {
      "startSeconds": 14.9,
      "endSeconds": 38.22
    },
    "sourceEvidence": {
      "pdfPage": 105,
      "pdfPages": [
        105
      ],
      "printedPage": 104,
      "sourceStartSeconds": 23.8,
      "sourceEndSeconds": 47.12,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p2"
  },
  {
    "id": "large-c21-t2-listening-014",
    "domain": "listening",
    "stimulusId": "c21-t2-mine",
    "clusterId": "c21-t2-mine",
    "sourceTest": 2,
    "topic": "travel",
    "skill": "explicit-detail",
    "tags": [
      "explicit-detail"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Identifying explicitly stated information",
      "ru": "Поиск прямо названной информации"
    },
    "prompt": "Which original feature can visitors still see in the bathhouse?",
    "choices": [
      "A collection of high-tech cutting machines.",
      "The boiler still heating water for miners.",
      "Rows of metal baths on a stone floor.",
      "Wooden changing lockers arranged above a recently tiled floor."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "The boiler has been removed, but the rows of tin baths remain.",
      "ru": "Котёл убрали, но ряды жестяных ванн сохранились."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Cutting machines are in the vehicle shed.",
        "ru": "Режущие машины находятся в сарае для техники."
      },
      {
        "choiceIndex": 1,
        "en": "The speaker explicitly says the boiler has gone.",
        "ru": "Говорящий прямо отмечает, что котла больше нет."
      },
      {
        "choiceIndex": 3,
        "en": "The preserved objects mentioned are tin baths on stone, not lockers and tiles.",
        "ru": "Упомянуты жестяные ванны на камне, а не шкафчики и плитка."
      }
    ],
    "answerEvidence": "The boiler has been removed, but the rows of tin baths remain.",
    "evidenceTiming": {
      "startSeconds": 39.36,
      "endSeconds": 55.1
    },
    "sourceEvidence": {
      "pdfPage": 105,
      "pdfPages": [
        105
      ],
      "printedPage": 104,
      "sourceStartSeconds": 48.26,
      "sourceEndSeconds": 64,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p2"
  },
  {
    "id": "large-c21-t2-listening-015",
    "domain": "listening",
    "stimulusId": "c21-t2-mine",
    "clusterId": "c21-t2-mine",
    "sourceTest": 2,
    "topic": "travel",
    "skill": "inference",
    "tags": [
      "inference"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Drawing an inference supported by the recording",
      "ru": "Вывод, опирающийся на содержание записи"
    },
    "prompt": "What is the speaker inviting visitors to appreciate in the early-tools display?",
    "choices": [
      "How much electricity early miners needed for each tool.",
      "How little physical effort mining required before machinery.",
      "How quickly modern machines replaced all underground workers.",
      "The effort needed to cut rock with hand tools."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "The speaker expresses amazement that hand implements could be used to cut through rock.",
      "ru": "Говорящий выражает удивление тем, что горняки могли пробивать породу ручными инструментами."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Electricity use is not discussed.",
        "ru": "Потребление электричества не обсуждается."
      },
      {
        "choiceIndex": 1,
        "en": "This reverses the point about demanding manual work.",
        "ru": "Это противоречит мысли о тяжёлом ручном труде."
      },
      {
        "choiceIndex": 2,
        "en": "The display concerns the period before mechanisation, not a replacement timeline.",
        "ru": "Выставка относится к времени до механизации, а не к срокам замены работников."
      }
    ],
    "answerEvidence": "The speaker expresses amazement that hand implements could be used to cut through rock.",
    "evidenceTiming": {
      "startSeconds": 56.42,
      "endSeconds": 73.5
    },
    "sourceEvidence": {
      "pdfPage": 105,
      "pdfPages": [
        105
      ],
      "printedPage": 104,
      "sourceStartSeconds": 65.32,
      "sourceEndSeconds": 82.4,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p2"
  },
  {
    "id": "large-c21-t2-listening-016",
    "domain": "listening",
    "stimulusId": "c21-t2-mine",
    "clusterId": "c21-t2-mine",
    "sourceTest": 2,
    "topic": "travel",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "Who can use the education centre?",
    "choices": [
      "Only researchers who reserve the library in advance.",
      "Only schoolchildren accompanied by a mining teacher.",
      "Both school groups and members of the general public.",
      "Visitors who have already completed both walking routes."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "Although school groups use it, the centre is also open to the public and contains a library and gift shop.",
      "ru": "Центром пользуются школьные группы, но он открыт и остальным посетителям; там есть библиотека и магазин."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "No researcher-only reservation condition is stated.",
        "ru": "Условие записи только для исследователей не названо."
      },
      {
        "choiceIndex": 1,
        "en": "The public is explicitly included.",
        "ru": "Остальные посетители прямо включены."
      },
      {
        "choiceIndex": 3,
        "en": "Completing the walking routes is not required.",
        "ru": "Проходить оба пеших маршрута не требуется."
      }
    ],
    "answerEvidence": "Although school groups use it, the centre is also open to the public and contains a library and gift shop.",
    "evidenceTiming": {
      "startSeconds": 100.7,
      "endSeconds": 119.76
    },
    "sourceEvidence": {
      "pdfPage": 105,
      "pdfPages": [
        105
      ],
      "printedPage": 104,
      "sourceStartSeconds": 109.6,
      "sourceEndSeconds": 128.66,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p2"
  },
  {
    "id": "large-c21-t2-listening-017",
    "domain": "listening",
    "stimulusId": "c21-t2-food-course",
    "clusterId": "c21-t2-food-course",
    "sourceTest": 2,
    "topic": "study",
    "skill": "explicit-detail",
    "tags": [
      "explicit-detail"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Identifying explicitly stated information",
      "ru": "Поиск прямо названной информации"
    },
    "prompt": "Which point was new to both students in the food-safety sessions?",
    "choices": [
      "The food-chain connection between animal antibiotics and human resistance.",
      "That obesity rates have been receiving attention in the news.",
      "That resistance to antibiotics exists at all.",
      "That plastic packaging can pollute the ocean."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "They knew resistance was increasing but had not understood the food-chain connection.",
      "ru": "Они знали о росте устойчивости, но не понимали связь с пищевой цепью."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "Obesity coverage is identified as familiar.",
        "ru": "Новости об ожирении названы знакомыми."
      },
      {
        "choiceIndex": 2,
        "en": "Nadia already knew resistance was increasing.",
        "ru": "Надя уже знала, что устойчивость растёт."
      },
      {
        "choiceIndex": 3,
        "en": "They say most students already knew about plastic pollution.",
        "ru": "Они говорят, что большинство уже знало о пластиковом загрязнении."
      }
    ],
    "answerEvidence": "They knew resistance was increasing but had not understood the food-chain connection.",
    "evidenceTiming": {
      "startSeconds": 21,
      "endSeconds": 52.42
    },
    "sourceEvidence": {
      "pdfPage": 105,
      "pdfPages": [
        105
      ],
      "printedPage": 104,
      "sourceStartSeconds": 76.3,
      "sourceEndSeconds": 107.72,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p3"
  },
  {
    "id": "large-c21-t2-listening-018",
    "domain": "listening",
    "stimulusId": "c21-t2-food-course",
    "clusterId": "c21-t2-food-course",
    "sourceTest": 2,
    "topic": "study",
    "skill": "speaker-attitude",
    "tags": [
      "speaker-attitude"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Recognising a speaker’s evaluation or preference",
      "ru": "Распознавание оценки или предпочтения говорящего"
    },
    "prompt": "What change does Fergus suggest to the course coverage?",
    "choices": [
      "Spend longer discussing unnecessary disposal of supposedly out-of-date food.",
      "Stop discussing ocean pollution because it is unrelated to food.",
      "Remove the topic of food waste because it has been covered too often.",
      "Replace all safety sessions with reports on obesity."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "He says unnecessary disposal received only a passing mention and deserved more discussion.",
      "ru": "Он считает, что ненужное выбрасывание еды упомянули лишь вскользь, хотя оно заслуживает большего внимания."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "He notes familiar coverage, not that pollution is unrelated.",
        "ru": "Он отмечает знакомость темы, а не отсутствие связи с едой."
      },
      {
        "choiceIndex": 2,
        "en": "He asks for more coverage, not removal.",
        "ru": "Он просит расширить тему, а не убрать её."
      },
      {
        "choiceIndex": 3,
        "en": "No replacement of every safety session is proposed.",
        "ru": "Он не предлагает заменять все занятия по безопасности."
      }
    ],
    "answerEvidence": "He says unnecessary disposal received only a passing mention and deserved more discussion.",
    "evidenceTiming": {
      "startSeconds": 52.42,
      "endSeconds": 74.1
    },
    "sourceEvidence": {
      "pdfPage": 105,
      "pdfPages": [
        105
      ],
      "printedPage": 104,
      "sourceStartSeconds": 107.72,
      "sourceEndSeconds": 129.4,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p3"
  },
  {
    "id": "large-c21-t2-listening-019",
    "domain": "listening",
    "stimulusId": "c21-t2-food-course",
    "clusterId": "c21-t2-food-course",
    "sourceTest": 2,
    "topic": "study",
    "skill": "inference",
    "tags": [
      "inference"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Drawing an inference supported by the recording",
      "ru": "Вывод, опирающийся на содержание записи"
    },
    "prompt": "What was the distinctive contribution of the food-fraud project?",
    "choices": [
      "Inventing DNA analysis for the first time.",
      "Using established DNA tests throughout the food supply chain.",
      "Testing food only after consumers reported becoming ill.",
      "Replacing ingredient checks with customer opinion surveys."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "The testing technology already existed; the innovation was using it at different stages of the supply journey to check origin and ingredients.",
      "ru": "Технология уже существовала; вклад состоял в её применении на разных этапах поставки для проверки происхождения и состава."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The students say DNA analysis had been available for some time.",
        "ru": "Студенты говорят, что анализ ДНК существовал уже давно."
      },
      {
        "choiceIndex": 2,
        "en": "Testing at multiple stages is described, not only after illness.",
        "ru": "Описаны проверки на разных этапах, а не только после заболевания."
      },
      {
        "choiceIndex": 3,
        "en": "The project checked origin and ingredients scientifically.",
        "ru": "Проект научно проверял происхождение и ингредиенты."
      }
    ],
    "answerEvidence": "The testing technology already existed; the innovation was using it at different stages of the supply journey to check origin and ingredients.",
    "evidenceTiming": {
      "startSeconds": 103.06,
      "endSeconds": 131.9
    },
    "sourceEvidence": {
      "pdfPage": 106,
      "pdfPages": [
        106
      ],
      "printedPage": 105,
      "sourceStartSeconds": 158.36,
      "sourceEndSeconds": 187.2,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p3"
  },
  {
    "id": "large-c21-t2-listening-020",
    "domain": "listening",
    "stimulusId": "c21-t2-food-course",
    "clusterId": "c21-t2-food-course",
    "sourceTest": 2,
    "topic": "study",
    "skill": "agreement",
    "tags": [
      "agreement"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Tracking speakers’ agreement and final decisions",
      "ru": "Отслеживание согласия и итоговых решений говорящих"
    },
    "prompt": "How do the students react to the last two proposed course topics?",
    "choices": [
      "They reject international eating habits and prefer only 3D printing.",
      "They favour eating habits over the specialised technology examples.",
      "They decide both topics belong exclusively in a medical course.",
      "They agree that both topics are already covered in detail."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "Food habits around the world are seen as broadly interesting; 3D food printing and smart packaging are judged possibly too specialised.",
      "ru": "Пищевые привычки разных стран считают интересными всему классу, а 3D-печать еды и умную упаковку — возможно, слишком узкими."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "This reverses their reactions.",
        "ru": "Здесь их реакции перепутаны."
      },
      {
        "choiceIndex": 2,
        "en": "The medical objection applies to the earlier personalised-diet proposal.",
        "ru": "Замечание о медицине относится к прежнему предложению о персональной диете."
      },
      {
        "choiceIndex": 3,
        "en": "They are considering additions, not describing detailed existing coverage.",
        "ru": "Они предлагают дополнения, а не описывают уже подробное изучение."
      }
    ],
    "answerEvidence": "Food habits around the world are seen as broadly interesting; 3D food printing and smart packaging are judged possibly too specialised.",
    "evidenceTiming": {
      "startSeconds": 182.28,
      "endSeconds": 202.14
    },
    "sourceEvidence": {
      "pdfPage": 106,
      "pdfPages": [
        106
      ],
      "printedPage": 105,
      "sourceStartSeconds": 237.58,
      "sourceEndSeconds": 257.44,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p3"
  },
  {
    "id": "large-c21-t2-listening-021",
    "domain": "listening",
    "stimulusId": "c21-t2-food-project",
    "clusterId": "c21-t2-food-project",
    "sourceTest": 2,
    "topic": "study",
    "skill": "gist",
    "tags": [
      "gist"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding the main message",
      "ru": "Понимание основной мысли"
    },
    "prompt": "What was the students’ initial product aim?",
    "choices": [
      "A meal intended only for a particular medical diet.",
      "A formal restaurant dish that customers would eat while seated at tables.",
      "A familiar dish reproduced without any new ingredient.",
      "A convenient snack that could be eaten while moving around."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "They quickly chose a portable snack rather than restaurant food, then developed a falafel variation.",
      "ru": "Они быстро выбрали перекус на ходу, а не ресторанное блюдо, и затем разработали вариант фалафеля."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "No medical target group is identified.",
        "ru": "Медицинская целевая группа не названа."
      },
      {
        "choiceIndex": 1,
        "en": "They explicitly favour eating on the go instead.",
        "ru": "Они прямо предпочитают еду на ходу."
      },
      {
        "choiceIndex": 2,
        "en": "They later deliberately sought a different version.",
        "ru": "Позже они намеренно искали отличающийся вариант."
      }
    ],
    "answerEvidence": "They quickly chose a portable snack rather than restaurant food, then developed a falafel variation.",
    "evidenceTiming": {
      "startSeconds": 9.73,
      "endSeconds": 32.29
    },
    "sourceEvidence": {
      "pdfPage": 106,
      "pdfPages": [
        106
      ],
      "printedPage": 105,
      "sourceStartSeconds": 19.23,
      "sourceEndSeconds": 41.79,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p3"
  },
  {
    "id": "large-c21-t2-listening-022",
    "domain": "listening",
    "stimulusId": "c21-t2-food-project",
    "clusterId": "c21-t2-food-project",
    "sourceTest": 2,
    "topic": "study",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "Why was the project handout particularly useful during the literature review?",
    "choices": [
      "It supplied a finished review that they could submit unchanged.",
      "It guided presentation in an unfamiliar type of assignment.",
      "It gave a detailed recipe for cooking jackfruit.",
      "It removed the need to consult any literature."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "They lacked experience of literature reviews and specifically valued the guidance on presenting information.",
      "ru": "У них не было опыта литературного обзора, и особенно полезными оказались советы по представлению информации."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Advice is described, not a ready-made submission.",
        "ru": "Описаны советы, а не готовая работа для сдачи."
      },
      {
        "choiceIndex": 2,
        "en": "The useful guidance concerned presentation, not the later recipe.",
        "ru": "Полезные советы касались изложения, а не последующего рецепта."
      },
      {
        "choiceIndex": 3,
        "en": "The handout supported the review rather than replacing reading.",
        "ru": "Памятка помогала обзору, а не заменяла чтение."
      }
    ],
    "answerEvidence": "They lacked experience of literature reviews and specifically valued the guidance on presenting information.",
    "evidenceTiming": {
      "startSeconds": 32.61,
      "endSeconds": 45.93
    },
    "sourceEvidence": {
      "pdfPage": 106,
      "pdfPages": [
        106
      ],
      "printedPage": 105,
      "sourceStartSeconds": 42.11,
      "sourceEndSeconds": 55.43,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p3"
  },
  {
    "id": "large-c21-t2-listening-023",
    "domain": "listening",
    "stimulusId": "c21-t2-food-project",
    "clusterId": "c21-t2-food-project",
    "sourceTest": 2,
    "topic": "study",
    "skill": "sequence",
    "tags": [
      "sequence"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Following events, procedures or proposed actions in order",
      "ru": "Понимание порядка событий, процедур или действий"
    },
    "prompt": "How did the students reach a satisfactory production method?",
    "choices": [
      "They paid another group to prepare the finished product.",
      "They repeatedly adjusted a basic recipe after unsuccessful trials.",
      "They abandoned the product after the first failed attempt.",
      "They followed the first recipe exactly and avoided experimentation."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "They describe repeated trial and error, adapting the recipe until it worked, and enjoying the process.",
      "ru": "Они описывают пробы и ошибки: меняли рецепт, пока он не получился, и получали удовольствие от процесса."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "No outsourcing is mentioned.",
        "ru": "Передача работы другой группе не упоминается."
      },
      {
        "choiceIndex": 2,
        "en": "They continued despite frequent failures.",
        "ru": "Они продолжали, несмотря на частые неудачи."
      },
      {
        "choiceIndex": 3,
        "en": "They explicitly describe experimenting and adapting.",
        "ru": "Они прямо говорят об экспериментах и изменениях."
      }
    ],
    "answerEvidence": "They describe repeated trial and error, adapting the recipe until it worked, and enjoying the process.",
    "evidenceTiming": {
      "startSeconds": 76.29,
      "endSeconds": 103.77
    },
    "sourceEvidence": {
      "pdfPage": 106,
      "pdfPages": [
        106
      ],
      "printedPage": 105,
      "sourceStartSeconds": 85.79,
      "sourceEndSeconds": 113.27,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p3"
  },
  {
    "id": "large-c21-t2-listening-024",
    "domain": "listening",
    "stimulusId": "c21-t2-cruise-problems",
    "clusterId": "c21-t2-cruise-problems",
    "sourceTest": 2,
    "topic": "tourism",
    "skill": "gist",
    "tags": [
      "gist"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding the main message",
      "ru": "Понимание основной мысли"
    },
    "prompt": "What dilemma does the speaker describe for popular cruise destinations?",
    "choices": [
      "They want visitors but struggle with the damage caused by excessive numbers.",
      "They can accommodate visitors easily but cannot advertise their cities.",
      "They want to replace all local businesses with souvenir shops.",
      "They have too few attractions to persuade passengers to leave the ship."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "Attracting tourism conflicts with coping with large daily arrivals that can damage the very attractions visitors seek.",
      "ru": "Привлечение туристов сталкивается с трудностью принимать большие ежедневные потоки, повреждающие сами достопримечательности."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "Coping with numbers is explicitly difficult.",
        "ru": "Справляться с числом людей прямо названо трудностью."
      },
      {
        "choiceIndex": 2,
        "en": "Tourist-only shops are described as a problem, not the desired outcome.",
        "ru": "Магазины только для туристов описаны как проблема, а не цель."
      },
      {
        "choiceIndex": 3,
        "en": "The problem is pressure on attractions, not their absence.",
        "ru": "Проблема в нагрузке на достопримечательности, а не в их отсутствии."
      }
    ],
    "answerEvidence": "Attracting tourism conflicts with coping with large daily arrivals that can damage the very attractions visitors seek.",
    "evidenceTiming": {
      "startSeconds": 30.21,
      "endSeconds": 56.21
    },
    "sourceEvidence": {
      "pdfPage": 107,
      "pdfPages": [
        107
      ],
      "printedPage": 106,
      "sourceStartSeconds": 104.21,
      "sourceEndSeconds": 130.21,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p4"
  },
  {
    "id": "large-c21-t2-listening-025",
    "domain": "listening",
    "stimulusId": "c21-t2-cruise-problems",
    "clusterId": "c21-t2-cruise-problems",
    "sourceTest": 2,
    "topic": "tourism",
    "skill": "speaker-attitude",
    "tags": [
      "speaker-attitude"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Recognising a speaker’s evaluation or preference",
      "ru": "Распознавание оценки или предпочтения говорящего"
    },
    "prompt": "Why do campaigners doubt that the visitor tax will solve the problem?",
    "choices": [
      "They think the tax has already stopped all tourism.",
      "They think the amount is too small to discourage enough visitors.",
      "They think the money must be refunded to every cruise passenger.",
      "They believe the charge applies to residents rather than to arriving cruise passengers."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "The tax is only a few euros, which critics believe is insufficient to deter enough people.",
      "ru": "Налог составляет всего несколько евро, что критики считают недостаточным для заметного сокращения потока."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The criticism is that too little will change, not that tourism has ended.",
        "ru": "Критикуют слабый эффект, а не прекращение туризма."
      },
      {
        "choiceIndex": 2,
        "en": "No refund arrangement is stated.",
        "ru": "Возврат налога не описывается."
      },
      {
        "choiceIndex": 3,
        "en": "The described charge applies to visitors arriving by cruise ship.",
        "ru": "Описанная плата относится к туристам, прибывающим на круизах."
      }
    ],
    "answerEvidence": "The tax is only a few euros, which critics believe is insufficient to deter enough people.",
    "evidenceTiming": {
      "startSeconds": 56.21,
      "endSeconds": 73.4
    },
    "sourceEvidence": {
      "pdfPage": 107,
      "pdfPages": [
        107
      ],
      "printedPage": 106,
      "sourceStartSeconds": 130.21,
      "sourceEndSeconds": 147.4,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p4"
  },
  {
    "id": "large-c21-t2-listening-026",
    "domain": "listening",
    "stimulusId": "c21-t2-cruise-problems",
    "clusterId": "c21-t2-cruise-problems",
    "sourceTest": 2,
    "topic": "tourism",
    "skill": "change-of-plan",
    "tags": [
      "change-of-plan"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Distinguishing an earlier position from a later change",
      "ru": "Различение исходной позиции и последующего изменения"
    },
    "prompt": "How did Dubrovnik respond after a television series increased its popularity?",
    "choices": [
      "It required every tourist to stay overnight.",
      "It replaced the port with a new airport.",
      "It regulated the arrival timing of cruise ships.",
      "It removed all references to the series from the city."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "The city began controlling when cruise ships enter the port, though some people regard the measure as insufficient.",
      "ru": "Город стал контролировать время входа круизных судов в порт, хотя некоторые считают меру недостаточной."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "No compulsory overnight stay is mentioned.",
        "ru": "Обязательная ночёвка не упоминается."
      },
      {
        "choiceIndex": 1,
        "en": "No port replacement is described.",
        "ru": "Замена порта не описывается."
      },
      {
        "choiceIndex": 3,
        "en": "Removing publicity about the series is not described.",
        "ru": "Удаление упоминаний сериала не описывается."
      }
    ],
    "answerEvidence": "The city began controlling when cruise ships enter the port, though some people regard the measure as insufficient.",
    "evidenceTiming": {
      "startSeconds": 101,
      "endSeconds": 125.3
    },
    "sourceEvidence": {
      "pdfPage": 107,
      "pdfPages": [
        107
      ],
      "printedPage": 106,
      "sourceStartSeconds": 175,
      "sourceEndSeconds": 199.3,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p4"
  },
  {
    "id": "large-c21-t2-listening-027",
    "domain": "listening",
    "stimulusId": "c21-t2-cruise-problems",
    "clusterId": "c21-t2-cruise-problems",
    "sourceTest": 2,
    "topic": "tourism",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "How does the speaker challenge younger people’s view of cruises?",
    "choices": [
      "Younger passengers must pay separately for every drink and activity.",
      "Every cruise is cheaper than every other holiday and has no rules.",
      "Cruises are intended only for older people with little interest in activities.",
      "Included activities can offer value, while the atmosphere is less formal."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "The speaker qualifies cost concerns by noting inclusions and says modern cruises are often less formal than their image suggests.",
      "ru": "Говорящий уточняет опасения о цене включёнными услугами и отмечает, что современные круизы часто менее формальны, чем принято думать."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Activities and drinks are often included.",
        "ru": "Развлечения и напитки часто включены."
      },
      {
        "choiceIndex": 1,
        "en": "The comparison is qualified, not a universal cheapest/no-rules claim.",
        "ru": "Сравнение содержит оговорки, а не абсолютное обещание минимальной цены и отсутствия правил."
      },
      {
        "choiceIndex": 2,
        "en": "That is the image being challenged, not the speaker’s conclusion.",
        "ru": "Это оспариваемый образ, а не вывод говорящего."
      }
    ],
    "answerEvidence": "The speaker qualifies cost concerns by noting inclusions and says modern cruises are often less formal than their image suggests.",
    "evidenceTiming": {
      "startSeconds": 142.49,
      "endSeconds": 174.11
    },
    "sourceEvidence": {
      "pdfPage": 107,
      "pdfPages": [
        107
      ],
      "printedPage": 106,
      "sourceStartSeconds": 216.49,
      "sourceEndSeconds": 248.11,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p4"
  },
  {
    "id": "large-c21-t2-listening-028",
    "domain": "listening",
    "stimulusId": "c21-t2-cruise-changes",
    "clusterId": "c21-t2-cruise-changes",
    "sourceTest": 2,
    "topic": "tourism",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "What advantage of new hybrid ships is highlighted?",
    "choices": [
      "They reduce fuel use by cancelling the activities offered on older ships.",
      "They can power the whole voyage without ever using their engines.",
      "They can carry additional passengers because docking equipment is no longer needed.",
      "They can switch off their engines while staying in port."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "Large batteries mean the engines do not have to keep running when the ship is docked.",
      "ru": "Большие аккумуляторы позволяют не держать двигатели включёнными во время стоянки в порту."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The energy benefit comes from hybrid engines and batteries, not cancelled activities.",
        "ru": "Экономия связана с гибридными двигателями и батареями, а не отменой развлечений."
      },
      {
        "choiceIndex": 1,
        "en": "The stated benefit concerns being docked, not the entire voyage.",
        "ru": "Названное преимущество касается стоянки, а не всего плавания."
      },
      {
        "choiceIndex": 2,
        "en": "The account says engines can be off in port; docking is still discussed.",
        "ru": "В записи двигатели можно выключать в порту; стоянка по-прежнему предусмотрена."
      }
    ],
    "answerEvidence": "Large batteries mean the engines do not have to keep running when the ship is docked.",
    "evidenceTiming": {
      "startSeconds": 5.36,
      "endSeconds": 21.98
    },
    "sourceEvidence": {
      "pdfPage": 107,
      "pdfPages": [
        107
      ],
      "printedPage": 106,
      "sourceStartSeconds": 254.31,
      "sourceEndSeconds": 270.93,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p4"
  },
  {
    "id": "large-c21-t2-listening-029",
    "domain": "listening",
    "stimulusId": "c21-t2-cruise-changes",
    "clusterId": "c21-t2-cruise-changes",
    "sourceTest": 2,
    "topic": "tourism",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "Why has reliable internet become a priority on cruises?",
    "choices": [
      "Customers need it mainly to print paper menus.",
      "Older passengers now refuse to communicate with family.",
      "Guests expect contact with home and sometimes need to work.",
      "All onboard activities have been cancelled in favour of remote work."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "The speaker contrasts getting away from everything with maintaining contact and sometimes working while travelling.",
      "ru": "Говорящий противопоставляет желание от всего отдохнуть сохранению связи и иногда работе во время путешествия."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Menus are on screens; printing is not the internet rationale.",
        "ru": "Меню размещены на экранах; печать не названа причиной интернета."
      },
      {
        "choiceIndex": 1,
        "en": "The comparison concerns expectations, not a refusal to communicate.",
        "ru": "Сравниваются ожидания, а не отказ пожилых людей общаться."
      },
      {
        "choiceIndex": 3,
        "en": "New activities are described; they have not all been cancelled.",
        "ru": "Описываются новые развлечения, а не их полная отмена."
      }
    ],
    "answerEvidence": "The speaker contrasts getting away from everything with maintaining contact and sometimes working while travelling.",
    "evidenceTiming": {
      "startSeconds": 71.05,
      "endSeconds": 92.55
    },
    "sourceEvidence": {
      "pdfPage": 107,
      "pdfPages": [
        107
      ],
      "printedPage": 106,
      "sourceStartSeconds": 320,
      "sourceEndSeconds": 341.5,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p4"
  },
  {
    "id": "large-c21-t2-listening-030",
    "domain": "listening",
    "stimulusId": "c21-t2-cruise-changes",
    "clusterId": "c21-t2-cruise-changes",
    "sourceTest": 2,
    "topic": "tourism",
    "skill": "change-of-plan",
    "tags": [
      "change-of-plan"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Distinguishing an earlier position from a later change",
      "ru": "Различение исходной позиции и последующего изменения"
    },
    "prompt": "What shift in cruise advertising does the speaker describe?",
    "choices": [
      "Companies are replacing digital campaigns with brochures sent directly to younger customers.",
      "Companies are increasingly commissioning professional videos for social media.",
      "Companies have stopped advertising because brochures remain sufficient.",
      "All advertising now targets only retired grandparents."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "After relying on imagery associated with older customers, leading operators now use agencies to make social-media videos.",
      "ru": "После рекламы, связанной с пожилой аудиторией, ведущие компании обращаются к агентствам за видео для социальных сетей."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The described move is towards agency-produced social-media videos.",
        "ru": "Описан переход к профессиональным видеороликам для социальных сетей."
      },
      {
        "choiceIndex": 2,
        "en": "The speaker describes increased use of newer advertising, not stopping it.",
        "ru": "Говорящий описывает новые способы рекламы, а не её прекращение."
      },
      {
        "choiceIndex": 3,
        "en": "The change aims beyond the former retiree-focused image.",
        "ru": "Изменение выходит за пределы прежнего образа для пенсионеров."
      }
    ],
    "answerEvidence": "After relying on imagery associated with older customers, leading operators now use agencies to make social-media videos.",
    "evidenceTiming": {
      "startSeconds": 92.55,
      "endSeconds": 120
    },
    "sourceEvidence": {
      "pdfPage": 108,
      "pdfPages": [
        108
      ],
      "printedPage": 107,
      "sourceStartSeconds": 341.5,
      "sourceEndSeconds": 368.95,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t2-p4"
  },
  {
    "id": "large-c21-t3-listening-001",
    "domain": "listening",
    "stimulusId": "c21-t3-ferry-planning",
    "clusterId": "c21-t3-ferry-planning",
    "sourceTest": 3,
    "topic": "travel",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "Why did Paul choose to travel by ferry?",
    "choices": [
      "He wanted to avoid taking a car on the islands.",
      "He had received a voucher that could only be used at sea.",
      "He could not find a flight at the time his family needed.",
      "He enjoys driving and sees the journey as part of the holiday."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "Paul explains his personal preference for driving over flying and enjoying the journey itself.",
      "ru": "Пол объясняет, что предпочитает автомобиль самолёту и получает удовольствие от самого пути."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The fare he later describes includes a car.",
        "ru": "Названная им позже стоимость включает автомобиль."
      },
      {
        "choiceIndex": 1,
        "en": "The voucher belongs to the later cancellation discussion.",
        "ru": "Ваучер относится к последующему разговору об отмене."
      },
      {
        "choiceIndex": 2,
        "en": "No unavailable flight is mentioned.",
        "ru": "Отсутствие подходящего рейса не упоминается."
      }
    ],
    "answerEvidence": "Paul explains his personal preference for driving over flying and enjoying the journey itself.",
    "evidenceTiming": {
      "startSeconds": 0.36,
      "endSeconds": 13.52
    },
    "sourceEvidence": {
      "pdfPage": 108,
      "pdfPages": [
        108
      ],
      "printedPage": 107,
      "sourceStartSeconds": 92.26,
      "sourceEndSeconds": 105.42,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p1"
  },
  {
    "id": "large-c21-t3-listening-002",
    "domain": "listening",
    "stimulusId": "c21-t3-ferry-planning",
    "clusterId": "c21-t3-ferry-planning",
    "sourceTest": 3,
    "topic": "travel",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "What does Paul know with certainty about the ferry schedule?",
    "choices": [
      "There are several departures each evening throughout the year.",
      "Winter departures run on exactly five days each week.",
      "There is an evening departure every day in summer.",
      "Summer departures operate only during school holidays."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "He confidently describes the daily summer service but explicitly says he is unsure about winter.",
      "ru": "Он уверенно описывает ежедневное летнее сообщение, но прямо говорит, что зимой не уверен."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "He says one ferry each evening, not several.",
        "ru": "Он говорит об одном вечернем пароме, а не о нескольких."
      },
      {
        "choiceIndex": 1,
        "en": "Four or five winter days are speculation, not confirmed information.",
        "ru": "Четыре или пять зимних дней — предположение, а не подтверждённый факт."
      },
      {
        "choiceIndex": 3,
        "en": "School holidays affect booking pressure, not the stated summer operating dates.",
        "ru": "Школьные каникулы влияют на спрос, а не ограничивают летнее расписание."
      }
    ],
    "answerEvidence": "He confidently describes the daily summer service but explicitly says he is unsure about winter.",
    "evidenceTiming": {
      "startSeconds": 21.94,
      "endSeconds": 40.8
    },
    "sourceEvidence": {
      "pdfPage": 108,
      "pdfPages": [
        108
      ],
      "printedPage": 107,
      "sourceStartSeconds": 113.84,
      "sourceEndSeconds": 132.7,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p1"
  },
  {
    "id": "large-c21-t3-listening-003",
    "domain": "listening",
    "stimulusId": "c21-t3-ferry-planning",
    "clusterId": "c21-t3-ferry-planning",
    "sourceTest": 3,
    "topic": "travel",
    "skill": "speaker-attitude",
    "tags": [
      "speaker-attitude"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Recognising a speaker’s evaluation or preference",
      "ru": "Распознавание оценки или предпочтения говорящего"
    },
    "prompt": "How do Paul and Tammy react to the fare for a family and car?",
    "choices": [
      "They agree it is affordable only outside the peak season.",
      "They are disappointed because the quoted fare excludes the car.",
      "They both regard it as lower than they had expected.",
      "Paul thinks it reasonable but Tammy considers it unusually high."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "Tammy expected around £400, and Paul says he had expected more too; the actual total was under £250.",
      "ru": "Тэмми ожидала около 400 фунтов; Пол тоже думал, что будет дороже. Фактически сумма была меньше 250."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The discussion concerns the peak-season trip, not an off-season condition.",
        "ru": "Речь о поездке в сезон, а не об условии поездки вне сезона."
      },
      {
        "choiceIndex": 1,
        "en": "The stated total includes four people and a car.",
        "ru": "Названная сумма включает четырёх человек и автомобиль."
      },
      {
        "choiceIndex": 3,
        "en": "Tammy expresses surprise at the low price, not dissatisfaction.",
        "ru": "Тэмми удивляется низкой цене, а не выражает недовольство."
      }
    ],
    "answerEvidence": "Tammy expected around £400, and Paul says he had expected more too; the actual total was under £250.",
    "evidenceTiming": {
      "startSeconds": 48.72,
      "endSeconds": 72.7
    },
    "sourceEvidence": {
      "pdfPage": 108,
      "pdfPages": [
        108
      ],
      "printedPage": 107,
      "sourceStartSeconds": 140.62,
      "sourceEndSeconds": 164.6,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p1"
  },
  {
    "id": "large-c21-t3-listening-004",
    "domain": "listening",
    "stimulusId": "c21-t3-ferry-planning",
    "clusterId": "c21-t3-ferry-planning",
    "sourceTest": 3,
    "topic": "travel",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "According to Paul, what may Tammy receive if she cancels sufficiently early?",
    "choices": [
      "A voucher to use on a later journey.",
      "A transferable ticket without any notice requirement.",
      "A cash refund regardless of when she cancels.",
      "A free upgrade on the original departure date."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "Paul believes cancellation at least a month ahead produces a voucher for later use, not a refund.",
      "ru": "По словам Пола, отмена минимум за месяц позволяет получить ваучер для будущей поездки, а не возврат денег."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "The month’s notice is an explicit condition; transferability is not stated.",
        "ru": "Месячный срок назван прямо; передача другому человеку не оговаривается."
      },
      {
        "choiceIndex": 2,
        "en": "He distinguishes a voucher from a refund and gives a notice condition.",
        "ru": "Он отличает ваучер от возврата и называет срок уведомления."
      },
      {
        "choiceIndex": 3,
        "en": "No cabin upgrade is offered in the cancellation discussion.",
        "ru": "Повышение категории каюты при отмене не предлагается."
      }
    ],
    "answerEvidence": "Paul believes cancellation at least a month ahead produces a voucher for later use, not a refund.",
    "evidenceTiming": {
      "startSeconds": 73.82,
      "endSeconds": 99
    },
    "sourceEvidence": {
      "pdfPage": 108,
      "pdfPages": [
        108
      ],
      "printedPage": 107,
      "sourceStartSeconds": 165.72,
      "sourceEndSeconds": 190.9,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p1"
  },
  {
    "id": "large-c21-t3-listening-005",
    "domain": "listening",
    "stimulusId": "c21-t3-ferry-practical",
    "clusterId": "c21-t3-ferry-practical",
    "sourceTest": 3,
    "topic": "travel",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "Which cabin choice best reflects Paul’s advice?",
    "choices": [
      "No cabin is worth paying for on an overnight crossing.",
      "Consider a window cabin, but skip the luxury option.",
      "An inside cabin is preferable because window cabins are noisier.",
      "A luxury cabin is essential when travelling with children."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "He values paying for a cabin and prefers one with a window, but says he would not bother with the luxury option.",
      "ru": "Он считает каюту полезной и предпочитает окно, но не видит необходимости в люксовом варианте."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "He explicitly thinks a cabin is worth paying for.",
        "ru": "Он прямо считает, что за каюту стоит заплатить."
      },
      {
        "choiceIndex": 2,
        "en": "He calls window cabins nicer and says nothing about noise.",
        "ru": "Каюты с окном он считает приятнее; о шуме не говорит."
      },
      {
        "choiceIndex": 3,
        "en": "Luxury cabins are described as for two people and not worth the extra choice for him.",
        "ru": "Люксовые каюты описаны как двухместные; он не рекомендует их."
      }
    ],
    "answerEvidence": "He values paying for a cabin and prefers one with a window, but says he would not bother with the luxury option.",
    "evidenceTiming": {
      "startSeconds": 0.34,
      "endSeconds": 23.4
    },
    "sourceEvidence": {
      "pdfPage": 108,
      "pdfPages": [
        108
      ],
      "printedPage": 107,
      "sourceStartSeconds": 248.74,
      "sourceEndSeconds": 271.8,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p1"
  },
  {
    "id": "large-c21-t3-listening-006",
    "domain": "listening",
    "stimulusId": "c21-t3-ferry-practical",
    "clusterId": "c21-t3-ferry-practical",
    "sourceTest": 3,
    "topic": "travel",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "Why does Paul recommend bringing both snacks and books?",
    "choices": [
      "Passengers cannot leave their cabins during the crossing.",
      "Food choices are limited, and wifi is poor.",
      "The children need them for an organised onboard competition.",
      "The ferry has no food service and bans electronic devices."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "He criticises the limited, not very healthy snack selection and the weak wifi, so recommends preparing alternatives.",
      "ru": "Он отмечает ограниченный и не очень полезный выбор еды и слабый Wi-Fi, поэтому советует взять своё."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "No requirement to remain in cabins is stated.",
        "ru": "Обязанность оставаться в каютах не названа."
      },
      {
        "choiceIndex": 2,
        "en": "No organised competition is mentioned.",
        "ru": "Организованное соревнование не упоминается."
      },
      {
        "choiceIndex": 3,
        "en": "Limited food and poor wifi are not the same as no service or a device ban.",
        "ru": "Ограниченный выбор и плохой Wi-Fi не означают отсутствия еды или запрета устройств."
      }
    ],
    "answerEvidence": "He criticises the limited, not very healthy snack selection and the weak wifi, so recommends preparing alternatives.",
    "evidenceTiming": {
      "startSeconds": 25.68,
      "endSeconds": 42.9
    },
    "sourceEvidence": {
      "pdfPage": 108,
      "pdfPages": [
        108
      ],
      "printedPage": 107,
      "sourceStartSeconds": 274.08,
      "sourceEndSeconds": 291.3,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p1"
  },
  {
    "id": "large-c21-t3-listening-007",
    "domain": "listening",
    "stimulusId": "c21-t3-ferry-practical",
    "clusterId": "c21-t3-ferry-practical",
    "sourceTest": 3,
    "topic": "travel",
    "skill": "explicit-detail",
    "tags": [
      "explicit-detail"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Identifying explicitly stated information",
      "ru": "Поиск прямо названной информации"
    },
    "prompt": "What preparation is needed if Tammy brings her dog?",
    "choices": [
      "Bring a blanket for the onboard kennel.",
      "Arrange for staff to provide the dog’s bedding before departure.",
      "Leave the dog with a car-park attendant during the trip.",
      "Reserve a luxury cabin because dogs cannot use kennels."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "Paul says the kennels are adequate but owners need to provide a blanket.",
      "ru": "Пол считает местные вольеры подходящими, но одеяло должен принести хозяин."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "The owner supplies the blanket rather than relying on staff.",
        "ru": "Одеяло предоставляет хозяин, а не персонал."
      },
      {
        "choiceIndex": 2,
        "en": "The dog travels on the ferry, not under car-park supervision.",
        "ru": "Собака путешествует на пароме, а не остаётся у парковщика."
      },
      {
        "choiceIndex": 3,
        "en": "He says his dog used the kennels successfully.",
        "ru": "Он говорит, что его собака нормально находилась в вольере."
      }
    ],
    "answerEvidence": "Paul says the kennels are adequate but owners need to provide a blanket.",
    "evidenceTiming": {
      "startSeconds": 42.9,
      "endSeconds": 57
    },
    "sourceEvidence": {
      "pdfPage": 108,
      "pdfPages": [
        108
      ],
      "printedPage": 107,
      "sourceStartSeconds": 291.3,
      "sourceEndSeconds": 305.4,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p1"
  },
  {
    "id": "large-c21-t3-listening-008",
    "domain": "listening",
    "stimulusId": "c21-t3-ferry-practical",
    "clusterId": "c21-t3-ferry-practical",
    "sourceTest": 3,
    "topic": "travel",
    "skill": "sequence",
    "tags": [
      "sequence"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Following events, procedures or proposed actions in order",
      "ru": "Понимание порядка событий, процедур или действий"
    },
    "prompt": "Which account matches Paul’s time before the ferry departure?",
    "choices": [
      "He ate a full meal in the castle’s restaurant before sightseeing.",
      "He missed the ferry because the castle restaurant served slowly.",
      "He stayed at the port because no attractions were accessible.",
      "He visited Drum Castle before finding an Italian restaurant nearby."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "The family arrived early, visited Drum Castle, then looked for a restaurant because the castle had only a coffee shop.",
      "ru": "Семья приехала рано, посетила замок Драм и искала ресторан, потому что в замке была только кофейня."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The castle had no restaurant; the Italian restaurant was in a nearby village.",
        "ru": "В замке ресторана не было; итальянский ресторан находился в соседней деревне."
      },
      {
        "choiceIndex": 1,
        "en": "No missed departure is reported.",
        "ru": "О пропущенном пароме не сообщается."
      },
      {
        "choiceIndex": 2,
        "en": "They deliberately went elsewhere instead of waiting at the port.",
        "ru": "Они специально поехали в другое место вместо ожидания в порту."
      }
    ],
    "answerEvidence": "The family arrived early, visited Drum Castle, then looked for a restaurant because the castle had only a coffee shop.",
    "evidenceTiming": {
      "startSeconds": 71.6,
      "endSeconds": 114.52
    },
    "sourceEvidence": {
      "pdfPage": 109,
      "pdfPages": [
        109
      ],
      "printedPage": 108,
      "sourceStartSeconds": 320,
      "sourceEndSeconds": 362.92,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p1"
  },
  {
    "id": "large-c21-t3-listening-009",
    "domain": "listening",
    "stimulusId": "c21-t3-street-food-start",
    "clusterId": "c21-t3-street-food-start",
    "sourceTest": 3,
    "topic": "business",
    "skill": "gist",
    "tags": [
      "gist"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding the main message",
      "ru": "Понимание основной мысли"
    },
    "prompt": "What does Jon identify as a major attraction of street food compared with standard fast food?",
    "choices": [
      "Customers can buy only vegan dishes wherever they go.",
      "Customers can expect street-food prices to remain lower than all restaurant prices.",
      "Customers can expect exactly the same meal in every location.",
      "Customers can find distinctive dishes and watch them being prepared."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "He contrasts standardisation and frozen food with variety, uniqueness and visible preparation.",
      "ru": "Он противопоставляет стандартность и замороженные продукты разнообразию, необычным блюдам и приготовлению на глазах."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "His examples range from burgers to vegan curries.",
        "ru": "Его примеры варьируются от бургеров до веганского карри."
      },
      {
        "choiceIndex": 1,
        "en": "The appeal described is distinctive visible preparation, not a universal price guarantee.",
        "ru": "Описанная привлекательность — необычная еда и приготовление на глазах, а не гарантия цены."
      },
      {
        "choiceIndex": 2,
        "en": "Uniformity is his description of fast food, not street food’s appeal.",
        "ru": "Одинаковость относится к фастфуду, а не к привлекательности уличной еды."
      }
    ],
    "answerEvidence": "He contrasts standardisation and frozen food with variety, uniqueness and visible preparation.",
    "evidenceTiming": {
      "startSeconds": 31.52,
      "endSeconds": 71.44
    },
    "sourceEvidence": {
      "pdfPage": 109,
      "pdfPages": [
        109
      ],
      "printedPage": 108,
      "sourceStartSeconds": 75.02,
      "sourceEndSeconds": 114.94,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p2"
  },
  {
    "id": "large-c21-t3-listening-010",
    "domain": "listening",
    "stimulusId": "c21-t3-street-food-start",
    "clusterId": "c21-t3-street-food-start",
    "sourceTest": 3,
    "topic": "business",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "Why does Jon warn beginners against assuming music festivals are the best starting point?",
    "choices": [
      "Pitch fees may be high and competing sellers numerous.",
      "Festivals give useful feedback but have very few visitors.",
      "Visitors are normally expected to bring food rather than buy from individual stalls.",
      "Festival organisers require every seller to own a restaurant."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "Although festivals seem an obvious market, he highlights expensive space and strong competition.",
      "ru": "Фестивали кажутся очевидным рынком, но он отмечает дорогую аренду места и сильную конкуренцию."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "Feedback is linked to food markets; low visitor numbers are not the warning.",
        "ru": "Отзывы относятся к продовольственным рынкам; малое число посетителей не названо проблемой."
      },
      {
        "choiceIndex": 2,
        "en": "The concerns are high pitch costs and competition, not a rule against buying food.",
        "ru": "Опасения связаны с арендой и конкуренцией, а не правилом против покупки еды."
      },
      {
        "choiceIndex": 3,
        "en": "Restaurant ownership is not stated as an entry condition.",
        "ru": "Владение рестораном не названо условием участия."
      }
    ],
    "answerEvidence": "Although festivals seem an obvious market, he highlights expensive space and strong competition.",
    "evidenceTiming": {
      "startSeconds": 72.96,
      "endSeconds": 88.7
    },
    "sourceEvidence": {
      "pdfPage": 109,
      "pdfPages": [
        109
      ],
      "printedPage": 108,
      "sourceStartSeconds": 116.46,
      "sourceEndSeconds": 132.2,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p2"
  },
  {
    "id": "large-c21-t3-listening-011",
    "domain": "listening",
    "stimulusId": "c21-t3-street-food-start",
    "clusterId": "c21-t3-street-food-start",
    "sourceTest": 3,
    "topic": "business",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "Why does Jon value food markets for a new business?",
    "choices": [
      "The customers are engaged with food and offer helpful reactions.",
      "The equipment can be hired there permanently at no cost.",
      "The organisers guarantee that no similar product is sold.",
      "The sellers can avoid speaking directly to customers."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "He emphasises customers’ interest in food and the useful feedback they provide.",
      "ru": "Он подчёркивает интерес покупателей к еде и полезные отзывы от них."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "No free equipment arrangement is described.",
        "ru": "Бесплатное оборудование не предлагается."
      },
      {
        "choiceIndex": 2,
        "en": "No exclusivity guarantee is given.",
        "ru": "Гарантия отсутствия конкурентов не даётся."
      },
      {
        "choiceIndex": 3,
        "en": "Interaction is useful for feedback, not something to avoid.",
        "ru": "Общение полезно для обратной связи, а не является нежелательным."
      }
    ],
    "answerEvidence": "He emphasises customers’ interest in food and the useful feedback they provide.",
    "evidenceTiming": {
      "startSeconds": 86.5,
      "endSeconds": 106.38
    },
    "sourceEvidence": {
      "pdfPage": 109,
      "pdfPages": [
        109
      ],
      "printedPage": 108,
      "sourceStartSeconds": 130,
      "sourceEndSeconds": 149.88,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p2"
  },
  {
    "id": "large-c21-t3-listening-012",
    "domain": "listening",
    "stimulusId": "c21-t3-street-food-start",
    "clusterId": "c21-t3-street-food-start",
    "sourceTest": 3,
    "topic": "business",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "What does Jon imply about providing street food at weddings?",
    "choices": [
      "It is the easiest type of event for someone with no experience.",
      "It can be an opportunity, but the demanding expectations require experience.",
      "It has become unpopular compared with ordinary restaurant catering.",
      "It should be accepted only if no preparation is required."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "He notes its popularity but stresses that the operator must know what they are doing because everything needs to go well.",
      "ru": "Он отмечает популярность формата, но подчёркивает необходимость опыта: всё должно пройти безупречно."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "He stresses competence, not suitability for an unprepared beginner.",
        "ru": "Он подчёркивает компетентность, а не пригодность для неподготовленного новичка."
      },
      {
        "choiceIndex": 2,
        "en": "He says it has become fashionable, not unpopular.",
        "ru": "Он говорит, что это вошло в моду, а не потеряло популярность."
      },
      {
        "choiceIndex": 3,
        "en": "No exemption from preparation is suggested.",
        "ru": "Отказ от подготовки не предлагается."
      }
    ],
    "answerEvidence": "He notes its popularity but stresses that the operator must know what they are doing because everything needs to go well.",
    "evidenceTiming": {
      "startSeconds": 106.38,
      "endSeconds": 120.64
    },
    "sourceEvidence": {
      "pdfPage": 109,
      "pdfPages": [
        109
      ],
      "printedPage": 108,
      "sourceStartSeconds": 149.88,
      "sourceEndSeconds": 164.14,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p2"
  },
  {
    "id": "large-c21-t3-listening-013",
    "domain": "listening",
    "stimulusId": "c21-t3-street-food-problems",
    "clusterId": "c21-t3-street-food-problems",
    "sourceTest": 3,
    "topic": "business",
    "skill": "sequence",
    "tags": [
      "sequence"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Following events, procedures or proposed actions in order",
      "ru": "Понимание порядка событий, процедур или действий"
    },
    "prompt": "What equipment strategy does Jon recommend when starting out?",
    "choices": [
      "Avoid buying refrigeration until customers request it.",
      "Start second-hand, then upgrade when the business takes off.",
      "Rent everything indefinitely because renting always costs less.",
      "Buy the most expensive equipment before testing demand."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "He recommends second-hand basics and later replacement, warning that renting can cost more overall.",
      "ru": "Он рекомендует подержанное базовое оборудование с последующей заменой и предупреждает, что аренда может обойтись дороже."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Fridges are among the basics he recommends obtaining.",
        "ru": "Холодильники относятся к рекомендуемому базовому оборудованию."
      },
      {
        "choiceIndex": 2,
        "en": "He says renting may cost more, not always less.",
        "ru": "Он говорит, что аренда может стоить больше, а не всегда меньше."
      },
      {
        "choiceIndex": 3,
        "en": "Upgrading follows success rather than preceding the start.",
        "ru": "Улучшение оборудования следует за успехом, а не предшествует старту."
      }
    ],
    "answerEvidence": "He recommends second-hand basics and later replacement, warning that renting can cost more overall.",
    "evidenceTiming": {
      "startSeconds": 0.34,
      "endSeconds": 22.54
    },
    "sourceEvidence": {
      "pdfPage": 109,
      "pdfPages": [
        109
      ],
      "printedPage": 108,
      "sourceStartSeconds": 10.94,
      "sourceEndSeconds": 33.14,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p2"
  },
  {
    "id": "large-c21-t3-listening-014",
    "domain": "listening",
    "stimulusId": "c21-t3-street-food-problems",
    "clusterId": "c21-t3-street-food-problems",
    "sourceTest": 3,
    "topic": "business",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "Why does Jon ask operators to think about plates, bags and cutlery?",
    "choices": [
      "Serving arrangements affect ease of eating, appearance and repeat custom.",
      "The same container is required for every kind of street food.",
      "Reusable packaging removes the need to prepare attractive food.",
      "Customers choose food mainly according to the container’s price."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "He links practical, appealing presentation with customers returning, while also raising recyclability and reuse.",
      "ru": "Он связывает удобную и привлекательную подачу с возвращением покупателей, а также напоминает о переработке и повторном использовании."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "He offers alternatives, not one mandatory container.",
        "ru": "Он перечисляет варианты, а не одну обязательную тару."
      },
      {
        "choiceIndex": 2,
        "en": "He still stresses that the food must look attractive.",
        "ru": "Он по-прежнему подчёркивает привлекательный вид еды."
      },
      {
        "choiceIndex": 3,
        "en": "Container price is not the stated customer criterion.",
        "ru": "Цена тары не названа критерием выбора покупателей."
      }
    ],
    "answerEvidence": "He links practical, appealing presentation with customers returning, while also raising recyclability and reuse.",
    "evidenceTiming": {
      "startSeconds": 37.56,
      "endSeconds": 57.26
    },
    "sourceEvidence": {
      "pdfPage": 109,
      "pdfPages": [
        109
      ],
      "printedPage": 108,
      "sourceStartSeconds": 48.16,
      "sourceEndSeconds": 67.86,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p2"
  },
  {
    "id": "large-c21-t3-listening-015",
    "domain": "listening",
    "stimulusId": "c21-t3-street-food-problems",
    "clusterId": "c21-t3-street-food-problems",
    "sourceTest": 3,
    "topic": "business",
    "skill": "change-of-plan",
    "tags": [
      "change-of-plan"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Distinguishing an earlier position from a later change",
      "ru": "Различение исходной позиции и последующего изменения"
    },
    "prompt": "Why did Basque increase the vegetarian options on its menu?",
    "choices": [
      "Expensive fish was squeezing profits, and price rises were difficult.",
      "The owners wanted to copy a nearby competitor’s entire menu.",
      "A new licence prohibited them from cooking fish near the beach.",
      "Their salads took too long to assemble for waiting customers."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "Expensive fish squeezed profit, and raising selling prices was difficult, so the menu became less dependent on fish.",
      "ru": "Дорогая рыба снижала прибыль, а повышать цены было трудно, поэтому меню стало меньше зависеть от рыбных блюд."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "Copying a competitor is not given as the reason.",
        "ru": "Копирование конкурента не названо причиной."
      },
      {
        "choiceIndex": 2,
        "en": "Licensing at a beach concerns Chip Chop, not Basque.",
        "ru": "Лицензия у пляжа относится к Chip Chop, а не Basque."
      },
      {
        "choiceIndex": 3,
        "en": "Slow salad preparation concerns Lou’s Kitchen.",
        "ru": "Медленное приготовление салатов относится к Lou’s Kitchen."
      }
    ],
    "answerEvidence": "Expensive fish squeezed profit, and raising selling prices was difficult, so the menu became less dependent on fish.",
    "evidenceTiming": {
      "startSeconds": 89.3,
      "endSeconds": 106.26
    },
    "sourceEvidence": {
      "pdfPage": 110,
      "pdfPages": [
        110
      ],
      "printedPage": 109,
      "sourceStartSeconds": 99.9,
      "sourceEndSeconds": 116.86,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p2"
  },
  {
    "id": "large-c21-t3-listening-016",
    "domain": "listening",
    "stimulusId": "c21-t3-street-food-problems",
    "clusterId": "c21-t3-street-food-problems",
    "sourceTest": 3,
    "topic": "business",
    "skill": "inference",
    "tags": [
      "inference"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Drawing an inference supported by the recording",
      "ru": "Вывод, опирающийся на содержание записи"
    },
    "prompt": "Which comparison correctly links the last two businesses with their setbacks?",
    "choices": [
      "Both abandoned beach trading because too many competitors were present.",
      "Lou’s had slow service; Chip Chop faced licensing difficulties.",
      "Both lost customers because they kept their restaurant jobs.",
      "Lou’s Kitchen lacked a licence; Chip Chop could not afford fish."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "Lou’s complicated salads created queues, while Chip Chop faced unexpected permission requirements for its chosen beach location.",
      "ru": "Сложные салаты Lou’s создавали очереди, а Chip Chop столкнулся с неожиданными разрешениями для выбранного места у пляжа."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Chip Chop chose the site partly because there were no other food trucks.",
        "ru": "Chip Chop выбрал место в том числе из-за отсутствия других фургонов."
      },
      {
        "choiceIndex": 2,
        "en": "Combining restaurant work with trading was Thai Basil’s problem.",
        "ru": "Совмещение с ресторанной работой было проблемой Thai Basil."
      },
      {
        "choiceIndex": 3,
        "en": "These causes are assigned to the wrong businesses.",
        "ru": "Причины приписаны не тем предприятиям."
      }
    ],
    "answerEvidence": "Lou’s complicated salads created queues, while Chip Chop faced unexpected permission requirements for its chosen beach location.",
    "evidenceTiming": {
      "startSeconds": 106.98,
      "endSeconds": 151.66
    },
    "sourceEvidence": {
      "pdfPage": 110,
      "pdfPages": [
        110
      ],
      "printedPage": 109,
      "sourceStartSeconds": 117.58,
      "sourceEndSeconds": 162.26,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p2"
  },
  {
    "id": "large-c21-t3-listening-017",
    "domain": "listening",
    "stimulusId": "c21-t3-fashion-values",
    "clusterId": "c21-t3-fashion-values",
    "sourceTest": 3,
    "topic": "environment",
    "skill": "explicit-detail",
    "tags": [
      "explicit-detail"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Identifying explicitly stated information",
      "ru": "Поиск прямо названной информации"
    },
    "prompt": "What distinction do the students draw between sustainable and ethical fashion?",
    "choices": [
      "One concerns manufacturing abroad; the other manufacturing at home.",
      "One refers only to natural fibres; the other only to recycled fibres.",
      "One emphasises environmental effects; the other emphasises treatment of workers or animals.",
      "One concerns price; the other concerns whether clothing is fashionable."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "They distinguish environmental sustainability from ethical treatment, despite the terms often being used interchangeably.",
      "ru": "Они различают экологическую устойчивость и этичное обращение, хотя эти слова часто смешивают."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Domestic versus overseas production is not their definition.",
        "ru": "Местное и зарубежное производство не составляют их определение."
      },
      {
        "choiceIndex": 1,
        "en": "Their distinction is about effects and treatment, not two fibre categories.",
        "ru": "Различие касается воздействия и обращения, а не двух типов волокон."
      },
      {
        "choiceIndex": 3,
        "en": "They do not define the terms through price or style.",
        "ru": "Они не определяют термины через цену или стиль."
      }
    ],
    "answerEvidence": "They distinguish environmental sustainability from ethical treatment, despite the terms often being used interchangeably.",
    "evidenceTiming": {
      "startSeconds": 15.66,
      "endSeconds": 35.84
    },
    "sourceEvidence": {
      "pdfPage": 110,
      "pdfPages": [
        110
      ],
      "printedPage": 109,
      "sourceStartSeconds": 61.16,
      "sourceEndSeconds": 81.34,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p3"
  },
  {
    "id": "large-c21-t3-listening-018",
    "domain": "listening",
    "stimulusId": "c21-t3-fashion-values",
    "clusterId": "c21-t3-fashion-values",
    "sourceTest": 3,
    "topic": "environment",
    "skill": "speaker-attitude",
    "tags": [
      "speaker-attitude"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Recognising a speaker’s evaluation or preference",
      "ru": "Распознавание оценки или предпочтения говорящего"
    },
    "prompt": "What criticism do they make of companies’ environmental language?",
    "choices": [
      "It can be deliberately vague and reveal too little about production.",
      "It consistently includes independent verification and detailed evidence for every environmental claim.",
      "It avoids familiar expressions in favour of precise legal definitions.",
      "It is usually too technically detailed for any shopper to read."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "They say broad labels can confuse consumers and that companies often give insufficient information about how products are made.",
      "ru": "Они считают, что общие ярлыки путают покупателей, а компании часто недостаточно рассказывают о производстве."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "The students complain that adequate production information is missing.",
        "ru": "Студенты жалуются, что достаточной информации о производстве нет."
      },
      {
        "choiceIndex": 2,
        "en": "They object to vague familiar terms, not praise precise definitions.",
        "ru": "Они возражают против расплывчатых слов, а не хвалят точные определения."
      },
      {
        "choiceIndex": 3,
        "en": "Their complaint is lack of clarity and information, not excessive detail.",
        "ru": "Их претензия — недостаток ясности и данных, а не избыток подробностей."
      }
    ],
    "answerEvidence": "They say broad labels can confuse consumers and that companies often give insufficient information about how products are made.",
    "evidenceTiming": {
      "startSeconds": 35.84,
      "endSeconds": 57.8
    },
    "sourceEvidence": {
      "pdfPage": 110,
      "pdfPages": [
        110
      ],
      "printedPage": 109,
      "sourceStartSeconds": 81.34,
      "sourceEndSeconds": 103.3,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p3"
  },
  {
    "id": "large-c21-t3-listening-019",
    "domain": "listening",
    "stimulusId": "c21-t3-fashion-values",
    "clusterId": "c21-t3-fashion-values",
    "sourceTest": 3,
    "topic": "environment",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "Why does one student question the claim that wool production uses few chemicals?",
    "choices": [
      "Wool garments cannot be repaired or recycled.",
      "Sheep farming uses treatments against fungi and insects.",
      "The chemicals needed for shearing are more expensive than those used on cattle.",
      "The natural wool fibres need several synthetic coatings before they can be sold."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "He points to fungicides and insecticides used in farming as evidence against the low-chemical claim.",
      "ru": "Он указывает на фунгициды и инсектициды в животноводстве как довод против утверждения о малом количестве химикатов."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Recycling and durability are advantages they accept.",
        "ru": "Переработку и долговечность они признают преимуществами."
      },
      {
        "choiceIndex": 2,
        "en": "The discussion cites fungicides and insecticides, not a chemical shearing cost comparison.",
        "ru": "Обсуждаются фунгициды и инсектициды, а не сравнение химических затрат на стрижку."
      },
      {
        "choiceIndex": 3,
        "en": "The cited chemicals are used in sheep farming, not a stated fibre-coating process.",
        "ru": "Названные химикаты применяют в овцеводстве, а не в описанном покрытии волокон."
      }
    ],
    "answerEvidence": "He points to fungicides and insecticides used in farming as evidence against the low-chemical claim.",
    "evidenceTiming": {
      "startSeconds": 73.9,
      "endSeconds": 92.8
    },
    "sourceEvidence": {
      "pdfPage": 110,
      "pdfPages": [
        110
      ],
      "printedPage": 109,
      "sourceStartSeconds": 119.4,
      "sourceEndSeconds": 138.3,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p3"
  },
  {
    "id": "large-c21-t3-listening-020",
    "domain": "listening",
    "stimulusId": "c21-t3-fashion-values",
    "clusterId": "c21-t3-fashion-values",
    "sourceTest": 3,
    "topic": "environment",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "What is the students’ position on shearing sheep?",
    "choices": [
      "They accept it only when the wool cannot be recycled.",
      "They say it is harmless regardless of animal care.",
      "They regard it as unacceptable in every circumstance.",
      "They accept it if the sheep are well cared for."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "Both reject an absolute objection to shearing, but their acceptance depends on the sheep being well cared for.",
      "ru": "Оба не поддерживают абсолютный запрет стрижки, но допускают стрижку при условии хорошего ухода за животными."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Recyclability is not their condition for shearing.",
        "ru": "Перерабатываемость не является их условием для стрижки."
      },
      {
        "choiceIndex": 1,
        "en": "The care condition matters; their acceptance is not unconditional.",
        "ru": "Условие ухода существенно; согласие не безоговорочное."
      },
      {
        "choiceIndex": 2,
        "en": "They explicitly say they see no problem under the stated condition.",
        "ru": "Они прямо говорят, что при названном условии не видят проблемы."
      }
    ],
    "answerEvidence": "Both reject an absolute objection to shearing, but their acceptance depends on the sheep being well cared for.",
    "evidenceTiming": {
      "startSeconds": 99.6,
      "endSeconds": 111.52
    },
    "sourceEvidence": {
      "pdfPage": 110,
      "pdfPages": [
        110
      ],
      "printedPage": 109,
      "sourceStartSeconds": 145.1,
      "sourceEndSeconds": 157.02,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p3"
  },
  {
    "id": "large-c21-t3-listening-021",
    "domain": "listening",
    "stimulusId": "c21-t3-fashion-fabrics",
    "clusterId": "c21-t3-fashion-fabrics",
    "sourceTest": 3,
    "topic": "environment",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "What feature of Lyocell production impresses the students?",
    "choices": [
      "Its fibres can only be used once before disposal.",
      "It produces twice as many emissions as conventional fabrics.",
      "It needs no manufacturing process after the trees are cut.",
      "Manufacturing allows almost all dissolving agents to be used again."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "They highlight reuse of more than 99% of the dissolving agents in manufacture.",
      "ru": "Они выделяют повторное использование более 99% растворяющих веществ в производстве."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The point is chemical-agent reuse, not a one-use garment restriction.",
        "ru": "Речь о повторном использовании веществ, а не об одноразовой одежде."
      },
      {
        "choiceIndex": 1,
        "en": "An emissions comparison concerns EcoVero and points in the opposite direction.",
        "ru": "Сравнение выбросов относится к EcoVero и имеет противоположный смысл."
      },
      {
        "choiceIndex": 2,
        "en": "A manufacturing process is explicitly described.",
        "ru": "Производственный процесс прямо описывается."
      }
    ],
    "answerEvidence": "They highlight reuse of more than 99% of the dissolving agents in manufacture.",
    "evidenceTiming": {
      "startSeconds": 6.23,
      "endSeconds": 24.95
    },
    "sourceEvidence": {
      "pdfPage": 111,
      "pdfPages": [
        111
      ],
      "printedPage": 110,
      "sourceStartSeconds": 17.63,
      "sourceEndSeconds": 36.35,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p3"
  },
  {
    "id": "large-c21-t3-listening-022",
    "domain": "listening",
    "stimulusId": "c21-t3-fashion-fabrics",
    "clusterId": "c21-t3-fashion-fabrics",
    "sourceTest": 3,
    "topic": "environment",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "Why do the students hesitate to call Cupro sustainable?",
    "choices": [
      "They think it cannot be used for clothing of any kind.",
      "Using a by-product does not remove their concern about production pollution.",
      "They are concerned that cotton by-products are impossible to obtain.",
      "They discover it is made entirely from newly harvested animal silk."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "Although Cupro uses cotton-industry by-products, reports of pollution make them doubt its environmental performance.",
      "ru": "Хотя Cupro использует побочные продукты хлопковой промышленности, сообщения о загрязнении вызывают сомнения в его экологичности."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Usability for clothing is not the stated objection.",
        "ru": "Пригодность для одежды не названа возражением."
      },
      {
        "choiceIndex": 2,
        "en": "They do not identify a supply shortage as the concern.",
        "ru": "Дефицит сырья не назван причиной сомнений."
      },
      {
        "choiceIndex": 3,
        "en": "It is described as a vegan-silk alternative from cotton by-products.",
        "ru": "Он описан как альтернатива шёлку из побочных продуктов хлопка."
      }
    ],
    "answerEvidence": "Although Cupro uses cotton-industry by-products, reports of pollution make them doubt its environmental performance.",
    "evidenceTiming": {
      "startSeconds": 25.49,
      "endSeconds": 52.89
    },
    "sourceEvidence": {
      "pdfPage": 111,
      "pdfPages": [
        111
      ],
      "printedPage": 110,
      "sourceStartSeconds": 36.89,
      "sourceEndSeconds": 64.29,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p3"
  },
  {
    "id": "large-c21-t3-listening-023",
    "domain": "listening",
    "stimulusId": "c21-t3-fashion-fabrics",
    "clusterId": "c21-t3-fashion-fabrics",
    "sourceTest": 3,
    "topic": "environment",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "What combined benefit do the students associate with EcoVero?",
    "choices": [
      "Production savings depend on reducing the quality rather than the amount of energy used.",
      "Higher energy use is acceptable because the fabric cannot be recycled.",
      "Lower energy use can reduce costs as well as environmental impact.",
      "Its environmental benefit comes from consuming more energy to produce fewer finished garments."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "They connect reduced energy use and emissions with both environmental and production-cost benefits.",
      "ru": "Они связывают снижение энергопотребления и выбросов с экологическими и экономическими преимуществами."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Lower energy use is explicitly one of the benefits.",
        "ru": "Меньшее энергопотребление прямо названо преимуществом."
      },
      {
        "choiceIndex": 1,
        "en": "The recording says energy use is lower, not higher.",
        "ru": "В записи говорится о меньшем, а не большем потреблении энергии."
      },
      {
        "choiceIndex": 3,
        "en": "The account describes lower energy use and emissions, not increased consumption.",
        "ru": "В записи описано снижение энергии и выбросов, а не рост потребления."
      }
    ],
    "answerEvidence": "They connect reduced energy use and emissions with both environmental and production-cost benefits.",
    "evidenceTiming": {
      "startSeconds": 72.91,
      "endSeconds": 90.71
    },
    "sourceEvidence": {
      "pdfPage": 111,
      "pdfPages": [
        111
      ],
      "printedPage": 110,
      "sourceStartSeconds": 84.31,
      "sourceEndSeconds": 102.11,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p3"
  },
  {
    "id": "large-c21-t3-listening-024",
    "domain": "listening",
    "stimulusId": "c21-t3-fashion-fabrics",
    "clusterId": "c21-t3-fashion-fabrics",
    "sourceTest": 3,
    "topic": "environment",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "How certain is the explanation for hemp clothing being relatively uncommon?",
    "choices": [
      "Cultivation difficulty is accepted as the established cause of limited use.",
      "Cultivation difficulty is a tentative explanation for limited use.",
      "Cultivation difficulty is considered and then rejected as the explanation.",
      "The speakers offer no explanation for its limited use."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "After noting useful properties, one speaker suggests cultivation difficulty may explain its limited use; the wording is tentative.",
      "ru": "После полезных свойств один из говорящих предполагает, что трудность выращивания может объяснять редкость; формулировка неуверенная."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The speaker uses perhaps to suggest a possible cause, not an established conclusion.",
        "ru": "Говорящий использует perhaps, предполагая возможную причину, а не установленный вывод."
      },
      {
        "choiceIndex": 2,
        "en": "The suggested explanation is not rejected in the discussion.",
        "ru": "Предложенное объяснение в обсуждении не отвергается."
      },
      {
        "choiceIndex": 3,
        "en": "Cultivation difficulty is offered as an explanation, though only tentatively.",
        "ru": "Трудность выращивания предлагается как объяснение, хотя и предположительное."
      }
    ],
    "answerEvidence": "After noting useful properties, one speaker suggests cultivation difficulty may explain its limited use; the wording is tentative.",
    "evidenceTiming": {
      "startSeconds": 120.51,
      "endSeconds": 141.65
    },
    "sourceEvidence": {
      "pdfPage": 111,
      "pdfPages": [
        111
      ],
      "printedPage": 110,
      "sourceStartSeconds": 131.91,
      "sourceEndSeconds": 153.05,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p3"
  },
  {
    "id": "large-c21-t3-listening-025",
    "domain": "listening",
    "stimulusId": "c21-t3-invasive-causes",
    "clusterId": "c21-t3-invasive-causes",
    "sourceTest": 3,
    "topic": "ecology",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "Which introduced species would not meet the lecturer’s definition of invasive?",
    "choices": [
      "A non-native species that thrives without harming its new environment.",
      "A species brought by humans that damages local wildlife.",
      "An accidentally transported species that threatens native organisms.",
      "A deliberately moved species that spreads and harms its surroundings."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "Human introduction alone is insufficient: harm in the new environment is part of the definition.",
      "ru": "Самого переселения человеком недостаточно: определение включает вред новой среде."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "This includes both human introduction and harm.",
        "ru": "Здесь есть и переселение человеком, и вред."
      },
      {
        "choiceIndex": 2,
        "en": "Accidental introduction does not exclude an invasive outcome.",
        "ru": "Случайное переселение не исключает инвазивности."
      },
      {
        "choiceIndex": 3,
        "en": "Deliberate introduction can still become harmful and invasive.",
        "ru": "Намеренное переселение тоже может стать вредным и инвазивным."
      }
    ],
    "answerEvidence": "Human introduction alone is insufficient: harm in the new environment is part of the definition.",
    "evidenceTiming": {
      "startSeconds": 4.69,
      "endSeconds": 35.6
    },
    "sourceEvidence": {
      "pdfPage": 111,
      "pdfPages": [
        111
      ],
      "printedPage": 110,
      "sourceStartSeconds": 78.19,
      "sourceEndSeconds": 109.1,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p4"
  },
  {
    "id": "large-c21-t3-listening-026",
    "domain": "listening",
    "stimulusId": "c21-t3-invasive-causes",
    "clusterId": "c21-t3-invasive-causes",
    "sourceTest": 3,
    "topic": "ecology",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "Why can a disease carried by an introduced species be especially damaging?",
    "choices": [
      "Native species may lack defences against unfamiliar diseases.",
      "Local organisms become immune as soon as the new species arrives.",
      "The disease prevents every invasive species from finding food.",
      "Native species always reproduce faster than introduced species."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "The lecturer links unfamiliar disease to a lack of defences in native organisms.",
      "ru": "Лектор связывает незнакомую болезнь с отсутствием защиты у местных организмов."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "The explanation is lack of immunity, not immediate protection.",
        "ru": "Объяснение — отсутствие защиты, а не мгновенный иммунитет."
      },
      {
        "choiceIndex": 2,
        "en": "The damage described falls on native species.",
        "ru": "Описанный вред приходится на местные виды."
      },
      {
        "choiceIndex": 3,
        "en": "Rapid breeding is attributed to invasive species, not a universal native advantage.",
        "ru": "Быстрое размножение относится к инвазивным видам, а не к обязательному преимуществу местных."
      }
    ],
    "answerEvidence": "The lecturer links unfamiliar disease to a lack of defences in native organisms.",
    "evidenceTiming": {
      "startSeconds": 49.17,
      "endSeconds": 79.01
    },
    "sourceEvidence": {
      "pdfPage": 111,
      "pdfPages": [
        111
      ],
      "printedPage": 110,
      "sourceStartSeconds": 122.67,
      "sourceEndSeconds": 152.51,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p4"
  },
  {
    "id": "large-c21-t3-listening-027",
    "domain": "listening",
    "stimulusId": "c21-t3-invasive-causes",
    "clusterId": "c21-t3-invasive-causes",
    "sourceTest": 3,
    "topic": "ecology",
    "skill": "gist",
    "tags": [
      "gist"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding the main message",
      "ru": "Понимание основной мысли"
    },
    "prompt": "What is the lecturer’s point about the human role in spreading species?",
    "choices": [
      "Species introduced for pest control cannot spread into the wild.",
      "Only deliberate introductions can produce invasive species.",
      "Accidental transport is limited to people carrying pets.",
      "Unintended effects can follow both accidental and deliberate introductions."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "Seeds on clothing and organisms in cargo illustrate accidents; pest-control and pet movements illustrate intentional introductions with possible unintended effects.",
      "ru": "Семена на одежде и организмы в грузах иллюстрируют случайность; борьба с вредителями и питомцы — намеренное переселение с возможными нежелательными последствиями."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Escape and unexpected breeding are precisely the warning.",
        "ru": "Выход в дикую среду и неожиданное размножение как раз названы риском."
      },
      {
        "choiceIndex": 1,
        "en": "Accidental routes are explicitly discussed too.",
        "ru": "Случайные пути тоже прямо обсуждаются."
      },
      {
        "choiceIndex": 2,
        "en": "Pets are an intentional example; clothing and cargo illustrate accidents.",
        "ru": "Питомцы — намеренный пример; одежда и грузы иллюстрируют случайность."
      }
    ],
    "answerEvidence": "Seeds on clothing and organisms in cargo illustrate accidents; pest-control and pet movements illustrate intentional introductions with possible unintended effects.",
    "evidenceTiming": {
      "startSeconds": 89.65,
      "endSeconds": 142.41
    },
    "sourceEvidence": {
      "pdfPage": 112,
      "pdfPages": [
        112
      ],
      "printedPage": 111,
      "sourceStartSeconds": 163.15,
      "sourceEndSeconds": 215.91,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p4"
  },
  {
    "id": "large-c21-t3-listening-028",
    "domain": "listening",
    "stimulusId": "c21-t3-invasive-control",
    "clusterId": "c21-t3-invasive-control",
    "sourceTest": 3,
    "topic": "ecology",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "How do the two plant examples illustrate different aspects of invasion?",
    "choices": [
      "Both plants were introduced solely to cure diseases in native trees.",
      "Both are harmful only when kept inside private gardens.",
      "One escaped from gardens; another shades out native plants.",
      "One plant was eradicated immediately, while the other cannot survive in woods."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "Knotweed spread from ornamental use; rhododendrons prevent native flowers growing beneath dense shade.",
      "ru": "Japanese knotweed распространился после декоративного использования; рододендроны мешают местным цветам расти из-за плотной тени."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "No medicinal reason for introduction is given.",
        "ru": "Лечебная цель переселения не названа."
      },
      {
        "choiceIndex": 1,
        "en": "The problem includes spread beyond managed gardens.",
        "ru": "Проблема включает распространение за пределы ухоженных садов."
      },
      {
        "choiceIndex": 3,
        "en": "Knotweed remains difficult to eradicate and rhododendrons occur in woodland.",
        "ru": "Japanese knotweed трудно искоренить, а рододендроны встречаются в лесах."
      }
    ],
    "answerEvidence": "Knotweed spread from ornamental use; rhododendrons prevent native flowers growing beneath dense shade.",
    "evidenceTiming": {
      "startSeconds": 15.04,
      "endSeconds": 63.36
    },
    "sourceEvidence": {
      "pdfPage": 112,
      "pdfPages": [
        112
      ],
      "printedPage": 111,
      "sourceStartSeconds": 305.29,
      "sourceEndSeconds": 353.61,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p4"
  },
  {
    "id": "large-c21-t3-listening-029",
    "domain": "listening",
    "stimulusId": "c21-t3-invasive-control",
    "clusterId": "c21-t3-invasive-control",
    "sourceTest": 3,
    "topic": "ecology",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "What two pressures have grey squirrels placed on red squirrels in the account?",
    "choices": [
      "Competition for food and transmission of a dangerous virus.",
      "Competition for sunlight and destruction of flower roots.",
      "Dependence on artificial feeding and a shortage of private estates.",
      "Loss of nesting trees and an inability to reproduce in cities."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "The species eat the same food, and grey squirrels carry a virus that is deadly to red squirrels.",
      "ru": "Оба вида питаются одинаковой пищей, а серые белки переносят вирус, смертельный для рыжих."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "Blocking sunlight concerns the plant example, not squirrels.",
        "ru": "Блокировка света относится к растениям, а не к белкам."
      },
      {
        "choiceIndex": 2,
        "en": "Artificial feeding and estate shortages are not cited.",
        "ru": "Искусственное кормление и нехватка усадеб не названы."
      },
      {
        "choiceIndex": 3,
        "en": "Those are not the two mechanisms described.",
        "ru": "Эти два механизма не описаны."
      }
    ],
    "answerEvidence": "The species eat the same food, and grey squirrels carry a virus that is deadly to red squirrels.",
    "evidenceTiming": {
      "startSeconds": 88.22,
      "endSeconds": 114.28
    },
    "sourceEvidence": {
      "pdfPage": 112,
      "pdfPages": [
        112
      ],
      "printedPage": 111,
      "sourceStartSeconds": 378.47,
      "sourceEndSeconds": 404.53,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p4"
  },
  {
    "id": "large-c21-t3-listening-030",
    "domain": "listening",
    "stimulusId": "c21-t3-invasive-control",
    "clusterId": "c21-t3-invasive-control",
    "sourceTest": 3,
    "topic": "ecology",
    "skill": "sequence",
    "tags": [
      "sequence"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Following events, procedures or proposed actions in order",
      "ru": "Понимание порядка событий, процедур или действий"
    },
    "prompt": "Which response best follows the lecturer’s proposed monitoring approach?",
    "choices": [
      "Destroy the species immediately and report it only if destruction fails.",
      "Move it to a safer area before officials have identified it.",
      "Photograph and report observations without handling or destroying the species.",
      "Keep the observation private until a national database is complete."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "The lecturer combines shared monitoring with public photographs and location reports, explicitly warning against touching or destroying finds.",
      "ru": "Лектор объединяет общую систему наблюдения с фотографиями и сообщениями граждан о месте, прямо запрещая трогать или уничтожать находки."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Immediate destruction contradicts the explicit warning.",
        "ru": "Немедленное уничтожение противоречит прямому предупреждению."
      },
      {
        "choiceIndex": 1,
        "en": "Moving it involves handling, which the speaker advises against.",
        "ru": "Перемещение требует контакта, против которого предупреждает говорящий."
      },
      {
        "choiceIndex": 3,
        "en": "Sharing information is the purpose; secrecy is not requested.",
        "ru": "Цель — обмен сведениями; сохранять их в тайне не предлагают."
      }
    ],
    "answerEvidence": "The lecturer combines shared monitoring with public photographs and location reports, explicitly warning against touching or destroying finds.",
    "evidenceTiming": {
      "startSeconds": 120.32,
      "endSeconds": 181.04
    },
    "sourceEvidence": {
      "pdfPage": 112,
      "pdfPages": [
        112
      ],
      "printedPage": 111,
      "sourceStartSeconds": 410.57,
      "sourceEndSeconds": 471.29,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t3-p4"
  },
  {
    "id": "large-c21-t4-listening-001",
    "domain": "listening",
    "stimulusId": "c21-t4-shopping-errands",
    "clusterId": "c21-t4-shopping-errands",
    "sourceTest": 4,
    "topic": "daily-life",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "Why does the interviewer ask for the shopper’s name?",
    "choices": [
      "To send him offers from the shops he mentions.",
      "To check that he is registered for an interview at the council.",
      "To distinguish his response when she reviews the survey results.",
      "To print it beside his opinions in a public report."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "She says names and personal details will not be published; the name helps her identify responses during analysis.",
      "ru": "Она говорит, что имя и личные данные не опубликуют; имя помогает различать ответы при анализе."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "No marketing use is mentioned.",
        "ru": "Маркетинговое использование не упоминается."
      },
      {
        "choiceIndex": 1,
        "en": "The council interview is his separate reason for preparing in town.",
        "ru": "Собеседование в совете — его отдельная причина подготовки в городе."
      },
      {
        "choiceIndex": 3,
        "en": "She explicitly rules out publishing those details.",
        "ru": "Она прямо исключает публикацию этих данных."
      }
    ],
    "answerEvidence": "She says names and personal details will not be published; the name helps her identify responses during analysis.",
    "evidenceTiming": {
      "startSeconds": 25.02,
      "endSeconds": 45.08
    },
    "sourceEvidence": {
      "pdfPage": 113,
      "pdfPages": [
        113
      ],
      "printedPage": 112,
      "sourceStartSeconds": 126.02,
      "sourceEndSeconds": 146.08,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p1"
  },
  {
    "id": "large-c21-t4-listening-002",
    "domain": "listening",
    "stimulusId": "c21-t4-shopping-errands",
    "clusterId": "c21-t4-shopping-errands",
    "sourceTest": 4,
    "topic": "daily-life",
    "skill": "change-of-plan",
    "tags": [
      "change-of-plan"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Distinguishing an earlier position from a later change",
      "ru": "Различение исходной позиции и последующего изменения"
    },
    "prompt": "Why has the man used a motorbike instead of his usual transport today?",
    "choices": [
      "The survey requires him to demonstrate how he travels.",
      "The bus service has stopped running on Saturdays.",
      "He needs to go to work later.",
      "He has bought a new motorbike in town."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "He normally takes a bus, but work later in the day explains today’s different choice.",
      "ru": "Обычно он ездит на автобусе, но последующая работа объясняет сегодняшний выбор."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The survey records his choice; it does not cause it.",
        "ru": "Опрос фиксирует его выбор, а не вызывает его."
      },
      {
        "choiceIndex": 1,
        "en": "No cancellation of Saturday buses is mentioned.",
        "ru": "Отмена субботних автобусов не упоминается."
      },
      {
        "choiceIndex": 3,
        "en": "He does not say he bought the motorbike today.",
        "ru": "Он не говорит, что купил мотоцикл сегодня."
      }
    ],
    "answerEvidence": "He normally takes a bus, but work later in the day explains today’s different choice.",
    "evidenceTiming": {
      "startSeconds": 45.48,
      "endSeconds": 57.02
    },
    "sourceEvidence": {
      "pdfPage": 113,
      "pdfPages": [
        113
      ],
      "printedPage": 112,
      "sourceStartSeconds": 146.48,
      "sourceEndSeconds": 158.02,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p1"
  },
  {
    "id": "large-c21-t4-listening-003",
    "domain": "listening",
    "stimulusId": "c21-t4-shopping-errands",
    "clusterId": "c21-t4-shopping-errands",
    "sourceTest": 4,
    "topic": "daily-life",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "How does the man describe his preferred shopping day?",
    "choices": [
      "He prefers Monday even when work makes visiting impossible.",
      "He has no preference as long as every shop is open late.",
      "He chooses Monday when he is free because the shops are quieter.",
      "He always shops on Saturday because it offers the widest selection."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "Availability comes first, but if he is free on Monday he prefers the less crowded shops.",
      "ru": "Сначала важна возможность прийти, но если понедельник свободен, он предпочитает менее людные магазины."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "His preference is explicitly conditional on being free.",
        "ru": "Его предпочтение прямо зависит от свободного времени."
      },
      {
        "choiceIndex": 1,
        "en": "He does express a preference; late opening is not the reason.",
        "ru": "Он выражает предпочтение; позднее закрытие не названо причиной."
      },
      {
        "choiceIndex": 3,
        "en": "He is there on Saturday, but does not identify it as his preference.",
        "ru": "Сегодня он пришёл в субботу, но не называет её предпочтительной."
      }
    ],
    "answerEvidence": "Availability comes first, but if he is free on Monday he prefers the less crowded shops.",
    "evidenceTiming": {
      "startSeconds": 100.94,
      "endSeconds": 115.7
    },
    "sourceEvidence": {
      "pdfPage": 113,
      "pdfPages": [
        113
      ],
      "printedPage": 112,
      "sourceStartSeconds": 201.94,
      "sourceEndSeconds": 216.7,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p1"
  },
  {
    "id": "large-c21-t4-listening-004",
    "domain": "listening",
    "stimulusId": "c21-t4-shopping-opinions",
    "clusterId": "c21-t4-shopping-opinions",
    "sourceTest": 4,
    "topic": "daily-life",
    "skill": "speaker-attitude",
    "tags": [
      "speaker-attitude"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Recognising a speaker’s evaluation or preference",
      "ru": "Распознавание оценки или предпочтения говорящего"
    },
    "prompt": "What does the man single out as the best feature of shopping in Broadbeach?",
    "choices": [
      "The shopping centre’s distance from his home.",
      "The unusually low prices throughout the town.",
      "The number of new cafés replacing older businesses.",
      "The service he receives in the shops."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "Although he also praises the range of shops, he chooses service when asked what he likes best.",
      "ru": "Хотя он положительно оценивает и ассортимент магазинов, на вопрос о главном достоинстве он выбирает обслуживание."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Distance is mentioned later, not as the best feature of town shopping.",
        "ru": "Расстояние упоминается позже, а не как главное достоинство покупок в городе."
      },
      {
        "choiceIndex": 1,
        "en": "He makes no general claim about unusually low prices.",
        "ru": "Об исключительно низких ценах в целом он не говорит."
      },
      {
        "choiceIndex": 2,
        "en": "He later criticises the number of cafés.",
        "ru": "Позже он критикует число кафе."
      }
    ],
    "answerEvidence": "Although he also praises the range of shops, he chooses service when asked what he likes best.",
    "evidenceTiming": {
      "startSeconds": 7.44,
      "endSeconds": 25.5
    },
    "sourceEvidence": {
      "pdfPage": 113,
      "pdfPages": [
        113
      ],
      "printedPage": 112,
      "sourceStartSeconds": 272.34,
      "sourceEndSeconds": 290.4,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p1"
  },
  {
    "id": "large-c21-t4-listening-005",
    "domain": "listening",
    "stimulusId": "c21-t4-shopping-opinions",
    "clusterId": "c21-t4-shopping-opinions",
    "sourceTest": 4,
    "topic": "daily-life",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "Why would the man prefer some coffee-shop premises to be used differently?",
    "choices": [
      "He thinks the town urgently needs more clothing shops.",
      "He wants the bookshop moved into the new centre so fewer shops remain downtown.",
      "He thinks the new cafés should be moved to the shopping centre outside town.",
      "He wants more variety, particularly another place to buy books."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "He considers cafés overrepresented and would welcome more choice in bookshops; clothing is already sufficiently provided.",
      "ru": "Он считает кафе слишком многочисленными и хотел бы выбор книжных магазинов; магазинов одежды, по его мнению, достаточно."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "He says there are enough clothing shops.",
        "ru": "Он говорит, что магазинов одежды достаточно."
      },
      {
        "choiceIndex": 1,
        "en": "He asks for more book-buying choice, not relocation to reduce town-centre shops.",
        "ru": "Он хочет большего выбора книг, а не переноса магазинов из центра."
      },
      {
        "choiceIndex": 2,
        "en": "He wants a greater variety of shops, not a plan to relocate the cafés.",
        "ru": "Он хочет большего разнообразия магазинов, а не плана переноса кафе."
      }
    ],
    "answerEvidence": "He considers cafés overrepresented and would welcome more choice in bookshops; clothing is already sufficiently provided.",
    "evidenceTiming": {
      "startSeconds": 32.6,
      "endSeconds": 54.6
    },
    "sourceEvidence": {
      "pdfPage": 113,
      "pdfPages": [
        113
      ],
      "printedPage": 112,
      "sourceStartSeconds": 297.5,
      "sourceEndSeconds": 319.5,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p1"
  },
  {
    "id": "large-c21-t4-listening-006",
    "domain": "listening",
    "stimulusId": "c21-t4-shopping-opinions",
    "clusterId": "c21-t4-shopping-opinions",
    "sourceTest": 4,
    "topic": "daily-life",
    "skill": "speaker-attitude",
    "tags": [
      "speaker-attitude"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Recognising a speaker’s evaluation or preference",
      "ru": "Распознавание оценки или предпочтения говорящего"
    },
    "prompt": "What does he like most about the new shopping centre’s appearance?",
    "choices": [
      "The size of the cinema inside it.",
      "The glass roof above the building.",
      "The number of restaurants near the entrance.",
      "The large plants arranged around it."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "He acknowledges the impressive roof but then identifies the planting as his favourite feature.",
      "ru": "Он признаёт, что крыша впечатляет, но затем называет озеленение любимой особенностью."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "He later questions the benefit of the cinema.",
        "ru": "Позже он ставит под сомнение пользу нового кинотеатра."
      },
      {
        "choiceIndex": 1,
        "en": "The roof impresses him, but it is not his stated favourite.",
        "ru": "Крыша его впечатляет, но не названа любимой особенностью."
      },
      {
        "choiceIndex": 2,
        "en": "Restaurants are not identified in this description.",
        "ru": "Рестораны в этом описании не названы."
      }
    ],
    "answerEvidence": "He acknowledges the impressive roof but then identifies the planting as his favourite feature.",
    "evidenceTiming": {
      "startSeconds": 63.34,
      "endSeconds": 76.6
    },
    "sourceEvidence": {
      "pdfPage": 114,
      "pdfPages": [
        114
      ],
      "printedPage": 113,
      "sourceStartSeconds": 328.24,
      "sourceEndSeconds": 341.5,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p1"
  },
  {
    "id": "large-c21-t4-listening-007",
    "domain": "listening",
    "stimulusId": "c21-t4-shopping-opinions",
    "clusterId": "c21-t4-shopping-opinions",
    "sourceTest": 4,
    "topic": "daily-life",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "Why is he unconvinced by the new cinema?",
    "choices": [
      "It shows only films that are unavailable in the town cinema.",
      "He has already tried it and found the sound system unreliable.",
      "The cinema already in town offers a larger venue.",
      "It has closed before he has been able to visit."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "He has not used it; his comparison is based on the greater size of the existing cinema.",
      "ru": "Он там ещё не был; его сравнение основано на большем размере существующего кинотеатра."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Film selection is not discussed.",
        "ru": "Выбор фильмов не обсуждается."
      },
      {
        "choiceIndex": 1,
        "en": "He explicitly says he has not used it yet.",
        "ru": "Он прямо говорит, что ещё не пользовался им."
      },
      {
        "choiceIndex": 3,
        "en": "No closure is mentioned.",
        "ru": "Закрытие не упоминается."
      }
    ],
    "answerEvidence": "He has not used it; his comparison is based on the greater size of the existing cinema.",
    "evidenceTiming": {
      "startSeconds": 79.88,
      "endSeconds": 89.02
    },
    "sourceEvidence": {
      "pdfPage": 114,
      "pdfPages": [
        114
      ],
      "printedPage": 113,
      "sourceStartSeconds": 344.78,
      "sourceEndSeconds": 353.92,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p1"
  },
  {
    "id": "large-c21-t4-listening-008",
    "domain": "listening",
    "stimulusId": "c21-t4-exhibition-benefits",
    "clusterId": "c21-t4-exhibition-benefits",
    "sourceTest": 4,
    "topic": "business",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "Why did TalkCon use the Breakout area again in its second year?",
    "choices": [
      "People had asked for a repeat of the relaxed product-trying opportunity.",
      "The organisers required every exhibitor to use the same area twice.",
      "The Business Village had permanently closed after the first year.",
      "The company was prohibited from showing products on its stand."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "Visitors could relax and try the products there; popular requests prompted the company to use the area again.",
      "ru": "Там посетители могли отдохнуть и попробовать продукцию; просьбы посетителей побудили компанию повторить этот формат."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "The reason is popular demand, not a compulsory rule.",
        "ru": "Причина — спрос посетителей, а не обязательное правило."
      },
      {
        "choiceIndex": 2,
        "en": "No closure of the Business Village is reported.",
        "ru": "О закрытии Business Village не сообщается."
      },
      {
        "choiceIndex": 3,
        "en": "No prohibition on demonstrations at a stand is stated.",
        "ru": "Запрет демонстраций на стенде не назван."
      }
    ],
    "answerEvidence": "Visitors could relax and try the products there; popular requests prompted the company to use the area again.",
    "evidenceTiming": {
      "startSeconds": 29.16,
      "endSeconds": 47.64
    },
    "sourceEvidence": {
      "pdfPage": 114,
      "pdfPages": [
        114
      ],
      "printedPage": 113,
      "sourceStartSeconds": 71.86,
      "sourceEndSeconds": 90.34,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p2"
  },
  {
    "id": "large-c21-t4-listening-009",
    "domain": "listening",
    "stimulusId": "c21-t4-exhibition-benefits",
    "clusterId": "c21-t4-exhibition-benefits",
    "sourceTest": 4,
    "topic": "business",
    "skill": "sequence",
    "tags": [
      "sequence"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Following events, procedures or proposed actions in order",
      "ru": "Понимание порядка событий, процедур или действий"
    },
    "prompt": "Which distinction correctly separates TalkCon’s completed and planned activities?",
    "choices": [
      "It has opened its own TalkCon Zone; sponsorship is only a future idea.",
      "Connections sponsorship is already completed; Digital Marketing remains a future intention.",
      "It has abandoned networking; its next aim is to stop demonstrating products.",
      "It has used Digital Marketing twice; the Breakout area is untried."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "Sponsoring the networking area happened last year. The digital-marketing presence and own zone are described as future possibilities.",
      "ru": "Спонсирование зоны деловых контактов было в прошлом году. Присутствие в цифровом маркетинге и собственная зона описаны как будущие возможности."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The company’s own zone is a possibility for later, not completed.",
        "ru": "Собственная зона — возможный будущий шаг, а не завершённый."
      },
      {
        "choiceIndex": 2,
        "en": "The successful networking and demonstrations are not described as abandoned.",
        "ru": "Успешные контакты и демонстрации не описаны как прекращённые."
      },
      {
        "choiceIndex": 3,
        "en": "The Breakout area was used twice; Digital Marketing is still planned.",
        "ru": "Breakout использовали дважды; цифровой маркетинг ещё планируется."
      }
    ],
    "answerEvidence": "Sponsoring the networking area happened last year. The digital-marketing presence and own zone are described as future possibilities.",
    "evidenceTiming": {
      "startSeconds": 48.64,
      "endSeconds": 76.38
    },
    "sourceEvidence": {
      "pdfPage": 114,
      "pdfPages": [
        114
      ],
      "printedPage": 113,
      "sourceStartSeconds": 91.34,
      "sourceEndSeconds": 119.08,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p2"
  },
  {
    "id": "large-c21-t4-listening-010",
    "domain": "listening",
    "stimulusId": "c21-t4-exhibition-benefits",
    "clusterId": "c21-t4-exhibition-benefits",
    "sourceTest": 4,
    "topic": "business",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "Who is eligible to benefit from the exhibitor discount scheme?",
    "choices": [
      "Only staff who spend at least £400 at each retailer.",
      "The scheme covers all staff within each participating organisation.",
      "Only employees buying products from their own company.",
      "Only directors who personally give a keynote speech."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "The presenter says the scheme extends to everyone in the organisation; the £400 figure describes past average savings.",
      "ru": "Ведущий говорит, что программа распространяется на всех в организации; 400 фунтов — показатель прошлой средней экономии."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "£400 is an average saving, not a minimum spend.",
        "ru": "400 фунтов — средняя экономия, а не минимальные расходы."
      },
      {
        "choiceIndex": 2,
        "en": "The discounts cover outside retail brands.",
        "ru": "Скидки относятся к сторонним торговым брендам."
      },
      {
        "choiceIndex": 3,
        "en": "No director or speaker condition is given.",
        "ru": "Условие быть директором или докладчиком не названо."
      }
    ],
    "answerEvidence": "The presenter says the scheme extends to everyone in the organisation; the £400 figure describes past average savings.",
    "evidenceTiming": {
      "startSeconds": 91.64,
      "endSeconds": 128.16
    },
    "sourceEvidence": {
      "pdfPage": 114,
      "pdfPages": [
        114
      ],
      "printedPage": 113,
      "sourceStartSeconds": 134.34,
      "sourceEndSeconds": 170.86,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p2"
  },
  {
    "id": "large-c21-t4-listening-011",
    "domain": "listening",
    "stimulusId": "c21-t4-exhibition-speakers",
    "clusterId": "c21-t4-exhibition-speakers",
    "sourceTest": 4,
    "topic": "business",
    "skill": "gist",
    "tags": [
      "gist"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding the main message",
      "ru": "Понимание основной мысли"
    },
    "prompt": "What central story is Jim Clowrie expected to tell?",
    "choices": [
      "How a failed café persuaded him to return permanently to growing vegetables.",
      "How a small food business grew rapidly into an international restaurant operation.",
      "How he gave up food businesses to launch a digital-marketing company.",
      "How he inherited a restaurant chain and kept it at the same size."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "His progression from selling vegetables to a café and then many restaurants provides the subject of the talk.",
      "ru": "Его путь от продажи овощей к кафе, а затем к множеству ресторанов составляет тему выступления."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The café was unexpectedly successful, not a failure.",
        "ru": "Кафе неожиданно стало успешным, а не провалилось."
      },
      {
        "choiceIndex": 2,
        "en": "Digital marketing belongs to other speakers’ backgrounds.",
        "ru": "Цифровой маркетинг относится к биографиям других докладчиков."
      },
      {
        "choiceIndex": 3,
        "en": "The account describes building and expanding, not inheritance without change.",
        "ru": "Описано создание и расширение, а не наследование без изменений."
      }
    ],
    "answerEvidence": "His progression from selling vegetables to a café and then many restaurants provides the subject of the talk.",
    "evidenceTiming": {
      "startSeconds": 6.35,
      "endSeconds": 29.69
    },
    "sourceEvidence": {
      "pdfPage": 114,
      "pdfPages": [
        114
      ],
      "printedPage": 113,
      "sourceStartSeconds": 15.55,
      "sourceEndSeconds": 38.89,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p2"
  },
  {
    "id": "large-c21-t4-listening-012",
    "domain": "listening",
    "stimulusId": "c21-t4-exhibition-speakers",
    "clusterId": "c21-t4-exhibition-speakers",
    "sourceTest": 4,
    "topic": "business",
    "skill": "inference",
    "tags": [
      "inference"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Drawing an inference supported by the recording",
      "ru": "Вывод, опирающийся на содержание записи"
    },
    "prompt": "Which audience question would Oliver Stanton’s advertised talk most directly address?",
    "choices": [
      "How can an established publisher change into a digital-marketing provider?",
      "How can a teenager obtain a business bank account?",
      "How can a broadcaster win a televised recruitment competition?",
      "What can overseas ventures teach about business across cultures?"
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "His ventures across several countries lead to a talk on business practices in different cultures.",
      "ru": "Опыт предприятий в нескольких странах приводит к теме деловых практик разных культур."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The publishing transformation belongs to Salman Khan.",
        "ru": "Преобразование издательства относится к Салману Хану."
      },
      {
        "choiceIndex": 1,
        "en": "The teenage account story belongs to David France.",
        "ru": "История подросткового банковского счёта относится к Дэвиду Франсу."
      },
      {
        "choiceIndex": 2,
        "en": "The television contest belongs to Francesca Heptonstall.",
        "ru": "Телевизионный конкурс относится к Франческе Хептонстолл."
      }
    ],
    "answerEvidence": "His ventures across several countries lead to a talk on business practices in different cultures.",
    "evidenceTiming": {
      "startSeconds": 60.81,
      "endSeconds": 93.85
    },
    "sourceEvidence": {
      "pdfPage": 115,
      "pdfPages": [
        115
      ],
      "printedPage": 114,
      "sourceStartSeconds": 70.01,
      "sourceEndSeconds": 103.05,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p2"
  },
  {
    "id": "large-c21-t4-listening-013",
    "domain": "listening",
    "stimulusId": "c21-t4-exhibition-speakers",
    "clusterId": "c21-t4-exhibition-speakers",
    "sourceTest": 4,
    "topic": "business",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "Which part of Francesca Heptonstall’s work will be the focus of her talk?",
    "choices": [
      "Comparing the furniture industries of several countries.",
      "Winning a senior role on a television programme.",
      "Her efforts to help people gain employment.",
      "Developing her main technology businesses."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "Her technology interests and television background are context; the talk will concentrate on employment support and her jobs-fair work.",
      "ru": "Технологические интересы и телевидение — контекст; выступление посвящено помощи с работой и её ярмарке вакансий."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "International furniture ventures belong to Oliver’s background.",
        "ru": "Мебельные предприятия за рубежом относятся к опыту Оливера."
      },
      {
        "choiceIndex": 1,
        "en": "The contest is background, not the stated talk focus.",
        "ru": "Конкурс — биографический фон, а не названная тема."
      },
      {
        "choiceIndex": 3,
        "en": "Technology is her main business interest, but the talk focuses elsewhere.",
        "ru": "Технологии — основной бизнес-интерес, но выступление о другом."
      }
    ],
    "answerEvidence": "Her technology interests and television background are context; the talk will concentrate on employment support and her jobs-fair work.",
    "evidenceTiming": {
      "startSeconds": 95.09,
      "endSeconds": 121.89
    },
    "sourceEvidence": {
      "pdfPage": 115,
      "pdfPages": [
        115
      ],
      "printedPage": 114,
      "sourceStartSeconds": 104.29,
      "sourceEndSeconds": 131.09,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p2"
  },
  {
    "id": "large-c21-t4-listening-014",
    "domain": "listening",
    "stimulusId": "c21-t4-exhibition-speakers",
    "clusterId": "c21-t4-exhibition-speakers",
    "sourceTest": 4,
    "topic": "business",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "How is Annie Craven’s session intended to work?",
    "choices": [
      "Only new business owners may attend the interactive exercises.",
      "The session offers business advice without considering personal circumstances.",
      "Participants examine their own obstacles, including issues beyond business.",
      "Participants listen only to a history of her publishing company."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "Her interactive approach concerns obstacles in life as well as business and is presented as useful at different career stages.",
      "ru": "Её интерактивный подход касается препятствий в жизни и бизнесе и предлагается людям на разных этапах карьеры."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Both beginners and established people are included.",
        "ru": "Включены и начинающие, и опытные люди."
      },
      {
        "choiceIndex": 1,
        "en": "Personal-life obstacles are explicitly included.",
        "ru": "Препятствия в личной жизни прямо включены."
      },
      {
        "choiceIndex": 3,
        "en": "Publishing is another speaker’s background and the session is interactive.",
        "ru": "Издательское дело относится к другому докладчику; эта сессия интерактивная."
      }
    ],
    "answerEvidence": "Her interactive approach concerns obstacles in life as well as business and is presented as useful at different career stages.",
    "evidenceTiming": {
      "startSeconds": 144.26,
      "endSeconds": 169.92
    },
    "sourceEvidence": {
      "pdfPage": 115,
      "pdfPages": [
        115
      ],
      "printedPage": 114,
      "sourceStartSeconds": 153.46,
      "sourceEndSeconds": 179.12,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p2"
  },
  {
    "id": "large-c21-t4-listening-015",
    "domain": "listening",
    "stimulusId": "c21-t4-future-housing",
    "clusterId": "c21-t4-future-housing",
    "sourceTest": 4,
    "topic": "study",
    "skill": "change-of-plan",
    "tags": [
      "change-of-plan"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Distinguishing an earlier position from a later change",
      "ru": "Различение исходной позиции и последующего изменения"
    },
    "prompt": "How does Leo clarify what the presentation requires?",
    "choices": [
      "They should evaluate possible developments and support points with concrete examples.",
      "They should build a physical model before deciding on any topic.",
      "They only need to list general predictions without evaluating them.",
      "They must invent a completely new house design without using existing cases."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "He shifts Mia away from inventing new designs toward reporting and evaluating developments, with specific cases as evidence.",
      "ru": "Он направляет Мию от изобретения проектов к описанию и оценке изменений с конкретными примерами в качестве доказательств."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "No model-building requirement is stated.",
        "ru": "Создание модели не названо требованием."
      },
      {
        "choiceIndex": 2,
        "en": "He explicitly warns against being too general.",
        "ru": "Он прямо предостерегает от чрезмерной общности."
      },
      {
        "choiceIndex": 3,
        "en": "He says creative invention is not what he thinks the task requires.",
        "ru": "Он не считает, что задача требует творческого изобретения."
      }
    ],
    "answerEvidence": "He shifts Mia away from inventing new designs toward reporting and evaluating developments, with specific cases as evidence.",
    "evidenceTiming": {
      "startSeconds": 5.72,
      "endSeconds": 25.16
    },
    "sourceEvidence": {
      "pdfPage": 115,
      "pdfPages": [
        115
      ],
      "printedPage": 114,
      "sourceStartSeconds": 55.62,
      "sourceEndSeconds": 75.06,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p3"
  },
  {
    "id": "large-c21-t4-listening-016",
    "domain": "listening",
    "stimulusId": "c21-t4-future-housing",
    "clusterId": "c21-t4-future-housing",
    "sourceTest": 4,
    "topic": "study",
    "skill": "agreement",
    "tags": [
      "agreement"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Tracking speakers’ agreement and final decisions",
      "ru": "Отслеживание согласия и итоговых решений говорящих"
    },
    "prompt": "Which housing topic do the students finally choose?",
    "choices": [
      "Accommodation exclusively for one person.",
      "Commercial buildings that remain entirely as offices.",
      "Homes shared by different generations.",
      "Homes reserved only for elderly residents."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "After considering single-person and elderly housing, Leo returns to Mia’s intergenerational suggestion and they agree on it.",
      "ru": "После вариантов для одного человека и пожилых Лео возвращается к предложению Мии о разных поколениях, и они соглашаются."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Someone else is already covering single-person housing.",
        "ru": "Жильё для одного человека уже рассматривает кто-то другой."
      },
      {
        "choiceIndex": 1,
        "en": "Their topic is housing, not retaining buildings entirely as offices.",
        "ru": "Их тема — жильё, а не сохранение зданий только под офисы."
      },
      {
        "choiceIndex": 3,
        "en": "Elderly housing is considered but not selected as the exclusive focus.",
        "ru": "Жильё для пожилых рассматривают, но не выбирают как единственную тему."
      }
    ],
    "answerEvidence": "After considering single-person and elderly housing, Leo returns to Mia’s intergenerational suggestion and they agree on it.",
    "evidenceTiming": {
      "startSeconds": 39.92,
      "endSeconds": 65.9
    },
    "sourceEvidence": {
      "pdfPage": 115,
      "pdfPages": [
        115
      ],
      "printedPage": 114,
      "sourceStartSeconds": 89.82,
      "sourceEndSeconds": 115.8,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p3"
  },
  {
    "id": "large-c21-t4-listening-017",
    "domain": "listening",
    "stimulusId": "c21-t4-future-housing",
    "clusterId": "c21-t4-future-housing",
    "sourceTest": 4,
    "topic": "study",
    "skill": "agreement",
    "tags": [
      "agreement"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Tracking speakers’ agreement and final decisions",
      "ru": "Отслеживание согласия и итоговых решений говорящих"
    },
    "prompt": "Which response to urban housing demand do they end up favouring?",
    "choices": [
      "Rejecting urban housing because most future demand will be rural.",
      "Replacing all shared accommodation with detached single-storey homes.",
      "Building apartment blocks vertically rather than spreading development outwards.",
      "Keeping every commercial building unchanged while expanding roads."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "They discuss adaptation and smaller spaces, then endorse multi-storey apartments as building upwards rather than outwards.",
      "ru": "Они обсуждают переоборудование и небольшие пространства, затем поддерживают многоэтажные квартиры — рост вверх, а не вширь."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "They expect demand mainly in urban areas.",
        "ru": "Они ожидают спрос преимущественно в городах."
      },
      {
        "choiceIndex": 1,
        "en": "Detached low-rise expansion contradicts the stated preference.",
        "ru": "Расширение за счёт отдельных низких домов противоречит их выбору."
      },
      {
        "choiceIndex": 3,
        "en": "Keeping commercial buildings unchanged is not the proposed solution.",
        "ru": "Сохранение коммерческих зданий без изменений не является решением."
      }
    ],
    "answerEvidence": "They discuss adaptation and smaller spaces, then endorse multi-storey apartments as building upwards rather than outwards.",
    "evidenceTiming": {
      "startSeconds": 65.9,
      "endSeconds": 94.84
    },
    "sourceEvidence": {
      "pdfPage": 115,
      "pdfPages": [
        115
      ],
      "printedPage": 114,
      "sourceStartSeconds": 115.8,
      "sourceEndSeconds": 144.74,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p3"
  },
  {
    "id": "large-c21-t4-listening-018",
    "domain": "listening",
    "stimulusId": "c21-t4-housing-features",
    "clusterId": "c21-t4-housing-features",
    "sourceTest": 4,
    "topic": "design",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "Why do the students support shared workspaces near homes?",
    "choices": [
      "They combine a short commute with opportunities to exchange ideas.",
      "They replace every resident’s need for an internet connection.",
      "They ensure neighbours never meet during the working day.",
      "They require everyone in the building to have the same profession."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "Residents avoid travelling to a separate office but can still interact, including with people from different professions.",
      "ru": "Жителям не нужно ехать в отдельный офис, но они могут общаться, в том числе с людьми других профессий."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "Internet replacement is not discussed.",
        "ru": "Замена интернета не обсуждается."
      },
      {
        "choiceIndex": 2,
        "en": "Interaction is a benefit, not something to eliminate.",
        "ru": "Общение — преимущество, а не то, что нужно исключить."
      },
      {
        "choiceIndex": 3,
        "en": "Different professions are specifically valued.",
        "ru": "Разные профессии как раз считаются полезными."
      }
    ],
    "answerEvidence": "Residents avoid travelling to a separate office but can still interact, including with people from different professions.",
    "evidenceTiming": {
      "startSeconds": 26.06,
      "endSeconds": 49.66
    },
    "sourceEvidence": {
      "pdfPage": 116,
      "pdfPages": [
        116
      ],
      "printedPage": 115,
      "sourceStartSeconds": 35.16,
      "sourceEndSeconds": 58.76,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p3"
  },
  {
    "id": "large-c21-t4-listening-019",
    "domain": "listening",
    "stimulusId": "c21-t4-housing-features",
    "clusterId": "c21-t4-housing-features",
    "sourceTest": 4,
    "topic": "design",
    "skill": "reason",
    "tags": [
      "reason"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Connecting a statement with its stated reason",
      "ru": "Связь утверждения с его причиной"
    },
    "prompt": "What problem could movable internal walls help a household address?",
    "choices": [
      "The lack of any outdoor space in the surrounding neighbourhood.",
      "Changes in residents’ space needs as family circumstances develop.",
      "The need to move the whole building to a new city.",
      "A rule that every child must leave home immediately after school."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "The examples concern grown children staying at home and an older relative moving in, each creating different space needs.",
      "ru": "Примеры касаются взрослых детей, остающихся дома, и переезда пожилого родственника: меняются потребности в пространстве."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Outdoor provision is a separate design issue.",
        "ru": "Наружное пространство — отдельный вопрос проектирования."
      },
      {
        "choiceIndex": 2,
        "en": "The walls change internal layout, not the building’s location.",
        "ru": "Стены меняют внутреннюю планировку, а не местонахождение здания."
      },
      {
        "choiceIndex": 3,
        "en": "The example explicitly allows children to remain with their parents.",
        "ru": "Пример прямо допускает проживание взрослых детей с родителями."
      }
    ],
    "answerEvidence": "The examples concern grown children staying at home and an older relative moving in, each creating different space needs.",
    "evidenceTiming": {
      "startSeconds": 49.66,
      "endSeconds": 74.76
    },
    "sourceEvidence": {
      "pdfPage": 116,
      "pdfPages": [
        116
      ],
      "printedPage": 115,
      "sourceStartSeconds": 58.76,
      "sourceEndSeconds": 83.86,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p3"
  },
  {
    "id": "large-c21-t4-listening-020",
    "domain": "listening",
    "stimulusId": "c21-t4-housing-features",
    "clusterId": "c21-t4-housing-features",
    "sourceTest": 4,
    "topic": "design",
    "skill": "agreement",
    "tags": [
      "agreement"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Tracking speakers’ agreement and final decisions",
      "ru": "Отслеживание согласия и итоговых решений говорящих"
    },
    "prompt": "What concern do both students have about health-monitoring mirrors?",
    "choices": [
      "They would measure changes in fitness rather than detect signs of illness.",
      "They might create unnecessary worry about minor conditions.",
      "They would remove residents’ ability to see how their health changes over time.",
      "They would prevent any contact with a doctor."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "Both hesitate because automatic detection might generate unnecessary worry about minor conditions.",
      "ru": "Оба сомневаются, поскольку автоматическое обнаружение может вызвать ненужную тревогу из-за незначительных состояний."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "The mirrors are described as detecting illness; the concern is anxiety about minor conditions.",
        "ru": "Зеркала описаны как выявляющие болезни; опасение касается тревоги из-за незначительных состояний."
      },
      {
        "choiceIndex": 2,
        "en": "Loss of self-observation is not the concern discussed.",
        "ru": "Потеря возможности наблюдать за собой не является обсуждаемым опасением."
      },
      {
        "choiceIndex": 3,
        "en": "Automatic contact with a doctor is one of the described functions.",
        "ru": "Автоматическая связь с врачом — одна из описанных функций."
      }
    ],
    "answerEvidence": "Both hesitate because automatic detection might generate unnecessary worry about minor conditions.",
    "evidenceTiming": {
      "startSeconds": 74.86,
      "endSeconds": 93.64
    },
    "sourceEvidence": {
      "pdfPage": 116,
      "pdfPages": [
        116
      ],
      "printedPage": 115,
      "sourceStartSeconds": 83.96,
      "sourceEndSeconds": 102.74,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p3"
  },
  {
    "id": "large-c21-t4-listening-021",
    "domain": "listening",
    "stimulusId": "c21-t4-housing-features",
    "clusterId": "c21-t4-housing-features",
    "sourceTest": 4,
    "topic": "design",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "Why do the students qualify the benefits of a car-free residential centre?",
    "choices": [
      "It cannot reduce car use unless all surrounding roads are closed.",
      "Child-friendly spaces might be less accessible to some residents.",
      "It improves access for everyone but leaves no place for children.",
      "It is suitable only if every resident owns an electric bicycle."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "They recognise an advantage for children, then raise accessibility concerns for some older or disabled residents.",
      "ru": "Они признают пользу для детей, затем говорят о доступности для некоторых пожилых людей и людей с инвалидностью."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "No requirement to close every surrounding road is stated.",
        "ru": "Требование закрыть все соседние дороги не названо."
      },
      {
        "choiceIndex": 2,
        "en": "This reverses the stated benefit and concern.",
        "ru": "Здесь перепутаны преимущество и опасение."
      },
      {
        "choiceIndex": 3,
        "en": "Electric-bike storage is a separate suggestion, not a condition.",
        "ru": "Хранение электровелосипедов — отдельная идея, а не условие."
      }
    ],
    "answerEvidence": "They recognise an advantage for children, then raise accessibility concerns for some older or disabled residents.",
    "evidenceTiming": {
      "startSeconds": 113.16,
      "endSeconds": 131.2
    },
    "sourceEvidence": {
      "pdfPage": 116,
      "pdfPages": [
        116
      ],
      "printedPage": 115,
      "sourceStartSeconds": 122.26,
      "sourceEndSeconds": 140.3,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p3"
  },
  {
    "id": "large-c21-t4-listening-022",
    "domain": "listening",
    "stimulusId": "c21-t4-music-recovery",
    "clusterId": "c21-t4-music-recovery",
    "sourceTest": 4,
    "topic": "research",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "What contrast does the lecturer draw between evidence and routine care?",
    "choices": [
      "Music is routinely used only because patients cannot communicate after surgery.",
      "Music has research support but remains outside much routine recovery care.",
      "Music is already the only routine treatment, despite no relevant research.",
      "Medication has disappeared from recovery care because music always replaces it."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "The lecturer describes pain medication as the main current strategy and music as not yet routine despite supportive studies.",
      "ru": "Лектор называет обезболивание основным текущим подходом, а музыку — ещё не обычной практикой, несмотря на поддерживающие исследования."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Inability to communicate is not given as the reason.",
        "ru": "Невозможность общаться не названа причиной."
      },
      {
        "choiceIndex": 2,
        "en": "The account states the opposite about routine use and evidence.",
        "ru": "В записи противоположно описаны обычная практика и наличие исследований."
      },
      {
        "choiceIndex": 3,
        "en": "Medication remains the main strategy in the account.",
        "ru": "В описании лекарства остаются основным подходом."
      }
    ],
    "answerEvidence": "The lecturer describes pain medication as the main current strategy and music as not yet routine despite supportive studies.",
    "evidenceTiming": {
      "startSeconds": 19.85,
      "endSeconds": 67.8
    },
    "sourceEvidence": {
      "pdfPage": 116,
      "pdfPages": [
        116
      ],
      "printedPage": 115,
      "sourceStartSeconds": 94.95,
      "sourceEndSeconds": 142.9,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p4"
  },
  {
    "id": "large-c21-t4-listening-023",
    "domain": "listening",
    "stimulusId": "c21-t4-music-recovery",
    "clusterId": "c21-t4-music-recovery",
    "sourceTest": 4,
    "topic": "research",
    "skill": "gist",
    "tags": [
      "gist"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding the main message",
      "ru": "Понимание основной мысли"
    },
    "prompt": "What did the research team do, according to the lecture?",
    "choices": [
      "It conducted one new hospital trial using the same playlist for every participant.",
      "It compared patients’ preferred styles without examining their recovery or satisfaction.",
      "It brought together evidence from many trials and examined recovery outcomes.",
      "It replaced every hospital’s pain treatment before collecting results."
    ],
    "correctIndex": 2,
    "explanation": {
      "en": "The team reviewed nearly a hundred trials involving thousands of patients, considering outcomes such as satisfaction and length of stay.",
      "ru": "Группа рассмотрела почти сто исследований с тысячами пациентов и такие исходы, как удовлетворённость и длительность пребывания."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "It reviewed many trials involving varied music, not a single uniform-playlist study.",
        "ru": "Группа рассмотрела множество исследований с разной музыкой, а не один опыт с единым плейлистом."
      },
      {
        "choiceIndex": 1,
        "en": "Recovery outcomes and satisfaction were part of the review.",
        "ru": "Исходы восстановления и удовлетворённость входили в обзор."
      },
      {
        "choiceIndex": 3,
        "en": "The work is described as reviewing evidence, not imposing a universal treatment change.",
        "ru": "Работа описана как обзор данных, а не повсеместное изменение лечения."
      }
    ],
    "answerEvidence": "The team reviewed nearly a hundred trials involving thousands of patients, considering outcomes such as satisfaction and length of stay.",
    "evidenceTiming": {
      "startSeconds": 67.9,
      "endSeconds": 105.7
    },
    "sourceEvidence": {
      "pdfPage": 117,
      "pdfPages": [
        117
      ],
      "printedPage": 116,
      "sourceStartSeconds": 143,
      "sourceEndSeconds": 180.8,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p4"
  },
  {
    "id": "large-c21-t4-listening-024",
    "domain": "listening",
    "stimulusId": "c21-t4-music-recovery",
    "clusterId": "c21-t4-music-recovery",
    "sourceTest": 4,
    "topic": "research",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "Which feature of music delivery is supported by the account?",
    "choices": [
      "Headphones were always played loudly to prevent interruptions.",
      "Every patient had to hear the same style through loud ward speakers.",
      "Music pillows were designed to broadcast to every bed in a ward.",
      "Personal listening could still allow conversation with medical staff."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "Styles varied but were calming; headphones allowed communication, and music pillows were audible to their user alone.",
      "ru": "Стили различались, но успокаивали; наушники не мешали общению, а музыкальные подушки были слышны только их пользователю."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Headphones were quiet enough for communication.",
        "ru": "Громкость в наушниках позволяла общаться."
      },
      {
        "choiceIndex": 1,
        "en": "The lecture describes variety and personal listening methods.",
        "ru": "Лекция описывает разнообразие и индивидуальные способы прослушивания."
      },
      {
        "choiceIndex": 2,
        "en": "The pillow’s sound is described as audible only to the person lying on it.",
        "ru": "Звук подушки описан как слышимый только лежащему на ней человеку."
      }
    ],
    "answerEvidence": "Styles varied but were calming; headphones allowed communication, and music pillows were audible to their user alone.",
    "evidenceTiming": {
      "startSeconds": 109.39,
      "endSeconds": 141.89
    },
    "sourceEvidence": {
      "pdfPage": 117,
      "pdfPages": [
        117
      ],
      "printedPage": 116,
      "sourceStartSeconds": 184.49,
      "sourceEndSeconds": 216.99,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p4"
  },
  {
    "id": "large-c21-t4-listening-025",
    "domain": "listening",
    "stimulusId": "c21-t4-music-evidence",
    "clusterId": "c21-t4-music-evidence",
    "sourceTest": 4,
    "topic": "research",
    "skill": "sequence",
    "tags": [
      "sequence"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Following events, procedures or proposed actions in order",
      "ru": "Понимание порядка событий, процедур или действий"
    },
    "prompt": "How did the researchers check patients’ reported experiences?",
    "choices": [
      "They replaced written notes with the patients’ music preferences.",
      "They accepted only reports from patients who had chosen classical music.",
      "They ignored the comparison group’s reports because it had heard no music.",
      "They compared the feedback with medical notes, including pain-medication use."
    ],
    "correctIndex": 3,
    "explanation": {
      "en": "The lecturer says patient feedback was cross-checked against records, and the music group needed less pain medication in the reported studies.",
      "ru": "Лектор говорит, что отзывы сопоставляли с медицинскими записями; в описанных исследованиях группе с музыкой требовалось меньше обезболивания."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Notes were used to check feedback, not discarded.",
        "ru": "Записи использовали для проверки, а не заменяли предпочтениями."
      },
      {
        "choiceIndex": 1,
        "en": "A range of musical styles is described; no classical-only rule is given.",
        "ru": "Описаны разные стили; условия только классической музыки нет."
      },
      {
        "choiceIndex": 2,
        "en": "Both groups’ experiences are discussed and compared.",
        "ru": "Опыт обеих групп обсуждается и сравнивается."
      }
    ],
    "answerEvidence": "The lecturer says patient feedback was cross-checked against records, and the music group needed less pain medication in the reported studies.",
    "evidenceTiming": {
      "startSeconds": 0.42,
      "endSeconds": 33.5
    },
    "sourceEvidence": {
      "pdfPage": 117,
      "pdfPages": [
        117
      ],
      "printedPage": 116,
      "sourceStartSeconds": 236.12,
      "sourceEndSeconds": 269.2,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p4"
  },
  {
    "id": "large-c21-t4-listening-026",
    "domain": "listening",
    "stimulusId": "c21-t4-music-evidence",
    "clusterId": "c21-t4-music-evidence",
    "sourceTest": 4,
    "topic": "research",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "What distinction does the lecturer make about consciousness during the music exposure?",
    "choices": [
      "Awake patients received no benefit unless the music was played after surgery.",
      "It helped unconscious patients too, but awake patients benefited more.",
      "Benefits were reported only while patients were unconscious.",
      "Anaesthetised patients benefited more than awake patients in every study."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "The account says music also had effects under general anaesthesia, while the positive effects were greater in awake patients.",
      "ru": "В записи говорится об эффекте и под общим наркозом, но о более сильном положительном эффекте у бодрствующих пациентов."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Timing before, during or after surgery made little difference in the account.",
        "ru": "По описанию время до, во время или после операции мало влияло."
      },
      {
        "choiceIndex": 2,
        "en": "The awake group is explicitly said to benefit.",
        "ru": "Польза для бодрствующей группы прямо названа."
      },
      {
        "choiceIndex": 3,
        "en": "This reverses the reported comparison.",
        "ru": "Это переворачивает названное сравнение."
      }
    ],
    "answerEvidence": "The account says music also had effects under general anaesthesia, while the positive effects were greater in awake patients.",
    "evidenceTiming": {
      "startSeconds": 33.5,
      "endSeconds": 52.8
    },
    "sourceEvidence": {
      "pdfPage": 117,
      "pdfPages": [
        117
      ],
      "printedPage": 116,
      "sourceStartSeconds": 269.2,
      "sourceEndSeconds": 288.5,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p4"
  },
  {
    "id": "large-c21-t4-listening-027",
    "domain": "listening",
    "stimulusId": "c21-t4-music-evidence",
    "clusterId": "c21-t4-music-evidence",
    "sourceTest": 4,
    "topic": "research",
    "skill": "qualification",
    "tags": [
      "qualification"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Understanding a condition, limitation or degree of certainty",
      "ru": "Понимание условия, ограничения или степени уверенности"
    },
    "prompt": "How confidently does the lecturer explain why music may help?",
    "choices": [
      "The mechanism remains uncertain, although distraction is the researchers’ explanation.",
      "The researchers conclude that all benefits are caused by patient choice alone.",
      "A complete biological mechanism has already been proved beyond doubt.",
      "The lecturer rejects distraction because familiar sounds cannot affect attention."
    ],
    "correctIndex": 0,
    "explanation": {
      "en": "The lecturer first acknowledges uncertainty about how it works, then presents distraction as the research team’s conclusion.",
      "ru": "Лектор сначала признаёт неясность механизма, затем приводит отвлечение внимания как вывод исследователей."
    },
    "distractorRationales": [
      {
        "choiceIndex": 1,
        "en": "Patient choice is not offered as the sole cause.",
        "ru": "Выбор пациента не назван единственной причиной."
      },
      {
        "choiceIndex": 2,
        "en": "The account explicitly says how and why are not entirely clear.",
        "ru": "Прямо сказано, что как и почему это работает, не вполне ясно."
      },
      {
        "choiceIndex": 3,
        "en": "Distraction is proposed, not rejected.",
        "ru": "Отвлечение предлагается как объяснение, а не отвергается."
      }
    ],
    "answerEvidence": "The lecturer first acknowledges uncertainty about how it works, then presents distraction as the research team’s conclusion.",
    "evidenceTiming": {
      "startSeconds": 52.8,
      "endSeconds": 78.7
    },
    "sourceEvidence": {
      "pdfPage": 117,
      "pdfPages": [
        117
      ],
      "printedPage": 116,
      "sourceStartSeconds": 288.5,
      "sourceEndSeconds": 314.4,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p4"
  },
  {
    "id": "large-c21-t4-listening-028",
    "domain": "listening",
    "stimulusId": "c21-t4-music-evidence",
    "clusterId": "c21-t4-music-evidence",
    "sourceTest": 4,
    "topic": "research",
    "skill": "change-of-plan",
    "tags": [
      "change-of-plan"
    ],
    "targetLevel": null,
    "targetLevelStatus": "not_assigned",
    "validationStatus": "uncalibrated_source_based_sample",
    "reviewStatus": "ai_author_and_independent_source_editorial_review_complete",
    "source": "original_question_based_on_user_supplied_recording",
    "intendedCEFRDescriptor": {
      "scale": "Oral comprehension",
      "paraphrase": "Understanding recorded spoken English; no CEFR level or sublevel assigned.",
      "status": "construct_description_only_no_level_claim"
    },
    "construct": {
      "en": "Distinguishing an earlier position from a later change",
      "ru": "Различение исходной позиции и последующего изменения"
    },
    "prompt": "What question is identified for the team’s next research?",
    "choices": [
      "Whether every patient must prefer music to nature sounds.",
      "The most suitable volume for patients to listen at.",
      "How to prevent patients from making any listening choices.",
      "Whether the existing evidence should all be discarded."
    ],
    "correctIndex": 1,
    "explanation": {
      "en": "The recommendation allows choice, including nature sounds; the next planned study concerns suitable volume.",
      "ru": "Рекомендация допускает выбор, включая звуки природы; следующее планируемое исследование касается подходящей громкости."
    },
    "distractorRationales": [
      {
        "choiceIndex": 0,
        "en": "Nature recordings are presented as an acceptable choice.",
        "ru": "Звуки природы представлены как допустимый выбор."
      },
      {
        "choiceIndex": 2,
        "en": "The recommendation supports patient choice.",
        "ru": "Рекомендация поддерживает выбор пациента."
      },
      {
        "choiceIndex": 3,
        "en": "The team regards the evidence as sufficient to support availability, not worthless.",
        "ru": "Группа считает данные достаточными для доступности метода, а не бесполезными."
      }
    ],
    "answerEvidence": "The recommendation allows choice, including nature sounds; the next planned study concerns suitable volume.",
    "evidenceTiming": {
      "startSeconds": 78.7,
      "endSeconds": 120.37
    },
    "sourceEvidence": {
      "pdfPage": 117,
      "pdfPages": [
        117
      ],
      "printedPage": 116,
      "sourceStartSeconds": 314.4,
      "sourceEndSeconds": 356.07,
      "relation": "Original paraphrase checked against the supplied transcript; approximate source-aligned review interval."
    },
    "scopeLimits": {
      "en": "One response within a shared-recording cluster. Published material may be familiar. This item has no calibrated CEFR difficulty or independent mastery interpretation.",
      "ru": "Один ответ внутри группы вопросов к общей записи. Материал может быть знаком. У вопроса нет калиброванного уровня CEFR или самостоятельной интерпретации владения языком."
    },
    "independenceGroupId": "c21-t4-p4"
  }
];
