# Ten human listening recordings: owner production pack

**Status: awaiting real performances and review.** The owner has chosen to record the material personally. This pack prepares that work; it does not claim that ten suitable recordings already exist. Five monologues can be recorded by the owner alone. Five dialogues require a second consenting adult speaker performing the conversation with the owner. There is no TTS, voice cloning, generated voice, or synthetic fallback in this production route.

The ten original scripts and linked sample questions are authored in `benchmark-content.mjs`. Their A1–C1 labels are authoring targets for a private review sample, not calibrated difficulty or demonstrated CEFR accuracy. The sample contains one conversation and one monologue at each intended level. Each recording currently supports one sample question; it does not provide an independent estimate of listening ability.

## What is available now

The project’s legacy 20 WAV files are explicitly documented as Microsoft Zira synthetic speech in `audio-provenance.json`. They cannot satisfy the human-recording requirement. The adjacent original site contains `intro.mp4` and `about.mp4` promotional files, with duplicate copies under `assets/`; their presence does not establish English assessment content, speaker rights, or alignment with these original scripts. They have not been repurposed.

Two primary-source collections were checked as possible alternatives. [OpenSLR LibriSpeech](https://www.openslr.org/12) provides human read English from audiobooks under CC BY 4.0. That provenance does not make audiobook excerpts suitable substitutes for these original practical conversations and announcements. [LibriVox’s rights page](https://librivox.org/pages/public-domain/) describes its recordings as public domain in the United States and explicitly cautions that their status may differ elsewhere. Neither source supplies this approved ten-script set. No files were downloaded or relabelled as original assessment recordings.

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) permits reuse and adaptation, including commercially, subject to attribution and other conditions; it also warns that additional rights can matter. A collection-level license is therefore not evidence of task suitability or clearance of every use. The practical choice here is the owner’s new recordings with documented participant permission.

## Recording inventory

`P01` and `P02` below are private production references, not named or contracted performers. P01 means the owner; P02 means the second adult chosen by the owner. Do not invent a nationality, accent, identity, consent, or attendance record. Each speaker uses their own natural accent. A small two-person proof set does not establish the accent and speaker diversity planned for the eventual bank.

| Intended target | Conversation clip | Monologue clip | Performers |
|---|---|---|---|
| A1 | `human-a1-conversation-01` | `human-a1-monologue-01` | Conversation P01 + P02; monologue P01 |
| A2 | `human-a2-conversation-01` | `human-a2-monologue-01` | Conversation P01 + P02; monologue P01 |
| B1 | `human-b1-conversation-01` | `human-b1-monologue-01` | Conversation P01 + P02; monologue P01 |
| B2 | `human-b2-conversation-01` | `human-b2-monologue-01` | Conversation P01 + P02; monologue P01 |
| C1 | `human-c1-conversation-01` | `human-c1-monologue-01` | Conversation P01 + P02; monologue P01 |

Use the exact current script and its performance directions. Match its `scriptVersion` and script hash in the manifest. A later wording change requires explicit review and a new recording version. Do not silently reuse a recording from an older script. The linked item IDs are `bench-{level}-listening-dialogue` and `bench-{level}-listening-monologue`.

## A practical session with the owner

