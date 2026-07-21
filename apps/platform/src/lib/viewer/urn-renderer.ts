import { VyasaViewerRuntime } from '@project-vyasa/vyasa-viewer-wasm';
import { matchUrns } from '$lib/urn-utils';
import { ViewerDb } from '$lib/ViewerDb';
import type { PackageData } from '$lib/types';

export interface RenderResult {
	srcdocContent: string;
	activeUrns: string[];
	/** Updated availableViews if they were populated for the first time */
	availableViews: string[];
	/** Updated activeView if it was set for the first time */
	activeView: string;
}

/**
 * Renders the content for a given URN using the WASM graph runtime and templates
 * cached in packageData.projections. Does NOT re-fetch templates from SQLite.
 */
export async function renderUrn(
	targetUrn: string,
	viewerDb: ViewerDb,
	graphRuntime: VyasaViewerRuntime,
	packageData: PackageData,
	flatUrns: string[],
	activeView: string,
	availableViews: string[]
): Promise<RenderResult> {
	// 1. Determine which leaf URNs to fetch
	const matchingUrns = matchUrns(targetUrn, flatUrns);
	const limit = matchingUrns.length > 0 ? matchingUrns.length : 1;

	// 2. Query content rows from SQLite
	const query = graphRuntime.build_viewport_query(targetUrn, limit);
	const rows = await viewerDb.query(query);

	// 3. Normalize stream names
	let rowsJson: { id: unknown; stream: unknown; content: unknown }[] = [];
	for (const r of rows) {
		rowsJson.push({
			id: r[0],
			stream: (r[1] as string).startsWith('dependency.') ? r[1] : `local.${r[1]}`,
			content: r[2]
		});
	}

	// 4. Apply stream config mapping if present
	if (packageData.manifest.streams_config) {
		const streamsConfig = JSON.parse(packageData.manifest.streams_config);
		const sourceToName: Record<string, string> = {};
		for (const s of streamsConfig) {
			if (typeof s === 'string') {
				const parts = s.split(':');
				if (parts.length > 1) {
					sourceToName[parts[0]] = parts[1];
				} else {
					sourceToName[s] = s.split('.').pop() || s;
				}
			} else if (s && s.source) {
				sourceToName[s.source] = s.name;
			}
		}
		rowsJson = rowsJson.map((r) => ({
			...r,
			stream: sourceToName[r.stream as string] || (r.stream as string).split('.').pop() || r.stream
		}));
	} else {
		rowsJson = rowsJson.map((r) => ({
			...r,
			stream: (r.stream as string).split('.').pop() || r.stream
		}));
	}

	// 5. Populate available views on first render (avoid re-querying on every navigation)
	let currentAvailableViews = availableViews;
	let currentActiveView = activeView;
	if (currentAvailableViews.length === 0) {
		const viewsRows = await viewerDb.query(VyasaViewerRuntime.build_views_query());
		currentAvailableViews = viewsRows.map((r) => r[0] as string);
		if (currentAvailableViews.length > 0) {
			currentActiveView = currentAvailableViews.includes('reference')
				? 'reference'
				: currentAvailableViews[0];
		}
	}

	// 6. Build templates JSON from cached projections (no DB re-fetch)
	const templates: { view_name: string; block_type: string; content: string }[] = [];
	for (const [key, content] of Object.entries(packageData.projections)) {
		// projections keys are `${view_name}_${block_type}`
		const underscoreIdx = key.indexOf('_');
		if (underscoreIdx !== -1) {
			templates.push({
				view_name: key.slice(0, underscoreIdx),
				block_type: key.slice(underscoreIdx + 1),
				content
			});
		}
	}
	const templatesJson = JSON.stringify(templates);

	// 7. Weave view via WASM
	const optionsJson = JSON.stringify({ wrap_tag: 'span', separator: ' ' });
	const viewNodes = graphRuntime.weave_view(
		rowsJson,
		templatesJson,
		currentActiveView,
		optionsJson
	);

	// 8. Apply layout template
	const layoutTpl = packageData.projections[`${currentActiveView}_layout`] || '{{ body }}';
	let itemsHtml = '';
	for (const node of viewNodes) {
		itemsHtml += `<div id="${node.urn}" style="display: contents">${node.content}</div>`;
	}

	return {
		srcdocContent: layoutTpl.replace('{{ body }}', itemsHtml),
		activeUrns: matchingUrns,
		availableViews: currentAvailableViews,
		activeView: currentActiveView
	};
}
