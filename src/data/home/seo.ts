import type { Locale } from '@/i18n/locales';
import type { PageSeo } from '@/types/content';

const homeSeoEn: PageSeo = {
    title: 'Full-Stack Developer for Teams, Recruiters, and Clients',
    description:
        'Nicolás Montiel is a full-stack developer building practical, reliable software for businesses and technical teams.',
};

const homeSeoEs: PageSeo = {
    title: 'Desarrollador Full-Stack para Equipos, Recruiters y Clientes',
    description:
        'Nicolás Montiel es un desarrollador full-stack que construye software práctico y confiable para empresas y equipos técnicos.',
};

const homeSeoByLocale: Record<Locale, PageSeo> = {
    en: homeSeoEn,
    es: homeSeoEs,
};

export function getHomeSeo(locale: Locale): PageSeo {
    return homeSeoByLocale[locale];
}
