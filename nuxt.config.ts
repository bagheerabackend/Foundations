import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from 'vite-plugin-pwa';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
      VitePWA({
        injectRegister: 'auto',
        registerType: 'autoUpdate',

        injectManifest: {
          globPatterns: ['**/*.{js,css,html,png,svg,ico}']
        },

        manifest: {
          name: 'Gold Star Foundations',
          short_name: 'Gold Star Foundations',
          description: 'Building strong foundations for a brighter future.',
          theme_color: '#ffffff',
          background_color: '#ffffff',
          display: 'standalone',
          orientation: 'portrait',
          scope: '/',
          start_url: '/',
          icons: [
            {
              "src": "/icon-192x192.png",
              "sizes": "192x192",
              "type": "image/png"
            },
            {
              "src": "/icon-512x512.png",
              "sizes": "512x512",
              "type": "image/png"
            }
          ]
        },

        workbox: {
          navigateFallback: '/',
          globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
          cleanupOutdatedCaches: true,
          clientsClaim: true,
        },

        devOptions: {
          enabled: true,
          suppressWarnings: true,
          type: 'module',
        },
      })
    ],
  },
  modules: [
    '@vite-pwa/nuxt'
  ],
})