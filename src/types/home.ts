export type PresentationProps = {
    variant: 'pro' | 'freelancer';
    greeting: string;
};

export type CertificationsProps = {
    title: string;
    credentialLabel: string;
};

export type Certification = {
    id: string;
    title: string;
    icon: string;
    href: string;
};
