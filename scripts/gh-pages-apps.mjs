/**
 * GitHub project pages for this repo: https://project-vyasa.github.io/vyasa-apps/
 *
 * One Kit app = one router and one `paths.base`. Multiple Kit apps share
 * that host by nesting each build under `dest` (see assemble-gh-pages.mjs).
 */
export const GH_PAGES_SITE = '/vyasa-apps';

export const VIEWER_DEV_URL = 'http://localhost:5373/';
export const STUDIO_DEV_URL = 'http://localhost:5374/';

/** @typedef {{ id: string, dir: string, dest: string, base: string }} GhPagesApp */

/** @type {GhPagesApp[]} */
export const GH_PAGES_APPS = [
	{
		id: 'platform',
		dir: 'apps/platform',
		dest: '',
		base: GH_PAGES_SITE
	},
	{
		id: 'sanskrit-studio',
		dir: 'apps/sanskrit-studio',
		dest: 'apps/sanskrit-studio',
		base: `${GH_PAGES_SITE}/apps/sanskrit-studio`
	}
];

/**
 * Full-page URL for a nested Pages app. Use with `data-sveltekit-reload`
 * so the viewer SPA does not treat `/apps/sanskrit-studio` as a registry.
 *
 * @param {string} id
 * @param {{ dev: boolean }} opts
 */
export function pagesAppHref(id, { dev }) {
	if (dev) {
		return id === 'sanskrit-studio' ? STUDIO_DEV_URL : VIEWER_DEV_URL;
	}
	const app = GH_PAGES_APPS.find((a) => a.id === id);
	if (!app) throw new Error(`Unknown GH Pages app: ${id}`);
	const prefix = app.dest ? `${GH_PAGES_SITE}/${app.dest}` : GH_PAGES_SITE;
	return `${prefix.replace(/\/$/, '')}/`;
}
