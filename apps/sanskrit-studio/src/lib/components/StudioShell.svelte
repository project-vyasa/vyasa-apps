<script lang="ts">
	import {
		ActivityBar,
		ActivityBarItem,
		AppHeader,
		AppShell,
		Button
	} from '@project-vyasa/vyasa-ui';
	import { chromeLabels } from '@project-vyasa/sanskrit';
	import { getContext, type Snippet } from 'svelte';
	import { base } from '$app/paths';
	import { Languages, Mic, LayoutGrid } from 'lucide-svelte';
	import { brandIconSrc } from '$lib/brand';
	import ChromeScriptSelect from './ChromeScriptSelect.svelte';

	export type StudioActivity = 'lipi' | 'patha' | 'phonetics';

	interface Props {
		activity: StudioActivity;
		children?: Snippet;
	}

	let { activity = $bindable(), children }: Props = $props();

	$effect(() => {
		void chromeLabels.init();
	});

	const themeContext = getContext<{
		current: 'light' | 'dark';
		theme: 'light' | 'dark' | 'system';
		toggleTheme: () => void;
	}>('theme');

	const titles = $derived({
		lipi: `${chromeLabels.sa('Lipi')} — Transliteration`,
		patha: `${chromeLabels.sa('Pāṭha')} — recitation`,
		phonetics: `${chromeLabels.sa('Varṇa')} — Phonetics`
	} satisfies Record<StudioActivity, string>);
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
				<ChromeScriptSelect />
			{/snippet}
			<span class="header-activity font-sanskrit">{titles[activity]}</span>
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
							title="{chromeLabels.sa('Lipi')}: Transliteration"
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
							title="{chromeLabels.sa('Pāṭha')}: recitation"
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
							title="{chromeLabels.sa('Varṇa')}: Articulatory phonetics"
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

	:global(.app-header .app-title)::after {
		content: 'Experimental';
		margin-left: 0.35rem;
		padding: 0.08rem 0.4rem;
		font-size: 0.65rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--text-tertiary);
		border: 1px solid var(--border-base);
		border-radius: var(--control-radius);
		white-space: nowrap;
		line-height: 1.3;
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
