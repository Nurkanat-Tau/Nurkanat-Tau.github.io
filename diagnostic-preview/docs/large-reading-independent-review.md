# Independent reading-content review

Review date: 21 October 2026. Reviewer: an AI agent separate from the reading-bank author. This records a complete editorial pass, not a human examiner sign-off, field trial, psychometric validation, or CEFR standard-setting outcome.

## Coverage and method

The reviewer read all 48 source passages and all 240 associated prompts, four-choice sets, and keyed answers in `docs/large-reading-bank.mjs`. The source contains ten five-question clusters at each of A1, A2, B1, and B2, plus eight at C1: 50/50/50/50/40 items. The labels are authoring hypotheses. Five responses to one passage are a linked cluster, not five independent confirmations of a skill or level.

The review compared each answer with its passage, looked for another text-supported reading, checked local inferences and pronoun references, and examined the English key explanations and all 720 English distractor rationales. A final Russian consistency sweep covered all 240 key explanations and 720 distractor explanations, focusing on negation, quantity, qualification, reference, and the newly changed alternatives. Bilingual field completeness and English-field language purity were also checked. This remains AI review; no completed human translation review is implied.

No definite wrong key was found across the 240 reviewed items. The following concrete changes were requested and checked during the pass:

- `read-a1-01-q3`: a camera bought from Ada could technically still be a usable camera. Adding “Only” makes the unsupported purchase restriction the error. Its rationale must say that this requirement is not stated, rather than asserting that Ada does not sell cameras.
- `read-b1-04-q2`: the narrator announces a message-checking time rather than obtaining anyone’s agreement. The key now describes a chosen task and fixed time.
- `read-a2-05-q4`: remove an invented lunchtime from the rationale about the busy café.
- `read-b1-10-q4`: describe smaller prints of two existing designs, not two newly designed pictures.
- `read-b1-03-q4`: the author replaced unrelated library-closure and ticket-price distractors with plausible but unsupported actions involving the source report and route order.
- `read-c1-04-q3`: the final bilingual sweep identified a predicted advertising association fading as incorrectly described as already short-lived. The English and Russian key explanations were corrected and rechecked to preserve the prediction rather than assert an observed outcome; the answer itself is unchanged.

The author also reviewed option-length cues and rephrased several keys/alternatives without changing source facts or correct meanings. This reviewer flagged a recurring pattern in advanced questions: a measured, qualified key opposed to several extreme claims can be solved partly through test-taking strategy. The author completed a focused C1 distractor pass on read-c1-01-q5, read-c1-03-q5, read-c1-04-q5, read-c1-05-q5, read-c1-07-q5, and read-c1-08-q5. The reviewer checked all six final exported choice sets and their bilingual explanations against the passages. One stale English rationale in read-c1-07-q5 was corrected to address the new option; its original source paragraph was preserved and rechecked. No competing text-supported key remained in these revised sets.

## What the editorial result supports

The review supports using these as original, explicitly uncalibrated reading items with traceable passage evidence. Their explanations can help a learner understand why a response fits the particular text. It does not support assigning a learner an exact CEFR stage, estimating reliability from item count, claiming that every C1-labelled question is difficult for B2 learners, or presenting five questions about one passage as independent measurements.

## Remaining limitations for piloting

Many upper-target passages use a reflective or argumentative structure in which an initial view becomes a more qualified one. This offers useful stance and inference work but does not represent the full range of advanced reading genres and discourse structures. Some distractors remain easier to reject by their absolute wording than by detailed text interpretation. Item-level response data and think-aloud work should examine this directly, including uptake of each alternative, rather than assuming a final editorial pass removes all cues.

Reading speed, fatigue, familiarity with the scenario, and the dependence among questions sharing a text also need real learner evidence. Borderline or poorly discriminating items should be revised, reassigned, or retired. No such empirical data or human reviews have been fabricated.

## Freeze record

Final source and identical browser-mirror SHA256: `3e9307f4f260b0b4817cbe7d77fc73f3f96f1bccce5fc5df90ff8eb90eca5922`. All 240 questions have received the source/key/English-feedback pass and full Russian feedback consistency sweep; the final six substantively changed C1 sets, five narrow corrections, and final C1-04-q3 qualification correction were rechecked. Review status: AI editorial review complete; empirical validity and human examiner review remain unperformed.
