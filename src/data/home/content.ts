import type { Locale } from '@/i18n/locales';
import type { HomePageContent } from '@/types/home';

const homeContentEn: HomePageContent = {
    hero: {
        profile: {
            name: 'Nicolás Montiel',
            location: 'Based in Argentina / Paraguay',
            handle: '@nicolasmontielf',
        },
        greeting: {
            prefix: "Hello, I'm",
            accent: 'Nicolás Montiel',
        },
        roles: [
            'Principal Software Engineer',
            'Freelancer',
            'Consultant',
        ],
        metrics: [
            {
                value: '8+',
                label: 'Years of experience as a software engineer',
            },
            {
                value: '5+',
                label: 'Years working fully remote for companies across LATAM, US, and Europe',
            },
        ],
        ctas: [
            {
                label: 'Technical experience',
                description:
                    'Recruiter-facing profile with technical background, experience, and stack.',
                href: '/en/why-hire-me',
            },
            {
                label: 'Freelancer services',
                description:
                    'Product builds, technical execution, and direct collaboration for client work.',
                href: '/en/freelancer',
            },
        ],
    },
};

const homeContentEs: HomePageContent = {
    hero: {
        profile: {
            name: 'Nicolás Montiel',
            location: 'Basado en Argentina / Paraguay',
            handle: '@nicolasmontielf',
        },
        greeting: {
            prefix: 'Hola, soy',
            accent: 'Nicolás Montiel',
        },
        roles: [
            'Principal Software Engineer',
            'Freelancer',
            'Consultor',
        ],
        metrics: [
            {
                value: '8+',
                label: 'Años de experiencia como software engineer',
            },
            {
                value: '5+',
                label: 'Años trabajando full remoto para empresas de LATAM, US y Europa',
            },
        ],
        ctas: [
            {
                label: 'Experiencia técnica',
                description:
                    'Perfil orientado a recruiters con experiencia, stack y recorrido técnico.',
                href: '/es/porque-contratarme',
            },
            {
                label: 'Servicios freelance',
                description:
                    'Desarrollo de producto, ejecución técnica y colaboración directa para clientes.',
                href: '/es/freelancer',
            },
        ],
    },
};

const homeContentByLocale: Record<Locale, HomePageContent> = {
    en: homeContentEn,
    es: homeContentEs,
};

export function getHomeContent(locale: Locale): HomePageContent {
    return homeContentByLocale[locale];
}
