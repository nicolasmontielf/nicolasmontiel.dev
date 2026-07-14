import type { CaseStudyPreviewCard } from './case-study';

export type FreelancerSectionId =
    | 'about'
    | 'services'
    | 'process'
    | 'case-studies'
    | 'testimonials'
    | 'contact';

export type FreelancerNavbarItem = {
    label: string;
    sectionId: FreelancerSectionId;
};

export type FreelancerNavbarContent = {
    items: FreelancerNavbarItem[];
    ctaLabel: string;
};

export type FreelancerSectionHeaderContent = {
    badgeLabel: string;
    title: string;
    description: string;
};

export type FreelancerAboutMetric = {
    value: string;
    label: string;
};

export type FreelancerAboutContent = {
    title: string;
    paragraphs: string[];
    metrics: FreelancerAboutMetric[];
};

export type FreelancerServiceIcon = 'globe' | 'sparkles' | 'palette' | 'rocket';

export type FreelancerServiceItem = {
    icon: FreelancerServiceIcon;
    title: string;
    description: string;
};

export type FreelancerServicesContent = FreelancerSectionHeaderContent & {
    items: FreelancerServiceItem[];
};

export type FreelancerProcessStep = {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
};

export type FreelancerProcessContent = FreelancerSectionHeaderContent & {
    steps: FreelancerProcessStep[];
};

export type FreelancerCaseStudyPreview = CaseStudyPreviewCard;

export type FreelancerCaseStudiesContent = FreelancerSectionHeaderContent & {
    ctaLabel: string;
    items: FreelancerCaseStudyPreview[];
};

export type FreelancerTestimonialItem = {
    quote: string;
    author: string;
    role: string;
    initial: string;
};

export type FreelancerTestimonialsContent = FreelancerSectionHeaderContent & {
    items: FreelancerTestimonialItem[];
};

export type FreelancerFaqItem = {
    question: string;
};

export type FreelancerFaqContent = FreelancerSectionHeaderContent & {
    items: FreelancerFaqItem[];
};

export type FreelancerContactContent = {
    title: string;
    description: string;
    placeholder: string;
    email: string;
};

export type FreelancerPageContent = {
    navbar: FreelancerNavbarContent;
    about: FreelancerAboutContent;
    services: FreelancerServicesContent;
    process: FreelancerProcessContent;
    caseStudies: FreelancerCaseStudiesContent;
    testimonials: FreelancerTestimonialsContent;
    faq: FreelancerFaqContent;
    contact: FreelancerContactContent;
};
