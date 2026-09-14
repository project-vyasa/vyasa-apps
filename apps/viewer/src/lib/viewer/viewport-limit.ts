import { toRelativeUrn, urnCoversLeaf } from '$lib/explore/urn-utils';

/**
 * html_blocks includes empty `:0` container rows that weave then drops.
 * Fetch a small header buffer so a 1-leaf container is not an empty page.
 */
export function viewportLeafFetchLimit(matchingLeafCount: number): number {
	const leaves = Math.max(1, matchingLeafCount);
	return leaves + 4;
}

function isZeroSlotUrn(urn: string): boolean {
	return urn.endsWith(':0') || urn.endsWith('.0');
}

/**
 * Keep woven / SQL rows that belong to the requested leaves.
 * Drops `:0` headers and following containers (viewport SQL is `>= start LIMIT n`).
 */
export function viewportIncludesUrn(
	nodeUrn: string,
	matchingUrns: string[],
	globalPrefix = ''
): boolean {
	if (matchingUrns.length === 0) return true;
	if (isZeroSlotUrn(nodeUrn)) return false;
	const rel = toRelativeUrn(nodeUrn, globalPrefix);
	if (isZeroSlotUrn(rel)) return false;
	return matchingUrns.some((leaf) => leaf === rel || urnCoversLeaf(leaf, rel));
}
