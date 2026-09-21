<script lang="ts">
	import { Panel, ListView, Select } from '@project-vyasa/vyasa-ui';
	import { BookOpen } from 'lucide-svelte';
	import type { SidebarState } from '$lib/viewer/sidebar.svelte';
	import type { NamedSpan } from '$lib/viewer/named-spans';

	interface Props {
		sidebar: SidebarState;
		chromeStreams: string[];
		chromeStream: string;
		selectedSpanId?: string;
		onNavigate: (urn: string) => void;
		onSelectSpan?: (span: NamedSpan) => void;
	}

	let {
		sidebar,
		chromeStreams,
		chromeStream = $bindable(),
		selectedSpanId,
		onNavigate,
		onSelectSpan
	}: Props = $props();

	const navItems = $derived([
		...sidebar.namedSpans.map((span) => ({
			id: span.id,
			title: span.label,
			subtitle: span.containerUrn,
			group: span.typeLabel,
			kind: 'span' as const
		})),
		...sidebar.items.map((item) => ({
			id: item.id,
			title: item.title,
			subtitle: item.subtitle ?? '',
			group: item.group ?? '',
			kind: 'container' as const
		}))
	]);

	const selectedId = $derived(sidebar.selectedContainerId ?? selectedSpanId);
	const groupBy = $derived(navItems.some((item) => item.group) ? 'group' : undefined);

	function onSelect(item: (typeof navItems)[number]) {
		if (item.kind === 'span') {
			const span = sidebar.namedSpans.find((entry) => entry.id === item.id);
			if (span) onSelectSpan?.(span);
			return;
		}
		onNavigate(item.id);
	}
</script>

<Panel title="Navigation" icon={BookOpen}>
	<div class="nav-root">
		{#if chromeStreams.length > 0}
			<div class="nav-display-controls">
				<div class="nav-control-row">
					<span
						class="nav-control-label"
						title="Language for titles, facet values, and navigation"
					>
						Language
					</span>
					<div class="nav-control-field">
						<Select
							options={chromeStreams.map((s) => ({
								label: s,
								value: s
							}))}
							bind:value={chromeStream}
						/>
					</div>
				</div>
			</div>
		{/if}
		{#if navItems.length > 0}
			<div class="nav-body">
				<ListView
					items={navItems}
					keyField="id"
					{selectedId}
					titleField="title"
					subtitleField="subtitle"
					{groupBy}
					onSelect={onSelect}
				/>
			</div>
		{:else}
			<div class="sidebar-panel-content">No navigation items available.</div>
		{/if}
	</div>
</Panel>

<style>
	.nav-root {
		display: flex;
		flex-direction: column;
		height: 100%;
		min-height: 0;
	}
	.nav-display-controls {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding: var(--space-3) var(--space-4);
		border-bottom: 1px solid var(--border-base);
		flex-shrink: 0;
	}
	.nav-control-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-3);
	}
	.nav-control-label {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--text-secondary);
		flex-shrink: 0;
	}
	.nav-control-field {
		flex: 1;
		min-width: 0;
		max-width: 10rem;
	}
	.nav-body {
		flex: 1;
		min-height: 0;
		overflow: hidden;
	}
	.nav-body :global(.list-view) {
		border: none;
		border-radius: 0;
	}
	.sidebar-panel-content {
		padding: var(--space-4);
		color: var(--text-secondary);
	}
</style>
