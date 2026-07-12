<script lang="ts">
	import { SettingsModal } from '@project-vyasa/vyasa-ui';
	import { viewerSettings } from '../settings.svelte';
	import { Database, Link, Palette } from 'lucide-svelte';
	import { getContext } from 'svelte';

	interface Props {
		open: boolean;
	}

	let { open = $bindable(false) }: Props = $props();

	const themeContext = getContext<{ 
		current: 'light' | 'dark',
		theme: 'light' | 'dark' | 'system',
		density: 'compact' | 'standard' | 'comfortable'
	}>('theme');

	let settingsData = $state({
		enableGlobalRegistry: viewerSettings.enableGlobalRegistry,
		enableCustomCatalogs: viewerSettings.enableCustomCatalogs,
		customCatalogs: viewerSettings.customCatalogs,
		globalRegistryUrl: viewerSettings.globalRegistryUrl,
		theme: themeContext?.theme || 'system',
		density: themeContext?.density || 'standard'
	});

	// Sync back to viewerSettings and themeContext on change
	$effect(() => {
		viewerSettings.enableGlobalRegistry = settingsData.enableGlobalRegistry;
		viewerSettings.enableCustomCatalogs = settingsData.enableCustomCatalogs;
		viewerSettings.customCatalogs = settingsData.customCatalogs;
		viewerSettings.globalRegistryUrl = settingsData.globalRegistryUrl;
		
		if (themeContext) {
			themeContext.theme = settingsData.theme as 'light' | 'dark' | 'system';
			themeContext.density = settingsData.density as 'compact' | 'standard' | 'comfortable';
		}
	});

	const schema: any[] = [
		{
			id: 'appearance',
			title: 'Appearance',
			icon: Palette,
			groups: [
				{
					title: 'Theme & Density',
					items: [
						{ 
							id: 'theme', 
							type: 'select', 
							label: 'Theme', 
							description: 'Application color theme',
							options: [
								{label: 'Light', value: 'light'}, 
								{label: 'Dark', value: 'dark'},
								{label: 'System Default', value: 'system'}
							] 
						},
						{ 
							id: 'density', 
							type: 'select', 
							label: 'Density', 
							description: 'Spacing and sizing of UI elements',
							options: [
								{label: 'Compact', value: 'compact'}, 
								{label: 'Standard', value: 'standard'}, 
								{label: 'Comfortable', value: 'comfortable'}
							] 
						}
					]
				}
			]
		},
		{
			id: 'catalogs',
			title: 'Catalog Sources',
			icon: Database,
			groups: [
				{
					title: 'Custom Catalogs',
					items: [
						{
							id: 'enableCustomCatalogs',
							label: 'Enable Custom Catalogs',
							description: 'Fetch publishers from custom catalog URLs (e.g. dev/private publications)',
							type: 'boolean' as const
						},
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

<SettingsModal bind:open title="Viewer Settings" {schema} bind:data={settingsData} />
