import type { AnnotationEntry, PackageData, VocabularyEntry } from '$lib/types';
import { getVocabularyLabel } from '$lib/viewer/vocabulary';
import { facetColor, MAP_UNMATCHED_FILL } from './facet-colors';
import {
	collectLeafUrns,
	urnCoversLeaf,
	urnsReferToSameBlock,
	toRelativeUrn
} from './urn-utils';

export type FacetSelection = Record<string, Set<string>>;

export interface FacetValue {
	id: string;
	label: string;
	count: number;
}

export interface FacetType {
	id: string;
	label: string;
	/** categorical = one value paints the block; coverage = pick one value to show presence */
	kind: 'categorical' | 'coverage';
	values: FacetValue[];
}

export interface FacetIndex {
	types: FacetType[];
	/** leaf URN → encoded facet keys */
	leafFacetKeys: Map<string, Set<string>>;
}

function facetKind(typeId: string): 'categorical' | 'coverage' {
	return typeId === 'stream' ? 'coverage' : 'categorical';
}

export function isCoverageFacet(typeId: string): boolean {
	return facetKind(typeId) === 'coverage';
}

const ATTRIBUTE_FACET_KEYS = new Set(['rishi', 'chandas', 'devata', 'deity', 'meter']);

function encodeFacetKey(typeId: string, valueId: string): string {
	return `${typeId}|${valueId.toLowerCase()}`;
}

function decodeFacetKey(key: string): { typeId: string; valueId: string } {
	const i = key.indexOf('|');
	return { typeId: key.slice(0, i), valueId: key.slice(i + 1) };
}

function addToLeafMap(
	map: Map<string, Set<string>>,
	leafUrn: string,
	key: string
): void {
	if (!map.has(leafUrn)) map.set(leafUrn, new Set());
	map.get(leafUrn)!.add(key);
}

function applyFacetToLeaves(
	leafUrns: string[],
	sourceUrn: string,
	typeId: string,
	valueId: string,
	map: Map<string, Set<string>>
): void {
	const key = encodeFacetKey(typeId, valueId);
	for (const leaf of leafUrns) {
		if (urnCoversLeaf(sourceUrn, leaf) || urnsReferToSameBlock(sourceUrn, leaf)) {
			addToLeafMap(map, leaf, key);
		}
	}
}

function resolveEntityLabel(
	vocabulary: VocabularyEntry[] | undefined,
	entityId: string,
	primaryStream?: string
): string {
	return (
		getVocabularyLabel(vocabulary, 'entities', entityId, primaryStream || '', primaryStream) ||
		entityId
	);
}

function resolveSpeakerLabel(
	vocabulary: VocabularyEntry[] | undefined,
	primaryStream?: string
): string {
	return (
		getVocabularyLabel(vocabulary, 'actions', 'speaker', primaryStream || '', primaryStream) ||
		'Speaker'
	);
}

function ingestAnnotationFacets(
	annotations: AnnotationEntry[],
	leafUrns: string[],
	map: Map<string, Set<string>>
): void {
	for (const ann of annotations) {
		const relUrn = toRelativeUrn(ann.urn);
		if (ann.label === 'Action' && ann.attributes) {
			const speakerRaw =
				(ann.attributes.speaker as string) || (ann.attributes.action as string) || '';
			if (!speakerRaw) continue;
			applyFacetToLeaves(leafUrns, relUrn, 'speaker', speakerRaw, map);
		} else if (ann.label === 'Attribute' && ann.attributes) {
			for (const [attrKey, rawVal] of Object.entries(ann.attributes)) {
				if (rawVal == null || rawVal === '') continue;
				applyFacetToLeaves(leafUrns, relUrn, `attr:${attrKey.toLowerCase()}`, String(rawVal), map);
			}
		}
	}
}

function ingestBlockAttributeFacets(
	blockAttributesByUrn: Record<string, Record<string, string>>,
	leafUrns: string[],
	map: Map<string, Set<string>>
): void {
	for (const [sourceUrn, attrs] of Object.entries(blockAttributesByUrn)) {
		for (const [attrKey, rawVal] of Object.entries(attrs)) {
			if (attrKey === 'title' || rawVal == null || rawVal === '') continue;
			const keyLower = attrKey.toLowerCase();
			const shortKey = keyLower.includes('.') ? keyLower.split('.').pop()! : keyLower;
			if (
				!ATTRIBUTE_FACET_KEYS.has(shortKey) &&
				!keyLower.endsWith('.rishi') &&
				!keyLower.endsWith('.chandas') &&
				!keyLower.endsWith('.devata')
			) {
				continue;
			}
			applyFacetToLeaves(leafUrns, sourceUrn, `attr:${shortKey}`, String(rawVal), map);
		}
	}
}

