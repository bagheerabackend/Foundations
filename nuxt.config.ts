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

        manifest: {
          id: '/',
          name: 'Gold Star Foundations',
          short_name: 'Gold Star Foundations',
          description: 'Building strong foundations for a brighter future.',
          theme_color: '#ffffff',
          background_color: '#ffffff',
          display_override: ["window-controls-overlay"],
          display: 'standalone',
          orientation: 'portrait',
          start_url: '/',
          scope: '/',
          icons: [
            {
              "src": "/icon-192x192.png",
              "sizes": "192x192",
              "type": "image/png",
              "purpose": "any maskable"
            },
            {
              "src": "/icon-512x512.png",
              "sizes": "512x512",
              "type": "image/png",
              "purpose": "any maskable"
            }
          ]
        },

        workbox: {
          navigateFallback: '/',
          navigateFallbackDenylist: [/^\/api/],
          globPatterns: ['**/*.{js,css,html,png,svg,ico,woff,woff2}'],

          // Runtime caching strategies
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'images-cache',
                expiration: {
                  maxEntries: 60,
                  maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
                }
              }
            },
            {
              urlPattern: /^https:\/\/api\..*/i,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'api-cache',
                networkTimeoutSeconds: 10,
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 60 * 5 // 5 minutes
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            }
          ],

          cleanupOutdatedCaches: true,
          clientsClaim: true,
          skipWaiting: true,
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