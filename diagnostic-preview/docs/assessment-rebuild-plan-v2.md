# English diagnostic rebuild: assessment specification and quality gates

Prepared for Нұрқанат Дайраш · 21 October 2026 · audience confirmed: adults and students aged 16+.

**Decision:** the current 30-response prototype is not an acceptable foundation for the promised paid diagnostic. Retain its useful interface components, but replace the assessment blueprint, listening production, scoring approach and result interpretation. This document supersedes the first plan wherever the two conflict.

**Status:** replacement development plan, supported by a renewed engineering investigation. It does not claim that the larger bank, human recordings or validated scoring already exist. The current private preview and public `test.html` are not changed by this document. The immediate deliverable is a defensible specification and research evidence; the next build must follow it.

## 1. What went wrong, and what must change

The user completed the prototype and reported poor synthetic audio, questions that did not reflect their English, and an unhelpful broad level picture. These observations are product acceptance failures. File decoding, a polished page and passing JavaScript tests did not resolve them.

| Current problem | Required replacement | Evidence required before acceptance |
| --- | --- | --- |
| Only 12 language, 9 reading and 9 listening responses | A substantial, balanced assessment with confirmation of the relevant boundaries | Compare classification, coverage and fatigue on real learners |
| Tiny author-labelled bank | A large, reviewed and empirically examined bank with a documented content blueprint | Item review records, learner exposure and item-functioning analysis |
| Three correct answers can establish an editorial level indication | A calibrated decision process with independent confirmation and uncertainty handling | Held-out agreement, conditional error and alternate-form consistency |
| Synthetic Windows narration | Original recordings of real human interaction and monologue | Human listening approval, task review and learner trials |
| Min–max headline such as A1–B2 | Separate skill decisions and a justified placement recommendation | Learners understand their profile and teachers can act on it |
| Advice selected from a small number of errors | Priorities supported by repeated evidence and productive work | Traceable examples, teacher review and a practical follow-up plan |
| Browser-delivered answer keys and local-only attempts | Secure, versioned assessment delivery and durable paid access | Backend, recovery, security and payment tests |

The earlier 20.4% figure meant that uniform random guessing received a preliminary label in **at least one online domain** in 204 of 1,000 simulated attempts. It was not a measured 20.4% error rate among real students. It is still a serious warning. We must improve that behavior without making the system refuse to assess everybody, and without confusing better-than-chance performance with demonstrated CEFR ability.

### Renewed investigation completed with this plan

The exact current engine was rerun on **10,000 deterministic random-answer attempts**: 2,147 received at least one domain indication, **21.47%**, with a 95% Wilson interval of **20.68–22.29%**. Per-domain rates were 1.88% for language use, 10.41% for reading and 10.58% for listening. The first 1,000 reproduce the earlier 204 cases exactly.

A separate synthetic 120-response experiment compared an editorial threshold, a multiple-comparison-corrected chance test and a conservative stimulus-block rule. It exposed useful failures:

- Under independent responses, the chance-test candidate produced any-domain support in 0.07% of null attempts.
- In an artificial strong-dependence stress scenario, with groups of four items and within-group correlation set to .60, the same rate rose to 12.23%. This is a sensitivity experiment, not an observed correlation or error rate in learners.
- Conservative block scoring could reject chance outcomes while making useful reading/listening classification impossible in the four-item-block configuration.
- A nominal-A2/emerging-B1 synthetic profile was overplaced by one band in reading in 35.5% of attempts under the chance-test candidate. Its nominal band is defined by the toy model, not an independently established human level.

The investigation comprises 54,000 synthetic candidate attempts in addition to the 10,000 current-engine attempts. **No replacement scorer passed a sufficient validity argument for production.** These results reject the idea that a very low random-guessing rate proves accurate placement. The frozen inputs, exact simulation assumptions, outputs and deterministic rerun check are in [the research report](../research/README.md).

## 2. What standard we are pursuing

The intended use is a useful general-English skill profile and course-placement decision for learners aged 16+, initially with Russian instructions and a fully equivalent English interface. The service covers A1–C1, permits a foundations assessment below the current A1 floor, and identifies the C1 ceiling without inventing a C2 result.