function ingestStreamFacets(
	streamsByUrn: Record<string, string[]>,
	leafUrns: string[],
	map: Map<string, Set<string>>
): void {
	for (const leaf of leafUrns) {
		for (const streamId of streamsByUrn[leaf] || []) {
			addToLeafMap(map, leaf, encodeFacetKey('stream', streamId));
		}
	}
}

function aggregateTypes(
	leafFacetKeys: Map<string, Set<string>>,
	vocabulary: VocabularyEntry[] | undefined,
	primaryStream: string | undefined
): FacetType[] {
	const typeMap = new Map<string, Map<string, number>>();

	for (const keys of leafFacetKeys.values()) {
		for (const encoded of keys) {
			const { typeId, valueId } = decodeFacetKey(encoded);
			if (!typeMap.has(typeId)) typeMap.set(typeId, new Map());
			const values = typeMap.get(typeId)!;
			values.set(valueId, (values.get(valueId) || 0) + 1);
		}
	}

	const types: FacetType[] = [];
	for (const [typeId, values] of typeMap) {
		const facetValues: FacetValue[] = Array.from(values.entries())
			.map(([id, count]) => ({
				id,
				label: labelForFacetValue(typeId, id, vocabulary, primaryStream),
				count
			}))
			.sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
		types.push({
			id: typeId,
			label: labelForFacetType(typeId, vocabulary, primaryStream),
			kind: facetKind(typeId),
			values: facetValues
		});
	}

	return types.sort((a, b) => a.label.localeCompare(b.label));
}

function labelForFacetType(
	typeId: string,
	vocabulary: VocabularyEntry[] | undefined,
	primaryStream?: string
): string {
	if (typeId === 'speaker') return resolveSpeakerLabel(vocabulary, primaryStream);
	if (typeId === 'stream') return 'Stream';
	if (typeId.startsWith('attr:')) {
		const attr = typeId.slice('attr:'.length);
		return attr.charAt(0).toUpperCase() + attr.slice(1);
	}
	return typeId;
}

function labelForFacetValue(
	typeId: string,
	valueId: string,
	vocabulary: VocabularyEntry[] | undefined,
	primaryStream?: string
): string {
	if (typeId === 'speaker') {
		return resolveEntityLabel(vocabulary, valueId, primaryStream);
	}
	if (typeId === 'stream') {
		return valueId.charAt(0).toUpperCase() + valueId.slice(1);
	}
	return valueId;
}

/** Display label for a facet value (from built index). */
export function facetValueLabel(facetIndex: FacetIndex, typeId: string, valueId: string): string {
	const facetType = facetIndex.types.find((t) => t.id === typeId);
	return facetType?.values.find((v) => v.id === valueId)?.label ?? valueId;
}

export function buildFacetValueColorMap(facetIndex: FacetIndex, typeId: string): Map<string, string> {
	const facetType = facetIndex.types.find((t) => t.id === typeId);
	const map = new Map<string, string>();
	if (!facetType) return map;
	facetType.values.forEach((value, index) => {
		map.set(value.id, facetColor(index));
	});
	return map;
}

export function leafHasFacetValue(
	leafUrn: string,
	typeId: string,
	valueId: string,
	leafFacetKeys: Map<string, Set<string>>
): boolean {
	return leafFacetKeys.get(leafUrn)?.has(encodeFacetKey(typeId, valueId)) ?? false;
}

export function leafValueForFacetType(
	leafUrn: string,
	typeId: string,
	leafFacetKeys: Map<string, Set<string>>
): string | undefined {
	const keys = leafFacetKeys.get(leafUrn);
	if (!keys) return undefined;
	for (const encoded of keys) {
		const { typeId: t, valueId } = decodeFacetKey(encoded);
		if (t === typeId) return valueId;
	}
	return undefined;
}

export interface LeafMapPaint {
	fill: string;
	valueId?: string;
	label?: string;
}

