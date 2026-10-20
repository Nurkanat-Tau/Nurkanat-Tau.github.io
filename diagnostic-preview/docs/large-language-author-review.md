# Language bank author review

Review date: 21 October 2026. This is an AI editorial review of original draft content, not a review by a human examiner and not learner calibration.

The bank contains 240 individually authored contextual multiple-choice questions and 240 separate short contexts. Each authoring target (A1, A2, B1, B2, C1) has 48 items. The targets are hypotheses; the file does not provide calibrated CEFR boundaries, population norms, reliability estimates, or approval for a paid diagnostic claim.

The source is `docs/large-language-bank.mjs`; its exact browser mirror is `dist/large-language-bank.js`. Both export `languageItems`, `languageStimuli`, and `languageMetadata`. The final packaging SHA256 is `77c1c028c528e004d051c06fcced1a67f5f377b0eee653154c4950415971c54e`.

## Content decisions

Questions cover contextual tense/aspect, conditions, modal meanings, reference, quantity, word order, collocation, register, scope, cohesion, and stance. Contexts use ordinary adult and older-teen situations; no question requires a professional qualification or specialist factual knowledge. These are recognition tasks. A correct response cannot by itself establish speaking, writing, sustained interaction, or productive command of the construction.

Every item has an English context, prompt, and four choices; bilingual construct, explanation, scope limits, and three specific distractor explanations; an explicit answer key; and a topic separate from its skill tags. Category tags have a broad first label for reporting plus a more precise category where distinct. Duplicate tags are removed.

The author review replaced weak or implausible option sets in B1-001, B1-007, B2-005, B2-017, B2-018, B2-023, and B2-026. B1-002 was changed from a basic wish expression to the contextual `encourage someone to do something` construction. B2-001 replaced a survey-number paraphrase with the scope of a museum-access notice. C1-003 replaced a previously used volunteer-feedback scenario with a supplier deadline. C1-016 removed a marginal alternative collocation. Other changes from independent review are recorded separately in `large-language-independent-review.md`.

## Structural verification

The completed export passed assertions for all 240 unique IDs, 240 unique contexts, four distinct choices per item, one in-range integer key, all three and only three non-key rationale indices, bilingual required fields, no Cyrillic in English assessment text/feedback, valid stimulus references, nonempty tags, explicit author-hypothesis status, and exact source/mirror identity. Each target has 12 keys in each of the four positions. The ordering uses a stable shuffled schedule per target, rather than an item-number modulo cycle.

The independent reviewer subsequently read all 240 item sets and 720 distractor explanations, requested specific corrections, and rechecked them. Metadata records AI author and independent editorial review as complete while retaining `editorially_reviewed_uncalibrated` and `validatedScoreConversion: false`.

## Remaining evidence requirements

Editorial clarity is not evidence that an item occupies its intended CEFR band. Some upper-target paraphrase tasks may prove easier than intended, and short multiple-choice recognition has limited coverage of productive ability. A final parallel-phrasing pass on C1-028/029/033/036/038/039/041 reduced a shortest-choice cue without padding keys; the author rechecked each changed choice and bilingual rationale. C1 answer length still remains a pilot cue to inspect: shortest-choice selection including uniform ties is 25.0% and longest-choice selection 31.6%, neither an empirical learner measure nor proof that cues are absent. Empirical work should examine response processes, distractor uptake, item difficulty/discrimination, subgroup behaviour, exposure, and conditional skill estimates; revise or retire items rather than treating author labels as measured levels. No learner data or completed human validation has been invented.