The benchmark is a documented language-assessment development process: define the abilities, build suitable tasks, obtain independent judgments, examine actual learner performance, establish boundaries, and evaluate the final decisions. Cambridge describes assessment quality through validity, reliability, impact and practicality. These are separate questions, all relevant here. [Cambridge research and validation](https://www.cambridgeenglish.org/in/research-and-validation/).

The Council of Europe describes the process of justifying links to the CEFR; it does not certify our test merely because we use A1–C1 labels. [CEFR alignment guidance](https://www.coe.int/en/web/common-european-framework-reference-languages/relating-examinations-to-the-cefr). ILTA's current guidelines provide a useful framework for suitability, reporting, consistency, fairness, security and equivalence. [ILTA guidelines](https://www.iltaonline.com/page/ILTAGuidelinesforPractice2024).

“Gallup of English” is the ambition for seriousness and usefulness, not a scientific certification or a claim of equivalence. Gallup currently describes CliftonStrengths as 200 paired statements. IELTS Academic has 40 listening and 40 reading questions, plus separately assessed writing and speaking. Their quality is not transferable by copying their counts. [Gallup structure](https://support.gallup.com/hc/en-us/articles/4415092592275-How-is-the-CliftonStrengths-assessment-structured), [IELTS listening](https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-listening), [IELTS reading](https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-reading).

Our numerical quantities and acceptance targets below are **proposed project decisions**, not thresholds endorsed by those organizations. We will not claim accreditation, official IELTS bands, or a guaranteed exact level.

ALTE now lists a **2026 revision** of its language-test development manual. Its current materials listing was checked; the linked PDF could not be retrieved in this session, so this plan does not claim a full review of that new edition. The independent specialist's standards review should use the current edition alongside the accessible CEFR and ILTA guidance. [ALTE materials](https://www.alte.org/Materials).

## 3. The product we should actually sell

Develop one complete 5,000 ₸ diagnostic service first. The online portion supplies evidence; the teacher adds speaking, writing, interpretation and an actionable placement recommendation. A cheaper automated-only offer can be reconsidered after the online decisions have their own validity evidence.

The complete service should deliver:

1. A substantial online assessment of language use, reading and listening.
2. Two level-appropriate writing tasks reviewed by a trained teacher.
3. A structured speaking assessment, including spontaneous interaction and follow-up.
4. A separate result for each communicative skill, with language-use evidence shown as supporting information.
5. Up to three evidenced strengths and up to three consequential development priorities, without inventing findings to fill a quota.
6. Annotated examples from writing and speaking, with learner permission for recording.
7. A four-week plan tied to the person's goals, available practice time and actual gaps.
8. A personal explanation and an appropriately bounded clarification/placement-review route.

The learner must receive value even if they never enrol in a course. Course sales must never influence scores, cutoffs or the teacher's initial rating. The aspiration to deliver exceptional value should be demonstrated through this service, not an unsupported crossed-out “50,000 ₸” price.

## 4. Bank size and test size are different decisions

Target **at least 600 retained online items** as the core of the first substantial bank. Draft a larger pool, initially budgeted at 900–1,200, because some items will be rejected or revised. Additional reserves may be necessary for the actual operational forms and retake policy. AI-assisted drafting is permitted; human review and empirical examination cannot be replaced by a generation count.

| Intended authoring band | Grammar in context | Vocabulary/use in context | Reading items | Listening items | Total |
| --- | ---: | ---: | ---: | ---: | ---: |
| A1 | 20 | 20 | 40 | 40 | 120 |
| A2 | 20 | 20 | 40 | 40 | 120 |
| B1 | 20 | 20 | 40 | 40 | 120 |
| B2 | 20 | 20 | 40 | 40 | 120 |
| C1 | 20 | 20 | 40 | 40 | 120 |
| **Total** | **100** | **100** | **200** | **200** | **600** |

These level labels begin as hypotheses for authoring. Piloting can move, revise or retire an item; do not force empirical difficulty into the original table to make the quota look complete.

**Bank sufficiency is a separate assembly test.** Forty receptive responses at an intended band may be inadequate for a fresh targeted block, confirmation, extensions and an independent alternate form. Before fixing the operational bank size, simulate every supported route and the promised retake policy with stimulus and content constraints. Maintain reserved, unexposed material; enlarge the bank wherever those demands cannot be met. Six hundred is a core development target, not proof that every operational form can be assembled. No fallback may repeat a previously exposed stimulus and call it independent confirmation.

Plan approximately 80 distinct reading stimuli and 80 listening recordings for the receptive bank. The provisional allocation per domain is 20 A1, 16 A2, 16 B1, 14 B2 and 14 C1 stimuli. Each level still has 40 linked scored responses. Related questions share context and are not statistically independent merely because they have different IDs.

Maintain a separate public practice bank. Active measurement items, secure alternate forms and their answer keys must not all be disclosed in the learner report. Retired or practice items can have complete explanations.

Add a separate productive-skills inventory: provisionally 25 writing packs with two tasks each and 25 structured speaking sets, distributed across the five authoring bands. Build annotated benchmark performances for rater training; task-pack counts do not replace evidence of rater and task dependability.

Do not make every learner answer all 600 items. Large banks support balanced forms, targeted follow-up, security and independent retesting. Administering every item adds burden and memorization opportunities; it does not automatically increase useful precision.

## 5. Candidate assessment: 120 online responses plus productive skills

The starting specification to pilot is **120 online scored responses**, divided evenly across three domains. It is a fourfold increase over the prototype, with a different content and decision design.

| Component | Proposed initial form | Purpose |
| --- | --- | --- |
| Grammar and vocabulary/use | 40 responses, broadly balanced across the two areas | Examine interpretation and controlled use in context |
| Reading | 40 responses across multiple independent texts | Main meaning, detail, reference, organization, inference and stance |
| Listening | 40 responses across multiple natural recordings | Practical comprehension, connected meaning, change of mind, interaction and attitude |
| Writing | Two tasks, selected for the likely ability region | Produce a purposeful message and a more sustained text |
| Speaking | Structured live assessment, initially budgeted at 18–22 minutes | Interaction, spontaneous explanation, clarification and elaboration |

Pilot timing assumptions are approximately 100–120 minutes online plus breaks, and 35–45 minutes for writing. Those are planning estimates, not advertised promises or stop rules. Lower-level writing tasks must be shorter and appropriate to demonstrated literacy and language ability. The speaking/writing stage can be booked separately.

Test a 90-response alternative against the 120-response form using independent learner evidence. Adopt a shorter form only if it preserves the intended decisions and improves the experience. Do not select 120 just because it sounds impressive, or shorten it only to increase completion.

A candidate domain design is **8 routing items + 16 targeted items + 16 fresh confirmation items**. Routing should operate in reviewed blocks with overlapping ability regions, not jump a level after three arbitrary answers. Early routing mistakes must be recoverable. Confirmation uses fresh stimuli and cannot be coached by earlier sections.

Allow **12–24 additional responses in total**, allocated to unresolved domains, before teacher review. Do not add unlimited questions until a desired label finally appears. Define the extension and stopping policy before evaluation, account for repeated decisions, and show the learner why an extension is needed.

For reading/listening, budget approximately 14–20 stimulus sets per domain when each stimulus carries two or three questions; routes dominated by two-question A1 stimuli may need 20. Form assembly must verify this count against the 40-response domain total and the available fresh material. Require several independent texts/recordings near a decision boundary; treat their linked questions as clusters in analysis. The exact balance is subject to the time and information obtained in pilots.

## 6. Questions must represent language use

Every task needs a statement of what successful performance demonstrates, what it does not demonstrate, and which alternative explanations could produce the same answer.

| Authoring target | Example communicative evidence to sample | What would be a poor substitute |
| --- | --- | --- |
| A1 | Follow a short arrangement; recognize who does what and when; give basic personal information | A long paragraph labelled A1 because its tense is present simple |
| A2 | Understand a changed plan, sequence routine instructions, write a practical request | An isolated irregular-verb quiz used as the whole A2 diagnosis |
| B1 | Follow a connected account, explain a choice, distinguish a reason from a consequence | General-knowledge answers obtainable without understanding the text |
| B2 | Compare viewpoints, negotiate a practical trade-off, sustain an explanation and recognize qualification | Always selecting the longest or most nuanced option |
| C1 | Interpret implicit stance and register, track complex relationships, express precise qualifications | Rare vocabulary, digital speed increases, or institutional prose alone |

Content must span education, work, services, travel, relationships, community life, culture and personal decisions suitable for age 16+. Avoid specialist factual knowledge, culturally exclusive assumptions, and a bank dominated by research-methodology arguments.

Use several response formats: plausible multiple choice, matching, information transfer, constrained short answers, meaning-preserving reformulation and separately rated production. A short answer reduces some option-guessing opportunities but introduces spelling and marking issues; declare accepted forms and evaluate those effects. Do not penalize spelling in a pure listening-comprehension task unless the specification explicitly includes it.

Do not require advanced reading to answer a low-level listening item. Do not turn memory for many numbers into an English-level proxy. Do not classify a learner as weak in a topic from a single miss. Repeated independent evidence, not isolated question tags, should determine diagnostic feedback.

## 7. Item production and review

Use a versioned pipeline: **specification → draft → two independent reviews → revision → learner trial → item analysis → standard-setting review → operational approval → monitoring/retirement**.

Each item record must include:

- Construct and intended descriptor/ability; source reference when used.
- Stimulus ID and version, task type, domain and authoring difficulty hypothesis.
- Situation, register, topic, language demands and assumed non-language knowledge.
- Key/accepted answers, explanation, rationale for each distractor and supporting text/audio span.
- Why the task cannot be answered reliably through option tone, length or shared keywords alone.
- Linked-item/testlet ID, potential cross-section cueing and known local dependence.
- Reviewer decisions, disputes, changes and release status.
- Trial exposure, omissions, timing, difficulty, discrimination and distractor behavior.
- Accessibility and rights status; item/recording checksum and scoring-version compatibility.

One reviewer first answers without seeing the key. The second reviews construct relevance and alternative answers. A disputed key is not resolved by majority confidence alone: revise the item or remove it from scored use. Keep review records so the same weakness does not return in generated variants.

The old 80-item bank is a development archive. Any retained idea must pass the new pipeline; its previous draft label does not confer approval.

## 8. Listening: replace the production method

Retire all 20 existing Zira recordings from operational consideration. Do not merely use a more expensive synthetic narrator. Do not silently substitute old synthetic audio when a production asset fails.

Commission original human recordings after approving scripts and task designs. Start with **10 proof recordings: one conversation and one monologue at each intended level**. Approve those before commissioning the full bank of approximately 80 stimuli.

Use 6–8 adult performers with clear, authentic varieties of English. Include voices encountered internationally; distribute voices and varieties across levels. Do not reserve unfamiliar accents for C1, require a particular nationality, or ask performers to imitate a national accent. The aim is appropriate comprehension, not an accent-identification exercise.

At least half of the stimuli should contain real interaction. Performers rehearse and record exchanges together, with separate tracks available for editing. Preserve natural contractions, appropriate hesitation, emphasis, repair and turn-taking. A1 speech may be clearer and more deliberate while still sounding like communication. Never construct difficulty by uniformly speeding recordings or adding gratuitous noise.

Provisional stimulus-duration ranges for budgeting are 15–35 seconds at A1, 30–60 at A2, 60–100 at B1, 90–150 at B2 and 120–210 at C1. These are task-production estimates, not CEFR rules; individual tasks can differ when justified. The proposed 80-stimulus allocation implies roughly 80–140 finished minutes before revisions and alternate takes.

Keep masters, isolated tracks, selected takes, exact transcripts, answer timestamps, casting notes, recording directions, signed use rights and delivery versions. A changed take can change difficulty; new recordings require rechecking rather than pooling old responses automatically.

### Local audio acceptance specification

1. Archive 48 kHz/24-bit PCM masters; supply tested web delivery files and a format fallback.
2. Target consistent perceived speech level; a provisional mastering target is −18 LUFS integrated within approximately ±1 LU for comparable clips, with extra checks for short clips.
3. Keep true peaks at or below −1 dBTP; no clipping, lost consonants, intrusive edit seams, clicks or aggressive denoising artifacts.
4. Match perceived levels between speakers. Background music is excluded; contextual noise requires a construct justification and separate trial.
5. Two independent fluent reviewers answer from audio without the key and then check the actual take against the script and questions.
6. Any defensible second key, unintelligible answer-bearing segment, accidental answer-revealing stress or robotic exchange triggers revision.
7. Blind-review naturalness and intelligibility on a five-point scale. Proposed acceptance: median at least 4/5 for each, no unresolved critical defect, and follow-up on every low score.
8. Run a learner listening panel spanning the intended ability regions; an initial 15–25-person panel detects problems but does not validate all levels.
9. Check ordinary phone speakers, inexpensive earphones, iOS/Android, desktop and Instagram-browser playback; test interruptions, seeking/replay rules and headphone reconnection.
10. Verify hashes, metadata, duration, decoding, actual playback and request failure recovery. These engineering checks supplement human listening approval.
11. Define replay conditions before piloting. Keep them consistent; any different accessibility condition must be identified in interpretation.
12. A failed recording yields recovery or a replacement task, never a wrong answer or a lower level.

These loudness and production thresholds are our proposed engineering requirements. They are not claims about IELTS or CEFR standards. No human recording, rights purchase or performer hiring is claimed to have occurred yet.

## 9. Speaking and writing are essential evidence

Speaking should include a brief familiar interaction, a sustained account or explanation, a practical exchange requiring clarification, and follow-up at the apparent boundary. Do not let a memorized introduction determine the level. The assessor should adapt within a documented protocol and retain the actual prompts/conditions.

Writing should include a practical message plus a longer text appropriate to the likely ability region. Beginner tasks can ask for short purposeful language; advanced tasks should require organizing and qualifying meaning. Task completion, organization, range and control should be distinguished. Keep first drafts and document permitted assistance and time conditions.

Train raters with benchmark performances and annotated rationale. Blind their initial ratings to the online score, course availability and sales interest. Preserve initial independent ratings before adjudication. Double-rate a substantial prespecified pilot subset, all seriously inconsistent cases and all proposed fine-sublevel decisions. Record disagreement rather than hiding it through immediate consensus.

An AI tool can organize evidence or propose comments for review. The accountable teacher must verify observations and decisions. Do not invent a speaking weakness from a transcript alone or equate a grammar-recognition score with communicative performance.

## 10. Scoring: a staged evidence model

Retire the production use of the current three-correct/75% heuristic. The next scorer must distinguish:

- **Above-chance evidence:** could random choices plausibly produce this response pattern?
- **Ability evidence:** does performance support a particular descriptor-defined decision?
- **Decision precision:** how stable is that decision near the relevant boundary?

A low chance probability answers only the first question. It cannot certify A2, B2 or C1. More questions also create more opportunities for lucky success if the rule selects whichever level happens to pass.

Before calibration, use reviewed linked forms/blocks and teacher-supported interpretation for research participants. Publish no automatic precise-placement claim from an uncalibrated adaptive algorithm.

Once learner data support a model, compare an interpretable baseline with appropriate item-response/testlet models. Do not choose a complex model for its name. Examine fit, item drift, lower-level guessing, local dependence, subgroup behavior, and information around every important cutoff. Conditional measurement error and classification consistency matter more than one impressive reliability coefficient for the entire test.

Require fresh confirmation near a proposed level, recovery from early routing mistakes, prespecified maximum test length, exposure control, balanced content, and a documented response to contradictory evidence. Control repeated decision opportunities. Never make the confidence threshold easier because the candidate is tired or because the business wants a result.

An unresolved result must trigger useful next evidence within the service: targeted items or teacher assessment. An engine that says “uncertain” to almost everyone is not acceptable even if its few labels are accurate.

The new reproducible engineering comparison is documented in [the research report](../research/README.md). Its synthetic 120-response design is a controlled experiment; it is not the complete production blueprint above, a calibrated item bank, or a human validation study.

## 11. Results: clear without false precision

Remove the cross-domain min–max range from the final placement headline. Do not replace it with an unsupported exact label simply to make the screen look decisive.

An illustrative mixed profile is:

| Area | Result example | What the report must explain |
| --- | --- | --- |
| Reading | B2 | Which tasks support understanding of contrasts, detail and qualification |
| Listening | A2 | What routine meaning is understood, and which connected exchanges remain difficult |
| Speaking | B1, after assessment | What the person can explain independently and what happens in follow-up |
| Writing | B1, after assessment | Communication achieved, recurring patterns, and annotated examples |
| Language use | B1 supporting evidence | Recognition/controlled use, separated from spontaneous performance |

These labels illustrate presentation only; they do not describe this user or any tested learner. The report must not headline the person as “A2–B2” or average all rows into a numerical pseudo-score.

A teacher may recommend a B1 group with additional listening support only if the observed interaction shows the learner can follow that class with normal clarification. If essential comprehension is missing, recommend a bridge module and reassessment. Explain the evidence and conditions. Do not automatically place everyone at either their strongest or weakest skill.

If a single skill straddles an adjacent boundary, say which distinction remains unresolved and complete a targeted follow-up. A domain spanning several bands is a diagnostic failure to investigate. For the paid service, the remedy must be a bounded included assessment/review, not an empty broad interval and a demand to purchase more information.

Show assessment date, version, conditions, assessor, observed strengths, meaningful gaps and the basis of the recommendation. Do not show invented confidence percentages, percentiles without appropriate norms, or a task percentage masquerading as CEFR progress.

## 12. Beginning, middle and end of each level

Keep this as a later research objective. “Beginning/middle/end A2” is a proposed internal curriculum subdivision, not a new official CEFR label. Equal thirds of a raw score do not justify it.

Define each proposed subdivision through meaningful task/descriptive distinctions and course prerequisites. Gather sufficient evidence near each additional boundary, standard-set them independently, and evaluate classification consistency on held-out learners. A finer label needs finer evidence; it cannot inherit validity automatically from a broad A2 label.

Until those criteria are met, report specific abilities and priorities within the broad supported band. “Handles routine requests; needs practice tracking changes in connected speech” is more useful than a fabricated “A2.63”.

## 13. Human validation programme and sample feasibility

**Phase A: cognitive and usability review.** Approximately 20–30 learners across age 16+, ability and device types explain how they interpreted tasks. Identify unintended shortcuts, confusing instructions, playback faults, literacy burden and fatigue. Their comments can retire items; this sample cannot validate a 600-item bank.

**Phase B: expert standard setting.** An assessment specialist and independent trained language assessors define the construct, review descriptors, judge boundary performances and design the linking study. Record their disagreement and rationale. Do not use the course teacher's intuition as an infallible reference.

**Phase C: balanced calibration.** Use assigned forms and anchor blocks as well as routing; obtain coverage for all intended levels, stimuli and important subskills. Record exposure, response, timing, omissions, assistance, conditions and dropout. Difficulty and distractor behavior must be estimated from learner evidence.

An illustrative planning calculation: 600 items × 200 responses per item = 120,000 item responses. At 120 usable responses per learner this is an idealized lower bound of 1,000 completed assessments. If only 80 responses per learner contribute to the needed new-item exposure, it becomes 1,500. Revisions, uneven ability distribution, missing responses, clusters and subgroup work increase recruitment. **Two hundred responses per item is a planning illustration, not a universal sufficient sample size.** A specialist must determine precision and identifiability for the chosen model.

**Phase D: independent evaluation.** Freeze the bank, cutoffs, model, stopping policy and primary metrics before an untouched hold-out cohort. Keep one person's repeat attempts in the same data partition. Use reasonably close-in-time, matched reading/listening comparators, and separate blinded productive-skill ratings. A speaking interview alone cannot validate reading or listening scores.

**Phase E: alternate forms and fairness.** Evaluate retest/alternate-form consistency, rater agreement before adjudication, device/mode effects, language-background effects and relevant age groups within 16+. Analyze stimulus clustering and investigate differential item functioning when samples permit. Missing data and unclassified cases remain visible in reports.

**Phase F: limited launch and monitoring.** Release only supported decisions, watch appeals and course-placement adjustments, and maintain a technical report. Revise drifted items and equate new forms; do not assume the first validation lasts forever.

For rare serious-error claims, the sample must match the claim. With zero observed events, the one-sided 95% upper bound is roughly 3/n: about 300 independent evaluated cases are needed even to bound a rate near 1% overall. Doing that separately at five bands can require roughly that many cases in each band, not 300 shared across all of them. Nonzero errors and clustered data change the calculation. This is why a small convenient pilot cannot prove very high precision at fifteen sublevels.

## 14. Proposed release criteria

These are ambitious **local acceptance targets for external review and preregistration**, not observed achievements or universal exam standards. Freeze the final criteria and analysis before evaluating the held-out set. Do not quietly weaken a gate after seeing results.

| Area | Proposed decision gate | Guard against misleading success |
| --- | --- | --- |
| Content | Every operational item has two completed independent reviews; zero unresolved key disputes | Track rejected items and independent stimulus coverage, not just item count |
| Human audio | All production files pass perceptual, task and device review; median naturalness/intelligibility at least 4/5 | Decode/loudness pass cannot substitute for listening approval |
| Random-response robustness | Upper 95% bound of any-domain false supported decision below 1% in prespecified independent-guess stress tests | Also test option bias, elimination and dependence; never call this student accuracy |
| Broad-band agreement | Aim for at least 85% exact matched-domain agreement, with a lower 95% bound at least 80% | Report each domain/band and reference uncertainty, not just a pooled percentage |
| Large over-placement | Aim for a one-sided 95% upper bound at most 1% for errors exceeding one CEFR band | Sufficient cases at the claimed boundaries; separately disclose under-placement |
| Decision coverage | Aim for a supported single broad band in at least 90% of eligible completed modules, reported separately for each skill | The denominator includes unresolved eligible attempts; adjacent/multiband pending results do not count as resolved. Separately publish completion/dropout and teacher-review outcomes |
| Parallel forms | Aim for at least 85% same-band decisions; examine disagreement direction near every cutoff | Separate memory/practice effects and use independent material |
| Human rating | Aim for weighted agreement coefficient at least .80, with uncertainty reported, before adjudication | Show exact disagreement and retrain where it matters; consensus does not erase disagreement |
| Learner understanding | At least 90% in the report-usability study can explain their main result and the evidence-supported next steps prescribed for them | Comprehension task, not just “did you like the report?”; no forced quota of weaknesses |
| Service usefulness | Prespecified interviews/ratings demonstrate actionable feedback and willingness to pay for the stated package | No purchase pressure, incentives tied to praise, or fake 50,000 ₸ valuation |
| Fine sublevels | Separate criteria and adequate boundary-specific evidence approved by an independent specialist | No equal-third cuts or broad-band results relabelled as precision |

If a target is missed, diagnose the cause: content, scoring, reference quality, form imbalance, fatigue or insufficient sample. Improve and re-evaluate on new held-out data. A lower rate of guessing success alone is not permission to launch.

## 15. The report and service need substance

Design approximately six substantive mobile sections or report pages, with an optional evidence appendix:

1. A clear skill profile and the decision the learner can act on.
2. Up to three strengths supported by particular performances.
3. Up to three priorities supported by recurring patterns across suitable tasks.
4. Annotated writing and speaking examples, with explanations of communication effects.
5. A four-week schedule matched to goals and available time, with observable self-checks.
6. Teacher-supported placement, rationale, any conditions and independent-learning alternatives.

Do not pad the report with generic praise, invented personality types, percentages without meaning or long question dumps. Use a separate practice example to teach a weakness without compromising active test items. Supply full explanations for retired/practice content where appropriate.

A learner should be able to answer: What can I already do? What is limiting me? Why was that conclusion reached? What should I practise next? Which course, if any, fits the evidence? How can I question or clarify the decision?

For operational budgeting, provisionally allow 20 minutes speaking, 15 writing review, 10 profile integration, 15 debrief and 5 administration: **65 teacher minutes** per learner, with a reserve for difficult cases. At 5,000 ₸ this is approximately 4,615 ₸ gross revenue per teacher hour before all other costs. This is arithmetic, not a researched local wage or a profitability claim. Measure actual effort before fixing booking capacity, turnaround and package scope.

Use software to assemble legitimate evidence and reduce administration. Do not make the economics work by substituting fabricated personalization for teacher attention. If the full service cannot be delivered sustainably at 5,000 ₸, revise scope/funding/pricing transparently before sale.

## 16. Website and result design

Keep the current visual direction only where it supports readability. The central visual becomes a skill profile with clear evidence, not a decorative broad-level range. Sample reports must be unmistakably illustrative and match the service actually deliverable.

Before the test: show who it is for, what is assessed, the expected commitment after timing trials, price, teacher component, delivery arrangements, sound requirements and a short sample task. Keep course information and WhatsApp easy to find without interrupting assessment.

During the test: clear sections, breaks between blocks, dependable save/recovery, a sound check, accessible controls, predictable replay policy, a visible route for technical problems and no sales prompts. Instructions switch fully between Russian and English while English-language stimuli remain in English.

After the online stage: show a skill-specific provisional record and the status of teacher tasks. After teacher review: issue the completed profile and recommendation. Place course options after the substantive findings. Treat standard six-month and intensive three-month programmes as approximate programme durations, not guaranteed CEFR gains.

The free short route can demonstrate the experience or suggest where to start. It must not recreate a twelve-question “precise level” funnel. A paid learner must know before checkout whether human tasks are necessary for the complete result.

## 17. Production engineering and payment

The next operational build needs a backend with private, versioned item delivery; trusted scoring; attempt ownership; idempotent submissions; durable progress; and auditable result revisions. Keep operational keys/transcripts out of public bundles. Do not present this as eliminating every form of cheating in unsupervised testing; define the intended stakes and use teacher interaction to examine mismatches.

Implement a reviewer interface for speaking/writing rubrics, evidence, initial blind ratings, second ratings and adjudication. Separate assessment evidence from course-sales activity. Record model, bank, audio, rubric and report versions so an issued result can be reproduced or corrected.

Kaspi remains the likely payment method; the actual merchant arrangement must be confirmed before implementation. A click on a payment link, a client-side flag or a receipt screenshot cannot by itself unlock paid entitlement. Use an agreed verifiable merchant process, clear payment/attempt linkage, duplicate-event handling and an auditable manual exception path where needed.

Test interrupted checkout, payment without an attempt, attempt without verified payment, duplicate callbacks, wrong amount, refunds, returning from a banking app, multiple devices, browser storage loss and support recovery. Confirm applicable hosting terms and choose the final paid host before replacing the public link.

Keep personal data minimal. Define recording consent, access, retention and deletion with the owner, including appropriate handling for 16–17-year-old learners. Do not send voice/writing samples to third-party systems without a disclosed purpose and appropriate authorization.

## 18. Execution packages and acceptance gates

| Package | Concrete deliverable | Acceptance before proceeding |
| --- | --- | --- |
| 0. Reset | This specification, defect register, reproducible scoring investigation, old-bank retirement list | Claims and metrics clearly separated; user requirements preserved |
| 1. Reviewed reference sample | 30 original benchmark items across all levels/domains, 10 human proof recordings, two writing/speaking assessment exemplars, one complete worked sample report | Independent item/key review, human audio approval, owner accepts the experience |
| 2. Assessment pilot | Versioned linked forms, teacher rubrics, administration protocol, data/consent plan | Expert construct and standard-setting review; technically sound delivery |
| 3. Bank development | Expanded draft pool, reviewed stimuli, approximately 600 retained candidates with exposure plan | Per-item evidence and content coverage; rejection/revision records |
| 4. Calibration | Balanced learner study, matched comparators, blind ratings, item/model analysis | Stable candidate decisions and enough data for the intended claims |
| 5. Held-out evaluation | Frozen forms/scorer and preregistered evaluation report | Agreed validity, error, coverage, fairness and consistency gates met |
| 6. Service rehearsal | Complete reports, speaking/writing workflow, measured staff time, payment sandbox, recovery and appeals drills | A learner receives the full advertised value and support end to end |
| 7. Limited paid launch | Narrowly supported claims, capacity-limited booking and monitored release | Independent sign-off, operational readiness and a rollback/correction procedure |
| 8. Finer placement | Research on within-level distinctions and alternate forms | Separate evidence for every added decision boundary |

Do not produce hundreds of items and recordings before approving Package 1: that would multiply the present quality problem. Do not compress Packages 4–5 into another software-test run. The full bank target remains substantial; the sequence protects its quality.

## 19. Who does what

Codex can prepare the blueprint, original draft tasks, manifests, reviewer forms, scoring experiments, software, test harnesses, data exports, analysis code and report assembly. It can support literature review and identify problems. These outputs remain reviewable work, not a substitute for independent professional judgment.

The teacher/owner defines course prerequisites, reviews the learner experience, supplies or coordinates speaking/writing assessment and approves the actual service scope. Independent language-assessment reviewers must examine tasks, rubrics and standards. A measurement specialist should supervise calibration, linking, uncertainty and release criteria. Performers and an audio producer supply authentic recordings. Consenting learners provide the response and usability evidence that code cannot manufacture.

No spending, recruitment message, performer contract or external appointment is authorized merely by writing this plan. Prepare the concrete briefs and costs first. Execution can continue on drafting, software and research while those human contributions are arranged.

## 20. Immediate next work

The next substantive build package is the 30-item benchmark set, 10-recording human production brief, teacher rubric pack and one fully worked report. Before scaling, a reviewer should be able to explain what each task measures and a learner should recognize their actual performance in the report.

The [initial quality pack](assessment-v2-quality-pack.md) supplies illustrative tasks and production/review templates for that work. Its sample level targets are authoring hypotheses; it is not an approved scored form or a substitute for the 30-item benchmark milestone.

The present research rerun is recorded separately with exact assumptions and results. It is useful for rejecting weak scoring ideas. It does not turn artificial response data into proof of reliable English placement.

The finished service should make a specific, defensible decision and leave the learner with useful evidence and a practical plan. Its quality will be earned through content, natural speech, human assessment and validation—not declared because it has a premium design or a larger question counter.
