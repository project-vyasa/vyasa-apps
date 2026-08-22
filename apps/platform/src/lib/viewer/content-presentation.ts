export type ContentTextSize = 'small' | 'medium' | 'large';
export type ContentThemeId = 'light' | 'dark';

export const CONTENT_TEXT_SCALES: Record<ContentTextSize, number> = {
	small: 0.9,
	medium: 1,
	large: 1.15
};

export const CONTENT_THEME_OPTIONS: { label: string; value: ContentThemeId }[] = [
	{ label: 'Light', value: 'light' },
	{ label: 'Dark', value: 'dark' }
];

export const CONTENT_TEXT_SIZE_OPTIONS: { label: string; value: ContentTextSize }[] = [
	{ label: 'Small', value: 'small' },
	{ label: 'Medium', value: 'medium' },
	{ label: 'Large', value: 'large' }
];

const THEME_CLASS_RE = /\btheme-[a-z0-9-]+\b/gi;

/** Stamp publication presentation onto iframe srcdoc (not app chrome). */
export function applyContentPresentation(
	html: string,
	opts: { theme: ContentThemeId; textSize: ContentTextSize }
): string {
	const scale = CONTENT_TEXT_SCALES[opts.textSize];
	const themeClass = `theme-${opts.theme}`;
	const inject = `<style>html{--vyasa-text-scale:${scale};font-size:calc(1rem * var(--vyasa-text-scale, 1));}</style>`;

	let out = html.replace(/<html([^>]*)>/i, (_m, attrs: string) => {
		let next = attrs;
		if (/class\s*=/.test(next)) {
			next = next.replace(/class\s*=\s*["']([^"']*)["']/i, (_c, existing: string) => {
				const cleaned = existing.replace(THEME_CLASS_RE, '').replace(/\s+/g, ' ').trim();
				return `class="${[cleaned, themeClass].filter(Boolean).join(' ')}"`;
			});
		} else {
			next = ` class="${themeClass}"${next}`;
		}
		return `<html${next}>`;
	});

	if (out.includes('</head>')) {
		out = out.replace('</head>', `${inject}</head>`);
	} else {
		out = inject + out;
	}
	return out;
}
