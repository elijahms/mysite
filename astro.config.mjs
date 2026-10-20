// @ts-check
import { defineConfig, fontProviders } from "astro/config"

// Vercel exposes the production domain at build time. Anywhere else, set SITE_URL.
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL
const site = process.env.SITE_URL ?? (productionHost ? `https://${productionHost}` : undefined)

export default defineConfig({
  site,
  output: "static",
  trailingSlash: "never",
  build: { inlineStylesheets: "always", format: "file" },
  prefetch: false,
  devToolbar: { enabled: false },
  image: { layout: "constrained" },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Anybody",
      cssVariable: "--font-display",
      fallbacks: ["Arial Narrow", "sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/anybody.woff2"],
            weight: "100 900",
            style: "normal",
            stretch: "50% 150%",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Instrument Sans",
      cssVariable: "--font-text",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/instrument-sans.woff2"],
            weight: "400 700",
            style: "normal",
            stretch: "75% 100%",
          },
        ],
      },
    },
  ],
})
