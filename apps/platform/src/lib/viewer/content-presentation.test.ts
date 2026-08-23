import { describe, expect, it } from 'vitest';
import {
	applyContentPresentation,
	cycleContentTextSize,
	cycleContentTheme
} from './content-presentation';

describe('applyContentPresentation', () => {
	it('adds theme class and text scale on html', () => {
		const html = '<html lang="sa"><head></head><body>x</body></html>';
		const out = applyContentPresentation(html, { theme: 'dark', textSize: 'large' });
		expect(out).toContain('class="theme-dark"');
		expect(out).toContain('--vyasa-text-scale:1.15');
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

	it('toggles content theme', () => {
		expect(cycleContentTheme('light')).toBe('dark');
		expect(cycleContentTheme('dark')).toBe('light');
	});
});
