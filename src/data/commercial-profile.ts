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
                'Conocé cómo trabajo, en qué contextos ya aporté valor y por qué puedo ayudarte a construir algo útil para tu negocio.',
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
            title: 'Una presentacion directa, humana y con peso comercial.',
            paragraphs: [
                'Soy Nicolás Montiel, ingeniero de software de Paraguay. Hace más de 8 años trabajo con productos digitales, equipos distribuidos y negocios que necesitan construir mejor, ordenar procesos o vender con más claridad.',
                'No me interesa hacer una web “porque sí”. Me interesa entender qué querés lograr, qué problema de negocio hay atrás y cómo resolverlo con criterio, buena ejecución y una base que realmente sirva.',
            ],
            avatarAlt: 'Avatar de Nicolás Montiel',
            stats: [
                {
                    value: '8+',
                    label: 'anos de experiencia',
                    description:
                        'Construyendo producto, ecommerce y automatizaciones.',
                },
                {
                    value: '13',
                    label: 'paises',
                    description:
                        'Clientes o equipos con los que ya trabaje de forma remota.',
                },
                {
                    value: 'Multi-rubro',
                    label: 'contexto real',
                    description:
                        'SaaS, marketing, operaciones, conversion y procesos internos.',
                },
                {
                    value: '40+',
                    label: 'proyectos',
                    description:
                        'Entre mejoras de producto, landings, integraciones y procesos internos.',
                },
            ],
        },
        reasons: {
            eyebrow: 'Seccion 2',
            title: 'Por que trabajar conmigo',
            description:
                'La idea aca no es vender tareas sueltas, sino mostrar por que puedo aportar mas valor que una simple ejecucion puntual.',
            items: [
                {
                    title: 'Orientado a objetivos',
                    description:
                        'La prioridad no es construir por construir, sino ayudar a mover un resultado concreto.',
                },
                {
                    title: 'Criterio de negocio',
                    description:
                        'Me interesa entender conversion, operacion, marketing y contexto antes de proponer soluciones.',
                },
                {
                    title: 'Ejecucion clara',
                    description:
                        'Resolver bien tambien implica comunicar bien, bajar complejidad y mantener el proceso ordenado.',
                },
                {
                    title: 'Adaptacion real',
                    description:
                        'Distintos rubros piden prioridades distintas, y eso cambia la forma de pensar y ejecutar el trabajo.',
                },
            ],
        },
        process: {
            eyebrow: 'Seccion 3',
            title: 'Como trabajo',
            description:
                'La idea aca no es vender una metodologia cerrada, sino mostrar una forma de pensar y ejecutar con claridad.',
            steps: [
                {
                    label: 'Paso 1',
                    title: 'Entender el objetivo real',
                    description:
                        'Antes de pensar soluciones, conviene entender que se quiere lograr y por que eso importa.',
                },
                {
                    label: 'Paso 2',
                    title: 'Detectar lo importante',
                    description:
                        'No todo tiene el mismo peso. Aca entra el criterio para priorizar bien.',
                },
                {
                    label: 'Paso 3',
                    title: 'Ejecutar con foco',
                    description:
                        'Resolver bien, comunicar con claridad y evitar complejidad innecesaria.',
                },
                {
                    label: 'Paso 4',
                    title: 'Ajustar si hace falta',
                    description:
                        'La ejecucion no termina cuando algo sale. Tambien importa medir, aprender y mejorar.',
                },
            ],
        },
        contexts: {
            eyebrow: 'Seccion 4',
            title: 'Rubros y contextos donde ya aplique ese criterio',
            description:
                'El objetivo aca es mostrar amplitud y adaptacion sin volver a hablar de forma abstracta sobre mi perfil.',
            items: [
                {
                    title: 'Ecommerce',
                    description:
                        'Conversion e integraciones comerciales.',
                },
                {
                    title: 'SaaS',
                    description: 'Producto y flujos complejos.',
                },
                {
                    title: 'Automatizacion',
                    description: 'Procesos internos y eficiencia.',
                },
                {
                    title: 'Marketing',
                    description: 'Landings, CRO y analitica.',
                },
                {
                    title: 'Logistica',
                    description: 'Operaciones con varias dependencias.',
                },
                {
                    title: 'Producto interno',
                    description:
                        'Claridad operativa y mejoras de uso.',
                },
                {
                    title: 'Educacion',
                    description:
                        'Necesidades de comunicacion y acceso.',
                },
                {
                    title: 'Salud',
                    description:
                        'Contextos con prioridades especificas.',
                },
            ],
        },
        contact: {
            eyebrow: 'Seccion 5',
            title: 'Si buscas alguien que pueda pensar, ejecutar y acompanar bien el proceso, hablemos.',
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
                'See how I work, the kinds of business contexts I have already helped, and why I can be a strong technical partner for your next project.',
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
            title: 'A direct, human introduction with real commercial weight.',
            paragraphs: [
                "I'm Nicolás Montiel, a software engineer from Paraguay. For more than 8 years I've worked with digital products, distributed teams, and businesses that need to build better, streamline operations, or sell with more clarity.",
                "I'm not interested in building a website just for the sake of it. I care about understanding what you want to achieve, what business problem sits behind it, and how to solve it with judgment, strong execution, and a foundation that actually helps.",
            ],
            avatarAlt: 'Avatar of Nicolas Montiel',
            stats: [
                {
                    value: '8+',
                    label: 'years of experience',
                    description:
                        'Building product, ecommerce, and automation flows.',
                },
                {
                    value: '13',
                    label: 'countries',
                    description:
                        'Clients or teams I have worked with remotely.',
                },
                {
                    value: 'Multi-sector',
                    label: 'real context',
                    description:
                        'SaaS, marketing, operations, conversion, and internal processes.',
                },
                {
                    value: '40+',
                    label: 'projects',
                    description:
                        'Across product improvements, landing pages, integrations, and internal systems.',
                },
            ],
        },
        reasons: {
            eyebrow: 'Section 2',
            title: 'Why work with me',
            description:
                'This section is not about selling isolated tasks. It is about showing why I can bring more value than simple execution alone.',
            items: [
                {
                    title: 'Goal-oriented',
                    description:
                        'The priority is not just building something, but helping move a meaningful result.',
                },
                {
                    title: 'Business judgment',
                    description:
                        'I care about understanding conversion, operations, marketing, and context before proposing solutions.',
                },
                {
                    title: 'Clear execution',
                    description:
                        'Doing good work also means communicating well, reducing unnecessary complexity, and keeping the process organized.',
                },
                {
                    title: 'Real adaptability',
                    description:
                        'Different industries require different priorities, and that changes how I think and execute.',
                },
            ],
        },
        process: {
            eyebrow: 'Section 3',
            title: 'How I work',
            description:
                'The goal here is not to sell a rigid methodology, but to show a clear way of thinking and executing.',
            steps: [
                {
                    label: 'Step 1',
                    title: 'Understand the real goal',
                    description:
                        'Before thinking about solutions, it helps to understand what should happen and why that matters.',
                },
                {
                    label: 'Step 2',
                    title: 'Identify what matters most',
                    description:
                        'Not everything has the same weight. This is where judgment matters.',
                },
                {
                    label: 'Step 3',
                    title: 'Execute with focus',
                    description:
                        'Solve well, communicate clearly, and avoid unnecessary complexity.',
                },
                {
                    label: 'Step 4',
                    title: 'Adjust when needed',
                    description:
                        'Execution does not end once something ships. Measuring, learning, and improving also matter.',
                },
            ],
        },
        contexts: {
            eyebrow: 'Section 4',
            title: 'Business contexts where I have already applied that judgment',
            description:
                'The point here is to show breadth and adaptability without falling back into abstract self-description.',
            items: [
                {
                    title: 'Ecommerce',
                    description: 'Conversion and commercial integrations.',
                },
                {
                    title: 'SaaS',
                    description: 'Product thinking and complex flows.',
                },
                {
                    title: 'Automation',
                    description: 'Internal processes and efficiency.',
                },
                {
                    title: 'Marketing',
                    description: 'Landing pages, CRO, and analytics.',
                },
                {
                    title: 'Logistics',
                    description: 'Operations with multiple dependencies.',
                },
                {
                    title: 'Internal product',
                    description: 'Operational clarity and usability improvements.',
                },
                {
                    title: 'Education',
                    description: 'Communication and accessibility needs.',
                },
                {
                    title: 'Healthcare',
                    description: 'Contexts with more specific priorities.',
                },
            ],
        },
        contact: {
            eyebrow: 'Section 5',
            title: 'If you want someone who can think, execute, and support the process well, let’s talk.',
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
