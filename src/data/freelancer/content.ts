import { getFreelancerCaseStudyPreviews } from '@/data/case-studies';
import type { Locale } from '@/i18n/locales';
import type { FreelancerPageContent } from '@/types/freelancer';

const freelancerContentEn: FreelancerPageContent = {
    navbar: {
        items: [
            { label: 'About', sectionId: 'about' },
            { label: 'Services', sectionId: 'services' },
            { label: 'Process', sectionId: 'process' },
            { label: 'Case Studies', sectionId: 'case-studies' },
            { label: 'Testimonials', sectionId: 'testimonials' },
            { label: 'Contact', sectionId: 'contact' },
        ],
        ctaLabel: 'Hire Me',
    },
    about: {
        title: 'About Me',
        paragraphs: [
            'I help founders and growing businesses improve how they work through software, automation, and AI. More than simply building what I am asked for, I work as a technical partner helping clarify ideas, identify the right solution, and turn them into practical digital products.',
            'I take ownership of the entire process, from planning and product decisions to development, documentation, and launch. My approach is analytical, organized, and focused on building solutions that are useful, maintainable, and aligned with the real goals of the business.',
            'With over eight years of experience building complex products for companies across the US and Europe, I bring senior-level expertise with the flexibility, direct communication, and close collaboration of an independent partner.',
        ],
        metrics: [
            {
                value: '8+',
                label: 'Years of Experience',
            },
            {
                value: '5+',
                label: 'Years Working Remotely',
            },
            {
                value: '13+',
                label: 'Countries Collaborated With',
            },
        ],
    },
    services: {
        badgeLabel: 'Services',
        title: 'How I Can Help',
        description:
            'I help founders and growing businesses launch better products, automate repetitive work, and use technology more effectively.',
        items: [
            {
                icon: 'globe',
                title: 'Custom Web Applications',
                description:
                    'For businesses that need more than a standard website, I build focused web applications designed around a specific process, service, or product.',
            },
            {
                icon: 'palette',
                title: 'Landing Pages & Business Websites',
                description:
                    'Clear, fast, and conversion-focused websites built to communicate your value, generate leads, and give your business a professional digital presence.',
            },
            {
                icon: 'sparkles',
                title: 'AI Integrations',
                description:
                    'Practical AI features and integrations that improve customer experiences, support decision-making, and add real value to existing products or workflows.',
            },
            {
                icon: 'rocket',
                title: 'Process Automation',
                description:
                    'Custom automations that reduce repetitive work, connect tools, and make day-to-day operations faster and more reliable.',
            },
        ],
    },
    process: {
        badgeLabel: 'Process',
        title: 'My Process',
        description:
            'A clear, collaborative process designed to turn real business problems into practical digital solutions.',
        steps: [
            {
                badge: 'Step 01',
                title: 'Understand',
                subtitle: 'Clarify the problem',
                description:
                    'I start by understanding your goals, current challenges, users, and constraints before proposing a solution.',
            },
            {
                badge: 'Step 02',
                title: 'Define',
                subtitle: 'Shape the right solution',
                description:
                    'Together, we turn the problem into a clear scope, priorities, and a practical plan aligned with your business goals.',
            },
            {
                badge: 'Step 03',
                title: 'Build',
                subtitle: 'Develop and iterate',
                description:
                    'I build the solution in focused stages, share progress regularly, and refine it through feedback.',
            },
            {
                badge: 'Step 04',
                title: 'Launch & Validate',
                subtitle: 'Release with confidence',
                description:
                    'After launch, I verify that everything works as expected, handle final adjustments, and make sure the product is ready to fulfill its purpose.',
            },
        ],
    },
    caseStudies: {
        badgeLabel: 'Case Studies',
        title: 'Selected Case Studies',
        description:
            'A few examples of how strategy, design, and execution come together in the work.',
        ctaLabel: 'View Project',
        items: getFreelancerCaseStudyPreviews('en'),
    },
    testimonials: {
        badgeLabel: 'Testimonials',
        title: "What It's Like to Work With Me",
        description:
            'Feedback from clients and collaborators about my approach, communication, and the results we achieved together.',
        items: [
            {
                quote:
                    '"Nico automated the registration of our work orders and saved us a lot of manual work. The process is now faster, more consistent, and easier to control, reducing errors and improving the tracking of each order."',
                author: 'Walter Medina',
                role: 'CEO, WM Servicios Informaticos',
                initial: 'W',
            },
        ],
    },
    faq: {
        badgeLabel: 'FAQ',
        title: 'Frequently Asked Questions',
        description:
            'Find answers to common questions about my services, process, and availability.',
        items: [
            { question: 'What is your availability for new projects?' },
            { question: 'What does your process look like?' },
            { question: 'How do you handle pricing?' },
            { question: 'What technologies do you work with?' },
            { question: 'Do you offer ongoing maintenance?' },
        ],
    },
    contact: {
        title: "Let's Talk About Your Project",
        description:
            'Whether you have a clear plan or just a problem that needs solving, I can help you define the right approach and turn it into a practical digital solution.',
        placeholder:
            'A custom contact form will be embedded here in a later iteration. For now, this section keeps the same visual rhythm as the original layout.',
        email: 'hello@alexrivera.dev',
    },
};

