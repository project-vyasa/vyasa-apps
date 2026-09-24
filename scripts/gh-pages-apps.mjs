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
export const VYASA_STUDIO_DEV_URL = 'http://localhost:5376/';

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
		id: 'studio',
		dir: 'apps/studio',
		dest: 'studio',
		base: `${GH_PAGES_SITE}/studio`
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
		if (id === 'studio') return VYASA_STUDIO_DEV_URL;
		if (id === 'docs') return DOCS_DEV_URL;
		return VIEWER_DEV_URL;
	}
	const prefix = app.dest ? `${GH_PAGES_SITE}/${app.dest}` : GH_PAGES_SITE;
	return `${prefix.replace(/\/$/, '')}/`;
}

export function nestedDests() {
	return GH_PAGES_APPS.map((app) => app.dest).filter(Boolean);
}

/** @type {Record<string, string>} */
const APP_LABELS = {
	viewer: 'Viewer',
	studio: 'Vyasa Studio',
	'sanskrit-studio': 'Sanskrit Studio',
	docs: 'Docs'
};

/** Starlight path under the docs dest (`''` = docs hub). */
/** @type {Record<string, string>} */
const APP_GUIDE_PATHS = {
	viewer: 'viewer',
	studio: 'studio',
	'sanskrit-studio': 'sanskrit-studio',
	docs: ''
};

/**
 * Sibling apps for the header switcher. Keep this the only growing list.
 *
 * @param {{ dev: boolean }} opts
 * @returns {{ id: string, label: string, href: string }[]}
 */
export function platformApps({ dev }) {
	return GH_PAGES_APPS.map((app) => ({
		id: app.id,
		label: APP_LABELS[app.id] || app.id,
		href: pagesAppHref(app.id, { dev })
	}));
}

/**
 * Header switcher entries: every nested app except the one already open.
 *
 * @param {string} currentId
 * @param {{ dev: boolean }} opts
 */
export function otherPlatformApps(currentId, { dev }) {
	return platformApps({ dev }).filter((app) => app.id !== currentId);
}

/**
 * User guide for one nested app (docs dest + section).
 *
 * @param {string} id
 * @param {{ dev: boolean }} opts
 */
export function pagesAppGuideHref(id, { dev }) {
	const hub = pagesAppHref('docs', { dev }).replace(/\/$/, '');
	const section = APP_GUIDE_PATHS[id];
	return section ? `${hub}/${section}/` : `${hub}/`;
}
