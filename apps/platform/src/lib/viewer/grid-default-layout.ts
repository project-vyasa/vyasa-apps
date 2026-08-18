import type { Manifest } from '$lib/types';

/**
 * Resolve stream order for grid defaults and customize UI.
 * Uses manifest `streams_config` when present, otherwise `primary_stream` first.
 */
export function resolveManifestStreamOrder(
	definedStreamOrder: string[],
	allStreams: string[],
	manifest: Manifest
): string[] {
	const present = new Set(allStreams);
	const pick = (order: string[]) => order.filter((s) => present.has(s));
	const appendMissing = (ordered: string[]) => [
		...ordered,
		...allStreams.filter((s) => !ordered.includes(s))
	];

	if (definedStreamOrder.length > 0) {
		return appendMissing(pick(definedStreamOrder));
	}

	const primary = manifest.primary_stream;
	if (primary && present.has(primary)) {
		return appendMissing([primary]);
	}

	return [...allStreams];
}

/** Default grid layout JSON when no user override is set. */
export function buildDefaultGridLayoutJson(orderedStreams: string[]): string {
	if (orderedStreams.length === 0) return JSON.stringify({ rows: [] });
	if (orderedStreams.length <= 2) {
		return JSON.stringify({
			rows: [orderedStreams.map((block) => ({ block }))]
		});
	}
	return JSON.stringify({
		rows: orderedStreams.map((block) => [{ block, span: 2 }])
	});
}

/** Text form for the grid customizer textarea. */
export function defaultGridTextFromStreams(orderedStreams: string[]): string {
	if (orderedStreams.length <= 2) return orderedStreams.join(', ');
	return orderedStreams.join('\n');
}
