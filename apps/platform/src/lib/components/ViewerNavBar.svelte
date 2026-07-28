<script lang="ts">
	import { Button, Input, Select } from '@project-vyasa/vyasa-ui';
	import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Sliders, X } from 'lucide-svelte';
	import { untrack } from 'svelte';

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
		onNavigatePrev,
		onNavigateNext,
		onNavigateUrn,
		onToggleFullWidth
	}: Props = $props();

	let showCustomizer = $state(false);
	let customGridText = $state('');
	let customColumnCount = $state<number>(0);
	let textareaEl = $state<HTMLTextAreaElement | null>(null);

	$effect(() => {
		const streams = availableStreams || [];
		untrack(() => {
			if (streams.length > 0 && !customGridText) {
				const preferredTop = ['iast', 'mula', 'devanagari', 'sanskrit'];
				const top: string[] = [];
				const bottom: string[] = [];
				for (const pref of preferredTop) {
					if (streams.includes(pref) && top.length < 2) top.push(pref);
				}
				for (const s of streams) {
					if (!top.includes(s)) {
						if (top.length < 2 && streams.length <= 2) top.push(s);
						else bottom.push(s);
					}
				}
				const lines = [];
				if (top.length > 0) lines.push(top.join(', '));
				for (const b of bottom) lines.push(b);
				customGridText = lines.join('\n');
				parseCustomGridText();
			}
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
</script>

<div class="nav-bar-container">
	<!-- Left spacer / View Selector -->
	<div
		style="flex: 1; display: flex; justify-content: flex-start; align-items: center; gap: var(--space-2); padding-left: var(--space-2);"
	>
		{#if availableViews && availableViews.length > 1 && !isDocumentLayout}
			<div style="width: 160px;">
				<Select
					options={availableViews.map((v) => ({
						label: v === 'grid' ? 'Grid (Columns)' : v.charAt(0).toUpperCase() + v.slice(1),
						value: v
					}))}
					bind:value={activeView}
				/>
			</div>
		{/if}
		{#if activeView === 'grid' && availableStreams && availableStreams.length > 0 && !isDocumentLayout}
			<Button
				variant="outline"
				size="sm"
				icon={Sliders}
				title="Customize Grid Layout Columns & Rows"
				onclick={() => (showCustomizer = !showCustomizer)}
			>
				Customize
			</Button>
		{/if}
	</div>

	<!-- Centered URN Navigation -->
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

	<!-- Right-aligned Maximize Button -->
	<div
		style="flex: 1; display: flex; justify-content: flex-end; align-items: center; gap: var(--space-2); padding-right: var(--space-2);"
	>
		<Button
			variant="ghost"
			size="icon"
			icon={isFullWidth ? Minimize2 : Maximize2}
			title="Toggle Full Width"
			onclick={onToggleFullWidth}
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

	/* Customizer Popover Styles */
	.customizer-popover {
		position: absolute;
		top: calc(100% + 6px);
		left: var(--space-2);
		z-index: 100;
		background-color: var(--bg-surface);
		border: 1px solid var(--border-strong);
		border-radius: var(--radius-md);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
		width: 440px;
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
