import AwsLogo from '@/assets/logos/aws_logo.jpeg';
import FreeCodeCampLogo from '@/assets/logos/freecodecamp_logo.jpeg';
import LinuxFoundationLogo from '@/assets/logos/thelinuxfoundation_logo.jpeg';
import PearsonLogo from '@/assets/logos/pearson_logo.jpeg';
import RedisLogo from '@/assets/logos/redis_logo.jpeg';
import ScrumStudyLogo from '@/assets/logos/scrumstudy_logo.jpeg';
import SemrushLogo from '@/assets/logos/semrush_logo.png';
import type { Locale } from '@/i18n/locales';
import type { Certification, HomeContent } from '@/types/home';

const certificationBaseItems: Certification[] = [
    {
        id: 'aws-cloud-practitioner-essentials',
        title: 'AWS Cloud Practitioner Essentials',
        icon: AwsLogo.src,
        href: 'https://drive.google.com/file/d/1f1qko9SQANtnyE_9ipjiWajLjW2LmiyR/view',
    },
    {
        id: 'search-and-conversions-for-agencies',
        title: 'Search and Conversions for Agencies: A Data-Driven Framework',
        icon: SemrushLogo.src,
        href: 'https://static.semrush.com/academy/certificates/d21946da0b/nicolas-montiel_5.pdf',
    },
    {
        id: 'tdd-javascript',
        title: 'Test-Driven Development for JavaScript Specialization',
        icon: PearsonLogo.src,
        href: 'https://coursera.org/share/67a1f7a5c95ab9783e89f40e0fc9b952',
    },
    {
        id: 'redis-ru102js-redis-for-javascript-developers',
        title: 'Redis | RU102JS: Redis for JavaScript Developers',
        icon: RedisLogo.src,
        href: 'https://university.redis.io/certificate/ipocifjugerm3o',
    },
    {
        id: 'scrum-fundamentals-certified',
        title: 'Scrum Fundamentals Certified',
        icon: ScrumStudyLogo.src,
        href: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=829046',
    },
    {
        id: 'apis-and-microservices',
        title: "API's and Microservices",
        icon: FreeCodeCampLogo.src,
        href: 'https://www.freecodecamp.org/certification/nicolasmontielf/back-end-development-and-apis',
    },
    {
        id: 'introduction-to-jenkins',
        title: 'Introduction to Jenkins',
        icon: LinuxFoundationLogo.src,
        href: 'https://courses.edx.org/certificates/7331bea249c44b3e8123b92e15550bc0',
    },
];

const certificationDescriptionsByLocale: Record<
    Locale,
    Record<string, string>
> = {
    es: {
        'aws-cloud-practitioner-essentials':
            'Fundamentos de AWS Cloud, servicios principales, seguridad, modelo de responsabilidad compartida, arquitectura basica, pricing y soporte para tomar mejores decisiones iniciales.',
        'search-and-conversions-for-agencies':
            'Crecimiento organico para agencias con foco en SEO, conversion rate optimization, contenido orientado a demanda y generacion de leads mas calificados.',
        'tdd-javascript':
            'Testing en JavaScript y TypeScript con Jest, mocking, cobertura util y enfoque TDD aplicado tanto a codigo backend como a interfaces.',
        'redis-ru102js-redis-for-javascript-developers':
            'Uso de Redis desde Node.js y JavaScript: conexiones, lectura y escritura de datos, estructuras utiles y patrones practicos de caching y mensajeria.',
        'scrum-fundamentals-certified':
            'Principios de Scrum, roles, eventos y artefactos, con una base clara para colaborar en ciclos iterativos y alinear mejor con producto.',
        'apis-and-microservices':
            'Backend con Node.js, npm y Express, diseno de APIs y microservicios, mas practica con MongoDB y Mongoose para persistencia e integraciones simples.',
        'introduction-to-jenkins':
            'Bases de Jenkins para automatizar builds, tests y pipelines de CI/CD, con mejor entendimiento de jobs, integraciones y flujo de entrega.',
    },
    en: {
        'aws-cloud-practitioner-essentials':
            'AWS Cloud fundamentals, core services, security, the shared responsibility model, basic architecture, pricing, and support for stronger early-stage decisions.',
        'search-and-conversions-for-agencies':
            'Organic agency growth with emphasis on SEO, conversion rate optimization, demand-focused content, and higher-quality lead generation.',
        'tdd-javascript':
            'JavaScript and TypeScript testing with Jest, mocking, meaningful coverage, and a TDD mindset applied to both backend code and user interfaces.',
        'redis-ru102js-redis-for-javascript-developers':
            'Using Redis from Node.js and JavaScript: connections, data access, useful data structures, and practical caching and messaging patterns.',
        'scrum-fundamentals-certified':
            'Scrum principles, roles, events, and artifacts, with a clearer foundation for iterative delivery and healthier collaboration with product teams.',
        'apis-and-microservices':
            'Backend work with Node.js, npm, and Express, plus API and microservice design, with hands-on practice around MongoDB and Mongoose.',
        'introduction-to-jenkins':
            'Jenkins fundamentals for automating builds, tests, and CI/CD pipelines, with a better grasp of jobs, integrations, and delivery flow.',
    },
};

