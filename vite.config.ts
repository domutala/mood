import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import typescript2 from "rollup-plugin-typescript2";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    plugins: [
      vue({}),
      typescript2({
        check: false,
        include: ["src/vite-plugin.ts"],
        tsconfigOverride: {
          compilerOptions: {
            sourceMap: false,
            declaration: false,
            declarationMap: false,
          },
          exclude: ["vite.config.ts", "src/main.ts"],
        },
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@mood": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      cssCodeSplit: false,
      lib: {
        entry: "./src/plugin.ts",
        formats: ["es", "cjs"],
        name: "mood",
        fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
      },
      rollupOptions: {
        external: ["vue"],
        output: {
          globals: {
            vue: "Vue",
          },
        },
      },
    },
  });
};
