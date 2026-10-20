# Independent state and pilot-statistics code review

The independent reviewing agent read `dist/platform-engine.js` and `dist/platform-validation.js`, focusing on deterministic form construction, local resumption, first committed responses, dependent listening sources and descriptive statistics. The reviewer did not edit either implementation file; the root implementation agent made the fixes below and added regression tests.

## Findings corrected and independently reproduced

1. **Contradictory skill summaries.** A skill could appear in both strengths and priority gaps. On real form F1, an otherwise all-correct synthetic attempt with one wrong explicit-detail reading answer produced 18/19 in both lists. The implementation now makes these descriptive categories disjoint: below 80% is eligible for a gap, and at least 80% is eligible for a strength, subject to the existing evidence-breadth requirement. This threshold is a feedback heuristic, not a CEFR mastery cutoff.
2. **Impossible stored completion states.** Resumption accepted all blocks completed with `finished:false`, and accepted one isolated `firstResponses` entry from an otherwise uncommitted block. The normal commit operation records an entire block at once. Validation now requires first-response presence to be all-or-none within each block and requires `finished` to match whether every block is complete.

After the fixes, the independent reviewer reran both counterexamples and verified rejection/disjoint summaries. A legitimate edit to a previously committed block remained valid and preserved its first responses. This distinction matters: editable practice answers and immutable first committed responses serve different purposes.

## Statistical and integrity interpretation

- Pilot item counts use first committed responses. Revised answers do not silently replace them. Unknown answers count as observed non-correct responses; technical audio failures and recordings marked familiar are excluded from item accuracy. Exact domain-form signatures separate consistency calculations across different forms.
- Listening family identifiers group excerpts from the same underlying talk or conversation. The feedback evidence-breadth count and exploratory cluster alpha use those source families, not just MP3 filenames. Raw item alpha and item-rest correlation still reflect within-source dependence; they should not be read as independent confirmations of proficiency.
- The Wilson formula is appropriate for the descriptive binary counts under independent-response assumptions. Those assumptions are not established by accepting uploaded records. Duplicate attempt IDs are rejected, but identity, repeated attempts by one learner, genuine exposure and response authenticity are not verified by this local tool.
- Alpha uses raw item or source-family scores and may be negative; it is not forced into an apparently reassuring range. Requiring 30 complete same-form domain records only suppresses extremely small-sample output. It does not establish a sufficient validation sample or validated reliability.
- Storage validation checks schema and internal consistency, not cryptographic authenticity. A user controls this local static application and its exports. The code cannot turn an edited local record into trusted examination evidence, and this prototype is not a secure paid-testing backend.

No new wrong-score calculation was identified after the corrected counterexamples. This code review does not establish CEFR validity, calibrated difficulty, secure identity, item fairness, equivalence of the eight forms or commercial readiness. The final release suite records executable checks and exact file hashes separately.
