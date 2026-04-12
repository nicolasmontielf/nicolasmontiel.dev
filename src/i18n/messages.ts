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
		description: string;
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
			description:
				"Software Engineer with over 7 years of experience building web applications. I specialize in building robust solutions with Laravel, Vue, Node and TypeScript. Beyond the terminal, I'm passionate about video games, cinema, and spending time with my wife and family. Currently, I'm exploring new opportunities and writing about software development.",
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
			description:
				'Ingeniero de software con más de 7 años de experiencia construyendo aplicaciones web. Me especializo en crear soluciones robustas con Laravel, Vue, Node y TypeScript. Más allá del terminal, me apasionan los videojuegos, el cine y pasar tiempo con mi esposa y familia. Actualmente estoy explorando nuevas oportunidades y escribiendo sobre desarrollo de software.',
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
