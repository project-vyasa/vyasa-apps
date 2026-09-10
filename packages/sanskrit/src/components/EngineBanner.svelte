<script lang="ts">
	import { Alert } from '@project-vyasa/vyasa-ui';
	import { ENGINE_MISSING_MESSAGE, type EngineStatus } from '../wasm';

	interface Props {
		status: EngineStatus;
	}

	let { status }: Props = $props();
</script>

{#if status === 'missing'}
	<div class="banner">
		<Alert variant="warning" title="Engine not loaded">
			{ENGINE_MISSING_MESSAGE}
		</Alert>
	</div>
{/if}

<style>
	.banner {
		padding: var(--space-3) var(--space-4) 0;
	}
</style>
