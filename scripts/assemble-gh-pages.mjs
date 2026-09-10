#!/usr/bin/env node
/**
 * Build every Kit app and nest outputs for one GitHub Pages tree.
 * Usage: node scripts/assemble-gh-pages.mjs [--skip-build]
 */
import { cpSync, copyFileSync, mkdirSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { GH_PAGES_APPS } from './gh-pages-apps.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'dist-pages');
const skipBuild = process.argv.includes('--skip-build');

function run(cwd, args) {
	const result = spawnSync('bun', args, { cwd, stdio: 'inherit' });
	if (result.status !== 0) {
		process.exit(result.status ?? 1);
	}
}

if (!skipBuild) {
	for (const app of GH_PAGES_APPS) {
		console.log(`[assemble-gh-pages] build ${app.dir}`);
		run(join(root, app.dir), ['run', 'build']);
	}
}

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

for (const app of GH_PAGES_APPS) {
	const buildDir = join(root, app.dir, 'build');
	if (!existsSync(buildDir)) {
		console.error(`[assemble-gh-pages] missing ${buildDir} — run without --skip-build`);
		process.exit(1);
	}
	const dest = app.dest ? join(out, app.dest) : out;
	if (app.dest) {
		rmSync(dest, { recursive: true, force: true });
	}
	console.log(`[assemble-gh-pages] copy ${app.dir}/build → dist-pages/${app.dest || '.'}`);
	cpSync(buildDir, dest, { recursive: true });
	// Nested apps are not the site 404 document. GH Pages needs index.html at dest/.
	if (app.dest) {
		const indexHtml = join(dest, 'index.html');
		const fallbackHtml = join(dest, '404.html');
		if (!existsSync(indexHtml) && existsSync(fallbackHtml)) {
			copyFileSync(fallbackHtml, indexHtml);
			console.log(`[assemble-gh-pages] ${app.id}: 404.html → index.html`);
		}
	}
}

writeFileSync(join(out, '.nojekyll'), '');
console.log(`[assemble-gh-pages] wrote ${out}`);
