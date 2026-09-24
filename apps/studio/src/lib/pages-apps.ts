import { dev } from '$app/environment';
import { pagesAppHref } from '../../../../scripts/gh-pages-apps.mjs';

export function viewerHref(): string {
	return pagesAppHref('viewer', { dev });
}

export const VYASA_DOCS_HREF = 'https://project-vyasa.github.io/vyasa-docs/';
export const SAMPLES_REPO_HREF = 'https://github.com/project-vyasa/vyasa-samples';
