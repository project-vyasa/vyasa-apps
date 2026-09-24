import { describe, expect, it } from 'vitest';
import { pickPreviewHtml, previewPathForSource } from './compiler';

describe('pickPreviewHtml', () => {
	it('prefers the compiled mula chapter over templates and other output', () => {
		const picked = pickPreviewHtml({
			'templates/html/default.html': '<p>template</p>',
			'build/html/iast/1.html': '<p>iast</p>',
			'build/html/mula/1.html': '<p>compiled</p>',
			'build/html/mula/localization.html': '<p>labels</p>'
		});
		expect(picked.path).toBe('build/html/mula/1.html');
		expect(picked.html).toBe('<p>compiled</p>');
	});

	it('uses the chapter that matches the selected source', () => {
		const files = {
			'build/html/iast/1.html': '<p>iast</p>',
			'build/html/mula/1.html': '<p>compiled</p>'
		};
		const preferred = previewPathForSource('content/iast/1.vy', Object.keys(files));
		expect(preferred).toBe('build/html/iast/1.html');
		expect(pickPreviewHtml(files, preferred)).toEqual({
			path: 'build/html/iast/1.html',
			html: '<p>iast</p>'
		});
	});

	it('returns null when the source is not a content chapter', () => {
		expect(previewPathForSource('context.vy', ['build/html/mula/1.html'])).toBeNull();
	});

	it('returns null when there is no compiled html', () => {
		expect(pickPreviewHtml({ 'context.vy': 'x', 'templates/html/default.html': '<p>t</p>' })).toEqual({
			path: null,
			html: null
		});
	});
});
