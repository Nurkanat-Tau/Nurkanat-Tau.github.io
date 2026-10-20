# Validation status and blinded pilot plan

## Current platform: 600-question pilot bank

The active application uses `pilot-bank-600-v1`: 240 language-use questions, 240 reading questions across 48 passages, and 120 listening questions across 32 clips from 16 underlying conversations/talks. Learners receive one of eight focused 120-question forms. The retained 30-question demonstration is a separate route.

**There are zero real learner calibration records. No validated CEFR level, sublevel, accuracy percentage, reliability coefficient, or Gallup-equivalence claim is available.** The active platform deliberately returns no automated CEFR classification. The level thresholds and simulation results in the historical section below are not used by the current application.

The personal report now explains actual responses and proposes practice. Its evidence rules are descriptive safeguards, not calibrated measurements. Repeated questions from one passage, or two clips from one conversation, are not treated as independent confirmations. First committed responses are retained separately from later corrections. Familiar recordings and technical failures are excluded from fresh item-performance evidence in the pilot inspector. That inspector starts empty and only analyses explicitly imported records; imported identity and independence are not authenticated.

### Evidence needed before charging for precise placement

1. **Define the decision.** Specify course placement for adults/students 16+, separate skills, conditions, accommodations, and the cost of over-placement and under-placement. Beginning/middle/end of a CEFR band are additional proposed claims requiring additional evidence.
2. **Independent human review.** Language-assessment specialists review every item, key, alternative, passage and recording. Run human listening checks for boundaries, intelligibility and naturalness. Separate-agent editorial reviews and ASR checks are useful preparation but are not independent human validation.
3. **Complete coverage and rights.** Produce or license original audio, including genuinely accessible beginner conversations. The current academic IELTS sources do not demonstrate balanced A1–C1 listening coverage, and possession of the supplied recordings does not establish paid/public redistribution rights.
4. **Cognitive and usability pilot.** A proposed initial 20–30 diverse learners can reveal misunderstood questions, answer strategies, fatigue and accessibility problems. This is a planning starting point, not a validation sample-size standard. Observe why learners choose answers, including correct answers reached through unintended clues.
5. **Plan calibration around exposure.** Have a psychometrician design recruitment and linked forms, including per-item coverage, source dependence, relevant groups and desired precision. With 120 of 600 items per attempt, 500 balanced complete attempts average only 100 responses per item; common anchors will receive more and some items less. A large overall participant count alone is insufficient. Do not pool unequal forms as if their raw scores were interchangeable.
6. **Pre-register development and evaluation.** Freeze versions, exclusions, primary metrics, fairness analyses and acceptable decision risks before evaluating outcomes. Split by learner, keeping a genuinely untouched evaluation sample. Avoid tuning on the same learners used to report accuracy.
7. **External references and standard setting.** Use independent, suitably aligned reading/listening reference evidence; productive-skill ratings cannot be treated as ground truth for receptive skills. Train experts on CEFR descriptors and set boundaries through a documented procedure, then test the boundaries empirically. Report uncertainty and unresolved cases rather than forcing every learner into a narrow category.
8. **Teacher reliability.** Collect two blind ratings on a prespecified subset of writing and speaking. Preserve both original ratings before adjudication. Check agreement and systematic severity differences; do not treat one teacher's judgement as infallible.
9. **Evaluate the claims.** Examine item difficulty, distractor function, discrimination, passage/source-family dependence, dimensionality, missingness, completion and dropout, retest/alternate-form stability, and fairness where sample sizes permit. Report confusion matrices, serious over/under-placement, intervals and abstention rates on held-out learners. Alpha alone does not establish validity or accurate level boundaries.
10. **Operational release.** Implement authenticated accounts, server-side protected bank/scoring, verified payment notifications, consent/retention/deletion, teacher scheduling, results delivery and an appeal/review process. The current static pilot has none of those commercial entitlements. Publish a technical manual and monitor drift after launch.

### Sources informing this process

