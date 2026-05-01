import type { Locale } from '@/i18n/locales';

export type LayoutProps = {
    locale?: Locale;
    title?: string;
    description?: string;
    canonical?: string;
    ogImage?: string;
    robots?: string;
    structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
    showDefaultNavbar?: boolean;
    containerMode?: 'constrained' | 'fluid';
    includeAlternateLinks?: boolean;
};
