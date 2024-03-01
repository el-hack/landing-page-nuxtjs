// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // image:{
  //   dir: 'assets/images'
  // },
  modules: ['@nuxtjs/tailwindcss','nuxt-icon'],
  css: ['~/assets/css/main.css'],
})
