# Independent listening content review

Date: 21 October 2026. Reviewer: the assessment subagent, separate from the listening authoring/engineering subagent. This is an AI editorial source review, not human examiner approval or psychometric validation.

## Reviewed snapshot

- Source module: `docs/large-listening-bank.mjs`.
- Runtime mirror: `dist/large-listening-bank.js`; confirmed byte-identical.
- SHA-256 of both modules: `40c4cd126678c9c26cf893ccc60265feadb02dbf5fb6b70638e95c7432df8aa5`.
- 120 questions in 32 excerpt clusters, representing 16 conversation/talk families.
- Test distribution: Test 1 has 32 questions; Test 2 has 30; Test 3 has 30; Test 4 has 28. This includes the ten earlier original project questions and 110 new project questions.
- Final answer-position counts: 31 / 30 / 30 / 29. This is an editorial cue check, not evidence of reliable measurement.

## Scope completed

Read the supplied transcript extracts for all four Cambridge IELTS 21-labelled tests, from the local ignored `artifacts/cambridge-review/cambridge21-scripts-test1.txt` through `test4.txt` files. Read every question and all four answer alternatives against the matching source discussion. Checked all 120 keyed explanations and all 360 distractor rationales in English and Russian, including qualifications, negation, timing, scope and attribution. The truncated initial bilingual tool output was followed by a separate read of the omitted middle groups; the sweep was not limited to a sample.

The source check covers the following topic groups: sailing; film makeup; ocean-biodiversity lecture and resources; rubber; college courses; walks and mining displays; food science; cruises; ferry travel; street-food businesses; fashion materials; invasive species; shopping; business exhibitions; future housing; and music in surgical recovery. The content check evaluates what the supplied recording says. It does not independently verify all subject-matter claims made by speakers in a published test recording.

No definite unsupported key or second defensible source-supported key was found in the final snapshot. Five local issues were found, returned to the author, corrected and then re-read:

| Item | Finding | Verified correction |
|---|---|---|
| `large-c21-t2-listening-006` | The original prompt implied the caller personally made candles, although she received a friend's candle. A proposed friend-specific replacement also risked pointing directly to the only friend option. | Neutral prompt now asks what the caller says when the class is discussed. The gift key and feedback remain source-supported. |
| `large-c21-t3-listening-024` | A certainty question had only one answer about certainty, making the stem itself a shortcut. | All four alternatives now concern whether the proposed cultivation explanation is established, tentative, rejected or absent. The tentative key matches the speaker's qualification; both-language rationales distinguish the alternatives accurately. |
| `large-c21-t4-listening-005` | Two wrong options were near-duplicate proposals for additional clothing shops. | One is now a distinct café-relocation misreading. The source asks for more variety and book-buying choice, not café relocation. Both-language feedback was updated. |
| `large-c21-t3-listening-020` | The Russian key explanation made good animal care itself the object of acceptance, instead of making care the condition for accepting shearing. | It now states that shearing is accepted subject to good care. The key and English explanation are unchanged. |
| `large-c21-t3-listening-028` | Russian feedback substituted a loose/common plant name for Japanese knotweed. | The supplied English species name is retained in both Russian fields, avoiding an unsupported botanical translation. |

These changes preserve the keyed meanings and evidence intervals. The final three prompt/option fixes and the two Russian edits were directly re-read after saving. No changes to the recordings, cut boundaries, scores or level labels were requested by this review.

## Cue checks and practical limits

The longest option is keyed in 14/32 Test-1 items, 7/30 Test-2 items, 13/30 Test-3 items and 13/28 Test-4 items, including ties. The former predictable numeric-ID answer-position cycle has been removed by the author's stable permutation. These checks eliminate specific observed shortcuts; they do not establish that all distractors function well with learners. Some alternatives remain easier to eliminate because they are absolute, reverse a stated relationship or introduce an unsupported detail. Distractor uptake, response times, cue-only guessing, prior familiarity and item discrimination still need pilot evidence.

The recording families contain related material across excerpts. Thirty-two files are not thirty-two wholly independent sources; the 16-family dependency metadata must be retained. Published recordings may be familiar to IELTS learners, so prior exposure affects the interpretation of a response. The questions are project-authored practice items, not official publisher questions or a validated IELTS score conversion. No CEFR difficulty or exact level is established by this review.

This reviewer did not conduct a human auditory-perceptual evaluation of every cut. The separate engineering and browser reports govern file integrity, decode/play/seek behaviour, evidence-window bounds and source-audio alignment. Root reports all 32 clips passed browser decode/play/seek and all 120 evidence intervals were within their clips; those are technical checks, not listening-test validation. Human review of intelligibility, complete wording at boundaries, volume comfort and administration remains a separate requirement for a formal release.

Editorial status for this exact snapshot: complete, with no remaining source/key or bilingual-consistency correction requested. Paid-use permission, public redistribution rights, calibrated scoring, human examiner review and representative learner validation are outside this editorial sign-off and are not established by it.
