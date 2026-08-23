<script lang="ts">
	import { Button, Input } from '@project-vyasa/vyasa-ui';
	import {
		ALargeSmall,
		ChevronLeft,
		ChevronRight,
		Columns2,
		Hash,
		Layers,
		Maximize2,
		Minimize2,
		Moon,
		Rows2,
		Sliders,
		Sun,
		X
	} from 'lucide-svelte';
	import { untrack } from 'svelte';
	import { defaultGridTextFromStreams } from '$lib/viewer/grid-default-layout';
	import { cycleContentTextSize, cycleContentTheme } from '$lib/viewer/content-presentation';
	import { viewerSettings } from '$lib/settings.svelte';
	import CopyVyasaLinkButton from './CopyVyasaLinkButton.svelte';

	interface Props {
		urn: string;
		urnComponents: string[];
		currentUrnParts: string[];
		isFullWidth: boolean;
		activeView?: string;
		availableViews?: string[];
		availableStreams?: string[];
		customGridLayoutJson?: string;
		isDocumentLayout?: boolean;
		vyasaUri?: string;
		showReferenceGutter?: boolean;
		onNavigatePrev: () => void;
		onNavigateNext: () => void;
		onNavigateUrn: () => void;
		onToggleFullWidth: () => void;
	}

	let {
		urn,
		urnComponents,
		currentUrnParts = $bindable(),
		isFullWidth = $bindable(),
		activeView = $bindable(),
		availableViews = [],
		availableStreams = [],
		customGridLayoutJson = $bindable(),
		isDocumentLayout = false,
		vyasaUri = '',
		showReferenceGutter = $bindable(true),
		onNavigatePrev,
		onNavigateNext,
		onNavigateUrn,
		onToggleFullWidth
	}: Props = $props();

	let showCustomizer = $state(false);
	let customGridText = $state('');
	let customColumnCount = $state<number>(0);
	let textareaEl = $state<HTMLTextAreaElement | null>(null);
	let lastStreamsKey = $state('');

	function defaultGridTextForStreams(streams: string[]): string {
		return defaultGridTextFromStreams(streams);
	}

	$effect(() => {
		const streams = availableStreams || [];
		const streamsKey = streams.join('|');
		if (streams.length === 0 || streamsKey === lastStreamsKey) return;
		lastStreamsKey = streamsKey;
		untrack(() => {
			customGridText = defaultGridTextForStreams(streams);
			customColumnCount = 0;
		});
	});

	function insertStreamChip(stream: string) {
		if (textareaEl && typeof textareaEl.selectionStart === 'number') {
			const start = textareaEl.selectionStart;
			const end = textareaEl.selectionEnd;
			const before = customGridText.slice(0, start);
			const after = customGridText.slice(end);
			const needsComma = before.length > 0 && !before.endsWith('\n') && !before.endsWith(', ');
			const insertText = (needsComma ? ', ' : '') + stream;
			customGridText = before + insertText + after;
			setTimeout(() => {
				textareaEl?.focus();
				textareaEl?.setSelectionRange(start + insertText.length, start + insertText.length);
			}, 0);
		} else {
			customGridText = customGridText ? `${customGridText}, ${stream}` : stream;
		}
		parseCustomGridText();
	}

	function parseCustomGridText() {
		const lines = customGridText
			.split('\n')
			.map((l) => l.trim())
			.filter(Boolean);
		let derivedMaxCols = 1;
		const rowsRaw: string[][] = [];
		for (const line of lines) {
			const cols = line
				.split(',')
				.map((c) => c.trim())
				.filter(Boolean);
			if (cols.length > derivedMaxCols) derivedMaxCols = cols.length;
			rowsRaw.push(cols);
		}
		const effectiveCols = customColumnCount > 0 ? customColumnCount : derivedMaxCols;
		const rows = rowsRaw.map((cols) => {
			const span = cols.length < effectiveCols && effectiveCols > 1 ? effectiveCols : 1;
			return cols.map((col, idx) => {
				const item: { block: string; span?: number } = { block: col };
				if (idx === 0 && span > 1 && cols.length === 1) item.span = span;
				return item;
			});
		});
		const layoutObj: any = { rows };
		if (customColumnCount > 0) layoutObj.columns = customColumnCount;
		customGridLayoutJson = JSON.stringify(layoutObj);
	}

	function cycleTypeSize() {
		viewerSettings.contentTextSize = cycleContentTextSize(viewerSettings.contentTextSize);
	}

	function cyclePaperTheme() {
		viewerSettings.contentTheme = cycleContentTheme(viewerSettings.contentTheme);
	}

	function viewLabel(view: string): string {
		if (view === 'grid') return 'Grid (columns)';
		if (view === 'reading') return 'Reading (stacked)';
		return view.charAt(0).toUpperCase() + view.slice(1);
	}

	function cycleView() {
		const views = availableViews;
		if (views.length < 2) return;
		const current = activeView ?? views[0];
		const i = views.indexOf(current);
		activeView = views[(i < 0 ? 0 : i + 1) % views.length];
	}

	const typeSizeTitle = $derived(
		`Content text size: ${viewerSettings.contentTextSize} (click to cycle)`
	);
	const currentView = $derived(activeView ?? availableViews[0] ?? 'grid');
	const viewIcon = $derived(
		currentView === 'grid' ? Columns2 : currentView === 'reading' ? Rows2 : Layers
	);
	const viewTitle = $derived(`View: ${viewLabel(currentView)} (click to cycle)`);
