import type { APIContext } from 'astro';
import { DEFAULT_LOCALE, isLocale, type Locale } from '@/i18n/locales';

const SPANISH_COUNTRY_CODES = new Set([
	'AR',
	'BO',
	'CL',
	'CO',
	'CR',
	'CU',
	'DO',
	'EC',
	'SV',
	'GQ',
	'GT',
	'HN',
	'MX',
	'NI',
	'PA',
	'PY',
	'PE',
	'PR',
	'ES',
	'UY',
	'VE',
]);

const LANGUAGE_COOKIE = 'lang';

function getLocaleFromCountry(countryCode: string | null): Locale | null {
	if (!countryCode) return null;
	if (SPANISH_COUNTRY_CODES.has(countryCode.toUpperCase())) {
		return 'es';
	}
	return 'en';
}

function getLocaleFromAcceptLanguage(headerValue: string | null): Locale | null {
	if (!headerValue) return null;

	const language = headerValue.split(',')[0]?.trim().toLowerCase() ?? '';
	if (language.startsWith('es')) return 'es';
	if (language.startsWith('en')) return 'en';
	return null;
}

export function getCookieLocale(cookies: APIContext['cookies']): Locale | null {
	const cookieLocale = cookies.get(LANGUAGE_COOKIE)?.value;
	if (!cookieLocale || !isLocale(cookieLocale)) {
		return null;
	}
	return cookieLocale;
}

export function resolveRequestLocale(context: Pick<APIContext, 'request' | 'cookies'>): Locale {
	const fromCookie = getCookieLocale(context.cookies);
	if (fromCookie) {
		return fromCookie;
	}

	const countryCode = context.request.headers.get('x-vercel-ip-country');
	const fromCountry = getLocaleFromCountry(countryCode);
	if (fromCountry) {
		return fromCountry;
	}

	const acceptLanguage = context.request.headers.get('accept-language');
	const fromHeader = getLocaleFromAcceptLanguage(acceptLanguage);
	if (fromHeader) {
		return fromHeader;
	}

	return DEFAULT_LOCALE;
}

export { LANGUAGE_COOKIE };
