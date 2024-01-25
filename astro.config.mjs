import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    plugins: ['prettier-plugin-astro'],
    overrides: [
      {
        files: '*.astro',
        options: {
          parser: 'astro',
        },
      },
    ],
});

// .prettierrc.mjs
/** @type {import("prettier").Config} */
