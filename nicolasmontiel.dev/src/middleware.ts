import { defineMiddleware } from 'astro:middleware';
import { resolveRequestLocale } from '@/i18n/detect-locale';
import { DEFAULT_LOCALE, isLocale } from '@/i18n/locales';

const BYPASS_PREFIXES = ['/api', '/_astro', '/icons', '/qr-code'];

function shouldBypass(pathname: string) {
	if (pathname === '/favicon.svg') {
		return true;
	}

	if (BYPASS_PREFIXES.some(prefix => pathname === prefix || pathname.startsWith(`${prefix}/`))) {
		return true;
	}

	return /\.[a-zA-Z0-9]+$/.test(pathname);
}

export const onRequest = defineMiddleware((context, next) => {
	const url = new URL(context.request.url);
	const { pathname } = url;

	if (shouldBypass(pathname)) {
		return next();
	}

	const segments = pathname.split('/').filter(Boolean);
	const firstSegment = segments[0];

	if (firstSegment && isLocale(firstSegment)) {
		return next();
	}

	if (firstSegment && firstSegment.length === 2) {
		const nextPath = `/${DEFAULT_LOCALE}/${segments.slice(1).join('/')}`.replace(/\/$/, '');
		const destination = nextPath.length > 0 ? nextPath : `/${DEFAULT_LOCALE}`;
		url.pathname = destination;
		return context.redirect(url.toString());
	}

	const locale = resolveRequestLocale(context);
	url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
	return context.redirect(url.toString());
});
