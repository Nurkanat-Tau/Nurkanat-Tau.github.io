# Nurkanat English diagnostic — 600-question pilot platform

Russian-first, fully switchable English platform for adults and students aged 16+. The bank contains 600 original project questions and supplies focused 120-question practice/pilot forms. It implements the software and content infrastructure from the [assessment rebuild plan](docs/assessment-rebuild-plan-v2.md). It is not a calibrated CEFR test or a paid product.

The private review Site includes the supplied listening excerpts. **The public GitHub source checkout excludes those Cambridge audio files, the source PDFs/transcripts, and private provenance records.** Listening playback therefore requires the matching local media; cloning this repository alone does not provide it.

## What is available

- 600 questions: 240 contextual language-use, 240 reading across 48 original passages, and 120 original listening questions across 32 excerpts from 16 conversations/talks. Listening tasks have no assigned CEFR level; language/reading authoring targets remain uncalibrated hypotheses.
- Eight reproducible 120-question forms: 40 responses per online domain. Whole reading/listening groups stay together; shared tasks support later comparison. Form equivalence is not established. This is not an IRT adaptive test.
- A personal report built from the learner's actual responses, with observed patterns, evidence, explanations for every option, four weeks of suggested practice, HTML export and print/PDF. No score is converted into a CEFR level or sublevel.
- Two writing tasks per chosen track, saved drafts, teacher import and evidence-based feedback drafts. Teacher drafts are local and unauthenticated; speaking still requires a live assessment.
- A pilot inspection workspace that starts with zero learner data. It validates imported attempts, rejects duplicate IDs, preserves first responses, separates familiar audio and technical failures, and reports descriptive item statistics. Exploratory consistency is calculated only within identical forms, including source-family clusters. It does not certify validity.
- The original 30-question demonstration remains available: 10 language-use, 10 reading and 10 listening questions from four excerpts.
- A complete 30-question practice flow with local save/resume, bilingual explanations, unknown responses, and response export. Audio failures are recorded separately and excluded from the response count. The sample deliberately issues no CEFR classification.
- Real source speech throughout listening, copied without synthesis, speed changes or re-encoding. The expanded library contains about 71 minutes of unique excerpts, drawn from all four supplied Cambridge IELTS 21 tests. Questions, options and explanations are original to this project; they are not official IELTS questions.
- The earlier blue/teal visual direction, with a clear sample invitation, fictional skill profile, teacher portrait, WhatsApp and standard/intensive course options.
- Ten original listening scripts remain in the recording workspace for future original recordings owned by the project.
- A local recording workspace for microphone takes, imported-file audition, script downloads, and provenance exports. Takes remain in tab memory, need downloading before refresh/close, and cannot unlock scored listening.
- A complete fictional report with separate skill findings, ten evidence examples, writing corrections, speaking excerpts, four weeks of practice, and conditional course placement. Available in Russian/English, self-contained HTML, print, and downloadable PDF.
- Teacher tasks and draft rubrics in [the teacher pack](docs/benchmark-teacher-pack.md), plus [the human recording production pack](docs/human-recording-production-pack.md).

The previous synthetic audio is archived outside `dist/` and is no longer deployed. The old application files and research snapshots are retained as historical source; `dist/index.html` loads only the benchmark application. Do not use the old audio-generation scripts for this milestone.

## Run and verify

Node.js 20+ is sufficient for the static app and unit checks. No application packages need installation.

```text
npm start
npm test
npm run check
npm run test:browser
npm run test:sample
npm run test:audio
npm run test:recording
```

The server is `http://127.0.0.1:4173`. Browser scripts use the authoring machine's bundled Playwright and installed Edge; update those paths on another machine. Browser tests run against the local platform. The recording lifecycle tests use mocks, not real human speech or a real microphone. Synthetic response vectors in unit/browser tests are software fixtures and never learner-validation evidence.

`scripts/build-example-pdfs.mjs` exports the two report PDFs from the same local report; final copies ship in `dist/reports/`. When changing the report or print CSS, regenerate and visually inspect every PDF page before publication.

## Restore listening media for a local review

