/**
 * GitHub project pages for this repo: https://project-vyasa.github.io/vyasa-apps/
 *
 * One app = one router and one base path. Multiple apps share that host by
 * nesting each build under `dest` (see assemble-gh-pages.mjs).
 *
 * The site root (`/vyasa-apps/`) is a shim: today it redirects to the Viewer.
 * Flip `SITE_INDEX_REDIRECT_ID` to `'docs'` when the docs splash should be the
 * landing page. Old catalog URLs (`/vyasa-apps/adi/…`) still rewrite to `/viewer/`.
 */
export const GH_PAGES_SITE = '/vyasa-apps';

/** Nested dest for the Viewer SPA (`/vyasa-apps/viewer/`). */
export const VIEWER_DEST = 'viewer';

/**
 * Which nested app the site index (`/vyasa-apps/`) sends people to.
 * `'viewer'` now; `'docs'` when the documentation hub should own the root.
 */
export const SITE_INDEX_REDIRECT_ID = 'viewer';

export const VIEWER_DEV_URL = 'http://localhost:5373/';
export const STUDIO_DEV_URL = 'http://localhost:5374/';
export const DOCS_DEV_URL = 'http://localhost:5375/';

/** @typedef {{ id: string, dir: string, dest: string, base: string, outDir?: string }} GhPagesApp */

/** @type {GhPagesApp[]} */
export const GH_PAGES_APPS = [
	{
		id: 'viewer',
		dir: 'apps/viewer',
		dest: VIEWER_DEST,
		base: `${GH_PAGES_SITE}/${VIEWER_DEST}`
	},
	{
		id: 'sanskrit-studio',
		dir: 'apps/sanskrit-studio',
		dest: 'sanskrit',
		base: `${GH_PAGES_SITE}/sanskrit`
	},
	{
		id: 'docs',
		dir: 'apps/docs',
		dest: 'docs',
		base: `${GH_PAGES_SITE}/docs`,
		outDir: 'dist'
	}
];

/**
 * Full-page URL for a nested Pages app. Use with `data-sveltekit-reload`
 * so a Kit app does not treat a sibling dest as one of its own routes.
 *
 * @param {string} id
 * @param {{ dev: boolean }} opts
 */
export function pagesAppHref(id, { dev }) {
	const app = GH_PAGES_APPS.find((a) => a.id === id);
	if (!app) throw new Error(`Unknown GH Pages app: ${id}`);
	if (dev) {
		if (id === 'sanskrit-studio') return STUDIO_DEV_URL;
		if (id === 'docs') return DOCS_DEV_URL;
		return VIEWER_DEV_URL;
	}
	const prefix = app.dest ? `${GH_PAGES_SITE}/${app.dest}` : GH_PAGES_SITE;
	return `${prefix.replace(/\/$/, '')}/`;
}

export function nestedDests() {
	return GH_PAGES_APPS.map((app) => app.dest).filter(Boolean);
}