function getLocalizedCertifications(locale: Locale) {
    const descriptions = certificationDescriptionsByLocale[locale];

    return certificationBaseItems.map((item) => ({
        ...item,
        description:
            descriptions[item.id] ??
            'Training focused on engineering quality, delivery, and technical decision-making.',
    }));
}

const homeContentByLocale: Record<Locale, HomeContent> = {
    es: {
        navbar: {
            postsHref: 'https://dev.to/nicolasmontielf',
            languageLabel: 'Idioma',
            items: [
                { id: 'posts', label: 'Posts' },
                { id: 'experience', label: 'Experiencia' },
                { id: 'certifications', label: 'Certificaciones y cursos' },
            ],
        },
        presentation: {
            greeting: 'Hola, soy Nico 👋🏻',
            bodyByVariant: {
                pro: [
                    '💼 <strong>Ingeniero de software full-stack</strong> con <em>mas de 8 anos de experiencia</em> construyendo productos web con PHP, Laravel, Node.js, React, Vue.js, SQL y NoSQL. Mi trabajo combina <strong>desarrollo de producto</strong>, integraciones, performance, automatizacion y mejora de workflows de ingenieria.',
                    '🤖 Tambien trabajo de forma practica con herramientas modernas de IA como <strong>Codex, Gemini y Claude Code</strong>. Las integro en flujos de entrega para acelerar desarrollo, reducir friccion y mejorar la calidad de las decisiones tecnicas dentro del equipo.',
                    '🚀 Hoy estoy creciendo hacia un perfil mas orientado a <strong>Staff Engineer</strong>, combinando profundidad tecnica en la ejecucion con mas ownership, vision de sistemas y colaboracion cross-functional.',
                    '📚 Ademas del trabajo con clientes y producto, sigo invirtiendo en <strong>Project Management</strong>, <strong>React</strong> y <strong>Python/Django</strong> para mantenerme fuerte tanto en implementacion como en ejecucion de producto.',
                ],
            },
        },
        experience: {
            title: 'Experiencia',
            description:
                'Recorrido profesional con foco en impacto tecnico, ownership y ejecucion.',
            items: [
                {
                    id: 'exp-1',
                    company: 'Amazing Inc',
                    role: 'Senior Software Development Engineer',
                    period: 'Junio 2023 - Actualidad',
                    summary:
                        'Amazing desarrolla software, educacion y herramientas para sellers de Amazon. Ahi lidere features orientadas a analisis de productos, automatizacion y mejora de inteligencia de producto con foco fuerte en performance y experiencia de usuario.',
                    responsibilities: [
                        'Disene y desarrolle nuevas capacidades de plataforma para analisis de productos de Amazon, ampliando el valor analitico para los usuarios.',
                        'Arquitecte integraciones con OpenAI, Perplexity y Google Gemini para automatizacion, generacion de contenido y flujos asistidos por IA.',
                        'Optimice arquitectura backend y consultas a base de datos, mejorando la respuesta general de la plataforma y acompanando un crecimiento de uso de hasta 70%.',
                        'Implemente analytics y monitoreo para entender adopcion de features, comportamiento de usuarios y rendimiento operativo.',
                    ],
                    stack: 'PHP, Laravel, TypeScript, Vue.js, AWS EC2, OpenAI, Gemini, Perplexity, Web Scraping',
                },
                {
                    id: 'exp-2',
                    company: 'MindCloud Inc',
                    role: 'Senior Software Development Engineer',
                    period: 'Diciembre 2022 - Junio 2023',
                    summary:
                        'MindCloud es una plataforma de integracion y automatizacion tipo iPaaS enfocada en conectar sistemas y procesos de negocio. Trabaje en integraciones complejas, automatizacion y una iniciativa de producto con IA para mejorar productividad interna.',
                    responsibilities: [
                        'Desarrolle y mantuve integraciones entre sistemas internos y APIs de terceros para mejorar interoperabilidad y eficiencia operativa.',
                        'Lidere un producto con IA que integraba Slack y ChatGPT para automatizar comunicacion interna y tareas repetitivas.',
                        'Mejore practicas de desarrollo con guidelines mas claras para pull requests y revisiones, elevando calidad y colaboracion tecnica.',
                        'Planifique automatizaciones entre servicios externos y CRMs de clientes para reducir trabajo manual y acelerar flujos de negocio.',
                    ],
                    stack: 'Node.js, TypeScript, React, API Integrations, AWS SQS, AWS Lambda',
                },
                {
                    id: 'exp-3',
                    company: 'ITJ / Platform Science',
                    role: 'Software Development Engineer',
                    period: 'Julio 2022 - Diciembre 2023',
                    summary:
                        'Platform Science construye tecnologia para vehiculos conectados, telematica y operaciones de flotas. Contribui en aplicaciones web y workflows de ingenieria orientados a escalabilidad, testing y nuevas capacidades enterprise.',
                    responsibilities: [
                        'Impulse la implementacion de end-to-end testing con Cypress para mejorar cobertura y reducir riesgo de regresiones.',
                        'Disene y desarrolle nuevas features para aplicaciones existentes y nuevas, cuidando mantenibilidad y evolucion del producto.',
                        'Contribui a integraciones de Android Enterprise (EMM), ampliando capacidades de gestion de dispositivos a nivel empresarial.',
                        'Participe en discovery tecnico, relevamiento de requerimientos y planificacion de soluciones para nuevas iniciativas de software.',
                    ],
                    stack: 'TypeScript, Node.js, NestJS, Vue.js, Docker, Serverless, Jenkins, PHP, Laravel, PostgreSQL, AWS',
                },
                {
                    id: 'exp-4',
                    company: 'LaSoft',
                    role: 'Backend Developer',
                    period: 'Diciembre 2021 - Julio 2022',
                    summary:
                        'LaSoft es una software house enfocada en construir y escalar productos digitales a medida. Aporte desde backend, performance e integraciones en una plataforma que necesitaba mejor tiempo de respuesta y mas estabilidad operativa.',
                    responsibilities: [
                        'Mejore tiempos de respuesta optimizando consultas MongoDB y patrones de acceso a datos en backend.',
                        'Lidere la integracion con DesignHuddle, coordinando la implementacion para asegurar funcionamiento consistente entre plataformas.',
                        'Desarrolle nuevas funcionalidades y resolvi bugs criticos para sostener estabilidad y continuidad de producto.',
                        'Contribui en especificacion tecnica, estimacion y planificacion de nuevas iniciativas del roadmap.',
                        'Aumente suscripciones de plataforma a traves de mejoras e integracion del flujo de pagos con Stripe.',
                    ],
                    stack: 'Node.js, Express.js, React, MongoDB, PHP, Laravel, Vue.js, MySQL, Stripe, AWS, CircleCI',
                },
                {
                    id: 'exp-5',
                    company: 'Elipse AI',
                    role: 'Full-Stack Developer',
                    period: 'Junio 2021 - Diciembre 2021',
                    summary:
                        'Elipse AI desarrolla soluciones de comunicacion omnicanal automatizada con IA, especialmente para salud y operaciones de atencion. Trabaje en integraciones, agendamiento y automatizacion sobre WhatsApp para clinicas y centros medicos.',
                    responsibilities: [
                        'Desarrolle integraciones entre clinicas y bots de automatizacion sobre WhatsApp para mejorar comunicacion con pacientes.',
                        'Analice y coordine requerimientos para una nueva plataforma de agendamiento enfocada en reducir tiempos operativos.',
                        'Lidere nuevas features en el sistema existente de turnos e integraciones con CRM para sincronizacion de datos y automatizacion.',
                    ],
                    stack: 'PHP, Laravel, Vue.js, Bootstrap, MySQL, Node.js, IBM Watson, WhatsApp Business API',
                },
                {
                    id: 'exp-6',
                    company: 'Monchis S.A.',
                    role: 'Backend Developer',
                    period: 'Enero 2021 - Junio 2021',
                    summary:
                        'Monchis es una app paraguaya de delivery y compras online. Acompanhe una etapa de migracion tecnica y mejoras internas para sostener mejor performance operativa y procesos administrativos.',
                    responsibilities: [
                        'Lidere la migracion del backend principal desde Laravel hacia Node.js, logrando una mejora aproximada del 65% en performance.',
                        'Entregue un nuevo software financiero para el area administrativa con foco en mejorar el proceso de facturacion.',
                        'Ayude a ordenar sprints y distribucion de trabajo en una etapa de cambio tecnico y organizacional.',
                    ],
                    stack: 'Node.js, React.js, AWS, PostgreSQL, MongoDB, GitHub, GitLab',
                },
            ],
        },
        certifications: {
            title: 'Certificaciones y cursos',
            description:
                'Formacion continua en ingenieria de software, cloud, calidad y delivery.',
            viewCredentialLabel: 'Ver credencial',
            viewMoreLabel: 'Ver mas',
            viewLessLabel: 'Ver menos',
            previewLength: 92,
            items: getLocalizedCertifications('es'),
        },
    },
    en: {
        navbar: {
            postsHref: 'https://dev.to/nicolasmontielf',
            languageLabel: 'Language',
            items: [
                { id: 'posts', label: 'Posts' },
                { id: 'experience', label: 'Experience' },
                { id: 'certifications', label: 'Certifications and courses' },
            ],
        },
        presentation: {
            greeting: "Hi, I'm Nico 👋🏻",
            bodyByVariant: {
                pro: [
                    '💼 <strong>Full-stack software engineer</strong> with <em>8+ years of experience</em> building web products with PHP, Laravel, Node.js, React, Vue.js, SQL, and NoSQL. I work across <strong>product development</strong>, integrations, performance, automation, and engineering workflow improvement.',
                    '🤖 I also work hands-on with modern AI tooling such as <strong>Codex, Gemini, and Claude Code</strong>. I integrate these tools into delivery workflows to speed up development, reduce friction, and improve technical decision-making across teams.',
                    '🚀 My current focus is growing toward a <strong>Staff Engineer path</strong>, combining deep execution with stronger systems thinking, technical leadership, and cross-functional ownership.',
                    '📚 Alongside delivery work, I continue investing in <strong>Project Management</strong>, <strong>React</strong>, and <strong>Python/Django</strong> to stay sharp on both implementation and product execution.',
                ],
            },
        },
        experience: {
            title: 'Experience',
            description:
                'Professional track focused on technical impact, ownership, and execution.',
            items: [
                {
                    id: 'exp-1',
                    company: 'Amazing Inc',
                    role: 'Senior Software Development Engineer',
                    period: 'June 2023 - Present',
                    summary:
                        'Amazing builds software, education, and tooling for Amazon sellers. I led platform capabilities around product analysis, automation, and AI-assisted product intelligence, with strong emphasis on performance and user value.',
                    responsibilities: [
                        'Designed and built new platform features for Amazon product analysis, expanding the analytical value delivered to customers.',
                        'Architected integrations with OpenAI, Perplexity, and Google Gemini to support automation, content generation, and AI-assisted workflows.',
                        'Optimized backend architecture and database access patterns, improving responsiveness and supporting usage growth of up to 70%.',
                        'Implemented analytics and monitoring systems to track adoption, user behavior, and platform performance.',
                    ],
                    stack: 'PHP, Laravel, TypeScript, Vue.js, AWS EC2, OpenAI, Gemini, Perplexity, Web Scraping',
                },
                {
                    id: 'exp-2',
                    company: 'MindCloud Inc',
                    role: 'Senior Software Development Engineer',
                    period: 'December 2022 - June 2023',
                    summary:
                        'MindCloud is an integration and automation platform focused on helping businesses connect systems and workflows. I worked on complex integrations, automation flows, and an internal AI-driven product initiative.',
                    responsibilities: [
                        'Built and maintained integrations between internal systems and third-party APIs to improve interoperability and operational efficiency.',
                        'Led an AI-powered product that combined Slack and ChatGPT to automate internal communication and repetitive work.',
                        'Improved engineering practices through clearer pull request review guidelines and stronger collaboration standards.',
                        'Planned integration and automation flows between external services and customer CRM platforms to reduce manual work.',
                    ],
                    stack: 'Node.js, TypeScript, React, API Integrations, AWS SQS, AWS Lambda',
                },
                {
                    id: 'exp-3',
                    company: 'ITJ / Platform Science',
                    role: 'Software Development Engineer',
                    period: 'July 2022 - December 2023',
                    summary:
                        'Platform Science builds connected vehicle, telematics, and fleet operations software. I contributed to web products and engineering workflows aimed at scalability, testing maturity, and enterprise features.',
                    responsibilities: [
                        'Drove the rollout of end-to-end testing with Cypress to improve coverage and reduce regression risk.',
                        'Designed and delivered features for both existing and new applications with maintainability and scale in mind.',
                        'Contributed to Android Enterprise integrations, expanding device-management capabilities for enterprise customers.',
                        'Supported technical discovery, requirements analysis, and solution planning for new software initiatives.',
                    ],
                    stack: 'TypeScript, Node.js, NestJS, Vue.js, Docker, Serverless, Jenkins, PHP, Laravel, PostgreSQL, AWS',
                },
                {
                    id: 'exp-4',
                    company: 'LaSoft',
                    role: 'Backend Developer',
                    period: 'December 2021 - July 2022',
                    summary:
                        'LaSoft is a software development agency focused on building and scaling custom digital products. I contributed from the backend side, improving performance, integrations, and day-to-day product reliability.',
                    responsibilities: [
                        'Improved response times by optimizing MongoDB queries and backend data-access patterns.',
                        'Led the integration with DesignHuddle, coordinating implementation to keep cross-system behavior reliable.',
                        'Built new features and resolved critical bugs to support stability and continuous product evolution.',
                        'Contributed to technical specification, estimation, and planning for upcoming roadmap initiatives.',
                        'Helped increase subscriptions through payment-flow improvements and Stripe integration work.',
                    ],
                    stack: 'Node.js, Express.js, React, MongoDB, PHP, Laravel, Vue.js, MySQL, Stripe, AWS, CircleCI',
                },
                {
                    id: 'exp-5',
                    company: 'Elipse AI',
                    role: 'Full-Stack Developer',
                    period: 'June 2021 - December 2021',
                    summary:
                        'Elipse AI builds AI-powered omnichannel communication solutions, especially for healthcare and customer contact workflows. I worked on scheduling, integrations, and WhatsApp-based automation for clinics and healthcare providers.',
                    responsibilities: [
                        'Built integrations between healthcare clinics and WhatsApp-based automation bots to improve patient communication workflows.',
                        'Analyzed and coordinated requirements for a new scheduling platform aimed at reducing operational friction.',
                        'Led feature development in the existing appointment system and CRM integrations for better data sync and automation.',
                    ],
                    stack: 'PHP, Laravel, Vue.js, Bootstrap, MySQL, Node.js, IBM Watson, WhatsApp Business API',
                },
                {
                    id: 'exp-6',
                    company: 'Monchis S.A.',
                    role: 'Backend Developer',
                    period: 'January 2021 - June 2021',
                    summary:
                        'Monchis is a Paraguayan delivery and online shopping app. I supported a phase of backend migration and internal tooling improvements aimed at stronger platform performance and smoother operational processes.',
                    responsibilities: [
                        'Led the main backend migration from Laravel to Node.js, delivering an estimated performance improvement of around 65%.',
                        'Delivered a new finance tool for the administrative team to improve billing workflows.',
                        'Helped organize sprint execution and work distribution during a period of technical and operational change.',
                    ],
                    stack: 'Node.js, React.js, AWS, PostgreSQL, MongoDB, GitHub, GitLab',
                },
            ],
        },
        certifications: {
            title: 'Certifications and courses',
            description:
                'Continuous learning across software engineering, cloud, quality, and delivery.',
            viewCredentialLabel: 'View credential',
            viewMoreLabel: 'View more',
            viewLessLabel: 'View less',
            previewLength: 92,
            items: getLocalizedCertifications('en'),
        },
    },
};

export function getHomeContent(locale: Locale): HomeContent {
    return homeContentByLocale[locale];
}
