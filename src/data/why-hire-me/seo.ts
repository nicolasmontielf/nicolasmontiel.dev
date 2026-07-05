import type { Locale } from '@/i18n/locales';
import type { PageSeo } from '@/types/content';

const whyHireMeSeoEn: PageSeo = {
    title: 'Technical Profile of Nicolás Montiel, Full-Stack Software Engineer',
    description:
        'Explore Nicolás Montiel’s technical background, experience, stack, and projects as a full-stack software engineer based in Paraguay and Argentina.',
};

const whyHireMeSeoEs: PageSeo = {
    title: 'Perfil técnico de Nicolás Montiel, Ingeniero de Software Full-Stack',
    description:
        'Explorá el perfil técnico de Nicolás Montiel: experiencia, stack, proyectos y recorrido como ingeniero de software full-stack radicado entre Paraguay y Argentina.',
};

const whyHireMeSeoByLocale: Record<Locale, PageSeo> = {
    en: whyHireMeSeoEn,
    es: whyHireMeSeoEs,
};

export function getWhyHireMeSeo(locale: Locale): PageSeo {
    return whyHireMeSeoByLocale[locale];
}
