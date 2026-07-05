import type { Locale } from '@/i18n/locales';
import type { HomePageContent } from '@/types/content';

const homeContentEn: HomePageContent = {
    hero: {
        roleLabel: 'Principal Software Engineer',
        subtitleFirstParagraph:
            'I’m a full-stack developer focused on building practical, reliable software for businesses and technical teams.',
        subtitleSecondParagraph:
            'If you are hiring for a software role and want a concise, technical overview, the recruiter profile gives you the clearest picture of how I work.',
        recruiterCtaLabel: 'For recruiters',
        recruiterCtaDescription:
            'Technical background, experience, stack, projects.',
    },
};

const homeContentEs: HomePageContent = {
    hero: {
        roleLabel: 'Principal Software Engineer',
        subtitleFirstParagraph:
            'Soy un desarrollador full-stack enfocado en construir software práctico y confiable para empresas y equipos técnicos.',
        subtitleSecondParagraph:
            'Si estás evaluándome para un rol de software y querés una vista técnica, breve y directa, el perfil para recruiters es el mejor punto de entrada.',
        recruiterCtaLabel: 'Para recruiters',
        recruiterCtaDescription:
            'Perfil técnico, experiencia, stack y proyectos.',
    },
};

const homeContentByLocale: Record<Locale, HomePageContent> = {
    en: homeContentEn,
    es: homeContentEs,
};

export function getHomeContent(locale: Locale): HomePageContent {
    return homeContentByLocale[locale];
}
