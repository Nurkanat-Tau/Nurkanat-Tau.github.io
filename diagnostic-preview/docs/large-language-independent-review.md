# Independent editorial review of the 240 language items

This is a second AI-agent editorial review, separate from the authoring agent. It is not a human expert panel, a learner pilot, a CEFR standard-setting exercise or approval for paid diagnosis.

The reviewer read all 240 contexts, stems, four choices, keyed meanings and bilingual explanations, and then checked all 720 distractor explanations against their choices. Coverage was 48 items in each authoring target A1, A2, B1, B2 and C1. Changed items were reread after correction. No remaining competing-key or unsupported-key issue was identified in that review; this wording describes the review result and does not guarantee that no error remains.

## Concrete issues corrected

| Item | Finding and correction |
| --- | --- |
| A2-027 | The context required an application to arrive by Friday but the gap sentence only required sending it by Friday. The sentence now explicitly requires arrival. |
| B1-012 | The reply speaker was unclear. The prompt now identifies the flatmate whose lending condition is being expressed. |
| B2-032 | “Completed an agreement” could support a defensible finalisation reading. That distractor was replaced with “replied”, with matching feedback. |
| A1-011 | Mixed Russian/English wording “plural eggs” in the Russian feedback was corrected. |
| B1-028 | The “have part in” distractor depended on a marginal register distinction. It was replaced with “bring”, with matching feedback. The [Collins involve entry](https://www.collinsdictionary.com/dictionary/english-german/involve) itself uses “have part in” as a gloss, supporting this defensive removal. |
| B2-003 | “Hold responsibility” could suggest bearing responsibility even though “take” was the intended expression for accepting it. The distractor is now “put”; the feedback explains the missing allocation complement. |
| C1-004 | The context only said a bowl was damaged, but the keyed answer inferred a repair and continued use. The context now explicitly supplies those observations before asking the learner to limit the financial inference. |

The author also strengthened B1-001/002/007 and B2-001/005/017/018/023/026, replaced the reused C1-003 scenario, removed a marginal C1-016 collocation alternative, corrected A2-043’s past-tense tag and removed identical duplicate tags. Those changes were reread. The report engine uses each item’s primary broad skill tag for aggregation; detailed secondary tags remain catalogue metadata.

## Option-length and answer-pattern review

The reviewer checked predictable answer positions and simple longest/shortest-choice heuristics. Every target has 12 keys in each of the four positions. Keys do not run through an exact numeric-ID modulo-four cycle. These facts are editorial checks, not guarantees against other answer cues.

The first completed C1 draft had a shortest-choice heuristic rate of 38.37%. Seven items (C1-028/029/033/036/038/039/041) had verbose distractors surrounding a short, direct key. The reviewer shortened those alternatives into parallel phrases and updated their specific feedback. Correct answer meanings and indices were preserved. For example, the four interpretations of “all but complete” now use short completion-status phrases rather than one two-word key among much longer alternatives. The edits were selected for clearer competing meanings, not to pad correct choices or force every diagnostic to 25%.

Run `node scripts/language-editorial-audit.mjs` to reproduce the fixed-bank diagnostic and file hash. Ties use uniform choice among the shortest or longest alternatives.

| Authoring target | Longest choice | Shortest choice |
| --- | ---: | ---: |
| A1 | 26.22% | 23.78% |
| A2 | 26.22% | 21.01% |
| B1 | 26.22% | 24.48% |
| B2 | 25.17% | 28.99% |
| C1 | 31.60% | 25.00% |

These are post-edit, fixed-bank shortcut results, not a held-out test or estimates of how learners perform. In particular, the residual C1 longest-choice result is reported rather than hidden. Neither measure establishes semantic distractor functioning, discrimination or absence of other cues.

## Remaining limitations and next review

The A1–C1 fields are authoring hypotheses. Several C1-tagged items test direct paraphrase, familiar reference words or an explicitly supported distinction; successful responses cannot establish C1 proficiency. Common prompt templates are appropriate for some grammar tasks, but their repetition and answer-choice structures may support test-taking strategies. Counterbalanced learner piloting, item discrimination and distractor-function analysis are still required.

Written recognition also mixes contextual reading with language knowledge. It does not measure spontaneous spoken or written production. Subsequent human review should examine construct coverage, Russian feedback clarity, cultural accessibility, task familiarity and whether each target is defensible against CEFR descriptors. Only suitable learner evidence, external reference assessments and a documented standard-setting process can support a level interpretation.

Content reviewed before the final seven wording revisions had source SHA-256 `06329acf396444a5ac4ecd69e556ee9b351896339d24d785ca18cfa2fd680a01`. Final seven-item revision source/runtime SHA-256: `77c1c028c528e004d051c06fcced1a67f5f377b0eee653154c4950415971c54e`. The author separately checked all seven final revisions against context, keys and bilingual rationales and found no competing key or feedback mismatch; the author-review note records its disposition. Later content changes require a new review note/hash rather than silently inheriting this result.
