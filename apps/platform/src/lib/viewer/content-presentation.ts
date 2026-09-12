export type ContentTextSize = 'small' | 'medium' | 'large';
/** Pack token: becomes `html.theme-{id}`. Not a viewer-owned enum. */
export type ContentThemeId = string;

export const CONTENT_TEXT_SCALES: Record<ContentTextSize, number> = {
	small: 0.9,
	medium: 1,
	large: 1.15
};

/** Used when the pack omits `content_themes` (vyasac field still pending). */
export const FALLBACK_CONTENT_THEMES: ContentThemeId[] = ['light', 'dark', 'parchment'];

export const CONTENT_THEME_OPTIONS: { label: string; value: ContentThemeId }[] =
	FALLBACK_CONTENT_THEMES.map((value) => ({
		label: value.charAt(0).toUpperCase() + value.slice(1),
		value
	}));

export const CONTENT_TEXT_SIZE_OPTIONS: { label: string; value: ContentTextSize }[] = [
	{ label: 'Small', value: 'small' },
	{ label: 'Medium', value: 'medium' },
	{ label: 'Large', value: 'large' }
];

const TEXT_SIZE_CYCLE: ContentTextSize[] = ['small', 'medium', 'large'];

const THEME_ID_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function isContentThemeId(value: unknown): value is ContentThemeId {
	return typeof value === 'string' && THEME_ID_RE.test(value);
}

function parseThemeList(raw: unknown): ContentThemeId[] {
	let list: unknown = raw;
	if (typeof raw === 'string') {
		try {
			list = JSON.parse(raw);
		} catch {
			return [];
		}
	}
	if (!Array.isArray(list)) return [];
	const out: ContentThemeId[] = [];
	for (const item of list) {
		if (!isContentThemeId(item) || out.includes(item)) continue;
		out.push(item);
	}
	return out;
}

/** Themes advertised by the packed manifest. Empty array means the pack has none. */
export function contentThemesFromManifest(
	manifest: { content_themes?: unknown } | null | undefined
): ContentThemeId[] {
	if (!manifest || !('content_themes' in manifest) || manifest.content_themes === undefined) {
		return [...FALLBACK_CONTENT_THEMES];
	}
	return parseThemeList(manifest.content_themes);
}

export function cycleContentTextSize(current: ContentTextSize): ContentTextSize {
	const i = TEXT_SIZE_CYCLE.indexOf(current);
	return TEXT_SIZE_CYCLE[(i < 0 ? 0 : i + 1) % TEXT_SIZE_CYCLE.length];
}

export function cycleContentTheme(
	current: ContentThemeId,
	themes: readonly ContentThemeId[]
): ContentThemeId {
	if (themes.length === 0) return current;
	const i = themes.indexOf(current);
	if (i < 0) return themes[0];
	return themes[(i + 1) % themes.length];
}

const THEME_CLASS_RE = /\btheme-[a-z0-9-]+\b/gi;

export const READER_FULL_WIDTH_CLASS = 'reader-full-width';

/** Lift publisher measure (`.content`, `body`, `.reading-body`) when the reader iframe is full-bleed. */
export function readerFullWidthCss(): string {
	return `html.${READER_FULL_WIDTH_CLASS}{--vyasa-content-max-width:none;}html.${READER_FULL_WIDTH_CLASS} body,html.${READER_FULL_WIDTH_CLASS} .content,html.${READER_FULL_WIDTH_CLASS} .reading-body{max-width:none;width:100%;}`;
}

export function setReaderFullWidth(doc: Document | null | undefined, full: boolean): void {
	doc?.documentElement.classList.toggle(READER_FULL_WIDTH_CLASS, full);
}

/** Gutter chips follow packed `--vyasa-paper` / `--vyasa-ink`. No publisher paper recipes. */
export function contentThemeOverlayCss(): string {
	return `html{--vyasa-gutter-chip-bg:color-mix(in srgb,var(--vyasa-ink,#444) 14%,var(--vyasa-paper,#fcfcfc));--vyasa-gutter-chip-ink:var(--vyasa-ink,#444);--vyasa-gutter-rule:color-mix(in srgb,var(--vyasa-ink,#444) 16%,var(--vyasa-paper,#fcfcfc));}`;
}

/** Stamp publication presentation onto iframe srcdoc (not app chrome). */
export function applyContentPresentation(
	html: string,
	opts: { theme: ContentThemeId; textSize: ContentTextSize }
): string {
	const scale = CONTENT_TEXT_SCALES[opts.textSize];
	const themeClass = opts.theme ? `theme-${opts.theme}` : '';
	const inject = `<style>html{--vyasa-text-scale:${scale};font-size:calc(1rem * var(--vyasa-text-scale, 1));}${readerFullWidthCss()}${contentThemeOverlayCss()}</style>`;

	let out = html.replace(/<html([^>]*)>/i, (_m, attrs: string) => {
		let next = attrs;
		if (/class\s*=/.test(next)) {
			next = next.replace(/class\s*=\s*["']([^"']*)["']/i, (_c, existing: string) => {
				const cleaned = existing.replace(THEME_CLASS_RE, '').replace(/\s+/g, ' ').trim();
				return `class="${[cleaned, themeClass].filter(Boolean).join(' ')}"`;
			});
		} else if (themeClass) {
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
