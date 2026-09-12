<script lang="ts">
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		onSelectionComplete?: (rect: DOMRect) => void;
		children?: Snippet;
	}

	let { onSelectionComplete, children }: Props = $props();

	let containerEl = $state<HTMLElement | null>(null);
	let isSelecting = $state(false);
	let startX = $state(0);
	let startY = $state(0);
	let currentX = $state(0);
	let currentY = $state(0);

	const style = $derived.by(() => {
		if (!isSelecting) return 'display: none;';
		const left = Math.min(startX, currentX);
		const top = Math.min(startY, currentY);
		const width = Math.abs(currentX - startX);
		const height = Math.abs(currentY - startY);
		return `left: ${left}px; top: ${top}px; width: ${width}px; height: ${height}px;`;
	});

	function handleMouseDown(e: MouseEvent) {
		// Ignore if clicking on a button, link, or scrollbar directly unless we want to allow it
		// But we actually want to allow drawing over the links (the Plot cells).
		// We'll prevent default to avoid native link drag-and-drop
		
		isSelecting = true;
		const rect = containerEl?.getBoundingClientRect();
		if (!rect) return;

		startX = e.clientX - rect.left;
		startY = e.clientY - rect.top;
		currentX = startX;
		currentY = startY;
	}

	function handleMouseMove(e: MouseEvent) {
		if (!isSelecting) return;
		e.preventDefault(); // prevent selection text while dragging
		
		const rect = containerEl?.getBoundingClientRect();
		if (!rect) return;

		currentX = e.clientX - rect.left;
		currentY = e.clientY - rect.top;
	}

	function handleMouseUp(e: MouseEvent) {
		if (!isSelecting) return;
		isSelecting = false;

		const rect = containerEl?.getBoundingClientRect();
		if (!rect || !onSelectionComplete) return;

		const left = Math.min(startX, currentX) + rect.left;
		const top = Math.min(startY, currentY) + rect.top;
		const width = Math.abs(currentX - startX);
		const height = Math.abs(currentY - startY);

		if (width > 2 && height > 2) {
			const selectionRect = new DOMRect(left, top, width, height);
			onSelectionComplete(selectionRect);
		} else if (width <= 2 && height <= 2) {
			// It was just a click. We can still emit a 1x1 rect for click selection
			const selectionRect = new DOMRect(left, top, 1, 1);
			onSelectionComplete(selectionRect);
		}
	}

	onMount(() => {
		window.addEventListener('mouseup', handleMouseUp);
		window.addEventListener('mousemove', handleMouseMove);
		return () => {
			window.removeEventListener('mouseup', handleMouseUp);
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div 
	class="marquee-container" 
	bind:this={containerEl}
	onmousedown={handleMouseDown}
>
	<div class="marquee-box" {style}></div>
	{@render children?.()}
</div>

<style>
	.marquee-container {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.marquee-box {
		position: absolute;
		border: 1px solid var(--action-primary);
		background-color: color-mix(in srgb, var(--action-primary) 20%, transparent);
		pointer-events: none;
		z-index: 50;
	}
</style>
