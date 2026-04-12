import type { Locale } from '@/i18n/locales';

export type EcommerceSectionId = 'hero' | 'problem' | 'services' | 'process' | 'cta';

export type EcommerceLandingContent = {
	meta: {
		title: string;
		description: string;
	};
	nav: {
		items: Array<{ id: Exclude<EcommerceSectionId, 'hero'>; label: string }>;
	};
	hero: {
		badge: string;
		title: string;
		description: string;
		primaryCtaLabel: string;
		secondaryCtaLabel: string;
		trustNote: string;
	};
	problem: {
		title: string;
		description: string;
		pains: string[];
	};
	services: {
		title: string;
		description: string;
		items: Array<{ title: string; description: string }>;
	};
	process: {
		title: string;
		description: string;
		steps: Array<{ title: string; description: string }>;
	};
	cta: {
		title: string;
		description: string;
		primaryButtonLabel: string;
	};
	links: {
		whatsapp: string;
		about: string;
	};
};

const DEFAULT_WHATSAPP_LINK = 'https://wa.me/5950000000000';

const ecommerceLandingByLocale: Record<Locale, EcommerceLandingContent> = {
	es: {
		meta: {
			title: 'Ecommerce',
			description: 'Diseño y desarrollo de ecommerce para lanzar o escalar tu tienda online.',
		},
		nav: {
			items: [
				{ id: 'problem', label: 'Problema' },
				{ id: 'services', label: 'Servicios' },
				{ id: 'process', label: 'Proceso' },
				{ id: 'cta', label: 'Contacto' },
			],
		},
		hero: {
			badge: 'Servicios especializados en ecommerce',
			title: 'Construyo ecommerces que venden.',
			description:
				'Trabajo con marcas que necesitan lanzar, rediseñar u optimizar su tienda online con foco en conversión y experiencia de compra.',
			primaryCtaLabel: 'Hablemos por WhatsApp',
			secondaryCtaLabel: '¿Quién es esta persona?',
			trustNote: 'Ingeniero de software con enfoque en producto y ejecución end-to-end.',
		},
		problem: {
			title: 'Tu tienda puede estar frenando ventas sin que lo notes.',
			description: 'Estos son patrones comunes que suelen aparecer antes de pedir ayuda técnica:',
			pains: [
				'Tenés tráfico, pero pocas compras finalizadas.',
				'El checkout es largo o confuso y se abandona.',
				'La tienda no transmite confianza desde el primer scroll.',
				'Te cuesta escalar porque cada cambio técnico tarda demasiado.',
			],
		},
		services: {
			title: 'Servicios para lanzar o mejorar tu ecommerce.',
			description: 'Podemos trabajar desde cero o sobre una tienda ya en producción.',
			items: [
				{
					title: 'Desarrollo de ecommerce',
					description: 'Implementación completa de tienda online con estructura pensada para vender.',
				},
				{
					title: 'Rediseño orientado a conversión',
					description: 'Mejoras de UX/UI para reducir fricción y aumentar acciones clave.',
				},
				{
					title: 'Optimización técnica',
					description: 'Rendimiento, SEO técnico y ajustes de arquitectura para crecimiento sostenible.',
				},
				{
					title: 'Migraciones de plataforma',
					description: 'Plan y ejecución de migraciones cuidando continuidad operativa y datos críticos.',
				},
			],
		},
		process: {
			title: 'Cómo trabajamos',
			description: 'Un proceso simple, claro y medible desde el primer contacto.',
			steps: [
				{
					title: '1. Diagnóstico',
					description: 'Reviso estado actual, objetivos y bloqueos para definir prioridad real.',
				},
				{
					title: '2. Plan de ejecución',
					description: 'Propongo un plan técnico y de producto con entregables concretos.',
				},
				{
					title: '3. Desarrollo y lanzamiento',
					description: 'Implementamos, validamos y lanzamos con foco en resultados de negocio.',
				},
			],
		},
		cta: {
			title: 'Si querés vender más, empecemos por una conversación concreta.',
			description: 'Contame en qué estado está tu ecommerce y te digo cómo lo abordaría.',
			primaryButtonLabel: 'Escribime por WhatsApp',
		},
		links: {
			whatsapp: DEFAULT_WHATSAPP_LINK,
			about: '/es/sobre-mi',
		},
	},
	en: {
		meta: {
			title: 'Ecommerce',
			description: 'Ecommerce design and development services to launch or scale your online store.',
		},
		nav: {
			items: [
				{ id: 'problem', label: 'Problem' },
				{ id: 'services', label: 'Services' },
				{ id: 'process', label: 'Process' },
				{ id: 'cta', label: 'Contact' },
			],
		},
		hero: {
			badge: 'Specialized ecommerce services',
			title: 'I build ecommerce stores that sell.',
			description:
				'I work with brands that need to launch, redesign, or optimize their online store with a strong focus on conversion and purchase experience.',
			primaryCtaLabel: 'Let\'s chat on WhatsApp',
			secondaryCtaLabel: 'Who is behind this?',
			trustNote: 'Software engineer focused on product outcomes and end-to-end execution.',
		},
		problem: {
			title: 'Your store may be losing sales without obvious signals.',
			description: 'These are common patterns I usually see before clients reach out:',
			pains: [
				'You have traffic, but very few completed orders.',
				'Checkout flow is too long or confusing, so users drop off.',
				'The store does not create trust quickly enough.',
				'Scaling is difficult because technical changes move too slowly.',
			],
		},
		services: {
			title: 'Services to launch or improve your ecommerce.',
			description: 'We can work from scratch or improve an existing live store.',
			items: [
				{
					title: 'Ecommerce development',
					description: 'Full implementation of a store architecture built for conversion.',
				},
				{
					title: 'Conversion-focused redesign',
					description: 'UX/UI improvements to reduce friction and increase key actions.',
				},
				{
					title: 'Technical optimization',
					description: 'Performance, technical SEO, and architecture updates for sustainable growth.',
				},
				{
					title: 'Platform migrations',
					description: 'Migration planning and execution with care for continuity and critical data.',
				},
			],
		},
		process: {
			title: 'How we work',
			description: 'A simple, clear and measurable process from day one.',
			steps: [
				{
					title: '1. Diagnosis',
					description: 'I review your current state, goals, and bottlenecks to define real priorities.',
				},
				{
					title: '2. Execution plan',
					description: 'I propose a technical and product plan with concrete deliverables.',
				},
				{
					title: '3. Build and launch',
					description: 'We implement, validate, and launch with business outcomes in mind.',
				},
			],
		},
		cta: {
			title: 'If you want to increase sales, let\'s start with a focused conversation.',
			description: 'Tell me where your ecommerce is today and I\'ll outline the best next steps.',
			primaryButtonLabel: 'Message me on WhatsApp',
		},
		links: {
			whatsapp: DEFAULT_WHATSAPP_LINK,
			about: '/en/about-me',
		},
	},
};

export function getEcommerceLandingContent(locale: Locale): EcommerceLandingContent {
	return ecommerceLandingByLocale[locale];
}
