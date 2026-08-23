import { describe, expect, it } from 'vitest';
import {
	classifyPointerGesture,
	isChromeRevealScroll,
	isChromeToggleTap,
	isEdgeSwipeStart
} from './shell-chrome-gestures';

describe('shell chrome gestures', () => {
	it('treats a still pointer-up as a tap', () => {
		expect(isChromeToggleTap({ moveX: 0, moveY: 1, selectedText: '', interactive: false })).toBe(
			true
		);
	});

	it('ignores drags, text selection, and controls', () => {
		expect(isChromeToggleTap({ moveX: 0, moveY: 20, selectedText: '', interactive: false })).toBe(
			false
		);
		expect(
			isChromeToggleTap({ moveX: 0, moveY: 0, selectedText: 'verse', interactive: false })
		).toBe(false);
		expect(isChromeToggleTap({ moveX: 0, moveY: 0, selectedText: '', interactive: true })).toBe(
			false
		);
	});

	it('maps a horizontal flick to leaf prev/next', () => {
		expect(
			classifyPointerGesture({
				moveX: -80,
				moveY: 4,
				selectedText: '',
				interactive: false
			})
		).toBe('swipe-left');
		expect(
			classifyPointerGesture({
				moveX: 80,
				moveY: -6,
				selectedText: '',
				interactive: false
			})
		).toBe('swipe-right');
	});

	it('does not treat vertical scroll as a leaf swipe', () => {
		expect(
			classifyPointerGesture({
				moveX: 20,
				moveY: 90,
				selectedText: '',
				interactive: false
			})
		).toBe('ignore');
	});

	it('leaves screen-edge starts for the browser back gesture', () => {
		expect(isEdgeSwipeStart(8, 400)).toBe(true);
		expect(isEdgeSwipeStart(200, 400)).toBe(false);
		expect(isEdgeSwipeStart(390, 400)).toBe(true);
	});

	it('reveals chrome only on a clear scroll-up', () => {
		expect(isChromeRevealScroll(80, 50)).toBe(true);
		expect(isChromeRevealScroll(50, 80)).toBe(false);
		expect(isChromeRevealScroll(50, 40)).toBe(false);
	});
});
