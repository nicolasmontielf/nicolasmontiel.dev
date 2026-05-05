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
};

export type EcommerceLandingProps = {
    content: EcommerceLandingContent;
};

export type EcommerceHeroSectionProps = {
    hero: EcommerceLandingContent['hero'];
    links: EcommerceLandingContent['links'];
};

export type EcommerceWorkSectionProps = {
    work: EcommerceLandingContent['work'];
};

export type EcommerceProfileSectionProps = {
    profile: EcommerceLandingContent['profile'];
    aboutLink: string;
};

export type EcommerceProcessSectionProps = {
    process: EcommerceLandingContent['process'];
};

export type EcommerceContactSectionProps = {
    contact: EcommerceLandingContent['contact'];
    whatsappLink: string;
};

export type EcommerceServiceIconProps = {
    name: ServiceIconName;
    inverted?: boolean;
};

export type WebLandingProps = {
    content: WebLandingContent;
};

export type WebHeroSectionProps = {
    hero: WebLandingContent['hero'];
    links: WebLandingContent['links'];
};

export type WebProjectTypesSectionProps = {
    projects: WebLandingContent['projects'];
};

export type WebBuildSectionProps = {
    build: WebLandingContent['build'];
};

export type WebProfileSectionProps = {
    profile: WebLandingContent['profile'];
    aboutLink: string;
};

export type WebCriteriaSectionProps = {
    criteria: WebLandingContent['criteria'];
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