1. **Review before recording.** Read all ten scripts once. A second reviewer checks meaning, naturalness, speaker turns, answer uniqueness, and whether the intended answer can be heard without consulting the transcript. Revise awkward phrasing before capturing final takes. Intended difficulty remains a hypothesis.
2. **Confirm participants and permission.** P01 records the five monologues. P01 and P02 perform the five dialogues together, taking real turns and responding to each other. One performer imitating two people is a single-person dramatization; it does not meet the genuine-dialogue requirement. There is no need to hire anyone to use this workspace.
3. **Prepare a quiet room.** Switch off notifications and noisy appliances. Use a stable microphone position, a pop filter if available, and comfortable recording gain. Make a short spoken test and listen on headphones and a phone speaker before the full session. Avoid music, room echo, intrusive noise, and clothing or table contact.
4. **Record the five monologues.** Speak to the imagined listener and preserve natural phrasing. Record two complete takes of each script, with a few seconds of room tone separately. Start a fresh take after a major error rather than silently altering the words. Save the original capture even when an edit is later made.
5. **Record the five conversations with P02.** Both speakers should hear each other. Use a shared room or a live call with separate local tracks if feasible. Do not create apparent interaction by stitching unrelated isolated lines. Record two full takes, then any clearly labelled pickups. Leave timing and response cues natural.
6. **Download immediately.** In the private recording workspace, download each useful take and the pending manifest, then verify the saved file actually opens. Browser recordings are rehearsal/review captures; use a dedicated recorder for higher-quality masters where available. Keep a second copy outside the tab.
7. **Review and retake.** Give two reviewers the audio without the transcript or keys first. They record what they heard and answer the linked item. Reveal the transcript only afterward to check fidelity. Resolve ambiguities, clipped words, mispronunciations, answer-cue emphasis, or unnatural delivery through a retake or item revision.
8. **Approve outside the capture tool.** Record human origin, rights, script fidelity, technical checks, and listening review in the manifest. Another reviewer checks the evidence before any runtime asset is admitted. A downloaded or imported take never becomes approved merely because the browser can play it.

At A1/A2, use naturally clear speech and uncomplicated delivery. Do not insert artificial pauses between every word. At B1–C1, use appropriate connected speech and discourse cues; speed alone must not create difficulty. Avoid exaggerating the word that identifies the correct option. The duration ranges in the scripts are production targets, not cut scores or universal exam rules. Retain a natural correct take if a small timing difference is harmless, and document the decision.

## Private rights and provenance record

Before publication, keep a dated participant permission record that identifies the real performer privately and records their agreement to the intended educational use. Agree on the relevant channels, editing/mastering, duration, territories, attribution, any payment or voluntary arrangement, and any withdrawal/retake expectations. Separate permission is needed for uses not actually agreed, such as promotional endorsements. Voice cloning or model-training permission must never be inferred from permission to record an educational script.

Store names, contacts, signed releases, payment details, and raw identity evidence in a private controlled folder, not in the public GitHub repository. The public-facing manifest should contain only an opaque performer reference and rights-evidence ID. The record is production evidence, not a claim that this document is a jurisdiction-specific legal release.

Human-origin evidence should include who attended the live session, which script version was read, which roles each person performed, the original take filename, and who verified the performance. A microphone recording by itself cannot prove human origin: a microphone could capture replayed synthetic audio. The user’s acknowledgement in the workspace is a self-report, not independent verification.

## File delivery and editing

Preserve original takes. Preferred archival masters are WAV PCM at 48 kHz/24 bit, mono for a single voice or separate dialogue tracks plus a mixed master. If the available recorder produces another format, retain the actual source honestly; converting a compressed take to WAV does not recreate lost quality. Browser `MediaRecorder` chooses a supported local format such as WebM/Opus or MP4/AAC and does not promise studio specifications.

Use filenames such as `human-a2-conversation-01_script-v1_take-02_P01-P02.wav`. Keep the source version, take number, participant references, and edit version distinct. The workspace-generated filename includes the clip ID and a unique take ID; its manifest carries source and script information. Never put participant contact details in filenames.

Editing may remove leading/trailing handling noise, choose between complete takes, and balance voices without changing meaning or adding answer cues. Do not digitally slow a voice, synthesize a missing word, clone a speaker, or conceal an unapproved change. If essential content is missing, rerecord it. Keep an edit log when pickups or cuts are used.

For eventual web delivery, select a browser-compatible compressed copy after the master is approved. A practical provisional target is approximately −18 LUFS integrated, within 1 LU, and true peak no higher than −1 dBTP. These are this project’s production targets, not a CEFR or IELTS requirement. Short clips still need human loudness matching; meter readings alone are not acceptance. Keep clipping, abrupt cuts, disruptive noise, and large speaker-volume differences out of the final set.

