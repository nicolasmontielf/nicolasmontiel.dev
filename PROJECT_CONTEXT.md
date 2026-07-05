# Project Context

## Objetivo del proyecto

Este repositorio contiene el sitio personal de `nicolasmontiel.dev`. Hoy no es solo una landing simple: funciona como una web personal multilenguaje con distintos recorridos para recruiters, clientes y visitantes generales, además de páginas comerciales específicas para servicios de ecommerce y desarrollo web.

El proyecto también incluye:

- SEO técnico bastante cuidado.
- Detección de idioma y redirecciones automáticas.
- Formularios de contacto con endpoint backend.
- Integración prevista con `Resend` y protección con `Cloudflare Turnstile`.
- Despliegue orientado a `Vercel`.

## Stack principal

- `Astro 5` como framework principal.
- `TypeScript` con configuración `astro/tsconfigs/strict`.
- `Tailwind CSS` para estilos utilitarios.
- `Preact` para componentes interactivos puntuales.
- `@astrojs/vercel` para despliegue server-side en Vercel.
- `Resend` para envío de emails desde el formulario.
- `@fontsource-variable/space-grotesk` como tipografía principal.

## Tipo de aplicación

La app está configurada con `output: 'server'` en [astro.config.mjs](/home/nico/projects/nicolasmontiel.dev/astro.config.mjs:1), así que no debe pensarse como sitio puramente estático. Hay rutas renderizadas por Astro y endpoints API bajo `src/pages/api`.

## Estructura general

```text
.
├── public/                  # Assets públicos servidos tal cual
├── src/
│   ├── assets/              # Imágenes, logos, videos e íconos importables
│   ├── components/          # Componentes Astro y Preact
│   ├── data/                # Contenido estructurado para páginas
│   ├── i18n/                # Locales, mensajes, detección y routing
│   ├── layouts/             # Layouts compartidos
│   ├── pages/               # Rutas Astro y endpoints API
│   ├── seo/                 # Helpers SEO y paths públicos
│   └── types/               # Tipos TypeScript del dominio
├── .env.example             # Variables de entorno requeridas
├── astro.config.mjs         # Config Astro + Vercel + integraciones
├── tailwind.config.mjs      # Configuración Tailwind
├── tsconfig.json            # Alias y JSX para Preact
└── package.json             # Scripts y dependencias
```

## Carpetas importantes

### `src/pages`

Define las rutas del sitio.

- `src/pages/index.astro`
  Redirige implícitamente por locale vía middleware/catch-all.
- `src/pages/[lang]/index.astro`
  Home localizada.
- `src/pages/[lang]/[service].astro`
  Landing dinámica para servicios comerciales.
- `src/pages/[lang]/why-hire-me.astro`
- `src/pages/[lang]/porque-contratarme.astro`
- `src/pages/[lang]/why-work-with-me.astro`
- `src/pages/[lang]/por-que-trabajar-conmigo.astro`
- `src/pages/[lang]/for-clients.astro`
- `src/pages/[lang]/para-clientes.astro`
- `src/pages/[lang]/posts.astro`
  Redirige al perfil de DEV.to.
- `src/pages/qr-code.astro` y `src/pages/[lang]/qr-code.astro`
  Rutas específicas para QR.
- `src/pages/sitemap.xml.ts`
  Sitemap generado manualmente.
- `src/pages/api/contact.ts`
  Endpoint legado/simple que hoy responde `501`.
- `src/pages/api/contact/send.ts`
  Endpoint real del formulario con validación, Turnstile y Resend.
- `src/pages/api/set-language.ts`
  Guarda cookie de idioma y redirige.
- `src/pages/[...path].astro`
  Catch-all para redirigir paths sin locale al locale detectado.

### `src/components`

La UI está separada por contexto:

- `components/home/`
  Componentes de la home y perfil profesional.
- `components/ecommerce/`
  Componentes de la landing de ecommerce.
- `components/web/`
  Componentes de la landing de servicios web.
- `components/common/landing/`
  Bloques reutilizables para landings: hero, footer, formulario, badges, secciones, etc.
- `components/layout/`
  Navegación y piezas de layout global.
- `components/commercial-profile/`
  Piezas para páginas del perfil comercial.

Nota: `src/components/common/landing/ContactForm.tsx` es uno de los pocos componentes interactivos y usa `Preact`.

