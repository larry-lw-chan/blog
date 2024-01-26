import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://www.larrycancode.com",
  plugins: ['prettier-plugin-astro'],
  overrides: [{
    files: '*.astro',
    options: {
      parser: 'astro'
    }
  }],
  integrations: [preact()]
});

// .prettierrc.mjs
/** @type {import("prettier").Config} */