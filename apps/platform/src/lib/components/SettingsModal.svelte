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
		current: 'light' | 'dark';
		theme: 'light' | 'dark' | 'system';
		density: 'compact' | 'standard' | 'comfortable';
	}>('theme');

	let settingsData = $state({
		enableGlobalRegistry: viewerSettings.enableGlobalRegistry,
		enableCustomRegistries: viewerSettings.enableCustomRegistries,
		customRegistries: viewerSettings.customRegistries,
		enableCustomCatalogs: viewerSettings.enableCustomCatalogs,
		customCatalogs: viewerSettings.customCatalogs,
		debugMode: viewerSettings.debugMode,
		theme: themeContext?.theme || 'system',
		density: themeContext?.density || 'standard'
	});

	// Sync back to viewerSettings and themeContext on change
	$effect(() => {
		viewerSettings.enableGlobalRegistry = settingsData.enableGlobalRegistry;
		viewerSettings.enableCustomRegistries = settingsData.enableCustomRegistries;
		viewerSettings.customRegistries = settingsData.customRegistries;
		viewerSettings.enableCustomCatalogs = settingsData.enableCustomCatalogs;
		viewerSettings.customCatalogs = settingsData.customCatalogs;
		viewerSettings.debugMode = settingsData.debugMode;

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
								{ label: 'Light', value: 'light' },
								{ label: 'Dark', value: 'dark' },
								{ label: 'System Default', value: 'system' }
							]
						},
						{
							id: 'density',
							type: 'select',
							label: 'Density',
							description: 'Spacing and sizing of UI elements',
							options: [
								{ label: 'Compact', value: 'compact' },
								{ label: 'Standard', value: 'standard' },
								{ label: 'Comfortable', value: 'comfortable' }
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
					title: 'Local & Custom Registries',
					items: [
						{
							id: 'enableCustomRegistries',
							label: 'Enable Custom Registries',
							description:
								'Fetch publishers from custom local or private registry endpoints',
							type: 'boolean' as const
						},
						{
							id: 'customRegistries',
							label: 'Custom Registry URLs',
							description: 'Semicolon or comma separated list of registry URLs (e.g. http://localhost:8080/registry.json)',
							type: 'text' as const
						}
					]
				},
				{
					title: 'Custom Catalogs',
					items: [
						{
							id: 'enableCustomCatalogs',
							label: 'Enable Custom Catalogs',
							description:
								'Fetch publishers from custom catalog URLs directly',
							type: 'boolean' as const
						},
						{
							id: 'customCatalogs',
							label: 'Custom Catalog URLs',
							description: 'Semicolon separated list of catalog URLs (e.g. http://localhost:8080/vysamples/catalog.json)',
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
							description: 'Fetch publishers from the default global registry (https://project-vyasa.github.io/vyasa-docs/registry.json)',
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
					title: 'Diagnostics',
					items: [
						{
							id: 'debugMode',
							label: 'Enable Debug Mode',
							description: 'Show diagnostic information and URLs in the UI',
							type: 'boolean' as const
						}
					]
				}
			]
		}
	];
</script>

<SettingsModal bind:open title="Viewer Settings" {schema} bind:data={settingsData} />
