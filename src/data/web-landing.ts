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
            title: 'Webs a Medida para Negocios y Proyectos Digitales',
            description:
                'Desarrollo webs, landing pages, sitios administrables y webapps a medida para negocios que quieren verse mejor, vender mejor o trabajar mejor.',
        },
        nav: {
            label: 'Quiero una web',
            items: [
                { id: 'projects', label: 'Proyectos' },
                { id: 'build', label: 'Qué puedo hacer' },
                { id: 'profile', label: 'Quién soy?' },
                { id: 'criteria', label: 'Criterio' },
                { id: 'contact', label: 'Contacto' },
            ],
        },
        hero: {
            badge: 'Webs y webapps a medida',
            title: 'Una web bien pensada para lo que tu negocio necesita hoy.',
            description:
                'Desarrollo landing pages, webs institucionales, portfolios, sitios administrables y webapps con panel. No se trata solo de tener “una página”: la idea es que tu web ayude a vender, explicar mejor lo que hacés y darle confianza a quien te encuentra.',
            primaryCtaLabel: 'Contame tu idea',
            secondaryCtaLabel: 'Ver tipos de proyecto',
            note: 'No todo necesita un sistema enorme. Pero sí necesita estar bien pensado desde el principio para que puedas lograr lo que querés sin complicaciones técnicas innecesarias.',
        },
        projects: {
            eyebrow: 'Tipos de proyecto',
            title: 'La web correcta depende de lo que querés lograr.',
            description:
                'No vendo paquetes cerrados. Primero quiero entender tu caso y después te propongo una solución que tenga sentido para tu negocio, tu etapa y tu presupuesto.',
            items: [
                {
                    title: 'Landing page',
                    description:
                        'Ideal para presentar una oferta concreta, captar consultas o lanzar una idea rápido con una página clara y enfocada.',
                    accent: '01',
                },
                {
                    title: 'Web institucional',
                    description:
                        'Para mostrar quién sos, qué ofrecés y por qué confiar en tu negocio, con una presencia más completa y profesional.',
                    accent: '02',
                },
                {
                    title: 'Galeria o portfolio',
                    description:
                        'Para mostrar trabajos, casos, propiedades, productos o proyectos con una experiencia visual más cuidada.',
                    accent: '03',
                },
                {
                    title: 'Sitio administrable',
                    description:
                        'Para que puedas actualizar contenido, secciones o información importante sin depender de mí para cada cambio chico.',
                    accent: '04',
                },
                {
                    title: 'Aplicación web',
                    description:
                        'Cuando la web ya no es solo presentación, sino una herramienta con usuarios, datos, panel o procesos internos.',
                    accent: '05',
                },
                {
                    title: 'Ecommerce',
                    description:
                        'Una tienda online a medida para vender en serio, con una base técnica sólida y pensada para tu operación real.',
                    accent: '06',
                    href: `/es/${COMMERCIAL_SERVICE_SLUGS.ecommerce.es}`,
                    linkLabel: 'Más información',
                },
            ],
        },
        build: {
            eyebrow: 'Que puedo construir',
            title: 'Puedo resolver desde la idea visual hasta la parte técnica.',
            description:
                'Me encargo de todo el ciclo de desarrollo, desde la idea, la concepción y el diseño hasta la implementación y el lanzamiento. Ayudarte a implementar estrategias de contenido, de marketing, integraciones, etc.',
            capabilities: [
                {
                    title: 'Diseño e interfaz',
                    description:
                        'Armo una estructura clara, una interfaz cuidada y una experiencia que funcione bien en desktop y mobile.',
                },
                {
                    title: 'Frontend y performance',
                    description:
                        'Construyo la parte visible de la web con foco en velocidad, estabilidad y una base fácil de mantener.',
                },
                {
                    title: 'Backend, CMS o panel',
                    description:
                        'Si necesitás administrar contenido, usuarios o datos, puedo sumar backend, CMS o panel según el caso.',
                },
                {
                    title: 'Formularios e integraciones',
                    description:
                        'Puedo conectar formularios, WhatsApp, emails, analytics, servicios externos y automatizaciones simples.',
                },
                {
                    title: 'Dominio y deploy',
                    description:
                        'Te ayudo a dejar la web online, configurar dominio, hosting y los puntos técnicos básicos para salir bien.',
                },
                {
                    title: 'SEO tecnico basico',
                    description:
                        'Dejo metadatos, estructura e indexación básica para que la web no salga improvisada desde lo técnico.',
                },
            ],
        },
        profile: {
            eyebrow: 'Por qué trabajar conmigo',
            title: 'No solo desarrollo la web: te ayudo a tomar mejores decisiones técnicas.',
            description:
                'Trabajo con una mirada práctica: entender el negocio, cuidar la experiencia, evitar complicaciones innecesarias y construir algo que realmente puedas usar. Si querés ver mejor cómo trabajo y cuál es mi perfil:',
            items: [
                {
                    title: 'Más de 8 años construyendo productos',
                    description:
                        'Trabajé con equipos de Latinoamérica, Estados Unidos y Europa construyendo productos digitales reales, no solo páginas bonitas.',
                },
                {
                    title: 'Partner técnico de verdad',
                    description:
                        'Me involucro para entender qué necesitás, detectar riesgos y ayudarte a elegir el camino más conveniente.',
                },
                {
                    title: 'Ejecución senior y comunicación clara',
                    description:
                        'Si trabajás conmigo, podés esperar criterio técnico, buena comunicación y foco real en entregar algo confiable, mantenible y útil para tu negocio.',
                },
            ],
            buttonLabel: 'Ver mi perfil completo',
        },
        criteria: {
            eyebrow: 'Para empezar bien',
            title: 'Cosas claves antes de construir la web.',
            description:
                'Definimos los objetivos, el contenido, el nivel de autonomía que necesitás y el camino para crear algo que realmente te sirva. Mientras más claro esté el objetivo, más fácil es evitar vueltas, costos innecesarios y decisiones apuradas.',
            items: [
                {
                    title: 'Qué tiene que lograr la web',
                    description:
                        'Puede ser captar consultas, presentar servicios, mostrar trabajos, vender, validar una idea o mejorar una operación interna.',
                },
                {
                    title: 'Qué contenido ya tenés',
                    description:
                        'Textos, fotos, marca, referencias, secciones necesarias y cualquier material que ayude a entender cómo querés presentarte.',
                },
                {
                    title: 'Qué nivel de autonomía necesitás',
                    description:
                        'Definimos si la web puede ser estática, si necesitás editar contenido seguido o si conviene sumar CMS, panel o integraciones.',
                },
            ],
        },
        contact: {
            eyebrow: 'Contacto',
            title: 'Si querés una web bien resuelta para tu negocio, hablemos.',
            description:
                'Contame qué vendés, qué necesitás comunicar, qué tenés hoy y qué esperás que la web haga por tu negocio. Con eso te puedo proponer una forma concreta de avanzar.',
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
                { value: 'gallery', label: 'Galería o portfolio' },
                { value: 'cms', label: 'Sitio administrable / CMS' },
                { value: 'webapp', label: 'Webapp con panel' },
            ],
            messageLabel: 'Idea o contexto',
            messagePlaceholder:
                'Contame brevemente qué necesitás lograr con la web.',
            helperText:
                'Nombre es obligatorio. Email o WhatsApp: al menos uno de los dos.',
            submitLabel: 'Enviar consulta',
            submittingLabel: 'Enviando...',
            whatsappCtaLabel: 'Escribime por WhatsApp',
            whatsappNote:
                'Si preferís ir directo, escribime por WhatsApp y contame qué tipo de web estás pensando.',
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
