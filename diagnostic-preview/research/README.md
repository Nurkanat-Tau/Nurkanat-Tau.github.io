# Scoring research: larger reproduction and controlled alternatives

**21 October 2026. Research sandbox only. This study does not change the assessment code in `dist/` or the deployed site. Its documentation, scripts, snapshots and results are retained separately for review in the existing draft pull request.**

The current scorer's chance-support problem reproduced. A longer controlled design and chance-aware rule improved an independent-guessing simulation, but the candidate failed a dependence stress test and still confused emerging ability with nominal mastery. A conservative block alternative lost too much coverage. **None of these results justifies a production accuracy claim or demonstrates CEFR validity.**

## Reproduce

From the project root, with Node.js 20 or later:

```text
node research/run-simulations.mjs
```

The complete initial run took approximately 93 seconds on this computer. It performs 10,000 completed attempts through the frozen actual engine and 54,000 synthetic candidate attempts, each scored by three policies on the same responses. Subsequent candidate-only reruns take approximately 10 seconds:

```text
node research/run-simulations.mjs --reuse-current
node research/check-reproducibility.mjs
```

The cache contains the actually completed 10,000-run baseline and is accepted only when its source hashes match the frozen engine/bank. The first 1,000 baseline attempts reproduce the earlier 204/1,000 result exactly. Repeated deterministic runs are not additional independent samples.

- `results.json`: deterministic complete output, including every domain's coverage, abstention, nominal adjacent/severe errors, and marginal Wilson 95% intervals.
- `current-engine-cache.json`: the completed baseline experiment and source hashes.
- `snapshots/engine-v2.mjs`, `snapshots/bank-v0.2.mjs`: frozen current scorer/content. Snapshot hashes are recorded in the output.
- `run-simulations.mjs`: complete methods, assumptions, random generators, model probabilities, and experiment implementation.

## Current 30-item engine: 10,000 random attempts

The null response process selects uniformly among actual options independently. The metric is **whether at least one domain receives a non-null provisional level at the completed endpoint**. It is not an overall test pass rate and is not a real learner misclassification rate.

| Metric | Count / 10,000 | Estimate | Wilson 95% interval |
| --- | ---: | ---: | ---: |
| Any domain supported | 2,147 | 21.47% | 20.68–22.29% |
| Language supported | 188 | 1.88% | 1.63–2.17% |
| Reading supported | 1,041 | 10.41% | 9.83–11.02% |
| Listening supported | 1,058 | 10.58% | 9.99–11.20% |
| All three domains supported | 0 | 0% observed | 0–0.038% |

There were isolated B2 indications: one language, one reading, and seven listening cases. No C1 indication occurred. Zero observed C1 cases is not proof of zero risk. Domain differences here reflect the route, bank capacity, sample sizes, and reporting rule; they do not establish that one skill is measured more validly than another.

Each interval uses participants as independent simulation units. Per-domain and any-domain intervals are calculated separately; three correlated domains are not pooled as 30,000 independent participants. These are marginal intervals, not simultaneous confidence statements. [NIST explanation and formula for Wilson intervals](https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm).

## Multiple looks, route dependence, and stopping audit

The current rule checks several intended levels, whose exposure counts are selected by earlier answers, and chooses the highest eligible level. Its three-correct/75% threshold is an editorial rule rather than a controlled hypothesis test. Chance success can change the route and create later opportunities to support a level. A simple fixed-sample probability calculated for one three-question block does not represent this procedure.

The reproduction evaluates only the completed 30-item endpoint. It does not exploit intermediate reports, stop after a lucky result, or allow retakes. Those additional opportunities would need separate analysis. Merely having a fixed total test length does not remove selection across levels. The engine can return partial reports, so any future UI exposing them must not assume the completed-endpoint result covers interim decisions.

