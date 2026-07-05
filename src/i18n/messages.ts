import type { Locale } from '@/i18n/locales';
import type { Messages } from '@/types/i18n';

const messagesByLocale: Record<Locale, Messages> = {
    en: {
        layout: {
            defaultTitle:
                'Full-Stack Software Engineer and Freelance Developer',
            defaultDescription:
                'Nicolás Montiel is a full-stack software engineer helping teams build reliable web products, integrations, and AI-assisted engineering workflows.',
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
        homeHero: {
            subtitleFirstParagraph:
                'I’m a full-stack developer focused on building practical, reliable software for businesses and technical teams.',
            subtitleSecondParagraph:
                'If you are hiring for a software role and want a concise, technical overview, the recruiter profile gives you the clearest picture of how I work.',
            recruiterCtaLabel: 'For recruiters',
            recruiterCtaDescription:
                'Technical background, experience, stack, projects.',
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
    },
    es: {
        layout: {
            defaultTitle:
                'Ingeniero de Software Full-Stack y Desarrollador Freelance',
            defaultDescription:
                'Nicolás Montiel es un ingeniero de software full-stack que ayuda a equipos a construir productos web confiables, integraciones y flujos de ingeniería asistidos por IA.',
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
        homeHero: {
            subtitleFirstParagraph:
                'Soy un desarrollador full-stack enfocado en construir software práctico y confiable para empresas y equipos técnicos.',
            subtitleSecondParagraph:
                'Si estás evaluándome para un rol de software y querés una vista técnica, breve y directa, el perfil para recruiters es el mejor punto de entrada.',
            recruiterCtaLabel: 'Para recruiters',
            recruiterCtaDescription:
                'Perfil técnico, experiencia, stack y proyectos.',
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
    },
};

export function getMessages(locale: Locale): Messages {
    return messagesByLocale[locale];
}
