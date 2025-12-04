/// <reference types="vitest" />
import { paraglideVitePlugin } from "@inlang/paraglide-js"
import { sveltekit } from "@sveltejs/kit/vite"
import Icons from "unplugin-icons/vite"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [
    paraglideVitePlugin({
      project: "./project.inlang",
      outdir: "./src/lib/paraglide",
      strategy: ["url", "cookie", "baseLocale", "preferredLanguage"],
      urlPatterns: [
        {
          pattern: "/:path(.*)?",
          localized: [
            ["en", "/en/:path(.*)?"],
            ["fr", "/:path(.*)?"]
          ]
        }
      ]
    }),
    sveltekit(),
    Icons({ compiler: "svelte" })
  ],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"]
  },
  server: {
    port: 8045
  }
})
