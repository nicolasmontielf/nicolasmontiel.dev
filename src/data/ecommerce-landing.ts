import type { Locale } from '@/i18n/locales';

export type EcommerceSectionId = 'hero' | 'why' | 'services' | 'process' | 'cta';

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
	whyEcommerce: {
		title: string;
		description: string;
		scenarios: Array<{ title: string; description: string }>;
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
	visuals?: {
		emojis?: {
			heroBadge?: string;
			whyTitle?: string;
			ctaTitle?: string;
		};
		heroMockup?: {
			title: string;
			tags: string[];
			steps: Array<{ label: string; value: string }>;
			supportTitle: string;
			supportDescription: string;
		};
		whyHighlights?: Array<{ label: string; accent: string }>;
	};
};

const DEFAULT_WHATSAPP_LINK = 'https://wa.me/5950000000000';

const ecommerceLandingByLocale: Record<Locale, EcommerceLandingContent> = {
	es: {
		meta: {
			title: 'Desarrollo Ecommerce Freelance para Marcas y Negocios',
			description:
				'Desarrollo ecommerce freelance para marcas y negocios que necesitan lanzar, optimizar o escalar su canal online con una base técnica sólida.',
		},
		nav: {
			items: [
				{ id: 'why', label: 'Oportunidad' },
				{ id: 'services', label: 'Servicios' },
				{ id: 'process', label: 'Proceso' },
				{ id: 'cta', label: 'Contacto' },
			],
		},
		hero: {
			badge: 'Partner tecnológico para ecommerce',
			title: 'Desarrollo ecommerce que vende hoy y escala con tu negocio.',
			description:
				'Trabajo con equipos que necesitan lanzar, optimizar o destrabar su ecommerce con foco en conversión, estabilidad operativa y crecimiento real.',
			primaryCtaLabel: 'Hablemos por WhatsApp',
			secondaryCtaLabel: 'Conocé mi experiencia',
			trustNote: 'No se trata solo de publicar una tienda: te acompaño en decisiones, mejoras y soporte continuo.',
		},
		whyEcommerce: {
			title: 'El ecommerce ya no es opcional: es una ventaja competitiva.',
			description:
				'No importa si estás empezando o si ya vendés: definimos juntos qué necesitás hoy y cómo crecer sin improvisar mañana.',
			scenarios: [
				{
					title: 'Si todavía no vendés online',
					description: 'Diseñamos una primera versión enfocada en validar rápido y vender desde el inicio.',
				},
				{
					title: 'Si ya tenés una operación en marcha',
					description: 'Priorizamos mejoras de conversión, experiencia de compra y eficiencia operativa.',
				},
				{
					title: 'Si querés un partner técnico',
					description: 'Te acompaño con soporte, roadmap y transferencia de conocimiento para tu equipo.',
				},
			],
		},
		services: {
			title: 'Servicios para lanzar, mejorar y sostener tu ecommerce.',
			description: 'La solución se define en función de negocio, operación y capacidad real del equipo.',
			items: [
				{
					title: 'Desarrollo de ecommerce',
					description: 'Implementación completa orientada a conversión, rendimiento y crecimiento.',
				},
				{
					title: 'Rediseño y optimización',
					description: 'Ajustes de UX/UI y performance para vender mejor sin rehacer todo desde cero.',
				},
				{
					title: 'Integraciones y automatización',
					description: 'Conexión con pagos, logística, CRM y flujos operativos clave.',
				},
				{
					title: 'Soporte y evolución continua',
					description: 'Acompañamiento técnico para mejoras, incidentes y decisiones de producto.',
				},
			],
		},
		process: {
			title: 'Cómo trabajamos',
			description: 'Proceso simple, iterativo y transparente para que siempre tengas claridad.',
			steps: [
				{
					title: '1. Descubrimiento',
					description: 'Entendemos negocio, objetivos y restricciones para definir prioridades reales.',
				},
				{
					title: '2. Plan conjunto',
					description: 'Armamos roadmap técnico y funcional con entregables y tiempos claros.',
				},
				{
					title: '3. Construcción + soporte',
					description: 'Implementamos, lanzamos y seguimos mejorando contigo como partner.',
				},
			],
		},
		cta: {
			title: 'Si querés construir un ecommerce serio, trabajemos juntos.',
			description: 'Contame tu contexto y te propongo el mejor primer paso para tu negocio.',
			primaryButtonLabel: 'Escribime por WhatsApp',
		},
		links: {
			whatsapp: DEFAULT_WHATSAPP_LINK,
			about: '/es/sobre-mi',
		},
		visuals: {
			emojis: {
				heroBadge: '🤝',
				whyTitle: '📈',
				ctaTitle: '🚀',
			},
			heroMockup: {
				title: 'Tu canal ecommerce, con estrategia y ejecución',
				tags: ['Lanzamiento', 'Optimización', 'Soporte continuo'],
				steps: [
					{ label: 'Objetivo principal', value: 'Vender online con una operación estable' },
					{ label: 'Enfoque inicial', value: 'MVP de alto impacto + roadmap claro' },
					{ label: 'Evolución', value: 'Mejoras mensuales basadas en datos' },
				],
				supportTitle: 'Acompañamiento real',
				supportDescription: 'Seguimiento técnico y funcional después del lanzamiento.',
			},
			whyHighlights: [
				{ label: 'Validar y lanzar', accent: 'Inicio rápido' },
				{ label: 'Optimizar y escalar', accent: 'Crecimiento sostenido' },
				{ label: 'Soporte y aprendizaje', accent: 'Partner de largo plazo' },
			],
		},
	},
	en: {
		meta: {
			title: 'Freelance Ecommerce Development for Brands and Growing Teams',
			description:
				'Freelance ecommerce development for brands and teams that need to launch, optimize, or scale their online channel on solid technical foundations.',
		},
		nav: {
			items: [
				{ id: 'why', label: 'Opportunity' },
				{ id: 'services', label: 'Services' },
				{ id: 'process', label: 'Process' },
				{ id: 'cta', label: 'Contact' },
			],
		},
		hero: {
			badge: 'Your ecommerce technology partner',
			title: 'Ecommerce development that drives sales and supports long-term growth.',
			description:
				'I work with teams that need to launch, optimize, or unblock their ecommerce channel with a strong focus on conversion, operational stability, and sustainable growth.',
			primaryCtaLabel: 'Let\'s chat on WhatsApp',
			secondaryCtaLabel: 'Get to know my background',
			trustNote: 'This is not only about shipping a store. I stay involved in decisions, improvements, and ongoing support.',
		},
		whyEcommerce: {
			title: 'Ecommerce is no longer optional. It is a growth advantage.',
			description:
				'Whether you are starting from zero or already selling, we define what you need now and build with long-term clarity.',
			scenarios: [
				{
					title: 'If you are not selling online yet',
					description: 'We design a first version focused on validating fast and generating real sales early.',
				},
				{
					title: 'If you already have an online operation',
					description: 'We prioritize conversion, customer experience, and operational efficiency improvements.',
				},
				{
					title: 'If you need a long-term technical partner',
					description: 'I support your team with roadmap decisions, technical execution, and knowledge transfer.',
				},
			],
		},
		services: {
			title: 'Services to launch, improve, and sustain your ecommerce.',
			description: 'The right solution depends on your business model, operation, and team capacity.',
			items: [
				{
					title: 'Ecommerce development',
					description: 'End-to-end implementation focused on conversion, performance, and scalability.',
				},
				{
					title: 'Redesign and optimization',
					description: 'UX/UI and performance improvements to increase results without rebuilding everything.',
				},
				{
					title: 'Integrations and automation',
					description: 'Payments, logistics, CRM, and critical operational flows connected correctly.',
				},
				{
					title: 'Ongoing support and evolution',
					description: 'Continuous technical support for improvements, incidents, and product decisions.',
				},
			],
		},
		process: {
			title: 'How we work',
			description: 'A simple and transparent process so you always know what comes next.',
			steps: [
				{
					title: '1. Discovery',
					description: 'We map business goals, constraints, and priorities before writing code.',
				},
				{
					title: '2. Shared plan',
					description: 'We define a roadmap with concrete deliverables, timelines, and responsibilities.',
				},
				{
					title: '3. Build + support',
					description: 'We launch and continue improving with a partner mindset, not a one-off delivery.',
				},
			],
		},
		cta: {
			title: 'If you want to build a serious ecommerce channel, let\'s work together.',
			description: 'Share your context and I will propose the best first step for your company.',
			primaryButtonLabel: 'Message me on WhatsApp',
		},
		links: {
			whatsapp: DEFAULT_WHATSAPP_LINK,
			about: '/en/about-me',
		},
		visuals: {
			emojis: {
				heroBadge: '🤝',
				whyTitle: '📈',
				ctaTitle: '🚀',
			},
			heroMockup: {
				title: 'Your ecommerce channel, built with strategy and continuity',
				tags: ['Launch', 'Optimization', 'Ongoing support'],
				steps: [
					{ label: 'Primary goal', value: 'Sell online with a reliable operation' },
					{ label: 'Initial approach', value: 'High-impact MVP + clear roadmap' },
					{ label: 'Evolution', value: 'Monthly improvements based on data' },
				],
				supportTitle: 'Hands-on partnership',
				supportDescription: 'Technical and product support beyond the launch.',
			},
			whyHighlights: [
				{ label: 'Validate and launch', accent: 'Fast start' },
				{ label: 'Optimize and scale', accent: 'Sustainable growth' },
				{ label: 'Support and enablement', accent: 'Long-term partner' },
			],
		},
	},
};

export function getEcommerceLandingContent(locale: Locale): EcommerceLandingContent {
	return ecommerceLandingByLocale[locale];
}
