import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [mdx(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
