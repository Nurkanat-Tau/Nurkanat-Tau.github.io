# Independent benchmark content review

Reviewed 21 October 2026. This is a separate AI editorial review of the author's draft, not a completed human assessment-panel review or CEFR validation.

**Snapshot:** `docs/benchmark-content.mjs`, version `1.0.0-draft`; SHA-256 `e3a9d9aac8f2d3041e2a17c531f0eed9f9b9e1e591b9c9f850b0320c8705806a`.

## Scope and outcome

Read all 30 prompts, their 25 stimuli, answer choices, keys, explanations, bilingual distractor rationales, and stated construct limits. There are ten language responses, ten reading responses attached to five texts, and ten listening responses attached to ten human-recording scripts. The five pairs of reading questions share evidence; they are not ten independent contexts.

No defensible competing correct answer or incorrect grammatical key was found. This is a content judgement about the written draft, not evidence that a target level has been established. All ten listening assets remain pending human recording; reading their scripts cannot establish listening difficulty or performance quality.

## Corrections completed with the author

1. **`bench-c1-language-position`:** removed the explanatory sentence that explicitly named the intended relationship between the two sentences. The learner now has to infer the reservation from the passage. The evidence and the “On the contrary” rationale were updated accordingly. Recognising this relation still does not establish productive C1 discourse ability.
2. **`bench-b2-reading-measure`:** replaced an unrelated “second entrance” distractor and a weak volunteer-ranking distractor with context-based misreadings: removing telephone requests or blaming telephone users. Neither is the purpose of Mark's proposed record of unsuccessful bookings.
3. **`bench-b1-listening-dialogue`:** replaced implausible absolute claims with misunderstandings of the slide design, examples, and recording mentioned in the conversation. The correct answer remains testing the explanation to identify useful examples.
4. **`bench-b1-listening-monologue`:** corrected a rationale that treated the known length of the original lake walk as evidence about the alternative hill route. The revised explanation states that the hill route's length is unstated; unclear signs and the low phone battery explain the decision.
5. **Shared CEFR reference:** repaired the missing hyphen in the Council of Europe Companion Volume URL. A working reference is not an endorsement or validated alignment.

The author also removed the regular answer-position cycle, preserving option meanings and remapping all rationale indices. The revised affected items and final hill-route explanation were re-read after saving. The answer positions are now distributed 8/7/8/7; this distribution does not imply psychometric quality.

## Limits that matter for the next decision

- **Coverage:** upper-level material is concentrated on qualification, evidence, and editorial evaluation. The next bank expansion needs other communicative functions and situations; another set of near-identical “qualified claim” tasks would not supply broad C1 evidence.
- **Construct boundaries:** language choices assess recognition in a written context. They do not demonstrate spontaneous speaking or writing. Longer listening answer choices also add reading demand; pilot learners need to show that response reading is not the principal obstacle.
- **Transfer:** review identified a repeated twelve-of-eighteen survey scenario in the teacher-pack C1 discussion. The author replaced it with a fresh interpersonal-feedback task about balancing a volunteer's useful demonstrations with participants' practice time. The revised task supplies its own facts and requires responding to a misunderstanding. Future productive tasks must likewise avoid treating rehearsed online content as independent transfer evidence.
- **Difficulty:** A1–C1 labels are authoring targets. Some low-level items permit direct matching, while several upper-level texts explicitly restate their main point. These are transparent task characteristics to investigate with learners, not reasons to invent a precise level score now.
- **Audio:** approve the ten human proof recordings through blind perceptual review and learner trials before recording the larger inventory. Actual delivery, accent, pacing, turn-taking, audibility, and accidental answer emphasis can materially change these tasks.
- **Use:** this 30-response benchmark supports content and experience review. It does not independently justify placement, an exact CEFR sublevel, or paid diagnostic claims. Teacher review, candidate evidence, form design, and standard setting remain required.

## Worked-report integrity checks

`tests/benchmark-report.test.mjs` imports the shipped report data from `dist/benchmark-report.js`. Seven tests passed. They protect RU/EN structural parity and unchanged source samples; unique, resolvable evidence references; exact annotation anchors; valid choice indices and retained error evidence; fictional/no-audio/no-completed-review flags; the separate five-skill profile and conditional placement; and a usable four-week practice route.

These tests catch broken content links and accidental presentation changes. They do not certify translations, justify the fictional CEFR assignments, or replace a human judgement of feedback quality.
