<script lang="ts">
	import { Button } from '@project-vyasa/vyasa-ui';
	import { Check, Flag } from 'lucide-svelte';
	import { copyText } from '$lib/copy-text';
	import { activePublication } from '$lib/viewer/active-publication.svelte';
	import { formatReadingReport } from '$lib/viewer/reading-report';
	import { readingReportInput } from '$lib/viewer/reading-report-state';

	let copied = $state(false);
	const ready = $derived(Boolean(activePublication.publicationId));

	async function handleCopy() {
		if (!ready) return;
		const ok = await copyText(formatReadingReport(readingReportInput()));
		if (!ok) return;
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 1600);
	}
</script>

<Button
	variant="ghost"
	size="icon"
	class="copy-reading-report"
	icon={copied ? Check : Flag}
	title={copied
		? 'Copied. Paste it to the publisher or the Vyasa team.'
		: 'Copy a report about this publication'}
	disabled={!ready}
	onclick={handleCopy}
/>
