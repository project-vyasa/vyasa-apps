<script lang="ts">
	import { Button } from '@project-vyasa/vyasa-ui';
	import { Link2, Check } from 'lucide-svelte';
	import { copyText } from '$lib/copy-text';

	interface Props {
		/** vyasa://… URI to copy */
		vyasaUri: string;
		size?: 'sm' | 'icon';
		title?: string;
	}

	let { vyasaUri, size = 'icon', title = 'Copy Vyasa link' }: Props = $props();

	let copied = $state(false);

	async function handleCopy() {
		if (!vyasaUri) return;
		const ok = await copyText(vyasaUri);
		if (!ok) return;
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 1600);
	}
</script>

<Button
	variant="ghost"
	{size}
	class="copy-vyasa-link"
	icon={copied ? Check : Link2}
	title={copied ? 'Copied!' : title}
	disabled={!vyasaUri}
	onclick={handleCopy}
/>
