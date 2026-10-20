# Cambridge listening sample: content and source evidence

The sample contains **ten original project questions built around four recordings supplied by the user**. It uses Cambridge IELTS 21, Test 1. The recordings are published source material; the questions, distractors and RU/EN feedback are newly written for this site. They are not the book’s original questions, and no official IELTS score interpretation transfers to them.

This is a source-based listening sample, not a validated placement module. No A1–C1 targets, sublevels or IELTS bands are assigned. The four recordings provide four stimulus clusters; ten answers are not ten independent demonstrations of ability. Previous exposure to these public materials must be recorded before using a response as fresh evidence.

## Source selection

Source PDF: `D:/OneDrive/Desktop/Cambridge/Cambridge 21/IELTS 21.pdf`.

Source audio directory: `D:/OneDrive/Desktop/Cambridge/Cambridge 21/IELTS 21 AUDIO/IELTS 21 AUDIO/`.

| Clip | Supplied track | PDF page / printed page | Questions | Main demands |
| --- | --- | --- | --- | --- |
| Choosing a sailing course | `C21T1P1.1.mp3` | 98 / 97 | 01–03 | Purpose, combining explicit details, membership and discount conditions |
| Starting work as a makeup artist | `C21T1P2.1.mp3` | 99 / 98 | 04–05 | Advice with a trade-off, a change of personal attitude |
| Evaluating study resources | `C21T1P3.2.mp3` | 101 / 100 | 06–08 | Matching criticism to its object, qualified evaluation, omitted perspective |
| Why natural rubber is difficult to supply | `C21T1P4.mp3` | 102 / 101 | 09–10 | Causal explanation, a qualified possibility |

The sequence moves from a practical enquiry to an advisory talk, a study discussion and an academic explanation. This is a progression in communication context, not an empirical difficulty ordering. The last task requires no knowledge of rubber production outside the recording; the resources discussion requires no prior marine-science knowledge.

The PDF was inspected both as extracted text and as complete rendered pages. The relevant printed page labels and speaker turns agree. The Cambridge 20 PDF was initially inspected but contained no extractable text; choosing the supplied Cambridge 21 source avoided relying on uncertain OCR when an intact text layer and matching tracks were available.

## Question evidence and key review

Keys below are zero-based indices in the final exported choice order. A/B/C/D equivalents are included for review only. The running app should attach feedback to the chosen option’s meaning, never to an assumed fixed letter from another ordering.

| Item | Key | Evidence supporting the answer | Important rejected interpretation |
| --- | --- | --- | --- |
| `c21-t1-listening-01` | 1 / B | The Taster Day lets first-time sailors find out whether they enjoy sailing and want to continue. | It is not described as instructor training or a membership entrance test. |
| `c21-t1-listening-02` | 3 / D | Level 1 combines theory with practical work in a dinghy with an instructor. | Practical work is not left to unsupervised learners. |
| `c21-t1-listening-03` | 0 / A | Membership reduces the Level 1 course price, and the caller has time to decide about joining. | The Taster Day’s two-person discount and the course-completion certificate are separate conditions. |
| `c21-t1-listening-04` | 2 / C | Unpaid low-budget work can be worthwhile for the experience. | The advice does not promise catering, specialist-effects responsibility or a later paid job. |
| `c21-t1-listening-05` | 1 / B | Claire contrasts her initial overwhelmed response with now treating famous actors as a normal part of work. | Asking for selfies is discouraged, not described as her present habit. |
| `c21-t1-listening-06` | 0 / A | The lionfish article claims environmental danger without giving enough explanation. | The outdated documentary and difficult metal-toxicity material are different resources. |
| `c21-t1-listening-07` | 2 / C | The coastal-ecosystems book is difficult at first but ultimately improves understanding; the other student agrees. | Difficulty at the beginning does not mean the students give up or fail to understand the book. |
| `c21-t1-listening-08` | 3 / D | The floating-cities podcast emphasises human benefits and neglects environmental effects. | Reversing the included and omitted perspectives changes their criticism. |
| `c21-t1-listening-09` | 0 / A | Trees must be planted many years ahead, making adjustment to changing demand harder. | Falling demand is not a condition for harvesting. |
| `c21-t1-listening-10` | 2 / C | Recycling is possible but difficult, reducing available supply. | The lecturer does not say recycling rubber is impossible. |

