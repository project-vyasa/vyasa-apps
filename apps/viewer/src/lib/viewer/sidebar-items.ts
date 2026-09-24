import { catalogLeafIndices, isCatalogRangesNode } from '$lib/explore/urn-utils';
import type { SidebarItem } from './sidebar.svelte';

export interface SidebarItemsOptions {
	urnComponents: string[];
	titles: Record<string, string>;
	structureLabel: (componentKey: string, fallback: string) => string;
}

function normalizeLocatorText(value: string): string {
	return value.trim().toLowerCase().replace(/:/g, '.').replace(/\s+/g, ' ');
}

/** Container locator for the sidebar row, e.g. `Sukta 1:1` or `Anuvaka 1:2:1`. */
export function formatLocatorLabel(
	pathParts: string[],
	urnComponents: string[],
	structureLabel: (componentKey: string, fallback: string) => string
): string {
	const itemKey = urnComponents[pathParts.length - 1] || 'Item';
	const itemLabel = structureLabel(itemKey, itemKey);
	return `${itemLabel} ${pathParts.join(':')}`;
}

/** True when a packed title is just a locator, not a distinct chapter name. */
export function isLocatorTitle(
	title: string,
	locatorLabel: string,
	pathParts: string[]
): boolean {
	const trimmed = title.trim();
	if (!trimmed) return true;
	if (normalizeLocatorText(trimmed) === normalizeLocatorText(locatorLabel)) return true;

	const numericSuffix = trimmed.match(/(\d+(?:[.:]\d+)*)$/)?.[1];
	if (numericSuffix) {
		const expected = pathParts.join(':');
		if (numericSuffix.replace(/:/g, '.') === expected.replace(/:/g, '.')) return true;
	}

	return false;
}

export function formatLeafMeta(count: number, leafLabel: string): string {
	const label = count === 1 ? leafLabel : `${leafLabel}s`;
	return `${count} ${label}`;
}

/** Title and optional locator subtitle for a container row (sidebar, explore map, …). */
export function formatContainerDisplay(
	pathParts: string[],
	urnComponents: string[],
	titles: Record<string, string>,
	structureLabel: (componentKey: string, fallback: string) => string
): { title: string; subtitle?: string } {
	const id = pathParts.join(':');
	const locatorLabel = formatLocatorLabel(pathParts, urnComponents, structureLabel);
	const packedTitle = titles[id]?.trim();
	const hasDistinctTitle =
		packedTitle && !isLocatorTitle(packedTitle, locatorLabel, pathParts);

	return {
		title: hasDistinctTitle ? packedTitle! : locatorLabel,
		subtitle: hasDistinctTitle ? locatorLabel : undefined
	};
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

	function pushContainerItem(pathParts: string[], node: unknown) {
		const id = pathParts.join(':');
		const { title, subtitle } = formatContainerDisplay(
			pathParts,
			urnComponents,
			titles,
			structureLabel
		);

		const ancestorParts = pathParts.slice(0, -1);
		const groupTitle =
			ancestorParts.length > 0
				? ancestorParts
						.map((part, i) => {
							const key = urnComponents[i] || 'Group';
							return `${structureLabel(key, key)} ${part}`;
						})
						.join(' : ')
				: undefined;

		const leafComponentKey = urnComponents[pathParts.length] ?? urnComponents.at(-1) ?? 'Item';
		const leafLabel = structureLabel(leafComponentKey, leafComponentKey);
		const leafCount = catalogLeafIndices(node).length;

		result.push({
			id,
			title,
			subtitle,
			meta: leafCount > 0 ? formatLeafMeta(leafCount, leafLabel) : undefined,
			group: groupTitle
		});
	}

	function traverse(node: unknown, pathParts: string[]) {
		if (Array.isArray(node) || isCatalogRangesNode(node)) {
			if (pathParts.length > 0 && catalogLeafIndices(node).length > 0) {
				pushContainerItem(pathParts, node);
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
