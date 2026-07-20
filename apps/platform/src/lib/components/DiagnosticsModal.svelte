<script lang="ts">
	import { Button } from '@project-vyasa/vyasa-ui';
	import type { Catalog, PackageData } from '$lib/types';

	interface Props {
		open: boolean;
		diagRegistryUrl?: string;
		diagCatalogUrl?: string;
		diagPublicationUrl?: string;
		diagCatalog?: Catalog | null;
		packageData?: PackageData | null;
	}

	let {
		open = $bindable(false),
		diagRegistryUrl = 'https://project-vyasa.github.io/vyasa-docs/registry.json',
		diagCatalogUrl = '',
		diagPublicationUrl = '',
		diagCatalog = null,
		packageData = null
	}: Props = $props();
</script>

{#if open}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="diag-overlay" onclick={() => (open = false)}>
		<div class="diag-modal" onclick={(e) => e.stopPropagation()}>
			<div class="diag-header">
				<h2 class="diag-title">Diagnostics</h2>
				<Button variant="ghost" onclick={() => (open = false)}>Close</Button>
			</div>
			<div class="diag-content">
				<div class="diag-section">
					<h3 class="diag-section-title">Global Registry</h3>
					<div class="diag-url">{diagRegistryUrl}</div>
				</div>

				<div class="diag-section">
					<h3 class="diag-section-title">Publisher Catalog</h3>
					<div class="diag-url">{diagCatalogUrl || 'Not loaded'}</div>
					{#if diagCatalog}
						<pre class="diag-code">{JSON.stringify(diagCatalog, null, 2)}</pre>
					{/if}
				</div>

				<div class="diag-section">
					<h3 class="diag-section-title">Publication Manifest</h3>
					<div class="diag-url">{diagPublicationUrl || 'Not loaded'}</div>
					{#if packageData}
						<pre class="diag-code">{JSON.stringify(packageData.manifest, null, 2)}</pre>
					{:else}
						<div class="diag-url">Not loaded</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.diag-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
	}
	.diag-modal {
		background: var(--bg-surface);
		border-radius: var(--control-radius);
		width: 800px;
		max-width: 90vw;
		max-height: 90vh;
		display: flex;
		flex-direction: column;
		box-shadow: var(--shadow-lg);
		border: 1px solid var(--border-base);
	}
	.diag-header {
		padding: var(--space-4);
		border-bottom: 1px solid var(--border-base);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.diag-title {
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0;
	}
	.diag-content {
		padding: var(--space-4);
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
	}
	.diag-section {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}
	.diag-section-title {
		font-weight: 600;
		margin: 0;
	}
	.diag-url {
		font-family: var(--font-mono);
		font-size: 0.875rem;
		color: var(--text-secondary);
		background: var(--bg-surface-alt);
		padding: var(--space-2);
		border-radius: var(--control-radius);
		word-break: break-all;
	}
	.diag-code {
		background: var(--bg-surface-alt);
		padding: var(--space-4);
		border-radius: var(--control-radius);
		font-family: var(--font-mono);
		font-size: 0.875rem;
		white-space: pre-wrap;
		margin: 0;
		max-height: 200px;
		overflow-y: auto;
		border: 1px solid var(--border-base);
	}
</style>
