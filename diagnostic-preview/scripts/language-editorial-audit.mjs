// Fixed-bank editorial diagnostics. These are not learner accuracy estimates.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { languageItems, languageStimuli } from '../docs/large-language-bank.mjs';
const source = await readFile(new URL('../docs/large-language-bank.mjs', import.meta.url));
const levels = {};
for (const target of ['A1', 'A2', 'B1', 'B2', 'C1']) {
  const items = languageItems.filter(item => item.targetLevel === target);
  const keys = [0, 0, 0, 0];
  let longest = 0, shortest = 0, cyclicIncrements = 0;
  items.forEach((item, index) => {
    keys[item.correctIndex]++;
    const lengths = item.choices.map(text => (text.match(/[A-Za-z]+(?:[’'-][A-Za-z]+)*/g) || []).length);
    const max = Math.max(...lengths), min = Math.min(...lengths);
    if (lengths[item.correctIndex] === max) longest += 1 / lengths.filter(n => n === max).length;
    if (lengths[item.correctIndex] === min) shortest += 1 / lengths.filter(n => n === min).length;
    if (index && item.correctIndex === (items[index - 1].correctIndex + 1) % 4) cyclicIncrements++;
  });
  levels[target] = { count: items.length, correctPositions: keys,
    longestOptionRate: longest / items.length, shortestOptionRate: shortest / items.length,
    nextPositionIncrementProportion: cyclicIncrements / (items.length - 1) };
}
const report = {
  sourceSha256: createHash('sha256').update(source).digest('hex'),
  itemCount: languageItems.length, uniqueContexts: new Set(languageStimuli.map(s => s.text)).size,
  tiePolicy: 'Uniform choice among tied alternatives; English word tokens with internal apostrophes/hyphens counted as one word.',
  levels,
  interpretation: 'Fixed-bank editorial diagnostics only. No hypothesis test, real-learner accuracy, CEFR validation, or absence-of-cues claim. Item wording was reviewed after an initial C1 shortest-option rate of 38.37%; these are post-edit diagnostics, not held-out validation.'
};
await mkdir(new URL('../artifacts/editorial/', import.meta.url), { recursive: true });
await writeFile(new URL('../artifacts/editorial/language-shortcuts.json', import.meta.url), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
