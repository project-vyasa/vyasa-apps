import { describe, it, expect } from 'vitest';
import {
	annotateNodeLabelToFacetType,
	entityAnnotateBinding,
	graphFacetBindings
} from './graph-annotate';

describe('graph-annotate', () => {
	it('maps annotate value nodes to attr facet types', () => {
		expect(annotateNodeLabelToFacetType('Devata')).toBe('attr:devata');
		expect(annotateNodeLabelToFacetType('Speaker')).toBe('attr:speaker');
		expect(annotateNodeLabelToFacetType('Action')).toBeUndefined();
	});

	it('binds Speaker value rows', () => {
		expect(
			graphFacetBindings({
				urn: '1:1',
				label: 'Speaker',
				attributes: { value: 'krishna' }
			})
		).toEqual([{ typeId: 'attr:speaker', valueId: 'krishna' }]);
	});

	it('does not bind legacy Action rows', () => {
		expect(
			graphFacetBindings({
				urn: '1:1',
				label: 'Action',
				attributes: { speaker: 'krishna' }
			})
		).toEqual([]);
	});

	it('exposes entity binding for reader badges', () => {
		expect(
			entityAnnotateBinding({
				urn: '1:1',
				label: 'Speaker',
				attributes: { value: 'krishna' }
			})
		).toEqual({ facetAttr: 'speaker', entityId: 'krishna' });
	});
});