Compute SHA-256 for the approved script and each final audio asset, record the real duration/codec/sample rate/channel count, and keep immutable versioned files. `human-audio-manifest.template.json` starts with null runtime assets and all approvals false. Its fields are evidence slots, not a way to self-certify the test.

## Acceptance and release gate

| Check | Required evidence | Current state |
|---|---|---|
| Actual adult human performance | Identified private participants, session record, retained raw take; two real speakers for each dialogue | Pending |
| Permission for intended use | Dated private rights record for each performer; opaque references only in repository | Pending |
| Exact approved script | Version/hash and full fidelity check; no unreviewed word substitutions | Pending |
| Understandable and natural | Two independent nonauthor listeners; each rates intelligibility and naturalness at least 4/5; disagreements resolved | Pending |
| Item remains defensible | Reviewers can hear the intended evidence; unique key and plausible alternatives survive audio review | Pending |
| Technical integrity | Real file decode, actual duration, loudness/peak review, no clipping/clicks/cut words; hash matches served bytes | Pending |
| Device playback | Actual iOS/Safari and Android/Chrome checks on speaker/headphones; failure is never marked as a wrong answer | Pending |
| Assessment use | Explicit reviewer decision and asset version admitted by application logic, independently of capture/import | Pending |

The 4/5 listening thresholds and other acceptance targets are internal production gates. Passing them does not demonstrate CEFR classification validity, fairness, reliability, or commercial readiness. Those questions belong to the separate assessment validation plan and blinded learner pilot.

Until these checks pass, listening remains **awaiting human recordings**. Showing the English script is useful for production review but assesses reading if used by a candidate; it must not be substituted for listening or included in a listening score. Imported and microphone takes in the workspace never unlock a scored task.

## Workspace behaviour and limits

`dist/recording-room.js` captures only after an explicit **Record microphone** click and a participant-consent acknowledgement. The browser then asks for its own microphone permission. **Stop**, leaving the mounted recording view, or the five-minute limit releases the microphone. A denied permission, missing/busy device, unsupported browser, or capture error produces an explanation and keeps listening locked.

Local imports and recordings are held in tab memory only, limited to 50 MB per take, five takes per clip, and 128 MB per session. Navigation inside the current app can retain this memory; refreshing or closing the page loses it. The page requests an unload warning for undownloaded takes, but browsers can limit these prompts. A download request cannot prove the file was saved, so the user must check the downloaded copy. Removing a take from the session does not delete a downloaded file.

Players receive temporary local Blob URLs that are revoked on cleanup. Imported files are screened for size/type and auditioned locally; a filename or successful decode does not establish safety of the script, human origin, rights, or intelligibility. There is no upload endpoint, performer messaging, hiring, payment, TTS, or automatic assessment approval in this module.

For the eventual full bank, return to the wider voice-diversity and stimulus-cluster design in `assessment-rebuild-plan-v2.md`. The owner-plus-partner proof set is a practical start for reviewing content and recording quality, not a substitute for that production and validation work.

## Software verification, separate from audio acceptance

`node --test tests/recording-room.test.mjs` checks file screening, safe script identifiers, exact source/linkage preservation, pending-only exports, stale-script provenance, and all ten manifest script hashes/null asset slots. Seven tests passed at this checkpoint.

`node scripts/recording-room-check.mjs` checks the workspace in headless Edge using mocked media devices and deliberately invalid mock audio. It covers consent before permission, denied/missing devices, capture/stop, language remount retention, decode-error display, cleanup during capture, late permission after cleanup, local downloads/import/deletion, and uncaught page errors. It passed. No microphone was actually recorded and no human speech was manufactured for this check. Real hardware, mobile playback, performer rights, naturalness, and the listening tasks remain subject to the acceptance gate above.
