import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import unocss from "@unocss/astro";
import presetIcons from "@unocss/preset-icons";
import presetUno from "@unocss/preset-uno";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    svelte(),
    unocss({
      presets: [presetIcons(), presetUno()],
      injectReset: false,
    }),
  ],
});
