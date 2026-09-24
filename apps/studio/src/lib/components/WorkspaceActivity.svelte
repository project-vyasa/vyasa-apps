<script lang="ts">
	import { SAMPLES_REPO_HREF } from '$lib/pages-apps';
</script>

<div class="workspace">
	<div class="copy">
		<h1>Workspace</h1>
		<p>
			The authoring IDE — source tree, ZIP load, template picker, and file-linked diagnostics — is
			the next slice. Play is the interest landing; this activity is the publisher desk.
		</p>
		<p>
			Until then, edit the Bhagavad Gita showcase in <strong>Play</strong>. Full workspaces live in
			<a href={SAMPLES_REPO_HREF}>vyasa-samples</a>.
		</p>
	</div>
</div>

<style>
	.workspace {
		display: flex;
		min-height: 0;
		height: 100%;
		width: 100%;
	}

	.copy {
		margin: auto;
		max-width: 36rem;
		padding: var(--space-6);
	}

	h1 {
		margin: 0 0 var(--space-3);
		font-size: var(--text-xl);
		font-weight: 600;
	}

	p {
		margin: 0 0 var(--space-3);
		color: var(--text-secondary);
		line-height: 1.5;
	}

	a {
		color: var(--text-primary);
	}
</style>