### `src/data`

Contiene contenido estructurado para renderizar páginas sin hardcodear todo dentro de los componentes.

Archivos clave:

- `home-content.ts`
  Contenido principal de la home, experiencia y certificaciones por idioma.
- `ecommerce-landing.ts`
  Contenido para la landing de ecommerce.
- `web-landing.ts`
  Contenido para la landing de desarrollo web.
- `work-with-me.ts`
- `certifications.ts`
- `qr-code.ts`

La idea general es que el contenido y la presentación estén relativamente separados.

### `src/i18n`

Es una carpeta central del proyecto.

- `locales.ts`
  Define idiomas soportados: `en` y `es`.
- `messages.ts`
  Textos de UI localizados.
- `routing.ts`
  Slugs localizados y helpers para construir URLs.
- `detect-locale.ts`
  Resuelve el idioma a partir de cookie, país (`x-vercel-ip-country`) o `accept-language`.
- `links.ts`
  Helpers relacionados con links localizados.

### `src/layouts`

- `Layout.astro`
  Layout principal del sitio. Centraliza:
  - metadatos SEO
  - Open Graph y Twitter Cards
  - canonical y hreflang
  - JSON-LD estructurado
  - Google Tag Manager fuera de desarrollo
  - navbar global opcional

### `src/seo`

- `site.ts`
  Constantes globales SEO, URLs públicas, slugs exportados y helpers como:
  - `toAbsoluteUrl`
  - `getAlternateLanguageLinks`
  - `getXDefaultHref`
  - paths públicos para el sitemap

### `src/types`

Modela el dominio del sitio:

- `layout.ts`
- `home.ts`
- `seo.ts`
- `contact-form.ts`
- `commercial-profile.ts`
- `i18n.ts`
- subcarpetas como `types/api` y `types/landing`

## Flujo de idioma

El sitio está pensado alrededor de URLs con prefijo de idioma:

- `/en/...`
- `/es/...`

La lógica principal es:

1. `src/middleware.ts` inspecciona el request.
2. Si la URL ya tiene locale válido, lo deja pasar.
3. Si no lo tiene, resuelve locale usando:
   - cookie `lang`
   - header `x-vercel-ip-country`
   - header `accept-language`
   - fallback a `en`
4. Luego redirige a la versión localizada.

También hay mapeo de slugs entre idiomas en `src/i18n/routing.ts`, por ejemplo:

- `why-work-with-me` <-> `por-que-trabajar-conmigo`
- `why-hire-me` <-> `porque-contratarme`
- `for-clients` <-> `para-clientes`
- `i-need-an-online-store` <-> `quiero-un-ecommerce`
- `i-need-a-website` <-> `quiero-una-web`

## Rutas y comportamiento

### Home

- `/:lang`
  Renderiza la home principal.

### Perfil / páginas institucionales

- `/:lang/why-work-with-me`
- `/:lang/por-que-trabajar-conmigo`
- `/:lang/why-hire-me`
- `/:lang/porque-contratarme`
- `/:lang/for-clients`
- `/:lang/para-clientes`

### Landings comerciales

Ruta dinámica:

- `/:lang/:service`

Actualmente soporta dos servicios:

- `ecommerce`
- `web`

Pero el slug visible depende del idioma y se resuelve desde `COMMERCIAL_SERVICE_SLUGS`.

### Posts

- `/:lang/posts`

No renderiza posts locales: hace redirect al perfil de `DEV.to`.

### API

- `POST /api/contact`
  Endpoint placeholder / legado.
- `POST /api/contact/send`
  Endpoint real para el formulario.
- `GET /api/set-language?lang=...&redirect=...`
  Persiste idioma en cookie.

## Formulario de contacto

El formulario interactivo está en [src/components/common/landing/ContactForm.tsx](/home/nico/projects/nicolasmontiel.dev/src/components/common/landing/ContactForm.tsx:1).

Resumen del flujo:

1. Valida nombre.
2. Exige al menos email o WhatsApp.
3. Si Turnstile está habilitado, exige token.
4. Envía JSON a `/api/contact/send`.
5. El backend:
   - valida payload
   - valida Turnstile en producción
   - usa `Resend` para mandar email
   - responde mensajes adecuados para UI

## Variables de entorno

Según [.env.example](/home/nico/projects/nicolasmontiel.dev/.env.example:1), el proyecto espera:

