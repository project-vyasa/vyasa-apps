import { describe, it, expect } from 'vitest';
import {
	buildWeaveOptionsJson,
	isPlaceholderContent,
	prepareDisplayContent
} from './whitespace';

describe('whitespace helpers', () => {
	describe('buildWeaveOptionsJson', () => {
		it('joins segment breaks with newlines and no span wrapper', () => {
			const json = buildWeaveOptionsJson('reading', ['mula', 'iast']);
			expect(JSON.parse(json)).toEqual({
				separator: '\n',
				stream_order: ['mula', 'iast']
			});
		});

		it('omits stream_order when empty', () => {
			const json = buildWeaveOptionsJson('grid', []);
			expect(JSON.parse(json)).toEqual({ separator: '\n' });
		});
	});

	describe('isPlaceholderContent', () => {
		it('treats empty and marker-only HTML as placeholder', () => {
			expect(isPlaceholderContent('')).toBe(true);
			expect(isPlaceholderContent('   ')).toBe(true);
			expect(isPlaceholderContent('<div class="set"></div>')).toBe(true);
			expect(isPlaceholderContent('// 0 //')).toBe(true);
		});

		it('keeps content with visible text', () => {
			expect(isPlaceholderContent('<div class="lines">\nLine one\n</div>')).toBe(false);
			expect(isPlaceholderContent('<div class="verse">अर्जुन उवाच</div>')).toBe(false);
		});
	});

	describe('prepareDisplayContent', () => {
		it('strips compile artifacts from vyasa-bg stream HTML', () => {
			const input =
				'<div class="set"></div> <span class="vyasa-debug-marker" data-entity="sanjaya"></span> <span class="vyasa-debug-marker" data-action="uvaca"></span><div class="verse">सञ्जय उवाच\nline</div>';
			expect(prepareDisplayContent(input)).toBe(
				'<div class="verse">सञ्जय उवाच\nline</div>'
			);
		});

		it('converts segment breaks and removes empty segment spans', () => {
			const input = 'a\x1fb<span data-segment="1"></span> c';
			expect(prepareDisplayContent(input)).toBe('a\nbc');
		});

		it('preserves internal blank lines in publisher content', () => {
			const input = '<div class="knowledge">\n\nParagraph</div>\n';
			expect(prepareDisplayContent(input)).toBe(input);
		});

		it('trims leading whitespace left after artifact removal', () => {
			const input = '  <div class="verse">text</div>';
			expect(prepareDisplayContent(input)).toBe('<div class="verse">text</div>');
		});
	});
});
