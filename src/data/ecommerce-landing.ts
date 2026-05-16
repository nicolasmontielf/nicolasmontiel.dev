import type { Locale } from '@/i18n/locales';
import { getCommercialServicePath } from '@/i18n/routing';
import type { EcommerceLandingContent } from '@/types/landing/content';

const ecommerceLandingByLocale: Record<Locale, EcommerceLandingContent> = {
    es: {
        meta: {
            title: 'Ecommerce a Medida para Vender con Más Orden',
            description:
                'Desarrollo tiendas online para vender mejor, ordenar pedidos y facilitar pagos o ventas por WhatsApp.',
        },
        nav: {
            label: 'Quiero un ecommerce',
            items: [
                { id: 'challenges', label: 'Qué resolvés' },
                { id: 'solutions', label: 'Tipos de ecommerce' },
                { id: 'process', label: 'Proceso' },
                { id: 'profile', label: 'Por qué conmigo' },
                { id: 'contact', label: 'Contacto' },
            ],
        },
        hero: {
            badge: 'Tienda online a medida',
            title: 'Creá una tienda online para vender mejor y con más control.',
            description:
                'Un ecommerce bien diseñado simplifica tu operación, mejora la experiencia de compra y te ayuda a escalar sin depender de procesos manuales.',
            primaryCtaLabel: 'Hablar por WhatsApp',
            secondaryCtaLabel: 'Ver qué podés resolver',
        },
        challenges: {
            eyebrow: 'Qué podés resolver',
            title: 'Problemas reales que una tienda online puede simplificar.',
            description:
                'Si hoy todo pasa por mensajes sueltos y procesos manuales, una tienda bien armada te da estructura y previsibilidad.',
            items: [
                {
                    title: 'Ventas manuales por redes',
                    description:
                        'Cada venta depende de responder uno a uno, lo que consume tiempo y genera errores.',
                    icon: 'message-circle',
                },
                {
                    title: 'Consultas repetitivas',
                    description:
                        'Clientes preguntan precio, stock o fotos todo el día porque no tienen la info clara.',
                    icon: 'search',
                },
                {
                    title: 'Pedidos desordenados',
                    description:
                        'Falta un flujo consistente para registrar, confirmar y gestionar ventas.',
                    icon: 'package',
                },
                {
                    title: 'WhatsApp sin estructura',
                    description:
                        'Vendés por WhatsApp, pero sin un recorrido cómodo para cliente ni para tu equipo.',
                    icon: 'smartphone',
                },
                {
                    title: 'Sin pagos online o automatizaciones',
                    description:
                        'El negocio no aprovecha herramientas que reducen fricción y aceleran cierre.',
                    icon: 'credit-card',
                },
            ],
        },
        solutions: {
            eyebrow: 'Tipos de soluciones',
            title: 'Features que podés sumar según cómo vende tu negocio.',
            description:
                'No todo ecommerce necesita lo mismo desde el día uno. Podemos armar una versión base y sumar módulos según prioridad.',
            groups: [
                {
                    title: 'Base',
                    subtitle:
                        'Ideal para negocios que quieren ordenar su presencia y comenzar a vender.',
                    items: [
                        'Catálogo online',
                        'Ventas por WhatsApp',
                        'Estructura inicial de productos',
                    ],
                },
                {
                    title: 'Comercial',
                    subtitle:
                        'Para mejorar conversión y facilitar la compra directa en la tienda.',
                    items: [
                        'Carrito y checkout',
                        'Pagos online',
                        'Promociones y reglas comerciales',
                    ],
                },
                {
                    title: 'Operación',
                    subtitle:
                        'Para equipos que necesitan control interno y procesos más eficientes.',
                    items: [
                        'Gestión de stock',
                        'Gestión de envíos',
                        'Panel administrador e integraciones',
                    ],
                },
            ],
            bridgeToWeb: {
                title: '¿Tu objetivo hoy no es vender online?',
                description:
                    'Si primero necesitás presencia profesional, captación de consultas o una web institucional, podés empezar por ahí y evolucionar luego a ecommerce.',
                href: getCommercialServicePath('web', 'es'),
                ctaLabel: 'Ver opciones de web',
            },
        },
        process: {
            eyebrow: 'Cómo funciona el proceso',
            title: 'Implementación guiada para salir online con orden.',
            description:
                'Trabajamos por etapas para construir una tienda que no solo se vea bien, sino que funcione para vender.',
            steps: [
                {
                    title: 'Charla inicial',
                    description:
                        'Entendemos qué vendés, cómo operás y qué necesitás mejorar en tu canal digital.',
                },
                {
                    title: 'Definición de alcance',
                    description:
                        'Acordamos catálogo, flujo de compra, pagos y funcionalidades necesarias.',
                },
                {
                    title: 'Diseño y propuesta visual',
                    description:
                        'Definimos una experiencia clara para cliente y operación interna.',
                },
                {
                    title: 'Desarrollo',
                    description:
                        'Construimos la tienda y las integraciones principales según el alcance.',
                },
                {
                    title: 'Revisión y ajustes',
                    description:
                        'Validamos recorridos, textos y detalles de operación antes de publicar.',
                },
                {
                    title: 'Publicación',
                    description:
                        'Dejamos la tienda funcionando en dominio y hosting, lista para operar.',
                },
            ],
        },
        profile: {
            eyebrow: 'Por qué trabajar conmigo',
            title: 'Enfoque práctico para vender más y ordenar procesos.',
            description:
                'Te acompaño para implementar solo lo que agrega valor real a tu negocio en esta etapa.',
            items: [
                {
                    title: 'Experiencia en soluciones prácticas',
                    description:
                        'Priorizo decisiones que mejoran ventas y operación, no complejidad innecesaria.',
                },
                {
                    title: 'Integraciones útiles para ecommerce',
                    description:
                        'WhatsApp, pagos, paneles y flujos que simplifican tareas del día a día.',
                },
                {
                    title: 'Escalable y con acompañamiento',
                    description:
                        'Construimos una base que puedas mejorar con nuevas etapas cuando te convenga.',
                },
            ],
            buttonLabel: 'Ver mi perfil completo',
        },
        contact: {
            eyebrow: 'Contacto',
            title: 'Si querés crear tu tienda online, hablemos.',
            description:
                'Contame qué vendés y cómo vendés hoy para proponerte la mejor forma de pasar a una operación más ordenada.',
            formTitle: 'Dejame algunos datos',
            formDescription:
                'Completá tu nombre y dejame email o WhatsApp. Te voy a responder en menos de 24 horas.',
            nameLabel: 'Nombre',
            namePlaceholder: 'Tu nombre',
            emailLabel: 'Email',
            emailPlaceholder: 'tuemail@empresa.com',
            whatsappLabel: 'WhatsApp',
            whatsappPlaceholder: 'Tu numero de WhatsApp',
            helperText:
                'Nombre es obligatorio. Email o WhatsApp: al menos uno de los dos.',
            submitLabel: 'Quiero crear mi tienda online',
            submittingLabel: 'Enviando...',
            whatsappCtaLabel: 'Consultar por mi ecommerce',
            whatsappNote:
                'Si preferís avanzar rápido, escribime directo por WhatsApp.',
            nameRequiredMessage:
                'Necesito al menos tu nombre para poder responderte.',
            contactRequiredMessage:
                'Dejame email o WhatsApp, al menos uno de los dos.',
            notConfiguredMessage:
                'El formulario todavía no está conectado a un servicio de envío. Por ahora escribime por WhatsApp.',
            errorMessage:
                'Hubo un problema al intentar enviar el formulario. Probá de nuevo o escribime por WhatsApp.',
            successMessage:
                'Mensaje enviado. Me pondré en contacto contigo en menos de 24 horas.',
        },
    },
    en: {
        meta: {
            title: 'Custom Ecommerce Stores to Sell with More Control',
            description:
                'I build online stores to improve sales, organize orders, and support payments or WhatsApp-based selling.',
        },
        nav: {
            label: 'I need ecommerce',
            items: [
                { id: 'challenges', label: 'Problems' },
                { id: 'solutions', label: 'Store types' },
                { id: 'process', label: 'Process' },
                { id: 'profile', label: 'Why me' },
                { id: 'contact', label: 'Contact' },
            ],
        },
        hero: {
            badge: 'Custom online store',
            title: 'Build an online store that helps you sell better and operate with control.',
            description:
                'A well-built ecommerce setup improves customer experience, reduces manual work, and gives you a scalable sales channel.',
            primaryCtaLabel: 'Chat on WhatsApp',
            secondaryCtaLabel: 'See what it solves',
        },
        challenges: {
            eyebrow: 'What this solves',
            title: 'Real commerce pain points an online store can fix.',
            description:
                'If sales still happen mostly through manual chat workflows, a proper store gives structure and efficiency.',
            items: [
                {
                    title: 'Manual social selling',
                    description:
                        'Every sale depends on repetitive one-by-one responses.',
                    icon: 'message-circle',
                },
                {
                    title: 'Repeated customer questions',
                    description:
                        'Price, stock, and photo questions are asked constantly because info is not centralized.',
                    icon: 'search',
                },
                {
                    title: 'Unstructured order handling',
                    description:
                        'There is no consistent flow to register and manage orders.',
                    icon: 'package',
                },
                {
                    title: 'WhatsApp flow without order',
                    description:
                        'You sell via chat, but the buying experience is uncomfortable and hard to scale.',
                    icon: 'smartphone',
                },
                {
                    title: 'No online payments or automation',
                    description:
                        'Key opportunities to reduce friction and improve conversion are missing.',
                    icon: 'credit-card',
                },
            ],
        },
        solutions: {
            eyebrow: 'Solution types',
            title: 'Features you can include based on your operation.',
            description:
                'You do not need every feature from day one. We can launch lean and expand by priority.',
            groups: [
                {
                    title: 'Base',
                    subtitle:
                        'For businesses that want to start with a clear online catalog and lead flow.',
                    items: [
                        'Online catalog',
                        'WhatsApp sales flow',
                        'Initial product structure',
                    ],
                },
                {
                    title: 'Commercial',
                    subtitle:
                        'Focused on conversion and direct checkout experience.',
                    items: [
                        'Cart and checkout',
                        'Online payments',
                        'Commercial rules and promos',
                    ],
                },
                {
                    title: 'Operations',
                    subtitle:
                        'For teams that need internal control and scalable workflows.',
                    items: [
                        'Stock management',
                        'Shipping management',
                        'Admin panel and integrations',
                    ],
                },
            ],
            bridgeToWeb: {
                title: 'Not ready for a full store yet?',
                description:
                    'If your current priority is presenting your business and generating leads, a website can be the right first step.',
                href: getCommercialServicePath('web', 'en'),
                ctaLabel: 'Explore website options',
            },
        },
        process: {
            eyebrow: 'How the process works',
            title: 'Guided implementation from discovery to launch.',
            description:
                'We move in stages so the store is both commercial and operationally strong.',
            steps: [
                {
                    title: 'Initial call',
                    description:
                        'We review what you sell, how you currently sell, and what needs to improve.',
                },
                {
                    title: 'Scope definition',
                    description:
                        'We align on catalog structure, checkout flow, payments, and key features.',
                },
                {
                    title: 'Design direction',
                    description:
                        'We define a clear customer flow and visual structure before build.',
                },
                {
                    title: 'Development',
                    description:
                        'Store implementation with the agreed integrations and functionality.',
                },
                {
                    title: 'Review and refinements',
                    description:
                        'Final validation of buying flow and operational details before launch.',
                },
                {
                    title: 'Launch',
                    description:
                        'Go live with domain/hosting configured and a clean initial setup.',
                },
            ],
        },
        profile: {
            eyebrow: 'Why work with me',
            title: 'Practical ecommerce execution focused on sales and process clarity.',
            description:
                'I help you decide what to implement now and what to defer, so effort goes where it matters most.',
            items: [
                {
                    title: 'Practical, business-first approach',
                    description:
                        'Decisions are guided by sales impact and operational simplicity.',
                },
                {
                    title: 'Useful integrations',
                    description:
                        'WhatsApp, payments, and admin tools that support daily operations.',
                },
                {
                    title: 'Scalable foundation with support',
                    description:
                        'You launch with confidence and keep room for future growth.',
                },
            ],
            buttonLabel: 'See my full profile',
        },
        contact: {
            eyebrow: 'Contact',
            title: 'If you want to build your online store, let’s talk.',
            description:
                'Tell me what you sell and how you sell today, and I will suggest the best next step for your ecommerce setup.',
            formTitle: 'Leave a few details',
            formDescription:
                'Add your name and leave your email or WhatsApp. I will reply within 24 hours.',
            nameLabel: 'Name',
            namePlaceholder: 'Your name',
            emailLabel: 'Email',
            emailPlaceholder: 'you@company.com',
            whatsappLabel: 'WhatsApp',
            whatsappPlaceholder: 'Your WhatsApp number',
            helperText:
                'Name is required. Email or WhatsApp: at least one of the two.',
            submitLabel: 'I want to build my online store',
            submittingLabel: 'Sending...',
            whatsappCtaLabel: 'Ask about my ecommerce project',
            whatsappNote:
                'If you prefer the fastest route, message me directly on WhatsApp.',
            nameRequiredMessage:
                'I need at least your name so I can reply properly.',
            contactRequiredMessage:
                'Leave either an email or a WhatsApp number, at least one of the two.',
            notConfiguredMessage:
                'The form is not connected yet. For now, please message me on WhatsApp.',
            errorMessage:
                'There was a problem trying to send the form. Try again or contact me on WhatsApp.',
            successMessage:
                'Message sent. I will get back to you within 24 hours.',
        },
    },
};

export function getEcommerceLandingContent(
    locale: Locale,
): EcommerceLandingContent {
    return ecommerceLandingByLocale[locale];
}
