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

const whyHireMeContentByLocale: Record<Locale, HomeContent> = {
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
            greeting: "Hi, I'm Nico.",
            bodyByVariant: {
                pro: [
                    '**Senior/Principal full-stack software engineer** with **8 years of experience**, including **5+ years working fully remote** with distributed teams across product, platform, and integration-heavy environments.',
                    'Strong backend depth across **PHP, Laravel, Node.js, PostgreSQL, MySQL, MongoDB, and DynamoDB**, with hands-on work building **scalable APIs, integrations, platform features, and internal engineering workflows**.',
                    'Comfortable shipping user-facing work with **Vue.js, React, TypeScript, JavaScript, Astro, and Preact**, while also owning delivery workflows across **AWS, Laravel Forge, VPS environments, CI/CD pipelines, monitoring, and production operations**.',
                    'Experienced using **Codex, Claude, Gemini, MCP servers, and skills-based workflows** to improve delivery speed, debugging, and engineering productivity, plus hands-on work integrating **OpenAI and Google Gemini** into real product and automation systems.',
                ],
            },
        },
        experience: {
            title: 'Experience',
            description:
                'Updated recruiter-focused experience aligned with current role scope, responsibilities, and technical ownership.',
            items: [
                {
                    id: 'exp-1',
                    company: 'Amazing Inc',
                    role: 'Principal Software Engineer',
                    period: 'June 2024 - Present',
                    summary:
                        'Amazing builds software products focused on Amazon product research, brand analysis, **AI-powered insights**, and seller enablement.',
                    responsibilities: [
                        'Designed and developed new platform features for Amazon product analysis using **Laravel, Vue.js, React, and TypeScript**, improving user experience and expanding customer analytics capabilities.',
                        'Built AI-powered workflows with **OpenAI, Perplexity AI, and Google Gemini** to automate content generation, product intelligence, and internal analysis processes.',
                        'Optimized backend architecture and database queries to improve platform responsiveness, contributing to a **usage increase of up to 70%**.',
                        'Streamlined deployment and infrastructure workflows with **Laravel Forge and AWS EC2**, reducing manual release effort and accelerating delivery cycles.',
                        'Implemented analytics, monitoring, and error-tracking systems using **Sentry** to track feature adoption, user behavior, performance metrics, and production issues, enabling faster product decisions.',
                    ],
                    stack: 'PHP, Laravel, TypeScript, Vue.js, React, AWS EC2, Laravel Forge, OpenAI, Gemini, Perplexity AI, Sentry',
                },
                {
                    id: 'exp-2',
                    company: 'MindCloud Inc',
                    role: 'Senior Software Development Engineer',
                    period: 'December 2023 - June 2024',
                    summary:
                        'MindCloud builds and maintains custom integrations between business systems, APIs, CRMs, ERPs, and cloud platforms to automate workflows and reduce manual data entry.',
                    responsibilities: [
                        'Developed and maintained integrations between multiple systems, third-party APIs, and customer platforms using **Node.js, TypeScript, React, AWS SQS, and AWS Lambda**, improving interoperability and streamlining business operations.',
                        'Led the development of an **AI-powered product** using **Slack API and GPT-3.5** to improve internal communication, automate repetitive workflows, and increase team productivity.',
                        'Improved engineering workflows by establishing clearer pull request guidelines and development best practices, helping increase code quality and collaboration efficiency.',
                        'Owned the full software development lifecycle, including client requirements gathering, planning, technical analysis, development, maintenance, and delivery, increasing product ownership and execution quality.',
                        'Supported the hiring process for two junior engineering roles by participating in technical evaluations and candidate assessments, helping strengthen the team’s development capacity.',
                    ],
                    stack: 'Node.js, TypeScript, React, API Integrations, AWS SQS, AWS Lambda, Slack API, GPT-3.5',
                },
                {
                    id: 'exp-3',
                    company: 'ITJ / Platform Science',
                    role: 'Senior Software Development Engineer',
                    period: 'July 2022 - December 2023',
                    summary:
                        'Platform Science provides fleet management and vehicle telematics software for commercial transportation companies, helping fleets manage devices, applications, and data from connected vehicles.',
                    responsibilities: [
                        'Increased test coverage and improved regression testing by driving the implementation of **end-to-end tests with Cypress**, reducing release risk and improving product reliability.',
                        'Designed and developed new features for existing and new applications using **TypeScript, Node.js, NestJS, Vue.js, Laravel, PostgreSQL, and AWS**, improving scalability and long-term maintainability.',
                        'Contributed to **Android Enterprise and EMM integrations** within the web application, expanding enterprise device management capabilities for fleet customers.',
                        'Enhanced engineering workflows by streamlining the pull request review process and improving code quality standards across the team, increasing collaboration efficiency.',
                        'Collaborated on requirements gathering, technical analysis, and solution planning for new software initiatives, helping align business needs with scalable technical execution.',
                    ],
                    stack: 'TypeScript, Node.js, NestJS, Vue.js, Laravel, PostgreSQL, AWS, Cypress, Android Enterprise, EMM',
                },
                {
                    id: 'exp-4',
                    company: 'LaSoft',
                    role: 'Backend Engineer',
                    period: 'December 2021 - July 2022',
                    summary:
                        'LaSoft is a software development company that designs, builds, and maintains web and mobile applications for startups, SMBs, and enterprise companies worldwide.',
                    responsibilities: [
                        'Improved service response times by optimizing **MongoDB queries** and backend data access patterns, enhancing overall platform performance and scalability.',
                        'Led the integration between the client platform and **DesignHuddle** using **Node.js, Express, and React**, ensuring seamless functionality across both systems.',
                        'Developed new platform features and resolved critical bugs using **Node.js, Laravel, Vue.js, MySQL, AWS, and CircleCI**, improving application stability and usability.',
                        'Assisted in requirements gathering, technical specification, and project estimation for upcoming initiatives, supporting more accurate planning and delivery processes.',
                        'Increased platform subscriptions by **9%** by integrating and optimizing **Stripe** payment workflows, improving the checkout and subscription experience.',
                    ],
                    stack: 'Node.js, Express.js, React, MongoDB, PHP, Laravel, Vue.js, MySQL, Stripe, AWS, CircleCI, DesignHuddle',
                },
                {
                    id: 'exp-5',
                    company: 'Elipse AI',
                    role: 'Full Stack Developer',
                    period: 'June 2021 - December 2021',
                    summary:
                        'Elipse AI builds AI-powered communication automation solutions, including chatbots, voicebots, and WhatsApp bots for business operations.',
                    responsibilities: [
                        'Developed integrations between healthcare clinics and **WhatsApp-based automation bots** using **Laravel, Node.js, IBM Watson, and WhatsApp Business API**, improving patient communication workflows.',
                        'Analyzed and coordinated requirements for a new appointment scheduling platform for a large healthcare clinic, reducing scheduling friction and improving operational efficiency.',
                        'Led the development of new features for an existing appointment scheduling system using **PHP, Laravel, Vue.js, Bootstrap, and MySQL**, improving usability and platform stability.',
                        'Managed integrations with the clinic’s CRM platform to streamline data synchronization and reduce manual administrative work.',
                        'Collaborated with technical and business stakeholders to translate healthcare processes into scalable software solutions.',
                    ],
                    stack: 'PHP, Laravel, Vue.js, Bootstrap, MySQL, Node.js, IBM Watson, WhatsApp Business API',
                },
                {
                    id: 'exp-6',
                    company: 'Monchis S.A.',
                    role: 'Backend Developer',
                    period: 'January 2021 - June 2021',
                    summary:
                        'Monchis is a Paraguayan delivery and marketplace platform for food, groceries, pharmacy products, and other local services.',
                    responsibilities: [
                        'Led the migration of the Monchis app backend from **Laravel to Node.js**, improving system performance by **approximately 65%** and increasing backend scalability.',
                        'Developed internal finance software for the administration department using **Node.js, React, PostgreSQL, and MongoDB**, improving billing workflows and reducing manual operational work.',
                        'Maintained and improved backend services deployed on **AWS**, supporting platform stability across users, stores, and delivery operations.',
                        'Helped organize sprint planning and work distribution, improving team visibility, prioritization, and delivery coordination.',
                        'Collaborated with engineering and operations teams to identify backend improvements, resolve issues, and support continuous product delivery.',
                    ],
                    stack: 'Node.js, React.js, AWS, PostgreSQL, MongoDB, Laravel',
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
            greeting: 'Hola, soy Nico.',
            bodyByVariant: {
                pro: [
                    '**Ingeniero de software full-stack senior/principal** con **8 años de experiencia**, incluyendo **más de 5 años trabajando 100% remoto** con equipos distribuidos en productos, plataformas e integraciones complejas.',
                    'Fuerte base backend con **PHP, Laravel, Node.js, PostgreSQL, MySQL, MongoDB y DynamoDB**, diseñando y construyendo **APIs escalables, integraciones, features de plataforma y workflows internos de ingeniería**.',
                    'Cómodo trabajando también sobre interfaces y producto con **Vue.js, React, TypeScript, JavaScript, Astro y Preact**, además de ownership sobre delivery e infraestructura con **AWS, Laravel Forge, entornos VPS, CI/CD, monitoreo y operación en producción**.',
                    'Experiencia práctica usando **Codex, Claude, Gemini, MCP servers y workflows basados en skills** para acelerar delivery, debugging y productividad de ingeniería, además de integrar **OpenAI y Google Gemini** en sistemas reales de producto y automatización.',
                ],
            },
        },
        experience: {
            title: 'Experiencia',
            description:
                'Experiencia actualizada con foco recruiter, alineada a seniority, ownership técnico y responsabilidades reales de cada etapa.',
            items: [
                {
                    id: 'exp-1',
                    company: 'Amazing Inc',
                    role: 'Principal Software Engineer',
                    period: 'Junio 2024 - Actualidad',
                    summary:
                        'Amazing desarrolla productos de software enfocados en research de productos de Amazon, análisis de marcas, **insights impulsados por IA** y enablement para sellers.',
                    responsibilities: [
                        'Diseñé y desarrollé nuevas funcionalidades de plataforma para análisis de productos de Amazon usando **Laravel, Vue.js, React y TypeScript**, mejorando la experiencia de usuario y ampliando las capacidades analíticas para clientes.',
                        'Construí workflows impulsados por IA con **OpenAI, Perplexity AI y Google Gemini** para automatizar generación de contenido, inteligencia de producto y procesos internos de análisis.',
                        'Optimicé arquitectura backend y queries de base de datos para mejorar la respuesta de la plataforma, contribuyendo a un **incremento de uso de hasta 70%**.',
                        'Mejoré workflows de despliegue e infraestructura con **Laravel Forge y AWS EC2**, reduciendo esfuerzo manual en releases y acelerando ciclos de entrega.',
                        'Implementé analytics, monitoreo y tracking de errores con **Sentry** para entender adopción de features, comportamiento de usuarios, métricas de performance e incidentes de producción, habilitando decisiones de producto más rápidas.',
                    ],
                    stack: 'PHP, Laravel, TypeScript, Vue.js, React, AWS EC2, Laravel Forge, OpenAI, Gemini, Perplexity AI, Sentry',
                },
                {
                    id: 'exp-2',
                    company: 'MindCloud Inc',
                    role: 'Senior Software Development Engineer',
                    period: 'Diciembre 2023 - Junio 2024',
                    summary:
                        'MindCloud desarrolla y mantiene integraciones a medida entre sistemas de negocio, APIs, CRMs, ERPs y plataformas cloud para automatizar workflows y reducir carga operativa manual.',
                    responsibilities: [
                        'Desarrollé y mantuve integraciones entre múltiples sistemas, APIs de terceros y plataformas de clientes usando **Node.js, TypeScript, React, AWS SQS y AWS Lambda**, mejorando interoperabilidad y agilizando operaciones de negocio.',
                        'Lideré el desarrollo de un **producto impulsado por IA** usando **Slack API y GPT-3.5** para mejorar comunicación interna, automatizar tareas repetitivas y aumentar productividad del equipo.',
                        'Mejoré workflows de ingeniería definiendo guidelines más claras para pull requests y mejores prácticas de desarrollo, elevando calidad de código y eficiencia de colaboración.',
                        'Tomé ownership del ciclo completo de desarrollo, incluyendo relevamiento con clientes, planificación, análisis técnico, desarrollo, mantenimiento y entrega, mejorando execution y calidad final.',
                        'Acompañé el proceso de hiring para dos posiciones junior participando en evaluaciones técnicas y assessment de candidatos, ayudando a fortalecer la capacidad del equipo.',
                    ],
                    stack: 'Node.js, TypeScript, React, API Integrations, AWS SQS, AWS Lambda, Slack API, GPT-3.5',
                },
                {
                    id: 'exp-3',
                    company: 'ITJ / Platform Science',
                    role: 'Senior Software Development Engineer',
                    period: 'Julio 2022 - Diciembre 2023',
                    summary:
                        'Platform Science ofrece software de gestión de flotas y telemática vehicular para compañías de transporte comercial, ayudando a administrar dispositivos, aplicaciones y datos desde vehículos conectados.',
                    responsibilities: [
                        'Aumenté cobertura de testing y mejoré regression testing impulsando la implementación de **end-to-end tests con Cypress**, reduciendo riesgo en releases y mejorando confiabilidad del producto.',
                        'Diseñé y desarrollé nuevas features para aplicaciones existentes y nuevas usando **TypeScript, Node.js, NestJS, Vue.js, Laravel, PostgreSQL y AWS**, mejorando escalabilidad y mantenibilidad a largo plazo.',
                        'Contribuí a integraciones de **Android Enterprise y EMM** dentro de la aplicación web, ampliando capacidades enterprise de gestión de dispositivos para clientes de flotas.',
                        'Mejoré workflows de ingeniería agilizando el proceso de revisión de pull requests y elevando estándares de calidad de código en el equipo, mejorando eficiencia de colaboración.',
                        'Colaboré en relevamiento, análisis técnico y planificación de soluciones para nuevas iniciativas de software, alineando necesidades de negocio con ejecución técnica escalable.',
                    ],
                    stack: 'TypeScript, Node.js, NestJS, Vue.js, Laravel, PostgreSQL, AWS, Cypress, Android Enterprise, EMM',
                },
                {
                    id: 'exp-4',
                    company: 'LaSoft',
                    role: 'Backend Engineer',
                    period: 'Diciembre 2021 - Julio 2022',
                    summary:
                        'LaSoft es una empresa de desarrollo que diseña, construye y mantiene aplicaciones web y mobile para startups, SMBs y compañías enterprise a nivel global.',
                    responsibilities: [
                        'Mejoré tiempos de respuesta optimizando **queries de MongoDB** y patrones de acceso a datos en backend, aumentando performance general y escalabilidad de la plataforma.',
                        'Lideré la integración entre la plataforma del cliente y **DesignHuddle** usando **Node.js, Express y React**, asegurando funcionamiento consistente entre ambos sistemas.',
                        'Desarrollé nuevas funcionalidades y resolví bugs críticos usando **Node.js, Laravel, Vue.js, MySQL, AWS y CircleCI**, mejorando estabilidad y usabilidad de la aplicación.',
                        'Apoyé relevamiento de requerimientos, especificación técnica y estimación de proyectos para iniciativas futuras, ayudando a una planificación más precisa.',
                        'Incrementé suscripciones de la plataforma en **9%** integrando y optimizando workflows de pago con **Stripe**, mejorando checkout y experiencia de suscripción.',
                    ],
                    stack: 'Node.js, Express.js, React, MongoDB, PHP, Laravel, Vue.js, MySQL, Stripe, AWS, CircleCI, DesignHuddle',
                },
                {
                    id: 'exp-5',
                    company: 'Elipse AI',
                    role: 'Full Stack Developer',
                    period: 'Junio 2021 - Diciembre 2021',
                    summary:
                        'Elipse AI construye soluciones de automatización de comunicación impulsadas por IA, incluyendo chatbots, voicebots y bots de WhatsApp para operaciones de negocio.',
                    responsibilities: [
                        'Desarrollé integraciones entre clínicas de salud y **bots de automatización sobre WhatsApp** usando **Laravel, Node.js, IBM Watson y WhatsApp Business API**, mejorando workflows de comunicación con pacientes.',
                        'Analicé y coordiné requerimientos para una nueva plataforma de turnos para una clínica de gran escala, reduciendo fricción operativa y mejorando eficiencia.',
                        'Lideré el desarrollo de nuevas funcionalidades para un sistema existente de turnos usando **PHP, Laravel, Vue.js, Bootstrap y MySQL**, mejorando usabilidad y estabilidad.',
                        'Gestioné integraciones con el CRM de la clínica para agilizar sincronización de datos y reducir trabajo administrativo manual.',
                        'Colaboré con stakeholders técnicos y de negocio para traducir procesos del sector salud en soluciones de software escalables.',
                    ],
                    stack: 'PHP, Laravel, Vue.js, Bootstrap, MySQL, Node.js, IBM Watson, WhatsApp Business API',
                },
                {
                    id: 'exp-6',
                    company: 'Monchis S.A.',
                    role: 'Backend Developer',
                    period: 'Enero 2021 - Junio 2021',
                    summary:
                        'Monchis es una plataforma paraguaya de delivery y marketplace para comida, supermercado, farmacia y otros servicios locales.',
                    responsibilities: [
                        'Lideré la migración del backend de la app de Monchis desde **Laravel hacia Node.js**, mejorando performance en **aproximadamente 65%** y aumentando escalabilidad backend.',
                        'Desarrollé software financiero interno para administración usando **Node.js, React, PostgreSQL y MongoDB**, mejorando facturación y reduciendo trabajo operativo manual.',
                        'Mantuve y mejoré servicios backend desplegados en **AWS**, sosteniendo estabilidad de plataforma para usuarios, comercios y operaciones de delivery.',
                        'Ayudé a ordenar sprint planning y distribución de trabajo, mejorando visibilidad del equipo, priorización y coordinación de entregas.',
                        'Colaboré con equipos de ingeniería y operaciones para identificar mejoras backend, resolver issues y sostener entrega continua de producto.',
                    ],
                    stack: 'Node.js, React.js, AWS, PostgreSQL, MongoDB, Laravel',
                },
            ],
        },
        certifications: {
            title: 'Certificaciones y cursos',
            description:
                'Formación continua en ingeniería de software, cloud, calidad y delivery.',
            viewCredentialLabel: 'Ver credencial',
            viewMoreLabel: 'Ver más',
            viewLessLabel: 'Ver menos',
            previewLength: 92,
            items: getLocalizedCertifications('es'),
        },
    },
};

export function getWhyHireMeContent(locale: Locale): HomeContent {
    return whyHireMeContentByLocale[locale];
}
