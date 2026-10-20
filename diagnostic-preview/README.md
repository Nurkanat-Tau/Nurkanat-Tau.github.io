# Nurkanat English diagnostic — private working preview

Russian-first, fully switchable English interface for a course-placement diagnostic. This is a free prototype with original draft questions, not a validated CEFR examination or a live payment product.

## Run and verify

Requires Node.js 20 or later; the static app has no package dependencies.

```text
npm start
npm run check
npm test
```

The preview serves `dist/` at `http://127.0.0.1:4173`. Any ordinary static host can serve that folder. `scripts/browser-check.mjs` and `scripts/browser-resilience.mjs` use the authoring computer's bundled Playwright and installed Edge; update those local paths on another computer. They do not run against a live student site.

## Implemented

- Russian and English interface, including explanations and practice guidance; assessment stimuli remain in English.
- Separate 12-item quick and 30-item full routes, using an 80-item draft bank.
- Independent difficulty routing for language use, reading and listening.
- 20 local synthetic listening recordings; sound check and audio failure handling.
- Save/resume on the same device, changed-version rejection, cross-tab conflict protection, and local data deletion.
- Provisional domain evidence, explicit unresolved upper boundaries, and no automatic A1 award for all-wrong responses.
- Answer review with explanations, listening transcripts, a seven-day starter plan, text download and browser print/PDF.
- Teacher speaking/writing follow-up and standard/intensive course enquiries through user-initiated WhatsApp links.

## What is deliberately not claimed

The engine has not been calibrated with learners. Author-assigned question levels are hypotheses. Beginning/middle/upper subdivisions are not supported. There is no measured real-world accuracy or equivalence to Gallup, IELTS, or an official CEFR exam. See [validation status](docs/validation-status.md) for tested behaviors, synthetic simulation limitations, and the human study required next.

All offers are clearly marked planned; the site accepts no payments. The proposed 5,000 KZT option includes teacher work. No appointment, turnaround promise, or merchant integration is invented. WhatsApp contact was retained from the existing teacher site.

## Architecture and production boundary

`dist/app.js` controls the interface; `engine.js` owns pure routing/scoring; `bank.js` holds draft items and feedback; `feedback.js` constructs response-linked practice and review. Responses remain in local browser storage and are not sent to the teacher automatically.

This static prototype delivers answer keys to the browser. Before a secure paid launch, implement a backend for versioned item delivery, scoring, attempt ownership, verified payment entitlements, receipts/refunds/support, and data retention. A click on a payment link or a screenshot must never automatically mark an invoice paid.

Keep live `test.html` unchanged while reviewing this prototype. The canonical GitHub copy can be reviewed as a draft change in a separate folder; the private Sites deployment serves as the working design preview. Follow the hosting provider's current commercial-use terms when choosing the final paid host.

## Content and audio maintenance

Questions are original draft content. Every scored item needs independent language-assessment review and empirical trialling. See [content audit](docs/content-audit.md). Synthetic recordings are previews; natural, independently reviewed recordings and appropriate voice variety are part of the next content stage.

To regenerate the original WAV assets on Windows with Microsoft Zira Desktop installed:

```text
node scripts/audio-manifest.mjs
powershell -File scripts/generate-audio.ps1
```

Keep the versioned bank, audio files, explanations, and scoring configuration synchronized. Repeated attempts after reading answer explanations are not independent measurements.
