<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import type { LibraryCatalogData, PublicationEntry, RegistryInfo } from '$lib/types';
	import { viewerSettings } from '$lib/settings.svelte';
	import {
		Panel,
		ListView,
		Badge,
		Alert,
		Button,
		Icon,
		SearchInput,
		SegmentedControl,
		SummaryRow,
		CardGrid,
		Select
	} from '@project-vyasa/vyasa-ui';
	import { Library, Eye, EyeOff, LayoutGrid, List } from 'lucide-svelte';
	import LoadingBrand from '$lib/components/LoadingBrand.svelte';
	import type { CatalogSourceError } from '$lib/registry';
	import {
		publicationReaderPath,
		catalogLinkToVyasaUri,
		registryLibraryPath,
		catalogLibraryPath
	} from '$lib/catalog-ref';
	import { libraryCatalogVisibility } from '$lib/library-catalog-visibility.svelte';
	import {
		catalogHeaderLine2,
		catalogHeaderLine3,
		publicationMetaLine,
		publicationDescriptionLine,
		publicationDisplayBadges
	} from '$lib/library-metadata';
	import {
		catalogMatchesLibrarySearch,
		countLibrarySearchResults,
		publicationsForCatalogSearch,
		registrySearchStats
	} from '$lib/library-publication-hits';
	import {
		loadLibraryViewMode,
		loadSearchGroupBy,
		saveLibraryViewMode,
		saveSearchGroupBy,
		SEARCH_GROUP_BY_OPTIONS,
		type LibrarySearchGroupBy,
		type LibraryViewMode
	} from '$lib/library-view-preferences';
	import { shouldWarnLocalSourcesUnavailable, countLocalCatalogs } from '$lib/library-warnings';

	interface Props {
		registries?: RegistryInfo[];
		catalogs: LibraryCatalogData[];
		sourceErrors?: CatalogSourceError[];
		loading?: boolean;
		scopeRegistryId?: string;
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

	let librarySearch = $state('');
	let debouncedSearch = $state('');
	let viewMode = $state<LibraryViewMode>(loadLibraryViewMode());
	let searchGroupBy = $state<LibrarySearchGroupBy>(loadSearchGroupBy());

	$effect(() => {
		saveLibraryViewMode(viewMode);
	});

	$effect(() => {
		saveSearchGroupBy(searchGroupBy);
	});

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

	const isSearchMode = $derived(debouncedSearch.trim().length > 0 && !scopeCatalogId);

	const searchResultCount = $derived(
		countLibrarySearchResults(catalogs, debouncedSearch, isCatalogHidden)
	);

	const publicationListGroupBy = $derived(isSearchMode ? searchGroupBy : undefined);

	const debugMode = $derived(viewerSettings.debugMode);

	let localSourcesUnavailable = $derived(
		shouldWarnLocalSourcesUnavailable(
			viewerSettings.localSourceUrls,
			countLocalCatalogs(catalogs)
		)
	);
	let localSourceErrors = $derived(
		sourceErrors.filter((e) => e.kind === 'registry' || e.kind === 'catalog')
	);

	function catalogHeaderMeta(catalogRow: LibraryCatalogData) {
		return {
			line2: catalogHeaderLine2(catalogRow),
			line3: catalogHeaderLine3(catalogRow)
		};
	}

	function isCatalogHidden(catalogRow: LibraryCatalogData): boolean {
		const _visibility = libraryCatalogVisibility.hiddenCount;
		return libraryCatalogVisibility.isHidden(catalogRow.registryId, catalogRow.catalogEntry.id);
	}

	function displayedPublications(catalogRow: LibraryCatalogData): PublicationEntry[] {
		if (!isSearchMode) return catalogRow.catalog?.publications || [];
		return publicationsForCatalogSearch(catalogRow, debouncedSearch);
	}

	function shouldShowCatalog(catalogRow: LibraryCatalogData): boolean {
		if (!scopeCatalogId && isCatalogHidden(catalogRow)) return !isSearchMode;
		if (!isSearchMode) return true;
		const filtered = displayedPublications(catalogRow);
		return catalogMatchesLibrarySearch(catalogRow, debouncedSearch, filtered);
	}

	function shouldShowRegistryGroup(group: (typeof registryGroups)[number]): boolean {
		if (!isSearchMode) return true;
		return registrySearchStats(group.catalogs, debouncedSearch, isCatalogHidden).catalogs > 0;
	}

	function groupStats(group: (typeof registryGroups)[number]) {
		return registrySearchStats(group.catalogs, debouncedSearch, isCatalogHidden);
	}

	function openPublication(catalogRow: LibraryCatalogData, publicationId: string) {
		goto(
			publicationReaderPath(
				{
					registryId: catalogRow.registryId,
					catalogId: catalogRow.catalogEntry.id,
					publicationId
				},
				undefined,
				base
			)
		);
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
	{:else}
		{#if !scopeCatalogId}
			<div class="library-toolbar-block">
				<div class="library-toolbar">
					<SearchInput
						bind:value={librarySearch}
						placeholder="Search publications and catalogs…"
						aria-label="Search publications and catalogs"
						class="library-search"
						onsearch={(query: string) => (debouncedSearch = query)}
					/>
					<div class="library-group-by">
						<Select
							bind:value={searchGroupBy}
							options={SEARCH_GROUP_BY_OPTIONS}
							placeholder="Group by"
						/>
					</div>
					<SegmentedControl
						bind:value={viewMode}
						options={[
							{ value: 'list', icon: List, title: 'List view' },
							{ value: 'grid', icon: LayoutGrid, title: 'Card view' }
						]}
						aria-label="Publication layout"
					/>
				</div>
				{#if isSearchMode}
					<p class="search-status" aria-live="polite">
						{#if searchResultCount === 0}
							No publications match your search.
						{:else}
							{searchResultCount} publication{searchResultCount === 1 ? '' : 's'}
						{/if}
					</p>
				{/if}
			</div>
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

		{#each registryGroups as group (group.id)}
			{#if shouldShowRegistryGroup(group)}
				{@const stats = groupStats(group)}
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
						{#if isSearchMode}
							{stats.catalogs} catalog{stats.catalogs === 1 ? '' : 's'} · {stats.publications}
							publication{stats.publications === 1 ? '' : 's'}
						{:else}
							{group.catalogs.length} catalog{group.catalogs.length === 1 ? '' : 's'}
						{/if}
					</p>
					{#each group.catalogs as catalogRow (catalogRow.catalogEntry.id + catalogRow.sourceUrl)}
						{#if shouldShowCatalog(catalogRow)}
							{#if !scopeCatalogId && isCatalogHidden(catalogRow)}
								<SummaryRow
									title={catalogRow.catalog?.title ||
										catalogRow.catalogEntry.title ||
										catalogRow.catalogEntry.id}
									description={catalogHeaderLine2(catalogRow)}
									muted
								>
									{#snippet leading()}
										<Icon icon={Library} size={16} />
									{/snippet}
									{#snippet action()}
										<Button
											variant="ghost"
											size="icon"
											icon={Eye}
											title="Show catalog"
											onclick={() =>
												libraryCatalogVisibility.setHidden(
													catalogRow.registryId,
													catalogRow.catalogEntry.id,
													false
												)}
										/>
									{/snippet}
								</SummaryRow>
							{:else}
								{@render catalogSection(catalogRow)}
							{/if}
						{/if}
					{/each}
				</div>
			{/if}
		{/each}
	{/if}
</div>

{#snippet publicationCard(item: PublicationEntry)}
	<div class="publication-card">
		<div class="publication-card-title">{item.title}</div>
		<div class="publication-card-subtitle">{publicationMetaLine(item)}</div>
		{#if publicationDescriptionLine(item)}
			<p class="publication-card-desc">{publicationDescriptionLine(item)}</p>
		{/if}
		<div class="publication-card-badges">
			{#each publicationDisplayBadges(item) as label (label)}
				<Badge variant="ghost">{label}</Badge>
			{/each}
		</div>
	</div>
{/snippet}

{#snippet catalogSection(catalogRow: LibraryCatalogData)}
	<div class="catalog-card">
		{@render catalogPanel(catalogRow)}
	</div>
{/snippet}

{#snippet catalogPanel(catalogRow: LibraryCatalogData)}
	{@const publications = displayedPublications(catalogRow)}
	<Panel
		title={catalogRow.catalog?.title || catalogRow.catalogEntry.title || catalogRow.catalogEntry.id}
		icon={Library}
		titleTransform="none"
	>
		{#snippet actions()}
			<div class="catalog-panel-actions">
				{#if !scopeCatalogId}
					<Button
						variant="ghost"
						size="icon"
						class="catalog-hide-btn"
						icon={EyeOff}
						title="Hide catalog"
						onclick={() =>
							libraryCatalogVisibility.setHidden(
								catalogRow.registryId,
								catalogRow.catalogEntry.id,
								true
							)}
					/>
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
						<p class="catalog-meta-line">
							{meta.line2}
							{#if !scopeCatalogId}
								<span aria-hidden="true"> · </span>
								<a
									href={catalogLibraryPath(
										catalogRow.registryId,
										catalogRow.catalogEntry.id,
										base
									)}
									class="catalog-inline-link"
								>
									View catalog
								</a>
							{/if}
						</p>
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
				{#if publications.length > 0}
					{#snippet publicationRowMeta(item: PublicationEntry)}
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
					{#if viewMode === 'grid'}
						<CardGrid
							items={publications}
							keyField="id"
							groupBy={publicationListGroupBy}
							collapsibleGroups={false}
							bordered={false}
							padded={false}
							onSelect={(item: PublicationEntry) => openPublication(catalogRow, item.id)}
						>
							{#snippet card(item: PublicationEntry)}
								{@render publicationCard(item)}
							{/snippet}
						</CardGrid>
					{:else}
						<div class="list-wrapper">
							<ListView
								items={publications}
								titleField="title"
								subtitleField={(item) => publicationMetaLine(item)}
								descriptionField={(item) => publicationDescriptionLine(item)}
								groupBy={publicationListGroupBy}
								collapsibleGroups={false}
								showFilterInput={!isSearchMode && publications.length > 5}
								meta={publicationRowMeta}
								onSelect={(item) => openPublication(catalogRow, item.id)}
							/>
						</div>
					{/if}
				{:else if isSearchMode}
					<div class="empty-catalog">No publications match this search in this catalog.</div>
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

	.library-toolbar-block {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		margin-bottom: calc(-1 * var(--space-4));
	}

	.library-toolbar {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-3);
	}

	.library-toolbar :global(.library-search) {
		flex: 1 1 16rem;
		min-width: 12rem;
	}

	.library-toolbar :global(.library-group-by) {
		min-width: 10rem;
	}

	.search-status {
		margin: 0;
		font-size: 0.85rem;
		color: var(--text-tertiary);
	}

	.catalog-panel-actions {
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}

	.catalog-inline-link {
		color: inherit;
		text-decoration: none;
	}

	.catalog-inline-link:hover {
		text-decoration: underline;
	}

	.publication-card {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding: var(--space-4);
		height: 100%;
	}

	.publication-card-title {
		font-weight: 600;
		color: var(--text-primary);
		line-height: 1.3;
	}

	.publication-card-subtitle {
		font-size: 0.85rem;
		color: var(--text-secondary);
	}

	.publication-card-desc {
		margin: 0;
		font-size: 0.9rem;
		color: var(--text-secondary);
		line-height: 1.4;
		display: -webkit-box;
		line-clamp: 3;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		flex: 1;
	}

	.publication-card-badges {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-1);
		margin-top: auto;
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
