<script lang="ts">
	import { Alert } from '@project-vyasa/vyasa-ui';

	let { data } = $props();
</script>

<div class="link-resolver">
	{#if data.error}
		<Alert variant="warning" title="Link Resolver">
			{data.error}. Use <code>?uri=vyasa://registry/catalog/publication</code>
		</Alert>
	{/if}
</div>

<style>
	.link-resolver {
		padding: var(--space-8);
		max-width: 40rem;
		margin: 0 auto;
	}
</style>