The sandbox also identified a subtler selection issue: an intended level may finish with either six core observations or sixteen core-plus-confirmation observations. Both are possible data-selected looks. The final correction counts **5 levels × 3 domains × 2 endpoints = 30** potential tests. An earlier 15-cell correction was rejected during the audit; the final results use 30. Finite simultaneous-error reasoning uses a union bound; it does not require the level tests themselves to be independent, but each underlying probability bound must be valid. [NIST Bonferroni inequality discussion](https://www.itl.nist.gov/div898/handbook/prc/section4/prc473.htm).

## Controlled 120-response comparison

**This is a research comparator, not an implemented assessment or the proposed production route.** It uses 40 responses per domain: six core items at each of five intended levels, followed by ten new confirmation items at the highest core level with at least four correct answers, defaulting to A1 if none qualifies. Every policy sees identical delivered items and the same final endpoint.

The separate production proposal of **8 routing + 16 target + 16 fresh-confirmation items per domain has not been simulated here**. It must be specified and evaluated independently; these results cannot be transferred to it.

Synthetic items are original mathematical placeholders with intended difficulty cells and stimulus-group identities. There are no calibrated item parameters or actual language questions in the candidate bank. Each potential level has six core and ten confirmation responses generated in advance; only the selected confirmation block is delivered. This exposes selection explicitly and avoids generating a favorable confirmation result after seeing core performance.

Policies, specified without outcome-driven threshold tuning:

1. **Editorial endpoint:** the current minimum-three/three-correct/75% rule, applied to the longer design's completed per-level evidence.
2. **Independent binomial:** the same gate plus an exact upper-tail test against success probability 0.25, with threshold 0.01/30.
3. **Block conservative:** the same raw-response gate, but each independent stimulus contributes one success only when all its items are correct. Its chance-success probability is bounded above by 0.25 even with arbitrary within-stimulus dependence. Independence between stimuli is still necessary.

There are 10,000 attempts per null scenario. Reading/listening items occur in pairs or four-item stimulus groups. With probability rho a group shares a single Bernoulli outcome; otherwise its items are independent. This preserves marginal success probability and gives within-group correlation rho. Different stimuli are independent; language items remain independent. Dependent-null scenarios are deliberately misspecified stress tests for the ordinary binomial rule, **not independent random option guessing**.

| Null scenario | Editorial, any-domain | Independent binomial, any-domain | Block conservative, any-domain |
| --- | ---: | ---: | ---: |
| Independent responses, paired stimuli | 0.59% [0.46–0.76] | 0.07% [0.034–0.144] | 0% [0–0.038] |
| Paired stimuli, rho 0.30 | 1.68% [1.45–1.95] | 0.41% [0.30–0.56] | 0.01% [0.002–0.057] |
| Four-item stimuli, rho 0.60 | 18.61% [17.86–19.39] | 12.23% [11.60–12.89] | 0.02% [0.005–0.073] |

The longer confirmation design itself changes the result substantially; improvement must not be attributed entirely to the chance gate. More questions/looks are not automatically safer or more dangerous: the selection, confirmation, and endpoint all matter. The independent-binomial candidate's nominal protection fails when its item-independence premise fails.

## Coverage and boundary failures

Eight learner profiles, each with 1,000 attempts in each dependence condition, include secure A1–C1 patterns, uneven skill boundaries, an emerging B1 pattern, and high ability with 15% lapses. Probabilities and nominal target boundaries are explicitly listed in `results.json`. These targets are model assumptions, not observed ground truth or CEFR standard setting.

Selected independent-response reading results:

| Profile / policy | Receives a level | Exact nominal target, all attempts | One band too high |
| --- | ---: | ---: | ---: |
| Secure A2 / editorial | 99.9% | 96.4% | 0.2% |
| Secure A2 / binomial | 98.1% | 90.9% | 0.1% |
| Secure A2 / block conservative | 16.0% | 15.1% | 0% |
| Emerging B1, nominal A2 / editorial | 99.8% | 52.1% | 43.5% |
| Emerging B1, nominal A2 / binomial | 95.7% | 44.1% | 35.5% |
| Emerging B1, nominal A2 / block conservative | 4.8% | 4.5% | 0.1% |

The emerging profile succeeds on B1-intended items with probability 0.70. Rejecting a 0.25 chance hypothesis does not establish mastery: the binomial candidate still assigns B1 on 35.5% of these nominally A2 reading attempts. Its lower exact-target proportion also reflects under-placement and abstention, all retained in the output rather than hidden by conditioning on classified learners.

For the secure C1 profile, the binomial candidate has 100% reading coverage and 96.1% exact nominal placement under independent responses. The conservative block candidate has only 20.1% coverage. With four-item groups, the conservative candidate **cannot support any reading/listening level at all**, because the confirmed level supplies only five independent blocks, insufficient for its corrected threshold even when every block is correct. Its low null rate is therefore not a useful success. With 15% lapses, even paired-stimulus conservative reading coverage falls to 8.2%.

The output includes every domain/scenario, conditional and unconditional agreement, one-band errors, errors of two or more bands, abstention, and their marginal intervals. No policy has been selected by optimizing a single favorable metric.

## Implications for the next plan

- **Separate hypotheses:** evidence against independent guessing, evidence of adequate performance on a particular sample, and evidence of CEFR mastery are different claims. The first cannot establish the third.
- Freeze a production blueprint and simulate that exact selection/stopping/reporting algorithm. Require truly fresh confirmation, define independent stimulus units, account for every possible look, and examine retakes separately.
- Choose adequate numbers of independent passages/audio clips, not only a large item total. Measure real local dependence during piloting; a cluster model may be needed.
- Set joint release criteria for serious over-placement, under-placement, unresolved results, learner coverage, subgroup behavior, and response burden. A rule that rarely guesses but usually abstains is not an acceptable solution.
- Use independent standard setting and blinded matched-skill comparators to connect performance to CEFR. Predeclare analysis, retain a held-out learner sample, and report uncertainty and unresolved boundaries. Speaking/writing require their own evidence.
- Keep the current experience a pilot. Do not replace its scoring with any sandbox policy on the strength of these simulations alone. Do not market a synthetic rate below 1% as accuracy, precision, or a commercial guarantee.

No live learner calibration, blinded criterion study, CEFR-linking study, or production acceptance gate was completed by this research.
