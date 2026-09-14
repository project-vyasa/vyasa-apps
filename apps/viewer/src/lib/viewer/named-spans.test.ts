import { describe, expect, it } from 'vitest';
import type { PackageData } from '$lib/types';
import { findNamedSpan, listNamedSpans } from './named-spans';

const fourLevelTree = {
	'2': {
		'1': {
			'4': { slots: [0], leaves: [[5, 5]] as [number, number][] }
		}
	},
	'4': {
		'5': {
			'1': { slots: [0], leaves: [[1, 2]] as [number, number][] }
		},
		'7': {
			'1': { slots: [0], leaves: [[1, 3]] as [number, number][] }
		}
	}
};

function pkg(annotations: PackageData['annotations'], tree = fourLevelTree): PackageData {
	return {
		manifest: { package_type: 'view', catalog_tree: '{}', primary_stream: 'mula' },
		structure: { catalogTree: tree },
		projections: {},
		annotations,
		vocabulary: [
			{ category: 'entities', key: 'span_a', stream_name: 'mula', value: 'Span A' },
			{ category: 'facets', key: 'featured', stream_name: 'mula', value: 'Featured' }
		]
	};
}

describe('listNamedSpans', () => {
	it('lists container annotate as spans and ignores suffix-colliding leaves', () => {
		const spans = listNamedSpans(
			pkg([
				{ urn: '4:5:0:0', label: 'Featured', attributes: { value: 'span_a' } },
				{ urn: '4:7', label: 'Featured', attributes: { value: 'span_b' } }
			])
		);
		expect(spans.map((s) => s.valueId)).toEqual(['span_a', 'span_b']);
		expect(spans[0].containerUrn).toBe('4:5');
		expect(spans[0].firstLeafUrn).toBe('4:5:1:1');
		expect(spans[0].leafCount).toBe(2);
		expect(spans[0].label).toBe('Span A');
		expect(spans[0].typeLabel).toBe('Featured');
		expect(spans[1].leafCount).toBe(3);
	});

	it('does not list per-leaf facets as spans', () => {
		const spans = listNamedSpans(
			pkg(
				[{ urn: '1:1', label: 'Speaker', attributes: { value: 'krishna' } }],
				{ '1': [0, 1, 2] }
			)
		);
		expect(spans).toEqual([]);
	});

	it('hides chrome when there are no container annotates', () => {
		expect(listNamedSpans(pkg([]))).toEqual([]);
	});

	it('resolves span from query id or container path', () => {
		const spans = listNamedSpans(
			pkg([{ urn: '4:5', label: 'Featured', attributes: { value: 'span_a' } }])
		);
		expect(findNamedSpan(spans, spans[0].id, '1:1')?.valueId).toBe('span_a');
		expect(findNamedSpan(spans, null, '4:5')?.valueId).toBe('span_a');
		expect(findNamedSpan(spans, 'missing', '9:9')).toBeUndefined();
	});
});
