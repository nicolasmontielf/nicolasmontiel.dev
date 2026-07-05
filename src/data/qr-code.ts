import type { Locale } from '@/i18n/locales';
import { getRecruiterProfilePath } from '@/i18n/routing';
import type { QrContentByLocale } from '@/types/qr';

const whatsappLinksByLocale: Record<Locale, string> = {
    es: 'https://wa.me/595973779205?text=Hola%20Nico!%2C%20vengo%20desde%20tu%20tarjeta%20personal%20y%20quiero%20hacerte%20una%20consulta.',
    en: 'https://wa.me/595973779205?text=Hi%20Nico!%20I%20came%20from%20your%20personal%20card%20and%20would%20like%20to%20ask%20you%20something.',
};

const qrCodeContentByLocale: QrContentByLocale = {
    es: {
        metaTitle: 'Links rápidos',
        metaDescription:
            'Links rápidos de Nicolás Montiel para conocer su landing principal y su perfil técnico para recruiters.',
        badge: 'Nicolas Montiel',
        title: 'Accesos rápidos a mi sitio y perfil técnico.',
        description:
            'Elegí el punto de entrada más útil para vos y, si querés, escribime directo por WhatsApp.',
        profileLabel: 'Software engineer',
        whatsappLabel: 'Contactar por WhatsApp',
        links: [
            {
                label: 'Inicio',
                description: 'La landing principal del sitio.',
                href: '/es',
                icon: 'home',
            },
            {
                label: 'Perfil para recruiters',
                description:
                    'Mi experiencia, stack y recorrido técnico en formato más directo.',
                href: getRecruiterProfilePath('es'),
                icon: 'user',
            },
        ],
    },
    en: {
        metaTitle: 'Quick links',
        metaDescription:
            'Quick links from Nicolás Montiel to see the main landing page and the recruiter-focused technical profile.',
        badge: 'Nicolas Montiel',
        title: 'Quick access to my site and technical profile.',
        description:
            'Choose the most relevant entry point and, if you want, message me directly on WhatsApp.',
        profileLabel: 'Software engineer',
        whatsappLabel: 'Contact on WhatsApp',
        links: [
            {
                label: 'Home',
                description: 'The main landing page of the site.',
                href: '/en',
                icon: 'home',
            },
            {
                label: 'Recruiter profile',
                description:
                    'My background, stack, and technical experience in a more direct format.',
                href: getRecruiterProfilePath('en'),
                icon: 'user',
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
