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

const certificationDescriptionsByLocale: Record<Locale, Record<string, string>> = {
    es: {
        'aws-cloud-practitioner-essentials':
            'Fundamentos de cloud, servicios base y criterio de arquitectura inicial.',
        'search-and-conversions-for-agencies':
            'Medicion, adquisicion y lectura mas rigurosa de performance digital.',
        'tdd-javascript':
            'Diseno guiado por tests, mejor criterio de refactor y cobertura util.',
        'redis-ru102js-redis-for-javascript-developers':
            'Caching, estructuras de datos y uso practico de Redis en backend.',
        'scrum-fundamentals-certified':
            'Marco de trabajo, prioridades y coordinacion mas clara con producto.',
        'apis-and-microservices':
            'Diseno de APIs, servicios desacoplados y fundamentos de integracion.',
        'introduction-to-jenkins':
            'Automatizacion basica de pipelines y nociones de delivery continuo.',
    },
    en: {
        'aws-cloud-practitioner-essentials':
            'Cloud foundations, core AWS services, and practical criteria for early architecture decisions.',
        'search-and-conversions-for-agencies':
            'Stronger measurement, acquisition strategy, and more rigorous performance analysis.',
        'tdd-javascript':
            'Test-driven design, stronger refactoring judgment, and practical coverage discipline.',
        'redis-ru102js-redis-for-javascript-developers':
            'Caching patterns, data structures, and practical Redis usage in backend systems.',
        'scrum-fundamentals-certified':
            'Working framework fundamentals, prioritization, and clearer product collaboration.',
        'apis-and-microservices':
            'API design, service decoupling principles, and integration foundations.',
        'introduction-to-jenkins':
            'Basic pipeline automation and continuous delivery fundamentals.',
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
                freelancer: [
                    '👨‍💻 Trabajo con negocios y equipos que necesitan <strong>webs, ecommerce o mejoras tecnicas</strong> sin sumar complejidad innecesaria.',
                    '🧭 Mi enfoque es practico: definir prioridad, ejecutar con claridad y entregar soluciones que impacten en operacion, conversion o velocidad de entrega.',
                    '🤖 Integro herramientas de IA como <strong>Codex, Gemini y Claude Code</strong> para acelerar desarrollo y mejorar decisiones tecnicas, sin perder criterio de ingenieria.',
                    '🤝 Si necesitas alguien que combine ejecucion, comunicacion y ownership tecnico, puedo ayudarte a llevar la idea a produccion con una base solida.',
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
                    company: 'Acme Product Labs',
                    role: 'Senior Software Engineer',
                    period: '2022 - Actualidad',
                    summary:
                        'Liderazgo tecnico con foco en arquitectura, ejecucion y calidad de producto en equipos con ownership fuerte.',
                    responsibilities: [
                        'Definicion de soluciones backend y frontend con criterio de mantenibilidad, performance y delivery.',
                        'Trabajo transversal con producto y negocio para traducir problemas ambiguos en alcance tecnico concreto.',
                        'Acompanamiento de decisiones de stack, estandares de codigo y practicas de desarrollo guiadas por impacto.',
                    ],
                    stack: 'TypeScript, Node.js, React, PostgreSQL, AWS',
                },
                {
                    id: 'exp-2',
                    company: 'Scale Commerce Studio',
                    role: 'Full-Stack Engineer',
                    period: '2019 - 2022',
                    summary:
                        'Construccion y evolucion de plataformas digitales con foco en experiencia de usuario, performance y operacion diaria.',
                    responsibilities: [
                        'Entrega de features end-to-end para ecommerce y producto digital con tiempos de ejecucion acotados.',
                        'Optimizacion de integraciones, flujos internos y estabilidad general en entornos de negocio en crecimiento.',
                        'Colaboracion cercana con stakeholders para priorizar trabajo tecnico con criterio practico.',
                    ],
                    stack: 'PHP, Laravel, Vue.js, MySQL, Redis',
                },
                {
                    id: 'exp-3',
                    company: 'Digital Systems Co',
                    role: 'Software Engineer',
                    period: '2016 - 2019',
                    summary:
                        'Base de ingenieria en desarrollo web y backend, con participacion en implementacion, soporte y evolucion de sistemas.',
                    responsibilities: [
                        'Desarrollo de modulos y servicios para aplicaciones internas y productos orientados a operacion.',
                        'Mejora de flujos existentes mediante automatizacion y simplificacion de procesos repetitivos.',
                        'Participacion en mantenimiento correctivo y evolucion gradual de sistemas con restricciones reales.',
                    ],
                    stack: 'JavaScript, Python, Django, PostgreSQL',
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
                freelancer: [
                    '👨‍💻 I partner with teams and businesses that need <strong>web platforms, ecommerce, or technical improvements</strong> without unnecessary complexity.',
                    '🧭 My approach is pragmatic: define the right priorities, execute clearly, and ship solutions that improve operations, conversion, or delivery speed.',
                    '🤖 I integrate modern AI tooling like <strong>Codex, Gemini, and Claude Code</strong> to accelerate development while keeping engineering judgment high.',
                    '🤝 If you need someone who combines execution, communication, and technical ownership, I can help you move from idea to production with a solid foundation.',
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
                    company: 'Acme Product Labs',
                    role: 'Senior Software Engineer',
                    period: '2022 - Present',
                    summary:
                        'Technical leadership focused on architecture, execution quality, and product outcomes in high-ownership teams.',
                    responsibilities: [
                        'Defined backend and frontend solutions with maintainability, performance, and delivery criteria.',
                        'Worked cross-functionally with product and business stakeholders to turn ambiguous problems into concrete technical scope.',
                        'Guided stack decisions, code standards, and development practices with clear impact-oriented reasoning.',
                    ],
                    stack: 'TypeScript, Node.js, React, PostgreSQL, AWS',
                },
                {
                    id: 'exp-2',
                    company: 'Scale Commerce Studio',
                    role: 'Full-Stack Engineer',
                    period: '2019 - 2022',
                    summary:
                        'Built and evolved digital platforms focused on user experience, performance, and day-to-day operational reliability.',
                    responsibilities: [
                        'Delivered end-to-end features for ecommerce and digital products under tight execution timelines.',
                        'Improved integrations, internal flows, and overall stability in fast-growing business environments.',
                        'Collaborated closely with stakeholders to prioritize technical work with pragmatic tradeoff decisions.',
                    ],
                    stack: 'PHP, Laravel, Vue.js, MySQL, Redis',
                },
                {
                    id: 'exp-3',
                    company: 'Digital Systems Co',
                    role: 'Software Engineer',
                    period: '2016 - 2019',
                    summary:
                        'Built engineering fundamentals in web and backend development while supporting implementation and system evolution.',
                    responsibilities: [
                        'Developed modules and services for internal applications and operationally oriented products.',
                        'Improved existing workflows through automation and simplification of repetitive processes.',
                        'Supported corrective maintenance and gradual system evolution under real operational constraints.',
                    ],
                    stack: 'JavaScript, Python, Django, PostgreSQL',
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
