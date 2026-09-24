export type Addressing = 'sequence' | 'document';

export type WorkspaceAddress = {
	addressing: Addressing;
	/** Path components that name a file's place, from `[urn].path_schema`. */
	pathSchema: string[];
	/** Full address order, from `[urn].hierarchy`. The last entry is the leaf. */
	hierarchy: string[];
};

const SEQUENCE: WorkspaceAddress = { addressing: 'sequence', pathSchema: [], hierarchy: [] };

function sectionBody(toml: string, name: string): string {
	const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const match = new RegExp(`(?:^|\\n)\\[${escaped}\\][^\\n]*\\n([\\s\\S]*?)(?=\\n\\[|$)`).exec(toml);
	return match?.[1] ?? '';
}

function stringValue(body: string, key: string): string | null {
	const match = new RegExp(`^${key}\\s*=\\s*"([^"]*)"`, 'm').exec(body);
	return match?.[1] ?? null;
}

function stringList(body: string, key: string): string[] {
	const match = new RegExp(`^${key}\\s*=\\s*\\[([^\\]]*)]`, 'm').exec(body);
	if (!match) return [];
	return [...match[1].matchAll(/"([^"]*)"/g)].map((item) => item[1]);
}

/** Addressing from `vyasac.toml`. Missing `layout` is sequence, matching the packer. */
export function readWorkspaceAddress(toml: string | undefined): WorkspaceAddress {
	if (!toml?.trim()) return SEQUENCE;
	const build = sectionBody(toml, 'build.default');
	const urn = sectionBody(toml, 'urn');
	const layout = stringValue(build, 'layout');
	return {
		addressing: layout === 'document' ? 'document' : 'sequence',
		pathSchema: stringList(urn, 'path_schema'),
		hierarchy: stringList(urn, 'hierarchy')
	};
}

function pathParts(htmlOrSource: string): string[] {
	const fromHtml = /\/html\/[^/]+\/(.+)\.html$/.exec(htmlOrSource);
	const fromSource = /^content\/[^/]+\/(.+)\.vy$/.exec(htmlOrSource);
	const rest = fromHtml?.[1] ?? fromSource?.[1];
	if (!rest) return [];
	return rest.split('/');
}

/**
 * What the preview pane is showing.
 * Sequence: the container of leaves (path levels above the leaf).
 * Document: the file's own address.
 */
export function previewUnitReference(htmlOrSource: string, address: WorkspaceAddress): string {
	const kind = address.addressing === 'document' ? 'document' : 'container';
	const parts = pathParts(htmlOrSource);
	const pairs = parts
		.map((value, index) => ({ level: address.pathSchema[index], value }))
		.filter((pair): pair is { level: string; value: string } => Boolean(pair.level));
	if (!pairs.length) return kind;

	const leaf = address.hierarchy.at(-1);
	const shown =
		kind === 'container' && leaf ? pairs.filter((pair) => pair.level !== leaf) : pairs;
	if (!shown.length) return kind;
	const place = shown.map((pair) => `${pair.level} ${pair.value}`).join(' · ');
	return `${kind} · ${place}`;
}
