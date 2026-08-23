import { describe, expect, it } from 'vitest';
import { viewerGutterChromeCss } from './viewer-gutter-chrome';

describe('viewerGutterChromeCss', () => {
	it('hides the whole left gutter when the reference column is off', () => {
		const css = viewerGutterChromeCss(false, true);
		expect(css).toContain('.left-gutter {\n\tdisplay: none;');
		expect(css).toContain('.urn-badge-wrapper {\n\tdisplay: none;');
		expect(css).toContain('gap: 0;');
	});

	it('keeps a narrow URN column when annotations are off but the gutter is on', () => {
		const css = viewerGutterChromeCss(true, false);
		expect(css).toContain('.left-gutter {\n\tdisplay: flex;');
		expect(css).toContain('flex: 0 0 50px;');
		expect(css).toContain('.gutter-annotations {\n\tdisplay: none;');
	});

	it('widens the gutter when annotations are on', () => {
		const css = viewerGutterChromeCss(true, true);
		expect(css).toContain('flex: 0 0 120px;');
		expect(css).toContain('.gutter-annotations {\n\tdisplay: flex;');
	});
});
