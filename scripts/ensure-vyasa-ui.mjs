#!/usr/bin/env node
/**
 * Build @project-vyasa/vyasa-ui from the sibling vyasa-ui repo.
 * Expected layout: project-vyasa/{vyasa-apps,vyasa-ui}/...
 */
import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const vyasaUiDir = resolve(scriptDir, '../../vyasa-ui/svelte');

if (!existsSync(vyasaUiDir)) {
	console.error(`[ensure-vyasa-ui] vyasa-ui not found at ${vyasaUiDir}`);
	console.error(
		'Clone https://github.com/project-vyasa/vyasa-ui next to vyasa-apps, then retry.'
	);
	process.exit(1);
}

console.log(`[ensure-vyasa-ui] Building @project-vyasa/vyasa-ui in ${vyasaUiDir}…`);
const result = spawnSync('bun', ['run', 'build'], {
	cwd: vyasaUiDir,
	stdio: 'inherit'
});

if (result.error) {
	console.error('[ensure-vyasa-ui] Failed to run bun:', result.error.message);
	process.exit(1);
}

process.exit(result.status ?? 1);
