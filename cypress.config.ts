import { defineConfig } from "cypress";
import plugins from "./cypress/plugins/index.js";

export default defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      plugins(on, config);
      return config;
    },
    baseUrl: "http://localhost:4321",
  },
});
