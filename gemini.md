# nicolasmontiel.dev - Project Overview

Este es el portafolio personal y blog de Nicolás Montiel, construido con tecnologías modernas enfocadas en el rendimiento y la experiencia del desarrollador.

## Stack Tecnológico

- **Framework**: [Astro 5](https://astro.build/) (v5.17.2)
- **Frontend**: [Preact](https://preactjs.com/) para componentes interactivos y [Tailwind CSS](https://tailwindcss.com/) para estilos.
- **Base de Datos**: [Turso](https://turso.tech/) (LibSQL) para almacenamiento de datos en el borde.
- **Despliegue**: [Vercel](https://vercel.com/) (Output: Server).
- **Tipografía**: Space Grotesk.

## Estructura del Proyecto

- `src/pages/`: Rutas del sitio, incluyendo el blog de TiendaPy (`/tiendapy`).
- `src/components/`: Componentes UI reutilizables.
- `src/lib/`: Utilidades y clientes de API (ej. `turso.ts`, `tiendapy.ts`).
- `src/assets/`: Imágenes y recursos estáticos.

## Configuración de Turso

El proyecto utiliza `@libsql/client` para interactuar con Turso. Las variables de entorno necesarias son:
- `TURSO_DATABASE_URL`: URL de la base de datos (libsql://...).
- `TURSO_AUTH_TOKEN`: Token de autenticación generado desde el dashboard de Turso.

## Desarrollo

Para ejecutar el proyecto localmente:

```bash
nvm use 20
npm install
npm run dev
```

## Notas de Implementación

- El sitio utiliza el modo `server` de Astro para renderizado dinámico.
- La integración con TiendaPy permite renderizar posts desde Markdown almacenado en Turso.
