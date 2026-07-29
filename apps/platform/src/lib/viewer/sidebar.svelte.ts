import { flattenTree } from '$lib/urn-utils';
import type { PackageData } from '$lib/types';
import { getVocabularyLabel, titlesForChromeStream } from '$lib/viewer/vocabulary';
import { buildSidebarItems } from '$lib/viewer/sidebar-items';

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
 *     () => urn,
 *     () => chromeStream
 *   );
 */
export class SidebarState {
	readonly #getPackageData: () => PackageData | null;
	readonly #getUrnComponents: () => string[];
	readonly #getUrn: () => string;
	readonly #getChromeStream: () => string | undefined;

	selectedContainerId = $state<string | number | undefined>(undefined);

	readonly flatUrns: string[] = $derived.by(() => {
		const pd = this.#getPackageData();
		if (!pd?.structure?.catalogTree) return [];
		return flattenTree(pd.structure.catalogTree, '');
	});

	readonly items: SidebarItem[] = $derived.by(() => {
		const pd = this.#getPackageData();
		const urnComponents = this.#getUrnComponents();
		const chromeStream = this.#getChromeStream();
		const tree = pd?.structure?.catalogTree;
		if (!tree) return [];

		const primaryStream = (pd.manifest as { primary_stream?: string })?.primary_stream;
		const labelStream = chromeStream || primaryStream || '';
		const titles = titlesForChromeStream(
			pd.titlesByStream,
			pd.titles,
			chromeStream,
			primaryStream
		);

		const structureLabel = (componentKey: string, fallback: string) => {
			const loc = getVocabularyLabel(
				pd.vocabulary,
				'structure',
				componentKey,
				labelStream,
				primaryStream
			);
			if (loc) return loc;
			return fallback.charAt(0).toUpperCase() + fallback.slice(1);
		};

		return buildSidebarItems(tree, { urnComponents, titles, structureLabel });
	});

	constructor(
		getPackageData: () => PackageData | null,
		getUrnComponents: () => string[],
		getUrn: () => string,
		getChromeStream: () => string | undefined = () => undefined
	) {
		this.#getPackageData = getPackageData;
		this.#getUrnComponents = getUrnComponents;
		this.#getUrn = getUrn;
		this.#getChromeStream = getChromeStream;

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
