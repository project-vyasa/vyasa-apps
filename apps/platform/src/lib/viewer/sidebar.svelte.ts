import { flattenTree } from '$lib/urn-utils';
import type { PackageData } from '$lib/types';

export interface SidebarItem {
	id: string;
	title: string;
	subtitle?: string;
	group?: string;
}

/**
 * Encapsulates all sidebar-related reactive state using Svelte 5 runes.
 * Instantiate once in the viewer component and pass the relevant getters.
 *
 * Usage:
 *   const sidebar = new SidebarState(
 *     () => packageData,
 *     () => urnComponents,
 *     () => urn
 *   );
 */
export class SidebarState {
	readonly #getPackageData: () => PackageData | null;
	readonly #getUrnComponents: () => string[];
	readonly #getUrn: () => string;

	selectedContainerId = $state<string | number | undefined>(undefined);

	readonly flatUrns: string[] = $derived.by(() => {
		const pd = this.#getPackageData();
		if (!pd?.structure?.catalogTree) return [];
		return flattenTree(pd.structure.catalogTree, '');
	});

	readonly items: SidebarItem[] = $derived.by(() => {
		const pd = this.#getPackageData();
		const urnComponents = this.#getUrnComponents();
		const tree = pd?.structure?.catalogTree;
		if (!tree) return [];

		const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

		// Case 1: Flat array of leaf nodes (e.g., single-level publication)
		if (Array.isArray(tree)) {
			const label = urnComponents[0] || 'Item';
			return tree.map((val) => ({
				id: String(val),
				title: `${capitalize(label)} ${val}`
			}));
		}

		// Case 2: Nested object tree
		const result: SidebarItem[] = [];

		function traverse(node: unknown, pathParts: string[]) {
			if (Array.isArray(node)) {
				if (pathParts.length > 0) {
					const id = pathParts.join(':');
					const lastPart = pathParts[pathParts.length - 1];
					const parentPart = pathParts.length > 1 ? pathParts[pathParts.length - 2] : '';
					const itemLabel = urnComponents[pathParts.length - 1] || 'Item';
					const groupLabel =
						pathParts.length > 1 ? urnComponents[pathParts.length - 2] || 'Group' : '';
					const semanticTitle = pd?.titles?.[id];
					const fallbackTitle = `${capitalize(itemLabel)} ${lastPart}`;
					
					result.push({
						id,
						title: semanticTitle || fallbackTitle,
						subtitle: semanticTitle ? fallbackTitle : undefined,
						group: parentPart ? `${capitalize(groupLabel)} ${parentPart}` : undefined
					});
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
	});

	constructor(
		getPackageData: () => PackageData | null,
		getUrnComponents: () => string[],
		getUrn: () => string
	) {
		this.#getPackageData = getPackageData;
		this.#getUrnComponents = getUrnComponents;
		this.#getUrn = getUrn;

		// Keep selectedContainerId in sync with current URN
		$effect(() => {
			const currentUrn = this.#getUrn();
			const items = this.items;

			if (!currentUrn || currentUrn === 'root') {
				this.selectedContainerId = undefined;
				return;
			}
			const urnParts = currentUrn.split(':');
			for (let len = urnParts.length; len > 0; len--) {
				const candidate = urnParts.slice(0, len).join(':');
				if (items.some((item) => item.id === candidate)) {
					this.selectedContainerId = candidate;
					return;
				}
			}
			this.selectedContainerId = undefined;
		});
	}
}
