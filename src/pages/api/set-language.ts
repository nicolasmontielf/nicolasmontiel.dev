import type { APIRoute } from 'astro';
import { LANGUAGE_COOKIE } from '@/i18n/detect-locale';
import { DEFAULT_LOCALE, isLocale } from '@/i18n/locales';

function getSafeRedirectPath(value: string | null) {
	if (!value || !value.startsWith('/') || value.startsWith('//')) {
		return `/${DEFAULT_LOCALE}`;
	}
	return value;
}

export const GET: APIRoute = ({ url, cookies, redirect }) => {
	const langParam = url.searchParams.get('lang');
	const redirectParam = url.searchParams.get('redirect');

	const locale = langParam && isLocale(langParam) ? langParam : DEFAULT_LOCALE;
	cookies.set(LANGUAGE_COOKIE, locale, {
		path: '/',
		maxAge: 60 * 60 * 24 * 365,
		sameSite: 'lax',
		httpOnly: false,
	});

	return redirect(getSafeRedirectPath(redirectParam));
};
