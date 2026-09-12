import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';
import { parseVyasaCatalogLink, publicationReaderPath } from '$lib/catalog-ref';

/** Resolve `?uri=vyasa://registry/catalog/publication[/urn]` to the reader route. */
export function load({ url }) {
	const uri = url.searchParams.get('uri') ?? url.searchParams.get('vyasa') ?? '';
	const link = parseVyasaCatalogLink(uri);
	if (!link) {
		return { error: uri ? 'Invalid Vyasa URI' : 'Missing uri query parameter' };
	}
	throw redirect(307, publicationReaderPath(link, link.urn, base));
}
