import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from '@/i18n/locales';

export const SITE_URL = 'https://www.nicolasmontiel.dev';
export const SITE_NAME = 'Nicolás Montiel';
export const SITE_TITLE_SUFFIX = 'Nicolás Montiel';
export const DEFAULT_THEME_COLOR = '#f8fafc';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;
export const DEFAULT_ROBOTS = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
export const DEVTO_PROFILE_URL = 'https://dev.to/nicolasmontielf';
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const SAME_AS_LINKS = [
	'https://www.linkedin.com/in/nicolasmontielf/?locale=en_US',
	'https://github.com/nicolasmontielf',
	DEVTO_PROFILE_URL,
];

const OPEN_GRAPH_LOCALES: Record<Locale, string> = {
	en: 'en_US',
	es: 'es_PY',
};

const LANGUAGE_TAGS: Record<Locale, string> = {
	en: 'en-US',
	es: 'es-PY',
};

export const PUBLIC_LOCALIZED_PATHS = [
	'/en',
	'/es',
	'/en/about-me',
	'/es/sobre-mi',
	'/en/ecommerce',
	'/es/ecommerce',
];

export function toAbsoluteUrl(pathname: string) {
	return new URL(pathname, SITE_URL).toString();
}

export function getLanguageTag(locale: Locale) {
	return LANGUAGE_TAGS[locale];
}

export function getOpenGraphLocale(locale: Locale) {
	return OPEN_GRAPH_LOCALES[locale];
}

export function getLocalizedPath(pathname: string, targetLocale: Locale) {
	const cleanPath = pathname || '/';
	const segments = cleanPath.split('/').filter(Boolean);

	if (segments.length === 0) {
		return `/${targetLocale}`;
	}

	if (segments[0] === 'en' || segments[0] === 'es') {
		const rest = segments.slice(1);
		if (rest[0] === 'about-me' && targetLocale === 'es') {
			return '/es/sobre-mi';
		}
		if (rest[0] === 'sobre-mi' && targetLocale === 'en') {
			return '/en/about-me';
		}

		segments[0] = targetLocale;
		return `/${segments.join('/')}`;
	}

	return targetLocale === DEFAULT_LOCALE ? cleanPath : `/${targetLocale}${cleanPath === '/' ? '' : cleanPath}`;
}

export function getAlternateLanguageLinks(pathname: string) {
	return SUPPORTED_LOCALES.map((locale) => ({
		locale,
		hreflang: locale,
		href: toAbsoluteUrl(getLocalizedPath(pathname, locale)),
	}));
}

export function getXDefaultHref(pathname: string) {
	return toAbsoluteUrl(getLocalizedPath(pathname, DEFAULT_LOCALE));
}
