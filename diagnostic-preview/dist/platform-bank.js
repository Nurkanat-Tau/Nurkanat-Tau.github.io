import {languageItems,languageStimuli} from './large-language-bank.js';
import {readingItems,readingStimuli} from './large-reading-bank.js';
import {listeningItems,listeningStimuli} from './large-listening-bank.js';
export const BANK_VERSION='pilot-bank-600-v1';
export const bankItems=[...languageItems,...readingItems,...listeningItems];
export const bankStimuli=[...languageStimuli,...readingStimuli,...listeningStimuli];
export const bankStatus={purpose:'Practice, formative feedback and consented piloting',validatedForCEFRPlacement:false,validatedForSublevels:false,learnerCalibrationCount:0,paidDiagnosisEnabled:false};
