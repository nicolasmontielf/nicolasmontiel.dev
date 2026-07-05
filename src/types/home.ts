export type CertificationsProps = {
    title?: string;
    credentialLabel?: string;
};

export type Certification = {
    id: string;
    title: string;
    icon: string;
    href: string;
    description: string;
};

export type HomeNavbarItem = {
    id: 'posts' | 'experience' | 'certifications';
    label: string;
};

export type HomeNavbarContent = {
    postsHref: string;
    languageLabel: string;
    items: HomeNavbarItem[];
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

export type HomeExperienceContent = {
    title: string;
    description: string;
    items: WorkExperienceItem[];
};

export type HomeCertificationsContent = {
    title: string;
    description: string;
    viewCredentialLabel: string;
    viewMoreLabel: string;
    viewLessLabel: string;
    previewLength: number;
    items: Certification[];
};

export type HomeContent = {
    navbar: HomeNavbarContent;
    presentation: {
        greeting: string;
        body: string[];
    };
    experience: HomeExperienceContent;
    certifications: HomeCertificationsContent;
};
