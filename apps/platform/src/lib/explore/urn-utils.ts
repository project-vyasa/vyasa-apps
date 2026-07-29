/** Leaf indices from a catalog-tree array (excludes container `:0` blocks). */
export function catalogLeafIndices(array: unknown[]): number[] {
	return array
		.map((v) => Number(v))
		.filter((n) => Number.isFinite(n) && n > 0)
		.sort((a, b) => a - b);
}

/** Collect relative URNs for every verse leaf block in a catalog tree. */
export function collectLeafUrns(tree: unknown, prefix = ''): string[] {
	if (Array.isArray(tree)) {
		return catalogLeafIndices(tree).map((n) => (prefix ? `${prefix}:${n}` : String(n)));
	}
	if (!tree || typeof tree !== 'object') return [];

	const leaves: string[] = [];
	const keys = Object.keys(tree).sort((a, b) => Number(a) - Number(b));
	for (const key of keys) {
		const subNode = (tree as Record<string, unknown>)[key];
		const fullId = prefix ? `${prefix}:${key}` : key;
		if (Array.isArray(subNode)) {
			leaves.push(
				...catalogLeafIndices(subNode).map((n) => `${fullId}:${n}`)
			);
		} else if (typeof subNode === 'object' && subNode !== null) {
			leaves.push(...collectLeafUrns(subNode, fullId));
		}
	}
	return leaves;
}

/** Strip publication prefix and trailing :0 segments from a full URN. */
export function toRelativeUrn(fullUrn: string, globalPrefix = 'urn:vyasa:'): string {
	let relativeUrn = fullUrn;
	if (globalPrefix && relativeUrn.startsWith(globalPrefix)) {
		relativeUrn = relativeUrn.slice(globalPrefix.length);
		if (relativeUrn.startsWith(':')) relativeUrn = relativeUrn.slice(1);
	}
	while (relativeUrn.endsWith(':0')) {
		relativeUrn = relativeUrn.slice(0, -2);
	}
	return relativeUrn;
}

/** True when `leafUrn` is the same block or a descendant of `containerUrn`. */
export function urnCoversLeaf(containerUrn: string, leafUrn: string): boolean {
	return leafUrn === containerUrn || leafUrn.startsWith(`${containerUrn}:`);
}

/** Match annotation / attribute URNs to explore leaf URNs. */
export function urnsReferToSameBlock(a: string, b: string): boolean {
	if (a === b) return true;
	return a.endsWith(`:${b}`) || b.endsWith(`:${a}`);
}
