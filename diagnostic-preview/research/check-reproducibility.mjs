import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

const target = new URL('./results.json', import.meta.url);
const before = createHash('sha256').update(await readFile(target)).digest('hex');
execFileSync(process.execPath, [fileURLToPath(new URL('./run-simulations.mjs', import.meta.url)), '--reuse-current'], {
  stdio: 'inherit', timeout: 120000, windowsHide: true,
});
const after = createHash('sha256').update(await readFile(target)).digest('hex');
assert.equal(after, before, 'Repeated deterministic research run changed results.');
console.log(JSON.stringify({ deterministic: true, resultsSha256: after }));
