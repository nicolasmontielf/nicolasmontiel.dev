import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from '@/i18n/locales';
import { COMMERCIAL_SERVICE_SLUGS, getLocalizedPath } from '@/i18n/routing';

export {
    COMMERCIAL_SERVICE_SLUGS,
    getCommercialServicePath,
    getLocalizedPath,
} from '@/i18n/routing';

export const SITE_URL = 'https://nicolasmontiel.dev';
export const SITE_NAME = 'Nicolás Montiel';
export const SITE_TITLE_SUFFIX = 'Nicolás Montiel';
export const DEFAULT_THEME_COLOR = '#f8fafc';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;
export const DEFAULT_ROBOTS =
    'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
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
    '/en/qr-code',
    '/es/qr-code',
    '/en/about-me',
    '/es/sobre-mi',
    `/en/${COMMERCIAL_SERVICE_SLUGS.ecommerce.en}`,
    `/es/${COMMERCIAL_SERVICE_SLUGS.ecommerce.es}`,
    `/en/${COMMERCIAL_SERVICE_SLUGS.web.en}`,
    `/es/${COMMERCIAL_SERVICE_SLUGS.web.es}`,
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
