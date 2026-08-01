import initWasm, { VyasaViewerRuntime } from '@project-vyasa/vyasa-viewer-wasm';
import {
	resolveCatalogUrl,
	fetchCatalog,
	getPublicationVyviewUrl,
	DEFAULT_REGISTRY_URL
} from '$lib/registry';
import type { CatalogRef } from '$lib/catalog-ref';
import { ADI_REGISTRY_ID } from '$lib/catalog-ref';
import { appendCacheBuster, vyviewCacheToken } from '$lib/cache-bust';
import { activePublication } from '$lib/viewer/active-publication.svelte';
import { shouldReuseResolvedCatalogUrl } from './catalog-url-cache';
import { ViewerDb } from '$lib/ViewerDb';
import type { PackageData, Manifest, Catalog, VocabularyEntry, AnnotationEntry } from '$lib/types';
import { collectLeafUrns, toRelativeUrn } from '$lib/explore/urn-utils';
import { parseAnnotationRows } from '$lib/viewer/annotation-rows';
import { parseStreamSeparators } from '$lib/viewer/whitespace';
import {
	enrichBlockAttributesForWeave,
	indexAnnotationsByUrn
} from '$lib/viewer/graph-weave-context';
import { buildTemplatesJson } from '$lib/viewer/templates-json';
import {
	measurePerfPhaseSync,
	recordPerfPhase,
	warnManifestPerfStats,
	type PerfTimings
} from '$lib/viewer/perf-guard';

export interface PublicationLoadResult {
	packageData: PackageData;
	graphRuntime: VyasaViewerRuntime;
	urnComponents: string[];
	diagRegistryUrl: string;
	diagCatalogUrl: string;
	diagPublicationUrl: string;
	diagCatalog: Catalog;
	/** catalog.json `updated` for the loaded publication, when present */
	catalogUpdated?: number;
	/** Initial manifest timestamp read from the loaded .vyview */
	manifestTimestamp?: string;
	/** The first leaf URN to navigate to when arriving at 'root', or null if not applicable */
	initialTargetUrn: string | null;
	/** Phase timings (ms) for diagnostics / perf guards */
	perfTimings?: PerfTimings;
}

/**
 * Loads a publication from the catalog registry into the provided ViewerDb.
 * Returns all derived state needed to render the viewer.
 * Throws on any failure.
 */
