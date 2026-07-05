import type { Locale } from '@/i18n/locales';
import type { SiteCopy } from '@/types/content';

const siteCopyEn: SiteCopy = {
    layout: {
        defaultTitle: 'Full-Stack Software Engineer and Freelance Developer',
        defaultDescription:
            'Nicolás Montiel is a full-stack software engineer helping teams build reliable web products, integrations, and AI-assisted engineering workflows.',
    },
    common: {
        email: 'Email',
        whatsapp: 'WhatsApp',
        linkedin: 'LinkedIn',
        languageLabel: 'Language',
    },
};

const siteCopyEs: SiteCopy = {
    layout: {
        defaultTitle:
            'Ingeniero de Software Full-Stack y Desarrollador Freelance',
        defaultDescription:
            'Nicolás Montiel es un ingeniero de software full-stack que ayuda a equipos a construir productos web confiables, integraciones y flujos de ingeniería asistidos por IA.',
    },
    common: {
        email: 'Email',
        whatsapp: 'WhatsApp',
        linkedin: 'LinkedIn',
        languageLabel: 'Idioma',
    },
};

const siteCopyByLocale: Record<Locale, SiteCopy> = {
    en: siteCopyEn,
    es: siteCopyEs,
};

export function getSiteCopy(locale: Locale): SiteCopy {
    return siteCopyByLocale[locale];
}
