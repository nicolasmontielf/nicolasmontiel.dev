import type { Locale } from '@/i18n/locales';

export type EcommerceSectionId = 'hero' | 'work' | 'profile' | 'process' | 'contact';

export type EcommerceLandingContent = {
	meta: {
		title: string;
		description: string;
	};
	nav: {
		label: string;
		items: Array<{ id: Exclude<EcommerceSectionId, 'hero'>; label: string }>;
	};
	hero: {
		badge: string;
		title: string;
		description: string;
		trustNote: string;
		primaryCtaLabel: string;
		secondaryCtaLabel: string;
		floatingCardLabel: string;
		floatingCardValue: string;
	};
	work: {
		eyebrow: string;
		title: string;
		description: string;
		noteTitle: string;
		noteDescription: string;
		items: Array<{
			title: string;
			description: string;
			examples: string[];
			icon: 'core' | 'storefront' | 'business' | 'launch' | 'setup';
		}>;
	};
	profile: {
		eyebrow: string;
		title: string;
		description: string;
		items: Array<{ title: string; description: string }>;
		buttonLabel: string;
	};
	process: {
		eyebrow: string;
		title: string;
		description: string;
		steps: Array<{ title: string; description: string }>;
	};
	contact: {
		eyebrow: string;
		title: string;
		description: string;
		formTitle: string;
		formDescription: string;
		nameLabel: string;
		namePlaceholder: string;
		emailLabel: string;
		emailPlaceholder: string;
		whatsappLabel: string;
		whatsappPlaceholder: string;
		helperText: string;
		submitLabel: string;
		submittingLabel: string;
		whatsappCtaLabel: string;
		whatsappNote: string;
		nameRequiredMessage: string;
		contactRequiredMessage: string;
		notConfiguredMessage: string;
		errorMessage: string;
	};
	links: {
		whatsapp: string;
		about: string;
	};
};

const DEFAULT_WHATSAPP_LINK_ES =
	'https://wa.me/595973779205?text=Hola%20Nico!%2C%20quiero%20saber%20m%C3%A1s%20sobre%20un%20ecommerce%20a%20medida.';
const DEFAULT_WHATSAPP_LINK_EN =
	'https://wa.me/595973779205?text=Hi%20Nico!%20I%20want%20to%20learn%20more%20about%20a%20custom%20ecommerce%20build.';

