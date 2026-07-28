import type { VocabularyEntry } from '$lib/types';

/** Streams that carry display labels (not the identity registry bucket). */
export function chromeStreamsFromVocabulary(
	vocabulary: VocabularyEntry[] | undefined,
	primaryStream?: string
): string[] {
	if (!vocabulary?.length) {
		return primaryStream ? [primaryStream] : [];
	}
	const streams = new Set<string>();
	for (const entry of vocabulary) {
		const name = entry.stream_name?.trim();
		if (!name || name.toLowerCase() === 'vocabulary') continue;
		streams.add(name);
	}
	const list = Array.from(streams).sort((a, b) => a.localeCompare(b));
	if (primaryStream && !list.includes(primaryStream)) {
		list.unshift(primaryStream);
	}
	return list;
}

export function getVocabularyLabel(
	vocabulary: VocabularyEntry[] | undefined,
	category: string,
	key: string,
	streamName: string,
	primaryStream?: string
): string | undefined {
	if (!vocabulary) return undefined;
	const lowerKey = key.toLowerCase();
	const lowerCat = category.toLowerCase();
	const lowerStream = streamName?.toLowerCase() || '';

	const matchesCategory = (cat: string) => {
		const c = cat.toLowerCase();
		return c === lowerCat || c === lowerCat + 's' || c.replace(/s$/, '') === lowerCat;
	};

	let match = vocabulary.find(
		(v) =>
			matchesCategory(v.category) &&
			v.key.toLowerCase() === lowerKey &&
			v.stream_name?.toLowerCase() === lowerStream
	);
	if (match) return match.value;

	if (primaryStream) {
		match = vocabulary.find(
			(v) =>
				matchesCategory(v.category) &&
				v.key.toLowerCase() === lowerKey &&
				v.stream_name?.toLowerCase() === primaryStream.toLowerCase()
		);
		if (match) return match.value;
	}

	return undefined;
}

/** Resolve URN → title map for the active chrome / primary stream. */
export function titlesForChromeStream(
	titlesByStream: Record<string, Record<string, string>> | undefined,
	fallbackTitles: Record<string, string> | undefined,
	chromeStream: string | undefined,
	primaryStream?: string
): Record<string, string> {
	if (titlesByStream) {
		if (chromeStream && titlesByStream[chromeStream]) return titlesByStream[chromeStream];
		if (primaryStream && titlesByStream[primaryStream]) return titlesByStream[primaryStream];
		const first = Object.values(titlesByStream)[0];
		if (first) return first;
	}
	return fallbackTitles || {};
}
