import type { Locale } from '@/i18n/locales';
import type { PageSeo } from '@/types/content';

const freelancerSeoEn: PageSeo = {
    title: 'Freelancer',
    description:
        'Freelancer landing page inspired by a dark portfolio reference.',
};

const freelancerSeoEs: PageSeo = {
    title: 'Freelancer',
    description:
        'Freelancer landing page inspired by a dark portfolio reference.',
};

const freelancerSeoByLocale: Record<Locale, PageSeo> = {
    en: freelancerSeoEn,
    es: freelancerSeoEs,
};

export function getFreelancerSeo(locale: Locale): PageSeo {
    return freelancerSeoByLocale[locale];
}
