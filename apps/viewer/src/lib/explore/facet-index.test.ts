import { describe, it, expect } from 'vitest';
import { catalogLeafIndices, collectLeafUrns, urnCoversLeaf, urnsReferToSameBlock } from './urn-utils';
import {
	buildFacetIndex,
	buildFacetValueColorMap,
	containerHasSelectedCoverageGaps,
	cornerGradient,
	graphFacetBindings,
	isCoverageFacet,
	leafCoverageGapCornerColors,
	leafMatchesCoverageGap,
	leafMatchesFacetSelection,
	leafFacetCornerColors,
	leafMissingStreamGap,
	leafOrphanWithoutPrimary,
	mapFacetAllowed,
	paintLeafMapFacet,
	relativeFrequency,
	selectedFacetColorMap,
	canSelectCategoricalFacet,
	visibleFacetValues,
	facetHistogramTsv,
	STREAM_ORPHAN_VALUE_ID
} from './facet-index';
import { FACET_PALETTE, FACET_PALETTE_SIZE } from './facet-colors';
import type { PackageData } from '$lib/types';

const SPEAKER_FACET_TYPE = 'attr:speaker';

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
		expect(urnCoversLeaf('4:5', '4:5:1:1')).toBe(true);
		expect(urnCoversLeaf('4:5', '2:1:4:5')).toBe(false);
	});

	it('matches prefix vs relative of the same path, not numeric suffixes', () => {
		expect(urnsReferToSameBlock('urn:vyasa:1:3', '1:3')).toBe(true);
		expect(urnsReferToSameBlock('2:1:4:5', '4:5')).toBe(false);
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
			{ urn: '1:1', label: 'Speaker', attributes: { value: 'krishna' } },
			{ urn: '1:2', label: 'Speaker', attributes: { value: 'arjuna' } },
			{ urn: '1:3', label: 'Speaker', attributes: { value: 'krishna' } },
			{ urn: '1:4', label: 'Speaker', attributes: { value: 'sanjaya' } }
		],
		vocabulary: [
			{ category: 'entities', key: 'krishna', stream_name: 'mula', value: 'Kṛṣṇa' },
			{ category: 'entities', key: 'krishna', stream_name: 'iast', value: 'kṛṣṇa' },
			{ category: 'entities', key: 'arjuna', stream_name: 'mula', value: 'Arjuna' },
			{ category: 'facets', key: 'speaker', stream_name: 'mula', value: 'वक्ता' },
			{ category: 'facets', key: 'speaker', stream_name: 'iast', value: 'Speaker' }
		]
	};

	it('builds speaker facet with leaf counts', () => {
		const index = buildFacetIndex(packageData);
		const speaker = index.types.find((t) => t.id === SPEAKER_FACET_TYPE);
		expect(speaker).toBeDefined();
		expect(speaker!.values.find((v) => v.id === 'krishna')?.count).toBe(2);
		expect(speaker!.values.find((v) => v.id === 'arjuna')?.count).toBe(1);
	});

	it('honors chrome label stream for facet type and values', () => {
		const index = buildFacetIndex(packageData, 'iast');
		const speaker = index.types.find((t) => t.id === SPEAKER_FACET_TYPE);
		expect(speaker?.label).toBe('Speaker');
		expect(speaker?.values.find((v) => v.id === 'krishna')?.label).toBe('kṛṣṇa');
	});

	it('highlights leaves for active facet selection', () => {
		const index = buildFacetIndex(packageData);
		const active = { [SPEAKER_FACET_TYPE]: new Set(['krishna']) };
		expect(leafMatchesFacetSelection('1:1', active, index.leafFacetKeys)).toBe(true);
		expect(leafMatchesFacetSelection('1:2', active, index.leafFacetKeys)).toBe(false);
		expect(leafFacetCornerColors('1:1', active, index, index.leafFacetKeys).length).toBe(1);
	});

	it('uses unique selection colors for each selected filter value', () => {
		const index = buildFacetIndex(packageData);
		const active = { [SPEAKER_FACET_TYPE]: new Set(['krishna', 'sanjaya']) };
		const colorMap = selectedFacetColorMap(active);
		const krishnaColor = leafFacetCornerColors('1:1', active, index, index.leafFacetKeys)[0];
		const sanjayaColor = leafFacetCornerColors('1:4', active, index, index.leafFacetKeys)[0];
		expect(krishnaColor).toBe(colorMap.get(`${SPEAKER_FACET_TYPE}|krishna`));
		expect(sanjayaColor).toBe(colorMap.get(`${SPEAKER_FACET_TYPE}|sanjaya`));
		expect(krishnaColor).not.toBe(sanjayaColor);
	});

	it('propagates sukta-level attributes to verse leaves', () => {
		const rv: PackageData = {
			...packageData,
			vocabulary: packageData.vocabulary?.filter((v) => v.category !== 'facets'),
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
		const colors = buildFacetValueColorMap(index, SPEAKER_FACET_TYPE);
		const krishna = paintLeafMapFacet('1:1', SPEAKER_FACET_TYPE, index, colors);
		const arjuna = paintLeafMapFacet('1:2', SPEAKER_FACET_TYPE, index, colors);
		const unknown = paintLeafMapFacet('9:9', SPEAKER_FACET_TYPE, index, colors);
		expect(krishna.valueId).toBe('krishna');
		expect(arjuna.valueId).toBe('arjuna');
		expect(krishna.fill).not.toBe(unknown.fill);
		expect(unknown.valueId).toBeUndefined();
	});

	it('lists complete stream coverage with zero gap counts', () => {
		const complete: PackageData = {
			...packageData,
			streams: [
				{ id: 'mula', label: 'Mula', count: 4 },
				{ id: 'iast', label: 'Iast', count: 4 }
			],
			streamsByUrn: {
				'1:1': ['mula', 'iast'],
				'1:2': ['mula', 'iast'],
				'1:3': ['mula', 'iast'],
				'1:4': ['mula', 'iast']
			}
		};
		const index = buildFacetIndex(complete);
		const stream = index.types.find((t) => t.id === 'stream');
		expect(stream?.values.find((v) => v.id === 'iast')?.count).toBe(0);
	});

	it('treats stream as a gap coverage facet with multi-select corner colors', () => {
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
		expect(stream?.values.find((v) => v.id === 'iast')?.count).toBe(1);
		expect(stream?.values.find((v) => v.id === STREAM_ORPHAN_VALUE_ID)?.count).toBe(1);

		expect(
			leafMissingStreamGap('1:2', 'iast', 'mula', withStreams.streamsByUrn!)
		).toBe(true);
		expect(
			leafMissingStreamGap('1:1', 'iast', 'mula', withStreams.streamsByUrn!)
		).toBe(false);
		expect(
			leafOrphanWithoutPrimary('1:4', 'mula', withStreams.streamsByUrn!)
		).toBe(true);
		expect(
			leafOrphanWithoutPrimary('1:1', 'mula', withStreams.streamsByUrn!)
		).toBe(false);

		const colors = buildFacetValueColorMap(index, 'stream');
		const gapCorners = leafCoverageGapCornerColors('1:2', ['iast'], index);
		expect(gapCorners).toEqual([colors.get('iast')]);
		const noGap = leafCoverageGapCornerColors('1:1', ['iast'], index);
		expect(noGap).toEqual([]);

		const dual = leafCoverageGapCornerColors(
			'1:2',
			['iast', STREAM_ORPHAN_VALUE_ID],
			index
		);
		expect(dual.length).toBe(1);
		expect(cornerGradient(dual)).toBe(colors.get('iast'));

		expect(leafMatchesCoverageGap('1:4', STREAM_ORPHAN_VALUE_ID, index)).toBe(true);
		expect(paintLeafMapFacet('1:1', 'stream', index, colors).valueId).toBeUndefined();

		const speakerIndex = index.types.findIndex((t) => t.id === SPEAKER_FACET_TYPE);
		const streamIndex = index.types.findIndex((t) => t.id === 'stream');
		expect(streamIndex).toBeGreaterThan(speakerIndex);
	});

	it('detects coverage gaps within a container', () => {
		const withStreams: PackageData = {
			...packageData,
			streamsByUrn: {
				'1:1': ['mula', 'iast'],
				'1:2': ['mula'],
				'2:1': ['mula', 'iast']
			}
		};
		const index = buildFacetIndex(withStreams);
		expect(
			containerHasSelectedCoverageGaps('1', [1, 2], new Set(['iast']), index)
		).toBe(true);
		expect(
			containerHasSelectedCoverageGaps('2', [1], new Set(['iast']), index)
		).toBe(false);
	});

	describe('graph annotate facets', () => {
		const mixedSuktaTree = { '1': { '24': [0, 1, 2, 3] } };

		it('indexes per-rik devata from annotate value nodes', () => {
			const data: PackageData = {
				manifest: { package_type: 'view', catalog_tree: '{}', primary_stream: 'mula' },
				structure: { catalogTree: mixedSuktaTree },
				projections: {},
				annotations: [
					{ urn: '1:24:1', label: 'Devata', attributes: { value: 'prajapati' } },
					{ urn: '1:24:2', label: 'Devata', attributes: { value: 'agni' } },
					{ urn: '1:24:3', label: 'Devata', attributes: { value: 'savitri' } }
				],
				vocabulary: [
					{ category: 'entities', key: 'agni', stream_name: 'mula', value: 'अग्निः' }
				]
			};
			const index = buildFacetIndex(data);
			const devata = index.types.find((t) => t.id === 'attr:devata');
			expect(devata).toBeDefined();
			expect(devata!.values.length).toBe(3);
			expect(devata!.values.find((v) => v.id === 'agni')?.label).toBe('अग्निः');
			expect(
				leafMatchesFacetSelection(
					'1:24:2',
					{ 'attr:devata': new Set(['agni']) },
					index.leafFacetKeys
				)
			).toBe(true);
			expect(
				leafMatchesFacetSelection(
					'1:24:1',
					{ 'attr:devata': new Set(['agni']) },
					index.leafFacetKeys
				)
			).toBe(false);
		});

		it('paints only descendant leaves for a container annotate (no suffix collision)', () => {
			const tree = {
				'2': {
					'1': {
						'4': { slots: [0], leaves: [[5, 5]] as [number, number][] }
					}
				},
				'4': {
					'5': {
						'1': { slots: [0], leaves: [[1, 2]] as [number, number][] }
					}
				}
			};
			const data: PackageData = {
				manifest: { package_type: 'view', catalog_tree: '{}', primary_stream: 'mula' },
				structure: { catalogTree: tree },
				projections: {},
				annotations: [
					{ urn: '4:5:0:0', label: 'Featured', attributes: { value: 'span_a' } }
				]
			};
			const index = buildFacetIndex(data);
			const featured = index.types.find((t) => t.id === 'attr:featured');
			expect(featured?.values.find((v) => v.id === 'span_a')?.count).toBe(2);
			expect(
				leafMatchesFacetSelection(
					'4:5:1:1',
					{ 'attr:featured': new Set(['span_a']) },
					index.leafFacetKeys
				)
			).toBe(true);
			expect(
				leafMatchesFacetSelection(
					'2:1:4:5',
					{ 'attr:featured': new Set(['span_a']) },
					index.leafFacetKeys
				)
			).toBe(false);
		});

		it('supports arbitrary future annotate keys without corpus constants', () => {
			const data: PackageData = {
				manifest: { package_type: 'view', catalog_tree: '{}', primary_stream: 'mula' },
				structure: { catalogTree: { '1': [0, 1] } },
				projections: {},
				annotations: [{ urn: '1:1', label: 'Melody', attributes: { value: 'gaurari' } }]
			};
			const index = buildFacetIndex(data);
			expect(index.types.some((t) => t.id === 'attr:melody')).toBe(true);
		});

		it('prefers graph annotate over sukta-level block attributes on the same leaf', () => {
			const data: PackageData = {
				manifest: { package_type: 'view', catalog_tree: '{}', primary_stream: 'mula' },
				structure: { catalogTree: { '1': { '1': [0, 1, 2] } } },
				projections: {},
				annotations: [
					{ urn: '1:1:1', label: 'Devata', attributes: { value: 'agni' } }
				],
				blockAttributesByUrn: {
					'1:1': { devata: 'soma', title: 'Sukta 1' }
				}
			};
			const index = buildFacetIndex(data);
			expect(
				leafMatchesFacetSelection(
					'1:1:1',
					{ 'attr:devata': new Set(['agni']) },
					index.leafFacetKeys
				)
			).toBe(true);
			expect(
				leafMatchesFacetSelection(
					'1:1:2',
					{ 'attr:devata': new Set(['soma']) },
					index.leafFacetKeys
				)
			).toBe(true);
			expect(index.types.find((t) => t.id === 'attr:devata')?.values).toHaveLength(2);
		});

		it('does not treat structural block metadata as facets', () => {
			const data: PackageData = {
				manifest: { package_type: 'view', catalog_tree: '{}', primary_stream: 'mula' },
				structure: { catalogTree: { '1': [0, 1] } },
				projections: {},
				annotations: [],
				blockAttributesByUrn: {
					'1': { title: 'Mandala 1', mandala: '1', devata: 'agni' }
				}
			};
			const index = buildFacetIndex(data);
			expect(index.types.some((t) => t.id === 'attr:title')).toBe(false);
			expect(index.types.some((t) => t.id === 'attr:mandala')).toBe(false);
			expect(index.types.some((t) => t.id === 'attr:devata')).toBe(true);
		});

		it('binds only annotate Speaker value nodes', () => {
			const action = graphFacetBindings({
				urn: '1:1',
				label: 'Action',
				attributes: { speaker: 'krishna' }
			});
			const annotate = graphFacetBindings({
				urn: '1:2',
				label: 'Speaker',
				attributes: { value: 'arjuna' }
			});
			expect(action).toEqual([]);
			expect(annotate).toEqual([{ typeId: SPEAKER_FACET_TYPE, valueId: 'arjuna' }]);
		});

		it('respects manifest facet_attributes for block metadata only', () => {
			const data: PackageData = {
				manifest: {
					package_type: 'view',
					catalog_tree: '{}',
					primary_stream: 'mula',
					facet_attributes: '["devata"]'
				},
				structure: { catalogTree: { '1': { '1': [0, 2] } } },
				projections: {},
				annotations: [{ urn: '1:1:1', label: 'Rishi', attributes: { value: 'vamadeva' } }],
				blockAttributesByUrn: {
					'1:1': { rishi: 'vamadeva', devata: 'agni' }
				}
			};
			const index = buildFacetIndex(data);
			expect(index.types.some((t) => t.id === 'attr:rishi')).toBe(true);
			expect(
				leafMatchesFacetSelection(
					'1:1:2',
					{ 'attr:devata': new Set(['agni']) },
					index.leafFacetKeys
				)
			).toBe(true);
			expect(
				leafMatchesFacetSelection(
					'1:1:2',
					{ 'attr:rishi': new Set(['vamadeva']) },
					index.leafFacetKeys
				)
			).toBe(false);
		});
	});
});

