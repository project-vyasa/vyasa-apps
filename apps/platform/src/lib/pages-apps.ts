import { dev } from '$app/environment';
import { pagesAppHref } from '../../../../scripts/gh-pages-apps.mjs';

export function sanskritStudioHref(): string {
	return pagesAppHref('sanskrit-studio', { dev });
}
