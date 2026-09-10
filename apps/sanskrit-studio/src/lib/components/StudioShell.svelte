<script lang="ts">
	import {
		ActivityBar,
		ActivityBarItem,
		AppHeader,
		AppShell,
		Button
	} from '@project-vyasa/vyasa-ui';
	import { getContext, type Snippet } from 'svelte';
	import { base } from '$app/paths';
	import { Languages, Mic, LayoutGrid } from 'lucide-svelte';
	import { brandIconSrc } from '$lib/brand';
	import { viewerHref } from '$lib/pages-apps';

	export type StudioActivity = 'lipi' | 'patha' | 'phonetics';

	interface Props {
		activity: StudioActivity;
		children?: Snippet;
	}

	let { activity = $bindable(), children }: Props = $props();

	const themeContext = getContext<{
		current: 'light' | 'dark';
		theme: 'light' | 'dark' | 'system';
		toggleTheme: () => void;
	}>('theme');

	const titles: Record<StudioActivity, string> = {
		lipi: 'Lipi — Transliteration',
		patha: 'Pāṭha — Krama recitation',
		phonetics: 'Varṇa — Phonetics'
	};
</script>

<AppShell>
	{#snippet header()}
		<AppHeader
			appName="Sanskrit Studio"
			href={base || '/'}
			logoSrc={brandIconSrc(base)}
			logoAlt="Project Vyasa"
			{themeContext}
		>
			{#snippet headerRight()}
				<a class="sibling-app" href={viewerHref()} data-sveltekit-reload>Viewer</a>
			{/snippet}
			<span class="header-activity">{titles[activity]}</span>
		</AppHeader>
	{/snippet}

	{#snippet appBar()}
		<ActivityBar>
			{#snippet top()}
				<ActivityBarItem active={activity === 'lipi'}>
					{#snippet children()}
						<Button
							variant="ghost"
							size="icon"
							class="activity-item"
							icon={Languages}
							title="Lipi: Transliteration"
							onclick={() => (activity = 'lipi')}
						/>
					{/snippet}
				</ActivityBarItem>
				<ActivityBarItem active={activity === 'patha'}>
					{#snippet children()}
						<Button
							variant="ghost"
							size="icon"
							class="activity-item"
							icon={Mic}
							title="Pāṭha: Krama & recitation"
							onclick={() => (activity = 'patha')}
						/>
					{/snippet}
				</ActivityBarItem>
				<ActivityBarItem active={activity === 'phonetics'}>
					{#snippet children()}
						<Button
							variant="ghost"
							size="icon"
							class="activity-item"
							icon={LayoutGrid}
							title="Varṇa: Articulatory phonetics"
							onclick={() => (activity = 'phonetics')}
						/>
					{/snippet}
				</ActivityBarItem>
			{/snippet}
		</ActivityBar>
	{/snippet}

	<div class="canvas">
		{@render children?.()}
	</div>
</AppShell>

<style>
	.header-activity {
		color: var(--text-secondary);
		font-size: var(--text-sm);
	}

	.sibling-app {
		font-size: var(--text-xs);
		color: var(--text-secondary);
		text-decoration: none;
		white-space: nowrap;
		margin-right: var(--space-2);
	}

	.sibling-app:hover {
		color: var(--text-primary);
		text-decoration: underline;
	}

	.canvas {
		display: flex;
		flex-direction: column;
		min-height: 0;
		height: 100%;
		width: 100%;
	}

	:global(.activity-item) {
		width: 100%;
		border-radius: 0;
	}
</style>
