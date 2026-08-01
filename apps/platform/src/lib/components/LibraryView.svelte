<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import type { LibraryCatalogData, RegistryInfo } from '$lib/types';
	import { viewerSettings } from '$lib/settings.svelte';
	import { Panel, ListView, Badge, Alert, Button } from '@project-vyasa/vyasa-ui';
	import { Library, EyeOff } from 'lucide-svelte';
	import LoadingBrand from '$lib/components/LoadingBrand.svelte';
	import type { CatalogSourceError } from '$lib/registry';
	import { publicationReaderPath, catalogLinkToVyasaUri, registryLibraryPath, catalogLibraryPath } from '$lib/catalog-ref';
	import { libraryCatalogVisibility } from '$lib/library-catalog-visibility.svelte';
	import {
		catalogHeaderLine2,
		catalogHeaderLine3,
		publicationMetaLine,
		publicationDescriptionLine,
		publicationDisplayBadges
	} from '$lib/library-metadata';
	import {
		shouldWarnLocalSourcesUnavailable,
		countLocalCatalogs
	} from '$lib/library-warnings';

	interface Props {
		registries?: RegistryInfo[];
		catalogs: LibraryCatalogData[];
		sourceErrors?: CatalogSourceError[];
		loading?: boolean;
		/** When set, library is scoped to this registry (hides registry drill-down links). */
		scopeRegistryId?: string;
		/** When set, library is scoped to this catalog (hides catalog drill-down links). */
		scopeCatalogId?: string;
	}

	let {
		registries = [],
		catalogs,
		sourceErrors = [],
		loading = false,
		scopeRegistryId = '',
		scopeCatalogId = ''
	}: Props = $props();

	const registryGroups = $derived.by(() => {
		const order = registries.map((r) => r.id);
		const grouped = new Map<string, LibraryCatalogData[]>();
		for (const row of catalogs) {
			const list = grouped.get(row.registryId) || [];
			list.push(row);
			grouped.set(row.registryId, list);
		}
		const ids = [...new Set([...order, ...grouped.keys()])];
		return ids
			.filter((id) => grouped.has(id))
			.map((id) => ({
				id,
				title: registries.find((r) => r.id === id)?.title || id,
				description: registries.find((r) => r.id === id)?.description,
				catalogs: grouped.get(id) || []
			}));
	});

	const visibleRegistryGroups = $derived.by(() => {
		const _visibility = libraryCatalogVisibility.hiddenCount;
		if (scopeCatalogId) return registryGroups;
		return registryGroups
			.map((group) => ({
				...group,
				catalogs: group.catalogs.filter(
					(c) => !libraryCatalogVisibility.isHidden(c.registryId, c.catalogEntry.id)
				)
			}))
			.filter((group) => group.catalogs.length > 0);
	});

	const hiddenCatalogCount = $derived.by(() => {
		const _visibility = libraryCatalogVisibility.hiddenCount;
		if (scopeCatalogId) return 0;
		return catalogs.filter((c) =>
			libraryCatalogVisibility.isHidden(c.registryId, c.catalogEntry.id)
		).length;
	});

	const debugMode = $derived(viewerSettings.debugMode);

	let localSourcesUnavailable = $derived(
		shouldWarnLocalSourcesUnavailable(
			viewerSettings.localSourceUrls,
			countLocalCatalogs(catalogs)
		)
	);
	let localSourceErrors = $derived(sourceErrors.filter((e) => e.kind === 'registry' || e.kind === 'catalog'));

	function catalogHeaderMeta(catalogRow: LibraryCatalogData) {
		return {
			line2: catalogHeaderLine2(catalogRow),
			line3: catalogHeaderLine3(catalogRow)
		};
	}
</script>

