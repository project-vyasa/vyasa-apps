import type { CatalogRef } from '$lib/catalog-ref';

/** Whether loadPublication may reuse a previously resolved catalog.json URL. */
export function shouldReuseResolvedCatalogUrl(
	activeRegistryId: string,
	activeCatalogId: string,
	activeCatalogUrl: string,
	ref: CatalogRef
): boolean {
	return Boolean(
		activeCatalogUrl &&
			activeRegistryId === ref.registryId &&
			activeCatalogId === ref.catalogId
	);
}
