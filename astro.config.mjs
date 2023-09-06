import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import robotsTxt from "astro-robots-txt";
import partytown from "@astrojs/partytown";
import compress from "astro-compress";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap({
    i18n: {
      defaultLocale: "en",
      locales: {
        en: "en-GB",
        pl: "pl-PL"
      }
    }
  }), prefetch({
    intentSelector: ["a[href^='/en']", "a[href^='/pl']"]
  }), tailwind(), svelte(), robotsTxt(), partytown(), purgecss(), compress()],
  site: "https://jpalczewski.github.io"
});