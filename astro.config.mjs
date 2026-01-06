// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
import sanity from "@sanity/astro";
export default defineConfig({
  integrations: [
    react(),
    sanity({
      projectId: "yphry1b1",
      dataset: "production",
      useCdn: false, // set to true for production
    }),

  ],
});