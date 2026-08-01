import type { AnnotationEntry, PackageData, VocabularyEntry } from '$lib/types';
import { getVocabularyLabel } from '$lib/viewer/vocabulary';
import { graphFacetBindings } from '$lib/viewer/graph-annotate';
import { resolveFacetConfig, shouldIndexBlockAttributeKey } from './facet-config';
import { facetColor, MAP_UNMATCHED_FILL } from './facet-colors';
import {
	collectLeafUrns,
	urnCoversLeaf,
	urnsReferToSameBlock,
	toRelativeUrn
} from './urn-utils';

export type FacetSelection = Record<string, Set<string>>;

/** Max concurrent stream-gap selections in explore coverage mode. */
export const STREAM_COVERAGE_MAX = 2;

/** Leaves with non-primary stream content but no primary stream block. */
export const STREAM_ORPHAN_VALUE_ID = '_orphan_primary';

export interface FacetValue {
	id: string;
	label: string;
	count: number;
}

export interface FacetType {
	id: string;
	label: string;
	/** categorical = one value paints the block; coverage = gap highlights vs primary */
	kind: 'categorical' | 'coverage';
	values: FacetValue[];
}

export interface FacetIndex {
	types: FacetType[];
	/** leaf URN → encoded facet keys (categorical facets only) */
	leafFacetKeys: Map<string, Set<string>>;
	primaryStream?: string;
	streamsByUrn?: Record<string, string[]>;
}

function facetKind(typeId: string): 'categorical' | 'coverage' {
	return typeId === 'stream' ? 'coverage' : 'categorical';
}

export function isCoverageFacet(typeId: string): boolean {
	return facetKind(typeId) === 'coverage';
}

export { annotateNodeLabelToFacetType, graphFacetBindings } from '$lib/viewer/graph-annotate';

/** Block metadata keys that are navigation structure, not explorer facets. */
const BLOCK_ATTRIBUTE_SKIP_KEYS = new Set([
	'title',
	'id',
	'mandala',
	'sukta',
	'chapter',
	'verse',
	'hymn',
	'book',
	'section',
	'adhyaya',
	'sloka'
]);

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
	map: Map<string, Set<string>>,
	options?: { skipLeavesWithType?: boolean }
): void {
	const key = encodeFacetKey(typeId, valueId);
	for (const leaf of leafUrns) {
		if (!urnCoversLeaf(sourceUrn, leaf) && !urnsReferToSameBlock(sourceUrn, leaf)) {
			continue;
		}
		if (options?.skipLeavesWithType && leafHasFacetType(leaf, typeId, map)) {
			continue;
		}
		addToLeafMap(map, leaf, key);
	}
}

