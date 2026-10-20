# Nurkanat English diagnostic — benchmark implementation

Russian-first, fully switchable English sample for adults and students aged 16+. This milestone implements the reference sample from the [assessment rebuild plan](docs/assessment-rebuild-plan-v2.md). It is not a calibrated CEFR test or a paid product.

## What is available

- 30 original questions: 10 language-use, 10 reading and 10 listening, with two per domain at each intended A1–C1 authoring target.
- A playable 20-question language/reading sample with local save/resume, explanations, unknown responses, and response export. It deliberately issues no CEFR classification.
- Ten original listening scripts: five solo monologues and five dialogues requiring a second real speaker. Human recordings are still to be supplied by the owner.
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
npm run test:recording
```

The server is `http://127.0.0.1:4173`. Browser scripts use the authoring machine's bundled Playwright and installed Edge; update those paths on another machine. Browser tests run against the local sample. The recording lifecycle tests use mocks, not real human speech or a real microphone.

`scripts/build-example-pdfs.mjs` exports the two report PDFs from the same local report; final copies ship in `dist/reports/`. When changing the report or print CSS, regenerate and visually inspect every PDF page before publication.

## Files and boundaries

- `dist/benchmark-app.js`: bilingual navigation, sample, catalogue, worked report, course links.
- `dist/benchmark-engine.js`: sample progress and counts; no proficiency classification.
- `docs/benchmark-content.mjs` → identical `dist/benchmark-content.js`: authored sample and scripts.
- `docs/benchmark-example-report.mjs` → identical `dist/benchmark-report.js`: bilingual fictional report.
- `dist/recording-room.js`: local rehearsal takes only. Its exports always retain pending review and null operational audio.
- `docs/human-audio-manifest.template.json`: exact script hashes and pending recording provenance.
- `docs/benchmark-qa.md`: completed verification and its limits.
- `research/`: earlier reproducible scoring study, frozen sources, and legacy audio archive. None of its candidate scorers is adopted.

This is a public-answer review sample served privately. It is not a secure exam bank. It has no payment, accounts, backend scoring, automatic upload, teacher booking, or real learner calibration. A commercial assessment needs the independent human and empirical validation described in the rebuild plan. Editorial review by separate agents is not a substitute for that work.

The original public `test.html` remains unchanged. The existing private Site and GitHub draft PR are the review destinations. Record real clips, keep the unedited originals and permissions, and submit the selected takes for human review before integrating listening into assessment.
