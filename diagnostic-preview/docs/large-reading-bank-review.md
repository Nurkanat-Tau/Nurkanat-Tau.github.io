# Original reading bank: authoring and review record

Snapshot date: 21 October 2026. These are AI-authored original drafts for an adult / age-16-plus practice and pilot bank. They are not human-authored, professionally accredited, calibrated CEFR items, or evidence that a learner has a precise CEFR sublevel.

## Delivered content

`docs/large-reading-bank.mjs` and `dist/large-reading-bank.js` are identical ES modules exporting `readingItems`, `readingStimuli`, and `readingMetadata`.

| Authoring hypothesis | Passages | Questions | Actual passage words |
|---|---:|---:|---:|
| A1 | 10 | 50 | 71–76 |
| A2 | 10 | 50 | 117–127 |
| B1 | 10 | 50 | 185–196 |
| B2 | 10 | 50 | 247–286 |
| C1 | 8 | 40 | 336–361 |
| Total | 48 | 240 | — |

Each passage has five individually written questions. Topics and genres include notices, messages, rules, reviews, personal accounts, letters, interviews, paired correspondence, organisational cases and reflective essays. The helper attaches schema fields; it does not produce question variants by substituting names, numbers or topics. No outside factual knowledge is needed for the intended answers. Invented names, organisations and events are part of the original assessment material, not factual claims about real research.

The exported item carries four options, one keyed answer, English/Russian explanation, three indexed English/Russian distractor rationales, local answer evidence and a scope limitation. Topic is separate from the skill tags used by the application. Tags use the agreed broad vocabulary: gist, explicit-detail, inference, reference, writer-attitude, purpose, organisation, comparison and qualification.

## Checks completed by the authoring agent

- Checked every authored key against its passage and supplied evidence and alternative-option rationales. This is an author-side editorial check, not independent validation.
- Confirmed 240 unique item IDs, 48 unique stimulus IDs, five questions per passage, the intended level counts, valid references, four distinct options and exactly the three unkeyed rationale indices for every question.
- Checked all required bilingual fields, original-source and uncalibrated-status metadata, tag vocabulary, and the specified passage-length ranges.
- Applied a stable per-item seeded option permutation to remove the initial authoring-position pattern. Verified programmatically that all 240 keyed meanings, option sets and all 720 distractor-rationale associations were preserved. The final key positions are 51 / 66 / 56 / 67; a balanced position count is not evidence of validity or security.
- Audited an initial length cue: the longest option was keyed in 40/50 B2 and 33/40 C1 items. Reworded options for concision and parity while keeping answer meaning. Final counts for longest keyed options, including ties: A1 19/50, A2 19/50, B1 22/50, B2 15/50, C1 9/40. Shortest keyed counts are 12/50, 8/50, 7/50, 17/50 and 11/40 respectively. This removes the conspicuous initial pattern; it does not prove freedom from subtler cues.
- Replaced several unrelated or implausible distractors and made a focused final pass on C1 global interpretations so competing readings have a specific connection to the text. Revised associated English/Russian feedback together.
- Incorporated independent-review corrections: A1-01-q3 now makes an extra camera-purchase requirement explicitly exclusive, with a rationale about what the notice requires; B1-04-q2 no longer implies that contacts agreed to the message time; A2-05-q4 no longer invents a lunchtime for the busy café; B1-10-q4 describes smaller prints, not redesigned artwork; B1-03-q4 alternatives and feedback now concern the guide and source material.
- Confirmed byte-identical docs/runtime mirrors after the final edits.

Final author-side snapshot SHA-256: `3e9307f4f260b0b4817cbe7d77fc73f3f96f1bccce5fc5df90ff8eb90eca5922`.

## Independent review and limitations

The separate experience-review agent reports having read all 240 prompts/keys against all 48 passages, with no definite incorrect or competing text-supported key found after the narrow fixes. Its final option review must use the exported post-permutation objects and the final snapshot, because the source tuples retain their original authoring order. The separate independent-review report is the authority for the scope and final status of that pass.

This is AI editorial review. No human examiner panel, cognitive interviews, learner pilot, item discrimination analysis, conditional reliability study, CEFR standard-setting exercise or external accreditation has been completed. Authoring labels may be wrong. In particular, several upper-level passages use a qualified-revision argument pattern; further genre and rhetorical diversity, plausible-distractor uptake and cue-only answering should be investigated in a pilot. Answerable text-supported questions can still be too easy for their intended target.

Five responses sharing one passage form a dependent stimulus cluster. They must not be reported as five independent confirmations of a level or skill. Form selection should preserve a coherent passage and not treat its items as unrelated evidence. A browser-delivered bank is inspectable and is unsuitable as a secure high-stakes examination. None of the counts, checks or length statistics warrants selling an exact level result.
