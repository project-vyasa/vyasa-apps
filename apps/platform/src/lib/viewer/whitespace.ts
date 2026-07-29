/** Controls how WASM joins SegmentBreak (`\x1f`) splits during weave. */
export function buildWeaveOptionsJson(
	_activeView: string,
	definedStreamOrder: string[],
	blockAttributesByUrn?: Record<string, Record<string, string>>
): string {
	const stream_order = definedStreamOrder.length > 0 ? definedStreamOrder : undefined;
	const block_attributes =
		blockAttributesByUrn && Object.keys(blockAttributesByUrn).length > 0
			? blockAttributesByUrn
			: undefined;

	return JSON.stringify({ separator: '\n', stream_order, block_attributes });
}

/** True when woven HTML has no visible text (placeholders, containers, whitespace-only). */
export function isPlaceholderContent(content: string | undefined | null): boolean {
	if (!content) return true;
	if (content.includes('// 0 //')) return true;

	const textOnly = content
		.replace(/<[^>]+>/g, '')
		.replace(/\u001f/g, '')
		.replace(/&nbsp;/gi, ' ')
		.trim();

	return textOnly.length === 0;
}

/** Remove compile-time metadata artifacts that should not appear in the reader. */
export function stripStreamArtifacts(content: string): string {
	return content
		.replace(/<div class="set">\s*<\/div>\s*/gi, '')
		.replace(/<span class="vyasa-debug-marker"[^>]*>\s*<\/span>\s*/gi, '')
		.replace(/^\s+/, '');
}

/** Prepare woven HTML for iframe display without stripping intentional whitespace. */
export function prepareDisplayContent(content: string): string {
	return stripStreamArtifacts(
		content
			.replace(/\u001f/g, '\n')
			.replace(/<span data-segment="\d+"><\/span>\s*/g, '')
	);
}
