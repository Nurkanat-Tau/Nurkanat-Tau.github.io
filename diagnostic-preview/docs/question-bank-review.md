# Preview question bank review

Bank version: `preview-0.1.0-draft`.

This is an original, authored demonstration bank for a prototype. It contains 80 online items: 16 for each intended A1, A2, B1, B2 and C1 band. Every band has four grammar, four vocabulary, four reading and four listening items. Grammar and vocabulary share the `language` domain. The planned eventual 500-item inventory is a separate development target.

The levels are authoring targets. No items have been empirically calibrated, independently approved, normed, or linked to CEFR score boundaries. `validation` is exported as `draft`; `targetsReviewed` is exported as `false`. These items cannot substantiate accuracy claims, reliable beginning/middle/upper placement, IELTS equivalence, or certification.

## Content and delivery contract

- `bank.js` exports `BANK_VERSION`, `LEVELS`, `validation`, `targetsReviewed`, and `QUESTIONS`.
- Each item has a unique stable `id`, a numeric `level` from 0 through 4, `domain`, Russian `subskill`, English `prompt` and `options`, zero-based correct `answer`, and Russian `explanation`.
- Reading items have an original English `passage`.
- Listening items have an original English `transcript` and an `audio` path exactly equal to `audio/` + the item ID + `.wav`.
- Listening transcripts are authoring and accessibility-alternative material. During a listening assessment, displaying them changes the construct being assessed. A transcript-supported attempt must be distinguished from a listening result.
- Audio files are produced separately. The paths do not establish that recordings exist, sound natural, or match the scripts. Check all recordings against the scripts and answer keys before enabling the listening route.
- The bank is intentionally readable in this preview's source. A commercial deployment needs protected content, server-side marking, and a reviewed item-security policy.

## Author review completed

The author reviewed the prompts and keys for a single intended answer, context sufficiency, common dialect alternatives, and agreement between explanations and selected answers. Answer positions vary. Each reading/listening item uses a separate stimulus so the preview does not silently treat multiple questions about one passage as independent evidence.

Lower bands use short familiar messages and everyday contexts. Higher bands use longer stimuli involving argument, qualification, inference, and pragmatic meaning. Higher-level grammar/vocabulary items remain narrow samples of language knowledge; they do not establish overall communicative proficiency.

This author check is not independent review. Metadata deliberately remains `targetsReviewed: false`.

## Limits and required next reviews

1. Ask an independent English assessment reviewer to challenge every key and intended level. Consider plausible interpretations rather than accepting the author's label.
2. Review upper-band distractors for excessive obviousness and lower-band distractors for implausibility. Easy elimination may make an item easier than the language content suggests.
3. Expand topic balance. This preview's upper bands intentionally include workplace and public-service reasoning; production coverage must include a wider range of everyday, social, educational, and cultural contexts suitable for the agreed audience.
4. Have learners explain their reasoning in cognitive trials. Check that the task measures language comprehension rather than specialist reasoning, guessing, or familiarity with research vocabulary.
5. Pilot each item and review difficulty, distractor use, discrimination, time, missing responses, subgroup differences, and classification boundaries. Use an independent holdout sample before enabling finer reporting.
6. Review synthetic audio naturalness, pacing, pronunciation, voice variety, consistency of volume, and unintended emphasis. Synthetic demonstration audio is not evidence of realistic listening coverage.
7. Define consistent replay, preparation, navigation, interruption and accommodation rules before collecting validation data.
8. Use a documented routing/scoring model. Do not treat equal raw-score percentages across levels or domains as established CEFR boundaries.
9. Keep listening/reading outcomes separate from grammar/vocabulary and from teacher-assessed writing/speaking. Missing sections are unassessed, not zero.
10. Increase the approved inventory by reviewed batches. Retire or revise weak items rather than reaching 500 through unreviewed generation.

## Preview interpretation

The website may demonstrate how a result and course recommendation will look. It must label any demonstrated estimate as provisional, disclose the prototype's unvalidated status before testing, and avoid confident fine subdivisions. Writing and speaking require teacher assessment; a complete English level cannot be established by these 80 selected-response items alone.

Original content authored for this project; no commercial test questions or passages were reproduced. All five level bands contain 16 items, and all 20 listening items require their own reviewed audio asset before release.
