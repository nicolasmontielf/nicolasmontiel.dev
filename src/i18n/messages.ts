import type { Locale } from '@/i18n/locales';

export type Messages = {
	navbar: {
		home: string;
		posts: string;
		certifications: string;
		wantEcommerce: string;
		wantWeb: string;
		language: string;
	};
	layout: {
		defaultTitle: string;
		defaultDescription: string;
	};
	homePage: {
		title: string;
		description: string;
	};
	aboutPage: {
		title: string;
		description: string;
	};
	home: {
		greeting: string;
		certificationsTitle: string;
		viewCredential: string;
	};
};

const messagesByLocale: Record<Locale, Messages> = {
	en: {
		navbar: {
			home: 'Home',
			posts: 'Posts',
			certifications: 'Certifications and courses',
			wantEcommerce: 'I need an online store',
			wantWeb: 'I need a website',
			language: 'Language',
		},
		layout: {
			defaultTitle: 'Full-Stack Software Engineer and Freelance Developer',
			defaultDescription:
				'Nicolás Montiel is a full-stack software engineer helping teams build web products, ecommerce experiences, integrations, and AI-assisted engineering workflows.',
		},
		homePage: {
			title: 'Full-Stack Software Engineer for Web Products, Ecommerce, and AI Workflows',
			description:
				'Work with Nicolás Montiel, a senior full-stack software engineer building reliable web products, ecommerce solutions, integrations, and AI-assisted engineering workflows.',
		},
		aboutPage: {
			title: 'About Me, Experience, and Technical Background',
			description:
				'Learn more about Nicolás Montiel, a full-stack software engineer with 8+ years of experience building products for teams across Latin America, the United States, and Europe.',
		},
		home: {
			greeting: "Hi, I'm Nico 👋🏻",
			certificationsTitle: 'Certifications and courses',
			viewCredential: 'View Credential',
		},
	},
	es: {
		navbar: {
			home: 'Inicio',
			posts: 'Posts',
			certifications: 'Certificaciones y cursos',
			wantEcommerce: 'Quiero un ecommerce',
			wantWeb: 'Quiero una web',
			language: 'Idioma',
		},
		layout: {
			defaultTitle: 'Ingeniero de Software Full-Stack y Desarrollador Freelance',
			defaultDescription:
				'Nicolás Montiel es un ingeniero de software full-stack que ayuda a equipos a construir productos web, ecommerce, integraciones y flujos de ingeniería asistidos por IA.',
		},
		homePage: {
			title: 'Ingeniero de Software Full-Stack para Productos Web, Ecommerce e IA',
			description:
				'Trabajá con Nicolás Montiel, un ingeniero de software senior que construye productos web, soluciones ecommerce, integraciones y flujos de ingeniería asistidos por IA.',
		},
		aboutPage: {
			title: 'Sobre mí, experiencia y perfil técnico',
			description:
				'Conocé a Nicolás Montiel, ingeniero de software full-stack con más de 8 años de experiencia construyendo productos para equipos de Latinoamérica, Estados Unidos y Europa.',
		},
		home: {
			greeting: 'Hola, soy Nico 👋🏻',
			certificationsTitle: 'Certificaciones y cursos',
			viewCredential: 'Ver credencial',
		},
	},
};

export function getMessages(locale: Locale): Messages {
	return messagesByLocale[locale];
}
