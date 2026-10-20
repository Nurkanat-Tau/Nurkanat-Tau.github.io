# Verification — 600-question pilot platform

## Current release scope

The active bank is `pilot-bank-600-v1`: **600 questions, 48 reading passages, 32 listening clips from 16 underlying source conversations/talks, and eight focused 120-question forms**. This section supersedes the historical 80-item prototype record below.

All 600 questions received author and separate-agent editorial review. Review records explicitly identify this as AI editorial review, not human examiner approval or psychometric validation:

- `large-language-author-review.md` and `large-language-independent-review.md`: all 240 language contexts/items and 720 distractor explanations; ambiguous collocations, an unsupported inference, unclear roles/deadlines, and answer-length cues corrected.
- `large-reading-bank-review.md` and `large-reading-independent-review.md`: all 48 passages, 240 questions, and English/Russian feedback; unsupported details, qualification errors, weak alternatives and stale explanations corrected.
- `large-listening-bank-review.md` and `large-listening-independent-review.md`: all 120 questions checked against the supplied transcripts, including all 360 English/Russian distractor rationales; prompt ambiguity, nonparallel choices, near-duplicate alternatives and two translation issues corrected.
- `platform-independent-review.md`: independent engineering review, including reproduced and corrected report/state defects.

## Completed software and media verification

The final frozen release suite passed all 15 commands on 21 October 2026 (Asia/Qyzylorda) and confirmed byte-identical deployment files before and after the run. The detailed local record is `artifacts/platform/release-qa.json`; it contains command outputs and SHA-256 hashes of every deployed file. Artifacts contain QA fixtures and stay out of the public source snapshot.

| Check | Result and scope |
| --- | --- |
| Active unit tests | 38 passed: scoring counts, unknown/technical distinctions, whole-block commits, immutable first responses, stale/tampered-state rejection, form construction, report invariants and recording provenance. |
| Real bank structure | Exactly 240 language / 240 reading / 120 listening; 600 unique items; bilingual feedback; four distinct alternatives; valid evidence links; exact source/runtime mirrors. All 600 are reachable across eight complete 120-question forms, with 40 responses per online domain. |
| Expanded browser journey | 41 checks passed, including the complete 120-answer flow, save/reload/language switching, actual-response report, JSON/HTML exports, writing drafts, teacher/pilot imports, all-unknown outcomes, and failed audio exclusion. |
| Import/storage resilience | Six checks passed: malformed/stale imports, escaped user text, evidence-required teacher drafts, corrupt storage recovery and persistent storage-quota warnings. |
| Multiple tabs | Seven browser checks passed after reproducing and correcting silent answer loss in two real tabs. Checks cover stale-input blocking, simultaneous writes, missed storage events, old-attempt replacement, writing recovery after reload, bilingual controls and safe fallback when Web Locks are unavailable. |
| Retained 30-question sample | 33 browser checks passed, including both language versions, the complete sample, four audio sources and existing fictional PDF/HTML reports. |
| Audio integrity | All 32 clips preserve exact compressed source packets; source/output hashes, cut positions, durations, decode measurements and all 120 evidence ranges checked. No synthesis, re-encoding or speed change. |
| Audio in browser | All 32 recordings fully decoded, natively played and sought in Edge. Ten retained sample evidence links also seek successfully; simultaneous playback is prevented. HTTP partial-content and invalid-range handling checked. |
| Recording workspace | 11 mocked lifecycle checks passed, including denied/disconnected microphones, cleanup and take export. This does not test an actual microphone or a human performance. |
| Responsive/localization | New routes checked at 320, 390, 768 and 1440 pixels; no horizontal overflow. English interface checks found no unintended Cyrillic. Representative desktop/mobile screenshots inspected. |
| Reports | Both personal-summary PDF language versions rendered and visually inspected; full answer evidence remains in the online/HTML report. The separate fictional full report remains labelled as an example. |

Synthetic responses used in software tests are not learners, pilot observations, accuracy estimates or evidence of validity. Browser checks used installed desktop Edge with resized viewports; physical iOS/Android devices, Safari, screen readers and real microphone hardware have not been verified.

## Defects corrected in this expansion

