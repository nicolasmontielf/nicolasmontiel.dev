import type { Locale } from '@/i18n/locales';
import type {
    CaseStudyBodySectionKey,
    CaseStudyPageContent,
    GeneratedFreelancerCaseStudyPreviews,
    CaseStudySource,
} from '@/types/case-study';
import type { FreelancerCaseStudyPreview } from '@/types/freelancer';
import freelancerPreviewItems from '@/data/freelancer/case-studies.generated.json';

const caseStudyModules = import.meta.glob('./*.json', {
    eager: true,
    import: 'default',
}) as Record<string, CaseStudySource>;

const caseStudySources = Object.values(caseStudyModules);
const caseStudyBodySectionOrder: CaseStudyBodySectionKey[] = [
    'context',
    'approach',
    'outcome',
];
const caseStudyPreviewItems =
    freelancerPreviewItems as GeneratedFreelancerCaseStudyPreviews;

export function getAllCaseStudySources(): CaseStudySource[] {
    return [...caseStudySources].sort(
        (left, right) =>
            left.metadata.order - right.metadata.order ||
            left.slug.localeCompare(right.slug),
    );
}

export function getCaseStudyPageContent(
    slug: string,
    locale: Locale,
): CaseStudyPageContent | undefined {
    const source = caseStudySources.find((item) => item.slug === slug);

    if (!source) {
        return undefined;
    }

    return {
        slug: source.slug,
        technologies: source.metadata.technologies,
        preview: source.metadata.preview[locale],
        hero: source.sections.hero[locale],
        sections: caseStudyBodySectionOrder.map((key) => ({
            key,
            ...source.sections[key][locale],
        })),
    };
}

export function getFreelancerCaseStudyPreviews(
    locale: Locale,
): FreelancerCaseStudyPreview[] {
    return caseStudyPreviewItems[locale];
}
