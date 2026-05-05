import type { Locale } from '@/i18n/locales';

export type QrLinkItem = {
    label: string;
    description: string;
    href: string;
};

export type QrLocaleContent = {
    metaTitle: string;
    metaDescription: string;
    badge: string;
    title: string;
    description: string;
    languageLabel: string;
    whatsappLabel: string;
    whatsappNote: string;
    links: QrLinkItem[];
};

export type QrContentByLocale = Record<Locale, QrLocaleContent>;
