export const LIBRARY_VIEW_MODE_KEY = 'vyasa_library_view_mode';
export const LIBRARY_SEARCH_GROUP_BY_KEY = 'vyasa_library_search_group_by';

export type LibraryViewMode = 'list' | 'grid';
export type LibrarySearchGroupBy = 'type' | 'language';

function storage(): Storage | null {
	if (typeof window === 'undefined') return null;
	return window.localStorage;
}

export function loadLibraryViewMode(): LibraryViewMode {
	const raw = storage()?.getItem(LIBRARY_VIEW_MODE_KEY);
	return raw === 'list' || raw === 'grid' ? raw : 'grid';
}

export function saveLibraryViewMode(mode: LibraryViewMode) {
	storage()?.setItem(LIBRARY_VIEW_MODE_KEY, mode);
}

export function loadSearchGroupBy(): LibrarySearchGroupBy {
	return storage()?.getItem(LIBRARY_SEARCH_GROUP_BY_KEY) === 'language' ? 'language' : 'type';
}

export function saveSearchGroupBy(groupBy: LibrarySearchGroupBy) {
	storage()?.setItem(LIBRARY_SEARCH_GROUP_BY_KEY, groupBy);
}

export const SEARCH_GROUP_BY_OPTIONS: { label: string; value: LibrarySearchGroupBy }[] = [
	{ label: 'Type', value: 'type' },
	{ label: 'Language', value: 'language' }
];
