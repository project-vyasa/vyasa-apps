import type { AnnotationEntry, Manifest, VocabularyEntry } from '$lib/types';
import { toRelativeUrn } from '$lib/explore/urn-utils';
import { resolveTemplateContextKeys } from '$lib/explore/facet-config';
import { graphFacetBindings } from '$lib/viewer/graph-annotate';
import {
	buildVocabularyIndex,
	getVocabularyLabel,
	getVocabularyLabelIndexed,
	type VocabularyIndex
} from '$lib/viewer/vocabulary';

/** Resolve entity key → display label for weave templates and explorer facets. */
export function resolveFacetDisplayLabel(
	vocabulary: VocabularyEntry[] | undefined,
	entityKey: string,
	primaryStream?: string,
	activeStream?: string,
	vocabIndex?: VocabularyIndex
): string {
	const stream = activeStream || primaryStream || '';
	if (vocabIndex) {
		return (
			getVocabularyLabelIndexed(vocabIndex, 'entities', entityKey, stream, primaryStream) ||
			getVocabularyLabelIndexed(vocabIndex, 'meters', entityKey, stream, primaryStream) ||
			entityKey
		);
	}
	return (
		getVocabularyLabel(vocabulary, 'entities', entityKey, stream, primaryStream) ||
		getVocabularyLabel(vocabulary, 'meters', entityKey, stream, primaryStream) ||
		entityKey
	);
}

/**
 * Merge graph annotate edges into block_attributes for WASM weave.
 * Leaf-level graph values override parent container attrs for declared template keys.
 * Call once at publication load — not per render.
 */
export function enrichBlockAttributesForWeave(
	blockAttributesByUrn: Record<string, Record<string, string>> | undefined,
	annotations: AnnotationEntry[] | undefined,
	vocabulary: VocabularyEntry[] | undefined,
	manifest: Manifest | undefined,
	globalPrefix: string,
	primaryStream?: string
): Record<string, Record<string, string>> | undefined {
	if (!annotations?.length && !blockAttributesByUrn) {
		return blockAttributesByUrn;
	}

	const templateKeys = resolveTemplateContextKeys(manifest, vocabulary);
	const vocabIndex = buildVocabularyIndex(vocabulary);
	const merged: Record<string, Record<string, string>> = {};

	if (blockAttributesByUrn) {
		for (const [urn, attrs] of Object.entries(blockAttributesByUrn)) {
			merged[urn] = { ...attrs };
		}
	}

	for (const ann of annotations ?? []) {
		const relUrn = toRelativeUrn(ann.urn, globalPrefix);
		for (const { typeId, valueId } of graphFacetBindings(ann)) {
			if (!typeId.startsWith('attr:')) continue;
			const attrKey = typeId.slice('attr:'.length);
			if (templateKeys && !templateKeys.has(attrKey)) continue;

			const displayLabel = resolveFacetDisplayLabel(
				vocabulary,
				valueId,
				primaryStream,
				primaryStream,
				vocabIndex
			);
			if (!merged[relUrn]) merged[relUrn] = {};
			merged[relUrn][attrKey] = displayLabel;
		}
	}

	return Object.keys(merged).length > 0 ? merged : undefined;
}

/** Index annotations by relative URN for O(1) reader gutter lookup. */
export function indexAnnotationsByUrn(
	annotations: AnnotationEntry[] | undefined,
	globalPrefix: string
): Record<string, AnnotationEntry[]> {
	const index: Record<string, AnnotationEntry[]> = {};
	if (!annotations?.length) return index;

	for (const ann of annotations) {
		const relUrn = toRelativeUrn(ann.urn, globalPrefix);
		const keys = new Set<string>([relUrn, ann.urn]);
		if (ann.urn.endsWith(':' + relUrn)) keys.add(ann.urn);
		for (const key of keys) {
			if (!index[key]) index[key] = [];
			index[key].push(ann);
		}
	}
	return index;
}
