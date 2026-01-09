// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sanity from "@sanity/astro";
import { loadEnv } from "vite";

import dotenv from 'dotenv';

const {
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET
} = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

export default defineConfig({
  integrations: [
    react(),
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: true,
    }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false
    }
  },
});