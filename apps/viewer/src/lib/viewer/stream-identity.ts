/**
 * Packed stream ids and leftover logical names from the manifest.
 * Never hardcode a stream id (including "primary") — aliases come from the pack.
 */

export function parseStreamAliases(raw: unknown): Record<string, string> {
	if (typeof raw !== 'string' || !raw.trim()) return {};
	try {
		const parsed = JSON.parse(raw) as unknown;
		if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
		const out: Record<string, string> = {};
		for (const [key, value] of Object.entries(parsed as Record<string, unknown>)) {
			if (typeof value === 'string' && value) out[key] = value;
		}
		return out;
	} catch {
		return {};
	}
}

export function packedStreamId(id: string, aliases: Record<string, string>): string {
	return aliases[id] || id;
}

export function parseStreamsConfig(raw: string | undefined): {
	order: string[];
	sourceToName: Record<string, string>;
} {
	const order: string[] = [];
	const sourceToName: Record<string, string> = {};
	if (!raw?.trim()) return { order, sourceToName };
	try {
		const streamsConfig = JSON.parse(raw) as unknown;
		if (!Array.isArray(streamsConfig)) return { order, sourceToName };
		for (const entry of streamsConfig) {
			if (typeof entry === 'string') {
				const parts = entry.split(':');
				let streamName = '';
				if (parts.length > 1) {
					streamName = parts[1];
					sourceToName[parts[0]] = parts[1];
				} else {
					streamName = entry.split('.').pop() || entry;
					sourceToName[entry] = streamName;
				}
				order.push(streamName);
			} else if (entry && typeof entry === 'object' && 'source' in entry && 'name' in entry) {
				const source = (entry as { source?: unknown }).source;
				const name = (entry as { name?: unknown }).name;
				if (typeof source === 'string' && typeof name === 'string') {
					sourceToName[source] = name;
					order.push(name);
				}
			}
		}
	} catch {
		return { order: [], sourceToName: {} };
	}
	return { order, sourceToName };
}

type GridCell = { block?: string };
type GridLayout = { rows?: GridCell[][] };

/** Packed layout JSON, or undefined when any column is not a packed stream id. */
export function usableGridLayoutJson(
	layoutJson: string | undefined,
	packedIds: Iterable<string>
): string | undefined {
	if (!layoutJson?.trim()) return undefined;
	const packed = new Set(packedIds);
	if (packed.size === 0) return undefined;
	try {
		const parsed = JSON.parse(layoutJson) as GridLayout;
		const rows = parsed?.rows;
		if (!Array.isArray(rows) || rows.length === 0) return undefined;
		for (const row of rows) {
			if (!Array.isArray(row)) return undefined;
			for (const cell of row) {
				const block = cell?.block;
				if (typeof block !== 'string' || !packed.has(block)) return undefined;
			}
		}
		return layoutJson;
	} catch {
		return undefined;
	}
}
