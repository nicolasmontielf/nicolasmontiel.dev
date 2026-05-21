import type { Locale } from '@/i18n/locales';

export type CommercialProfileSectionId =
    | 'profile'
    | 'why-work'
    | 'process'
    | 'contexts'
    | 'contact';

export type CommercialProfileNavItem = {
    id: CommercialProfileSectionId;
    label: string;
};

export type CommercialProfileStat = {
    value: string;
    label: string;
    description: string;
};

export type CommercialProfileReason = {
    title: string;
    description: string;
};

export type CommercialProfileStep = {
    label: string;
    title: string;
    description: string;
};

export type CommercialProfileContext = {
    title: string;
    description: string;
};

export type CommercialProfileContent = {
    locale: Locale;
    meta: {
        title: string;
        description: string;
    };
    navbar: {
        label: string;
        items: CommercialProfileNavItem[];
        primaryCtaLabel: string;
        primaryCtaHref: string;
        secondaryCtaLabel: string;
        secondaryCtaHref: string;
    };
    profile: {
        title: string;
        paragraphs: string[];
        avatarAlt: string;
        stats: CommercialProfileStat[];
    };
    reasons: {
        eyebrow: string;
        title: string;
        description: string;
        items: CommercialProfileReason[];
    };
    process: {
        eyebrow: string;
        title: string;
        description: string;
        steps: CommercialProfileStep[];
    };
    contexts: {
        eyebrow: string;
        title: string;
        description: string;
        items: CommercialProfileContext[];
    };
    contact: {
        eyebrow: string;
        title: string;
        primaryLabel: string;
        primaryHref: string;
        secondaryLabel: string;
        secondaryHref: string;
    };
};
