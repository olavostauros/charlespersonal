import { defineConfig } from 'astro/config';

// https://astro.build/config
// Deployed to GitHub Pages as a project site: https://olavostauros.github.io/charlespersonal.fit/
// Every root-relative asset/link must be prefixed with import.meta.env.BASE_URL.
export default defineConfig({
  site: 'https://olavostauros.github.io',
  base: '/charlespersonal.fit/',
  output: 'static',
  compressHTML: true,
  integrations: [],
});