</script>

<div class="nav-bar-container">
	<div class="nav-cluster nav-cluster-start">
		{#if availableViews && availableViews.length > 1 && !isDocumentLayout}
			<Button
				variant="ghost"
				size="icon"
				icon={viewIcon}
				title={viewTitle}
				onclick={cycleView}
			/>
		{/if}
		<Button
			variant="ghost"
			size="icon"
			class="type-size-btn"
			icon={ALargeSmall}
			title={typeSizeTitle}
			onclick={cycleTypeSize}
		/>
	</div>

	<div class="nav-bar-inner">
		<Button
			variant="ghost"
			size="icon"
			icon={ChevronLeft}
			title="Previous"
			onclick={onNavigatePrev}
		/>
		<div class="nav-bar-inputs">
			{#if urnComponents.length > 0}
				{@const lastIdx = urnComponents.length - 1}
				<div class="urn-input-wrapper">
					<Input
						bind:value={currentUrnParts[lastIdx]}
						onkeydown={(e) => e.key === 'Enter' && onNavigateUrn()}
						onblur={onNavigateUrn}
						placeholder={urnComponents[lastIdx]}
						style="text-align: center; font-family: var(--font-mono); font-size: small;"
					/>
				</div>
			{:else}
				<div class="urn-readonly">{urn}</div>
			{/if}
		</div>
		<Button variant="ghost" size="icon" icon={ChevronRight} title="Next" onclick={onNavigateNext} />
	</div>

	<div class="nav-cluster nav-cluster-end">
		{#if vyasaUri}
			<CopyVyasaLinkButton vyasaUri={vyasaUri} title="Copy link to this page" />
		{/if}
		<Button
			variant="ghost"
			size="icon"
			icon={isFullWidth ? Minimize2 : Maximize2}
			title="Toggle Full Width"
			onclick={onToggleFullWidth}
		/>
		<Button
			variant="ghost"
			size="icon"
			icon={viewerSettings.contentTheme === 'dark' ? Moon : Sun}
			title="Content theme: {viewerSettings.contentTheme} (click to toggle paper)"
			onclick={cyclePaperTheme}
		/>
		{#if !isDocumentLayout}
			<Button
				variant={showReferenceGutter ? 'secondary' : 'ghost'}
				size="icon"
				icon={Hash}
				title={showReferenceGutter ? 'Hide verse gutter' : 'Show verse gutter'}
				onclick={() => (showReferenceGutter = !showReferenceGutter)}
			/>
		{/if}
		{#if activeView === 'grid' && availableStreams && availableStreams.length > 0 && !isDocumentLayout}
			<Button
				variant="outline"
				size="icon"
				icon={Sliders}
				title="Customize grid layout"
				onclick={() => (showCustomizer = !showCustomizer)}
			/>
		{/if}
	</div>

	<!-- Floating Grid Customizer Popover -->
	{#if showCustomizer && availableStreams.length > 0}
		<div class="customizer-popover">
			<div class="customizer-header">
				<span class="customizer-title">Arrange Grid Columns & Rows</span>
				<Button variant="ghost" size="icon" icon={X} onclick={() => (showCustomizer = false)} />
			</div>
			<div class="customizer-body">
				<p class="customizer-instructions">
					Click stream chips below to add them into the layout input (prevents typos). Each line
					defines a row; comma-separate columns on the same row.
				</p>
				<div
					class="col-selector"
					style="display: flex; align-items: center; gap: var(--space-2); margin: 4px 0;"
				>
					<span style="font-size: var(--text-xs); color: var(--text-secondary); font-weight: 500;"
						>Columns:</span
					>
					<div style="display: flex; gap: 4px;">
						{#each [0, 1, 2, 3] as cols (cols)}
							<button
								type="button"
								class="col-btn {customColumnCount === cols ? 'active' : ''}"
								onclick={() => {
									customColumnCount = cols;
									parseCustomGridText();
								}}
							>
								{cols === 0 ? 'Auto' : cols}
							</button>
						{/each}
					</div>
				</div>
				<div class="stream-chips">
					{#each availableStreams as s (s)}
						<button type="button" class="stream-chip" onclick={() => insertStreamChip(s)}
							>+ {s}</button
						>
					{/each}
				</div>
				<textarea
					bind:this={textareaEl}
					bind:value={customGridText}
					oninput={parseCustomGridText}
					class="custom-grid-textarea"
					rows="4"
					placeholder="mula, devanagari&#10;translation&#10;purport"></textarea>
			</div>
			<div class="customizer-footer">
				<span class="customizer-hint">Changes apply instantly to the grid view below.</span>
				<Button size="sm" onclick={() => (showCustomizer = false)}>Done</Button>
			</div>
		</div>
	{/if}
</div>

<style>
	.nav-bar-container {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		padding: var(--space-2);
		background-color: var(--bg-surface);
		border-bottom: 1px solid var(--border-base);
	}
	.nav-bar-inner {
		display: flex;
		align-items: center;
		gap: 0;
		background-color: var(--bg-surface-alt);
		border-radius: var(--control-radius);
		padding: 2px;
	}
	.nav-bar-inputs {
		display: flex;
		align-items: center;
		padding: 0 var(--space-3);
		border-left: 1px solid var(--border-base);
		border-right: 1px solid var(--border-base);
	}
	.urn-input-wrapper {
		width: calc(3.5rem * var(--density, 1));
	}
	.urn-readonly {
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		min-width: 60px;
		text-align: center;
	}
	.nav-cluster {
		flex: 1;
		display: flex;
		align-items: center;
		gap: var(--space-1);
		min-width: 0;
	}
	.nav-cluster-start {
		justify-content: flex-start;
		padding-left: var(--space-1);
	}
	.nav-cluster-end {
		justify-content: flex-end;
		padding-right: var(--space-1);
	}
	/* Lucide ALargeSmall uses ~40% of the 24×24 box (shared baseline). Other
	   toolbar icons use ~75%. Scale so the letters match Hash/Sun optically. */
	.nav-bar-container :global(.type-size-btn.btn svg) {
		width: calc(1.9rem * var(--density));
		height: calc(1.9rem * var(--density));
	}

	/* Customizer Popover Styles */
	.customizer-popover {
		position: absolute;
		top: calc(100% + 6px);
		right: var(--space-2);
		left: auto;
		z-index: 100;
		background-color: var(--bg-surface);
		border: 1px solid var(--border-strong);
		border-radius: var(--radius-md);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
		width: min(440px, calc(100% - 2 * var(--space-2)));
		padding: var(--space-3);
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}
	.customizer-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid var(--border-base);
		padding-bottom: var(--space-2);
	}
	.customizer-title {
		font-weight: 600;
		font-size: var(--text-sm);
		color: var(--text-primary);
	}
	.customizer-instructions {
		font-size: var(--text-xs);
		color: var(--text-secondary);
		margin: 0;
		line-height: 1.4;
	}
	.stream-chips {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-1);
	}
	.stream-chip {
		background: var(--bg-surface-alt);
		border: 1px solid var(--border-strong);
		color: var(--text-primary);
		padding: 2px 8px;
		border-radius: 999px;
		font-size: var(--text-xs);
		font-family: var(--font-mono);
		cursor: pointer;
		transition: all 0.15s ease;
	}
	.stream-chip:hover {
		background: var(--bg-primary);
		color: var(--text-on-primary);
		border-color: var(--bg-primary);
	}
	.custom-grid-textarea {
		width: 100%;
		background: var(--bg-surface-alt);
		color: var(--text-primary);
		border: 1px solid var(--border-base);
		border-radius: var(--radius-sm);
		padding: var(--space-2);
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		resize: vertical;
	}
	.customizer-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: var(--space-1);
	}
	.customizer-hint {
		font-size: 11px;
		color: var(--text-tertiary);
	}
	.col-btn {
		background: var(--bg-surface-alt);
		border: 1px solid var(--border-base);
		color: var(--text-secondary);
		padding: 2px 8px;
		border-radius: var(--radius-sm);
		font-size: var(--text-xs);
		font-family: var(--font-mono);
		cursor: pointer;
		transition: all 0.15s ease;
	}
	.col-btn:hover {
		border-color: var(--border-strong);
		color: var(--text-primary);
	}
	.col-btn.active {
		background: var(--bg-primary);
		color: var(--text-on-primary);
		border-color: var(--bg-primary);
		font-weight: 600;
	}
</style>
