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
		Star,
		Sun,
		X
	} from 'lucide-svelte';
	import { untrack } from 'svelte';
	import { MediaQuery } from 'svelte/reactivity';
	import { defaultGridTextFromStreams } from '$lib/viewer/grid-default-layout';
	import { cycleContentTextSize, cycleContentTheme } from '$lib/viewer/content-presentation';
	import { formatUrnDisplay } from '$lib/viewer/urn-recents';
	import { viewerSettings } from '$lib/settings.svelte';
	import CopyVyasaLinkButton from './CopyVyasaLinkButton.svelte';

	interface Props {
		urn: string;
		urnComponents: string[];
		isFullWidth: boolean;
		activeView?: string;
		availableViews?: string[];
		availableStreams?: string[];
		customGridLayoutJson?: string;
		isDocumentLayout?: boolean;
		vyasaUri?: string;
		showReferenceGutter?: boolean;
		urnRecents?: string[];
		urnFavorites?: string[];
		onNavigatePrev: () => void;
		onNavigateNext: () => void;
		onGoToUrn: (target: string) => void;
		onToggleUrnFavorite: (target?: string) => void;
		onToggleFullWidth: () => void;
	}

	let {
		urn,
		urnComponents,
		isFullWidth = $bindable(),
		activeView = $bindable(),
		availableViews = [],
		availableStreams = [],
		customGridLayoutJson = $bindable(),
		isDocumentLayout = false,
		vyasaUri = '',
		showReferenceGutter = $bindable(true),
		urnRecents = [],
		urnFavorites = [],
		onNavigatePrev,
		onNavigateNext,
		onGoToUrn,
		onToggleUrnFavorite,
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
		const next = views[(i < 0 ? 0 : i + 1) % views.length];
		if (next !== 'grid') showCustomizer = false;
		activeView = next;
	}

	const typeSizeTitle = $derived(
		`Content text size: ${viewerSettings.contentTextSize} (click to cycle)`
	);
	const currentView = $derived(activeView ?? availableViews[0] ?? 'grid');
	const viewIcon = $derived(
		currentView === 'grid' ? Columns2 : currentView === 'reading' ? Rows2 : Layers
	);
	const viewTitle = $derived(`View: ${viewLabel(currentView)} (click to cycle)`);
	const compact = new MediaQuery('max-width: 48rem');
	let draftUrn = $state('');
	let showJumpList = $state(false);
	const starred = $derived(Boolean(urn) && urn !== 'root' && urnFavorites.includes(urn));
	const recentOnly = $derived(urnRecents.filter((item) => !urnFavorites.includes(item)));
	const hasJumpList = $derived(urnFavorites.length > 0 || recentOnly.length > 0);

	$effect(() => {
		const routeUrn = urn;
		untrack(() => {
			if (routeUrn && routeUrn !== 'root') draftUrn = routeUrn;
		});
	});

	function submitFullUrn() {
		showJumpList = false;
		onGoToUrn(draftUrn);
	}

	function pickJump(item: string) {
		draftUrn = item;
		showJumpList = false;
		onGoToUrn(item);
	}

	function unstarJump(item: string) {
		onToggleUrnFavorite(item);
	}
</script>

