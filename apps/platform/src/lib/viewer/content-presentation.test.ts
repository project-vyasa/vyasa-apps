import { describe, expect, it } from 'vitest';
import {
	applyContentPresentation,
	contentThemeOverlayCss,
	contentThemesFromManifest,
	cycleContentTextSize,
	cycleContentTheme,
	setReaderFullWidth
} from './content-presentation';

describe('applyContentPresentation', () => {
	it('adds theme class and text scale on html', () => {
		const html = '<html lang="sa"><head></head><body>x</body></html>';
		const out = applyContentPresentation(html, { theme: 'parchment', textSize: 'large' });
		expect(out).toContain('class="theme-parchment"');
		expect(out).toContain('--vyasa-text-scale:1.15');
		expect(out).toContain('reader-full-width');
		expect(out).toContain('--vyasa-gutter-chip-bg');
		expect(contentThemeOverlayCss()).not.toContain('--vyasa-paper:');
		expect(out).toContain('--vyasa-content-max-width:none');
		expect(out).toContain('</style></head>');
	});

	it('replaces an existing theme-* class', () => {
		const html = '<html class="theme-light foo"><head></head><body></body></html>';
		const out = applyContentPresentation(html, { theme: 'dark', textSize: 'medium' });
		expect(out).toContain('class="foo theme-dark"');
		expect(out).not.toContain('theme-light');
	});
});

describe('cycle presentation', () => {
	it('cycles text size S → M → L → S', () => {
		expect(cycleContentTextSize('small')).toBe('medium');
		expect(cycleContentTextSize('medium')).toBe('large');
		expect(cycleContentTextSize('large')).toBe('small');
	});

	it('cycles content themes from the pack list', () => {
		const themes = ['light', 'dark', 'parchment'];
		expect(cycleContentTheme('light', themes)).toBe('dark');
		expect(cycleContentTheme('dark', themes)).toBe('parchment');
		expect(cycleContentTheme('parchment', themes)).toBe('light');
		expect(cycleContentTheme('sepia', ['light', 'dark'])).toBe('light');
		expect(cycleContentTheme('light', [])).toBe('light');
	});

	it('reads content_themes from the manifest, with a fallback when omitted', () => {
		expect(contentThemesFromManifest({ content_themes: ['dark', 'parchment'] })).toEqual([
			'dark',
			'parchment'
		]);
		expect(contentThemesFromManifest({ content_themes: [] })).toEqual([]);
		expect(contentThemesFromManifest({})).toEqual(['light', 'dark', 'parchment']);
	});

	it('toggles the live iframe class without rewriting srcdoc', () => {
		const classes = new Set<string>();
		const doc = {
			documentElement: {
				classList: {
					toggle(name: string, force?: boolean) {
						if (force) classes.add(name);
						else classes.delete(name);
					},
					contains(name: string) {
						return classes.has(name);
					}
				}
			}
		} as unknown as Document;
		setReaderFullWidth(doc, true);
		expect(doc.documentElement.classList.contains('reader-full-width')).toBe(true);
		setReaderFullWidth(doc, false);
		expect(doc.documentElement.classList.contains('reader-full-width')).toBe(false);
	});
});
