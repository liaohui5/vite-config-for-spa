"use strict";
import { resolve as pathResolve } from "path";
import { defineConfig } from "vite";

// vue2: https://www.npmjs.com/package/@vitejs/plugin-vue2
// vue3: https://www.npmjs.com/package/@vitejs/plugin-vue
// react: https://www.npmjs.com/package/@vitejs/plugin-react
import react from "@vitejs/plugin-react";

const resolve = (dir) => pathResolve(__dirname, dir);

export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve("./src"),
      "~": resolve("./src/assets"),
      "#": resolve("./src/components"),
      "%": resolve("./src/views"),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
});
