import type { PackageData } from '$lib/types';
import { collectLeafUrns, toRelativeUrn, urnCoversLeaf } from '$lib/explore/urn-utils';
import { graphFacetBindings } from '$lib/viewer/graph-annotate';
import { getVocabularyLabel } from '$lib/viewer/vocabulary';

export type NamedSpan = {
	id: string;
	typeId: string;
	typeLabel: string;
	valueId: string;
	label: string;
	containerUrn: string;
	firstLeafUrn: string;
	leafCount: number;
};

export function namedSpanId(typeId: string, valueId: string): string {
	return `${typeId}|${valueId}`;
}

/**
 * Graph annotate on a **container** (not a leaf) covering descendant leaves.
 * Per-leaf facets (speaker, per-rik devata) are not spans.
 */
export function listNamedSpans(
	packageData: PackageData | null,
	labelStream?: string
): NamedSpan[] {
	if (!packageData?.structure?.catalogTree || !packageData.annotations?.length) {
		return [];
	}

	const globalPrefix =
		(packageData.manifest as { prefix?: string; global_prefix?: string }).prefix ||
		(packageData.manifest as { global_prefix?: string }).global_prefix ||
		'';
	const primaryStream = (packageData.manifest as { primary_stream?: string }).primary_stream;
	const chromeStream = labelStream || primaryStream || '';
	const leafUrns = collectLeafUrns(packageData.structure.catalogTree);
	const leafSet = new Set(leafUrns);
	const byId = new Map<string, NamedSpan>();

	for (const ann of packageData.annotations) {
		const containerUrn = toRelativeUrn(ann.urn, globalPrefix);
		if (!containerUrn || leafSet.has(containerUrn)) continue;

		const covered = leafUrns.filter((leaf) => urnCoversLeaf(containerUrn, leaf));
		if (covered.length === 0) continue;

		for (const { typeId, valueId } of graphFacetBindings(ann)) {
			const id = namedSpanId(typeId, valueId);
			const attr = typeId.startsWith('attr:') ? typeId.slice('attr:'.length) : typeId;
			const typeLabel =
				getVocabularyLabel(
					packageData.vocabulary,
					'facets',
					attr,
					chromeStream,
					primaryStream
				) || attr.charAt(0).toUpperCase() + attr.slice(1);
			const label =
				getVocabularyLabel(
					packageData.vocabulary,
					'entities',
					valueId,
					chromeStream,
					primaryStream
				) || valueId;
			const existing = byId.get(id);
			if (existing) {
				if (covered[0] < existing.firstLeafUrn) {
					existing.containerUrn = containerUrn;
					existing.firstLeafUrn = covered[0];
				}
				existing.leafCount = Math.max(existing.leafCount, covered.length);
				continue;
			}
			byId.set(id, {
				id,
				typeId,
				typeLabel,
				valueId,
				label,
				containerUrn,
				firstLeafUrn: covered[0],
				leafCount: covered.length
			});
		}
	}

	return [...byId.values()].sort((a, b) =>
		a.firstLeafUrn < b.firstLeafUrn ? -1 : a.firstLeafUrn > b.firstLeafUrn ? 1 : 0
	);
}

export function findNamedSpan(
	spans: NamedSpan[],
	spanId: string | null | undefined,
	pathUrn: string | null | undefined
): NamedSpan | undefined {
	if (spanId) {
		const fromQuery = spans.find((span) => span.id === spanId || span.valueId === spanId);
		if (fromQuery) return fromQuery;
	}
	if (!pathUrn) return undefined;
	return spans.find((span) => span.containerUrn === pathUrn);
}
