import {items as originalItems, stimuli as originalStimuli} from './benchmark-content.js';
import {listeningItems, listeningStimuli} from './cambridge-listening.js';

// This open practice sample has no calibrated score-to-level conversion.
export const BENCHMARK_VERSION = 'cambridge-sample-1';
export const items = [...originalItems.filter(item => item.domain !== 'listening'), ...listeningItems.map(item => ({...item, audioReady: true}))];
export const stimuli = [...originalStimuli.filter(stimulus => stimulus.domain !== 'listening'), ...listeningStimuli];
export const recordingStimuli = originalStimuli.filter(stimulus => stimulus.domain === 'listening');