- [Council of Europe: relating examinations to the CEFR](https://www.coe.int/en/web/common-european-framework-reference-languages/relating-examinations-to-the-cefr): a transparent, cumulative linking argument rather than automatic approval from using descriptors.
- [Cambridge English assessment development cycle](https://www.cambridgeenglish.org/english-research-group/validity-and-validation/testcycle.aspx): specifications, trials, expert judgement, pretesting and continuing evaluation.
- [ILTA Guidelines for Practice 2024](https://www.iltaonline.com/page/ILTAGuidelinesforPractice2024): evidence appropriate to intended use, transparent interpretation, fairness and quality assurance.

These sources inform the development process; they do not endorse this platform. The early pilot can provide useful practice and a teacher-supported discussion. Charging for an independently reviewed teacher service would be a different promise from selling an established precise automated level. No price or “50,000-tenge value” claim can be substantiated by question count or software QA alone.

## Historical prototype record — superseded, not active scoring

Updated: 21 October 2026, Asia/Qyzylorda. Engine version: **2**. Content bank: **preview-0.2.0-draft**, 80 items. This document describes a local working prototype, not a validated commercial assessment.

## Current conclusion

**Software behavior has been tested. Empirical measurement validity has not been established.** There are no observed learner accuracy figures, calibrated CEFR thresholds, validated A1–C1 subdivisions, test–retest results, or independent human rating agreement estimates. Nothing here establishes equivalence to Gallup, IELTS, Cambridge, or another standardized assessment.

The prototype is suitable for reviewing the experience and preparing a supervised research pilot. It is not ready to be sold with a promise of an exact, highly accurate, or certified English level. Speaking and writing remain unassessed until separately evaluated by the teacher. Online grammar/vocabulary, reading, and listening cannot stand in for those productive skills.

The Council of Europe frames assessment around demonstrated abilities and distinguishes assessment from testing alone. CEFR alignment needs a deliberate evidence-based process, not merely level labels on questions. [Council of Europe assessment guidance](https://www.coe.int/en/web/common-european-framework-reference-languages/assessment).

Cambridge describes both adaptive routing and substantial trialling in its assessment development. Adapting difficulty alone does not reproduce that research or transfer its validity to this prototype. [Cambridge: the science behind Linguaskill](https://www.cambridgeenglish.org/in/exams-and-tests/linguaskill/information-about-the-exam/the-science-behind-the-exam/).

## What changed after critical review

- A correct single C1 item no longer produces a C1 domain indication.
- A domain indication now requires at least three observations at the claimed level, at least three correct answers, and at least 75% correct at that level. This is a conservative editorial safeguard, **not a calibrated cut score**.
- There is no fallback that awards a level from one isolated correct response.
- When a higher level has some correct responses but fewer than three observations, the engine exposes `upperBoundaryPending` and `upperBoundaryLevel`. The UI should describe a boundary needing more evidence.
- Ranges describe the supported level and unresolved sampled boundary. They are not confidence intervals, numerical accuracy claims, or proof that the learner belongs at every level inside the displayed range.
- Full all-correct language responses can meet the minimum support rule at C1. Full all-correct reading and listening support B2 while leaving C1 pending: those routes contain only one C1 item each.
- All-wrong and all-unknown responses do not automatically award A1. When A1 was sampled unsuccessfully, the result says A1 was not demonstrated; it does not claim an independently established pre-A1 classification.
- Engine version increased to 2. Version-1 saved attempts fail validation rather than being silently reinterpreted using different scoring rules.

The quick assessment remains 12 items: six language and six reading. The full preview remains 30 items: twelve language, nine reading, and nine listening. These counts are product constraints for the current preview, not research-derived optimal lengths.

## Reproducible engineering checks

Run from the project directory:

```text
node --test tests/engine.test.mjs
```

The current run passed **16 tests**. Covered behaviors include exact section limits; independent domain routing; deterministic reloads; no repeated item IDs; pure submissions; duplicate-submission idempotence; lower-floor handling; sparse upper-boundary handling; bank exhaustion; invalid answer indexes; mismatched engine/content versions; unknown, duplicated, reordered, and tampered saved responses; and an internally consistent response from outside the seeded route.

Validation of browser storage is a correctness safeguard, not an anti-cheating security boundary. The prototype contains its answer keys in browser-delivered JavaScript. Production scoring and entitlements must move server-side before commercial launch.

### Real-bank route coverage

The current bank contains eight language, four reading, and four listening items at each of five intended levels. The tests completed 160 seeded routes across quick/full formats and correct, wrong, alternating, and unknown-response patterns. Every supported domain indication met the new evidence rule; no route exhausted the real bank.

| Domain | A1 exposures | A2 | B1 | B2 | C1 |
| --- | ---: | ---: | ---: | ---: | ---: |
| Language | 560 | 440 | 280 | 80 | 80 |
| Reading | 380 | 400 | 320 | 80 | 20 |
| Listening | 240 | 260 | 140 | 60 | 20 |

These are synthetic software-test exposures. They are not human response data or population coverage evidence.

### Uniform-guessing simulation

With a deterministic random generator, 1,000 full attempts selected uniformly among each item's options:

- 204 attempts (20.4%) obtained a minimum-supported indication in at least one domain.
- 796 attempts obtained no supported domain indication.
- None obtained B2 or C1 support in this finite simulation.

**The 20.4% finding is a material limitation.** Passing the test that high-level guessing promotions are uncommon does not establish overall accuracy. Zero observed high-level promotions is not proof of zero risk. The model assumes uniform guessing and does not represent actual learner guessing, elimination strategies, assistance, or exposed answers.

### Synthetic sensitivity check

Five toy mastery profiles each produced 150 full attempts. The model assumed 95% success on items at or below a chosen boundary and chance success above it. Its aggregate evidence index rose with the assumed boundary: approximately -0.002, 0.998, 1.989, 2.818, and 3.013 for A1 through C1. The internal index encodes unsupported domains as -1 and supported levels as 0–4; **it is not a student score**.

Monotonicity in this artificial model is a useful regression check. It cannot establish empirical sensitivity. The limited separation of the B2 and C1 toy profiles exposes the upper-level coverage constraint, especially in reading and listening.

### Same-total and threshold counterexamples

Two legitimate twelve-item language routes with eight correct answers produced different provisional indications: early successes routed into harder items and supported B2; early failures followed by lower-level successes supported A2. A simple percentage-correct-to-CEFR lookup would erase that distinction.

Another test exposes instability at the editorial threshold: three correct B1 observations produce minimum support, while changing one of those responses to incorrect removes the indication. This is expected under the current rule and illustrates why minimum observations do not establish dependable classification. Do not translate these narrow results into precise beginning/middle/end subdivisions.

## Concrete next bank and routing work

1. Retain this 80-item bank as demonstration material until reviewed. Build a content blueprint separating grammar, vocabulary, reading operations, and listening operations, with intended CEFR descriptors, context, format, and accessibility requirements.
2. Expand with independently reviewed original content. A 500-item bank is a possible authoring target, not a scientific requirement. Protect breadth across subskills, genres, passages, speakers, and difficulty boundaries rather than filling a numerical quota.
3. Use at least two reviewers for ambiguous distractors, unsupported keys, intended difficulty, construct relevance, and cultural or linguistic bias. Keep unresolved items out of scored forms. Record revisions and preserve immutable versions.
4. Replace the current fixed high-level endpoint with a candidate route that reserves a confirmation block at the unresolved boundary. Do not declare C1 based on one upper probe. Evaluate longer routes or explicit teacher confirmation if the 30-item budget cannot collect enough evidence across all domains.
5. Treat related questions sharing a passage/audio clip as potentially dependent. Sample multiple independent stimuli; count exposure and analyze clustering. Several questions about one text do not necessarily provide several independent pieces of level evidence.
6. During calibration, use balanced assigned blocks and shared anchor items as well as adaptive routes. Pure adaptation can leave some items and boundaries too sparsely observed to evaluate.
7. Select thresholds, route rules, and stopping criteria using development data; freeze them before held-out evaluation. Do not keep adjusting rules until the same test sample appears accurate.

## Planned blinded human pilot

**Stage A — usability and comprehension.** Recruit a small diverse group, for example 20–30 participants, to identify unclear instructions, inaccessible interactions, audio failures, fatigue, and mobile problems. These counts are planning examples, not psychometric sufficiency claims. Collect consent and avoid describing their experimental results as final placements.

**Stage B — content and standard-setting preparation.** Independent assessors agree on the construct, assessment conditions, descriptor-based rubrics, item review process, and the meaning of each proposed course-placement boundary. Standard-setting and empirical calibration are separate activities. Specify which decisions the test will support and the costs of placing someone too high, too low, or leaving a result unresolved.

**Stage C — balanced development pilot.** Recruit across likely A1–C1 ability, language background, age where relevant, and device/accessibility needs. Plan sample size around required precision and per-item exposure with a language-assessment specialist; do not assert that a convenient fixed total validates 500 items. An initial 200–300 learner study could diagnose problems, but may be inadequate for full calibration, subgroup comparisons, or fifteen sublevel claims.

Use an independent, reasonably close-in-time comparator covering matching reading/listening skills. A speaking interview or writing task alone is not ground truth for reading and listening. Collect teacher speaking and writing ratings separately for the eventual multidomain profile.

**Blinding:** comparators and teacher raters must not see the automated result, selected offer, course-sales outcome, or another rater's preliminary score. A second trained rater independently scores a prespecified substantial subset; disagreements are adjudicated only after both original ratings are locked. Record the original and adjudicated ratings. Teachers' judgments are evidence with their own uncertainty, not infallible truth.

**Stage D — preregistered analysis.** Before viewing outcomes, freeze the versioned blueprint, rules, inclusion/exclusion criteria, primary metrics, subgroup analyses, missing-data treatment, and decision thresholds. Specify:

- Per-domain confusion matrices against the chosen comparator; exact and adjacent-band agreement; weighted agreement statistics and uncertainty intervals.
- Over-placement and under-placement by one and by more than one band, including the severe errors that course placement particularly needs to avoid.
- Abstention/insufficient-evidence rates and coverage. Report performance among classified learners alongside the proportion left unresolved; do not hide difficult cases by excluding them.
- Inter-rater agreement before adjudication; item difficulty, discrimination, distractor selection, exposure, time, omission, and passage/audio dependence.
- Retest/alternate-form consistency for a consented subset, with a prespecified interval and attention to practice and memory effects.
- Completion and dropout by skill, level, device, and permitted demographic/language groups; investigate accessibility and potential differential item behavior when sample sizes support analysis.

Use participant-level development/evaluation separation. Keep an untouched held-out sample; prevent repeated attempts from one person crossing the split. Cluster or model passage-related dependencies and do not treat answer-level resampling as independent learner evidence.

**Stage E — decision and external review.** Have a qualified independent reviewer evaluate the evidence and unresolved limitations. Agree on quantitative release criteria before the held-out analysis rather than choosing them afterward. If a domain, boundary, or subgroup lacks adequate evidence, narrow the public claim, collect more data, or require teacher confirmation. A paid product and a marketing claim of accuracy are separate decisions; neither follows automatically from a polished interface or passing code tests.

No live learner data, human pilot, independent review, or validated release criterion has yet been completed. The correct present label remains **working preview / supervised pilot**.
