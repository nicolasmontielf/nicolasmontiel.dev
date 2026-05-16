export type CommercialSectionId =
    | 'hero'
    | 'challenges'
    | 'solutions'
    | 'process'
    | 'profile'
    | 'contact';

export type WebLandingIconName =
    | 'globe'
    | 'folder-open'
    | 'search'
    | 'message-circle'
    | 'shield'
    | 'building-2'
    | 'megaphone'
    | 'book-open'
    | 'sliders-horizontal'
    | 'calendar-clock'
    | 'chart-column'
    | 'handshake'
    | 'clipboard-list'
    | 'palette'
    | 'code'
    | 'check'
    | 'rocket';

export type EcommerceLandingIconName =
    | 'message-circle'
    | 'search'
    | 'package'
    | 'smartphone'
    | 'credit-card'
    | 'layout-grid'
    | 'shopping-bag'
    | 'shopping-cart'
    | 'wallet'
    | 'boxes'
    | 'truck';

export type CommercialLandingContent = {
    meta: {
        title: string;
        description: string;
    };
    nav: {
        label: string;
        items: Array<{
            id: Exclude<CommercialSectionId, 'hero'>;
            label: string;
        }>;
    };
    hero: {
        badge: string;
        title: string;
        description: string;
        primaryCtaLabel: string;
        secondaryCtaLabel: string;
        note?: string;
    };
    challenges: {
        eyebrow: string;
        title: string;
        description: string;
        items: Array<{ title: string; description: string }>;
    };
    solutions: {
        eyebrow: string;
        title: string;
        description: string;
        items: Array<{ title: string; description: string }>;
    };
    process: {
        eyebrow: string;
        title: string;
        description: string;
        steps: Array<{ title: string; description: string }>;
    };
    profile: {
        eyebrow: string;
        title: string;
        description: string;
        items: Array<{ title: string; description: string }>;
        buttonLabel: string;
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
};

export type WebLandingContent = Omit<
    CommercialLandingContent,
    'challenges' | 'solutions' | 'process'
> & {
    challenges: {
        eyebrow: string;
        title: string;
        description: string;
        items: Array<{
            title: string;
            description: string;
            icon: WebLandingIconName;
        }>;
    };
    solutions: {
        eyebrow: string;
        title: string;
        description: string;
        columns: {
            solution: string;
            objective: string;
            outcome: string;
        };
        rows: Array<{
            solution: string;
            objective: string;
            outcome: string;
            icon: WebLandingIconName;
            href?: string;
            hrefLabel?: string;
        }>;
    };
    process: {
        eyebrow: string;
        title: string;
        description: string;
        steps: Array<{
            title: string;
            description: string;
            icon: WebLandingIconName;
        }>;
    };
};
export type EcommerceLandingContent = Omit<
    CommercialLandingContent,
    'challenges' | 'solutions'
> & {
    challenges: {
        eyebrow: string;
        title: string;
        description: string;
        items: Array<{
            title: string;
            description: string;
            icon: EcommerceLandingIconName;
        }>;
    };
    solutions: {
        eyebrow: string;
        title: string;
        description: string;
        groups: Array<{
            title: string;
            subtitle: string;
            items: string[];
        }>;
        items?: Array<{
            title: string;
            description: string;
        }>;
        bridgeToWeb?: {
            title: string;
            description: string;
            href: string;
            ctaLabel: string;
        };
    };
};
