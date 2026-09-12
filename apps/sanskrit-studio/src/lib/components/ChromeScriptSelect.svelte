<script lang="ts">
	import { Select } from '@project-vyasa/vyasa-ui';
	import { chromeLabels } from '@project-vyasa/sanskrit';

	const options = $derived(chromeLabels.scripts.map((s) => ({ label: s.name, value: s.id })));
</script>

<label class="chrome-script">
	<span>Labels</span>
	<Select
		options={options}
		value={chromeLabels.script}
		onchange={(value) => chromeLabels.setScript(String(value))}
	/>
</label>

<style>
	.chrome-script {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-size: var(--text-xs);
		color: var(--text-secondary);
		white-space: nowrap;
	}

	/* Trigger and menu stay one width so IAST does not shrink the open list. */
	.chrome-script :global(.select-container) {
		width: 14rem;
		min-width: 14rem;
		max-width: 14rem;
		flex: 0 0 14rem;
	}
</style>
