import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: colors.indigo[700],
                    50: colors.indigo[50],
                    100: colors.indigo[100],
                    200: colors.indigo[200],
                    300: colors.indigo[300],
                    600: colors.indigo[600],
                    700: colors.indigo[700],
                    800: colors.indigo[800],
                    900: colors.indigo[900],
                },
            },
            fontFamily: {
                sans: [
                    'Space Grotesk Variable',
                    ...defaultTheme.fontFamily.sans,
                ],
            },
        },
    },
    plugins: [],
};