function leafHasFacetType(
	leafUrn: string,
	typeId: string,
	map: Map<string, Set<string>>
): boolean {
	const keys = map.get(leafUrn);
	if (!keys) return false;
	for (const encoded of keys) {
		if (decodeFacetKey(encoded).typeId === typeId) return true;
	}
	return false;
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

function ingestAnnotationFacets(
	annotations: AnnotationEntry[],
	leafUrns: string[],
	map: Map<string, Set<string>>,
	globalPrefix = ''
): void {
	const leafSet = new Set(leafUrns);
	for (const ann of annotations) {
		const relUrn = toRelativeUrn(ann.urn, globalPrefix);
		for (const { typeId, valueId } of graphFacetBindings(ann)) {
			if (leafSet.has(relUrn)) {
				addToLeafMap(map, relUrn, encodeFacetKey(typeId, valueId));
				continue;
			}
			// Container-scoped notes / legacy anchors — rare, small cardinality
			applyFacetToLeaves(leafUrns, relUrn, typeId, valueId, map);
		}
	}
}

function ingestBlockAttributeFacets(
	blockAttributesByUrn: Record<string, Record<string, string>>,
	leafUrns: string[],
	map: Map<string, Set<string>>,
	facetConfig: ReturnType<typeof resolveFacetConfig>
): void {
	for (const [sourceUrn, attrs] of Object.entries(blockAttributesByUrn)) {
		for (const [attrKey, rawVal] of Object.entries(attrs)) {
			if (rawVal == null || rawVal === '') continue;
			const keyLower = attrKey.toLowerCase();
			const shortKey = keyLower.includes('.') ? keyLower.split('.').pop()! : keyLower;
			if (!shouldIndexBlockAttributeKey(shortKey, facetConfig, BLOCK_ATTRIBUTE_SKIP_KEYS)) {
				continue;
			}
			applyFacetToLeaves(
				leafUrns,
				sourceUrn,
				`attr:${shortKey}`,
				String(rawVal),
				map,
				{ skipLeavesWithType: true }
			);
		}
	}
}

function leafHasStream(
	streamsByUrn: Record<string, string[]>,
	leafUrn: string,
	streamId: string
): boolean {
	return (streamsByUrn[leafUrn] || []).includes(streamId);
}

/** Primary stream present but alternate stream absent on this leaf. */
export function leafMissingStreamGap(
	leafUrn: string,
	streamId: string,
	primaryStream: string,
	streamsByUrn: Record<string, string[]>
): boolean {
	if (!primaryStream || streamId === primaryStream || streamId === STREAM_ORPHAN_VALUE_ID) {
		return false;
	}
	return (
		leafHasStream(streamsByUrn, leafUrn, primaryStream) &&
		!leafHasStream(streamsByUrn, leafUrn, streamId)
	);
}

/** Non-primary stream content exists but primary stream block is absent. */
export function leafOrphanWithoutPrimary(
	leafUrn: string,
	primaryStream: string,
	streamsByUrn: Record<string, string[]>
): boolean {
	if (!primaryStream) return false;
	if (leafHasStream(streamsByUrn, leafUrn, primaryStream)) return false;
	return (streamsByUrn[leafUrn] || []).some((streamId) => streamId !== primaryStream);
}

function collectStreamIds(
	streamsByUrn: Record<string, string[]>,
	packageStreams?: Array<{ id: string }>
): string[] {
	const ids = new Set<string>();
	for (const row of packageStreams || []) {
		if (row.id) ids.add(row.id);
	}
	for (const streamList of Object.values(streamsByUrn)) {
		for (const streamId of streamList) ids.add(streamId);
	}
	return [...ids].sort();
}

function resolvePrimaryStream(
	manifestPrimary: string | undefined,
	packageStreams?: Array<{ id: string; count?: number }>,
	streamsByUrn?: Record<string, string[]>
): string | undefined {
	if (manifestPrimary) return manifestPrimary;
	if (packageStreams?.length) {
		const mula = packageStreams.find((row) => row.id === 'mula');
		if (mula) return mula.id;
		return [...packageStreams].sort((a, b) => (b.count || 0) - (a.count || 0))[0]?.id;
	}
	if (!streamsByUrn) return undefined;
	const counts = new Map<string, number>();
	for (const streamList of Object.values(streamsByUrn)) {
		for (const streamId of streamList) {
			counts.set(streamId, (counts.get(streamId) || 0) + 1);
		}
	}
	if (counts.size === 0) return undefined;
	if (counts.has('mula')) return 'mula';
	return [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0];
}

function buildStreamCoverageType(
	leafUrns: string[],
	streamsByUrn: Record<string, string[]>,
	primaryStream: string | undefined,
	packageStreams?: Array<{ id: string }>
): FacetType | null {
	if (!primaryStream || leafUrns.length === 0) return null;

	const alternates = collectStreamIds(streamsByUrn, packageStreams).filter(
		(streamId) => streamId !== primaryStream
	);
	if (alternates.length === 0) return null;

	const values: FacetValue[] = [];
	for (const streamId of alternates) {
		let gapCount = 0;
		for (const leaf of leafUrns) {
			if (leafMissingStreamGap(leaf, streamId, primaryStream, streamsByUrn)) gapCount++;
		}
		values.push({
			id: streamId,
			label: streamGapLabel(streamId),
			count: gapCount
		});
	}

	let orphanCount = 0;
	for (const leaf of leafUrns) {
		if (leafOrphanWithoutPrimary(leaf, primaryStream, streamsByUrn)) orphanCount++;
	}
	if (orphanCount > 0) {
		values.push({
			id: STREAM_ORPHAN_VALUE_ID,
			label: 'Without primary',
			count: orphanCount
		});
	}

	values.sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));

	return {
		id: 'stream',
		label: 'Stream coverage',
		kind: 'coverage',
		values
	};
}

function streamGapLabel(streamId: string): string {
	const name = streamId.charAt(0).toUpperCase() + streamId.slice(1);
	return `Missing ${name}`;
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

	return sortFacetTypes(types);
}

function sortFacetTypes(types: FacetType[]): FacetType[] {
	const categorical = types
		.filter((t) => t.kind === 'categorical')
		.sort((a, b) => a.label.localeCompare(b.label));
	const coverage = types.filter((t) => t.kind === 'coverage');
	return [...categorical, ...coverage];
}

function labelForFacetType(
	typeId: string,
	vocabulary: VocabularyEntry[] | undefined,
	primaryStream?: string
): string {
	if (typeId === 'stream') return 'Stream coverage';
	if (typeId.startsWith('attr:')) {
		const attr = typeId.slice('attr:'.length);
		return (
			getVocabularyLabel(vocabulary, 'facets', attr, primaryStream || '', primaryStream) ||
			attr.charAt(0).toUpperCase() + attr.slice(1)
		);
	}
	return typeId;
}

