import type { Locale } from '@/i18n/locales';
import type { WebLandingContent } from '@/types/landing/content';

const DEFAULT_WHATSAPP_LINK_ES =
    'https://wa.me/595973779205?text=Hola%20Nico!%2C%20quiero%20hacer%20una%20web%20y%20me%20gustar%C3%ADa%20contarte%20mi%20idea.';
const DEFAULT_WHATSAPP_LINK_EN =
    'https://wa.me/595973779205?text=Hi%20Nico!%20I%20want%20to%20build%20a%20website%20and%20would%20like%20to%20tell%20you%20about%20my%20project.';

const webLandingByLocale: Record<Locale, WebLandingContent> = {
    es: {
        meta: {
            title: 'Webs Profesionales para Negocios que Quieren Crecer',
            description:
                'Desarrollo webs profesionales para presentar tu negocio con claridad, transmitir confianza y generar más consultas.',
        },
        nav: {
            label: 'Quiero una web',
            items: [
                { id: 'challenges', label: 'Qué resolvés' },
                { id: 'solutions', label: 'Tipos de web' },
                { id: 'process', label: 'Proceso' },
                { id: 'profile', label: 'Por qué conmigo' },
                { id: 'contact', label: 'Contacto' },
            ],
        },
        hero: {
            badge: 'Web profesional para tu negocio',
            title: 'Creá una web profesional para presentar tu negocio con más claridad.',
            description:
                'Una web bien resuelta te ayuda a explicar qué hacés, generar más confianza y convertir visitas en consultas reales por WhatsApp o formulario.',
            primaryCtaLabel: 'Hablar por WhatsApp',
            secondaryCtaLabel: 'Ver tipos de solución',
        },
        challenges: {
            eyebrow: 'Qué podés resolver',
            title: 'Problemas comunes que una web bien pensada puede resolver.',
            description:
                'Si hoy dependés solo de redes o mensajes sueltos, una web te permite ordenar la información y mejorar cómo te perciben.',
            items: [
                {
                    title: 'Sin presencia online profesional',
                    description:
                        'Tu marca existe, pero no tiene un espacio propio y claro donde mostrar su propuesta.',
                },
                {
                    title: 'Información dispersa',
                    description:
                        'Datos clave repartidos en Instagram, WhatsApp y PDFs que el cliente no termina de entender.',
                },
                {
                    title: 'Oferta poco clara',
                    description:
                        'Quien te visita no entiende rápido qué ofrecés ni por qué elegirte.',
                },
                {
                    title: 'Pocas consultas calificadas',
                    description:
                        'Llegan mensajes, pero sin contexto ni intención clara de compra o contratación.',
                },
                {
                    title: 'Falta de confianza inicial',
                    description:
                        'Tu negocio necesita verse más sólido para cerrar mejor desde el primer contacto.',
                },
            ],
        },
        solutions: {
            eyebrow: 'Tipos de soluciones',
            title: 'No hay una única web: cada opción responde a un objetivo distinto.',
            description:
                'Si todavía no tenés claro qué necesitás, este comparador te ayuda a elegir según tu objetivo actual.',
            columns: {
                solution: 'Solución',
                objective: 'Objetivo principal',
                outcome: 'Resultado esperado',
            },
            rows: [
                {
                    solution: 'Web institucional',
                    objective: 'Tener presencia online profesional y explicar quién sos.',
                    outcome: 'Marca más clara y mejor primera impresión.',
                },
                {
                    solution: 'Landing page',
                    objective: 'Captar consultas de una oferta o campaña puntual.',
                    outcome: 'Más contactos calificados en menos pasos.',
                },
                {
                    solution: 'Web con catálogo simple',
                    objective: 'Mostrar servicios o productos de forma ordenada.',
                    outcome: 'Cliente entiende mejor qué ofrecés y cómo comprar.',
                },
                {
                    solution: 'Web con panel administrador',
                    objective: 'Actualizar contenido sin depender de terceros.',
                    outcome: 'Más autonomía para mantener la web vigente.',
                },
                {
                    solution: 'Web con funciones especiales',
                    objective: 'Digitalizar procesos como reservas, turnos o flujos internos.',
                    outcome: 'Mejor productividad y menos tareas manuales.',
                },
                {
                    solution: 'Web custom de productividad/analítica',
                    objective: 'Conectar operaciones, métricas y decisiones de negocio.',
                    outcome: 'Visibilidad operativa y crecimiento con datos.',
                },
            ],
        },
        process: {
            eyebrow: 'Cómo funciona el proceso',
            title: 'Un recorrido claro, paso a paso, para llegar a una web bien resuelta.',
            description:
                'En cada etapa tenés claridad de lo que hacemos y lo que te llevás como avance.',
            steps: [
                {
                    title: 'Charla inicial',
                    description:
                        'Entendemos tu negocio, tu objetivo y tu contexto actual.',
                },
                {
                    title: 'Definición de alcance',
                    description:
                        'Alineamos secciones, funcionalidades y contenido necesario.',
                },
                {
                    title: 'Diseño y propuesta visual',
                    description:
                        'Validamos la dirección estética y la experiencia de navegación.',
                },
                {
                    title: 'Desarrollo',
                    description:
                        'Construcción técnica de la web con foco en claridad y performance.',
                },
                {
                    title: 'Revisión y ajustes',
                    description:
                        'Ajustes finales antes de publicar.',
                },
                {
                    title: 'Publicación',
                    description:
                        'Salida a producción en dominio y hosting.',
                },
            ],
        },
        profile: {
            eyebrow: 'Por qué trabajar conmigo',
            title: 'Diseño, desarrollo y criterio para webs pensadas para negocios reales.',
            description:
                'No solo ejecuto tareas: te ayudo a tomar buenas decisiones para construir una web útil hoy y escalable mañana.',
            items: [
                {
                    title: 'Diseño limpio y profesional',
                    description:
                        'Cada sección se construye para comunicar mejor y mejorar la percepción de tu marca.',
                },
                {
                    title: 'Comunicación clara durante el proceso',
                    description:
                        'Tenés visibilidad continua de avances, decisiones y próximos pasos.',
                },
                {
                    title: 'Adaptada a celular y preparada para crecer',
                    description:
                        'La base queda lista para iterar nuevas secciones o funcionalidades cuando lo necesites.',
                },
            ],
            buttonLabel: 'Ver mi perfil completo',
        },
        contact: {
            eyebrow: 'Contacto',
            title: 'Si querés crear una web profesional para tu negocio, hablemos.',
            description:
                'Contame tu idea y te propongo la mejor forma de construirla con foco en claridad comercial y resultados.',
            formTitle: 'Dejame algunos datos',
            formDescription:
                'Completá tu nombre y dejame email o WhatsApp. Te voy a responder en menos de 24 horas.',
            nameLabel: 'Nombre',
            namePlaceholder: 'Tu nombre',
            emailLabel: 'Email',
            emailPlaceholder: 'tuemail@empresa.com',
            whatsappLabel: 'WhatsApp',
            whatsappPlaceholder: 'Tu numero de WhatsApp',
            projectTypeLabel: 'Tipo de proyecto',
            projectTypeOptions: [
                { value: '', label: 'Todavía no estoy seguro' },
                { value: 'landing', label: 'Landing page' },
                { value: 'institutional', label: 'Web institucional' },
                { value: 'catalog', label: 'Web con catálogo simple' },
                { value: 'admin', label: 'Web con panel administrador' },
                { value: 'special', label: 'Web con funciones especiales' },
            ],
            messageLabel: 'Idea o contexto',
            messagePlaceholder:
                'Contame brevemente qué necesitás resolver con tu web.',
            helperText:
                'Nombre es obligatorio. Email o WhatsApp: al menos uno de los dos.',
            submitLabel: 'Quiero crear mi web',
            submittingLabel: 'Enviando...',
            whatsappCtaLabel: 'Consultar por mi proyecto',
            whatsappNote:
                'Si preferís avanzar más rápido, escribime directo por WhatsApp.',
            nameRequiredMessage:
                'Necesito al menos tu nombre para poder responderte.',
            contactRequiredMessage:
                'Dejame email o WhatsApp, al menos uno de los dos.',
            notConfiguredMessage:
                'El formulario todavía no está conectado. Por ahora escribime por WhatsApp.',
            errorMessage:
                'Hubo un problema al intentar enviar el formulario. Probá de nuevo o escribime por WhatsApp.',
            successMessage:
                'Mensaje enviado. Me pondré en contacto contigo en menos de 24 horas.',
        },
        links: {
            whatsapp: DEFAULT_WHATSAPP_LINK_ES,
            about: '/es/sobre-mi',
        },
    },
    en: {
        meta: {
            title: 'Professional Websites for Businesses That Want to Grow',
            description:
                'I build professional websites that present your business clearly, build trust, and generate better inbound leads.',
        },
        nav: {
            label: 'I need a website',
            items: [
                { id: 'challenges', label: 'Problems' },
                { id: 'solutions', label: 'Website types' },
                { id: 'process', label: 'Process' },
                { id: 'profile', label: 'Why me' },
                { id: 'contact', label: 'Contact' },
            ],
        },
        hero: {
            badge: 'Professional website for your business',
            title: 'Build a professional website that explains your business clearly.',
            description:
                'A well-crafted website helps you communicate what you do, increase trust, and turn visits into real inquiries through WhatsApp or forms.',
            primaryCtaLabel: 'Chat on WhatsApp',
            secondaryCtaLabel: 'See solution types',
        },
        challenges: {
            eyebrow: 'What this solves',
            title: 'Common business pain points a good website can fix.',
            description:
                'If you rely only on social media and chat messages, a website helps centralize and clarify your value proposition.',
            items: [
                { title: 'No professional online presence', description: 'Your brand has no clear digital home.' },
                { title: 'Scattered information', description: 'Key details are split across social media and chats.' },
                { title: 'Unclear offer', description: 'Visitors do not quickly understand what you offer.' },
                { title: 'Low-quality inquiries', description: 'You get messages, but with weak purchase intent.' },
                { title: 'Weak first impression', description: 'Your business needs stronger initial trust online.' },
            ],
        },
        solutions: {
            eyebrow: 'Solution types',
            title: 'Different goals require different website solutions.',
            description: 'Use this table as a quick decision guide.',
            columns: {
                solution: 'Solution',
                objective: 'Main objective',
                outcome: 'Expected outcome',
            },
            rows: [
                { solution: 'Institutional website', objective: 'Establish a professional online presence.', outcome: 'Clear trust and brand presentation.' },
                { solution: 'Landing page', objective: 'Capture leads for a focused campaign.', outcome: 'Higher lead conversion.' },
                { solution: 'Website with simple catalog', objective: 'Organize your products/services clearly.', outcome: 'Better understanding and inquiries.' },
                { solution: 'Website with admin panel', objective: 'Update content with autonomy.', outcome: 'Faster internal publishing cycles.' },
                { solution: 'Website with special features', objective: 'Digitalize reservations, appointments, or workflows.', outcome: 'Less manual overhead.' },
                { solution: 'Custom web for productivity/analytics', objective: 'Connect operations and decision-making with data.', outcome: 'Operational visibility and scalable growth.' },
            ],
        },
        process: {
            eyebrow: 'How the process works',
            title: 'A clear narrative timeline from idea to launch.',
            description: 'Each stage shows concrete progress.',
            steps: [
                { title: 'Initial call', description: 'We align on business goals and context.' },
                { title: 'Scope definition', description: 'We define sections, content, and key features.' },
                { title: 'Visual proposal', description: 'We validate look, hierarchy, and UX direction.' },
                { title: 'Development', description: 'Implementation focused on quality and performance.' },
                { title: 'Review and refinements', description: 'Final adjustments before publication.' },
                { title: 'Launch', description: 'Production setup on hosting and domain.' },
            ],
        },
        profile: {
            eyebrow: 'Why work with me',
            title: 'Practical execution and clear communication for real business websites.',
            description:
                'I help you make better product and technical decisions, not just ship pages.',
            items: [
                {
                    title: 'Clean and professional design',
                    description:
                        'Each section is built to communicate clearly and support conversion.',
                },
                {
                    title: 'Clear communication throughout',
                    description:
                        'You get visibility over decisions, progress, and next steps.',
                },
                {
                    title: 'Mobile-ready and scalable foundation',
                    description:
                        'Your website starts solid and can evolve as your business grows.',
                },
            ],
            buttonLabel: 'See my full profile',
        },
        contact: {
            eyebrow: 'Contact',
            title: 'If you want to build a professional website, let’s talk.',
            description:
                'Share your idea and I will suggest the best execution path for your business goals.',
            formTitle: 'Leave a few details',
            formDescription:
                'Add your name and leave your email or WhatsApp. I will reply within 24 hours.',
            nameLabel: 'Name',
            namePlaceholder: 'Your name',
            emailLabel: 'Email',
            emailPlaceholder: 'you@company.com',
            whatsappLabel: 'WhatsApp',
            whatsappPlaceholder: 'Your WhatsApp number',
            projectTypeLabel: 'Project type',
            projectTypeOptions: [
                { value: '', label: 'I am not sure yet' },
                { value: 'landing', label: 'Landing page' },
                { value: 'institutional', label: 'Institutional website' },
                { value: 'catalog', label: 'Website with simple catalog' },
                { value: 'admin', label: 'Website with admin panel' },
                { value: 'special', label: 'Website with custom features' },
            ],
            messageLabel: 'Idea or context',
            messagePlaceholder:
                'Tell me briefly what your website should help you achieve.',
            helperText:
                'Name is required. Email or WhatsApp: at least one of the two.',
            submitLabel: 'I want to build my website',
            submittingLabel: 'Sending...',
            whatsappCtaLabel: 'Ask about my project',
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
        links: {
            whatsapp: DEFAULT_WHATSAPP_LINK_EN,
            about: '/en/about-me',
        },
    },
};

export function getWebLandingContent(locale: Locale): WebLandingContent {
    return webLandingByLocale[locale];
}
