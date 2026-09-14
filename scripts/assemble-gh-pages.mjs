#!/usr/bin/env node
/**
 * Build every Pages app and nest outputs for one GitHub Pages tree.
 * Usage: node scripts/assemble-gh-pages.mjs [--skip-build]
 */
import { cpSync, copyFileSync, mkdirSync, rmSync, writeFileSync, existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { GH_PAGES_APPS, GH_PAGES_SITE, SITE_INDEX_REDIRECT_ID, nestedDests, pagesAppHref } from './gh-pages-apps.mjs';

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
	const buildDir = join(root, app.dir, app.outDir || 'build');
	if (!existsSync(buildDir)) {
		console.error(`[assemble-gh-pages] missing ${buildDir} — run without --skip-build`);
		process.exit(1);
	}
	const dest = app.dest ? join(out, app.dest) : out;
	if (app.dest) {
		rmSync(dest, { recursive: true, force: true });
	}
	console.log(
		`[assemble-gh-pages] copy ${app.dir}/${app.outDir || 'build'} → dist-pages/${app.dest || '.'}`
	);
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

writeSiteShims(out);
writeFileSync(join(out, '.nojekyll'), '');
console.log(`[assemble-gh-pages] wrote ${out}`);

/**
 * Root `/vyasa-apps/` is not an app. Index redirects to `SITE_INDEX_REDIRECT_ID`
 * (Viewer today, docs later). Site `404.html` is the Viewer SPA fallback (GH Pages
 * only serves a 404 from the publish root) plus a rewrite for leftover catalog URLs.
 */
function writeSiteShims(outDir) {
	const indexHref = pagesAppHref(SITE_INDEX_REDIRECT_ID, { dev: false });
	const viewerHref = pagesAppHref('viewer', { dev: false });
	const destJson = JSON.stringify(nestedDests());
	const siteJson = JSON.stringify(GH_PAGES_SITE);
	const rewriteScript = `<script>
(function () {
	var site = ${siteJson};
	var dests = ${destJson};
	var viewer = ${JSON.stringify(viewerHref)};
	var path = location.pathname;
	if (path !== site && path.indexOf(site + '/') !== 0) return;
	var rest = path.slice(site.length).replace(/^\\/+/, '');
	var first = rest.split('/')[0];
	if (first === 'viewer') return;
	if (dests.indexOf(first) !== -1) return;
	location.replace(viewer + rest + location.search + location.hash);
})();
</script>`;

	writeFileSync(
		join(outDir, 'index.html'),
		`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8"/>
	<meta http-equiv="refresh" content="0; url=${indexHref}"/>
	<link rel="canonical" href="${indexHref}"/>
	<title>Project Vyasa</title>
	<script>location.replace(${JSON.stringify(indexHref)} + location.search + location.hash);</script>
</head>
<body>
	<p><a href="${indexHref}">Continue</a></p>
</body>
</html>
`
	);

	const viewerFallback = join(outDir, 'viewer', '404.html');
	if (existsSync(viewerFallback)) {
		const spa = readFileSync(viewerFallback, 'utf8');
		const injected = spa.includes('<head>')
			? spa.replace('<head>', `<head>${rewriteScript}`)
			: `${rewriteScript}${spa}`;
		writeFileSync(join(outDir, '404.html'), injected);
		console.log(`[assemble-gh-pages] site 404.html ← viewer SPA fallback + catalog rewrite`);
	} else {
		writeFileSync(
			join(outDir, '404.html'),
			`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8"/>
	<title>Project Vyasa</title>
	${rewriteScript}
</head>
<body>
	<p><a href="${viewerHref}">Open the Viewer</a></p>
</body>
</html>
`
		);
		console.log(`[assemble-gh-pages] site 404.html catalog rewrite only (no viewer fallback)`);
	}
	console.log(`[assemble-gh-pages] site index → ${indexHref}`);
}
