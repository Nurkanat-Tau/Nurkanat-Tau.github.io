# Draft question-bank content audit

Reviewed all 80 original items in `dist/bank.js`. This is an editorial review of answer validity and task design, not empirical calibration or certification of CEFR levels.

## Corrections made

| Item | Issue found | Revision |
| --- | --- | --- |
| `a2-v03` | Both **keep** and **borrow** fit a request for temporary use of a pen if the speaker already holds it. | Replaced **keep** with **owe** and removed the obsolete English explanation warning. The correct answer remains **borrow**, index 2. |
| `c1-g02` | Only one option formed a grammatical phrase; malformed distractors allowed elementary elimination. | Replaced the gap fill with a meaning-preserving paraphrase task. All alternatives are grammatical and distinguish concession, cause, and conditions for support. Key remains index 1. |
| `c1-g03` | An artificial distractor weakened the inversion item. | Replaced the gap fill with a temporal-meaning task contrasting **not until**, **only after**, **by the time**, and **even after**. All alternatives are grammatical. Key remains index 3. |
| `b2-r02` | Distractors included an implausible cycle route usable only by drivers. | Replaced distractors with relevant misreadings of the actual sample, evidence, and recommended evaluation method. Key remains index 0. |
| `c1-r03` | Incorrect answers made extreme claims about all uncertainty, only researchers, and always-reliable confidence. | Added plausible but unsupported rules for prioritising or excluding uncertainty. The correct rule remains relevance to the decision, index 0. |
| `c1-l03` | Comparing service-area colours was an irrelevant distractor; permanent closure could not test freely expressed preference. | Added relevant but insufficient evidence: existing-user satisfaction, transaction totals, and operating costs. Key remains comparably accessible choices, index 1. |
| `b2-l03` | Sampling-bias reasoning repeated material in `b2-r02` and `c1-r01`. | Replaced with a career-choice narrative distinguishing rewarding responsibilities from salary and job status. Updated Russian/English subskill and explanation. Key remains index 0. |
| `c1-l01` | Performance-metric reasoning repeated `b2-r04`; the key introduced analytical terminology absent from the recording. | Replaced with a qualified theatre review contrasting effective ambiguity with an over-explained ending. Updated both languages. Key remains index 2. |
| `c1-l02` | The consultation-scope argument closely repeated `c1-r02`. | Replaced with a politely redirected invitation: the speaker proposes someone with more relevant current experience. Updated both languages. Key remains index 0. |

The three replaced listening narratives are original to this project. Their IDs, domains, target levels, four-option structure, key indices, and audio paths remain unchanged.

## Audio regeneration requirement

Regenerate these files from their revised `transcript` fields before publishing or testing the listening route:

- `dist/audio/b2-l03.wav`
- `dist/audio/c1-l01.wav`
- `dist/audio/c1-l02.wav`

The other six edits do not change recorded content. The synthesis workflow must use the updated bank, and a listening check must confirm that audio and item text agree.

## Review findings and remaining limitations

- No plainly incorrect keyed answer was found in the 80 reviewed items. The clear multi-answer ambiguity in `a2-v03` was removed. This is not a guarantee against further issues found by learners or independent teachers.
- Levels remain authoring targets. Difficulty, discrimination, guessing behaviour, and score boundaries have not been measured against an independently assessed learner sample. This audit does not justify beginning/middle/end CEFR subdivisions or claims of exact placement.
- Upper-level receptive tasks still contain more institutional and analytical prose than everyday interpersonal communication. Three replacements improve range but do not constitute a balanced final test blueprint. Add further personal, cultural, pragmatic, and cohesive-reference tasks in the next bank expansion.
- Grammar items assess recognition of form or meaning, not spontaneous production. The two rewritten C1 grammar tasks specifically assess understanding of grammatical meaning; their success does not establish that a learner can produce the constructions.
- Four items per receptive domain per target level provide limited coverage and make memorisation across retakes possible. Trial alternate forms and grow the bank before using repeat attempts as progress measurements.
- Listening uses synthetic speech. The pilot still needs natural voices, varied speakers and accents, conversation as well as monologue, and standard replay/timing conditions before broader listening claims.
- Each retained key should be independently reviewed by another qualified assessor before a paid release. Pilot data must then determine whether the distractors function and whether intended difficulty is supported.

## Recommended next evidence

Have independently placed learners take the draft under consistent conditions. Record item accuracy, time, omissions, chosen distractors, and assessor disagreement. Investigate items with implausible difficulty ordering, weak discrimination, or more than one defensible answer. Establish score interpretations from that evidence; do not infer them from item count or text length alone.
