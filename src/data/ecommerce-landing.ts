import type { Locale } from '@/i18n/locales';
import type { EcommerceLandingContent } from '@/types/landing/content';

const DEFAULT_WHATSAPP_LINK_ES =
    'https://wa.me/595973779205?text=Hola%20Nico!%2C%20quiero%20saber%20m%C3%A1s%20sobre%20un%20ecommerce%20a%20medida.';
const DEFAULT_WHATSAPP_LINK_EN =
    'https://wa.me/595973779205?text=Hi%20Nico!%20I%20want%20to%20learn%20more%20about%20a%20custom%20ecommerce%20build.';

const ecommerceLandingByLocale: Record<Locale, EcommerceLandingContent> = {
    es: {
        meta: {
            title: 'Ecommerce a Medida para Marcas y Negocios',
            description:
                'Desarrollo ecommerce a medida sobre un core sólido, seguro y probado durante años, con ayuda para diseño, lanzamiento, servidor, dominio y soporte si lo necesitás.',
        },
        nav: {
            label: 'Ecommerce',
            items: [
                { id: 'work', label: 'Servicio' },
                { id: 'profile', label: 'Quién soy?' },
                { id: 'process', label: 'Proceso' },
                { id: 'contact', label: 'Contacto' },
            ],
        },
        hero: {
            badge: 'Ecommerce a medida',
            title: 'Un ecommerce para negocios que quieren vender online en serio.',
            description:
                'Trabajo sobre una base que ya pasó años de prueba, es seguro y me permite construir algo realmente adaptado a tu negocio. La idea no es meterte en un WordPress lleno de parches; sino salir con una tienda con una base técnica confiable.',
            trustNote:
                'No trabajo con la idea de “te entrego una web y arreglate”. Me involucro para que la tienda quede bien armada, salga online con criterio y después también puedas contar conmigo si hace falta.',
            primaryCtaLabel: 'Hablemos por WhatsApp',
            secondaryCtaLabel: 'Conocé mi perfil',
            floatingCardLabel: 'Base técnica',
            floatingCardValue: 'Core sólido, seguro y ya probado',
        },
        work: {
            eyebrow: 'Qué incluye',
            title: 'No vendo una plantilla, desarrollo un ecommerce a medida para tu negocio.',
            subtitle:
                'Partimos de una base sólida; definimos cómo tiene que verse la tienda, cómo tiene que operar y qué necesitás resolver para salir online bien. Mi idea es construir algo alineado con tu marca, tu forma de vender y tu operación real, y acompañarte en cada parte del proceso',
            noteTitle:
                'La ventaja está en arrancar desde una base sólida.',
            noteDescription:
                'Una base que ya fue probada de verdad durante años; no gastamos energía resolviendo lo elemental. La inversión está en adaptar bien la tienda a tu marca, tu operación y tu forma de vender.',
            cards: [
                {
                    title: 'Tienda diseñada a medida',
                    description:
                        'Trabajo para que la tienda se vea y se sienta alineada con tu marca, tu producto y la experiencia que querés darle al cliente.',
                    icon: 'storefront',
                },
                {
                    title: 'Adaptación a tu negocio',
                    description:
                        'No adapto tu negocio a una plantilla. Adapto la tienda a tu operación, tu propuesta comercial y las prioridades reales de tu canal.',
                    icon: 'business',
                },
                {
                    title: 'Acompañamiento técnico',
                    description:
                        'Desde el inicio puedo ayudarte con servidor, dominio y puesta online. Después, si querés soporte o mejoras continuas, puedo acompañarte o asesorarte según lo necesites.',
                    icon: 'launch',
                },
                {
                    title: 'Configuración complementaria',
                    description:
                        'Si suma valor para tu caso, también puedo ayudarte con la configuración de Google Analytics, Google Search Console, Meta Pixel, SEO, etc.',
                    icon: 'setup',
                },
            ],
        },
        profile: {
            eyebrow: 'Por qué trabajar conmigo',
            title: 'Además de construir tu tienda, puedo ser tu partner técnico para ordenar tu operación desde el principio',
            description:
                'Tengo experiencia construyendo productos web para equipos de distintos mercados y me interesa trabajar con criterio, no solo ejecutar tareas aisladas. Si querés ver mejor cómo trabajo y cuál es mi perfil:',
            items: [
                {
                    title: 'Más de 8 años construyendo productos',
                    description:
                        'Trabajé con equipos de Latinoamérica, Estados Unidos y Europa a construir productos digitales con una mirada práctica y orientada al negocio.',
                },
                {
                    title: 'Partner técnico de verdad',
                    description:
                        'Me gusta entender el negocio, ayudarte a mejorar flujos de trabajo y tomar decisiones que te ayuden a hacer crecer tu negocio.',
                },
                {
                    title: 'Ejecución senior y comunicación clara',
                    description:
                        'Si trabajás conmigo, podés esperar criterio técnico, buena comunicación y foco real en entregar algo confiable, mantenible y útil para tu negocio.',
                },
            ],
            buttonLabel: 'Ver mi perfil completo',
        },
        process: {
            eyebrow: 'Cómo trabajo',
            title: 'La base técnica ya está resuelta. El trabajo importante es adaptarla bien a tu negocio.',
            description:
                'Primero entiendo cómo vendés y qué realmente necesitás. Después definimos la implementación, construyo la tienda a medida y te ayudo a salir online listo para que puedas operar de manera eficiente.',
            steps: [
                {
                    title: 'Entender el negocio',
                    description:
                        'Reviso catálogo, proceso comercial, operación y expectativas para entender qué tipo de tienda necesitás de verdad.',
                },
                {
                    title: 'Definir la implementación',
                    description:
                        'Tomamos el core existente y definimos qué se adapta, qué se diseña a medida y cómo conviene ordenar la salida.',
                },
                {
                    title: 'Construir la tienda',
                    description:
                        'Avanzo con la implementación y me aseguro de que la tienda responda a tu marca, a tu operación y a la experiencia que querés dar.',
                },
                {
                    title: 'Salir online con más orden',
                    description:
                        'Te ayudo con servidor, dominio, configuración inicial y, si hace falta, también con medición y algunos puntos de SEO para que el lanzamiento quede mejor armado.',
                },
            ],
        },
        contact: {
            eyebrow: 'Contacto',
            title: 'Si querés un ecommerce bien resuelto y pensado para tu negocio, hablemos.',
            description:
                'Contame qué necesitás vender, cómo operás hoy, qué esperás de tu tienda Y qué experiencia querés darle a tus clientes. Te voy a proponer la mejor forma de construir la tienda y ordenarla desde el arranque.',
            formTitle: 'Dejame tu contacto',
            formDescription:
                'Completá tu nombre y podés dejarme tu email o WhatsApp. Te estare dando retorno en menos de 24 horas.',
            nameLabel: 'Nombre',
            namePlaceholder: 'Tu nombre',
            emailLabel: 'Email',
            emailPlaceholder: 'tuemail@empresa.com',
            whatsappLabel: 'WhatsApp',
            whatsappPlaceholder: 'Tu numero de WhatsApp',
            helperText:
                'Nombre es obligatorio. Email o WhatsApp: al menos uno de los dos.',
            submitLabel: 'Enviar consulta',
            submittingLabel: 'Enviando...',
            whatsappCtaLabel: 'Escribime por WhatsApp',
            whatsappNote:
                'Si preferís ir directo, también podés escribirme por WhatsApp y contarme tu caso ahí.',
            nameRequiredMessage:
                'Necesito al menos tu nombre para poder responderte.',
            contactRequiredMessage:
                'Dejame email o WhatsApp, al menos uno de los dos.',
            notConfiguredMessage:
                'El formulario todavía no está conectado a un servicio de envío. Por ahora escribime por WhatsApp.',
            errorMessage:
                'Hubo un problema al intentar enviar el formulario. Probá de nuevo o escribime por WhatsApp.',
        },
        links: {
            whatsapp: DEFAULT_WHATSAPP_LINK_ES,
            about: '/es/sobre-mi',
        },
    },
    en: {
        meta: {
            title: 'Custom Ecommerce for Brands and Growing Businesses',
            description:
                'Custom ecommerce built on top of a solid, secure core that has been tested for years, with help for design, launch, hosting, domain setup, and support when needed.',
        },
        nav: {
            label: 'Ecommerce',
            items: [
                { id: 'work', label: 'Service' },
                { id: 'profile', label: 'Who am I?' },
                { id: 'process', label: 'Process' },
                { id: 'contact', label: 'Contact' },
            ],
        },
        hero: {
            badge: 'Custom ecommerce',
            title: 'A custom ecommerce build for businesses that want to sell online seriously.',
            description:
                'I work on top of a core that has already been tested for years, is secure, and gives me a strong base to build something that truly fits your business. The goal is not to drop you into a patched-up WordPress setup or start everything from zero, but to launch on something well thought out and technically reliable.',
            trustNote:
                'I do not work with a “here is your website, now you are on your own” mindset. I get involved so the store is well structured, launched with clear criteria, and so you can still count on me later if needed.',
            primaryCtaLabel: 'Let’s chat on WhatsApp',
            secondaryCtaLabel: 'See my background',
            floatingCardLabel: 'Technical base',
            floatingCardValue: 'Solid, secure, and already proven core',
        },
        work: {
            eyebrow: 'What is included',
            title: 'I am not selling a template or isolated dev hours. I build a custom ecommerce that is properly resolved around your business.',
            subtitle:
                'We start from a solid core; we define how the store should look, how it should operate, and what needs to be solved so you can launch properly. My goal is to build something aligned with your brand, the way you sell, and your real operations, and to support you in every part of the process.',
            noteTitle:
                'The advantage is starting from a solid foundation.',
            noteDescription:
                'A foundation that has already been truly tested for years means we do not waste energy solving the basics. The investment goes into adapting the store to your brand, your operations, and your way of selling.',
            cards: [
                {
                    title: 'Custom storefront design',
                    description:
                        'I work to make sure the store looks and feels aligned with your brand, your product, and the experience you want to give customers.',
                    icon: 'storefront',
                },
                {
                    title: 'Adaptation to your business',
                    description:
                        'I am not forcing your business into a template. I adapt the implementation to your operations, your commercial model, and the real priorities of the channel.',
                    icon: 'business',
                },
                {
                    title: 'Launch and technical support',
                    description:
                        'From day one I can help with hosting, domain, and going live. After launch, if you want ongoing support or improvements, I can continue supporting or advising you based on what you need.',
                    icon: 'launch',
                },
                {
                    title: 'Complementary setup',
                    description:
                        'If it adds value for your case, I can also help with Google Analytics, Google Search Console, Meta Pixel, SEO, etc.',
                    icon: 'setup',
                },
            ],
        },
        profile: {
            eyebrow: 'Why work with me',
            title: 'Beyond building your store, I can be your technical partner to organize your operation from day one.',
            description:
                'I have experience building web products for teams across different markets, and I care about working with judgment, not just executing isolated tasks. If you want a better sense of how I work and my profile:',
            items: [
                {
                    title: '8+ years building products',
                    description:
                        'I have worked with teams across Latin America, the United States, and Europe to build digital products with a practical, business-oriented mindset.',
                },
                {
                    title: 'A real technical partner',
                    description:
                        'I like understanding the business, helping improve workflows, and making decisions that help you grow your business.',
                },
                {
                    title: 'Senior execution and clear communication',
                    description:
                        'If you work with me, you can expect technical judgment, clear communication, and a strong focus on building something reliable, maintainable, and useful for the business.',
                },
            ],
            buttonLabel: 'See my full background',
        },
        process: {
            eyebrow: 'How I work',
            title: 'The technical foundation is already there. The important work is adapting it properly to your business.',
            description:
                'First I understand how you sell and what you need. Then we define the implementation, I build the store around that, and I help you launch with more order. If it helps later, we keep going.',
            steps: [
                {
                    title: 'Understand the business',
                    description:
                        'I review your catalog, sales flow, operations, and expectations so I can understand what kind of store you actually need.',
                },
                {
                    title: 'Define the implementation',
                    description:
                        'We take the existing core and define what should be adapted, what should be custom-designed, and how the launch should be structured.',
                },
                {
                    title: 'Build the store',
                    description:
                        'I move forward with the implementation and the storefront so the store responds to your brand, your operations, and the experience you want to deliver.',
                },
                {
                    title: 'Launch with more order',
                    description:
                        'I can help with hosting, domain setup, initial configuration, and, if useful, with measurement and a few SEO basics so the launch is better put together.',
                },
            ],
        },
        contact: {
            eyebrow: 'Contact',
            title: 'If you want an ecommerce store that is well built and designed for your business, let’s talk.',
            description:
                'Tell me what you need to sell, how you operate today, what you expect from your store, and what experience you want to deliver to your customers. I will suggest the best way to build and organize your store from the start.',
            formTitle: 'Leave your contact details',
            formDescription:
                'Fill in your name and leave your email or WhatsApp. I will get back to you in less than 24 hours.',
            nameLabel: 'Name',
            namePlaceholder: 'Your name',
            emailLabel: 'Email',
            emailPlaceholder: 'you@company.com',
            whatsappLabel: 'WhatsApp',
            whatsappPlaceholder: 'Your WhatsApp number',
            helperText:
                'Name is required. Email or WhatsApp: at least one of the two.',
            submitLabel: 'Send inquiry',
            submittingLabel: 'Sending...',
            whatsappCtaLabel: 'Message me on WhatsApp',
            whatsappNote:
                'If you prefer the fastest path, you can also message me directly on WhatsApp and tell me about your case there.',
            nameRequiredMessage:
                'I need at least your name so I can reply properly.',
            contactRequiredMessage:
                'Leave either an email or a WhatsApp number, at least one of the two.',
            notConfiguredMessage:
                'The form is not connected to a delivery service yet. For now, please message me on WhatsApp.',
            errorMessage:
                'There was a problem trying to send the form. Try again or contact me on WhatsApp.',
        },
        links: {
            whatsapp: DEFAULT_WHATSAPP_LINK_EN,
            about: '/en/about-me',
        },
    },
};

export function getEcommerceLandingContent(
    locale: Locale,
): EcommerceLandingContent {
    return ecommerceLandingByLocale[locale];
}
