// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/"
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/scss/style.scss";'
        }
      }
    }
  }
})
