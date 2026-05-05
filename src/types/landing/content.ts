import type { ServiceIconName } from '@/types/ecommerce/icon';

export type WebSectionId =
    | 'hero'
    | 'projects'
    | 'build'
    | 'profile'
    | 'criteria'
    | 'contact';

export type WebLandingContent = {
    meta: {
        title: string;
        description: string;
    };
    nav: {
        label: string;
        items: Array<{ id: Exclude<WebSectionId, 'hero'>; label: string }>;
    };
    hero: {
        badge: string;
        title: string;
        description: string;
        primaryCtaLabel: string;
        secondaryCtaLabel: string;
        note: string;
    };
    projects: {
        eyebrow: string;
        title: string;
        description: string;
        items: Array<{
            title: string;
            description: string;
            accent: string;
            href?: string;
            linkLabel?: string;
        }>;
    };
    build: {
        eyebrow: string;
        title: string;
        description: string;
        capabilities: Array<{ title: string; description: string }>;
    };
    profile: {
        eyebrow: string;
        title: string;
        description: string;
        items: Array<{ title: string; description: string }>;
        buttonLabel: string;
    };
    criteria: {
        eyebrow: string;
        title: string;
        description: string;
        items: Array<{ title: string; description: string }>;
    };
    contact: {
        eyebrow: string;
        title: string;
        description: string;
        formTitle: string;
        formDescription: string;
        nameLabel: string;
        namePlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        whatsappLabel: string;
        whatsappPlaceholder: string;
        projectTypeLabel: string;
        projectTypeOptions: Array<{ value: string; label: string }>;
        messageLabel: string;
        messagePlaceholder: string;
        helperText: string;
        submitLabel: string;
        submittingLabel: string;
        whatsappCtaLabel: string;
        whatsappNote: string;
        nameRequiredMessage: string;
        contactRequiredMessage: string;
        notConfiguredMessage: string;
        errorMessage: string;
        successMessage: string;
    };
    links: {
        whatsapp: string;
        about: string;
    };
};

export type EcommerceSectionId =
    | 'hero'
    | 'work'
    | 'profile'
    | 'process'
    | 'contact';

export type EcommerceLandingContent = {
    meta: {
        title: string;
        description: string;
    };
    nav: {
        label: string;
        items: Array<{
            id: Exclude<EcommerceSectionId, 'hero'>;
            label: string;
        }>;
    };
    hero: {
        badge: string;
        title: string;
        description: string;
        trustNote: string;
        primaryCtaLabel: string;
        secondaryCtaLabel: string;
        floatingCardLabel: string;
        floatingCardValue: string;
    };
    work: {
        eyebrow: string;
        title: string;
        subtitle: string;
        noteTitle: string;
        noteDescription: string;
        cards: Array<{
            title: string;
            description: string;
            icon: ServiceIconName;
        }>;
    };
    profile: {
        eyebrow: string;
        title: string;
        description: string;
        items: Array<{ title: string; description: string }>;
        buttonLabel: string;
    };
    process: {
        eyebrow: string;
        title: string;
        description: string;
        steps: Array<{ title: string; description: string }>;
    };
    contact: {
        eyebrow: string;
        title: string;
        description: string;
        formTitle: string;
        formDescription: string;
        nameLabel: string;
        namePlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        whatsappLabel: string;
        whatsappPlaceholder: string;
        helperText: string;
        submitLabel: string;
        submittingLabel: string;
        whatsappCtaLabel: string;
        whatsappNote: string;
        nameRequiredMessage: string;
        contactRequiredMessage: string;
        notConfiguredMessage: string;
        errorMessage: string;
    };
    links: {
        whatsapp: string;
        about: string;
    };
};
