<script lang="ts">
	import { viewerSettings } from '$lib/settings.svelte';
	import { DEFAULT_REGISTRY_URL, fetchCatalog } from '$lib/registry';
	import { loadPublication } from '$lib/viewer/publication-loader';
	import { ViewerDb } from '$lib/ViewerDb';
	import { activePublication } from '$lib/viewer/active-publication.svelte';
	import { onMount, onDestroy } from 'svelte';
	import type { Registry, Catalog, PackageData } from '$lib/types';

	interface CatalogDiagnostic {
		url: string;
		status: 'loading' | 'success' | 'error';
		error?: string;
		catalog?: Catalog | null;
	}

	interface CustomRegistryDiagnostic {
		url: string;
		status: 'loading' | 'success' | 'error';
		error?: string;
		registryData?: Registry | null;
		publisherCatalogs: CatalogDiagnostic[];
	}

	let globalRegistryUrl = $derived(
		viewerSettings.enableGlobalRegistry ? DEFAULT_REGISTRY_URL : ''
	);
	let globalRegistryData = $state<Registry | null>(null);
	let globalRegistryError = $state<string | null>(null);
	let globalPublisherCatalogs = $state<CatalogDiagnostic[]>([]);

	let customRegistries = $state<CustomRegistryDiagnostic[]>([]);
	let customCatalogs = $state<CatalogDiagnostic[]>([]);

	let activePubUrl = $state('');
	let activePackageData = $state<PackageData | null>(null);
	let activePubError = $state<string | null>(null);

	const viewerDb = new ViewerDb();

	onMount(async () => {
		// 1. Fetch Global Registry JSON and its Publisher Catalogs
		if (viewerSettings.enableGlobalRegistry) {
			const regUrl = globalRegistryUrl;
			try {
				const res = await fetch(regUrl);
				if (res.ok) {
					const data: Registry = await res.json();
					globalRegistryData = data;
					if (data.publishers) {
						globalPublisherCatalogs = await Promise.all(
							data.publishers.map(async (p) => {
								try {
									const cat = await fetchCatalog(p.catalog_url);
									return { url: p.catalog_url, status: 'success', catalog: cat };
								} catch (err: any) {
									return { url: p.catalog_url, status: 'error', error: err.message };
								}
							})
						);
					}
				} else {
					globalRegistryError = `HTTP ${res.status}: ${res.statusText}`;
				}
			} catch (err: any) {
				globalRegistryError = err.message || String(err);
			}
		}

		// 2. Fetch Custom / Local Registries JSON and their Publisher Catalogs
		if (viewerSettings.enableCustomRegistries) {
			const regUrls = viewerSettings.customRegistryUrls;
			customRegistries = await Promise.all(
				regUrls.map(async (url) => {
					try {
						const res = await fetch(url);
						if (res.ok) {
							const data: Registry = await res.json();
							let pubCats: CatalogDiagnostic[] = [];
							if (data.publishers) {
								pubCats = await Promise.all(
									data.publishers.map(async (p) => {
										try {
											const cat = await fetchCatalog(p.catalog_url);
											return { url: p.catalog_url, status: 'success', catalog: cat };
										} catch (err: any) {
											return { url: p.catalog_url, status: 'error', error: err.message };
										}
									})
								);
							}
							return {
								url,
								status: 'success',
								registryData: data,
								publisherCatalogs: pubCats
							};
						} else {
							return {
								url,
								status: 'error',
								error: `HTTP ${res.status}: ${res.statusText}`,
								publisherCatalogs: []
							};
						}
					} catch (err: any) {
						return {
							url,
							status: 'error',
							error: err.message || String(err),
							publisherCatalogs: []
						};
					}
				})
			);
		}

		// 3. Fetch ALL Custom / Private Catalogs configured in settings
		const customUrls = viewerSettings.customCatalogUrls;
		customCatalogs = await Promise.all(
			customUrls.map(async (url) => {
				try {
					const cat = await fetchCatalog(url);
					return { url, status: 'success', catalog: cat };
				} catch (err: any) {
					return { url, status: 'error', error: err.message };
				}
			})
		);

		// 4. Fetch Active Publication Manifest (if active)
		const pub = activePublication.publisher;
		const publicationId = activePublication.publication;
		if (pub && publicationId) {
			try {
				const result = await loadPublication(pub, publicationId, viewerDb);
				activePubUrl = result.diagPublicationUrl;
				activePackageData = result.packageData;
			} catch (err: any) {
				activePubError = err.message || String(err);
			}
		}
	});

	onDestroy(() => {
		viewerDb.close();
	});
</script>

