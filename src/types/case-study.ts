import type { Locale } from '@/i18n/locales';

export type CaseStudySectionKey =
    | 'hero'
    | 'context'
    | 'approach'
    | 'outcome';

export type CaseStudyBodySectionKey = Exclude<CaseStudySectionKey, 'hero'>;

export type CaseStudyMedia = {
    type: 'image' | 'video';
    src: string;
    alt?: string;
    caption?: string;
};

export type CaseStudySubsection = {
    title?: string;
    subtitle?: string;
    paragraphs: string[];
    media?: CaseStudyMedia[];
};

export type CaseStudySectionContent = {
    title: string;
    subtitle?: string;
    paragraphs: string[];
    media?: CaseStudyMedia[];
    subsections?: CaseStudySubsection[];
};

export type CaseStudyPreviewContent = {
    title: string;
    previewText: string;
    category: string;
    imageSrc: string;
    imageAlt: string;
};

export type CaseStudySource = {
    slug: string;
    metadata: {
        order: number;
        technologies: string[];
        preview: Record<Locale, CaseStudyPreviewContent>;
    };
    sections: Record<CaseStudySectionKey, Record<Locale, CaseStudySectionContent>>;
};

export type CaseStudyPreviewCard = CaseStudyPreviewContent & {
    slug: string;
    technologies: string[];
};

export type GeneratedFreelancerCaseStudyPreviews = Record<
    Locale,
    CaseStudyPreviewCard[]
>;

export type CaseStudyPageSection = CaseStudySectionContent & {
    key: CaseStudyBodySectionKey;
};

export type CaseStudyPageContent = {
    slug: string;
    technologies: string[];
    preview: CaseStudyPreviewContent;
    hero: CaseStudySectionContent;
    sections: CaseStudyPageSection[];
};
