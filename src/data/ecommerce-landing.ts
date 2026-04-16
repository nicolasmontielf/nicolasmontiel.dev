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

const DEFAULT_WHATSAPP_LINK = 'https://wa.me/5950000000000';

const ecommerceLandingByLocale: Record<Locale, EcommerceLandingContent> = {
	es: {
		meta: {
			title: 'Mi Motor Ecommerce para Marcas y Negocios',
			description:
				'Un motor ecommerce propio, adaptado a tu negocio y alojado por mí, para que puedas vender online sin arrancar desde cero ni cargar con la parte técnica.',
		},
		nav: {
			label: 'Ecommerce',
			items: [
				{ id: 'situations', label: 'Buen fit' },
				{ id: 'work', label: 'Producto' },
				{ id: 'process', label: 'Implementación' },
				{ id: 'cta', label: 'Contacto' },
			],
		},
		hero: {
			badge: 'Mi motor ecommerce',
			title: 'Una base ecommerce propia para negocios que quieren vender online sin arrancar todo desde cero.',
			description:
				'Trabajo sobre un motor que ya desarrollé, lo adapto a lo que necesitás y lo dejo funcionando en mi infraestructura. La idea es que vos puedas enfocarte en vender, mientras yo me ocupo de que la parte técnica quede bien resuelta.',
			primaryCtaLabel: 'Hablemos por WhatsApp',
			secondaryCtaLabel: 'Conocé mi perfil',
			trustNote:
				'No se trata de “te vendo el sistema y arreglate”. Me involucro para que la implementación quede bien armada y tenga continuidad en el tiempo.',
			fitEyebrow: 'Buen fit',
			fitTitle: 'Tiene sentido si querés salir online con algo sólido, sin meterte a construir una plataforma desde cero.',
			fitItems: [
				'Querés una base ya probada, pero ajustada a tu marca, tu operación y tu forma de vender.',
				'Preferís no tener que ocuparte de hosting, servidores o mantenimiento técnico.',
				'Te sirve trabajar con alguien que pueda resolver producto, implementación y criterio comercial/técnico en conjunto.',
			],
			commitmentsEyebrow: 'Qué contratás',
			commitmentsTitle: 'No es solo una tienda: es una base bien pensada y acompañada.',
			commitments: [
				{
					label: 'Base propia',
					value: 'Trabajo sobre un motor que ya conozco a fondo y que puedo seguir mejorando con el tiempo.',
				},
				{
					label: 'Hosting',
					value: 'La implementación corre en mi servidor, así que no tenés que preocuparte por hosting, servidores o infraestructura.',
				},
				{
					label: 'Soporte opcional',
					value: 'Si después querés un acompañamiento más activo, lo podemos sumar. Y si no, la base igual queda funcionando dentro de un esquema que ya mantengo yo.',
				},
			],
		},
		situations: {
			eyebrow: 'Para quién calza',
			title: 'Funciona mejor para negocios que quieren enfocarse en vender, no en ponerse a resolver la parte técnica.',
			description:
				'Le sirve especialmente a negocios que valoran velocidad, criterio y continuidad, y que prefieren tener la parte técnica bien acompañada en vez de cargar con todo eso por su cuenta.',
			leadTitle: 'Normalmente esto encaja por alguna de estas razones.',
			leadDescription:
				'A veces hay que salir rápido sin arrancar un desarrollo desde cero. A veces se busca una solución privada y más controlada. Y a veces lo más valioso es tener a la misma persona detrás del producto y de la implementación.',
			scenarios: [
				{
					kicker: 'Salida rápida',
					title: 'Querés lanzar un ecommerce con una base más sólida que una tienda improvisada.',
					description:
						'Mi producto acorta camino: no empezamos de cero, sino desde un motor ya pensado para operar y crecer con más orden.',
				},
				{
					kicker: 'Producto + partner',
					title: 'No querés comprar un sistema y después quedarte solo.',
					description:
						'Además de implementar el ecommerce, puedo acompañarte con decisiones, ajustes y consultoría para que todo encaje mejor con tu operación.',
				},
				{
					kicker: 'Continuidad',
					title: 'Te sirve que la misma persona que armó la base siga cerca para hacerla evolucionar.',
					description:
						'Eso hace que las mejoras, los ajustes y las decisiones futuras salgan con más contexto y menos desgaste.',
				},
			],
		},
		work: {
			eyebrow: 'Qué incluye',
			title: 'No vendo horas sueltas. Trabajo sobre una base propia y la adapto a tu negocio.',
			description:
				'El ecommerce nace sobre mi motor. A partir de ahí definimos qué hay que adaptar, cómo se sostiene la operación y en qué puntos tiene sentido acompañarte más de cerca.',
			noteTitle: 'La ventaja está en arrancar desde una base que ya existe.',
			noteDescription:
				'Como trabajo sobre un producto que ya conozco y mantengo, la implementación suele ser más clara, más estable y mucho más fácil de sostener con el tiempo.',
			items: [
				{
					title: 'Implementación sobre una base propia',
					description:
						'La tienda se monta sobre una base que ya desarrollé y mantengo yo. Eso permite salir con más orden, menos riesgo y una continuidad mucho más clara.',
					examples: ['Catálogo', 'Checkout', 'Operación base', 'Infraestructura controlada'],
				},
				{
					title: 'Adaptación a tu negocio',
					description:
						'Trabajo para que el producto calce con tu operación, tu propuesta comercial y la experiencia que querés dar, sin convertir cada ajuste en algo eterno.',
					examples: ['Marca', 'Flujos de compra', 'Configuración comercial', 'Prioridades reales'],
				},
				{
					title: 'Consultoría para mejorar el proceso',
					description:
						'Además del producto, puedo ayudarte a ordenar decisiones de operación, contenido, venta y evolución del canal para aprovechar mejor la herramienta.',
					examples: ['Proceso comercial', 'Operación', 'Priorización', 'Decisiones de evolución'],
				},
				{
					title: 'Hosting y soporte según necesidad',
					description:
						'Yo me encargo del hosting para que no tengas que meterte con servidores, dominios o infraestructura. Y si después querés un acompañamiento más cercano, también lo podemos sumar.',
					examples: ['Hosting gestionado', 'Mantenimiento base', 'Soporte opcional', 'Continuidad técnica'],
				},
			],
		},
		process: {
			eyebrow: 'Cómo lo trabajo',
			title: 'La base del producto ya está resuelta. El trabajo está en adaptarla bien a tu negocio.',
			description:
				'Primero entendemos qué necesitás, después adapto la implementación y, si hace falta, sigo acompañando la evolución con consultoría y soporte para que el canal crezca con más claridad.',
			principles: [
				{
					title: 'Primero negocio, después configuración',
					description:
						'Antes de tocar nada, necesito entender cómo vendés, cómo operás y qué tipo de canal querés construir.',
				},
				{
					title: 'Producto estable, ajustes con criterio',
					description:
						'La base técnica ya existe. Lo importante es decidir bien qué adaptar para que el ecommerce se sienta propio y siga siendo simple de mantener.',
				},
				{
					title: 'Continuidad si suma valor',
					description:
						'Si querés, sigo cerca con soporte y consultoría. Si no, igual te queda una implementación corriendo dentro de una infraestructura que ya administro yo.',
				},
			],
			steps: [
				{
					title: 'Entender el negocio',
					description:
						'Reviso catálogo, proceso comercial, operación y expectativas para ver cómo hacer que la base encaje bien con tu caso.',
				},
				{
					title: 'Definir la implementación',
					description:
						'Tomamos la base existente y definimos qué se adapta, qué se configura y cómo conviene ordenar la salida.',
				},
				{
					title: 'Salir con una base controlada',
					description:
						'La tienda queda montada sobre mi infraestructura y dentro de un esquema técnico que conozco de punta a punta.',
				},
				{
					title: 'Acompañar la evolución',
					description:
						'Después podemos seguir con soporte, mejoras y consultoría para que el canal evolucione con más orden y menos improvisación.',
				},
			],
		},
		cta: {
			eyebrow: 'Contacto',
			title: 'Si te sirve tener una base ecommerce sólida y bien acompañada, conversemos.',
			description:
				'Contame qué necesitás vender, cómo operás hoy y qué esperás del canal. Si veo que mi producto encaja con tu caso, te voy a proponer la mejor forma de implementarlo y acompañarlo.',
			supportNote:
				'La propuesta ya incluye el producto corriendo en mi servidor, así que la infraestructura no te tiene que sacar foco. Y si más adelante querés más acompañamiento, también lo vemos.',
			primaryButtonLabel: 'Escribime por WhatsApp',
			secondaryButtonLabel: 'Ver mi experiencia',
		},
		links: {
			whatsapp: DEFAULT_WHATSAPP_LINK,
			about: '/es/sobre-mi',
		},
	},
	en: {
		meta: {
			title: 'Private Ecommerce Engine for Brands and Growing Businesses',
			description:
				'A private ecommerce engine, adapted to your business and hosted by me, so you can sell online without starting from zero or carrying the technical side yourself.',
		},
		nav: {
			label: 'Ecommerce',
			items: [
				{ id: 'situations', label: 'Good fit' },
				{ id: 'work', label: 'Product' },
				{ id: 'process', label: 'Implementation' },
				{ id: 'cta', label: 'Contact' },
			],
		},
		hero: {
			badge: 'Private ecommerce engine',
			title: 'A private ecommerce foundation for businesses that want to sell online without building everything from scratch.',
			description:
				'I work on top of an engine I already built, adapt it to what you need, and keep it running on my own infrastructure. The idea is that you can stay focused on selling, while I make sure the technical side is properly taken care of.',
			primaryCtaLabel: 'Let’s chat on WhatsApp',
			secondaryCtaLabel: 'See my background',
			trustNote:
				'This is not a “here is the software, good luck” kind of offer. I stay involved so the implementation is well put together and has continuity over time.',
			fitEyebrow: 'Good fit',
			fitTitle: 'It makes sense if you want something solid without having to build the whole product from zero.',
			fitItems: [
				'You want a base that already works, but still adapted to your brand, your operation, and the way you sell.',
				'You would rather not deal with hosting, servers, or technical maintenance yourself.',
				'You want product, implementation, and practical technical/business judgment in the same partnership.',
			],
			commitmentsEyebrow: 'What you are buying',
			commitmentsTitle: 'It is more than just a store. It is a solid base with ongoing support behind it.',
			commitments: [
				{
					label: 'Private foundation',
					value: 'I work on top of an engine I already know in depth and can continue improving over time.',
				},
				{
					label: 'Hosted with me',
					value: 'The implementation runs on my server, so you do not have to worry about hosting, servers, or infrastructure.',
				},
				{
					label: 'Optional support',
					value: 'If you want a closer follow-through after launch, we can add support. If not, the base still runs inside a setup I already maintain.',
				},
			],
		},
		situations: {
			eyebrow: 'Who this fits',
			title: 'This works best for businesses that want to focus on selling, not on figuring out the technical layer themselves.',
			description:
				'It is especially useful for businesses that value speed, judgment, and continuity, and would rather have the technical side properly supported than carry all of that internally.',
			leadTitle: 'Most of the time, this makes sense for one of these reasons.',
			leadDescription:
				'Sometimes the priority is launching quickly without starting from zero. Sometimes it is having a more private and controlled setup. And sometimes the real value is having the same person behind both the product and the implementation.',
			scenarios: [
				{
					kicker: 'Fast launch',
					title: 'You want to launch on something stronger than an improvised store setup.',
					description:
						'My product shortens the path. We are not starting from zero, but from an engine already designed to operate and grow with more structure.',
				},
				{
					kicker: 'Product + partner',
					title: 'You do not want to buy a system and then be left alone with it.',
					description:
						'Beyond the implementation itself, I can stay involved with decisions, adjustments, and consulting so everything fits your operation better over time.',
				},
				{
					kicker: 'Continuity',
					title: 'It helps if the same person who put the foundation together can stay close as it evolves.',
					description:
						'That makes future improvements, adjustments, and decisions much easier because they happen with more context and less friction.',
				},
			],
		},
		work: {
			eyebrow: 'What is included',
			title: 'I am not selling isolated dev hours. I work on top of a private base and adapt it to your business.',
			description:
				'The ecommerce channel starts on top of my engine. From there we define what needs to be adapted, how the operation should be supported, and where it makes sense for me to stay more involved.',
			noteTitle: 'The advantage is starting from something that already exists.',
			noteDescription:
				'Because I am working on top of a product I already know and maintain, the implementation tends to be clearer, more stable, and much easier to support over time.',
			items: [
				{
					title: 'Implementation on top of a private foundation',
					description:
						'The store runs on a base I already built and maintain. That makes it possible to launch with more order, less risk, and much clearer continuity.',
					examples: ['Catalog', 'Checkout', 'Core operation', 'Controlled infrastructure'],
				},
				{
					title: 'Adaptation to your business',
					description:
						'I work to make the product fit your operation, commercial model, and customer experience without turning every adjustment into something endless.',
					examples: ['Brand fit', 'Buying flows', 'Commercial setup', 'Real priorities'],
				},
				{
					title: 'Consulting to improve the process',
					description:
						'Besides the product itself, I can help you organize operating decisions, content flow, sales logic, and channel evolution so the tool is used with more intention.',
					examples: ['Commercial process', 'Operations', 'Prioritization', 'Evolution decisions'],
				},
				{
					title: 'Hosting and support when needed',
					description:
						'I take care of hosting so you do not have to get into servers, domains, or infrastructure. And if later you want a closer follow-through, we can add that too.',
					examples: ['Managed hosting', 'Core maintenance', 'Optional support', 'Technical continuity'],
				},
			],
		},
		process: {
			eyebrow: 'How I work',
			title: 'The product foundation is already there. The real work is adapting it properly to your business.',
			description:
				'First I understand what you need, then I adapt the implementation, and if useful I stay involved with consulting and support so the channel can grow with more clarity.',
			principles: [
				{
					title: 'Business first, configuration second',
					description:
						'Before touching anything, I need to understand how you sell, how you operate, and what kind of channel you want to build.',
				},
				{
					title: 'Stable product, deliberate adjustments',
					description:
						'The technical base already exists. The important part is deciding what should be adapted so the ecommerce feels like yours while staying simple to maintain.',
				},
				{
					title: 'Continuity when it adds value',
					description:
						'If useful, I can stay close with support and consulting. If not, the ecommerce channel still runs inside an environment I already manage.',
				},
			],
			steps: [
				{
					title: 'Understand the business',
					description:
						'I review your catalog, sales flow, operations, and expectations to see how to make the foundation fit your case properly.',
				},
				{
					title: 'Define the implementation',
					description:
						'We take the existing base and define what should be adapted, what should be configured, and how it makes the most sense to structure the launch.',
				},
				{
					title: 'Launch on a controlled base',
					description:
						'The store is deployed on my infrastructure and inside a technical setup I know end to end.',
				},
				{
					title: 'Support the evolution',
					description:
						'After launch, we can continue with support, improvements, and consulting so the channel evolves with more order and less improvisation.',
				},
			],
		},
		cta: {
			eyebrow: 'Contact',
			title: 'If it helps to have a solid ecommerce base with someone properly behind it, let’s talk.',
			description:
				'Tell me what you need to sell, how you operate today, and what you expect from the channel. If I see that my product fits your case, I will suggest the best way to implement it and support it.',
			supportNote:
				'The offer already includes the product running on my server, so infrastructure does not need to take your attention. And if later you want more support, we can look at that too.',
			primaryButtonLabel: 'Message me on WhatsApp',
			secondaryButtonLabel: 'See my experience',
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
