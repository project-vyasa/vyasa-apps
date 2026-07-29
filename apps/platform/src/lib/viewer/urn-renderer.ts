import { VyasaViewerRuntime } from '@project-vyasa/vyasa-viewer-wasm';
import { matchUrns } from '$lib/urn-utils';
import { ViewerDb } from '$lib/ViewerDb';
import type { Manifest, PackageData } from '$lib/types';
import {
	buildWeaveOptionsJson,
	isPlaceholderContent,
	prepareDisplayContent
} from '$lib/viewer/whitespace';
import { getVocabularyLabel } from '$lib/viewer/vocabulary';

function normalizeBlockContent(content: unknown): Uint8Array {
	if (content instanceof Uint8Array) return content;
	if (content instanceof ArrayBuffer) return new Uint8Array(content);
	if (Array.isArray(content)) return new Uint8Array(content);
	return new Uint8Array(0);
}

const BUILTIN_VIEWS = new Set(['grid']);

/** Views that only supply a layout shell are stylesheet infrastructure, not reading modes. */
function getSelectableViews(
	viewsFromDb: string[],
	projections: Record<string, string>
): string[] {
	const viewsWithWeaveTemplate = new Set<string>();
	for (const key of Object.keys(projections)) {
		const idx = key.indexOf('_');
		if (idx === -1) continue;
		const viewName = key.slice(0, idx);
		const blockType = key.slice(idx + 1);
		if (blockType === 'item' || blockType === 'container') {
			viewsWithWeaveTemplate.add(viewName);
		}
	}
	const selectable = viewsFromDb.filter(
		(v) => BUILTIN_VIEWS.has(v) || viewsWithWeaveTemplate.has(v)
	);
	if (!selectable.includes('grid')) {
		selectable.push('grid');
	}
	return selectable;
}

