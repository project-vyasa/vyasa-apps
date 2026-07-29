/** True when the user saved custom catalog URLs but turned the feature off. */
export function shouldWarnCustomCatalogsDisabled(
	enableCustomCatalogs: boolean,
	customCatalogs: string
): boolean {
	return !enableCustomCatalogs && customCatalogs.trim().length > 0;
}

/** True when custom registry URLs are enabled and configured but none loaded. */
export function shouldWarnLocalRegistriesUnavailable(
	enableCustomRegistries: boolean,
	customRegistryUrls: string[],
	localRegistryPublisherCount: number
): boolean {
	return (
		enableCustomRegistries &&
		customRegistryUrls.length > 0 &&
		localRegistryPublisherCount === 0
	);
}

export const LEGACY_DEFAULT_CUSTOM_REGISTRY = 'http://localhost:8080/registry.json';

/** Detect first-run dev defaults persisted before clean out-of-box settings. */
export function isLegacyUntouchedCustomRegistryDefaults(parsed: Record<string, unknown>): boolean {
	const raw = String(parsed.customRegistries ?? '').trim();
	const normalized =
		raw === LEGACY_DEFAULT_CUSTOM_REGISTRY ||
		raw === 'localhost:8080/registry.json' ||
		raw === 'http://localhost:8080/registry.json';

	if (!normalized) return false;
	if (parsed.enableCustomRegistries === false) return false;
	if (String(parsed.customCatalogs ?? '').trim().length > 0) return false;
	if (parsed.enableCustomCatalogs === false) return false;
	if (parsed.debugMode === true) return false;
	return true;
}
