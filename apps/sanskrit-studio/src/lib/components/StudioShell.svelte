<script lang="ts">
	import {
		ActivityBar,
		ActivityBarItem,
		AppHeader,
		AppShell,
		Badge,
		Button
	} from '@project-vyasa/vyasa-ui';
	import { chromeLabels } from '@project-vyasa/sanskrit';
	import { getContext, type Snippet } from 'svelte';
	import { base } from '$app/paths';
	import { Languages, Mic, LayoutGrid } from 'lucide-svelte';
	import { brandIconSrc } from '$lib/brand';
	import { AppSwitcher } from '@project-vyasa/platform-chrome';
	import { dev } from '$app/environment';
	import { otherPlatformApps, pagesAppGuideHref } from '../../../../../scripts/gh-pages-apps.mjs';
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
				<AppSwitcher
					apps={otherPlatformApps('sanskrit-studio', { dev })}
					guideHref={pagesAppGuideHref('sanskrit-studio', { dev })}
				/>
				<ChromeScriptSelect />
			{/snippet}
			<span class="header-activity">
				<Badge variant="warning">Experimental</Badge>
				<span class="font-sanskrit">{titles[activity]}</span>
			</span>
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
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		color: var(--text-secondary);
		font-size: var(--text-sm);
		min-width: 0;
	}

	.header-activity :global(.badge.warning) {
		flex: 0 0 auto;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-weight: 700;
		background: var(--color-yellow-400, #f5c518);
		color: var(--color-gray-950, #111);
		border: 1px solid var(--color-yellow-600, #c9a227);
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
