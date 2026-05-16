import type { Locale } from '@/i18n/locales';

export type QrLinkItem = {
    label: string;
    description: string;
    href: string;
    icon: 'home' | 'user' | 'globe' | 'shopping-cart';
};

export type QrPageContent = {
    metaTitle: string;
    metaDescription: string;
    badge: string;
    title: string;
    description: string;
    profileLabel: string;
    whatsappLabel: string;
    links: QrLinkItem[];
};

export type QrContentByLocale = Record<Locale, QrPageContent>;
