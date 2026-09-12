/** Build WASM weave templates JSON once per publication load. */
export function buildTemplatesJson(projections: Record<string, string>): string {
	const templates: { view_name: string; block_type: string; content: string }[] = [];
	for (const [key, content] of Object.entries(projections)) {
		const underscoreIdx = key.indexOf('_');
		if (underscoreIdx === -1) continue;
		templates.push({
			view_name: key.slice(0, underscoreIdx),
			block_type: key.slice(underscoreIdx + 1),
			content
		});
	}
	return JSON.stringify(templates);
}
