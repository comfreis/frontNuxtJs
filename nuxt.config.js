export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontNuxtJs',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fredoka&display=swap', body: true},
      { rel: 'stylesheet', href: '/css/height.css' },
      { rel: 'stylesheet', href: '/css/overflow.css' },
      { rel: 'stylesheet', href: '/css/cursor.css' },
      { rel: 'stylesheet', href: '/css/width.css' },
      { rel: 'stylesheet', href: '/css/margin.css' },
      { rel: 'stylesheet', href: '/css/padding.css' },
      { rel: 'stylesheet', href: '/css/color.css' },
      { rel: 'stylesheet', href: '/css/align.css' },
      { rel: 'stylesheet', href: '/css/border.css' },
      { rel: 'stylesheet', href: '/css/font.css' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:12345/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
}
