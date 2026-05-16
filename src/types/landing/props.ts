import type {
    EcommerceLandingContent,
    WebLandingContent,
} from '@/types/landing/content';
import type { Locale } from '@/i18n/locales';
import type { ServiceIconName } from '@/types/ecommerce/icon';

export type LandingNavItem = {
    id: string;
    label: string;
};

export type LandingNav = {
    label: string;
    items: LandingNavItem[];
};

export type LandingNavbarProps = {
    nav: LandingNav;
    whatsappLink: string;
    ctaLabel: string;
    containerClass: string;
};

export type SharedProfileContent = {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
    buttonLabel: string;
};

export type SharedProfileSectionProps = {
    profile: SharedProfileContent;
    aboutLink: string;
    containerClass: string;
    sectionId?: string;
    sectionClass?: string;
};

export type CommercialLandingProps = {
    content: WebLandingContent | EcommerceLandingContent;
    source: 'web' | 'ecommerce';
    heroVideo: string;
    heroPoster: string;
    heroImageAlt: string;
};

export type EcommerceLandingProps = {
    content: EcommerceLandingContent;
};

export type WebLandingProps = {
    content: WebLandingContent;
};

// Legacy props kept for compatibility with old section components.
export type EcommerceHeroSectionProps = {
    hero: {
        badge: string;
        title: string;
        description: string;
        trustNote: string;
        primaryCtaLabel: string;
        secondaryCtaLabel: string;
    };
    links: { whatsapp: string; about: string };
};

export type EcommerceWorkSectionProps = {
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
};

export type EcommerceProfileSectionProps = {
    profile: SharedProfileContent;
    aboutLink: string;
};

export type EcommerceProcessSectionProps = {
    process: {
        eyebrow: string;
        title: string;
        description: string;
        steps: Array<{ title: string; description: string }>;
    };
};

export type EcommerceContactSectionProps = {
    contact: EcommerceLandingContent['contact'];
    whatsappLink: string;
};

export type EcommerceServiceIconProps = {
    name: ServiceIconName;
    inverted?: boolean;
};

export type WebHeroSectionProps = {
    hero: {
        badge: string;
        title: string;
        description: string;
        primaryCtaLabel: string;
        secondaryCtaLabel: string;
        note: string;
    };
    links: { whatsapp: string; about: string };
};

export type WebProjectTypesSectionProps = {
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
};

export type WebBuildSectionProps = {
    build: {
        eyebrow: string;
        title: string;
        description: string;
        capabilities: Array<{ title: string; description: string }>;
    };
};

export type WebProfileSectionProps = {
    profile: SharedProfileContent;
    aboutLink: string;
};

export type WebCriteriaSectionProps = {
    criteria: {
        eyebrow: string;
        title: string;
        description: string;
        items: Array<{ title: string; description: string }>;
    };
};

export type WebContactSectionProps = {
    contact: WebLandingContent['contact'];
    whatsappLink: string;
};

export type WebScopeSectionContent = {
    eyebrow: string;
    title: string;
    description: string;
    leftTitle: string;
    leftItems: string[];
    rightTitle: string;
    rightItems: string[];
};

export type WebScopeSectionProps = {
    scope: WebScopeSectionContent;
};

export type HeroImageAltByLocale = Record<Locale, string>;
