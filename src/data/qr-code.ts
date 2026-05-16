import type { Locale } from '@/i18n/locales';
import { getCommercialServicePath } from '@/i18n/routing';
import type { QrContentByLocale } from '@/types/qr';

const whatsappLinksByLocale: Record<Locale, string> = {
    es: 'https://wa.me/595973779205?text=Hola%20Nico!%2C%20vengo%20desde%20tu%20tarjeta%20personal%20y%20quiero%20hacerte%20una%20consulta.',
    en: 'https://wa.me/595973779205?text=Hi%20Nico!%20I%20came%20from%20your%20personal%20card%20and%20would%20like%20to%20ask%20you%20something.',
};

const qrCodeContentByLocale: QrContentByLocale = {
    es: {
        metaTitle: 'Links rápidos',
        metaDescription:
            'Links rápidos de Nicolás Montiel para conocer su perfil técnico, perfil de socio, servicios web y ecommerce.',
        badge: 'Nicolas Montiel',
        title: 'Hablemos de tu negocio y de lo que querés construir.',
        description:
            'Elegí el acceso que te sirva y en minutos podés ver cómo trabajo o escribirme directo por WhatsApp.',
        profileLabel: 'Technical partner',
        whatsappLabel: 'Contactar por WhatsApp',
        links: [
            {
                label: 'Inicio',
                description:
                    'Mi perfil técnico y experiencia construyendo software.',
                href: '/es',
                icon: 'home',
            },
            {
                label: 'Sobre mí',
                description: 'Mi enfoque como socio tecnológico para tu negocio.',
                href: '/es/sobre-mi',
                icon: 'user',
            },
            {
                label: 'Quiero una web',
                description: 'Webs y landings profesionales con foco comercial.',
                href: getCommercialServicePath('web', 'es'),
                icon: 'globe',
            },
            {
                label: 'Quiero un ecommerce',
                description:
                    'Tiendas online para vender con más orden y control operativo.',
                href: getCommercialServicePath('ecommerce', 'es'),
                icon: 'shopping-cart',
            },
        ],
    },
    en: {
        metaTitle: 'Quick links',
        metaDescription:
            'Quick links from Nicolás Montiel to see his technical profile, partner profile, web services, and ecommerce services.',
        badge: 'Nicolas Montiel',
        title: 'Let’s talk about your business and what you want to build.',
        description:
            'Choose the most relevant entry point and in minutes you can understand how I work or message me directly on WhatsApp.',
        profileLabel: 'Technical partner',
        whatsappLabel: 'Contact on WhatsApp',
        links: [
            {
                label: 'Home',
                description:
                    'My technical profile and software engineering experience.',
                href: '/en',
                icon: 'home',
            },
            {
                label: 'About me',
                description: 'How I work as a technical partner for businesses.',
                href: '/en/about-me',
                icon: 'user',
            },
            {
                label: 'I need a website',
                description:
                    'Professional websites and landing pages with business focus.',
                href: getCommercialServicePath('web', 'en'),
                icon: 'globe',
            },
            {
                label: 'I need ecommerce',
                description:
                    'Online stores built to improve sales and operational control.',
                href: getCommercialServicePath('ecommerce', 'en'),
                icon: 'shopping-cart',
            },
        ],
    },
};

export function getQrCodeContent(locale: Locale) {
    return qrCodeContentByLocale[locale];
}

export function getQrCodeWhatsappLink(locale: Locale) {
    return whatsappLinksByLocale[locale];
}
