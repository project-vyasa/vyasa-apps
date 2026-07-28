<script lang="ts">
	import { Button, ActivityBar, ActivityBarItem } from '@project-vyasa/vyasa-ui';
	import { Library, BookOpen, Compass, Bug, Settings, Terminal } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import SettingsModal from './SettingsModal.svelte';
	import { activePublication } from '$lib/viewer/active-publication.svelte';
	import { viewerSettings } from '$lib/settings.svelte';

	let settingsOpen = $state(false);

	// Synchronize active publication state from route parameters
	$effect(() => {
		const pub = page.params.publisher;
		const publicationId = page.params.publication;
		const catalogParam = page.url.searchParams.get('catalog');
		if (pub && publicationId) {
			activePublication.setPublication(pub, publicationId, catalogParam);
		}
		if (page.params.urn) {
			activePublication.setLastUrn(page.params.urn);
		}
	});

	const publication = $derived(page.params.publication || activePublication.publication);

	const active = $derived.by(() => {
		if (page.url.pathname.includes('/diagnostics')) return 'diagnostics';
		if (page.url.pathname.includes('/explore')) return 'explore';
		if (page.params.publication) return 'reader';
		return 'library';
	});
</script>

<ActivityBar>
	{#snippet top()}
		<ActivityBarItem active={active === 'library'}>
			{#snippet children()}
				<Button
					variant="ghost"
					size="icon"
					class="activity-item"
					icon={Library}
					title="Library"
					onclick={() => {
						goto(base || '/');
					}}
				/>
			{/snippet}
		</ActivityBarItem>
		{#if publication}
			<ActivityBarItem active={active === 'reader'}>
				{#snippet children()}
					<Button
						variant="ghost"
						size="icon"
						class="activity-item"
						icon={BookOpen}
						title="Reader"
						onclick={() => {
							if (active !== 'reader') goto(`${base}${activePublication.readerUrl}`);
						}}
					/>
				{/snippet}
			</ActivityBarItem>
			<ActivityBarItem active={active === 'explore'}>
				{#snippet children()}
					<Button
						variant="ghost"
						size="icon"
						class="activity-item"
						icon={Compass}
						title="Explore"
						onclick={() => {
							if (active !== 'explore') goto(`${base}${activePublication.exploreUrl}`);
						}}
					/>
				{/snippet}
			</ActivityBarItem>
		{:else}
			<ActivityBarItem>
				{#snippet children()}
					<Button
						variant="ghost"
						size="icon"
						class="activity-item"
						icon={BookOpen}
						title="Reader (Select a publication first)"
						disabled
					/>
				{/snippet}
			</ActivityBarItem>
			<ActivityBarItem>
				{#snippet children()}
					<Button
						variant="ghost"
						size="icon"
						class="activity-item"
						icon={Compass}
						title="Explore (Select a publication first)"
						disabled
					/>
				{/snippet}
			</ActivityBarItem>
		{/if}
	{/snippet}

	{#snippet bottom()}
		<ActivityBarItem active={viewerSettings.debugMode}>
			{#snippet children()}
				<Button
					variant="ghost"
					size="icon"
					class="activity-item"
					icon={Terminal}
					title={viewerSettings.debugMode ? 'Debug Mode: Active (Click or Ctrl+B to toggle)' : 'Debug Mode: Disabled (Click or Ctrl+B to toggle)'}
					onclick={() => (viewerSettings.debugMode = !viewerSettings.debugMode)}
				/>
			{/snippet}
		</ActivityBarItem>
		<ActivityBarItem active={active === 'diagnostics'}>
			{#snippet children()}
				<Button
					variant="ghost"
					size="icon"
					class="activity-item"
					icon={Bug}
					title="Diagnostics (Click or Ctrl+U to toggle)"
					onclick={() => {
						if (active !== 'diagnostics') {
							goto(`${base}${activePublication.diagnosticsUrl}`);
						} else if (activePublication.publication) {
							goto(`${base}${activePublication.readerUrl}`);
						} else {
							goto(`${base}/`);
						}
					}}
				/>
			{/snippet}
		</ActivityBarItem>
		<ActivityBarItem>
			{#snippet children()}
				<Button
					variant="ghost"
					size="icon"
					class="activity-item"
					icon={Settings}
					title="Settings"
					onclick={() => (settingsOpen = true)}
				/>
			{/snippet}
		</ActivityBarItem>
	{/snippet}
</ActivityBar>

<SettingsModal bind:open={settingsOpen} />
