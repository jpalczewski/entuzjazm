import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), prefetch(), tailwind(), svelte(), robotsTxt()],
  site: "https://jpalczewski.github.io",
});
