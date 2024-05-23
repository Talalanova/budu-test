export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
  ],

  // plugins: [
  //   { src: './plugins/pinia', mode: 'client' }
  // ],

  imports: {
    autoImport: true
  }

  // pinia: {
  //   storesDirs: ['./stores/**'],
  // },
})
