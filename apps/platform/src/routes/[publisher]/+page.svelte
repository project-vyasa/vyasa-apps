<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { AppShell, Button } from '@project-vyasa/vyasa-ui';
	import { Settings, Library, BookOpen } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	const publisher = $derived($page.params.publisher);
	
	let catalogData = $state<any>(null);
	let errorMessage = $state<string | null>(null);
	let loading = $state(true);

	onMount(async () => {
		try {
			loading = true;
			// 1. Fetch the global registry
			const registryUrl = 'https://project-vyasa.github.io/vyasa-docs/registry.json';
			const registryRes = await fetch(registryUrl);
			if (!registryRes.ok) throw new Error('Global registry not found');
			
			const registry = await registryRes.json();
			const pubEntry = registry.publishers?.find((p: any) => p.identifier === publisher);
			if (!pubEntry) throw new Error(`Publisher ${publisher} not found in global registry`);
			
			let catalogUrl = pubEntry.catalog_url;

			// TODO: Add local development intercept as a setting for the viewer publisher workflow

			try {
				const res = await fetch(catalogUrl);
				if (!res.ok) throw new Error(`Catalog not found at ${catalogUrl} (Status: ${res.status})`);
				catalogData = await res.json();
			} catch (fetchError: any) {
				throw new Error(`Failed to fetch from ${catalogUrl}: ${fetchError.message || String(fetchError)}`);
			}
			
		} catch (e: any) {
			console.error("Failed to load catalog:", e);
			errorMessage = e.message || String(e);
		} finally {
			loading = false;
		}
	});
</script>

{#snippet headerContent()}
	<div style="display: flex; align-items: center; width: 100%; height: 100%; padding: 0 var(--space-4); background-color: var(--bg-surface-alt);">
		<h1 style="font-size: var(--text-lg); font-weight: var(--font-semibold); margin: 0;">Library Browser</h1>
	</div>
{/snippet}

{#snippet appBarContent()}
	<div style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: var(--space-4) 0; width: 100%; height: 100%; background-color: var(--bg-surface);">
		<div style="display: flex; flex-direction: column; align-items: center; gap: var(--space-4);">
			<Button variant="secondary" size="icon" icon={Library} title="Library" />
			<Button variant="ghost" size="icon" icon={BookOpen} title="Reader" disabled={true} />
		</div>
		<div style="display: flex; flex-direction: column; align-items: center; gap: var(--space-4);">
			<Button variant="ghost" size="icon" icon={Settings} title="Settings" />
		</div>
	</div>
{/snippet}

<AppShell 
	appBar={appBarContent} 
	header={headerContent} 
>
	<div style="padding: var(--space-8); max-width: 1200px; margin: 0 auto;">
		{#if loading}
			<div style="display: flex; justify-content: center; padding: 4rem;">
				<p style="color: var(--text-tertiary);">Loading library...</p>
			</div>
		{:else if errorMessage}
			<div style="padding: 2rem; background-color: var(--bg-surface-alt); border-radius: var(--control-radius); color: var(--text-negative);">
				<h2>Error Loading Library</h2>
				<p>{errorMessage}</p>
			</div>
		{:else if catalogData}
			<div style="margin-bottom: var(--space-8);">
				<h2 style="font-size: 2rem; font-weight: bold; margin-bottom: var(--space-2);">{catalogData.catalog?.publisher || publisher}</h2>
				{#if catalogData.catalog?.description}
					<p style="color: var(--text-secondary); font-size: 1.125rem;">{catalogData.catalog.description}</p>
				{/if}
			</div>
			
			<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: var(--space-6);">
				{#each catalogData.items || [] as item}
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<div 
						class="library-card"
						onclick={() => goto(`/${publisher}/${item.id}/root`)}
						style="background-color: var(--bg-surface-alt); border: 1px solid var(--border-base); border-radius: var(--control-radius); padding: var(--space-6); cursor: pointer; display: flex; flex-direction: column; gap: var(--space-3); transition: transform 0.2s, box-shadow 0.2s;"
						onmouseover={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
						onfocus={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
						onmouseout={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
						onblur={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
					>
						<h3 style="font-size: 1.25rem; font-weight: 600; margin: 0;">{item.name || item.id}</h3>
						<div style="display: flex; flex-direction: column; gap: var(--space-1); margin-top: auto; color: var(--text-tertiary); font-size: 0.875rem;">
							<span style="font-family: var(--font-mono);">ID: {item.id}</span>
						</div>
					</div>
				{/each}
			</div>
			
			{#if (catalogData.items || []).length === 0}
				<div style="padding: 4rem; text-align: center; color: var(--text-tertiary); background-color: var(--bg-surface-alt); border-radius: var(--control-radius);">
					<p>No publications found in this catalog.</p>
				</div>
			{/if}
		{/if}
	</div>
</AppShell>
