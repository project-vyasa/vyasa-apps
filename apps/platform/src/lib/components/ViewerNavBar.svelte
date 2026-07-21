<script lang="ts">
	import { Button, Input } from '@project-vyasa/vyasa-ui';
	import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-svelte';

	interface Props {
		urn: string;
		urnComponents: string[];
		currentUrnParts: string[];
		isFullWidth: boolean;
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
		onNavigatePrev,
		onNavigateNext,
		onNavigateUrn,
		onToggleFullWidth
	}: Props = $props();
</script>

<div class="nav-bar-container">
	<!-- Left spacer to keep navigation perfectly centered -->
	<div style="flex: 1; display: flex; justify-content: flex-start;"></div>

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
						style="text-align: center; font-family: var(--font-mono);"
					/>
				</div>
			{:else}
				<div class="urn-readonly">{urn}</div>
			{/if}
		</div>
		<Button variant="ghost" size="icon" icon={ChevronRight} title="Next" onclick={onNavigateNext} />
	</div>

	<!-- Right-aligned Maximize Button -->
	<div style="flex: 1; display: flex; justify-content: flex-end; padding-right: var(--space-2);">
		<Button
			variant="ghost"
			size="icon"
			icon={isFullWidth ? Minimize2 : Maximize2}
			title="Toggle Full Width"
			onclick={onToggleFullWidth}
		/>
	</div>
</div>

<style>
	.nav-bar-container {
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
</style>
