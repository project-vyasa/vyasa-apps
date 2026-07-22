<script lang="ts">
	import { Button } from '@project-vyasa/vyasa-ui';
	import type { Catalog, PackageData } from '$lib/types';

	interface Props {
		open?: boolean;
		onClose?: () => void;
		diagRegistryUrl?: string;
		diagCatalogUrl?: string;
		diagPublicationUrl?: string;
		diagCatalog?: Catalog | null;
		packageData?: PackageData | null;
	}

	let {
		open = false,
		onClose,
		diagRegistryUrl = 'https://project-vyasa.github.io/vyasa-docs/registry.json',
		diagCatalogUrl = '',
		diagPublicationUrl = '',
		diagCatalog = null,
		packageData = null
	}: Props = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="diag-container">
	<div class="diag-header">
		<h2 class="diag-title">Diagnostics</h2>
		<Button variant="ghost" onclick={() => { if (onClose) onClose(); }}>Close</Button>
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

<style>
	.diag-container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		height: 100%;
		background: var(--bg-surface);
	}
	.diag-header {
		padding: var(--space-4);
		border-bottom: 1px solid var(--border-base);
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		top: 0;
		background: var(--bg-surface);
		z-index: 10;
	}
	.diag-title {
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0;
	}
	.diag-content {
		padding: var(--space-6) var(--space-4);
		display: flex;
		flex-direction: column;
		gap: var(--space-8);
		overflow-y: auto;
		flex: 1;
	}
	.diag-section {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}
	.diag-section-title {
		font-size: 1.125rem;
		font-weight: 600;
		margin: 0;
		color: var(--text-base);
	}
	.diag-url {
		font-family: var(--font-mono);
		font-size: 0.875rem;
		color: var(--text-secondary);
		background: var(--bg-surface-alt);
		padding: var(--space-3);
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
		overflow-x: auto;
		border: 1px solid var(--border-base);
	}
</style>