describe('facet selection palette', () => {
	const values = Array.from({ length: 12 }, (_, i) => ({
		id: `v${i + 1}`,
		label: `Value ${i + 1}`,
		count: 12 - i
	}));

	it('assigns unique colors and does not wrap past the palette', () => {
		const selected: Record<string, Set<string>> = {
			'attr:rishi': new Set(values.slice(0, 9).map((v) => v.id))
		};
		const colors = selectedFacetColorMap(selected);
		expect(colors.size).toBe(FACET_PALETTE_SIZE);
		expect(new Set(colors.values()).size).toBe(FACET_PALETTE_SIZE);
		expect(colors.get('attr:rishi|v9')).toBeUndefined();
	});

	it('caps concurrent categorical selections at the palette size', () => {
		const eight: Record<string, Set<string>> = {
			'attr:rishi': new Set(values.slice(0, 8).map((v) => v.id))
		};
		expect(canSelectCategoricalFacet(eight, 'attr:rishi', 'v1')).toBe(true);
		expect(canSelectCategoricalFacet(eight, 'attr:rishi', 'v9')).toBe(false);
	});

	it('pins selected values that fall outside top-k', () => {
		const shown = visibleFacetValues(values, new Set(['v12']), 8, '');
		expect(shown.pinned.map((v) => v.id)).toContain('v12');
		expect(shown.hiddenCount).toBe(3);
		expect(shown.more.map((v) => v.id)).not.toContain('v12');
	});

	it('filters More… results by label', () => {
		const shown = visibleFacetValues(values, undefined, 8, 'value 10');
		expect(shown.more.map((v) => v.id)).toEqual(['v10']);
	});

	it('writes a histogram TSV with shares', () => {
		const tsv = facetHistogramTsv({
			id: 'attr:rishi',
			label: 'Rishi',
			kind: 'categorical',
			values: [
				{ id: 'a', label: 'A', count: 3 },
				{ id: 'b', label: 'B', count: 1 }
			]
		});
		expect(tsv.startsWith('id\tlabel\tcount\tshare\n')).toBe(true);
		expect(tsv).toContain('a\tA\t3\t0.7500');
		expect(tsv).toContain('b\tB\t1\t0.2500');
	});

	it('hides Map when a facet has more values than the palette', () => {
		expect(
			mapFacetAllowed({
				id: 'attr:rishi',
				label: 'Rishi',
				kind: 'categorical',
				values
			})
		).toBe(false);
		expect(
			mapFacetAllowed({
				id: 'attr:featured',
				label: 'Featured',
				kind: 'categorical',
				values: values.slice(0, 2)
			})
		).toBe(true);
	});

	it('uses relative frequency against the facet max, not the total', () => {
		expect(relativeFrequency(4, 8)).toBe(0.5);
		expect(relativeFrequency(8, 8)).toBe(1);
		expect(relativeFrequency(1, 0)).toBe(0);
	});

	it('splits at most two colors instead of a four-way conic', () => {
		const fill = cornerGradient([FACET_PALETTE[0], FACET_PALETTE[1], FACET_PALETTE[2]]);
		expect(fill).toContain('linear-gradient');
		expect(fill).not.toContain('conic-gradient');
	});
});
