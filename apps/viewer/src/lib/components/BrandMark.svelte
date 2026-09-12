<script lang="ts">
	import { base } from '$app/paths';
	import { BRAND, brandIconSrc, brandLogoSrc } from '$lib/brand';

	interface Props {
		variant?: 'icon' | 'logo';
		href?: string;
		class?: string;
	}

	let { variant = 'logo', href, class: className = '' }: Props = $props();

	const src = $derived(variant === 'icon' ? brandIconSrc(base) : brandLogoSrc(base));
	const sizeClass = $derived(variant === 'icon' ? 'brand-icon' : 'brand-logo');
</script>

{#if href}
	<a {href} class="brand-mark {sizeClass} {className}" aria-label={BRAND.name}>
		<img {src} alt="" />
	</a>
{:else}
	<div class="brand-mark {sizeClass} {className}" role="img" aria-label={BRAND.name}>
		<img {src} alt="" />
	</div>
{/if}

<style>
	.brand-mark {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex: 0 0 auto;
		text-decoration: none;
		color: inherit;
	}

	.brand-mark img {
		display: block;
		width: 100%;
		height: auto;
		object-fit: contain;
	}

	.brand-icon {
		width: 2rem;
		height: 2rem;
	}

	.brand-logo {
		width: min(10rem, 32vw);
		aspect-ratio: 1;
		height: auto;
	}
</style>