<div class="diagnostics-page">
	<div class="diagnostics-header">
		<h1 class="diagnostics-title">System Diagnostics</h1>
		<p class="diagnostics-desc">Global & Custom Registries, Catalogs & Active Manifest Diagnostic Inspection</p>
	</div>

	<div class="diagnostics-content">
		<!-- 1. Global Registry -->
		<div class="diag-section">
			<h2 class="diag-section-title">Global Registry</h2>
			{#if !viewerSettings.enableGlobalRegistry}
				<div class="diag-url status-disabled">Global Registry is disabled in Settings</div>
			{:else}
				<div class="diag-url">{globalRegistryUrl}</div>
				{#if globalRegistryError}
					<div class="diag-error">Error fetching registry: {globalRegistryError}</div>
				{:else if globalRegistryData}
					<pre class="diag-code">{JSON.stringify(globalRegistryData, null, 2)}</pre>
				{:else}
					<div class="diag-url">Loading global registry...</div>
				{/if}

				{#if globalPublisherCatalogs.length > 0}
					<h3 class="diag-sub-title">Global Publisher Catalogs</h3>
					{#each globalPublisherCatalogs as item}
						<div class="diag-item-box">
							<div class="diag-url">{item.url}</div>
							{#if item.status === 'error'}
								<div class="diag-error">{item.error}</div>
							{:else if item.catalog}
								<pre class="diag-code">{JSON.stringify(item.catalog, null, 2)}</pre>
							{/if}
						</div>
					{/each}
				{/if}
			{/if}
		</div>

		<!-- 2. Local & Custom Registries -->
		<div class="diag-section">
			<h2 class="diag-section-title">Local & Custom Registries ({customRegistries.length})</h2>
			{#if !viewerSettings.enableCustomRegistries}
				<div class="diag-url status-disabled">Custom Registries disabled in Settings</div>
			{:else if customRegistries.length === 0}
				<div class="diag-url">No custom registry URLs configured in Settings</div>
			{:else}
				{#each customRegistries as item}
					<div class="diag-item-box">
						<div class="diag-url">{item.url}</div>
						{#if item.status === 'error'}
							<div class="diag-error">Failed to fetch registry: {item.error}</div>
						{:else if item.registryData}
							<pre class="diag-code">{JSON.stringify(item.registryData, null, 2)}</pre>
							{#if item.publisherCatalogs.length > 0}
								<h3 class="diag-sub-title">Publisher Catalogs in Custom Registry ({item.url})</h3>
								{#each item.publisherCatalogs as pubCat}
									<div class="diag-item-box">
										<div class="diag-url">{pubCat.url}</div>
										{#if pubCat.status === 'error'}
											<div class="diag-error">{pubCat.error}</div>
										{:else if pubCat.catalog}
											<pre class="diag-code">{JSON.stringify(pubCat.catalog, null, 2)}</pre>
										{/if}
									</div>
								{/each}
							{/if}
						{/if}
					</div>
				{/each}
			{/if}
		</div>

		<!-- 3. Custom / Private Catalogs -->
		<div class="diag-section">
			<h2 class="diag-section-title">Custom / Standalone Catalogs ({customCatalogs.length})</h2>
			{#if customCatalogs.length === 0}
				<div class="diag-url">No custom catalog URLs configured in Settings</div>
			{:else}
				{#each customCatalogs as item}
					<div class="diag-item-box">
						<div class="diag-url">{item.url}</div>
						{#if item.status === 'error'}
							<div class="diag-error">Failed to load catalog: {item.error}</div>
						{:else if item.catalog}
							<pre class="diag-code">{JSON.stringify(item.catalog, null, 2)}</pre>
						{:else}
							<div class="diag-url">Loading catalog...</div>
						{/if}
					</div>
				{/each}
			{/if}
		</div>

		<!-- 4. Active Publication Manifest -->
		{#if activePublication.publication}
			<div class="diag-section">
				<h2 class="diag-section-title">Active Publication ({activePublication.publication})</h2>
				<div class="diag-url">{activePubUrl || 'Loading URL...'}</div>
				{#if activePubError}
					<div class="diag-error">{activePubError}</div>
				{:else if activePackageData}
					<pre class="diag-code">{JSON.stringify(activePackageData.manifest, null, 2)}</pre>
				{:else}
					<div class="diag-url">Loading manifest...</div>
				{/if}
			</div>
		{/if}
	</div>
</div>

<style>
	.diagnostics-page {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: var(--space-8);
		background-color: var(--bg-surface);
		min-height: 100%;
	}
	.diagnostics-header {
		margin-bottom: var(--space-8);
	}
	.diagnostics-title {
		font-size: 2.25rem;
		font-weight: bold;
		margin: 0;
	}
	.diagnostics-desc {
		color: var(--text-secondary);
		font-size: 1.125rem;
		margin-top: var(--space-2);
	}
	.diagnostics-content {
		display: flex;
		flex-direction: column;
		gap: var(--space-8);
	}
	.diag-section {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}
	.diag-section-title {
		font-size: 1.35rem;
		font-weight: 600;
		margin: 0;
		color: var(--text-primary);
		border-bottom: 2px solid var(--border-base);
		padding-bottom: var(--space-2);
	}
	.diag-sub-title {
		font-size: 1.1rem;
		font-weight: 600;
		margin-top: var(--space-4);
		margin-bottom: 0;
		color: var(--text-secondary);
	}
	.diag-item-box {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		margin-top: var(--space-2);
	}
	.diag-url {
		font-family: var(--font-mono);
		font-size: 0.875rem;
		color: var(--text-secondary);
		background: var(--bg-surface-alt);
		padding: var(--space-4);
		border-radius: var(--control-radius);
		word-break: break-all;
	}
	.status-disabled {
		opacity: 0.7;
		font-style: italic;
	}
	.diag-error {
		font-family: var(--font-mono);
		font-size: 0.875rem;
		color: var(--status-error, #dc2626);
		background: var(--bg-surface-alt);
		padding: var(--space-4);
		border-radius: var(--control-radius);
		border: 1px solid var(--status-error, #dc2626);
	}
	.diag-code {
		background: var(--bg-surface-alt);
		padding: var(--space-4);
		border-radius: var(--control-radius);
		font-family: var(--font-mono);
		font-size: 0.875rem;
		white-space: pre-wrap;
		margin: 0;
		max-height: 400px;
		overflow-y: auto;
		border: 1px solid var(--border-base);
	}
</style>
