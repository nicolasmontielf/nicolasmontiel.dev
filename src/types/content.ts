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
