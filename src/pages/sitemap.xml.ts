import type { APIRoute } from 'astro';
import { PUBLIC_LOCALIZED_PATHS, getAlternateLanguageLinks, toAbsoluteUrl } from '@/seo/site';

function renderUrlEntry(pathname: string) {
	const alternates = getAlternateLanguageLinks(pathname)
		.map((link) => `<xhtml:link rel="alternate" hreflang="${link.hreflang}" href="${link.href}" />`)
		.join('');

	return `<url><loc>${toAbsoluteUrl(pathname)}</loc>${alternates}</url>`;
}

export const GET: APIRoute = () => {
	const body = `<?xml version="1.0" encoding="UTF-8"?>` +
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">` +
		`${PUBLIC_LOCALIZED_PATHS.map(renderUrlEntry).join('')}` +
		`</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
};