export interface RenderResult {
	srcdocContent: string;
	activeUrns: string[];
	/** Updated availableViews if they were populated for the first time */
	availableViews: string[];
	/** Updated activeView if it was set for the first time */
	activeView: string;
	/** Available stream names discovered in the URN rows */
	availableStreams: string[];
	/** Updated activeStream if it was set for the first time */
	activeStream: string;
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
	activeStream: string | undefined,
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
			content: normalizeBlockContent(r[2])
		});
	}

	let definedStreamOrder: string[] = [];
	if (packageData.manifest.streams_config) {
		const streamsConfig = JSON.parse(packageData.manifest.streams_config);
		const sourceToName: Record<string, string> = {};
		for (const s of streamsConfig) {
			if (typeof s === 'string') {
				const parts = s.split(':');
				let streamName = '';
				if (parts.length > 1) {
					streamName = parts[1];
					sourceToName[parts[0]] = parts[1];
				} else {
					streamName = s.split('.').pop() || s;
					sourceToName[s] = streamName;
				}
				definedStreamOrder.push(streamName);
			} else if (s && s.source) {
				sourceToName[s.source] = s.name;
				definedStreamOrder.push(s.name);
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
		currentAvailableViews = getSelectableViews(
			viewsRows.map((r) => r[0] as string),
			packageData.projections
		);
	}
	if (!currentActiveView) {
		if (isDocumentLayout && currentAvailableViews.includes('reading')) {
			currentActiveView = 'reading';
		} else if (currentAvailableViews.includes('grid')) {
			currentActiveView = 'grid';
		} else {
			currentActiveView = currentAvailableViews[0] || 'grid';
		}
	}

	let currentActiveStream = activeStream;
	const primaryStream = (packageData.manifest as Manifest)?.primary_stream;
	if (!currentActiveStream) {
		currentActiveStream = primaryStream && allStreams.includes(primaryStream)
			? primaryStream
			: (allStreams[0] || '');
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
	const optionsJson = buildWeaveOptionsJson(
		currentActiveView,
		definedStreamOrder,
		packageData.blockAttributesByUrn
	);
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
		packageData.projections['theme_layout'] ||
		'{{ body }}';
	const prefix = (packageData.manifest as any)?.prefix || (packageData.manifest as any)?.global_prefix || '';
	let itemsHtml = '';
	for (const node of viewNodes) {
		// Filter out container placeholder rows (e.g. 1:0 or ending in :0 / .0 or empty content)
		if (
			node.urn.endsWith(':0') ||
			node.urn.endsWith('.0') ||
			isPlaceholderContent(node.content)
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

		let annotationBadgesHtml = '';
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
						const speakerLoc = getVocabularyLabel(packageData.vocabulary, 'entities', speakerRaw, currentActiveStream, primaryStream) || speakerRaw;
						const speakerLabelLoc = getVocabularyLabel(packageData.vocabulary, 'actions', 'speaker', currentActiveStream, primaryStream) || 'Speaker';
						annotationBadgesHtml += `<span class="speaker-badge" title="${speakerLabelLoc}: ${speakerLoc}">🗣️ ${speakerLoc}</span>`;
					}
				} else if (ann.label === 'Note' && ann.attributes) {
					const noteText =
						ann.attributes.content ||
						ann.attributes.text ||
						ann.attributes.value ||
						'Editorial Note';
					const noteLabelLoc = getVocabularyLabel(packageData.vocabulary, 'actions', 'note', currentActiveStream, primaryStream) || 'Note';
					annotationBadgesHtml += `<span class="note-badge" title="${noteLabelLoc}: ${noteText}">📝</span>`;
				}
			}
		}

		const displayContent = prepareDisplayContent(node.content);

		if (isDocumentLayout) {
			itemsHtml += `<div id="${node.urn}" class="urn-content-doc">${displayContent}</div>`;
		} else {
			const badgesBlock = annotationBadgesHtml ? `<div class="gutter-annotations">${annotationBadgesHtml}</div>` : '';
			itemsHtml += `<div id="${node.urn}" class="urn-row">
	<div class="urn-gutter left-gutter"><div class="urn-badge-wrapper"><span class="urn-badge">${shortUrn}</span></div>${badgesBlock}</div>
	<div class="urn-content"><div class="urn-text">${displayContent}</div></div>
</div>`;
		}
	}

	let finalHtml = layoutTpl.replace('{{ body }}', itemsHtml);
	if (!isDocumentLayout) {
		const viewerChromeCss = `<style>
/* Core Viewer Chrome & Gutters (Decoupled from Publisher) */
.urn-row {
	display: flex;
	align-items: flex-start;
	gap: ${showReferenceGutter || showAnnotationGutter ? '1.25rem' : '0'};
	padding: 1.5rem 0;
	border-bottom: 1px solid #eee;
	width: 100%;
}
.left-gutter {
	display: ${showReferenceGutter || showAnnotationGutter ? 'flex' : 'none'};
	flex-direction: column;
	gap: 0.5rem;
	flex: 0 0 ${showAnnotationGutter ? '120px' : '50px'};
	position: sticky;
	top: 1rem;
	font-family: monospace;
	font-size: 0.85rem;
}
.urn-badge-wrapper {
	display: ${showReferenceGutter ? 'block' : 'none'};
}
.urn-content {
	flex: 1 1 0%;
	min-width: 0;
}
.gutter-annotations {
	display: ${showAnnotationGutter ? 'flex' : 'none'};
	flex-direction: column;
	gap: 0.35rem;
	align-items: flex-start;
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
	gap: 0.25rem;
	padding: 0.2rem 0.4rem;
	background: #f4f4f4;
	color: #444;
	border: none;
	border-radius: 4px;
	font-size: 0.75rem;
	line-height: 1.3;
	font-family: var(--font-sans, sans-serif);
	word-break: break-word;
	max-width: 100%;
}
.speaker-badge:hover, .note-badge:hover {
	background: #e0e0e0;
	color: #222;
}
/* pre-wrap preserves publisher blank lines; pre-line collapses them and fights preserve-whitespace pubs */
.vyasa-layout-col, .urn-text, .urn-content-doc {
	white-space: pre-wrap;
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
		availableStreams: allStreams,
		activeStream: currentActiveStream
	};
}
