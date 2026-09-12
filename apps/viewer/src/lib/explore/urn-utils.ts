/** Compact catalog node (`catalog_tree_encoding: ranges_v1`). */
export interface CatalogRangesNode {
	slots?: number[];
	leaves?: [number, number][];
}

export function isCatalogRangesNode(node: unknown): node is CatalogRangesNode {
	return (
		typeof node === 'object' &&
		node !== null &&
		!Array.isArray(node) &&
		'leaves' in node
	);
}

/** Expand inclusive `[min, max]` pairs into sorted leaf indices. */
export function expandLeafRanges(ranges: [number, number][] | undefined): number[] {
	if (!ranges?.length) return [];
	const out: number[] = [];
	for (const [min, max] of ranges) {
		const lo = Math.min(min, max);
		const hi = Math.max(min, max);
		for (let i = lo; i <= hi; i++) out.push(i);
	}
	return out;
}

/** Leaf indices from a catalog leaf bucket (legacy array or ranges_v1 node). */
export function catalogLeafIndices(node: unknown[] | CatalogRangesNode): number[] {
	if (isCatalogRangesNode(node)) {
		return expandLeafRanges(node.leaves);
	}

	const nums = node.map((v) => Number(v)).filter((n) => Number.isFinite(n));
	if (nums.length === 0) return [];

	// Legacy interim: `[0, N]` encoded a contiguous 1..N range before ranges_v1.
	if (nums.length === 2 && nums[0] === 0 && nums[1] > 0) {
		const max = nums[1];
		return Array.from({ length: max }, (_, i) => i + 1);
	}

	return nums.filter((n) => n > 0).sort((a, b) => a - b);
}

/** Collect relative URNs for every content leaf in a catalog tree. */
export function collectLeafUrns(tree: unknown, prefix = ''): string[] {
	if (isCatalogRangesNode(tree)) {
		return catalogLeafIndices(tree).map((n) => (prefix ? `${prefix}:${n}` : String(n)));
	}
	if (Array.isArray(tree)) {
		return catalogLeafIndices(tree).map((n) => (prefix ? `${prefix}:${n}` : String(n)));
	}
	if (!tree || typeof tree !== 'object') return [];

	const leaves: string[] = [];
	const keys = Object.keys(tree).sort((a, b) => Number(a) - Number(b));
	for (const key of keys) {
		const subNode = (tree as Record<string, unknown>)[key];
		const fullId = prefix ? `${prefix}:${key}` : key;
		if (isCatalogRangesNode(subNode)) {
			leaves.push(
				...catalogLeafIndices(subNode).map((n) => `${fullId}:${n}`)
			);
		} else if (Array.isArray(subNode)) {
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