const ecommerceLandingByLocale: Record<Locale, EcommerceLandingContent> = {
	es: {
		meta: {
			title: 'Ecommerce a Medida para Marcas y Negocios',
			description:
				'Desarrollo ecommerce a medida sobre un core sólido, seguro y probado durante años, con ayuda para diseño, lanzamiento, servidor, dominio y soporte si lo necesitás.',
		},
		nav: {
			label: 'Ecommerce',
			items: [
				{ id: 'work', label: 'Servicio' },
				{ id: 'profile', label: 'Perfil' },
				{ id: 'process', label: 'Proceso' },
				{ id: 'contact', label: 'Contacto' },
			],
		},
		hero: {
			badge: 'Ecommerce a medida',
			title: 'Un ecommerce a medida para negocios que quieren vender online en serio.',
			description:
				'Trabajo sobre un core que ya pasó años de prueba, es seguro y me permite construir algo realmente adaptado a tu negocio. La idea no es meterte en un WordPress lleno de parches ni arrancar todo desde cero, sino salir con una tienda bien pensada y una base técnica confiable.',
			trustNote:
				'No trabajo con la lógica de “te entrego una plantilla y arreglate”. Me involucro para que la tienda quede bien armada, salga online con criterio y después también puedas contar conmigo si hace falta.',
			primaryCtaLabel: 'Hablemos por WhatsApp',
			secondaryCtaLabel: 'Conocé mi perfil',
			floatingCardLabel: 'Base técnica',
			floatingCardValue: 'Core sólido, seguro y ya probado',
		},
		work: {
			eyebrow: 'Qué incluye',
			title: 'No vendo una plantilla ni horas sueltas. Desarrollo un ecommerce a medida bien resuelto para tu negocio.',
			description:
				'Partimos de un core sólido y, desde ahí, definimos cómo tiene que verse la tienda, cómo tiene que operar y en qué parte te conviene que te acompañe también después de salir.',
			noteTitle: 'La ventaja está en arrancar desde una base que ya existe.',
			noteDescription:
				'Como la base ya fue probada de verdad durante años, no gastamos energía resolviendo lo elemental. La inversión está en adaptar bien la tienda a tu marca, tu operación y tu forma de vender.',
			items: [
				{
					title: 'Implementación sobre un core sólido',
					description:
						'La tienda se construye sobre una base segura y ya muy probada. Eso hace que el proyecto arranque con más orden, menos riesgo y mejores fundamentos técnicos.',
					examples: ['Catálogo', 'Checkout', 'Operación base', 'Base segura'],
					icon: 'core',
				},
				{
					title: 'Storefront diseñado a medida',
					description:
						'Trabajo para que la tienda se vea y se sienta alineada con tu marca, tu producto y la experiencia que querés darle al cliente.',
					examples: ['Diseño visual', 'Identidad de marca', 'Jerarquía de contenido', 'Experiencia de compra'],
					icon: 'storefront',
				},
				{
					title: 'Adaptación a tu negocio',
					description:
						'No adapto tu negocio a una plantilla. Adapto la implementación a tu operación, tu propuesta comercial y las prioridades reales de tu canal.',
					examples: ['Marca', 'Flujos de compra', 'Configuración comercial', 'Prioridades reales'],
					icon: 'business',
				},
				{
					title: 'Salida online y acompañamiento técnico',
					description:
						'Desde el inicio puedo ayudarte con servidor, dominio y puesta online para que no tengas que resolver esa parte a las corridas. Después, si querés soporte o mejoras, también lo vemos.',
					examples: ['Servidor', 'Dominio', 'Deploy', 'Soporte opcional'],
					icon: 'launch',
				},
				{
					title: 'Configuración complementaria',
					description:
						'Si suma valor para tu caso, también puedo ayudarte con la configuración de Google Analytics, Google Search Console y algunos puntos generales de SEO para que la tienda salga más ordenada.',
					examples: ['Google Analytics', 'Search Console', 'SEO general', 'Medición base'],
					icon: 'setup',
				},
			],
		},
		profile: {
			eyebrow: 'Por qué trabajar conmigo',
			title: 'Además de construir la tienda, puedo funcionar como partner técnico para ordenarla bien desde el principio.',
			description:
				'Tengo experiencia construyendo productos web para equipos de distintos mercados y me interesa trabajar con criterio, no solo ejecutar tareas aisladas. Si querés ver mejor cómo trabajo y cuál es mi perfil, podés entrar a mi página principal.',
			items: [
				{
					title: 'Más de 8 años construyendo productos',
					description:
						'Vengo ayudando a equipos de Latinoamérica, Estados Unidos y Europa a construir productos digitales con una mirada práctica y orientada a negocio.',
				},
				{
					title: 'Partner técnico de verdad',
					description:
						'Me gusta entender el negocio, cuestionar supuestos flojos cuando hace falta y tomar decisiones que permitan avanzar sin dejar desorden técnico a futuro.',
				},
				{
					title: 'Ejecución senior y comunicación clara',
					description:
						'Si trabajás conmigo, podés esperar criterio técnico, buena comunicación y foco real en entregar algo confiable, mantenible y útil para el negocio.',
				},
			],
			buttonLabel: 'Ver mi perfil completo',
		},
		process: {
			eyebrow: 'Cómo lo trabajo',
			title: 'La base técnica ya está resuelta. El trabajo importante es adaptarla bien a tu negocio.',
			description:
				'Primero entiendo cómo vendés y qué necesitás. Después definimos la implementación, construyo la tienda a medida y te ayudo a salir online con más orden. Si después hace falta, seguimos.',
			steps: [
				{
					title: 'Entender el negocio',
					description:
						'Reviso catálogo, proceso comercial, operación y expectativas para entender qué tipo de tienda necesitás de verdad.',
				},
				{
					title: 'Definir la implementación',
					description:
						'Tomamos el core existente y definimos qué se adapta, qué se diseña a medida y cómo conviene ordenar la salida.',
				},
				{
					title: 'Construir la tienda',
					description:
						'Avanzo con la implementación y el storefront para que la tienda responda a tu marca, a tu operación y a la experiencia que querés dar.',
				},
				{
					title: 'Salir online con más orden',
					description:
						'Te ayudo con servidor, dominio, configuración inicial y, si hace falta, también con medición y algunos puntos de SEO para que el lanzamiento quede mejor armado.',
				},
			],
		},
		contact: {
			eyebrow: 'Contacto',
			title: 'Si querés un ecommerce bien resuelto y pensado para tu negocio, conversemos.',
			description:
				'Contame qué necesitás vender, cómo operás hoy y qué esperás del canal. Si veo que encaja con tu caso, te voy a proponer la mejor forma de construir la tienda y ordenarla desde el arranque.',
			formTitle: 'Dejame tu contacto',
			formDescription:
				'Completá tu nombre y dejá email o WhatsApp. Con eso ya puedo responderte y entender mejor tu caso.',
			nameLabel: 'Nombre',
			namePlaceholder: 'Tu nombre',
			emailLabel: 'Email',
			emailPlaceholder: 'tuemail@empresa.com',
			whatsappLabel: 'WhatsApp',
			whatsappPlaceholder: '+595 9xx xxx xxx',
			helperText: 'Nombre es obligatorio. Email o WhatsApp: al menos uno de los dos.',
			submitLabel: 'Enviar consulta',
			submittingLabel: 'Enviando...',
			whatsappCtaLabel: 'Escribime por WhatsApp',
			whatsappNote:
				'Si preferís ir directo, también podés escribirme por WhatsApp y contarme tu caso ahí.',
			nameRequiredMessage: 'Necesito al menos tu nombre para poder responderte.',
			contactRequiredMessage: 'Dejame email o WhatsApp, al menos uno de los dos.',
			notConfiguredMessage:
				'El formulario todavía no está conectado a un servicio de envío. Por ahora escribime por WhatsApp.',
			errorMessage: 'Hubo un problema al intentar enviar el formulario. Probá de nuevo o escribime por WhatsApp.',
		},
		links: {
			whatsapp: DEFAULT_WHATSAPP_LINK_ES,
			about: '/es/sobre-mi',
		},
	},
	en: {
		meta: {
			title: 'Custom Ecommerce for Brands and Growing Businesses',
			description:
				'Custom ecommerce built on top of a solid, secure core that has been tested for years, with help for design, launch, hosting, domain setup, and support when needed.',
		},
		nav: {
			label: 'Ecommerce',
			items: [
				{ id: 'work', label: 'Service' },
				{ id: 'profile', label: 'Profile' },
				{ id: 'process', label: 'Process' },
				{ id: 'contact', label: 'Contact' },
			],
		},
		hero: {
			badge: 'Custom ecommerce',
			title: 'A custom ecommerce build for businesses that want to sell online seriously.',
			description:
				'I work on top of a core that has already been tested for years, is secure, and gives me a strong base to build something that truly fits your business. The goal is not to drop you into a patched-up WordPress setup or start everything from zero, but to launch on something well thought out and technically reliable.',
			trustNote:
				'I do not work with a “here is your template, good luck” mindset. I stay involved so the store is well put together, launches properly, and you can still count on me later if that helps.',
			primaryCtaLabel: 'Let’s chat on WhatsApp',
			secondaryCtaLabel: 'See my background',
			floatingCardLabel: 'Technical base',
			floatingCardValue: 'Solid, secure, and already proven core',
		},
		work: {
			eyebrow: 'What is included',
			title: 'I am not selling a template or isolated dev hours. I build a custom ecommerce that is properly resolved around your business.',
			description:
				'We start from a solid core and, from there, define how the store should look, how it should operate, and where it makes sense for me to stay involved after launch.',
			noteTitle: 'The advantage is starting from something that already exists.',
			noteDescription:
				'Because the base has already been tested in real conditions for years, we do not waste energy rebuilding the obvious parts. The real effort goes into adapting the store to your brand, your operation, and the way you sell.',
			items: [
				{
					title: 'Implementation on top of a solid core',
					description:
						'The store is built on top of a secure and well-tested base. That gives the project more order, less risk, and stronger technical fundamentals from the start.',
					examples: ['Catalog', 'Checkout', 'Core operation', 'Secure base'],
					icon: 'core',
				},
				{
					title: 'Custom storefront design',
					description:
						'I work to make sure the store looks and feels aligned with your brand, your product, and the experience you want to give customers.',
					examples: ['Visual design', 'Brand fit', 'Content hierarchy', 'Buying experience'],
					icon: 'storefront',
				},
				{
					title: 'Adaptation to your business',
					description:
						'I am not forcing your business into a template. I adapt the implementation to your operations, your commercial model, and the real priorities of the channel.',
					examples: ['Brand fit', 'Buying flows', 'Commercial setup', 'Real priorities'],
					icon: 'business',
				},
				{
					title: 'Launch and technical support',
					description:
						'From the start, I can help with hosting, domain setup, and going live so you do not have to scramble through that part alone. After launch, if you want support or improvements, we can keep going.',
					examples: ['Hosting', 'Domain', 'Deploy', 'Optional support'],
					icon: 'launch',
				},
				{
					title: 'Complementary setup',
					description:
						'If it adds value to your case, I can also help with Google Analytics, Google Search Console, and general SEO support so the store launches in a more organized way.',
					examples: ['Google Analytics', 'Search Console', 'General SEO', 'Core measurement'],
					icon: 'setup',
				},
			],
		},
		profile: {
			eyebrow: 'Why work with me',
			title: 'Beyond building the store, I can act as a technical partner to structure it properly from the start.',
			description:
				'I have experience building web products for teams across different markets, and I care about working with judgment, not just shipping isolated tasks. If you want a better sense of how I work and my background, you can visit my main profile page.',
			items: [
				{
					title: '8+ years building products',
					description:
						'I have helped teams across Latin America, the United States, and Europe build digital products with a practical, business-oriented mindset.',
				},
				{
					title: 'A real technical partner',
					description:
						'I like understanding the business, challenging weak assumptions when needed, and making decisions that move things forward without creating long-term technical mess.',
				},
				{
					title: 'Senior execution and clear communication',
					description:
						'If you work with me, you can expect technical judgment, clear communication, and a strong focus on building something reliable, maintainable, and useful for the business.',
				},
			],
			buttonLabel: 'See my full background',
		},
		process: {
			eyebrow: 'How I work',
			title: 'The technical foundation is already there. The important work is adapting it properly to your business.',
			description:
				'First I understand how you sell and what you need. Then we define the implementation, I build the store around that, and I help you launch with more order. If it helps later, we keep going.',
			steps: [
				{
					title: 'Understand the business',
					description:
						'I review your catalog, sales flow, operations, and expectations so I can understand what kind of store you actually need.',
				},
				{
					title: 'Define the implementation',
					description:
						'We take the existing core and define what should be adapted, what should be custom-designed, and how the launch should be structured.',
				},
				{
					title: 'Build the store',
					description:
						'I move forward with the implementation and the storefront so the store responds to your brand, your operations, and the experience you want to deliver.',
				},
				{
					title: 'Launch with more order',
					description:
						'I can help with hosting, domain setup, initial configuration, and, if useful, with measurement and a few SEO basics so the launch is better put together.',
				},
			],
		},
		contact: {
			eyebrow: 'Contact',
			title: 'If you want an ecommerce store that is properly built around your business, let’s talk.',
			description:
				'Tell me what you need to sell, how you operate today, and what you expect from the channel. If I see a good fit, I will suggest the best way to build the store and structure the launch.',
			formTitle: 'Leave your contact details',
			formDescription:
				'Share your name and leave either an email or a WhatsApp number. That is enough for me to reply and understand the case better.',
			nameLabel: 'Name',
			namePlaceholder: 'Your name',
			emailLabel: 'Email',
			emailPlaceholder: 'you@company.com',
			whatsappLabel: 'WhatsApp',
			whatsappPlaceholder: '+1 555 555 5555',
			helperText: 'Name is required. Email or WhatsApp: at least one of the two.',
			submitLabel: 'Send inquiry',
			submittingLabel: 'Sending...',
			whatsappCtaLabel: 'Message me on WhatsApp',
			whatsappNote:
				'If you prefer the fastest path, you can also message me directly on WhatsApp and tell me about your case there.',
			nameRequiredMessage: 'I need at least your name so I can reply properly.',
			contactRequiredMessage: 'Leave either an email or a WhatsApp number, at least one of the two.',
			notConfiguredMessage:
				'The form is not connected to a delivery service yet. For now, please message me on WhatsApp.',
			errorMessage: 'There was a problem trying to send the form. Try again or contact me on WhatsApp.',
		},
		links: {
			whatsapp: DEFAULT_WHATSAPP_LINK_EN,
			about: '/en/about-me',
		},
	},
};

export function getEcommerceLandingContent(locale: Locale): EcommerceLandingContent {
	return ecommerceLandingByLocale[locale];
}
