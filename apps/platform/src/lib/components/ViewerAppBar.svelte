<script lang="ts">
	import { Button, ActivityBar } from '@project-vyasa/vyasa-ui';
	import { Library, BookOpen, Compass, Bug, Settings, Monitor, Moon, Sun } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { getContext } from 'svelte';
	import SettingsModal from './SettingsModal.svelte';
	import { activePublication } from '$lib/viewer/active-publication.svelte';

	let settingsOpen = $state(false);

	// Synchronize active publication state from route parameters
	$effect(() => {
		const pub = page.params.publisher;
		const publicationId = page.params.publication;
		if (pub && publicationId) {
			activePublication.setPublication(pub, publicationId);
		}
		if (page.params.urn) {
			activePublication.setLastUrn(page.params.urn);
		}
	});

	const publisher = $derived(page.params.publisher || activePublication.publisher);
	const publication = $derived(page.params.publication || activePublication.publication);

	const active = $derived.by(() => {
		if (page.url.pathname.includes('/diagnostics')) return 'diagnostics';
		if (page.url.pathname.includes('/explore')) return 'explore';
		if (page.params.publication) return 'reader';
		return 'library';
	});

	const themeContext = getContext<{
		current: 'light' | 'dark';
		theme: 'light' | 'dark' | 'system';
		density: 'compact' | 'standard' | 'comfortable';
		toggleTheme: () => void;
		cycleDensity: () => void;
	}>('theme');
</script>

<ActivityBar>
	{#snippet top()}
		<Button
			variant={active === 'library' ? 'secondary' : 'ghost'}
			size="icon"
			icon={Library}
			title="Library"
			onclick={() => {
				goto(base || '/');
			}}
		/>
		{#if publication}
			<Button
				variant={active === 'explore' ? 'secondary' : 'ghost'}
				size="icon"
				icon={Compass}
				title="Explore"
				onclick={() => {
					if (active !== 'explore') goto(`${base}${activePublication.exploreUrl}`);
				}}
			/>
			<Button
				variant={active === 'reader' ? 'secondary' : 'ghost'}
				size="icon"
				icon={BookOpen}
				title="Reader"
				onclick={() => {
					if (active !== 'reader') goto(`${base}${activePublication.readerUrl}`);
				}}
			/>
		{:else}
			<Button
				variant="ghost"
				size="icon"
				icon={Compass}
				title="Explore (Select a publication first)"
				disabled
			/>
			<Button
				variant="ghost"
				size="icon"
				icon={BookOpen}
				title="Reader (Select a publication first)"
				disabled
			/>
		{/if}
	{/snippet}

	{#snippet bottom()}
		{#if themeContext}
			<Button
				variant="ghost"
				size="icon"
				icon={Monitor}
				onclick={() => themeContext.cycleDensity()}
				title="Toggle Density"
			/>
			<Button
				variant="ghost"
				size="icon"
				icon={themeContext.current === 'dark' ? Moon : Sun}
				onclick={() => themeContext.toggleTheme()}
				title="Toggle Theme"
			/>
		{/if}
		<Button
			variant={active === 'diagnostics' ? 'secondary' : 'ghost'}
			size="icon"
			icon={Bug}
			title="Diagnostics"
			onclick={() => {
				if (active !== 'diagnostics') goto(`${base}${activePublication.diagnosticsUrl}`);
			}}
		/>
		<Button
			variant="ghost"
			size="icon"
			icon={Settings}
			title="Settings"
			onclick={() => (settingsOpen = true)}
		/>
	{/snippet}
</ActivityBar>

<SettingsModal bind:open={settingsOpen} />
