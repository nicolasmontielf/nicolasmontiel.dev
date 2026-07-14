import type { Locale } from '@/i18n/locales';
import type { PageSeo } from '@/types/content';

const freelancerSeoEn: PageSeo = {
    title: 'Freelancer | Nicolas Montiel',
    description:
        'Software, automation, and AI support for founders and growing businesses that need practical digital solutions.',
};

const freelancerSeoEs: PageSeo = {
    title: 'Freelancer | Nicolas Montiel',
    description:
        'Software, automatización e inteligencia artificial para founders y negocios en crecimiento que necesitan soluciones digitales prácticas.',
};

const freelancerSeoByLocale: Record<Locale, PageSeo> = {
    en: freelancerSeoEn,
    es: freelancerSeoEs,
};

export function getFreelancerSeo(locale: Locale): PageSeo {
    return freelancerSeoByLocale[locale];
}
