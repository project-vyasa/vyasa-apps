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
	/** Available stream names discovered in the URN rows */
	availableStreams: string[];
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
	activeView: string | undefined,
	availableViews: string[],
	customGridLayoutJson?: string,
	showReferenceGutter: boolean = true,
	showAnnotationGutter: boolean = true
): Promise<RenderResult> {
	const isDocumentLayout =
		packageData.manifest.layout === 'document' ||
		(packageData.manifest as any).attributes?.layout === 'document';
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

	const allStreams = Array.from(new Set(rowsJson.map((r) => String(r.stream))));

	// 5. Populate available views on first render (avoid re-querying on every navigation)
	let currentAvailableViews = availableViews;
	let currentActiveView = activeView;
	if (currentAvailableViews.length === 0) {
		const viewsRows = await viewerDb.query(VyasaViewerRuntime.build_views_query());
		currentAvailableViews = viewsRows.map((r) => r[0] as string);
		if (!currentAvailableViews.includes('grid')) {
			currentAvailableViews.push('grid');
		}
		if (!currentAvailableViews.includes('plain') && !currentAvailableViews.includes('reference')) {
			currentAvailableViews.push('plain');
		}
	}
	if (!currentActiveView) {
		currentActiveView = currentAvailableViews.includes('reading')
			? 'reading'
			: currentAvailableViews[0] || 'plain';
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
	let viewNodes: any[];
	if (currentActiveView === 'grid') {
		let layoutJson =
			customGridLayoutJson ||
			packageData.projections?.['grid_layout_json'] ||
			(packageData.manifest as any)?.layout_json;
		if (!layoutJson) {
			// Construct default side-by-side grid layout from available streams
			const preferredTop = ['iast', 'mula', 'devanagari', 'sanskrit'];
			const topRow: { block: string }[] = [];
			const bottomRows: { block: string; span: number }[] = [];

			for (const pref of preferredTop) {
				if (allStreams.includes(pref) && topRow.length < 2) {
					topRow.push({ block: pref });
				}
			}
			for (const s of allStreams) {
				if (!topRow.some((col) => col.block === s)) {
					if (topRow.length < 2 && allStreams.length <= 2) {
						topRow.push({ block: s });
					} else {
						bottomRows.push({ block: s, span: 2 });
					}
				}
			}

			const rows = [];
			if (topRow.length > 0) rows.push(topRow);
			for (const brow of bottomRows) rows.push([brow]);
			layoutJson = JSON.stringify({ rows });
		}
		viewNodes = graphRuntime.weave_layout(rowsJson, layoutJson, optionsJson);
	} else {
		viewNodes = graphRuntime.weave_view(
			rowsJson,
			templatesJson,
			currentActiveView,
			optionsJson
		);
	}

	// 8. Apply layout template
	const layoutTpl =
		packageData.projections[`${currentActiveView}_layout`] ||
		packageData.projections['reading_layout'] ||
		'{{ body }}';
	const prefix = (packageData.manifest as any)?.prefix || (packageData.manifest as any)?.global_prefix || '';
	let itemsHtml = '';
	for (const node of viewNodes) {
		// Filter out container placeholder rows (e.g. 1:0 or ending in :0 / .0 or empty content)
		if (
			node.urn.endsWith(':0') ||
			node.urn.endsWith('.0') ||
			!node.content ||
			!node.content.trim() ||
			node.content.trim() === '// 0 //' ||
			node.content.includes('// 0 //')
		) {
			continue;
		}

		let shortUrn = node.urn;
		if (prefix && shortUrn.startsWith(prefix + ':')) {
			shortUrn = shortUrn.slice(prefix.length + 1);
		} else {
			const parts = shortUrn.split(':');
			if (parts.length > 2) {
				shortUrn = parts.slice(-2).join(':');
			}
		}

		let rightBadgesHtml = '';
		if (packageData.annotations) {
			const matchingAnns = packageData.annotations.filter(
				(ann) =>
					ann.urn === node.urn ||
					ann.urn.endsWith(':' + node.urn) ||
					node.urn.endsWith(':' + ann.urn)
			);
			for (const ann of matchingAnns) {
				if (ann.label === 'Action' && ann.attributes) {
					const speakerRaw = ann.attributes.speaker || ann.attributes.action || '';
					if (speakerRaw) {
						const speakerLoc =
							packageData.vocabulary?.find(
								(v) =>
									(v.category === 'entities' || v.category === 'entity') &&
									v.key.toLowerCase() === speakerRaw.toLowerCase()
							)?.value || speakerRaw;
						const actionVal = ann.attributes.action || 'uvaca';
						const actionLoc =
							packageData.vocabulary?.find(
								(v) =>
									(v.category === 'actions' || v.category === 'action') &&
									v.key.toLowerCase() === actionVal.toLowerCase()
							)?.value || actionVal;
						const speakerLabelLoc =
							packageData.vocabulary?.find(
								(v) =>
									(v.category === 'actions' || v.category === 'action') &&
									v.key.toLowerCase() === 'speaker'
							)?.value || 'Speaker';
						rightBadgesHtml += `<span class="speaker-badge" title="${speakerLabelLoc}: ${speakerLoc}">🗣️ ${speakerLoc} ${actionLoc}</span>`;
					}
				} else if (ann.label === 'Note' && ann.attributes) {
					const noteText =
						ann.attributes.content ||
						ann.attributes.text ||
						ann.attributes.value ||
						'Editorial Note';
					const noteLabelLoc =
						packageData.vocabulary?.find(
							(v) =>
								(v.category === 'actions' || v.category === 'action') &&
								v.key.toLowerCase() === 'note'
						)?.value || 'Note';
					rightBadgesHtml += `<span class="note-badge" title="${noteLabelLoc}: ${noteText}">📝</span>`;
				}
			}
		}

		let cleanContent = node.content.trim();

		if (isDocumentLayout) {
			itemsHtml += `<div id="${node.urn}" class="urn-content-doc">${cleanContent}</div>`;
		} else {
			itemsHtml += `<div id="${node.urn}" class="urn-row">
	<div class="urn-gutter left-gutter"><span class="urn-badge">${shortUrn}</span></div>
	<div class="urn-content">${cleanContent}</div>
	<div class="urn-gutter right-gutter">${rightBadgesHtml}</div>
</div>`;
		}
	}

	let finalHtml = layoutTpl.replace('{{ body }}', itemsHtml);
	if (!isDocumentLayout) {
		const viewerChromeCss = `<style>
/* Core Viewer Chrome & Gutters (Decoupled from Publisher) */
.urn-row {
	display: flex;
	align-items: baseline;
	gap: ${showReferenceGutter || showAnnotationGutter ? '1.25rem' : '0'};
	padding: 1.5rem 0;
	border-bottom: 1px solid #eee;
	width: 100%;
}
.left-gutter {
	display: ${showReferenceGutter ? 'block' : 'none'};
	flex: 0 0 50px;
	position: sticky;
	top: 1rem;
	font-family: monospace;
	font-size: 0.85rem;
}
.urn-content {
	flex: 1 1 0%;
	min-width: 0;
}
.right-gutter {
	display: ${showAnnotationGutter ? 'flex' : 'none'};
	flex: 0 0 130px;
	position: sticky;
	top: 1rem;
	flex-direction: column;
	gap: 0.5rem;
	font-size: 0.85rem;
}
.urn-badge {
	display: inline-block;
	padding: 0.2rem 0.5rem;
	background: #f4f4f4;
	color: #555;
	text-decoration: none;
	border-radius: 4px;
	font-weight: bold;
}
.urn-badge:hover {
	background: #e0e0e0;
	color: #000;
}
/* Neutral badge styling (no red borders!) */
.speaker-badge, .note-badge {
	display: inline-flex;
	align-items: center;
	gap: 0.3rem;
	padding: 0.25rem 0.5rem;
	background: #f4f4f4;
	color: #555;
	border: none;
	border-radius: 4px;
	font-size: 0.8rem;
	font-weight: normal;
}
.speaker-badge:hover, .note-badge:hover {
	background: #e0e0e0;
	color: #222;
}
.vyasa-layout-col, .urn-content {
	white-space: pre-line;
	line-height: 1.6;
}
</style>`;
		if (finalHtml.includes('</head>')) {
			finalHtml = finalHtml.replace('</head>', `${viewerChromeCss}</head>`);
		} else {
			finalHtml += viewerChromeCss;
		}
	}

	return {
		srcdocContent: finalHtml,
		activeUrns: matchingUrns,
		availableViews: currentAvailableViews,
		activeView: currentActiveView,
		availableStreams: allStreams
	};
}
