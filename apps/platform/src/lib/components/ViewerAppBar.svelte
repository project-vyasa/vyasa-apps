<script lang="ts">
	import { Button, AppBar } from '@project-vyasa/vyasa-ui';
	import { Library, BookOpen, Bug, Settings } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import SettingsModal from './SettingsModal.svelte';
	import DiagnosticsModal from './DiagnosticsModal.svelte';
	import type { Catalog, PackageData } from '$lib/types';

	interface Props {
		active: 'library' | 'reader' | 'home';
		publisher?: string;
		publication?: string;
		diagRegistryUrl?: string;
		diagCatalogUrl?: string;
		diagCatalog?: Catalog | null;
		packageData?: PackageData | null;
	}

	let { 
		active, 
		publisher = '', 
		publication = '',
		diagRegistryUrl,
		diagCatalogUrl,
		diagCatalog,
		packageData
	}: Props = $props();

	let settingsOpen = $state(false);
	let diagnosticsOpen = $state(false);
</script>

<AppBar>
	{#snippet top()}
		<Button 
			variant={active === 'library' ? 'secondary' : 'ghost'} 
			size="icon" 
			icon={Library} 
			title="Library" 
			onclick={() => goto(`${base}/${publisher}`)} 
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
			<Button variant="ghost" size="icon" icon={BookOpen} title="Reader (Select a publication first)" disabled />
		{/if}
	{/snippet}

	{#snippet bottom()}
		<Button variant="ghost" size="icon" icon={Bug} title="Diagnostics" onclick={() => diagnosticsOpen = true} />
		<Button variant="ghost" size="icon" icon={Settings} title="Settings" onclick={() => settingsOpen = true} />
	{/snippet}
</AppBar>

<SettingsModal bind:open={settingsOpen} />
<DiagnosticsModal 
	bind:open={diagnosticsOpen} 
	{diagRegistryUrl} 
	{diagCatalogUrl} 
	{diagCatalog} 
	{packageData} 
/>
