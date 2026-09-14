import { catalogRefKey, type CatalogRef } from '$lib/catalog-ref';
import { ViewerDb } from '$lib/ViewerDb';
import { activePublication } from '$lib/viewer/active-publication.svelte';
import { loadPublication, type PublicationLoadResult } from '$lib/viewer/publication-loader';

const db = new ViewerDb();
let cachedKey = '';
let cached: PublicationLoadResult | null = null;
let inflight: Promise<PublicationLoadResult> | null = null;

export function publicationSessionDb(): ViewerDb {
	return db;
}

export function peekPublication(ref: CatalogRef | null): PublicationLoadResult | null {
	if (!ref || !cached) return null;
	return cachedKey === catalogRefKey(ref) ? cached : null;
}

function rememberLoaded(ref: CatalogRef, result: PublicationLoadResult) {
	const pubTitle =
		result.diagCatalog?.publications?.find((i) => i.id === ref.publicationId)?.title ||
		result.packageData.manifest.title ||
		ref.publicationId;
	activePublication.setPublication(ref, result.diagCatalogUrl);
	activePublication.setMetadata(
		pubTitle,
		result.diagPublicationUrl,
		result.manifestTimestamp ?? result.packageData.manifest.timestamp,
		result.diagCatalogUrl,
		result.catalogUpdated
	);
}

/** Load once per publication; Book and Explore share the SQLite + package. */
export async function ensurePublication(ref: CatalogRef): Promise<PublicationLoadResult> {
	const key = catalogRefKey(ref);
	if (cached && cachedKey === key) return cached;
	if (inflight && cachedKey === key) return inflight;

	const requestKey = key;
	cachedKey = key;
	const request = loadPublication(ref, db)
		.then((result) => {
			if (inflight === request) inflight = null;
			if (cachedKey === requestKey) {
				cached = result;
				rememberLoaded(ref, result);
			}
			return result;
		})
		.catch((err) => {
			if (inflight === request) inflight = null;
			if (cachedKey === requestKey) {
				cached = null;
				cachedKey = '';
			}
			throw err;
		});
	inflight = request;
	return request;
}
