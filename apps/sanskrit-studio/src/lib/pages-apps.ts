import { dev } from '$app/environment';
import { pagesAppHref } from '../../../../scripts/gh-pages-apps.mjs';

export function viewerHref(): string {
	return pagesAppHref('platform', { dev });
}
