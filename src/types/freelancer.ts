export type FreelancerNavbarContent = {
    items: string[];
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

export type FreelancerCaseStudyItem = {
    category: string;
    title: string;
    description: string;
    tags: string[];
    ctaLabel: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
};

export type FreelancerCaseStudiesContent = FreelancerSectionHeaderContent & {
    items: FreelancerCaseStudyItem[];
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