- `DEVTO_APIKEY`
- `RESEND_API_KEY`
- `PUBLIC_TURNSTILE_SITE_KEY`
- `TURNSTILE_SECRET_KEY`

Notas:

- `RESEND_API_KEY` es necesaria para entregar emails.
- `PUBLIC_TURNSTILE_SITE_KEY` y `TURNSTILE_SECRET_KEY` controlan la protección anti-spam.
- `DEVTO_APIKEY` está declarada, pero en esta revisión rápida no aparece un uso evidente dentro de `src/`.

## SEO y discoverability

Este repo cuida bastante la capa SEO:

- canonical por página
- alternates `hreflang`
- `x-default`
- Open Graph
- Twitter Cards
- `JSON-LD` para `Person`, `WebSite`, `WebPage` y `ProfessionalService`
- sitemap manual en `src/pages/sitemap.xml.ts`
- `robots.txt` en `public/robots.txt`

## Assets

Hay dos zonas distintas:

- `public/`
  Para archivos servidos directamente por path.
- `src/assets/`
  Para imágenes, logos, gifs, videos e íconos importados desde componentes o data files.

En `src/assets/` hay material visual importante del branding y previews de las landings.

## Alias de imports

Definidos en [tsconfig.json](/home/nico/projects/nicolasmontiel.dev/tsconfig.json:1):

- `@/*` -> `src/*`
- `@components/*` -> `src/components/*`
- `@assets/*` -> `src/assets/*`

Esto hace que gran parte del código use imports absolutos internos.

## Scripts útiles

Desde [package.json](/home/nico/projects/nicolasmontiel.dev/package.json:1):

- `npm run dev`
  Desarrollo local.
- `npm run build`
  Corre `astro check` y luego build.
- `npm run preview`
  Preview de producción.
- `npm run format`
  Formatea el repo con Prettier.
- `npm run format:check`
  Verifica formato.

## Estado actual observado

Puntos útiles para retomar el proyecto más adelante:

- El repo está más avanzado que lo que cuenta el `README.md`.
- La arquitectura actual está pensada para páginas localizadas y landings orientadas a conversión.
- `Preact` se usa de forma acotada, no como framework principal de toda la app.
- Hay un endpoint `src/pages/api/contact.ts` que parece quedar como fallback/placeholder, mientras que el flujo real vive en `src/pages/api/contact/send.ts`.
- La detección de locale depende de headers de Vercel, por lo que en local el comportamiento puede diferir un poco respecto a producción.

## Cómo reentender rápido el proyecto en el futuro

Si en otra sesión necesitás volver a tomar contexto, conviene leer en este orden:

1. [package.json](/home/nico/projects/nicolasmontiel.dev/package.json:1)
2. [astro.config.mjs](/home/nico/projects/nicolasmontiel.dev/astro.config.mjs:1)
3. [src/middleware.ts](/home/nico/projects/nicolasmontiel.dev/src/middleware.ts:1)
4. [src/i18n/routing.ts](/home/nico/projects/nicolasmontiel.dev/src/i18n/routing.ts:1)
5. [src/layouts/Layout.astro](/home/nico/projects/nicolasmontiel.dev/src/layouts/Layout.astro:1)
6. [src/pages/[lang]/index.astro](/home/nico/projects/nicolasmontiel.dev/src/pages/[lang]/index.astro:1)
7. [src/pages/[lang]/[service].astro](/home/nico/projects/nicolasmontiel.dev/src/pages/[lang]/[service].astro:1)
8. [src/data/home-content.ts](/home/nico/projects/nicolasmontiel.dev/src/data/home-content.ts:1)
9. [src/components/common/landing/ContactForm.tsx](/home/nico/projects/nicolasmontiel.dev/src/components/common/landing/ContactForm.tsx:1)
10. [src/pages/api/contact/send.ts](/home/nico/projects/nicolasmontiel.dev/src/pages/api/contact/send.ts:1)

## Posibles mejoras futuras para esta documentación

- Agregar un árbol de carpetas más profundo por sección.
- Documentar qué páginas usan qué componentes.
- Incluir diagrama simple del flujo de locale.
- Separar contenido, UI y backend en un `ARCHITECTURE.md`.
- Actualizar `README.md` para alinearlo con el estado real del repo.
