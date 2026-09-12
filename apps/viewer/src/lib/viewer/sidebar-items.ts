import { catalogLeafIndices, isCatalogRangesNode } from '$lib/explore/urn-utils';
import type { SidebarItem } from './sidebar.svelte';

export interface SidebarItemsOptions {
	urnComponents: string[];
	titles: Record<string, string>;
	structureLabel: (componentKey: string, fallback: string) => string;
}

/** Build sidebar navigation items from a catalog tree. */
export function buildSidebarItems(
	tree: unknown,
	{ urnComponents, titles, structureLabel }: SidebarItemsOptions
): SidebarItem[] {
	if (Array.isArray(tree)) {
		const key = urnComponents[0] || 'Item';
		const label = structureLabel(key, key);
		return tree.map((val) => ({
			id: String(val),
			title: `${label} ${val}`
		}));
	}

	const result: SidebarItem[] = [];

	function pushContainerItem(pathParts: string[]) {
		const id = pathParts.join(':');
		const lastPart = pathParts[pathParts.length - 1];
		const parentPart = pathParts.length > 1 ? pathParts[pathParts.length - 2] : '';
		const itemKey = urnComponents[pathParts.length - 1] || 'Item';
		const groupKey = pathParts.length > 1 ? urnComponents[pathParts.length - 2] || 'Group' : '';
		const itemLabel = structureLabel(itemKey, itemKey);
		const groupLabel = groupKey ? structureLabel(groupKey, groupKey) : '';
		const semanticTitle = titles[id];
		const fallbackTitle = `${itemLabel} ${lastPart}`;
		const parentSemanticTitle = parentPart ? titles[parentPart] : undefined;
		const groupTitle = parentSemanticTitle
			? `${parentSemanticTitle} (${groupLabel} ${parentPart})`
			: parentPart
				? `${groupLabel} ${parentPart}`
				: undefined;

		result.push({
			id,
			title: semanticTitle || fallbackTitle,
			subtitle: semanticTitle ? fallbackTitle : undefined,
			group: groupTitle
		});
	}

	function traverse(node: unknown, pathParts: string[]) {
		if (Array.isArray(node) || isCatalogRangesNode(node)) {
			if (pathParts.length > 0 && catalogLeafIndices(node).length > 0) {
				pushContainerItem(pathParts);
			}
			return;
		}
		if (typeof node === 'object' && node !== null) {
			const keys = Object.keys(node as Record<string, unknown>).sort(
				(a, b) => Number(a) - Number(b)
			);
			for (const k of keys) {
				traverse((node as Record<string, unknown>)[k], [...pathParts, k]);
			}
		}
	}

	traverse(tree, []);
	return result;
}
