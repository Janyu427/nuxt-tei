// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/nuxt-tei/' : '/',
    buildAssetsDir: '/static/'
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