All ten items have English prompts and options, a construct description in English and Russian, bilingual answer explanations, bilingual rationales for each incorrect option, a concise evidence statement, a source cue and an explicit interpretation limit. The distractors use reversals, unsupported extensions or details belonging to other parts of the same recording. They do not require factual expertise to reject them.

Self-review removed a repeated answer-position cycle. Independent review also replaced a dictionary-purpose question that could be answered from the word “dictionary” alone, and replaced an implausible rubber-production distractor with a closer misreading of the climate discussion. The final answer positions are distributed 3/2/3/2 across A/B/C/D without a repeated four-position sequence. This is presentation balancing, not a security measure. Published practice content remains inspectable and familiarisable.

## Audio and administration contract

- Runtime paths are `listening/c21-t1-sailing.mp3`, `listening/c21-t1-makeup.mp3`, `listening/c21-t1-resources.mp3` and `listening/c21-t1-rubber.mp3`.
- Use the source excerpt boundaries in `docs/cambridge-audio-manifest.json`; the sanitized runtime manifest is `dist/listening/audio-manifest.json`. Engineering owns the source hashes, cut boundaries, duration measurements and audio verification evidence.
- Remove the original examination instructions and long preparation silences from the excerpts. Retain complete spoken sentences and all evidence needed by the new questions. Do not splice isolated words, change the speakers’ speed, or replace voices.
- Let the learner read the questions for a recording before starting it. Replays are appropriate in this practice sample but differ from standard IELTS conditions. Record replay count if the attempt is later analysed; do not compare different exposure conditions as though they were identical.
- Full source scripts are not exported in the content module. Answer evidence appears after the response, alongside feedback. Reading a transcript does not count as hearing the recording.
- Every item now includes `evidenceTiming: { startSeconds, endSeconds }` copied from the manifest’s `answerEvidence` entry. These are **approximate times relative to the playable excerpt**, derived from automatic speech alignment, not the original full-track clock. They support a review-only “Listen to this part” control; starting about one second before the indicated start preserves context. They must not define scoring rules or be presented as exact word boundaries. All ten ranges were checked against the matching manifest entry and the measured clip duration.
- Treat an unavailable or interrupted recording as an audio problem. Restore playback or offer a fresh attempt; do not count an unheard question as a language error.
- A first successful answer does not demonstrate a stable skill level. This sample can show which specific distinctions were or were not understood and guide a useful next activity.

## Completion record

Structural checks passed: 10 unique item IDs; four valid stimulus links; 3/2/3/2 distribution; four distinct options per item; one key with exactly three matching distractor rationales; bilingual required fields; no assigned CEFR target; no embedded full transcripts.

Content author checked every key against the complete relevant source pages. A separate agent independently checked all ten keyed meanings and bilingual rationales; the two editorial improvements above were incorporated. Engineering aligned the source speech with the supplied transcripts using local ASR, then measured the encoded excerpts: sailing 151.106372 seconds, makeup 139.612494, resources 133.343107 and rubber 145.463923 (approximately 9 minutes 30 seconds altogether). Exact cut boundaries and hashes are in the audio manifest. Human perceptual review has not been claimed. Local content review, source matching and technical audio tests are quality checks, not psychometric calibration, external accreditation or a guarantee of placement accuracy.

The data file is `docs/cambridge-listening.mjs`; `dist/cambridge-listening.js` is an exact runtime mirror. Do not edit one without synchronising and checking the other.
