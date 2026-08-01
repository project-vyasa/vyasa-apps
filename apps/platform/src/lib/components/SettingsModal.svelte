<script lang="ts">
	import { SettingsModal } from '@project-vyasa/vyasa-ui';
	import { viewerSettings } from '../settings.svelte';
	import { DEFAULT_REGISTRY_URL } from '../registry';
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

	let settingsData = {
		get localSources() {
			return viewerSettings.localSources;
		},
		set localSources(val) {
			viewerSettings.localSources = val;
		},
		get debugMode() {
			return viewerSettings.debugMode;
		},
		set debugMode(val) {
			viewerSettings.debugMode = val;
		},
		get theme() {
			return themeContext?.theme || 'system';
		},
		set theme(val) {
			if (themeContext) themeContext.theme = val as any;
		},
		get density() {
			return themeContext?.density || 'standard';
		},
		set density(val) {
			if (themeContext) themeContext.density = val as any;
		}
	};

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
					title: 'Local Sources',
					items: [
						{
							id: 'localSources',
							label: 'Local source URLs',
							description: `The Adi global registry (${DEFAULT_REGISTRY_URL}) is always loaded. Optionally add semicolon- or comma-separated local registry or catalog URLs (e.g. http://localhost:8080/registry.json). Each URL is autodetected.`,
							type: 'text' as const
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
							description:
								'Show vyasa:// URIs, catalog metadata, and diagnostic URLs in the UI. Toggle with Ctrl+B.',
							type: 'boolean' as const
						}
					]
				}
			]
		}
	];
</script>

<SettingsModal bind:open title="Viewer Settings" {schema} data={settingsData} />
