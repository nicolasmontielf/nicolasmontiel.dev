export type PageSeo = {
    title: string;
    description: string;
};

export type SiteCopy = {
    layout: {
        defaultTitle: string;
        defaultDescription: string;
    };
    common: {
        email: string;
        whatsapp: string;
        linkedin: string;
        languageLabel: string;
    };
};

export type HomePageContent = {
    hero: {
        profile: {
            name: string;
            location: string;
            handle: string;
        };
        greeting: {
            prefix?: string;
            accent?: string;
            suffix?: string;
        };
        roles: string[];
        metrics: Array<{
            value: string;
            label: string;
        }>;
        ctas: Array<{
            label: string;
            description: string;
            href: string;
        }>;
    };
};

export type Certification = {
    id: string;
    title: string;
    icon: string;
    href: string;
    description: string;
};

export type WhyHireMeNavbarItem = {
    id: 'posts' | 'experience' | 'certifications';
    label: string;
};

export type WhyHireMeNavbarContent = {
    postsHref: string;
    items: WhyHireMeNavbarItem[];
};

export type WorkExperienceItem = {
    id: string;
    company: string;
    role: string;
    period: string;
    summary: string;
    responsibilities: string[];
    stack: string;
};

export type WhyHireMeExperienceContent = {
    title: string;
    description: string;
    items: WorkExperienceItem[];
};

export type WhyHireMeCertificationsContent = {
    title: string;
    description: string;
    viewCredentialLabel: string;
    viewMoreLabel: string;
    viewLessLabel: string;
    previewLength: number;
    items: Certification[];
};

export type WhyHireMeContent = {
    navbar: WhyHireMeNavbarContent;
    presentation: {
        greeting: string;
        body: string[];
    };
    experience: WhyHireMeExperienceContent;
    certifications: WhyHireMeCertificationsContent;
};

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
