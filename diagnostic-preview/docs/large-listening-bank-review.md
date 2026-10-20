# Listening bank: source, construction and verification

This is a **120-question practice bank using 32 real recorded excerpts** from the user's locally supplied Cambridge IELTS 21-labelled files. It contains 110 newly authored project questions and the ten previously reviewed project questions. Publisher question sheets were not used as the question bank. These are not official Cambridge questions, an endorsed product, an IELTS mock score, or a calibrated CEFR assessment.

The excerpts contain 71 minutes 29 seconds of unique audio and occupy 102,906,667 bytes. They cover all four supplied tests and all four parts, using 25 source tracks. Each excerpt has three or four questions. A focused form can select complete groups totaling 40 responses; playing the entire library is not necessary.

## What the source check establishes

- Every excerpt is an MP3 packet copy. SHA-256 hashes identify the exact input and output bytes. The integrity check proves that every compressed audio frame after the generated seek header is a byte-identical contiguous sequence from its source, starting within 60 milliseconds of the specified cut.
- All 32 excerpts were decoded with FFmpeg. Measured durations match requested cuts within 0.2 seconds, and no decoded samples reached full scale. No synthetic speech, voice conversion, speed changes, pitch changes or audio re-encoding was used.
- Cut points were chosen from local automatic word timestamps and checked against the matching supplied PDF scripts. Exam instructions and long answer-reading pauses were excluded. Evidence intervals locate the supporting material for all 120 questions within the playable excerpt.
- The local alignment used `faster-whisper` with the `tiny.en` model, without transcript prompting. It made some recognition errors, so the supplied PDF controlled wording. Timings are approximate navigation aids. Neither ASR nor successful decoding is a human perceptual review.
- The source build specification pins source hashes. A different source file is rejected rather than silently inheriting the previous alignment claim.

Full source paths, extracted scripts, automatic transcripts and rendered PDF pages are kept in ignored `artifacts/`. Public manifests contain source filenames, hashes, bibliographic page references, cuts and measurements, but no local paths or full source scripts. The MP3s and supplied PDF are excluded from a public GitHub snapshot. A person with permitted local copies can use `scripts/large-listening-audio-build.py --source-root "LOCAL_AUDIO_FOLDER" --ffmpeg "FFMPEG_PATH"`; this utility does not download copyrighted media. Possession of the files does not establish public redistribution or paid-use rights.

## Question construction and author review

Each question has one keyed answer, three individually explained distractors, Russian and English feedback, an evidence interval and a specific broad listening skill. Topic is a separate property, not a skill score. Answer positions are distributed 31 / 30 / 30 / 29. Independent review caught a predictable numeric-ID key cycle in the expanded draft. The 110 new items now use a Fisher–Yates shuffled balanced position bag and independent distractor permutations, with reproducible seed `listening-option-order-v1`; correct answers and rationale indices were remapped together. The original ten sample items were preserved. This removes that known sequence cue without claiming that all possible cues are absent. The questions cover explicit details, main ideas, reasons, qualifications, attitudes, agreement, changes, sequence and supported inference. Scientific or medical statements are questions about what a recording reports, not advice or an endorsement of its claims.

The author checked all 120 question/evidence relationships against the supplied scripts and local timing data. A separate AI agent then read all 120 items against the Tests 1–4 transcript extracts and checked the English/Russian feedback. The resulting fixes removed an ambiguous candle-making-experience prompt, made all hemp-explanation alternatives address certainty, replaced a duplicate clothing-shop distractor and corrected two Russian feedback passages. The new 110 items are marked `ai_author_and_independent_source_editorial_review_complete`; the original ten retain their earlier review status. This is an AI editorial cross-review, not a human listener panel or empirical validation. The final source/runtime SHA-256 is `40c4cd126678c9c26cf893ccc60265feadb02dbf5fb6b70638e95c7432df8aa5`. Browser results belong to the separate final application QA record.

The first expanded draft had a genuine item-writing flaw: always choosing a longest alternative, with random selection among ties, would score **52.5%**. An editorial pass replaced implausible alternatives, shortened over-explanatory keys and made option wording more comparable. On the resulting fixed bank the longest-option rule scores **15.07%**, and the shortest-option rule **25.35%**. These are reproducible diagnostics in `scripts/large-listening-shortcut-check.mjs`, **not evidence of student accuracy or validity**. Editing to remove a known cue does not show that other semantic or wording shortcuts are absent.

## Important limits on interpretation

The library has 32 clip files but only **16 underlying conversations or talks**. Two excerpts from the same Test/Part share `independenceGroupId`; they must not be counted as independent confirmations. Answers inside each clip are also dependent. For diagnostic feedback, require observations from genuinely different source families and record which clips were replayed or already familiar.

No item has an assigned CEFR level. IELTS material does not automatically supply balanced A1–C1 coverage, and this academic source set may be unsuitable for beginners. Correct answers can reflect English reading ability, prior topic knowledge, recognition of familiar published material or guessing as well as listening. There are no real-learner item statistics, calibrated difficulties, reliability estimates, differential-item-functioning findings, standard-setting results or validated sublevel cutoffs for these new questions.

Before using this for placement or charging for level claims, the next work is a genuinely accessible beginner audio set, human perceptual review of cuts, human assessment-expert review, a blinded learner pilot with held-out material and external anchors, analysis at source-family level, distractor-function checks and test-retest/exposure studies. None of those empirical results has been fabricated or inferred from the bank size.

## Reproducible local checks

`node scripts/large-listening-bank-check.mjs` checks 120 unique questions, complete 3–4-question groups, bilingual feedback, distinct distractor indices, null CEFR assignments, skill-only tags, all evidence intervals, source/runtime parity, exact media hashes and source packet preservation. Its private report is `artifacts/cambridge/large-bank-integrity.json`.

`node scripts/large-listening-shortcut-check.mjs` repeats the two option-length diagnostics. Actual browser decoding, native playback, end-to-end administration, resumability and error handling belong to the separate application QA. Passing technical tests does not establish assessment validity.