const freelancerContentEs: FreelancerPageContent = {
    navbar: {
        items: [
            { label: 'Sobre mí', sectionId: 'about' },
            { label: 'Servicios', sectionId: 'services' },
            { label: 'Proceso', sectionId: 'process' },
            { label: 'Casos de estudio', sectionId: 'case-studies' },
            { label: 'Testimonios', sectionId: 'testimonials' },
            { label: 'Contacto', sectionId: 'contact' },
        ],
        ctaLabel: 'Trabajemos',
    },
    about: {
        title: 'Sobre mí',
        paragraphs: [
            'Ayudo a founders y negocios en crecimiento a mejorar la forma en que trabajan mediante software, automatización e inteligencia artificial. Más que simplemente construir lo que me piden, trabajo como un partner técnico: ayudo a clarificar ideas, identificar la solución adecuada y convertirlas en productos digitales prácticos.',
            'Me involucro en todo el proceso, desde la planificación y las decisiones de producto hasta el desarrollo, la documentación y el lanzamiento. Mi enfoque es analítico, organizado y orientado a construir soluciones útiles, mantenibles y alineadas con los objetivos reales del negocio.',
            'Con más de ocho años de experiencia construyendo productos complejos para empresas de Estados Unidos y Europa, combino expertise senior con la flexibilidad, comunicación directa y colaboración cercana de un partner independiente.',
        ],
        metrics: [
            {
                value: '8+',
                label: 'Años de experiencia',
            },
            {
                value: '5+',
                label: 'Años trabajando remoto',
            },
            {
                value: '13+',
                label: 'Países donde colaboré',
            },
        ],
    },
    services: {
        badgeLabel: 'Servicios',
        title: 'Cómo puedo ayudarte',
        description:
            'Ayudo a founders y negocios en crecimiento a lanzar mejores productos, automatizar trabajo repetitivo y usar la tecnología de forma más efectiva.',
        items: [
            {
                icon: 'globe',
                title: 'Aplicaciones web a medida',
                description:
                    'Para negocios que necesitan más que un sitio web estándar, construyo aplicaciones enfocadas en un proceso, servicio o producto específico.',
            },
            {
                icon: 'palette',
                title: 'Landing pages & sitios de negocio',
                description:
                    'Sitios claros, rápidos y orientados a conversión para comunicar tu valor, generar leads y darle a tu negocio una presencia digital profesional.',
            },
            {
                icon: 'sparkles',
                title: 'Integraciones con AI',
                description:
                    'Funcionalidades e integraciones prácticas con AI para mejorar experiencias, apoyar decisiones y sumar valor real a productos o flujos existentes.',
            },
            {
                icon: 'rocket',
                title: 'Automatización de procesos',
                description:
                    'Automatizaciones a medida para reducir trabajo repetitivo, conectar herramientas y hacer que la operación diaria sea más rápida y confiable.',
            },
        ],
    },
    process: {
        badgeLabel: 'Proceso',
        title: 'Mi proceso',
        description:
            'Un proceso claro y colaborativo para convertir problemas reales de negocio en soluciones digitales prácticas.',
        steps: [
            {
                badge: 'Paso 01',
                title: 'Entender',
                subtitle: 'Clarificar el problema',
                description:
                    'Empiezo entendiendo tus objetivos, desafíos actuales, usuarios y restricciones antes de proponer una solución.',
            },
            {
                badge: 'Paso 02',
                title: 'Definir',
                subtitle: 'Dar forma a la solución correcta',
                description:
                    'Juntos convertimos el problema en un alcance claro, prioridades concretas y un plan práctico alineado con los objetivos del negocio.',
            },
            {
                badge: 'Paso 03',
                title: 'Construir',
                subtitle: 'Desarrollar e iterar',
                description:
                    'Construyo la solución en etapas enfocadas, comparto avances regularmente y la refinamos con feedback.',
            },
            {
                badge: 'Paso 04',
                title: 'Lanzar y validar',
                subtitle: 'Salir con confianza',
                description:
                    'Después del lanzamiento, verifico que todo funcione como corresponde, hago los ajustes finales y me aseguro de que el producto esté listo para cumplir su propósito.',
            },
        ],
    },
    caseStudies: {
        badgeLabel: 'Casos de estudio',
        title: 'Casos de estudio seleccionados',
        description:
            'Algunos ejemplos de cómo estrategia, diseño y ejecución se combinan en el trabajo.',
        ctaLabel: 'Ver proyecto',
        items: getFreelancerCaseStudyPreviews('es'),
    },
    testimonials: {
        badgeLabel: 'Testimonios',
        title: 'Cómo es trabajar conmigo',
        description:
            'Feedback de clientes y colaboradores sobre mi enfoque, comunicación y los resultados que logramos juntos.',
        items: [
            {
                quote:
                    '"Nico automatizó el registro de nuestras ordenes de trabajo y nos ahorró mucho trabajo manual. El proceso ahora es más rápido, consistente y fácil de controlar, reduciendo errores y mejorando el seguimiento de cada orden."',
                author: 'Walter Medina',
                role: 'CEO de WM Servicios Informaticos',
                initial: 'W',
            },
        ],
    },
    faq: {
        badgeLabel: 'FAQ',
        title: 'Preguntas frecuentes',
        description:
            'Respuestas a preguntas comunes sobre mis servicios, proceso y disponibilidad.',
        items: [
            { question: '¿Cuál es tu disponibilidad para nuevos proyectos?' },
            { question: '¿Cómo es tu proceso de trabajo?' },
            { question: '¿Cómo manejás los precios?' },
            { question: '¿Con qué tecnologías trabajás?' },
            { question: '¿Ofrecés mantenimiento continuo?' },
        ],
    },
    contact: {
        title: 'Hablemos sobre tu proyecto',
        description:
            'Ya sea que tengas un plan claro o simplemente un problema que necesita resolverse, puedo ayudarte a definir el enfoque correcto y convertirlo en una solución digital práctica.',
        placeholder:
            'Más adelante vamos a insertar acá un formulario de contacto personalizado. Por ahora, esta sección mantiene el mismo ritmo visual del layout original.',
        email: 'hello@alexrivera.dev',
    },
};

const freelancerContentByLocale: Record<Locale, FreelancerPageContent> = {
    en: freelancerContentEn,
    es: freelancerContentEs,
};

export function getFreelancerContent(locale: Locale): FreelancerPageContent {
    return freelancerContentByLocale[locale];
}
