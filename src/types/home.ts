export type PresentationProps = {
    variant: 'pro' | 'freelancer';
    greeting: string;
};

export type CertificationsProps = {
    title?: string;
    credentialLabel?: string;
};

export type Certification = {
    id: string;
    title: string;
    icon: string;
    href: string;
};

export type PresentationBodyVariant = 'pro' | 'freelancer';

export type PresentationBodyByVariant = Record<
    PresentationBodyVariant,
    string[]
>;

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

export type LocalizedCertification = Certification & {
    description: string;
};

export type HomeCertificationsContent = {
    title: string;
    description: string;
    viewCredentialLabel: string;
    viewMoreLabel: string;
    viewLessLabel: string;
    previewLength: number;
    items: LocalizedCertification[];
};

export type HomeContent = {
    navbar: HomeNavbarContent;
    presentation: {
        greeting: string;
        bodyByVariant: PresentationBodyByVariant;
    };
    experience: HomeExperienceContent;
    certifications: HomeCertificationsContent;
};
