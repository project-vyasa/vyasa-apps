import { describe, it, expect } from 'vitest';
import {
	buildSidebarItems,
	formatLocatorLabel,
	isLocatorTitle
} from './sidebar-items';

const urnComponents = ['mandala', 'sukta', 'rik'];
const structureLabel = (_key: string, fallback: string) =>
	fallback.charAt(0).toUpperCase() + fallback.slice(1);

describe('sidebar locator helpers', () => {
	it('formats colon-separated container locators', () => {
		expect(formatLocatorLabel(['1', '1'], urnComponents, structureLabel)).toBe('Sukta 1:1');
		expect(
			formatLocatorLabel(['1', '2', '1'], ['kanda', 'prasna', 'anuvaka', 'mantra'], structureLabel)
		).toBe('Anuvaka 1:2:1');
	});

	it('detects locator-shaped packed titles', () => {
		const locator = 'Sukta 1:1';
		expect(isLocatorTitle('Sukta 1:1', locator, ['1', '1'])).toBe(true);
		expect(isLocatorTitle('Sukta 1.1', locator, ['1', '1'])).toBe(true);
		expect(isLocatorTitle('Opening Hymn', locator, ['1', '1'])).toBe(false);
	});
});

describe('buildSidebarItems', () => {
	it('lists sukta containers from ranges_v1 tree grouped by mandala', () => {
		const tree = {
			'1': {
				'0': { slots: [0], leaves: [] },
				'1': { slots: [0], leaves: [[1, 3]] },
				'2': { slots: [0], leaves: [[1, 2]] }
			}
		};
		const titles = {
			'1': 'First Mandala',
			'1:1': 'Opening Hymn',
			'1:2': 'Second Hymn'
		};

		expect(buildSidebarItems(tree, { urnComponents, titles, structureLabel })).toEqual([
			{
				id: '1:1',
				title: 'Opening Hymn',
				subtitle: 'Sukta 1:1',
				meta: '3 Riks',
				group: 'Mandala 1'
			},
			{
				id: '1:2',
				title: 'Second Hymn',
				subtitle: 'Sukta 1:2',
				meta: '2 Riks',
				group: 'Mandala 1'
			}
		]);
	});

	it('omits subtitle when packed title is locator-shaped (RV)', () => {
		const tree = {
			'1': {
				'1': { slots: [0], leaves: [[1, 9]] }
			}
		};
		const titles = {
			'1:1': 'Sukta 1:1'
		};

		expect(buildSidebarItems(tree, { urnComponents, titles, structureLabel })).toEqual([
			{
				id: '1:1',
				title: 'Sukta 1:1',
				meta: '9 Riks',
				group: 'Mandala 1'
			}
		]);
	});

	it('groups 4-level anuvākas under kāṇḍa, not titles["prasnaId"]', () => {
		const tree = {
			'1': {
				'2': {
					'1': { slots: [0], leaves: [[1, 1]] },
					'2': { slots: [0], leaves: [[1, 2]] }
				}
			},
			'2': {
				'1': {
					'1': { slots: [0], leaves: [[1, 1]] }
				}
			}
		};
		const ttsComponents = ['kanda', 'prasna', 'anuvaka', 'mantra'];
		const titles = {
			'1': 'Kāṇḍa 1',
			'2': 'Kāṇḍa 2',
			'1:2': 'Praśna 1.2',
			'2:1': 'Praśna 2.1',
			'1:2:1': 'Anuvāka 1.2.1',
			'1:2:2': 'Anuvāka 1.2.2',
			'2:1:1': 'Anuvāka 2.1.1'
		};

		expect(
			buildSidebarItems(tree, { urnComponents: ttsComponents, titles, structureLabel })
		).toEqual([
			{
				id: '1:2:1',
				title: 'Anuvaka 1:2:1',
				meta: '1 Mantra',
				group: 'Kanda 1 : Prasna 2'
			},
			{
				id: '1:2:2',
				title: 'Anuvaka 1:2:2',
				meta: '2 Mantras',
				group: 'Kanda 1 : Prasna 2'
			},
			{
				id: '2:1:1',
				title: 'Anuvaka 2:1:1',
				meta: '1 Mantra',
				group: 'Kanda 2 : Prasna 1'
			}
		]);
	});

	it('does not descend into slots/leaves metadata keys', () => {
		const tree = {
			'1': {
				'1': { slots: [0], leaves: [[1, 1]] }
			}
		};

		const items = buildSidebarItems(tree, { urnComponents, titles: {}, structureLabel });
		expect(items.map((i) => i.id)).toEqual(['1:1']);
		expect(items[0].title).toBe('Sukta 1:1');
		expect(items[0].meta).toBe('1 Rik');
		expect(items.some((i) => /leaves|slots/i.test(i.title))).toBe(false);
	});
});
