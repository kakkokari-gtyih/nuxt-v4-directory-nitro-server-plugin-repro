// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  nitro: {
    plugins: [
      '@@/server/plugins/appendComment.ts',
    ],
  },
  devtools: { enabled: false },
})
