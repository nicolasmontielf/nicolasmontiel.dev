import type { CommercialProfileContent } from '@/types/commercial-profile';
import type { Locale } from '@/i18n/locales';
import {
    getCommercialProfilePath,
    getCommercialServicePath,
} from '@/i18n/routing';

const emailHref = 'mailto:nicolasmontielf@gmail.com';
const linkedinHref =
    'https://www.linkedin.com/in/nicolasmontielf/?locale=en_US';

const commercialProfileByLocale: Record<Locale, CommercialProfileContent> = {
    es: {
        locale: 'es',
        meta: {
            title: 'Por qué trabajar conmigo | Nicolás Montiel',
            description:
                'Conocé por qué puedo ayudarte a crear una web o ecommerce que genere confianza, explique mejor tu negocio y acompañe tus objetivos.',
        },
        navbar: {
            label: 'Por que trabajar conmigo',
            items: [
                { id: 'profile', label: 'Perfil' },
                { id: 'why-work', label: 'Por que trabajar conmigo' },
                { id: 'process', label: 'Como trabajo' },
                { id: 'contexts', label: 'Rubros' },
                { id: 'contact', label: 'Contacto' },
            ],
            primaryCtaLabel: 'Quiero una web',
            primaryCtaHref: getCommercialServicePath('web', 'es'),
            secondaryCtaLabel: 'Quiero un ecommerce',
            secondaryCtaHref: getCommercialServicePath('ecommerce', 'es'),
        },
        profile: {
            title: 'Te ayudo a convertir tu idea, servicio o negocio en una presencia digital clara, confiable y pensada para vender mejor.',
            paragraphs: [
                'Soy Nicolás Montiel, de Paraguay. Hace más de 8 años trabajo con empresas, equipos y emprendedores que necesitan mostrar mejor lo que hacen, ordenar su propuesta y generar más confianza desde el primer contacto.',
                'No me limito a “hacer una página”. Me involucro para entender tu negocio, lo que querés lograr y lo que tu cliente necesita ver para animarse a escribirte, comprar o pedir más información.',
            ],
            avatarAlt: 'Avatar de Nicolás Montiel',
            stats: [
                {
                    value: '+8',
                    label: 'años de experiencia',
                    description:
                        'Acompañando negocios que necesitan verse más profesionales y vender mejor.',
                },
                {
                    value: '13',
                    label: 'países',
                    description:
                        'Trabajando con clientes y equipos de forma remota e internacional.',
                },
                {
                    value: '+10',
                    label: 'sectores diferentes',
                    description:
                        'Marketing, ecommerce, SaaS, logística, salud, educación y servicios.',
                },
                {
                    value: '+40',
                    label: 'proyectos',
                    description:
                        'Entre webs, landings, ecommerce, mejoras de producto y procesos internos.',
                },
            ],
        },
        reasons: {
            eyebrow: 'Confianza antes que código',
            title: 'Por que trabajar conmigo',
            description:
                'Si vas a invertir en una web o ecommerce, necesitás a alguien que entienda qué querés lograr, no solo alguien que arme pantallas bonitas.',
            items: [
                {
                    title: 'Pienso en tu cliente',
                    description:
                        'La web tiene que responder las dudas de la persona que te visita y darle motivos para confiar en vos.',
                },
                {
                    title: 'Cuido cómo se vende tu propuesta',
                    description:
                        'Te ayudo a ordenar el mensaje para que se entienda rápido qué hacés, para quién es y por qué conviene elegirte.',
                },
                {
                    title: 'Trabajo con claridad',
                    description:
                        'Vas a saber qué estamos haciendo, por qué lo hacemos y qué decisiones conviene tomar en cada etapa.',
                },
                {
                    title: 'Me adapto a tu realidad',
                    description:
                        'No todos los negocios necesitan lo mismo. Ajusto la solución a tu contexto, presupuesto, etapa y prioridades.',
                },
            ],
        },
        process: {
            eyebrow: 'Una forma simple de avanzar',
            title: 'Como trabajo',
            description:
                'La idea es que el proceso no se vuelva pesado. Primero entendemos, después ordenamos, construimos y ajustamos con criterio.',
            steps: [
                {
                    label: 'Paso 1',
                    title: 'Entendemos tu objetivo',
                    description:
                        'Definimos qué querés conseguir: más consultas, más ventas, mejor imagen, menos trabajo manual o una presentación más profesional.',
                },
                {
                    label: 'Paso 2',
                    title: 'Ordenamos lo importante',
                    description:
                        'Separamos lo urgente de lo accesorio para invertir tiempo y energía en lo que realmente puede mover la aguja.',
                },
                {
                    label: 'Paso 3',
                    title: 'Construimos con intención',
                    description:
                        'Cada sección, texto y decisión visual tiene que ayudar a que la persona entienda, confíe y avance.',
                },
                {
                    label: 'Paso 4',
                    title: 'Pulimos antes de salir',
                    description:
                        'Revisamos detalles, corregimos fricciones y dejamos la solución lista para presentarse con seguridad.',
                },
            ],
        },
        contexts: {
            eyebrow: 'Experiencia en negocios reales',
            title: 'Rubros donde ya trabajé',
            description:
                'Haber trabajado con sectores distintos me ayuda a entender más rápido qué puede necesitar tu negocio, incluso si no sabés explicarlo en términos técnicos.',
            items: [
                {
                    title: 'Ecommerce',
                    description:
                        'Tiendas, procesos de compra y mejoras para vender con menos fricción.',
                },
                {
                    title: 'SaaS',
                    description: 'Productos digitales, registros, paneles y experiencias de usuario.',
                },
                {
                    title: 'Automatizacion',
                    description: 'Tareas repetitivas, formularios, reportes y ahorro de tiempo.',
                },
                {
                    title: 'Marketing',
                    description: 'Landings, campañas, mensajes claros y medición de resultados.',
                },
                {
                    title: 'Logistica',
                    description: 'Operaciones con varios pasos, estados y personas involucradas.',
                },
                {
                    title: 'Producto interno',
                    description:
                        'Herramientas para que los equipos trabajen mejor y con más orden.',
                },
                {
                    title: 'Educacion',
                    description:
                        'Comunicación, acceso a información y experiencias simples para usuarios.',
                },
                {
                    title: 'Salud',
                    description:
                        'Turnos, datos sensibles y recorridos donde la claridad importa mucho.',
                },
            ],
        },
        contact: {
            eyebrow: 'Próximo paso',
            title: 'Si querés que tu web transmita más confianza y trabaje mejor para tu negocio, hablemos.',
            primaryLabel: 'Escribirme por email',
            primaryHref: emailHref,
            secondaryLabel: 'Ver LinkedIn',
            secondaryHref: linkedinHref,
        },
    },
    en: {
        locale: 'en',
        meta: {
            title: 'Why work with me | Nicolás Montiel',
            description:
                'See why I can help you build a website or ecommerce experience that creates trust, explains your business better, and supports your goals.',
        },
        navbar: {
            label: 'Why work with me',
            items: [
                { id: 'profile', label: 'Profile' },
                { id: 'why-work', label: 'Why work with me' },
                { id: 'process', label: 'How I work' },
                { id: 'contexts', label: 'Contexts' },
                { id: 'contact', label: 'Contact' },
            ],
            primaryCtaLabel: 'I need a website',
            primaryCtaHref: getCommercialServicePath('web', 'en'),
            secondaryCtaLabel: 'I need ecommerce',
            secondaryCtaHref: getCommercialServicePath('ecommerce', 'en'),
        },
        profile: {
            title: 'I help turn your idea, service, or business into a clear, trustworthy digital presence built to sell better.',
            paragraphs: [
                "I'm Nicolás Montiel, from Paraguay. For more than 8 years I've worked with companies, teams, and founders who need to present what they do better, clarify their offer, and create trust from the very first visit.",
                "I don't just “build a page”. I get involved to understand your business, what you want to achieve, and what your customer needs to see before they decide to contact you, buy, or ask for more information.",
            ],
            avatarAlt: 'Avatar of Nicolas Montiel',
            stats: [
                {
                    value: '+8',
                    label: 'years of experience',
                    description:
                        'Helping businesses look more professional and sell with more clarity.',
                },
                {
                    value: '13',
                    label: 'countries',
                    description:
                        'Working remotely with clients and teams in different markets.',
                },
                {
                    value: '+10',
                    label: 'different sectors',
                    description:
                        'Marketing, ecommerce, SaaS, logistics, healthcare, education, and services.',
                },
                {
                    value: '+40',
                    label: 'projects',
                    description:
                        'Across websites, landing pages, ecommerce, product improvements, and internal workflows.',
                },
            ],
        },
        reasons: {
            eyebrow: 'Trust before code',
            title: 'Why work with me',
            description:
                'If you are investing in a website or ecommerce project, you need someone who understands what you want to achieve, not just someone who can assemble nice screens.',
            items: [
                {
                    title: 'I think about your customer',
                    description:
                        'Your website has to answer the questions people have and give them real reasons to trust you.',
                },
                {
                    title: 'I help sell your offer better',
                    description:
                        'I help organize the message so people quickly understand what you do, who it is for, and why they should choose you.',
                },
                {
                    title: 'I work with clarity',
                    description:
                        'You will know what we are doing, why we are doing it, and which decisions make sense at each stage.',
                },
                {
                    title: 'I adapt to your reality',
                    description:
                        'Not every business needs the same thing. I adjust the solution to your context, budget, stage, and priorities.',
                },
            ],
        },
        process: {
            eyebrow: 'A simple way to move forward',
            title: 'How I work',
            description:
                'The process should not feel heavy. We understand the goal, organize priorities, build with intention, and refine what needs attention.',
            steps: [
                {
                    label: 'Step 1',
                    title: 'We understand your goal',
                    description:
                        'We define what you want to get: more inquiries, more sales, better perception, less manual work, or a stronger presentation.',
                },
                {
                    label: 'Step 2',
                    title: 'We organize what matters',
                    description:
                        'We separate what is essential from what can wait, so time and energy go where they can actually make a difference.',
                },
                {
                    label: 'Step 3',
                    title: 'We build with intention',
                    description:
                        'Every section, piece of copy, and visual decision should help people understand, trust, and take the next step.',
                },
                {
                    label: 'Step 4',
                    title: 'We polish before launch',
                    description:
                        'We review details, remove friction, and make sure the result is ready to represent your business with confidence.',
                },
            ],
        },
        contexts: {
            eyebrow: 'Experience with real businesses',
            title: 'Sectors I have worked with',
            description:
                'Working across different sectors helps me understand faster what your business may need, even if you do not describe it in technical terms.',
            items: [
                {
                    title: 'Ecommerce',
                    description: 'Stores, buying journeys, and improvements that reduce friction.',
                },
                {
                    title: 'SaaS',
                    description: 'Digital products, signups, dashboards, and user journeys.',
                },
                {
                    title: 'Automation',
                    description: 'Repetitive tasks, forms, reports, and time-saving workflows.',
                },
                {
                    title: 'Marketing',
                    description: 'Landing pages, campaigns, clear messaging, and performance tracking.',
                },
                {
                    title: 'Logistics',
                    description: 'Operations with several steps, statuses, and people involved.',
                },
                {
                    title: 'Internal product',
                    description: 'Tools that help teams work with more clarity and order.',
                },
                {
                    title: 'Education',
                    description: 'Communication, access to information, and simple user experiences.',
                },
                {
                    title: 'Healthcare',
                    description: 'Scheduling, sensitive data, and flows where clarity matters.',
                },
            ],
        },
        contact: {
            eyebrow: 'Next step',
            title: 'If you want your website to build more trust and work better for your business, let’s talk.',
            primaryLabel: 'Send me an email',
            primaryHref: emailHref,
            secondaryLabel: 'View LinkedIn',
            secondaryHref: linkedinHref,
        },
    },
};

export function getCommercialProfileContent(locale: Locale) {
    return commercialProfileByLocale[locale];
}

export function getCommercialProfileCanonical(locale: Locale) {
    return getCommercialProfilePath(locale);
}
