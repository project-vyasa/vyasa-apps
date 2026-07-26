import { dev } from '$app/environment';
import initWasm, { VyasaViewerRuntime } from '@project-vyasa/vyasa-viewer-wasm';
import {
	resolvePublisherCatalogUrl,
	fetchCatalog,
	getPublicationVyviewUrl,
	DEFAULT_REGISTRY_URL
} from '$lib/registry';
import { viewerSettings } from '$lib/settings.svelte';
import { ViewerDb } from '$lib/ViewerDb';
import type { PackageData, Manifest, Catalog, VocabularyEntry, AnnotationEntry } from '$lib/types';

export interface PublicationLoadResult {
	packageData: PackageData;
	graphRuntime: VyasaViewerRuntime;
	urnComponents: string[];
	diagRegistryUrl: string;
	diagCatalogUrl: string;
	diagPublicationUrl: string;
	diagCatalog: Catalog;
	/** The first leaf URN to navigate to when arriving at 'root', or null if not applicable */
	initialTargetUrn: string | null;
}

/**
 * Loads a publication from the catalog registry into the provided ViewerDb.
 * Returns all derived state needed to render the viewer.
 * Throws on any failure.
 */
export async function loadPublication(
	publisher: string,
	publication: string,
	viewerDb: ViewerDb,
	explicitCatalogUrl?: string | null
): Promise<PublicationLoadResult> {
	// 1. Initialize WASM
	await initWasm();

	// 2. Resolve catalog URL (use explicit if provided, else custom catalogs first, then global registry)
	const diagRegistryUrl = DEFAULT_REGISTRY_URL;
	const catalogUrl = explicitCatalogUrl || await resolvePublisherCatalogUrl(publisher);
	const diagCatalogUrl = catalogUrl;

	// 3. Fetch catalog and find the publication
	const catalogData = await fetchCatalog(catalogUrl);
	const items = catalogData.items || [];
	const pubItem = items.find((item) => item.id === publication);
	if (!pubItem) {
		throw new Error(`Publication ${publication} not found in catalog at ${catalogUrl}`);
	}

	// 4. Resolve and load the .vyview SQLite file
	const vyviewFullUrl = getPublicationVyviewUrl(catalogUrl, pubItem);
	const diagPublicationUrl = vyviewFullUrl;
	const buster = pubItem.updated ? `?t=${pubItem.updated}` : dev ? `?t=${Date.now()}` : '';
	await viewerDb.loadFromUrl(vyviewFullUrl + buster);

	// 5. Read manifest
	const manifestRows = await viewerDb.query(VyasaViewerRuntime.build_manifest_query());
	const manifest: Record<string, string> = {};
	for (const row of manifestRows) {
		manifest[row[0] as string] = row[1] as string;
	}
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

	// 8b. Load and parse block attributes (e.g. titles for URNs)
	// We ORDER BY stream_id ASC and use the first stream's title (typically iast) to prevent later streams (like mula/Devanagari) from overwriting it.
	const attrRows = await viewerDb.query(
		'SELECT sequence_id, attributes FROM block_attributes ORDER BY stream_id ASC'
	);
	const titles: Record<string, string> = {};
	for (const row of attrRows) {
		const seqId = BigInt(row[0] as string | number);
		const attrJson = row[1] as string;
		try {
			const attrs = JSON.parse(attrJson);
			if (attrs.title) {
				const fullUrn = graphRuntime.get_urn(seqId);
				let relativeUrn = fullUrn;
				if (relativeUrn.startsWith(globalPrefix)) {
					relativeUrn = relativeUrn.slice(globalPrefix.length);
					if (relativeUrn.startsWith(':')) {
						relativeUrn = relativeUrn.slice(1);
					}
				}
				// Strip trailing zero-padding used for container URNs (e.g. "1:0" -> "1")
				while (relativeUrn.endsWith(':0')) {
					relativeUrn = relativeUrn.slice(0, -2);
				}
				if (!titles[relativeUrn]) {
					titles[relativeUrn] = attrs.title;
				}
			}
		} catch (e) {
			console.warn(`Failed to parse block attributes for seqId ${seqId}:`, e);
		}
	}
	console.log('Vyasa Load: Extracted block titles:', titles);

	// 9. Determine initial navigation target (for 'root' URN redirect)
	// Flatten the catalog tree to find the first leaf
	let initialTargetUrn: string | null = null;
	const flatUrns = flattenTreeForInit(catalogTreeTemp);
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
		console.log(`Vyasa Load: Extracted ${vocabulary.length} vocabulary entries`);
	} catch (e) {
		console.warn('Vyasa Load: Vocabulary table not found or failed to query:', e);
	}

	// 8e. Load annotations (speaker attributions, notes) via WASM query per Rule 5
	let annotations: AnnotationEntry[] = [];
	try {
		const annotQuery = (VyasaViewerRuntime as any).build_annotations_query ? (VyasaViewerRuntime as any).build_annotations_query() : "SELECT e.target_id as urn_int, d.value as label, n.attributes as attributes FROM graph_edges e JOIN graph_nodes n ON e.source_id = n.id JOIN graph_dict d ON n.label_id = d.id WHERE d.value = 'Action' OR d.value = 'Note' OR d.value = 'Event' OR d.value = 'Attribute'";
		const annotRows = await viewerDb.query(annotQuery);
		for (const row of annotRows) {
			const urnInt = BigInt(row[0] as number | string);
			const urn = graphRuntime.get_urn(urnInt);
			const label = row[1] as string;
			const attrRaw = row[2];
			let attributes: Record<string, any> = {};
			try {
				attributes = typeof attrRaw === 'string' ? JSON.parse(attrRaw) : (attrRaw || {});
			} catch (err) {
				// Fallback if JSON parse fails
			}
			annotations.push({ urn, label, attributes });
		}
		console.log(`Vyasa Load: Extracted ${annotations.length} annotations`);
	} catch (e) {
		console.warn('Vyasa Load: Annotations extraction failed or table missing:', e);
	}

	const packageData: PackageData = {
		manifest: manifest as unknown as Manifest,
		structure: { catalogTree: catalogTreeTemp },
		projections,
		titles,
		streams,
		vocabulary,
		annotations
	};

	return {
		packageData,
		graphRuntime,
		urnComponents,
		diagRegistryUrl,
		diagCatalogUrl,
		diagPublicationUrl,
		diagCatalog: catalogData,
		initialTargetUrn
	};
}

/** Minimal tree flattening used only to compute the initial navigation target. */
function flattenTreeForInit(node: unknown, prefix = ''): string[] {
	if (Array.isArray(node)) {
		return node.map((val) => (prefix ? `${prefix}:${val}` : `${val}`));
	}
	if (typeof node === 'object' && node !== null) {
		const keys = Object.keys(node as Record<string, unknown>).sort((a, b) => Number(a) - Number(b));
		const results: string[] = [];
		for (const k of keys) {
			results.push(
				...flattenTreeForInit((node as Record<string, unknown>)[k], prefix ? `${prefix}:${k}` : k)
			);
		}
		return results;
	}
	return [];
}
