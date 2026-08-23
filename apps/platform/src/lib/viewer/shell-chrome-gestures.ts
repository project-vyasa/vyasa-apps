const TAP_SLOP_PX = 8;
const REVEAL_SCROLL_PX = 24;
const SWIPE_MIN_PX = 56;
const SWIPE_DOMINANCE = 1.5;
const EDGE_IGNORE_PX = 24;
const COMPACT_QUERY = '(max-width: 48rem)';

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, label, summary, [role="button"]';

export type PointerGesture = 'tap' | 'swipe-left' | 'swipe-right' | 'ignore';

export function isChromeToggleTap(opts: {
	moveX: number;
	moveY: number;
	selectedText: string;
	interactive: boolean;
}): boolean {
	return classifyPointerGesture(opts) === 'tap';
}

export function classifyPointerGesture(opts: {
	moveX: number;
	moveY: number;
	selectedText: string;
	interactive: boolean;
}): PointerGesture {
	if (opts.interactive) return 'ignore';
	if (opts.selectedText.trim()) return 'ignore';
	const ax = Math.abs(opts.moveX);
	const ay = Math.abs(opts.moveY);
	if (ax <= TAP_SLOP_PX && ay <= TAP_SLOP_PX) return 'tap';
	if (ax < SWIPE_MIN_PX || ax < ay * SWIPE_DOMINANCE) return 'ignore';
	return opts.moveX < 0 ? 'swipe-left' : 'swipe-right';
}

export function isEdgeSwipeStart(clientX: number, viewportWidth: number): boolean {
	return clientX < EDGE_IGNORE_PX || clientX > viewportWidth - EDGE_IGNORE_PX;
}

export function isChromeRevealScroll(previousY: number, nextY: number): boolean {
	return previousY - nextY >= REVEAL_SCROLL_PX;
}

export function targetIsInteractive(target: EventTarget | null): boolean {
	if (!(target instanceof Element)) return false;
	return Boolean(target.closest(INTERACTIVE_SELECTOR));
}

function compactViewport(win: Window | null): boolean {
	return win?.matchMedia(COMPACT_QUERY).matches ?? false;
}

/** Same-origin iframe: tap toggles chrome; swipe changes leaf; scroll-up reveals. */
export function attachShellChromeGestures(
	doc: Document,
	handlers: {
		toggle: () => void;
		reveal: () => void;
		swipeLeft?: () => void;
		swipeRight?: () => void;
	}
): () => void {
	let startX = 0;
	let startY = 0;
	let startFromEdge = false;
	let lastScrollY = doc.defaultView?.scrollY ?? doc.documentElement.scrollTop;

	function onPointerDown(event: PointerEvent) {
		startX = event.clientX;
		startY = event.clientY;
		const width = doc.defaultView?.innerWidth ?? doc.documentElement.clientWidth;
		startFromEdge = isEdgeSwipeStart(event.clientX, width);
	}

	function onPointerUp(event: PointerEvent) {
		const selected = doc.getSelection()?.toString() ?? '';
		const gesture = classifyPointerGesture({
			moveX: event.clientX - startX,
			moveY: event.clientY - startY,
			selectedText: selected,
			interactive: targetIsInteractive(event.target)
		});
		if (gesture === 'tap') {
			handlers.toggle();
			return;
		}
		if (!compactViewport(doc.defaultView) || startFromEdge) return;
		if (gesture === 'swipe-left') handlers.swipeLeft?.();
		if (gesture === 'swipe-right') handlers.swipeRight?.();
	}

	function onScroll() {
		const nextY = doc.defaultView?.scrollY ?? doc.documentElement.scrollTop;
		if (isChromeRevealScroll(lastScrollY, nextY)) handlers.reveal();
		lastScrollY = nextY;
	}

	doc.addEventListener('pointerdown', onPointerDown, { passive: true });
	doc.addEventListener('pointerup', onPointerUp);
	doc.addEventListener('scroll', onScroll, { passive: true, capture: true });

	return () => {
		doc.removeEventListener('pointerdown', onPointerDown);
		doc.removeEventListener('pointerup', onPointerUp);
		doc.removeEventListener('scroll', onScroll, { capture: true });
	};
}
