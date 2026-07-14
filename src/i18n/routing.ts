import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from '@/i18n/locales';

export const RECRUITER_PROFILE_SLUGS: Record<Locale, string> = {
    en: 'why-hire-me',
    es: 'porque-contratarme',
};

export const FREELANCER_SLUGS: Record<Locale, string> = {
    en: 'work-with-me',
    es: 'trabaja-conmigo',
};

export function getHomePath(locale: Locale) {
    return `/${locale}`;
}

export function getRecruiterProfilePath(locale: Locale) {
    return `/${locale}/${RECRUITER_PROFILE_SLUGS[locale]}`;
}

export function getFreelancerPath(locale: Locale) {
    return `/${locale}/${FREELANCER_SLUGS[locale]}`;
}

export function getLocalizedPath(pathname: string, targetLocale: Locale) {
    const cleanPath = pathname || '/';
    const segments = cleanPath.split('/').filter(Boolean);

    if (segments.length === 0) {
        return getHomePath(targetLocale);
    }

    if (SUPPORTED_LOCALES.includes(segments[0] as Locale)) {
        const rest = segments.slice(1);
        if (Object.values(RECRUITER_PROFILE_SLUGS).includes(rest[0])) {
            return getRecruiterProfilePath(targetLocale);
        }

        if (Object.values(FREELANCER_SLUGS).includes(rest[0])) {
            return getFreelancerPath(targetLocale);
        }

        segments[0] = targetLocale;
        return `/${segments.join('/')}`;
    }

    return targetLocale === DEFAULT_LOCALE
        ? cleanPath
        : `/${targetLocale}${cleanPath === '/' ? '' : cleanPath}`;
}
