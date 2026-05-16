import type { Locale } from '@/i18n/locales';
import type { CommercialService } from '@/types/seo';

const DEFAULT_WHATSAPP_LINKS: Record<Locale, string> = {
    es: 'https://wa.me/595973779205?text=Hola%20Nico!%2C%20quiero%20hacerte%20una%20consulta.',
    en: 'https://wa.me/595973779205?text=Hi%20Nico!%20I%20would%20like%20to%20ask%20you%20something.',
};

const COMMERCIAL_WHATSAPP_LINKS: Record<
    CommercialService,
    Record<Locale, string>
> = {
    web: {
        es: 'https://wa.me/595973779205?text=Hola%20Nico!%2C%20quiero%20hacer%20una%20web%20y%20me%20gustar%C3%ADa%20contarte%20mi%20idea.',
        en: 'https://wa.me/595973779205?text=Hi%20Nico!%20I%20want%20to%20build%20a%20website%20and%20would%20like%20to%20tell%20you%20about%20my%20project.',
    },
    ecommerce: {
        es: 'https://wa.me/595973779205?text=Hola%20Nico!%2C%20quiero%20saber%20m%C3%A1s%20sobre%20un%20ecommerce%20a%20medida.',
        en: 'https://wa.me/595973779205?text=Hi%20Nico!%20I%20want%20to%20build%20a%20custom%20ecommerce%20store.',
    },
};

export function getWhatsappLink(locale: Locale) {
    return DEFAULT_WHATSAPP_LINKS[locale];
}

export function getCommercialWhatsappLink(
    service: CommercialService,
    locale: Locale,
) {
    return COMMERCIAL_WHATSAPP_LINKS[service][locale];
}
