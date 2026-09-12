import { describe, expect, it } from 'vitest';
import { applyLayoutShells } from './layout-shells';

const theme = '<html><body><div class="content">{{ body }}</div></body></html>';
const reading = '<style>.verse-content{text-align:center}</style>{{ body }}';

describe('applyLayoutShells', () => {
	it('wraps grid rows in theme_layout only', () => {
		const html = applyLayoutShells('<div class="urn-row">g</div>', 'grid', {
			theme_layout: theme,
			reading_layout: reading
		});
		expect(html).toContain('class="content"');
		expect(html).toContain('urn-row');
		expect(html).not.toContain('verse-content');
	});

	it('nests reading_layout inside theme_layout', () => {
		const html = applyLayoutShells('<div class="urn-row">r</div>', 'reading', {
			theme_layout: theme,
			reading_layout: reading
		});
		expect(html).toContain('class="content"');
		expect(html).toContain('verse-content');
		expect(html).toContain('urn-row');
	});

	it('falls back to theme when the craft view has no layout', () => {
		const html = applyLayoutShells('item', 'reading', { theme_layout: theme });
		expect(html).toBe('<html><body><div class="content">item</div></body></html>');
	});
});
