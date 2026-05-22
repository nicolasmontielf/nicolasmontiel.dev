import type { Locale } from '@/i18n/locales';
import type { Messages } from '@/types/i18n';

const messagesByLocale: Record<Locale, Messages> = {
    en: {
        layout: {
            defaultTitle:
                'Full-Stack Software Engineer and Freelance Developer',
            defaultDescription:
                'Nicolás Montiel is a full-stack software engineer helping teams build web products, ecommerce experiences, integrations, and AI-assisted engineering workflows.',
        },
        homePage: {
            title: 'Full-Stack Software Engineer for Web Products, Ecommerce, and AI Workflows',
            description:
                'Work with Nicolás Montiel, a senior full-stack software engineer building reliable web products, ecommerce solutions, integrations, and AI-assisted engineering workflows.',
        },
        home: {
            greeting: "Hi, I'm Nico 👋🏻",
            certificationsTitle: 'Certifications and courses',
            viewCredential: 'View Credential',
        },
        common: {
            email: 'Email',
            whatsapp: 'WhatsApp',
            linkedin: 'LinkedIn',
        },
        landing: {
            alternative: 'Alternative',
            viewMore: 'View more',
            avatarAlt: 'Avatar of Nicolas Montiel',
        },
        footer: {
            contactTitle: 'Contact',
            linksTitle: 'Useful links',
            about: 'Why work with me',
            ecommerce: 'Ecommerce',
            web: 'Website',
            logoAlt: 'Nicolás Montiel logo',
        },
    },
    es: {
        layout: {
            defaultTitle:
                'Ingeniero de Software Full-Stack y Desarrollador Freelance',
            defaultDescription:
                'Nicolás Montiel es un ingeniero de software full-stack que ayuda a equipos a construir productos web, ecommerce, integraciones y flujos de ingeniería asistidos por IA.',
        },
        homePage: {
            title: 'Ingeniero de Software Full-Stack para Productos Web, Ecommerce e IA',
            description:
                'Trabajá con Nicolás Montiel, un ingeniero de software senior que construye productos web, soluciones ecommerce, integraciones y flujos de ingeniería asistidos por IA.',
        },
        home: {
            greeting: 'Hola, soy Nico 👋🏻',
            certificationsTitle: 'Certificaciones y cursos',
            viewCredential: 'Ver credencial',
        },
        common: {
            email: 'Email',
            whatsapp: 'WhatsApp',
            linkedin: 'LinkedIn',
        },
        landing: {
            alternative: 'Alternativa',
            viewMore: 'Ver más',
            avatarAlt: 'Avatar de Nicolás Montiel',
        },
        footer: {
            contactTitle: 'Contacto',
            linksTitle: 'Enlaces útiles',
            about: 'Por que trabajar conmigo',
            ecommerce: 'Ecommerce',
            web: 'Web',
            logoAlt: 'Logo de Nicolás Montiel',
        },
    },
};

export function getMessages(locale: Locale): Messages {
    return messagesByLocale[locale];
}
