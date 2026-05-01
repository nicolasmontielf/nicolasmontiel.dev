import type { Locale } from '@/i18n/locales';
import { COMMERCIAL_SERVICE_SLUGS } from '@/seo/site';
import type { WebLandingContent } from '@/types/landing/content';

const DEFAULT_WHATSAPP_LINK_ES =
    'https://wa.me/595973779205?text=Hola%20Nico!%2C%20quiero%20hacer%20una%20web%20y%20me%20gustar%C3%ADa%20contarte%20mi%20idea.';
const DEFAULT_WHATSAPP_LINK_EN =
    'https://wa.me/595973779205?text=Hi%20Nico!%20I%20want%20to%20build%20a%20website%20or%20webapp%20and%20would%20like%20to%20tell%20you%20about%20it.';

const webLandingByLocale: Record<Locale, WebLandingContent> = {
    es: {
        meta: {
            title: 'Desarrollo de Webs, Landing Pages y Webapps a Medida',
            description:
                'Desarrollo landing pages, webs institucionales, galerias, sitios administrables, CMS y webapps a medida segun el alcance real de cada proyecto.',
        },
        nav: {
            label: 'Quiero una web',
            items: [
                { id: 'projects', label: 'Proyectos' },
                { id: 'build', label: 'Construccion' },
                { id: 'profile', label: 'Perfil' },
                { id: 'criteria', label: 'Criterio' },
                { id: 'contact', label: 'Contacto' },
            ],
        },
        hero: {
            badge: 'Webs y webapps a medida',
            title: 'Construyamos la web que tu proyecto necesita, sin inflar el alcance de entrada.',
            description:
                'Puede ser una landing simple, una pagina institucional, una galeria de trabajos, un sitio que puedas administrar o una webapp con panel. Primero ordenamos que necesitás lograr y despues construimos algo proporcional a ese objetivo.',
            primaryCtaLabel: 'Contame tu idea',
            secondaryCtaLabel: 'Ver tipos de proyecto',
            note: 'No todo necesita un CMS, un backend o un panel. Y cuando si hace falta, conviene definirlo bien desde el principio para no terminar con una web dificil de mantener.',
        },
        projects: {
            eyebrow: 'Tipos de proyecto',
            title: 'No todos los proyectos necesitan la misma solucion.',
            description:
                'La idea es partir de categorias orientativas para entender tu caso, no meterte en un paquete cerrado que despues queda chico o demasiado grande.',
            items: [
                {
                    title: 'Landing page',
                    description:
                        'Una pagina clara para presentar una oferta, captar consultas o validar una idea sin construir mas de lo necesario.',
                    accent: '01',
                },
                {
                    title: 'Web institucional',
                    description:
                        'Una presencia mas completa para explicar servicios, mostrar confianza y ordenar la informacion principal del negocio.',
                    accent: '02',
                },
                {
                    title: 'Galeria o portfolio',
                    description:
                        'Un espacio visual para mostrar trabajos, casos, propiedades, productos o proyectos con una experiencia cuidada.',
                    accent: '03',
                },
                {
                    title: 'Sitio administrable',
                    description:
                        'Una web donde puedas gestionar contenido sin depender de un cambio tecnico por cada actualizacion.',
                    accent: '04',
                },
                {
                    title: 'Webapp con panel',
                    description:
                        'Una herramienta con usuarios, flujos internos, panel administrativo, datos o funcionalidades especificas.',
                    accent: '05',
                },
                {
                    title: 'Ecommerce',
                    description:
                        'Una tienda online a medida para vender en serio con una base tecnica solida, pensada para tu operacion real.',
                    accent: '06',
                    href: `/es/${COMMERCIAL_SERVICE_SLUGS.ecommerce.es}`,
                    linkLabel: 'Ver landing ecommerce',
                },
            ],
        },
        build: {
            eyebrow: 'Que puedo construir',
            title: 'Desde la interfaz hasta la parte tecnica que sostiene la web.',
            description:
                'Puedo resolver el proyecto completo o una parte especifica, segun lo que necesites y el estado actual de tu idea.',
            capabilities: [
                {
                    title: 'Diseño e interfaz',
                    description:
                        'Estructura, experiencia visual, responsive design y componentes pensados para comunicar bien.',
                },
                {
                    title: 'Frontend y performance',
                    description:
                        'Implementacion rapida, mantenible y cuidada para desktop y mobile.',
                },
                {
                    title: 'Backend, CMS o panel',
                    description:
                        'Cuando hace falta gestionar contenido, usuarios, datos o procesos internos.',
                },
                {
                    title: 'Formularios e integraciones',
                    description:
                        'Contacto, automatizaciones, servicios externos, analytics y configuraciones de lanzamiento.',
                },
                {
                    title: 'Dominio y deploy',
                    description:
                        'Ayuda para publicar la web, configurar dominio y dejar una base inicial ordenada.',
                },
                {
                    title: 'SEO tecnico basico',
                    description:
                        'Metadatos, estructura, indexacion y fundamentos para que la web salga mejor preparada.',
                },
            ],
        },
        profile: {
            eyebrow: 'Por qué trabajar conmigo',
            title: 'Además de construir la web, puedo funcionar como partner técnico para ordenarla bien desde el principio.',
            description:
                'Tengo experiencia construyendo productos web para equipos de distintos mercados y me interesa trabajar con criterio, no solo ejecutar tareas aisladas. Si querés ver mejor cómo trabajo y cuál es mi perfil, podés entrar a mi página principal.',
            items: [
                {
                    title: 'Más de 8 años construyendo productos',
                    description:
                        'Vengo ayudando a equipos de Latinoamérica, Estados Unidos y Europa a construir productos digitales con una mirada práctica y orientada a negocio.',
                },
                {
                    title: 'Partner técnico de verdad',
                    description:
                        'Me gusta entender el negocio, cuestionar supuestos flojos cuando hace falta y tomar decisiones que permitan avanzar sin dejar desorden técnico a futuro.',
                },
                {
                    title: 'Ejecución senior y comunicación clara',
                    description:
                        'Si trabajás conmigo, podés esperar criterio técnico, buena comunicación y foco real en entregar algo confiable, mantenible y útil para el negocio.',
                },
            ],
            buttonLabel: 'Ver mi perfil completo',
        },
        criteria: {
            eyebrow: 'Criterio de trabajo',
            title: 'Construir bien tambien significa no sobredimensionar.',
            description:
                'Me interesa que la web tenga sentido para el momento real del proyecto. Si algo no aporta, prefiero decirlo. Si algo va a ahorrar problemas despues, tambien.',
            items: [
                {
                    title: 'Alcance claro antes de construir',
                    description:
                        'Ordenamos prioridades, contenido, funcionalidades y camino de salida antes de entrar en ejecucion.',
                },
                {
                    title: 'Base mantenible',
                    description:
                        'Evito soluciones fragiles que quedan lindas el primer dia y complican cada cambio posterior.',
                },
                {
                    title: 'Mirada tecnica y de producto',
                    description:
                        'No ejecuto a ciegas: cuestiono supuestos cuando hace falta y propongo alternativas practicas.',
                },
            ],
        },
        contact: {
            eyebrow: 'Contacto',
            title: 'Si queres hacer una web y todavia no tenes cerrado el alcance, podemos ordenarlo.',
            description:
                'Contame que queres lograr, que contenido o funcionalidad imaginas y en que etapa estas. Con eso puedo decirte que enfoque tiene mas sentido.',
            formTitle: 'Dejame algunos datos',
            formDescription:
                'Nombre y un medio de contacto son suficientes. Si podes, sumá el tipo de proyecto.',
            nameLabel: 'Nombre',
            namePlaceholder: 'Tu nombre',
            emailLabel: 'Email',
            emailPlaceholder: 'tuemail@empresa.com',
            whatsappLabel: 'WhatsApp',
            whatsappPlaceholder: 'Tu numero de WhatsApp',
            projectTypeLabel: 'Tipo de proyecto',
            projectTypeOptions: [
                { value: '', label: 'Todavia no estoy seguro' },
                { value: 'landing', label: 'Landing page' },
                { value: 'institutional', label: 'Web institucional' },
                { value: 'gallery', label: 'Galeria o portfolio' },
                { value: 'cms', label: 'Sitio administrable / CMS' },
                { value: 'webapp', label: 'Webapp con panel' },
            ],
            messageLabel: 'Idea o contexto',
            messagePlaceholder:
                'Contame brevemente que necesitas lograr con la web.',
            helperText:
                'Nombre es obligatorio. Email o WhatsApp: al menos uno de los dos.',
            submitLabel: 'Enviar consulta',
            submittingLabel: 'Enviando...',
            whatsappCtaLabel: 'Escribime por WhatsApp',
            whatsappNote:
                'Si preferis ir directo, escribime por WhatsApp y contame que tipo de web estas pensando.',
            nameRequiredMessage:
                'Necesito al menos tu nombre para poder responderte.',
            contactRequiredMessage:
                'Dejame email o WhatsApp, al menos uno de los dos.',
            notConfiguredMessage:
                'El formulario todavia no esta conectado. Por ahora escribime por WhatsApp.',
            errorMessage:
                'Hubo un problema al intentar enviar el formulario. Proba de nuevo o escribime por WhatsApp.',
            successMessage:
                'Mensaje enviado. Me pondre en contacto contigo en menos de 24 horas.',
        },
        links: {
            whatsapp: DEFAULT_WHATSAPP_LINK_ES,
            about: '/es/sobre-mi',
        },
    },
    en: {
        meta: {
            title: 'Custom Websites, Landing Pages, and Webapps',
            description:
                'I build landing pages, institutional websites, galleries, content-managed sites, CMS setups, and custom webapps based on the real scope of each project.',
        },
        nav: {
            label: 'I need a website',
            items: [
                { id: 'projects', label: 'Projects' },
                { id: 'build', label: 'Build' },
                { id: 'profile', label: 'Profile' },
                { id: 'criteria', label: 'Criteria' },
                { id: 'contact', label: 'Contact' },
            ],
        },
        hero: {
            badge: 'Custom websites and webapps',
            title: 'Let’s build the website your project actually needs, without inflating the scope upfront.',
            description:
                'It can be a simple landing page, an institutional website, a work gallery, a site you can manage, or a webapp with an admin panel. First we clarify what you need to achieve, then we build something proportional to that goal.',
            primaryCtaLabel: 'Tell me your idea',
            secondaryCtaLabel: 'See project types',
            note: 'Not every project needs a CMS, backend, or admin panel. And when it does, it is better to define it properly from the start so the site does not become hard to maintain.',
        },
        projects: {
            eyebrow: 'Project types',
            title: 'Not every project needs the same solution.',
            description:
                'These are orientation categories to understand your case, not fixed packages that later become too small or unnecessarily large.',
            items: [
                {
                    title: 'Landing page',
                    description:
                        'A clear page to present an offer, capture leads, or validate an idea without building more than needed.',
                    accent: '01',
                },
                {
                    title: 'Institutional website',
                    description:
                        'A broader presence to explain services, build trust, and organize the main business information.',
                    accent: '02',
                },
                {
                    title: 'Gallery or portfolio',
                    description:
                        'A visual space to show work, cases, properties, products, or projects with a carefully designed experience.',
                    accent: '03',
                },
                {
                    title: 'Manageable site',
                    description:
                        'A website where you can manage content without needing a technical change for every update.',
                    accent: '04',
                },
                {
                    title: 'Webapp with admin',
                    description:
                        'A tool with users, internal flows, an admin panel, data, or specific functionality.',
                    accent: '05',
                },
                {
                    title: 'Ecommerce',
                    description:
                        'A custom online store to sell seriously on top of a solid technical base adapted to your real operations.',
                    accent: '06',
                    href: `/en/${COMMERCIAL_SERVICE_SLUGS.ecommerce.en}`,
                    linkLabel: 'See ecommerce landing',
                },
            ],
        },
        build: {
            eyebrow: 'What I can build',
            title: 'From the interface to the technical layer that supports it.',
            description:
                'I can handle the full project or a specific part of it, depending on what you need and where your idea currently stands.',
            capabilities: [
                {
                    title: 'Design and interface',
                    description:
                        'Structure, visual experience, responsive design, and components that communicate clearly.',
                },
                {
                    title: 'Frontend and performance',
                    description:
                        'Fast, maintainable implementation that works properly on desktop and mobile.',
                },
                {
                    title: 'Backend, CMS, or admin',
                    description:
                        'When you need content management, users, data, or internal processes.',
                },
                {
                    title: 'Forms and integrations',
                    description:
                        'Contact flows, automations, external services, analytics, and launch setup.',
                },
                {
                    title: 'Domain and deploy',
                    description:
                        'Help publishing the website, configuring the domain, and leaving a clean initial setup.',
                },
                {
                    title: 'Basic technical SEO',
                    description:
                        'Metadata, structure, indexing, and fundamentals so the website launches better prepared.',
                },
            ],
        },
        profile: {
            eyebrow: 'Why work with me',
            title: 'Beyond building the website, I can act as a technical partner to structure it properly from the start.',
            description:
                'I have experience building web products for teams across different markets, and I care about working with judgment, not just shipping isolated tasks. If you want a better sense of how I work and my background, you can visit my main profile page.',
            items: [
                {
                    title: '8+ years building products',
                    description:
                        'I have helped teams across Latin America, the United States, and Europe build digital products with a practical, business-oriented mindset.',
                },
                {
                    title: 'A real technical partner',
                    description:
                        'I like understanding the business, challenging weak assumptions when needed, and making decisions that move things forward without creating long-term technical mess.',
                },
                {
                    title: 'Senior execution and clear communication',
                    description:
                        'If you work with me, you can expect technical judgment, clear communication, and a strong focus on building something reliable, maintainable, and useful for the business.',
                },
            ],
            buttonLabel: 'See my full background',
        },
        criteria: {
            eyebrow: 'Working criteria',
            title: 'Building well also means not over-engineering.',
            description:
                'I care about making the website fit the real moment of the project. If something does not add value, I prefer to say it. If something will prevent future problems, I will say that too.',
            items: [
                {
                    title: 'Clear scope before building',
                    description:
                        'We organize priorities, content, functionality, and the launch path before execution starts.',
                },
                {
                    title: 'Maintainable base',
                    description:
                        'I avoid fragile solutions that look good on day one and make every later change painful.',
                },
                {
                    title: 'Technical and product judgment',
                    description:
                        'I do not execute blindly: I challenge assumptions when needed and propose practical alternatives.',
                },
            ],
        },
        contact: {
            eyebrow: 'Contact',
            title: 'If you want to build a website and the scope is not fully clear yet, we can structure it.',
            description:
                'Tell me what you want to achieve, what content or functionality you imagine, and what stage you are in. With that I can suggest the approach that makes the most sense.',
            formTitle: 'Leave a few details',
            formDescription:
                'Name and one contact method are enough. If you can, add the project type.',
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
                { value: 'gallery', label: 'Gallery or portfolio' },
                { value: 'cms', label: 'Manageable site / CMS' },
                { value: 'webapp', label: 'Webapp with admin' },
            ],
            messageLabel: 'Idea or context',
            messagePlaceholder:
                'Briefly tell me what you need the website to achieve.',
            helperText:
                'Name is required. Email or WhatsApp: at least one of the two.',
            submitLabel: 'Send inquiry',
            submittingLabel: 'Sending...',
            whatsappCtaLabel: 'Message me on WhatsApp',
            whatsappNote:
                'If you prefer the fastest path, message me on WhatsApp and tell me what kind of website you are thinking about.',
            nameRequiredMessage:
                'I need at least your name so I can reply properly.',
            contactRequiredMessage:
                'Leave either an email or a WhatsApp number, at least one of the two.',
            notConfiguredMessage:
                'The form is not connected yet. For now, please message me on WhatsApp.',
            errorMessage:
                'There was a problem trying to send the form. Try again or contact me on WhatsApp.',
            successMessage:
                'Message sent. I will get back to you in less than 24 hours.',
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