function labelForFacetValue(
	typeId: string,
	valueId: string,
	vocabulary: VocabularyEntry[] | undefined,
	primaryStream?: string
): string {
	if (typeId.startsWith('attr:')) {
		return resolveEntityLabel(vocabulary, valueId, primaryStream);
	}
	if (typeId === 'stream') {
		if (valueId === STREAM_ORPHAN_VALUE_ID) return 'Without primary';
		return streamGapLabel(valueId);
	}
	return valueId;
}

/** First categorical facet type (for default explore map mode). */
export function defaultMapFacetTypeId(facetIndex: FacetIndex): string | null {
	const categorical = facetIndex.types.filter((t) => t.kind === 'categorical');
	return categorical[0]?.id ?? null;
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

	const primaryStream = resolvePrimaryStream(
		(packageData.manifest as { primary_stream?: string }).primary_stream,
		packageData.streams,
		packageData.streamsByUrn
	);
	const chromeStream = labelStream || primaryStream;
	const leafUrns = collectLeafUrns(packageData.structure.catalogTree);
	const leafFacetKeys = new Map<string, Set<string>>();
	const streamsByUrn = packageData.streamsByUrn;
	const facetConfig = resolveFacetConfig(packageData.manifest, packageData.vocabulary);
	const globalPrefix =
		(packageData.manifest as { prefix?: string; global_prefix?: string }).prefix ||
		(packageData.manifest as { global_prefix?: string }).global_prefix ||
		'';

	if (packageData.annotations?.length) {
		ingestAnnotationFacets(
			packageData.annotations,
			leafUrns,
			leafFacetKeys,
			globalPrefix
		);
	}
	if (packageData.blockAttributesByUrn) {
		ingestBlockAttributeFacets(
			packageData.blockAttributesByUrn,
			leafUrns,
			leafFacetKeys,
			facetConfig
		);
	}

	const categoricalTypes = aggregateTypes(leafFacetKeys, packageData.vocabulary, chromeStream);
	const streamType =
		streamsByUrn && primaryStream
			? buildStreamCoverageType(leafUrns, streamsByUrn, primaryStream, packageData.streams)
			: null;

	return {
		types: streamType ? [...categoricalTypes, streamType] : categoricalTypes,
		leafFacetKeys,
		primaryStream,
		streamsByUrn
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
		if (isCoverageFacet(typeId)) continue;
		for (const valueId of valueIds) {
			if (leafKeys.has(encodeFacetKey(typeId, valueId))) return true;
		}
	}
	return false;
}

export function leafMatchesCoverageGap(
	leafUrn: string,
	valueId: string,
	facetIndex: FacetIndex
): boolean {
	const { primaryStream, streamsByUrn } = facetIndex;
	if (!primaryStream || !streamsByUrn) return false;
	if (valueId === STREAM_ORPHAN_VALUE_ID) {
		return leafOrphanWithoutPrimary(leafUrn, primaryStream, streamsByUrn);
	}
	return leafMissingStreamGap(leafUrn, valueId, primaryStream, streamsByUrn);
}

/** Corner colors for selected stream coverage gaps (up to STREAM_COVERAGE_MAX). */
export function leafCoverageGapCornerColors(
	leafUrn: string,
	selectedValueIds: Iterable<string>,
	facetIndex: FacetIndex
): string[] {
	const colorMap = buildFacetValueColorMap(facetIndex, 'stream');
	const colors: string[] = [];
	for (const valueId of selectedValueIds) {
		if (!leafMatchesCoverageGap(leafUrn, valueId, facetIndex)) continue;
		const color = colorMap.get(valueId);
		if (color) colors.push(color);
		if (colors.length >= STREAM_COVERAGE_MAX) return colors;
	}
	return colors;
}

export function leafMatchesCoverageSelection(
	leafUrn: string,
	selectedValueIds: Iterable<string>,
	facetIndex: FacetIndex
): boolean {
	return leafCoverageGapCornerColors(leafUrn, selectedValueIds, facetIndex).length > 0;
}

/** True when any leaf in the container matches a selected stream coverage gap. */
export function containerHasSelectedCoverageGaps(
	containerId: string,
	leafIndices: number[],
	selectedValueIds: Iterable<string>,
	facetIndex: FacetIndex
): boolean {
	for (const leafIndex of leafIndices) {
		const urn = `${containerId}:${leafIndex}`;
		for (const valueId of selectedValueIds) {
			if (leafMatchesCoverageGap(urn, valueId, facetIndex)) return true;
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
