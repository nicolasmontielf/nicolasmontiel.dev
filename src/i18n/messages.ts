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
            title: 'Full-Stack Developer for Teams, Recruiters, and Clients',
            description:
                'Nicolás Montiel is a full-stack developer building practical, reliable software for businesses and technical teams.',
        },
        recruiterPage: {
            title:
                'Technical Profile of Nicolás Montiel, Full-Stack Software Engineer',
            description:
                'Explore Nicolás Montiel’s technical background, experience, stack, and projects as a full-stack software engineer.',
        },
        freelancerPage: {
            title: 'Freelance Services by Nicolás Montiel',
            description:
                'A new freelance-focused page is coming soon for clients who want to build products, automations, dashboards, and integrations.',
            eyebrow: 'Coming soon',
            titleLabel: 'Freelance page in progress',
            descriptionLabel:
                'This space will soon focus on services, examples, process, and how we can work together.',
        },
        homeHero: {
            subtitleFirstParagraph:
                'I’m a full-stack developer focused on building practical, reliable software for businesses and technical teams.',
            subtitleSecondParagraph:
                'Whether you’re hiring for a software role or looking for someone to build a product, automation, dashboard or integration, choose the path that fits you best.',
            recruiterCtaLabel: 'For recruiters',
            recruiterCtaDescription:
                'Technical background, experience, stack, projects.',
            clientCtaLabel: 'For clients',
            clientCtaDescription:
                'Services, project examples, process and how we can work together.',
            languageLabel: 'Language',
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
            title: 'Desarrollador Full-Stack para Equipos, Recruiters y Clientes',
            description:
                'Nicolás Montiel es un desarrollador full-stack que construye software práctico y confiable para empresas y equipos técnicos.',
        },
        recruiterPage: {
            title:
                'Perfil técnico de Nicolás Montiel, Ingeniero de Software Full-Stack',
            description:
                'Explorá el perfil técnico de Nicolás Montiel: experiencia, stack, proyectos y recorrido como ingeniero de software full-stack.',
        },
        freelancerPage: {
            title: 'Servicios freelance de Nicolás Montiel',
            description:
                'Próximamente habrá una página enfocada en clientes que quieran construir productos, automatizaciones, dashboards e integraciones.',
            eyebrow: 'Próximamente',
            titleLabel: 'Página freelance en preparación',
            descriptionLabel:
                'Este espacio pronto va a enfocarse en servicios, ejemplos, proceso y cómo podemos trabajar juntos.',
        },
        homeHero: {
            subtitleFirstParagraph:
                'Soy un desarrollador full-stack enfocado en construir software práctico y confiable para empresas y equipos técnicos.',
            subtitleSecondParagraph:
                'Ya sea que estés contratando para un rol de software o buscando a alguien para construir un producto, automatización, dashboard o integración, elegí el camino que mejor encaje con vos.',
            recruiterCtaLabel: 'Para recruiters',
            recruiterCtaDescription:
                'Perfil técnico, experiencia, stack y proyectos.',
            clientCtaLabel: 'Para clientes',
            clientCtaDescription:
                'Servicios, ejemplos de proyectos, proceso y cómo podemos trabajar juntos.',
            languageLabel: 'Idioma',
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
