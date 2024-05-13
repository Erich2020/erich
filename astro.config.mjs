import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site:"https://erich2020.github.io/",
  base:"erich",
  integrations: [tailwind(), astroI18next()],
});
