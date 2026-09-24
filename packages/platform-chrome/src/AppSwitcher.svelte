<script lang="ts">
	import type { Component } from 'svelte';
	// Sibling paths, not package names: a file: dependency on vyasa-ui makes bun
	// install a second copy of that tree and stall while resolving it.
	import { Button, Dropdown } from '../../../../vyasa-ui/svelte';
	import { LayoutGrid } from '../../../apps/studio/node_modules/lucide-svelte';

	export type PlatformAppLink = {
		id: string;
		label: string;
		href: string;
	};

	interface Props {
		apps: PlatformAppLink[];
		guideHref: string;
	}

	let { apps, guideHref }: Props = $props();
	let open = $state(false);

	// lucide-svelte 1 icons are Svelte 4 classes; Button expects a Svelte 5 component.
	const appsIcon = LayoutGrid as unknown as Component;
</script>

<a class="guide-link" href={guideHref} data-sveltekit-reload title="User guide">Guide</a>
<Dropdown bind:open position="bottom-right">
	{#snippet trigger()}
		<Button variant="ghost" size="sm" icon={appsIcon} title="Other Vyasa apps">Apps</Button>
	{/snippet}
	{#snippet items()}
		{#each apps as app (app.id)}
			<a
				class="menu-item"
				role="menuitem"
				href={app.href}
				data-sveltekit-reload
				onclick={() => (open = false)}
			>
				{app.label}
			</a>
		{/each}
	{/snippet}
</Dropdown>

<style>
	.guide-link {
		font-size: var(--text-xs);
		font-weight: var(--font-semibold);
		color: var(--text-primary);
		text-decoration: none;
		padding: 0.2rem 0.45rem;
		border: 1px solid var(--border-base);
		border-radius: var(--control-radius);
		white-space: nowrap;
	}

	.guide-link:hover {
		border-color: var(--action-primary);
		color: var(--action-primary);
	}

	.menu-item {
		display: block;
		padding: 0.4rem 0.6rem;
		border-radius: var(--control-radius);
		color: var(--text-primary);
		text-decoration: none;
		font-size: var(--text-sm);
		white-space: nowrap;
	}

	.menu-item:hover {
		background: var(--surface-hover, var(--bg-surface));
	}
</style>
