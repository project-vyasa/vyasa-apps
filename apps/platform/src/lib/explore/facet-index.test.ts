import { describe, it, expect } from 'vitest';
import { catalogLeafIndices, collectLeafUrns, urnCoversLeaf, urnsReferToSameBlock } from './urn-utils';
import {
	buildFacetIndex,
	buildFacetValueColorMap,
	isCoverageFacet,
	leafHasFacetValue,
	leafMatchesFacetSelection,
	leafFacetCornerColors,
	paintLeafCoverageFacet,
	paintLeafMapFacet
} from './facet-index';
import type { PackageData } from '$lib/types';

describe('explore urn-utils', () => {
	it('excludes container :0 indices from catalog arrays', () => {
		expect(catalogLeafIndices([0, 1, 2, 47])).toEqual([1, 2, 47]);
	});

	it('expands compact [0, max] range encoding (RV suktas)', () => {
		expect(catalogLeafIndices([0, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
		expect(catalogLeafIndices([0, 1])).toEqual([1]);
		expect(catalogLeafIndices([0])).toEqual([]);
	});

	it('collects verse leaf URNs using catalog indices (not array length)', () => {
		const tree = { '1': [0, 1, 2, 3], '2': { '1': [0, 1, 2] } };
		expect(collectLeafUrns(tree)).toEqual(['1:1', '1:2', '1:3', '2:1:1', '2:1:2']);
	});

	it('collects riks from compact sukta arrays', () => {
		const tree = { '1': { '1': [0, 3], '2': [0, 2] } };
		expect(collectLeafUrns(tree)).toEqual([
			'1:1:1',
			'1:1:2',
			'1:1:3',
			'1:2:1',
			'1:2:2'
		]);
	});

	it('expands ranges_v1 leaf buckets', () => {
		const node = { slots: [0], leaves: [[1, 5], [9, 9]] as [number, number][] };
		expect(catalogLeafIndices(node)).toEqual([1, 2, 3, 4, 5, 9]);
	});

	it('collects URNs from ranges_v1 catalog tree', () => {
		const tree = {
			'1': {
				slots: [],
				leaves: []
			},
			'2': {
				'1': { slots: [0], leaves: [[1, 3]] },
				'2': { slots: [0], leaves: [[1, 2]] }
			}
		};
		expect(collectLeafUrns(tree)).toEqual([
			'2:1:1',
			'2:1:2',
			'2:1:3',
			'2:2:1',
			'2:2:2'
		]);
	});

	it('matches container URNs to descendant leaves', () => {
		expect(urnCoversLeaf('1', '1:5')).toBe(true);
		expect(urnCoversLeaf('1:5', '1:6')).toBe(false);
	});

	it('matches suffix annotation URNs', () => {
		expect(urnsReferToSameBlock('urn:vyasa:1:3', '1:3')).toBe(true);
	});
});

describe('buildFacetIndex', () => {
	const packageData: PackageData = {
		manifest: { package_type: 'view', catalog_tree: '{}', primary_stream: 'mula' },
		structure: {
			catalogTree: { '1': [0, 1, 2, 3, 4] }
		},
		projections: {},
		annotations: [
			{ urn: '1:1', label: 'Action', attributes: { speaker: 'krishna' } },
			{ urn: '1:2', label: 'Action', attributes: { speaker: 'arjuna' } },
			{ urn: '1:3', label: 'Action', attributes: { speaker: 'krishna' } },
			{ urn: '1:4', label: 'Action', attributes: { speaker: 'sanjaya' } }
		],
		vocabulary: [
			{ category: 'entities', key: 'krishna', stream_name: 'mula', value: 'Kṛṣṇa' },
			{ category: 'entities', key: 'krishna', stream_name: 'iast', value: 'kṛṣṇa' },
			{ category: 'entities', key: 'arjuna', stream_name: 'mula', value: 'Arjuna' },
			{ category: 'actions', key: 'speaker', stream_name: 'mula', value: 'वक्ता' },
			{ category: 'actions', key: 'speaker', stream_name: 'iast', value: 'Speaker' }
		]
	};

	it('builds speaker facet with leaf counts', () => {
		const index = buildFacetIndex(packageData);
		const speaker = index.types.find((t) => t.id === 'speaker');
		expect(speaker).toBeDefined();
		expect(speaker!.values.find((v) => v.id === 'krishna')?.count).toBe(2);
		expect(speaker!.values.find((v) => v.id === 'arjuna')?.count).toBe(1);
	});

	it('honors chrome label stream for facet type and values', () => {
		const index = buildFacetIndex(packageData, 'iast');
		const speaker = index.types.find((t) => t.id === 'speaker');
		expect(speaker?.label).toBe('Speaker');
		expect(speaker?.values.find((v) => v.id === 'krishna')?.label).toBe('kṛṣṇa');
	});

	it('highlights leaves for active facet selection', () => {
		const index = buildFacetIndex(packageData);
		const active = { speaker: new Set(['krishna']) };
		expect(leafMatchesFacetSelection('1:1', active, index.leafFacetKeys)).toBe(true);
		expect(leafMatchesFacetSelection('1:2', active, index.leafFacetKeys)).toBe(false);
		expect(leafFacetCornerColors('1:1', active, index, index.leafFacetKeys).length).toBe(1);
	});

	it('uses legend colors for each selected filter value', () => {
		const index = buildFacetIndex(packageData);
		const colorMap = buildFacetValueColorMap(index, 'speaker');
		const active = { speaker: new Set(['krishna', 'sanjaya']) };
		const krishnaColor = leafFacetCornerColors('1:1', active, index, index.leafFacetKeys)[0];
		const sanjayaColor = leafFacetCornerColors('1:4', active, index, index.leafFacetKeys)[0];
		expect(krishnaColor).toBe(colorMap.get('krishna'));
		expect(sanjayaColor).toBe(colorMap.get('sanjaya'));
		expect(krishnaColor).not.toBe(sanjayaColor);
	});

	it('propagates sukta-level attributes to verse leaves', () => {
		const rv: PackageData = {
			...packageData,
			structure: { catalogTree: { '1': { '1': [0, 1, 2, 3] } } },
			annotations: [],
			blockAttributesByUrn: {
				'1:1': { rishi: 'vamadeva', chandas: 'gayatri', devata: 'agni' }
			}
		};
		const index = buildFacetIndex(rv);
		expect(index.types.some((t) => t.id === 'attr:rishi')).toBe(true);
		expect(leafMatchesFacetSelection(
			'1:1:1',
			{ 'attr:devata': new Set(['agni']) },
			index.leafFacetKeys
		)).toBe(true);
	});

	it('paints every leaf in map mode by facet value', () => {
		const index = buildFacetIndex(packageData);
		const colors = buildFacetValueColorMap(index, 'speaker');
		const krishna = paintLeafMapFacet('1:1', 'speaker', index, colors);
		const arjuna = paintLeafMapFacet('1:2', 'speaker', index, colors);
		const unknown = paintLeafMapFacet('9:9', 'speaker', index, colors);
		expect(krishna.valueId).toBe('krishna');
		expect(arjuna.valueId).toBe('arjuna');
		expect(krishna.fill).not.toBe(unknown.fill);
		expect(unknown.valueId).toBeUndefined();
	});

	it('treats stream as a coverage facet with multi-stream leaves', () => {
		const withStreams: PackageData = {
			...packageData,
			streamsByUrn: {
				'1:1': ['mula', 'iast'],
				'1:2': ['mula'],
				'1:3': ['mula', 'iast'],
				'1:4': ['iast']
			}
		};
		const index = buildFacetIndex(withStreams);
		const stream = index.types.find((t) => t.id === 'stream');
		expect(stream?.kind).toBe('coverage');
		expect(isCoverageFacet('stream')).toBe(true);

		expect(leafHasFacetValue('1:1', 'stream', 'iast', index.leafFacetKeys)).toBe(true);
		expect(leafHasFacetValue('1:2', 'stream', 'iast', index.leafFacetKeys)).toBe(false);

		const colors = buildFacetValueColorMap(index, 'stream');
		const iastPresent = paintLeafCoverageFacet('1:1', 'stream', 'iast', index, colors);
		const iastMissing = paintLeafCoverageFacet('1:2', 'stream', 'iast', index, colors);
		expect(iastPresent.valueId).toBe('iast');
		expect(iastMissing.valueId).toBeUndefined();

		expect(paintLeafMapFacet('1:1', 'stream', index, colors).valueId).toBeUndefined();
	});
});