export async function loadPublication(
	ref: CatalogRef,
	viewerDb: ViewerDb
): Promise<PublicationLoadResult> {
	await initWasm();
	const perfTimings: PerfTimings = {};
	const loadT0 = performance.now();

	const diagRegistryUrl = ref.registryId === ADI_REGISTRY_ID ? DEFAULT_REGISTRY_URL : ref.registryId;
	const catalogUrl = shouldReuseResolvedCatalogUrl(
		activePublication.registryId,
		activePublication.catalogId,
		activePublication.catalogUrl,
		ref
	)
		? activePublication.catalogUrl
		: await resolveCatalogUrl(ref.registryId, ref.catalogId);
	const diagCatalogUrl = catalogUrl;

	const catalogData = await fetchCatalog(catalogUrl);
	const publication = catalogData.publications.find((item) => item.id === ref.publicationId);
	if (!publication) {
		throw new Error(`Publication ${ref.publicationId} not found in catalog at ${catalogUrl}`);
	}

	const vyviewFullUrl = getPublicationVyviewUrl(catalogUrl, publication);
	const diagPublicationUrl = vyviewFullUrl;
	const buster = vyviewCacheToken(publication.updated);
	await viewerDb.loadFromUrl(appendCacheBuster(vyviewFullUrl, buster));

	// 5. Read manifest
	const manifestRows = await viewerDb.query(VyasaViewerRuntime.build_manifest_query());
	const manifest: Record<string, string> = {};
	for (const row of manifestRows) {
		manifest[row[0] as string] = row[1] as string;
	}
	const manifestTimestamp = manifest['timestamp'];
	if (manifest['package_type'] !== 'view') {
		throw new Error(`Unsupported package type in ${vyviewFullUrl}`);
	}

	// 6. Read templates (cached in projections — not re-fetched on each navigation)
	const tplRows = await viewerDb.query(VyasaViewerRuntime.build_templates_query());
	const projections: Record<string, string> = {};
	for (const row of tplRows) {
		const viewName = row[0] as string;
		const blockType = row[1] as string;
		const htmlContent = row[2] as string;
		projections[`${viewName}_${blockType}`] = htmlContent;
	}

	// 7. Parse manifest metadata
	const catalogTreeTemp = JSON.parse(manifest['catalog_tree'] || '[]');
	const globalPrefix = manifest['global_prefix'] || 'urn:vyasa:';
	let hierarchyJson = manifest['urn_hierarchy'] || '[]';
	const bitLayoutJson = manifest['urn_bit_layout'] || 'null';

	let urnComponents: string[];
	try {
		urnComponents = JSON.parse(hierarchyJson);
	} catch {
		urnComponents = [];
		hierarchyJson = '[]';
	}

	// 8. Build WASM graph runtime
	const graphRuntime = new VyasaViewerRuntime(hierarchyJson, bitLayoutJson, globalPrefix);

	// 8b. Load block attributes (titles) per stream — Labels chrome selects which set to show
	const attrRows = await viewerDb.query(
		'SELECT s.name, ba.sequence_id, ba.attributes FROM block_attributes ba JOIN streams s ON ba.stream_id = s.id'
	);
	const titlesByStream: Record<string, Record<string, string>> = {};
	const titles: Record<string, string> = {};
	const blockAttributesByUrn: Record<string, Record<string, string>> = {};
	const primaryStream = (manifest as Manifest).primary_stream;
	for (const row of attrRows) {
		const streamName = row[0] as string;
		const seqId = BigInt(row[1] as string | number);
		const attrJson = row[2] as string;
		try {
			const attrs = JSON.parse(attrJson) as Record<string, string>;
			const relativeUrn = toRelativeUrn(graphRuntime.get_urn(seqId), globalPrefix);
			if (!blockAttributesByUrn[relativeUrn]) {
				blockAttributesByUrn[relativeUrn] = { ...attrs };
			} else {
				Object.assign(blockAttributesByUrn[relativeUrn], attrs);
			}
			if (attrs.title) {
				if (!titlesByStream[streamName]) titlesByStream[streamName] = {};
				titlesByStream[streamName][relativeUrn] = attrs.title;
				if (
					!titles[relativeUrn] ||
					(primaryStream && streamName === primaryStream)
				) {
					titles[relativeUrn] = attrs.title;
				}
			}
		} catch (e) {
			console.warn(`Failed to parse block attributes for seqId ${seqId}:`, e);
		}
	}

	// 9. Determine initial navigation target (for 'root' URN redirect)
	// Flatten the catalog tree to find the first leaf
	let initialTargetUrn: string | null = null;
	const flatUrns = collectLeafUrns(catalogTreeTemp);
	if (flatUrns.length > 0) {
		const firstLeaf = flatUrns[0];
		const parts = firstLeaf.split(':');
		// If the first leaf has multiple components (e.g., 1:1), navigate to its container (e.g., 1)
		initialTargetUrn = parts.length > 1 ? parts.slice(0, parts.length - 1).join(':') : firstLeaf;
	}

	// 8c. Load actual streams and their block counts
	const streamRows = await viewerDb.query(
		'SELECT s.id, s.name, count(h.sequence_id) as block_count FROM streams s LEFT JOIN html_blocks h ON s.id = h.stream_id GROUP BY s.id, s.name'
	);
	const streams: Array<{id: string, label: string, count: number}> = [];
	for (const row of streamRows) {
		const id = row[1] as string;
		streams.push({
			id,
			label: id.charAt(0).toUpperCase() + id.slice(1),
			count: Number(row[2])
		});
	}

	// 8c2. Per-leaf stream presence for explore facets
	const streamsByUrn: Record<string, string[]> = {};
	try {
		const blockStreamRows = await viewerDb.query(
			'SELECT h.sequence_id, s.name FROM html_blocks h JOIN streams s ON h.stream_id = s.id'
		);
		for (const row of blockStreamRows) {
			const seqId = BigInt(row[0] as string | number);
			const streamName = row[1] as string;
			const relativeUrn = toRelativeUrn(graphRuntime.get_urn(seqId), globalPrefix);
			if (!streamsByUrn[relativeUrn]) streamsByUrn[relativeUrn] = [];
			if (!streamsByUrn[relativeUrn].includes(streamName)) {
				streamsByUrn[relativeUrn].push(streamName);
			}
		}
	} catch (e) {
		console.warn('Vyasa Load: streams-by-urn query failed:', e);
	}

	// 8d. Load vocabulary table if present
	let vocabulary: VocabularyEntry[] = [];
	try {
		const vocabQuery = (VyasaViewerRuntime as any).build_vocabulary_query ? (VyasaViewerRuntime as any).build_vocabulary_query() : 'SELECT category, key, stream_name, value FROM vocabulary';
		const vocabRows = await viewerDb.query(vocabQuery);
		for (const row of vocabRows) {
			vocabulary.push({
				category: row[0] as string,
				key: row[1] as string,
				stream_name: row[2] as string,
				value: row[3] as string
			});
		}
	} catch (e) {
		console.warn('Vyasa Load: Vocabulary table not found or failed to query:', e);
	}

	// 8e. Load annotations (speaker attributions, notes) via WASM query per Rule 5
	let annotations: AnnotationEntry[] = [];
	try {
		const annotQuery = (VyasaViewerRuntime as any).build_annotations_query ? (VyasaViewerRuntime as any).build_annotations_query() : "SELECT e.target_id as urn_int, d.value as label, n.attributes as attributes FROM graph_edges e JOIN graph_nodes n ON e.source_id = n.id JOIN graph_dict d ON n.label_id = d.id WHERE d.value = 'Action' OR d.value = 'Note' OR d.value = 'Event' OR d.value = 'Attribute'";
		const annotRows = await viewerDb.query(annotQuery);
		annotations.push(
			...parseAnnotationRows(annotRows, (urnInt) => graphRuntime.get_urn(urnInt))
		);
	} catch (e) {
		console.warn('Vyasa Load: Annotations extraction failed or table missing:', e);
	}

	const streamSeparators = parseStreamSeparators(manifest['stream_separators']);
	warnManifestPerfStats(manifest);

	const weaveBlockAttributesByUrn = measurePerfPhaseSync(
		perfTimings,
		'enrichBlockAttributesForWeave',
		() =>
			enrichBlockAttributesForWeave(
				blockAttributesByUrn,
				annotations,
				vocabulary,
				manifest as Manifest,
				globalPrefix,
				primaryStream
			)
	);
	const annotationsByUrn = indexAnnotationsByUrn(annotations, globalPrefix);
	const templatesJson = buildTemplatesJson(projections);

	const packageData: PackageData = {
		manifest: manifest as unknown as Manifest,
		structure: { catalogTree: catalogTreeTemp },
		projections,
		templatesJson,
		titles,
		titlesByStream,
		blockAttributesByUrn,
		weaveBlockAttributesByUrn,
		annotationsByUrn,
		streamsByUrn,
		streams,
		streamSeparators,
		vocabulary,
		annotations,
		perfTimings
	};

	recordPerfPhase(perfTimings, 'loadPublication', performance.now() - loadT0);

	return {
		packageData,
		graphRuntime,
		urnComponents,
		diagRegistryUrl,
		diagCatalogUrl,
		diagPublicationUrl,
		diagCatalog: catalogData,
		catalogUpdated: publication.updated,
		manifestTimestamp,
		initialTargetUrn,
		perfTimings
	};
}

