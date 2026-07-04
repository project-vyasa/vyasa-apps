<script lang="ts">
	import { Modal, SettingsPanel } from '@project-vyasa/vyasa-ui';
	import { viewerSettings } from '../settings.svelte';
	import { Database, Link } from 'lucide-svelte';

	interface Props {
		open: boolean;
	}

	let { open = $bindable(false) }: Props = $props();

	// Convert settings class to plain object for SettingsPanel binding
	let settingsData = $state({
		enableGlobalRegistry: viewerSettings.enableGlobalRegistry,
		customCatalogs: viewerSettings.customCatalogs,
		globalRegistryUrl: viewerSettings.globalRegistryUrl
	});

	// Sync back to viewerSettings on change
	$effect(() => {
		viewerSettings.enableGlobalRegistry = settingsData.enableGlobalRegistry;
		viewerSettings.customCatalogs = settingsData.customCatalogs;
		viewerSettings.globalRegistryUrl = settingsData.globalRegistryUrl;
	});

	const schema: any[] = [
		{
			id: 'catalogs',
			title: 'Catalog Sources',
			icon: Database,
			groups: [
				{
					title: 'Custom Catalogs',
					items: [
						{
							id: 'customCatalogs',
							label: 'Custom Catalog URLs',
							description: 'Comma separated list of URLs (e.g. http://localhost:5173/catalog.json)',
							type: 'text' as const
						}
					]
				},
				{
					title: 'Global Registry',
					items: [
						{
							id: 'enableGlobalRegistry',
							label: 'Enable Global Registry',
							description: 'Fetch publishers from the default global registry',
							type: 'boolean' as const
						}
					]
				}
			]
		},
		{
			id: 'advanced',
			title: 'Advanced',
			icon: Link,
			groups: [
				{
					title: 'Danger Zone',
					items: [
						{
							id: 'globalRegistryUrl',
							label: 'Override Global Registry URL',
							description: 'Advanced: Change the default global registry endpoint',
							type: 'text' as const
						}
					]
				}
			]
		}
	];
</script>

<Modal bind:open title="Viewer Settings" size="lg">
	{#snippet body()}
		<div class="settings-modal-content">
			<SettingsPanel {schema} bind:data={settingsData} />
		</div>
	{/snippet}
</Modal>

<style>
	.settings-modal-content {
		height: 60vh;
		min-height: 400px;
		width: 100%;
	}
</style>
