import { describe, expect, it } from 'vitest';
import { parseMapTree } from './map-nodes';

const urnComponents = ['mandala', 'sukta', 'rik'];
const structureLabel = (_key: string, fallback: string) =>
	fallback.charAt(0).toUpperCase() + fallback.slice(1);

describe('parseMapTree', () => {
	it('uses locator titles and omits redundant subtitles (RV mandala)', () => {
		const tree = {
			'1': {
				'1': { slots: [0], leaves: [[1, 9]] }
			}
		};
		const titles = {
			'1': 'Mandala 1',
			'1:1': 'Sukta 1:1'
		};

		const nodes = parseMapTree(tree, { urnComponents, titles, structureLabel });
		expect(nodes).toEqual([
			{
				type: 'branch',
				id: '1',
				title: 'Mandala 1',
				depth: 0,
				children: [
					{
						type: 'leaf-container',
						id: '1:1',
						title: 'Sukta 1:1',
						depth: 1,
						leafIndices: [1, 2, 3, 4, 5, 6, 7, 8, 9]
					}
				]
			}
		]);
	});

	it('keeps distinct packed titles with locator subtitles', () => {
		const tree = {
			'1': {
				'1': { slots: [0], leaves: [[1, 3]] }
			}
		};
		const titles = {
			'1': 'First Mandala',
			'1:1': 'Opening Hymn'
		};

		const nodes = parseMapTree(tree, { urnComponents, titles, structureLabel });
		expect(nodes[0]).toMatchObject({
			title: 'First Mandala',
			subtitle: 'Mandala 1'
		});
		expect(nodes[0].children[0]).toMatchObject({
			title: 'Opening Hymn',
			subtitle: 'Sukta 1:1'
		});
	});
});
