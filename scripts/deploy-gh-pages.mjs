#!/usr/bin/env node
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const assemble = spawnSync('node', [join(root, 'scripts/assemble-gh-pages.mjs')], {
	cwd: root,
	stdio: 'inherit'
});
if (assemble.status !== 0) process.exit(assemble.status ?? 1);

const publish = spawnSync(
	'bunx',
	['gh-pages', '-d', 'dist-pages', '--dotfiles', '--nojekyll'],
	{ cwd: root, stdio: 'inherit' }
);
process.exit(publish.status ?? 1);
