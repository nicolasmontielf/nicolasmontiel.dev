import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from '@/i18n/locales';
import type { CommercialService } from '@/types/seo';

export const COMMERCIAL_SERVICE_SLUGS: Record<
    CommercialService,
    Record<Locale, string>
> = {
    ecommerce: {
        en: 'i-need-an-online-store',
        es: 'quiero-un-ecommerce',
    },
    web: {
        en: 'i-need-a-website',
        es: 'quiero-una-web',
    },
};

export function getHomePath(locale: Locale) {
    return `/${locale}`;
}

export function getAboutPath(locale: Locale) {
    return locale === 'es' ? '/es/sobre-mi' : '/en/about-me';
}

export function getCommercialServicePath(
    service: CommercialService,
    locale: Locale,
) {
    return `/${locale}/${COMMERCIAL_SERVICE_SLUGS[service][locale]}`;
}

function getLocalizedCommercialServicePath(
    segment: string,
    targetLocale: Locale,
) {
    const service = Object.entries(COMMERCIAL_SERVICE_SLUGS).find(([, slugs]) =>
        Object.values(slugs).includes(segment),
    )?.[0] as CommercialService | undefined;

    return service ? getCommercialServicePath(service, targetLocale) : null;
}

export function getLocalizedPath(pathname: string, targetLocale: Locale) {
    const cleanPath = pathname || '/';
    const segments = cleanPath.split('/').filter(Boolean);

    if (segments.length === 0) {
        return getHomePath(targetLocale);
    }

    if (SUPPORTED_LOCALES.includes(segments[0] as Locale)) {
        const rest = segments.slice(1);
        if (rest[0] === 'about-me' && targetLocale === 'es') {
            return '/es/sobre-mi';
        }
        if (rest[0] === 'sobre-mi' && targetLocale === 'en') {
            return '/en/about-me';
        }

        const localizedServicePath = rest[0]
            ? getLocalizedCommercialServicePath(rest[0], targetLocale)
            : null;
        if (localizedServicePath) {
            return localizedServicePath;
        }

        segments[0] = targetLocale;
        return `/${segments.join('/')}`;
    }

    return targetLocale === DEFAULT_LOCALE
        ? cleanPath
        : `/${targetLocale}${cleanPath === '/' ? '' : cleanPath}`;
}
