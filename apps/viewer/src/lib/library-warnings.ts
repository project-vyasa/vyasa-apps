import { isLocalRegistryId } from './catalog-ref';

/** True when local source URLs are configured but none loaded under the local registry. */
export function shouldWarnLocalSourcesUnavailable(
	localSourceUrls: string[],
	localCatalogCount: number
): boolean {
	return localSourceUrls.length > 0 && localCatalogCount === 0;
}

export function countLocalCatalogs(catalogs: { registryId: string }[]): number {
	return catalogs.filter((c) => isLocalRegistryId(c.registryId)).length;
}

/** @deprecated Legacy helper — retained for migration tests only. */
export const LEGACY_DEFAULT_CUSTOM_REGISTRY = 'http://localhost:8080/registry.json';