<div class="nav-bar-container" class:pack-start={compact.current}>
	<div class="nav-cluster nav-cluster-start">
		<Button
			variant="ghost"
			size="icon"
			class="type-size-btn"
			icon={ALargeSmall}
			title={typeSizeTitle}
			onclick={cycleTypeSize}
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
		{#if availableViews && availableViews.length > 1 && !isDocumentLayout}
			<Button variant="ghost" size="icon" icon={viewIcon} title={viewTitle} onclick={cycleView} />
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

	<div class="nav-bar-inner">
		{#if !compact.current}
			<Button
				variant="ghost"
				size="icon"
				icon={ChevronLeft}
				title="Previous"
				onclick={onNavigatePrev}
			/>
		{/if}
		<div class="nav-bar-inputs" class:urn-field-only={compact.current}>
			<div class="urn-input-wrapper" class:urn-input-full={compact.current}>
				<Input
					bind:value={draftUrn}
					onkeydown={(e) => e.key === 'Enter' && submitFullUrn()}
					onfocus={() => (showJumpList = hasJumpList)}
					onblur={() => (showJumpList = false)}
					placeholder={urnComponents.length ? urnComponents.join(':') : 'URN'}
					title={compact.current
						? 'Go to URN. Swipe the text left for next, right for previous.'
						: 'Go to URN'}
					style="text-align: center; font-family: var(--font-mono); font-size: small;"
				/>
			</div>
			<Button
				variant={starred ? 'secondary' : 'ghost'}
				size="icon"
				icon={Star}
				class={starred ? 'urn-star-btn starred' : 'urn-star-btn'}
				title={starred ? 'Unstar this URN' : 'Star this URN'}
				disabled={!urn || urn === 'root'}
				onclick={() => onToggleUrnFavorite()}
			/>
		</div>
		{#if !compact.current}
			<Button
				variant="ghost"
				size="icon"
				icon={ChevronRight}
				title="Next"
				onclick={onNavigateNext}
			/>
		{/if}
	</div>

	{#if showJumpList && hasJumpList}
		<div class="urn-jump-list">
			{#if urnFavorites.length > 0}
				<div class="urn-jump-heading">Saved</div>
				<ul class="urn-jump-items">
					{#each urnFavorites as item (item)}
						<li class="urn-jump-row">
							<button
								type="button"
								class="urn-recent-item"
								onmousedown={(e) => e.preventDefault()}
								onclick={() => pickJump(item)}
							>
								{formatUrnDisplay(item)}
							</button>
							<button
								type="button"
								class="urn-unstar"
								title="Unstar {formatUrnDisplay(item)}"
								onmousedown={(e) => e.preventDefault()}
								onclick={() => unstarJump(item)}
							>
								<Star size={14} />
							</button>
						</li>
					{/each}
				</ul>
			{/if}
			{#if recentOnly.length > 0}
				<div class="urn-jump-heading">Recent</div>
				<ul class="urn-jump-items">
					{#each recentOnly as item (item)}
						<li>
							<button
								type="button"
								class="urn-recent-item"
								onmousedown={(e) => e.preventDefault()}
								onclick={() => pickJump(item)}
							>
								{formatUrnDisplay(item)}
							</button>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/if}

	<div class="nav-cluster nav-cluster-end">
		{#if vyasaUri}
			<CopyVyasaLinkButton {vyasaUri} title="Copy link to this page" />
		{/if}
		{#if !compact.current}
			<Button
				variant="ghost"
				size="icon"
				icon={isFullWidth ? Minimize2 : Maximize2}
				title={isFullWidth ? 'Constrain content width' : 'Use full width'}
				onclick={onToggleFullWidth}
			/>
		{/if}
		<Button
			variant="ghost"
			size="icon"
			icon={viewerSettings.contentTheme === 'dark' ? Moon : Sun}
			title="Content theme: {viewerSettings.contentTheme} (click to toggle paper)"
			onclick={cyclePaperTheme}
		/>
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
		flex-wrap: nowrap;
		flex-shrink: 0;
		align-items: center;
		gap: 0;
		background-color: var(--bg-surface-alt);
		border-radius: var(--control-radius);
		padding: 2px;
	}
	.nav-bar-inputs {
		display: flex;
		align-items: center;
		padding: 0 var(--space-2);
		border-left: 1px solid var(--border-base);
		border-right: 1px solid var(--border-base);
		gap: 2px;
	}
	.nav-bar-inputs.urn-field-only {
		padding: 0 2px;
		border-left: none;
		border-right: none;
	}
	.urn-input-wrapper {
		width: calc(8.5rem * var(--density, 1));
	}
	.urn-input-full {
		width: 5rem;
	}
	.urn-input-full :global(.input-wrapper) {
		padding-inline: 0.25rem;
	}
	.urn-jump-list {
		position: absolute;
		top: calc(100% - 4px);
		left: 50%;
		transform: translateX(-50%);
		z-index: 80;
		margin: 0;
		padding: var(--space-1);
		min-width: 10rem;
		background: var(--bg-surface);
		border: 1px solid var(--border-strong);
		border-radius: var(--radius-md);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
	}
	.urn-jump-heading {
		padding: 0.2rem 0.6rem 0.1rem;
		font-size: var(--text-xs);
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--text-secondary);
	}
	.urn-jump-items {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.urn-jump-row {
		display: flex;
		align-items: center;
		gap: 2px;
	}
	.urn-jump-row .urn-recent-item {
		flex: 1;
		min-width: 0;
	}
	.urn-unstar {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		width: 1.6rem;
		height: 1.6rem;
		padding: 0;
		border: none;
		border-radius: var(--radius-sm);
		background: transparent;
		color: var(--text-secondary);
		cursor: pointer;
	}
	.urn-unstar :global(svg) {
		fill: currentColor;
	}
	.urn-unstar:hover {
		color: var(--text-primary);
		background: var(--bg-surface-alt);
	}
	.nav-bar-container :global(.urn-star-btn.starred svg) {
		fill: currentColor;
	}
	.urn-recent-item {
		display: block;
		width: 100%;
		padding: 0.35rem 0.6rem;
		border: none;
		background: transparent;
		color: var(--text-primary);
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		text-align: left;
		cursor: pointer;
		border-radius: var(--radius-sm);
	}
	.urn-recent-item:hover {
		background: var(--bg-surface-alt);
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
	.nav-bar-container.pack-start .nav-cluster-start {
		flex: 0 0 auto;
	}
	.nav-bar-container.pack-start .nav-cluster-end {
		min-width: 0;
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
