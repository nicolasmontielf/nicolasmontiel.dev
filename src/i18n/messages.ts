import type { Locale } from '@/i18n/locales';

export type Messages = {
	navbar: {
		home: string;
		posts: string;
	};
	layout: {
		homeTitle: string;
		defaultDescription: string;
	};
	home: {
		greeting: string;
		popularPostsTitle: string;
		viewAll: string;
	};
	postsPage: {
		pageTitle: string;
		heading: string;
		description: string;
	};
	postsList: {
		loading: string;
		previous: string;
		next: string;
		readMore: string;
	};
};

const messagesByLocale: Record<Locale, Messages> = {
	en: {
		navbar: {
			home: 'Home',
			posts: 'Posts',
		},
		layout: {
			homeTitle: 'Home',
			defaultDescription: "Hi!, My name is Nico and I'm a software engineer.",
		},
		home: {
			greeting: "Hi, I'm Nico 👋🏻",
			popularPostsTitle: 'Most popular posts',
			viewAll: 'View all',
		},
		postsPage: {
			pageTitle: 'My Posts',
			heading: 'Posts',
			description: 'Articles about development, technology, and personal experiences.',
		},
		postsList: {
			loading: 'Loading...',
			previous: 'Previous',
			next: 'Next',
			readMore: 'Read more',
		},
	},
	es: {
		navbar: {
			home: 'Inicio',
			posts: 'Posts',
		},
		layout: {
			homeTitle: 'Inicio',
			defaultDescription: '¡Hola! Mi nombre es Nico y soy ingeniero de software.',
		},
		home: {
			greeting: 'Hola, soy Nico 👋🏻',
			popularPostsTitle: 'Posts más populares',
			viewAll: 'Ver todos',
		},
		postsPage: {
			pageTitle: 'Mis publicaciones',
			heading: 'Publicaciones',
			description: 'Artículos sobre desarrollo, tecnología y experiencias personales.',
		},
		postsList: {
			loading: 'Cargando...',
			previous: 'Anterior',
			next: 'Siguiente',
			readMore: 'Seguir leyendo',
		},
	},
};

export function getMessages(locale: Locale): Messages {
	return messagesByLocale[locale];
}
