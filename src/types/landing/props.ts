import type {
    EcommerceLandingContent,
    WebLandingContent,
} from '@/types/landing/content';

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

export type EcommerceLandingProps = {
    content: EcommerceLandingContent;
};

export type WebLandingProps = {
    content: WebLandingContent;
};
