/** Append a cache-busting query parameter to a URL. */
export function appendCacheBuster(url: string, token?: string | number): string {
	const t = token ?? Date.now();
	const sep = url.includes('?') ? '&' : '?';
	return `${url}${sep}t=${encodeURIComponent(String(t))}`;
}

/** Token for .vyview fetches — prefer catalog and manifest times when available. */
export function vyviewCacheToken(
	catalogUpdated?: number,
	manifestTimestamp?: string | number
): number {
	const candidates = [
		catalogUpdated,
		manifestTimestamp !== undefined && manifestTimestamp !== ''
			? Number(manifestTimestamp)
			: undefined,
		Date.now()
	].filter((v): v is number => v != null && !Number.isNaN(v));
	return Math.max(...candidates);
}
