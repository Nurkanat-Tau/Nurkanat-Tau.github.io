# Benchmark implementation: verification and remaining work

21 October 2026. Adults and students aged 16+. Russian default; English switch. This report supersedes earlier prototype QA for the active entrypoint.

## Completed checks

- **22 automated unit/content tests pass**: exact 30-item/domain/band blueprint; unique linkage; keys and bilingual rationales; ten pending human recording slots; complete, mixed and all-unknown attempts; invalid/stale storage rejection; sample-only counts without invented CEFR output; safe HTML escaping; fictional report flags; locale/evidence parity; exact writing annotation anchors; four-week plan structure; recording file screening; script hashes; and immutable pending-only recording exports.
- **Distribution checks pass**: active entrypoint and assets; authored/browser content equality; report equality; no synthetic audio directory in `dist/`; no speech-synthesis calls in the active application or recorder.
- **Browser regression checks pass in local Edge/Chromium**: Russian default and full English UI; all-correct and all-unknown completion; selected-answer preservation across language changes and refresh; corrupted and blocked local storage; 30-question catalogue with filters and script notices; six-section report with ten evidence records and four writing annotations; evidence navigation; response, HTML, PDF and script downloads; print action; 320/390/768/1440-width checks on relevant screens; no page errors or failed application requests. Sixteen named browser checks include these grouped assertions.
- **Recording lifecycle tests pass with mocks**: consent before capture, denied/missing microphone, start/stop, disconnection, delayed permission after leaving, cleanup during recording, take retention across remounts/language changes, import/download/delete, and decode failure feedback. These do not establish actual device capture quality.
- **Visual review**: desktop landing page, mobile questions/results, report evidence/corrections, recording workspace and both printable reports. A layout-boundary defect and untranslated skip link were found and fixed. Print spacing and evidence pagination were revised after rendering.
- **Content review**: a separate agent read every item and the author rechecked the report. Competing keys were not found; cue leakage, weak distractors, an unsupported rationale, a source URL and answer-position imbalance were corrected. A repeated productive scenario was replaced with fresh material. See [the editorial review log](benchmark-independent-review.md).

## Current product behavior

Thirty questions are authored and visible in the review catalogue. Twenty can be answered in the sample. Ten listening tasks remain unavailable as listening evidence until actual human recordings are supplied and approved. Missing audio is never counted as a mistake or a zero score.

The result screen describes sample responses only. The worked report is a separately labelled fictional illustration with assigned scenario levels, invented learner work and no completed human assessment. The sample scorer never creates those levels.

The owner will record the audio. Five dialogues need a second consenting speaker. Browser takes and imported files remain local rehearsal materials, never automatically approved or submitted to a server. Selected takes must be downloaded; the page cannot guarantee that a browser download was actually retained on disk.

## Not verified or completed

- No real human listening recordings have been supplied; naturalness, accent balance, task audibility and perceptual quality remain untested.
- No actual microphone, real iOS/Safari or Android/Chrome device recording session was tested. Mobile viewport checks are not device audio validation.
- No trained human assessment-panel review, learner cognitive study, calibrated item difficulty, standard setting, held-out accuracy, rater reliability, or CEFR validation has been completed.
- The 30-item benchmark does not supply enough evidence for exact levels, within-level subdivisions, or a paid diagnostic claim.
- No payment, live booking, scoring backend, automatic recording transfer or public GitHub Pages replacement is part of this milestone.

## Reproduction

Run `npm test` and `npm run check`. With the local server active, run `npm run test:browser` and `npm run test:recording`. PDF generation is `node scripts/build-example-pdfs.mjs`; render all pages with Poppler and inspect them after any report/print change. Local screenshots and browser traces are kept in ignored `artifacts/benchmark/`; rendered review pages are in ignored `tmp/pdfs/`.

Passing these checks establishes the sample's tested behavior, not real-world English-assessment accuracy.