- Predictable new listening answer-position cycles were replaced with stable shuffled positions and correctly remapped distractor explanations.
- Verbose keyed answers or distractors created shortcut cues; targeted editorial revisions improved parallel phrasing. Remaining fixed-bank shortcut diagnostics are disclosed in the content reviews, not presented as learner accuracy.
- Two excerpts from one conversation now count as one source family for descriptive evidence diversity and exploratory cluster consistency.
- Secondary metadata tags no longer duplicate or displace primary diagnostic findings.
- A pattern cannot appear simultaneously as a strength and a top practice weakness.
- Incomplete first-response blocks, incompatible form IDs, invalid dates, and contradictory completion states are rejected. Legitimate later edits preserve first committed responses.
- Technical audio failures cannot become incorrect responses or be bypassed by selecting unheard answers.
- Evidence playback explicitly pauses other players before seeking and playing.
- A full browser storage quota produces a persistent backup warning while allowing in-tab work.
- Cross-tab writes are serialized and compared against the last known saved version. A stale tab pauses edits and offers its own recovery export plus an explicit load-latest action; it never silently merges or replaces newer work. Pending writes and unavailable saving trigger an exit warning.
- Each practice week now has a distinct activity: explain the cause, practise deliberately, produce original language, and check transfer to unfamiliar tasks.

## What remains unestablished

There are **zero real learner calibration records**. No CEFR classification, beginning/middle/end sublevel, reliability estimate, diagnostic accuracy percentage or Gallup-equivalence claim is supported. Language/reading level labels are author hypotheses; IELTS source audio has no assigned CEFR target and does not demonstrate balanced beginner coverage. Human perceptual audio review, human language-assessment review, empirical calibration, standard setting, independent held-out evaluation and teacher-rater studies remain necessary.

The platform is a privately served, open-answer practice/pilot implementation. Public/paid Cambridge redistribution permission is not established. It has no authenticated commercial exam backend, payment entitlement, learner identity verification or secure item delivery. See `validation-status.md` for the staged evidence and operational requirements.

## Historical prototype verification — superseded

The record below concerns the earlier 80-item engine. Its level thresholds and simulations are not used in the active platform.

Scope: content bank `preview-0.2.0-draft`, engine 2, local static preview. These results establish software behavior and editorial corrections, not measured learner accuracy.

## Completed checks

- All 80 original questions reviewed for answer ambiguity, distractors, construct coverage, and repeated arguments. Nine items revised; all 80 have Russian and English explanations. Details and remaining issues are in `content-audit.md`.
- 16 engine tests passed. These include 160 seeded real-bank routes, lower-floor and upper-boundary cases, equal raw totals at different difficulty, tampered-state rejection, and 1,750 synthetic guessing/mastery runs.
- A separate bank/build check passed 150 complete routes, schema checks, saved-attempt replay, and required page/media asset checks.
- Both full browser journeys passed in installed Chromium-based Edge: 12-item quick route and 30-item full route with successful listening playback, Russian/English switching, language changes preserving the chosen answer, pause/reload/resume, results, text download and data deletion.
- Responsive layout checks passed at 360, 390, 430, 768 and 1440 pixels. Desktop and mobile screenshots were visually reviewed. This does not substitute for testing physical iOS/Android devices and in-app browsers.
- Five resilience groups passed: stale tabs cannot overwrite newer answers; storage quota failure preserves in-memory progress and warns; failed listening audio cannot score an unheard response; eight invalid/tampered saved-state cases recover safely; every attempted item has English feedback and the download contains all explanations plus seven practice days.

## Defects found and fixed during verification

- An ambiguous A2 item allowed both “borrow” and “keep”. The distractor was replaced.
- Several C1 distractors could be eliminated without understanding the intended meaning. Targeted items were rewritten and repeated upper-level listening arguments replaced with new stimuli.
- One upper-level success could establish a domain label. The engine now requires a minimum set of consistent observations and exposes unresolved upper boundaries.
- The audio `play` event could fire before media actually played. Submission now waits for successful playback progress; a media error revokes the listening gate.
- A stale tab could overwrite another attempt. A conflict now blocks writes and submission until reload, including after changing language.
- Tablet/mobile decorative overflow and result-list number collisions were fixed.

## Remaining boundaries

Read `validation-status.md` before interpreting the labels. In a synthetic 1,000-attempt uniform-guessing run, 20.4% received some domain support; none received B2/C1 support in that finite run. Short routes lack sufficient C1 reading/listening observations, and a one-answer change can cross the current editorial threshold. These are reasons to gather real validation evidence, not figures to market as accuracy.

The preview has no server-side scoring, secure paid entitlements, learner database, teacher booking system, natural recorded voices, or empirically validated sublevels. It is private and free. The original public `test.html` is outside this deployment.

The next assessment gate is independent content review and a supervised learner pilot with matching-skill comparators, followed by held-out evaluation. The next engineering gate is production payment/attempt infrastructure and real-device/accessibility testing.
