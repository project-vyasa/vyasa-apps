<script lang="ts">
	import { Panel, ListView, Select, Switch } from '@project-vyasa/vyasa-ui';
	import { BookOpen } from 'lucide-svelte';
	import type { PackageData } from '$lib/types';
	import type { SidebarState } from '$lib/viewer/sidebar.svelte';

	interface Props {
		sidebar: SidebarState;
		packageData: PackageData | null;
		chromeStreams: string[];
		chromeStream: string;
		showAnnotationGutter: boolean;
		onNavigate: (urn: string) => void;
	}

	let {
		sidebar,
		packageData,
		chromeStreams,
		chromeStream = $bindable(),
		showAnnotationGutter = $bindable(),
		onNavigate
	}: Props = $props();
</script>

<Panel title="Navigation" icon={BookOpen}>
	{#if chromeStreams.length > 0 || packageData?.annotations?.length}
		<div class="nav-display-controls">
			{#if chromeStreams.length > 0}
				<div class="nav-control-row">
					<span class="nav-control-label">Labels</span>
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
			{/if}
			{#if packageData?.annotations?.length}
				<div class="nav-control-row">
					<span class="nav-control-label">Annotations</span>
					<Switch bind:checked={showAnnotationGutter} />
				</div>
			{/if}
		</div>
	{/if}
	{#if sidebar.items.length > 0}
		<ListView
			items={sidebar.items}
			keyField="id"
			bind:selectedId={sidebar.selectedContainerId}
			titleField="title"
			subtitleField="subtitle"
			groupBy={sidebar.items.some((item) => item.group) ? 'group' : undefined}
			onSelect={(item) => onNavigate(item.id)}
		/>
	{:else}
		<div class="sidebar-panel-content">No navigation items available.</div>
	{/if}
</Panel>

<style>
	.nav-display-controls {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding: var(--space-3) var(--space-4);
		border-bottom: 1px solid var(--border-base);
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
	.sidebar-panel-content {
		padding: var(--space-4);
		color: var(--text-secondary);
	}
</style>
