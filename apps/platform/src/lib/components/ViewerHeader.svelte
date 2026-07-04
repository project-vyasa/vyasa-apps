<script lang="ts">
	import { Button } from '@project-vyasa/vyasa-ui';
	import { Menu, Sun, Moon, Maximize2, PanelRight } from 'lucide-svelte';
	import { getContext } from 'svelte';

	interface Props {
		leftVisible?: boolean;
		rightVisible?: boolean;
		showRightToggle?: boolean;
	}

	let { 
		leftVisible = $bindable(false), 
		rightVisible = $bindable(false),
		showRightToggle = true 
	}: Props = $props();

	const themeContext = getContext<{ toggleTheme: () => void; cycleDensity: () => void; current: 'light' | 'dark' }>('theme');
</script>

<div class="header-container">
	<div class="header-left">
		<Button variant="ghost" size="icon" icon={Menu} onclick={() => leftVisible = !leftVisible} />
		<h1 class="header-title">Vyasa Viewer</h1>
	</div>
	
	<div class="header-right">
		{#if themeContext}
			<Button variant="ghost" size="icon" icon={themeContext.current === 'dark' ? Sun : Moon} title="Toggle Theme" onclick={themeContext.toggleTheme} />
			<Button variant="ghost" size="icon" icon={Maximize2} title="Toggle Density" onclick={themeContext.cycleDensity} />
		{/if}
		{#if showRightToggle}
			<Button 
				variant={rightVisible ? 'secondary' : 'ghost'} 
				size="icon" 
				icon={PanelRight} 
				title="Toggle Right Sidebar" 
				onclick={() => rightVisible = !rightVisible} 
			/>
		{/if}
	</div>
</div>

<style>
	.header-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		padding: 0 var(--space-4);
		background-color: var(--bg-surface-alt);
	}
	.header-left, .header-right {
		display: flex;
		align-items: center;
		gap: var(--space-4);
	}
	.header-right {
		gap: var(--space-2);
	}
	.header-title {
		font-size: var(--text-lg);
		font-weight: var(--font-semibold);
		margin: 0;
	}
</style>
