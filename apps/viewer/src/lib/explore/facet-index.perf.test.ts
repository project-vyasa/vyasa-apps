import { describe, it, expect } from 'vitest';
import { buildFacetIndex } from './facet-index';
import { assertPerfBudget } from '$lib/viewer/perf-guard';
import type { AnnotationEntry, PackageData } from '$lib/types';

/** RV-scale synthetic fixture (not corpus-specific keys in production code). */
function rvScalePackage(annotationCount: number): PackageData {
	const catalogTree: Record<string, Record<string, number[]>> = {};
	for (let m = 1; m <= 12; m++) {
		const mandala = String(m);
		catalogTree[mandala] = {};
		for (let s = 1; s <= 100; s++) {
			catalogTree[mandala][String(s)] = [0, 9];
		}
	}
	const annotations: AnnotationEntry[] = [];
	for (let i = 0; i < annotationCount; i++) {
		const m = (i % 12) + 1;
		const sukta = (Math.floor(i / 9) % 100) + 1;
		const rik = (i % 9) + 1;
		annotations.push({
			urn: `urn:vyasa:test:${m}:${sukta}:${rik}`,
			label: i % 3 === 0 ? 'Devata' : i % 3 === 1 ? 'Rishi' : 'Chandas',
			attributes: { value: `entity_${i % 200}` }
		});
	}
	return {
		manifest: {
			package_type: 'view',
			catalog_tree: '{}',
			primary_stream: 'samhita',
			global_prefix: 'urn:vyasa:test',
			facet_attributes: '["devata","rishi","chandas"]'
		},
		structure: { catalogTree },
		projections: {},
		annotations
	};
}

describe('facet-index performance guards', () => {
	it('buildFacetIndex stays within CI budget at RV annotation scale', () => {
		const data = rvScalePackage(30_000);
		const t0 = performance.now();
		const index = buildFacetIndex(data);
		const elapsed = performance.now() - t0;
		assertPerfBudget('buildFacetIndex', elapsed);
		expect(index.types.length).toBeGreaterThan(0);
	});
});
