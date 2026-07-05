# Project Context

## Objetivo actual

Este repositorio contiene la versión actual de `nicolasmontiel.dev` enfocada en dos superficies:

- una landing principal
- una página técnica pensada para recruiters

La capa comercial anterior fue removida para que el proyecto quede alineado con esta etapa y sea más fácil retomarlo en futuras sesiones.

## Stack

- `Astro 5`
- `TypeScript`
- `Tailwind CSS`
- `Preact` para interactividad puntual
- `@astrojs/vercel` para despliegue server-side en Vercel

## Tipo de aplicación

La app usa `output: 'server'` en [astro.config.mjs](/home/nico/projects/nicolasmontiel.dev/astro.config.mjs:1), así que combina páginas Astro con lógica de request, middleware y algunas redirecciones dinámicas.

## Estructura del repo

```text
.
├── public/                  # Archivos públicos servidos tal cual
├── src/
│   ├── assets/              # Imágenes e íconos usados por la UI actual
│   ├── components/
│   │   ├── home/            # Home, recruiter profile, experiencia, certificaciones
│   │   └── layout/          # Navbar global
│   ├── data/                # Contenido estructurado para home y QR
│   ├── i18n/                # Locales, mensajes y routing localizado
│   ├── layouts/             # Layout principal
│   ├── pages/               # Rutas del sitio y API mínima
│   ├── seo/                 # Helpers SEO y paths públicos
│   └── types/               # Tipos TypeScript vigentes
├── .env.example
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Carpetas clave

### `src/pages`

Rutas activas del proyecto:

- `src/pages/[lang]/index.astro`
  Landing principal localizada.
- `src/pages/[lang]/why-hire-me.astro`
- `src/pages/[lang]/porque-contratarme.astro`
  Perfil técnico para recruiters.
- `src/pages/[lang]/posts.astro`
  Redirige al perfil de DEV.to.
- `src/pages/[lang]/qr-code.astro`
  Página simple de accesos rápidos.
- `src/pages/index.astro`
- `src/pages/qr-code.astro`
- `src/pages/[...path].astro`
  Redirecciones automáticas hacia la versión localizada.
- `src/pages/sitemap.xml.ts`
  Sitemap generado manualmente.
- `src/pages/api/set-language.ts`
  Persiste el idioma en cookie.

### `src/components/home`

Contiene casi toda la UI relevante del producto actual:

- `SimpleHome.astro`
  Hero principal y CTA al perfil recruiter.
- `RecruiterProfilePage.astro`
  Vista técnica más detallada.
- `Presentation.astro`
- `WorkExperience.astro`
- `Certifications.astro`

### `src/data`

- `home-content.ts`
  Contenido de home, experiencia y certificaciones por idioma.
- `qr-code.ts`
  Contenido de la página QR.

### `src/i18n`

- `locales.ts`
  Idiomas soportados: `en` y `es`.
- `messages.ts`
  Textos de UI.
- `routing.ts`
  Helpers de rutas localizadas.
- `detect-locale.ts`
  Resolución de idioma por cookie, país o `accept-language`.

### `src/layouts`

- `Layout.astro`
  Layout principal con SEO, Open Graph, `hreflang`, JSON-LD y GTM fuera de desarrollo.

### `src/seo`

- `site.ts`
  Constantes SEO, URLs absolutas y paths públicos para el sitemap.

## Flujo de idioma

El sitio vive bajo prefijos de locale:

- `/en/...`
- `/es/...`

Resolución:

1. `src/middleware.ts` detecta si la URL ya tiene locale.
2. Si no lo tiene, usa:
   - cookie `lang`
   - header `x-vercel-ip-country`
   - header `accept-language`
   - fallback a `en`
3. Redirige a la versión localizada.

Para cambio de idioma se usa `GET /api/set-language`.

## Rutas que importan hoy

- `/:lang`
  Landing principal.
- `/:lang/why-hire-me`
- `/:lang/porque-contratarme`
  Perfil técnico para recruiters.
- `/:lang/posts`
  Redirect a DEV.to.
- `/:lang/qr-code`
  Links rápidos.

## SEO

La base SEO actual incluye:

- `canonical`
- `hreflang`
- `x-default`
- Open Graph
- Twitter Cards
- JSON-LD para `Person`, `WebSite` y `WebPage`
- sitemap manual
- `robots.txt`

## Variables de entorno

Hoy no hay variables de entorno necesarias para la superficie activa del sitio. Eso quedó reflejado en [.env.example](/home/nico/projects/nicolasmontiel.dev/.env.example:1).

## Scripts

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run format`
- `npm run format:check`

## Estado actual

- La home ya no expone rutas comerciales viejas.
- El repo quedó centrado en landing principal, recruiter profile y utilidades mínimas como `posts` y `qr-code`.
- Se removieron rutas, componentes, tipos y data de las antiguas páginas `ecommerce`, `web` y perfiles comerciales intermedios.

## Cómo retomar contexto rápido

Leer en este orden:

1. [package.json](/home/nico/projects/nicolasmontiel.dev/package.json:1)
2. [astro.config.mjs](/home/nico/projects/nicolasmontiel.dev/astro.config.mjs:1)
3. [src/middleware.ts](/home/nico/projects/nicolasmontiel.dev/src/middleware.ts:1)
4. [src/i18n/routing.ts](/home/nico/projects/nicolasmontiel.dev/src/i18n/routing.ts:1)
5. [src/layouts/Layout.astro](/home/nico/projects/nicolasmontiel.dev/src/layouts/Layout.astro:1)
6. [src/pages/[lang]/index.astro](/home/nico/projects/nicolasmontiel.dev/src/pages/[lang]/index.astro:1)
7. [src/components/home/SimpleHome.astro](/home/nico/projects/nicolasmontiel.dev/src/components/home/SimpleHome.astro:1)
8. [src/pages/[lang]/why-hire-me.astro](/home/nico/projects/nicolasmontiel.dev/src/pages/[lang]/why-hire-me.astro:1)
9. [src/components/home/RecruiterProfilePage.astro](/home/nico/projects/nicolasmontiel.dev/src/components/home/RecruiterProfilePage.astro:1)
10. [src/data/home-content.ts](/home/nico/projects/nicolasmontiel.dev/src/data/home-content.ts:1)
