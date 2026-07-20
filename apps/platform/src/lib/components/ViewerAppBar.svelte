<script lang="ts">
	import { Button, ActivityBar } from '@project-vyasa/vyasa-ui';
	import { Library, BookOpen, Bug, Settings, Monitor, Moon, Sun } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { getContext } from 'svelte';
	import SettingsModal from './SettingsModal.svelte';
	import DiagnosticsModal from './DiagnosticsModal.svelte';
	import type { Catalog, PackageData } from '$lib/types';

	interface Props {
		active: 'library' | 'reader' | 'home';
		expanded?: boolean;
		publisher?: string;
		publication?: string;
		diagRegistryUrl?: string;
		diagCatalogUrl?: string;
		diagPublicationUrl?: string;
		diagCatalog?: Catalog | null;
		packageData?: PackageData | null;
	}

	let {
		active,
		expanded = $bindable(false),
		publisher = '',
		publication = '',
		diagRegistryUrl,
		diagCatalogUrl,
		diagPublicationUrl,
		diagCatalog,
		packageData
	}: Props = $props();

	let settingsOpen = $state(false);
	let diagnosticsOpen = $state(false);

	const themeContext = getContext<{
		current: 'light' | 'dark';
		theme: 'light' | 'dark' | 'system';
		density: 'compact' | 'standard' | 'comfortable';
		toggleTheme: () => void;
		cycleDensity: () => void;
	}>('theme');
</script>

<ActivityBar bind:expanded>
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
				variant={active === 'reader' ? 'secondary' : 'ghost'}
				size="icon"
				icon={BookOpen}
				title="Reader"
				onclick={() => {
					// Only navigate if we aren't already on the reader for this publication
					if (active !== 'reader') goto(`${base}/${publisher}/${publication}`);
				}}
			/>
		{:else}
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
			variant="ghost"
			size="icon"
			icon={Bug}
			title="Diagnostics"
			onclick={() => (diagnosticsOpen = true)}
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
<DiagnosticsModal
	bind:open={diagnosticsOpen}
	{diagRegistryUrl}
	{diagCatalogUrl}
	{diagPublicationUrl}
	{diagCatalog}
	{packageData}
/>
