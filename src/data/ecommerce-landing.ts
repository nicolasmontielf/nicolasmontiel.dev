import type { Locale } from '@/i18n/locales';

export type EcommerceSectionId = 'hero' | 'situations' | 'work' | 'process' | 'cta';

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
		primaryCtaLabel: string;
		secondaryCtaLabel: string;
		trustNote: string;
		fitEyebrow: string;
		fitTitle: string;
		fitItems: string[];
		commitmentsEyebrow: string;
		commitmentsTitle: string;
		commitments: Array<{ label: string; value: string }>;
	};
	situations: {
		eyebrow: string;
		title: string;
		description: string;
		leadTitle: string;
		leadDescription: string;
		scenarios: Array<{ kicker: string; title: string; description: string }>;
	};
	work: {
		eyebrow: string;
		title: string;
		description: string;
		noteTitle: string;
		noteDescription: string;
		items: Array<{ title: string; description: string; examples: string[] }>;
	};
	process: {
		eyebrow: string;
		title: string;
		description: string;
		principles: Array<{ title: string; description: string }>;
		steps: Array<{ title: string; description: string }>;
	};
	cta: {
		eyebrow: string;
		title: string;
		description: string;
		supportNote: string;
		primaryButtonLabel: string;
		secondaryButtonLabel: string;
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
				// { id: 'situations', label: 'Buen fit' },
				{ id: 'work', label: 'Servicio' },
				{ id: 'process', label: 'Proceso' },
				{ id: 'cta', label: 'Contacto' },
			],
		},
		hero: {
			badge: 'Ecommerce a medida',
			title: 'Un ecommerce a medida, sobre una base sólida, para negocios que quieren vender online en serio.',
			description:
				'Trabajo sobre un core que ya pasó años de prueba, es seguro y me permite construir algo realmente adaptado a tu negocio. La idea no es meterte un WordPress lleno de parches ni arrancar todo desde cero, sino salir con una tienda bien pensada y una base técnica confiable.',
			primaryCtaLabel: 'Hablemos por WhatsApp',
			secondaryCtaLabel: 'Conocé mi perfil',
			trustNote:
				'No trabajo con la lógica de “te entrego una plantilla y arreglate”. Me involucro para que la tienda quede bien armada, salga online con criterio y después también puedas contar conmigo si hace falta.',
			fitEyebrow: 'Buen fit',
			fitTitle: 'Tiene sentido si querés una tienda propia, bien resuelta y adaptada a cómo vende tu negocio.',
			fitItems: [
				'Querés partir de una base ya probada, pero con una implementación que se sienta realmente tuya.',
				'Necesitás que lo que ven tus clientes, la operación y la experiencia de compra se adapten a tu negocio, no al revés.',
				'Te sirve tener a alguien que pueda ayudarte con la tienda, el lanzamiento y también con las decisiones técnicas alrededor.',
			],
			commitmentsEyebrow: 'Qué contratás',
			commitmentsTitle: 'No es una tienda genérica. Es una implementación seria, pensada alrededor de tu negocio.',
			commitments: [
				{
					label: 'Core sólido',
					value: 'La base técnica ya viene muy probada, es segura y me permite enfocarme en construir bien lo que hace diferente a tu tienda.',
				},
				{
					label: 'Storefront a medida',
					value: 'La experiencia visual y funcional se diseña alrededor de tu marca, tu catálogo y la forma en la que querés vender.',
				},
				{
					label: 'Acompañamiento técnico',
					value: 'Desde el arranque puedo ayudarte con servidor, dominio y salida online. Después, si querés soporte o mejoras, también lo podemos seguir trabajando.',
				},
			],
		},
		situations: {
			eyebrow: 'Para quién calza',
			title: 'Funciona mejor para negocios que quieren vender con algo serio, no con una tienda armada a medias.',
			description:
				'Le sirve especialmente a negocios que valoran criterio, una base confiable y una implementación pensada para durar, sin caer en soluciones frágiles o demasiado genéricas.',
			leadTitle: 'Normalmente esto encaja por alguna de estas razones.',
			leadDescription:
				'A veces el problema es que WordPress o una plantilla genérica se quedan cortos. A veces lo importante es que la tienda refleje de verdad cómo vende el negocio. Y a veces lo más valioso es contar con alguien que pueda construir y acompañar con criterio.',
			scenarios: [
				{
					kicker: 'Base seria',
					title: 'Querés algo más sólido que un WordPress armado a los apurones.',
					description:
						'La idea es salir con una tienda que tenga una base técnica confiable desde el día uno, sin depender de parches raros ni de ir resolviendo lo básico sobre la marcha.',
				},
				{
					kicker: 'A medida',
					title: 'Necesitás que la experiencia de compra y la operación calcen con tu negocio.',
					description:
						'No se trata solo de poner productos online. Trabajo para que el storefront, los flujos y la lógica comercial respondan a lo que realmente necesitás vender.',
				},
				{
					kicker: 'Partner técnico',
					title: 'Te sirve tener a alguien que pueda construir la tienda y también ayudarte alrededor.',
					description:
						'Además de la implementación, puedo darte una mano con decisiones técnicas, configuración inicial y algunos puntos que ayudan a que la tienda salga más ordenada desde el principio.',
				},
			],
		},
		work: {
			eyebrow: 'Qué incluye',
			title: 'No vendo una plantilla ni horas sueltas. Desarrollo un ecommerce a medida sobre una base confiable.',
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
				},
				{
					title: 'Storefront diseñado a medida',
					description:
						'Trabajo para que la tienda se vea y se sienta alineada con tu marca, tu producto y la experiencia que querés darle al cliente.',
					examples: ['Diseño visual', 'Identidad de marca', 'Jerarquía de contenido', 'Experiencia de compra'],
				},
				{
					title: 'Adaptación a tu negocio',
					description:
						'No adapto tu negocio a una plantilla. Adapto la implementación a tu operación, tu propuesta comercial y las prioridades reales de tu canal.',
					examples: ['Marca', 'Flujos de compra', 'Configuración comercial', 'Prioridades reales'],
				},
				{
					title: 'Salida online y acompañamiento técnico',
					description:
						'Desde el inicio puedo ayudarte con servidor, dominio y puesta online para que no tengas que resolver esa parte a las corridas. Después, si querés soporte o mejoras, también lo vemos.',
					examples: ['Servidor', 'Dominio', 'Deploy', 'Soporte opcional'],
				},
				{
					title: 'Configuración complementaria',
					description:
						'Si suma valor para tu caso, también puedo ayudarte con la configuración de Google Analytics, Google Search Console y algunos puntos generales de SEO para que la tienda salga más ordenada.',
					examples: ['Google Analytics', 'Search Console', 'SEO general', 'Medición base'],
				},
			],
		},
		process: {
			eyebrow: 'Cómo lo trabajo',
			title: 'La base técnica ya está resuelta. El trabajo importante es adaptarla bien a tu negocio.',
			description:
				'Primero entiendo cómo vendés y qué necesitás. Después definimos la implementación, construyo la tienda a medida y te ayudo a salir online con más orden. Si después hace falta, seguimos.',
			principles: [
				{
					title: 'Primero negocio, después diseño',
					description:
						'Antes de tocar nada, necesito entender cómo vendés, cómo operás y qué lugar tiene que ocupar el ecommerce dentro de tu negocio.',
				},
				{
					title: 'Base sólida, decisiones con criterio',
					description:
						'La parte técnica pesada ya está resuelta. Lo importante es decidir bien qué adaptar para que la tienda se sienta propia y siga siendo simple de sostener.',
				},
				{
					title: 'Acompañamiento en lo que suma',
					description:
						'Puedo ayudarte en el arranque con infraestructura, medición y algunos puntos de SEO. Después, si querés continuidad, lo seguimos trabajando.',
				},
			],
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
		cta: {
			eyebrow: 'Contacto',
			title: 'Si querés un ecommerce bien resuelto y pensado para tu negocio, conversemos.',
			description:
				'Contame qué necesitás vender, cómo operás hoy y qué esperás del canal. Si veo que encaja con tu caso, te voy a proponer la mejor forma de construir la tienda y ordenarla desde el arranque.',
			supportNote:
				'Si hace falta, también puedo darte una mano con servidor, dominio, Analytics, Search Console y algunos puntos generales de SEO para que la salida online quede más completa.',
			primaryButtonLabel: 'Escribime por WhatsApp',
			secondaryButtonLabel: 'Ver mi experiencia',
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
				// { id: 'situations', label: 'Good fit' },
				{ id: 'work', label: 'Service' },
				{ id: 'process', label: 'Process' },
				{ id: 'cta', label: 'Contact' },
			],
		},
		hero: {
			badge: 'Custom ecommerce',
			title: 'A custom ecommerce build on top of a solid foundation for businesses that want to sell online seriously.',
			description:
				'I work on top of a core that has already been tested for years, is secure, and gives me a strong base to build something that truly fits your business. The goal is not to drop you into a patched-up WordPress setup or start everything from zero, but to launch on something well thought out and technically reliable.',
			primaryCtaLabel: 'Let’s chat on WhatsApp',
			secondaryCtaLabel: 'See my background',
			trustNote:
				'I do not work with a “here is your template, good luck” mindset. I stay involved so the store is well put together, launches properly, and you can still count on me later if that helps.',
			fitEyebrow: 'Good fit',
			fitTitle: 'It makes sense if you want a store that feels like yours and is properly adapted to how your business sells.',
			fitItems: [
				'You want to start from a base that already works, but with an implementation that still feels genuinely yours.',
				'You need the storefront, buying flows, and operating setup to adapt to your business instead of forcing your business into a template.',
				'It helps to have someone who can handle the store, the launch, and the technical decisions around it in one place.',
			],
			commitmentsEyebrow: 'What you are buying',
			commitmentsTitle: 'This is not a generic store. It is a serious implementation built around your business.',
			commitments: [
				{
					label: 'Solid core',
					value: 'The technical base is already heavily tested, secure, and lets me focus on building the parts that actually make your store different.',
				},
				{
					label: 'Custom storefront',
					value: 'The visual and functional experience is designed around your brand, your catalog, and the way you want to sell.',
				},
				{
					label: 'Optional support',
					value: 'From day one I can help with hosting, domain setup, and launch. After that, if you want support or further improvements, we can keep working on it.',
				},
			],
		},
		situations: {
			eyebrow: 'Who this fits',
			title: 'This works best for businesses that want to sell on something serious, not on a half-baked store setup.',
			description:
				'It is especially useful for businesses that value judgment, a reliable base, and an implementation that is meant to last, without falling into fragile or overly generic solutions.',
			leadTitle: 'Most of the time, this makes sense for one of these reasons.',
			leadDescription:
				'Sometimes the problem is that WordPress or a generic template is just not enough. Sometimes the important part is making the store reflect how the business really sells. And sometimes the real value is having someone who can both build and guide the implementation with judgment.',
			scenarios: [
				{
					kicker: 'Serious foundation',
					title: 'You want something stronger than a rushed WordPress setup.',
					description:
						'The goal is to launch on a store with a reliable technical base from day one, without depending on messy patches or solving the basics on the fly.',
				},
				{
					kicker: 'Tailored fit',
					title: 'You need the buying experience and operations to match your business.',
					description:
						'It is not just about putting products online. I work so the storefront, flows, and commercial logic respond to what you actually need to sell.',
				},
				{
					kicker: 'Technical partner',
					title: 'It helps to have someone who can build the store and also help around it.',
					description:
						'Beyond the implementation itself, I can help with technical decisions, launch setup, and a few extra pieces that make the whole project come together more cleanly.',
				},
			],
		},
		work: {
			eyebrow: 'What is included',
			title: 'I am not selling a template or isolated dev hours. I build a custom ecommerce around a reliable base.',
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
				},
				{
					title: 'Custom storefront design',
					description:
						'I work to make sure the store looks and feels aligned with your brand, your product, and the experience you want to give customers.',
					examples: ['Visual design', 'Brand fit', 'Content hierarchy', 'Buying experience'],
				},
				{
					title: 'Adaptation to your business',
					description:
						'I am not forcing your business into a template. I adapt the implementation to your operations, your commercial model, and the real priorities of the channel.',
					examples: ['Brand fit', 'Buying flows', 'Commercial setup', 'Real priorities'],
				},
				{
					title: 'Launch and technical support',
					description:
						'From the start, I can help with hosting, domain setup, and going live so you do not have to scramble through that part alone. After launch, if you want support or improvements, we can keep going.',
					examples: ['Hosting', 'Domain', 'Deploy', 'Optional support'],
				},
				{
					title: 'Complementary setup',
					description:
						'If it adds value to your case, I can also help with Google Analytics, Google Search Console, and general SEO support so the store launches in a more organized way.',
					examples: ['Google Analytics', 'Search Console', 'General SEO', 'Core measurement'],
				},
			],
		},
		process: {
			eyebrow: 'How I work',
			title: 'The technical foundation is already there. The important work is adapting it properly to your business.',
			description:
				'First I understand how you sell and what you need. Then we define the implementation, I build the store around that, and I help you launch with more order. If it helps later, we keep going.',
			principles: [
				{
					title: 'Business first, design second',
					description:
						'Before touching anything, I need to understand how you sell, how you operate, and what role ecommerce should play in your business.',
				},
				{
					title: 'Solid base, deliberate decisions',
					description:
						'The heavy technical layer is already solved. The important part is deciding what should be adapted so the store feels like yours while staying simple to support.',
				},
				{
					title: 'Support where it adds value',
					description:
						'I can help with launch infrastructure, measurement, and a few SEO basics. After that, if you want continuity, we can keep working together.',
				},
			],
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
		cta: {
			eyebrow: 'Contact',
			title: 'If you want an ecommerce store that is properly built around your business, let’s talk.',
			description:
				'Tell me what you need to sell, how you operate today, and what you expect from the channel. If I see a good fit, I will suggest the best way to build the store and structure the launch.',
			supportNote:
				'If needed, I can also help with hosting, domain setup, Analytics, Search Console, and general SEO support so the online launch is more complete.',
			primaryButtonLabel: 'Message me on WhatsApp',
			secondaryButtonLabel: 'See my experience',
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
