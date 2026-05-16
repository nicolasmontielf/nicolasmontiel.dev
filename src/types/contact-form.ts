import type { Locale } from '@/i18n/locales';

export type ContactSource = 'ecommerce' | 'web';

export type ContactSectionContent = {
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
    projectTypeLabel?: string;
    projectTypeOptions?: Array<{ value: string; label: string }>;
    messageLabel?: string;
    messagePlaceholder?: string;
    helperText: string;
    submitLabel: string;
    submittingLabel: string;
    whatsappCtaLabel: string;
    whatsappNote: string;
    nameRequiredMessage: string;
    contactRequiredMessage: string;
    notConfiguredMessage: string;
    errorMessage: string;
    successMessage?: string;
};

export type ContactFormProps = {
    contact: ContactSectionContent;
    locale: Locale;
    source: ContactSource;
    isTurnstileEnabled: boolean;
    turnstileSiteKey?: string;
};

export type SharedContactSectionProps = {
    contact: ContactSectionContent;
    whatsappLink: string;
    containerClass: string;
    source: ContactSource;
    sectionClass?: string;
};
