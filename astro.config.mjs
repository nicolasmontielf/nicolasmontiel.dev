import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import icon from 'astro-icon';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.nicolasmontiel.dev',
    integrations: [tailwind(), preact(), icon()],
    output: 'server',
    adapter: vercel(),
});
