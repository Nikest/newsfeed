// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon',
    ["@nuxtjs/google-fonts", {
      families: {
        "Bowlby+One+SC": [400],
        Roboto: [100, 300, 400, 500, 700, 900],
      }
    }],
  ],
  nitro: {
    experimental: {
      websocket: true
    }
  },
  plugins: ['~/plugins/socket.client.ts'],
  pinia: {
    storesDirs: ['~/stores'],
  },
})