Use your own permitted local copies of the 25 `C21T*P*.mp3` tracks listed in [the complete-bank specification](docs/large-listening-audio-spec.json). Source hashes identify the exact edition/files. Different files must be checked and aligned again. No script downloads Cambridge media. The separate four-clip build below restores the retained 30-question demonstration.

With Python and FFmpeg installed, run:

```text
python scripts/cambridge-audio-build.py --source-root "PATH_TO_YOUR_LOCAL_AUDIO_FOLDER" --ffmpeg "PATH_TO_FFMPEG"
node scripts/cambridge-audio-check.mjs
python scripts/large-listening-audio-build.py --source-root "PATH_TO_YOUR_LOCAL_AUDIO_FOLDER" --ffmpeg "PATH_TO_FFMPEG"
node scripts/large-listening-bank-check.mjs
```

The build copies the selected compressed audio packets without re-encoding into `dist/listening/`. It writes full local provenance to ignored `artifacts/cambridge/source-audio-manifest.json`, and sanitized metadata to `docs/cambridge-audio-manifest.json` and `dist/listening/audio-manifest.json`. The check verifies source/output hashes, packet preservation, timing and manifest consistency. It requires the local source files and the private build manifest; the public checkout deliberately cannot supply those. Rerun browser playback checks after rebuilding. Any changed source or excerpt needs fresh transcript/boundary review; metadata cannot supply missing permission or listening evidence.

Keep the Cambridge MP3s and copied source materials out of public GitHub updates. The private source build and public code snapshot have different media contents; public or paid redistribution permission has not been established.

## Files and boundaries

- `dist/benchmark-app.js`: bilingual navigation, sample, catalogue, worked report, course links.
- `dist/platform-app.js`, `platform-copy.js`, `platform.css`: focused assessment, personal report, writing, teacher drafts, catalogue and pilot inspection.
- `dist/platform-engine.js`: fixed-form assembly, robust resumption, immutable first committed responses and descriptive feedback.
- `dist/platform-validation.js`: imported-record analysis with explicit limitations and no level conversion.
- `docs/large-{language,reading,listening}-bank.mjs` → identical `dist/large-{language,reading,listening}-bank.js`: the complete reviewed content source and browser mirror.
- `dist/benchmark-engine.js`: sample progress and counts; no proficiency classification.
- `dist/assessment-bank.js`: current30-item sample assembled from the original language/reading items and new listening items.
- `docs/cambridge-listening.mjs` → identical `dist/cambridge-listening.js`: new source-based listening questions, explanations and evidence.
- `dist/listening-player.js`: source playback, full task preview, playback continuity and technical-failure handling.
- `docs/cambridge-audio-manifest.json`: sanitized source hashes, extraction boundaries, decode/ASR checks and rights status; matches the deployed manifest and contains no local filesystem paths. Full local provenance stays in ignored `artifacts/cambridge/`.
- `docs/benchmark-content.mjs` → identical `dist/benchmark-content.js`: authored sample and scripts.
- `docs/benchmark-example-report.mjs` → identical `dist/benchmark-report.js`: bilingual fictional report.
- `dist/recording-room.js`: local rehearsal takes only. Its exports always retain pending review and null operational audio.
- `docs/human-audio-manifest.template.json`: exact script hashes and pending recording provenance.
- `docs/qa-summary.md`: current 600-question release verification and its limits; older sections are explicitly historical.
- `docs/validation-status.md`: remaining human, empirical and operational evidence needed for defensible placement.
- `docs/benchmark-qa.md`: retained 30-question milestone verification.
- `research/`: earlier reproducible scoring study, frozen sources, and legacy audio archive. None of its candidate scorers is adopted.

This is a public-answer pilot platform served privately. It is not a secure exam bank. It has no payment, accounts, backend scoring, automatic upload, teacher booking, or real learner calibration. A commercial assessment needs the independent human and empirical validation described in the rebuild plan. Editorial review by separate agents is not a substitute for that work. The IELTS source library also does not supply demonstrated beginner-level listening coverage.

The original public `test.html` remains unchanged. The private Site is the listening-review destination. The supplied recordings are not automatically copied into the public GitHub repository; permission for paid/public redistribution has not been established. Source transcript/ASR checks and software tests are not human perceptual review or learner-based validation. A future commercial bank needs cleared media rights or original recordings, content review, standard setting and learner studies.