/** Paint presence/absence for coverage facets (e.g. one stream at a time). */
export function paintLeafCoverageFacet(
	leafUrn: string,
	typeId: string,
	valueId: string,
	facetIndex: FacetIndex,
	colorMap: Map<string, string>
): LeafMapPaint {
	const present = leafHasFacetValue(leafUrn, typeId, valueId, facetIndex.leafFacetKeys);
	if (!present) {
		return { fill: MAP_UNMATCHED_FILL };
	}
	return {
		fill: colorMap.get(valueId) ?? MAP_UNMATCHED_FILL,
		valueId,
		label: facetValueLabel(facetIndex, typeId, valueId)
	};
}

/** Paint every leaf by the active map facet's value (full-coverage mode). */
export function paintLeafMapFacet(
	leafUrn: string,
	mapFacetTypeId: string,
	facetIndex: FacetIndex,
	colorMap: Map<string, string>
): LeafMapPaint {
	if (isCoverageFacet(mapFacetTypeId)) {
		return { fill: MAP_UNMATCHED_FILL };
	}
	const valueId = leafValueForFacetType(leafUrn, mapFacetTypeId, facetIndex.leafFacetKeys);
	if (!valueId) {
		return { fill: MAP_UNMATCHED_FILL };
	}
	return {
		fill: colorMap.get(valueId) ?? MAP_UNMATCHED_FILL,
		valueId,
		label: facetValueLabel(facetIndex, mapFacetTypeId, valueId)
	};
}

export function buildFacetIndex(
	packageData: PackageData | null,
	labelStream?: string
): FacetIndex {
	const empty: FacetIndex = { types: [], leafFacetKeys: new Map() };
	if (!packageData?.structure?.catalogTree) return empty;

	const primaryStream = (packageData.manifest as { primary_stream?: string }).primary_stream;
	const chromeStream = labelStream || primaryStream;
	const leafUrns = collectLeafUrns(packageData.structure.catalogTree);
	const leafFacetKeys = new Map<string, Set<string>>();

	if (packageData.annotations?.length) {
		ingestAnnotationFacets(packageData.annotations, leafUrns, leafFacetKeys);
	}
	if (packageData.blockAttributesByUrn) {
		ingestBlockAttributeFacets(packageData.blockAttributesByUrn, leafUrns, leafFacetKeys);
	}
	if (packageData.streamsByUrn) {
		ingestStreamFacets(packageData.streamsByUrn, leafUrns, leafFacetKeys);
	}

	return {
		types: aggregateTypes(leafFacetKeys, packageData.vocabulary, chromeStream),
		leafFacetKeys
	};
}

export function leafMatchesFacetSelection(
	leafUrn: string,
	activeFacets: FacetSelection,
	leafFacetKeys: Map<string, Set<string>>
): boolean {
	if (Object.keys(activeFacets).length === 0) return false;
	const leafKeys = leafFacetKeys.get(leafUrn);
	if (!leafKeys) return false;
	for (const [typeId, valueIds] of Object.entries(activeFacets)) {
		for (const valueId of valueIds) {
			if (leafKeys.has(encodeFacetKey(typeId, valueId))) return true;
		}
	}
	return false;
}

/** Assign legend colors for active filter selections (up to four corner cues). */
export function leafFacetCornerColors(
	leafUrn: string,
	activeFacets: FacetSelection,
	facetIndex: FacetIndex,
	leafFacetKeys: Map<string, Set<string>>
): string[] {
	const colors: string[] = [];
	for (const [typeId, valueIds] of Object.entries(activeFacets)) {
		if (isCoverageFacet(typeId)) continue;
		const colorMap = buildFacetValueColorMap(facetIndex, typeId);
		for (const valueId of valueIds) {
			if (leafFacetKeys.get(leafUrn)?.has(encodeFacetKey(typeId, valueId))) {
				const color = colorMap.get(valueId);
				if (color) colors.push(color);
				if (colors.length >= 4) return colors;
			}
		}
	}
	return colors;
}

export function cornerGradient(colors: string[]): string | undefined {
	if (colors.length === 0) return undefined;
	if (colors.length === 1) return colors[0];
	if (colors.length === 2) {
		return `linear-gradient(135deg, ${colors[0]} 50%, ${colors[1]} 50%)`;
	}
	if (colors.length === 3) {
		return `conic-gradient(from 135deg, ${colors[0]} 0deg 120deg, ${colors[1]} 120deg 240deg, ${colors[2]} 240deg 360deg)`;
	}
	return `conic-gradient(from 225deg, ${colors[0]} 0deg 90deg, ${colors[1]} 90deg 180deg, ${colors[2]} 180deg 270deg, ${colors[3]} 270deg 360deg)`;
}
