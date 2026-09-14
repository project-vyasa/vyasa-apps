import { describe, expect, it } from 'vitest';
import type { AnnotationEntry, Manifest } from '$lib/types';
import {
	enrichBlockAttributesForWeave,
	indexAnnotationsByUrn,
	annotationsCoveringUrn,
	resolveFacetDisplayLabel
} from './graph-weave-context';

describe('resolveFacetDisplayLabel', () => {
	it('resolves entity keys via vocabulary', () => {
		const label = resolveFacetDisplayLabel(
			[
				{
					category: 'entities',
					key: 'agni',
					stream_name: 'samhita',
					value: 'अग्निः'
				}
			],
			'agni',
			'samhita'
		);
		expect(label).toBe('अग्निः');
	});
});

describe('enrichBlockAttributesForWeave', () => {
	const manifest: Manifest = {
		package_type: 'view',
		catalog_tree: '{}',
		primary_stream: 'samhita',
		facet_attributes: '["devata","rishi","chandas"]'
	};

	const vocabulary = [
		{
			category: 'entities',
			key: 'agni',
			stream_name: 'samhita',
			value: 'अग्निः'
		},
		{
			category: 'entities',
			key: 'madhuchandas',
			stream_name: 'samhita',
			value: 'मधुच्छन्दा'
		}
	];

	it('injects per-leaf graph devata for mixed suktas', () => {
		const annotations: AnnotationEntry[] = [
			{
				urn: 'urn:vyasa:rigveda:01:024:002',
				label: 'Devata',
				attributes: { value: 'agni' }
			}
		];
		const attrs = enrichBlockAttributesForWeave(
			{ '01:024': { title: 'Sukta 24' } },
			annotations,
			vocabulary,
			manifest,
			'urn:vyasa:rigveda',
			'samhita'
		);
		expect(attrs?.['01:024:002']?.devata).toBe('अग्निः');
		expect(attrs?.['01:024']?.title).toBe('Sukta 24');
	});

	it('graph leaf values override parent block_attributes for same key', () => {
		const annotations: AnnotationEntry[] = [
			{
				urn: 'urn:vyasa:rigveda:01:001:002',
				label: 'Devata',
				attributes: { value: 'agni' }
			}
		];
		const attrs = enrichBlockAttributesForWeave(
			{
				'01:001': { devata: 'parent-deva' },
				'01:001:002': { devata: 'stale-leaf' }
			},
			annotations,
			vocabulary,
			manifest,
			'urn:vyasa:rigveda',
			'samhita'
		);
		expect(attrs?.['01:001:002']?.devata).toBe('अग्निः');
	});

	it('respects declared template keys only', () => {
		const annotations: AnnotationEntry[] = [
			{
				urn: 'urn:vyasa:rigveda:01:024:002',
				label: 'Devata',
				attributes: { value: 'agni' }
			},
			{
				urn: 'urn:vyasa:rigveda:01:024:002',
				label: 'Melody',
				attributes: { value: 'raga_x' }
			}
		];
		const attrs = enrichBlockAttributesForWeave(
			{},
			annotations,
			vocabulary,
			manifest,
			'urn:vyasa:rigveda',
			'samhita'
		);
		expect(attrs?.['01:024:002']?.devata).toBe('अग्निः');
		expect(attrs?.['01:024:002']?.melody).toBeUndefined();
	});
});

describe('annotationsCoveringUrn', () => {
	const featured = {
		urn: '4:5:0:0',
		label: 'Featured',
		attributes: { value: 'span_a' }
	};
	const speaker = {
		urn: '4:5:1:1',
		label: 'Speaker',
		attributes: { value: 'krishna' }
	};

	it('applies a container annotate to descendant leaves only', () => {
		const index = indexAnnotationsByUrn([featured, speaker], 'urn:vyasa:pkg');
		const onLeaf = annotationsCoveringUrn('4:5:1:1', index, 'urn:vyasa:pkg', undefined);
		expect(onLeaf).toEqual(expect.arrayContaining([featured, speaker]));
		const colliding = annotationsCoveringUrn('2:1:4:5', index, 'urn:vyasa:pkg', undefined);
		expect(colliding).toEqual([]);
	});
});
