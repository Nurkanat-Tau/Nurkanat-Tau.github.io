# Preview verification — 21 October 2026

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
