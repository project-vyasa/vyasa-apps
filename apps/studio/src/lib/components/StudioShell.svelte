<script lang="ts">
	import {
		ActivityBar,
		ActivityBarItem,
		AppHeader,
		AppShell,
		Button
	} from '@project-vyasa/vyasa-ui';
	import { setContext, type Snippet } from 'svelte';
	import { goto } from '$app/navigation';
	import { base, resolve } from '$app/paths';
	import { page } from '$app/state';
	import { FolderCode, Sparkles } from 'lucide-svelte';
	import { buttonIcon } from '$lib/button-icon';
	import { brandIconSrc } from '$lib/brand';
	import { AppSwitcher } from '@project-vyasa/platform-chrome';
	import { dev } from '$app/environment';
	import { otherPlatformApps, pagesAppGuideHref } from '../../../../../scripts/gh-pages-apps.mjs';

	export type StudioActivity = 'play' | 'workspace';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();

	let leftVisible = $state(true);
	let leftWidth = $state(280);
	let sidebarLeft = $state<Snippet | undefined>(undefined);

	setContext('studio-shell', {
		setSidebarLeft: (snippet: Snippet | undefined) => {
			sidebarLeft = snippet;
		},
		setLeftWidth: (width: number) => {
			leftWidth = width;
		}
	});

	const activity = $derived<StudioActivity>(
		page.route.id?.startsWith('/workspace') ? 'workspace' : 'play'
	);

	const titles = {
		play: 'Play — compile a workspace in the browser',
		workspace: 'Workspace — authoring IDE'
	} satisfies Record<StudioActivity, string>;
</script>

<AppShell {sidebarLeft} {leftWidth} bind:leftVisible>
	{#snippet header()}
		<AppHeader
			appName="Vyasa Studio"
			href={resolve('/')}
			logoSrc={brandIconSrc(base)}
			logoAlt="Project Vyasa"
			bind:leftVisible
		>
			{#snippet headerRight()}
				<AppSwitcher
					apps={otherPlatformApps('studio', { dev })}
					guideHref={pagesAppGuideHref('studio', { dev })}
				/>
			{/snippet}
			<span class="header-activity">{titles[activity]}</span>
		</AppHeader>
	{/snippet}

	{#snippet appBar()}
		<ActivityBar>
			{#snippet top()}
				<ActivityBarItem active={activity === 'play'}>
					<Button
						variant="ghost"
						size="icon"
						class="activity-item"
						icon={buttonIcon(Sparkles)}
						title="Play"
						onclick={() => goto(resolve('/'))}
					/>
				</ActivityBarItem>
				<ActivityBarItem active={activity === 'workspace'}>
					<Button
						variant="ghost"
						size="icon"
						class="activity-item"
						icon={buttonIcon(FolderCode)}
						title="Workspace"
						onclick={() => goto(resolve('/workspace'))}
					/>
				</ActivityBarItem>
			{/snippet}
		</ActivityBar>
	{/snippet}

	<div class="canvas">
		{@render children?.()}
	</div>
</AppShell>

<style>
	.header-activity {
		color: var(--text-secondary);
		font-size: var(--text-sm);
	}

	:global(.app-header .app-title)::after {
		content: 'Experimental';
		margin-left: 0.35rem;
		padding: 0.08rem 0.4rem;
		font-size: 0.65rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--text-tertiary);
		border: 1px solid var(--border-base);
		border-radius: var(--control-radius);
		white-space: nowrap;
		line-height: 1.3;
	}

	.canvas {
		display: flex;
		flex-direction: column;
		min-height: 0;
		height: 100%;
		width: 100%;
	}

	:global(.activity-item) {
		width: 100%;
		border-radius: 0;
	}
</style>