<div class="library-container">
	{#if loading}
		<div class="status-wrapper">
			<LoadingBrand message="Please wait while catalogs are being loaded…" />
		</div>
	{:else if catalogs.length === 0}
		<div class="status-wrapper">
			<Alert variant="warning" title="No Catalogs">No catalogs are currently configured or available.</Alert>
		</div>
	{:else if visibleRegistryGroups.length === 0 && hiddenCatalogCount > 0}
		<div class="status-wrapper">
			<Alert variant="warning" title="All Catalogs Hidden">
				{#snippet children()}
					<div class="hidden-catalogs-banner">
						<span>Every catalog is hidden from this library view.</span>
						<Button variant="ghost" size="sm" onclick={() => libraryCatalogVisibility.showAll()}>
							Show all catalogs
						</Button>
					</div>
				{/snippet}
			</Alert>
		</div>
	{:else}
		{#if hiddenCatalogCount > 0 && !scopeCatalogId}
			<Alert variant="info" title="Hidden catalogs">
				{#snippet children()}
					<div class="hidden-catalogs-banner">
						<span>
							{hiddenCatalogCount} catalog{hiddenCatalogCount === 1 ? '' : 's'} hidden.
						</span>
						<Button variant="ghost" size="sm" onclick={() => libraryCatalogVisibility.showAll()}>
							Show all
						</Button>
					</div>
				{/snippet}
			</Alert>
		{/if}

		{#if localSourcesUnavailable}
			<Alert variant="warning" title="Local Sources Unavailable">
				Local source URLs are configured ({viewerSettings.localSourceUrls.join(', ')}) but none
				responded.
				{#if localSourceErrors.length > 0}
					<ul class="registry-error-list">
						{#each localSourceErrors as err}
							<li><strong>{err.url}</strong>: {err.error}</li>
						{/each}
					</ul>
				{/if}
			</Alert>
		{/if}

		{#each visibleRegistryGroups as group (group.id)}
			<div class="registry-group">
				{#if !scopeRegistryId}
					<h2 class="registry-group-title">
						<a href={registryLibraryPath(group.id, base)} class="registry-group-link">{group.title}</a>
					</h2>
				{:else}
					<h2 class="registry-group-title">{group.title}</h2>
				{/if}
				{#if group.description}
					<p class="registry-group-desc">{group.description}</p>
				{/if}
				<p class="registry-group-meta">
					{group.catalogs.length} catalog{group.catalogs.length === 1 ? '' : 's'}
				</p>
				{#each group.catalogs as catalogRow (catalogRow.catalogEntry.id + catalogRow.sourceUrl)}
					{@render catalogSection(catalogRow)}
				{/each}
			</div>
		{/each}
	{/if}
</div>

{#snippet catalogSection(catalogRow: LibraryCatalogData)}
	<div class="catalog-card">
		{@render catalogPanel(catalogRow)}
	</div>
{/snippet}

{#snippet catalogPanel(catalogRow: LibraryCatalogData)}
		<Panel
			title={catalogRow.catalog?.title || catalogRow.catalogEntry.title || catalogRow.catalogEntry.id}
			icon={Library}
		>
			{#snippet actions()}
				<div class="flex items-center gap-2">
					{#if !scopeCatalogId}
						<Button
							variant="ghost"
							size="icon"
							class="catalog-hide-btn"
							icon={EyeOff}
							title="Hide this catalog from the library"
							onclick={() =>
								libraryCatalogVisibility.setHidden(
									catalogRow.registryId,
									catalogRow.catalogEntry.id,
									true
								)}
						/>
						<a
							href={catalogLibraryPath(catalogRow.registryId, catalogRow.catalogEntry.id, base)}
							class="catalog-drill-link"
						>
							View catalog
						</a>
					{/if}
					{#if debugMode}
						<Badge variant="neutral">{catalogRow.registryId}/{catalogRow.catalogEntry.id}</Badge>
						<Badge variant="neutral">{catalogRow.sourceKind}</Badge>
						{#if catalogRow.catalog?.publisher}
							<Badge variant="neutral">{catalogRow.catalog.publisher.title}</Badge>
						{/if}
						{#if catalogRow.catalogEntry.catalog_url}
							<a
								href={catalogRow.catalogEntry.catalog_url}
								target="_blank"
								rel="noopener noreferrer"
								class="catalog-link"
							>
								<Badge variant="primary">catalog.json</Badge>
							</a>
						{/if}
					{/if}
				</div>
			{/snippet}

			<div class="panel-body">
				{#if catalogHeaderMeta(catalogRow).line2 || catalogHeaderMeta(catalogRow).line3}
					{@const meta = catalogHeaderMeta(catalogRow)}
					<div class="catalog-header-meta">
						{#if meta.line2}
							<p class="catalog-meta-line">{meta.line2}</p>
						{/if}
						{#if meta.line3}
							<p class="catalog-meta-line catalog-meta-desc">{meta.line3}</p>
						{/if}
					</div>
				{/if}

				{#if catalogRow.error}
					<div class="error-wrapper">
						<Alert variant="danger" title="Catalog Error">{catalogRow.error}</Alert>
					</div>
				{:else if catalogRow.catalog}
					{#if (catalogRow.catalog.publications || []).length > 0}
						{#snippet publicationRowMeta(item: { id: string; license?: string; type?: string; updated?: number })}
							{#each publicationDisplayBadges(item) as label (label)}
								<Badge variant="ghost">{label}</Badge>
							{/each}
							{#if debugMode}
								<span title="Canonical durable ID">
									<Badge variant="neutral">
										{catalogLinkToVyasaUri({
											registryId: catalogRow.registryId,
											catalogId: catalogRow.catalogEntry.id,
											publicationId: item.id
										})}
									</Badge>
								</span>
								<Badge variant="neutral">ID: {item.id}</Badge>
								{#if item.updated}
									<Badge variant="neutral">
										updated {new Date(Number(item.updated) * 1000).toLocaleString()}
									</Badge>
								{/if}
							{/if}
						{/snippet}
						<div class="list-wrapper">
							<ListView
								items={catalogRow.catalog.publications || []}
								titleField="title"
								subtitleField={(item) => publicationMetaLine(item)}
								descriptionField={(item) => publicationDescriptionLine(item)}
								showFilterInput={(catalogRow.catalog.publications || []).length > 5}
								meta={publicationRowMeta}
								onSelect={(item: { id: string }) => {
									goto(
										publicationReaderPath(
											{
												registryId: catalogRow.registryId,
												catalogId: catalogRow.catalogEntry.id,
												publicationId: item.id
											},
											undefined,
											base
										)
									);
								}}
							/>
						</div>
					{:else}
						<div class="empty-catalog">No publications found in this catalog.</div>
					{/if}
				{/if}
			</div>
		</Panel>
{/snippet}

<style>
	.library-container {
		padding: var(--space-8);
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 3rem;
		flex: 1 1 auto;
		width: 100%;
	}

	.status-wrapper {
		flex: 1 1 auto;
		display: flex;
		flex-direction: column;
		min-height: 100%;
		padding: var(--space-8) 0;
	}

	.registry-group {
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
	}

	.registry-group-title {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--text-primary);
		margin: 0;
		padding-bottom: var(--space-2);
		border-bottom: 2px solid var(--border-base);
	}

	.registry-group-link {
		color: inherit;
		text-decoration: none;
	}

	.registry-group-link:hover {
		color: var(--text-primary);
		text-decoration: underline;
	}

	.registry-group-desc {
		margin: calc(-1 * var(--space-4)) 0 0;
		color: var(--text-secondary);
		font-size: 0.95rem;
	}

	.registry-group-meta {
		margin: calc(-1 * var(--space-4)) 0 0;
		color: var(--text-tertiary);
		font-size: 0.85rem;
	}

	.catalog-card {
		display: flex;
		flex-direction: column;
	}

	.catalog-link {
		text-decoration: none;
	}

	.catalog-drill-link {
		font-size: 0.85rem;
		color: var(--text-secondary);
		text-decoration: none;
		white-space: nowrap;
	}

	.catalog-drill-link:hover {
		color: var(--text-primary);
		text-decoration: underline;
	}

	.panel-body {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		padding: var(--space-4);
	}

	.catalog-header-meta {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.catalog-meta-line {
		margin: 0;
		font-size: 0.85rem;
		color: var(--text-secondary);
		line-height: 1.4;
	}

	.catalog-meta-desc {
		color: var(--text-tertiary);
		display: -webkit-box;
		line-clamp: 2;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.hidden-catalogs-banner {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-2) var(--space-4);
	}

	.list-wrapper {
		max-height: 450px;
		min-height: 80px;
		display: flex;
		flex-direction: column;
	}

	.empty-catalog {
		padding: var(--space-6);
		text-align: center;
		color: var(--text-tertiary);
		background-color: var(--bg-surface-alt);
		border-radius: var(--control-radius);
		font-size: 0.9rem;
	}

	.error-wrapper {
		padding: var(--space-2) 0;
	}

	.registry-error-list {
		margin: var(--space-2) 0 0;
		padding-left: 1.25rem;
		font-size: 0.9rem;
	}

	.catalog-hide-btn {
		flex-shrink: 0;
		opacity: 0.75;
	}

	.catalog-hide-btn:hover {
		opacity: 1;
	}
</style>
