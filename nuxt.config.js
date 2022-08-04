export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Flexberry Launcher',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'title', name: 'title', content: 'Flexberry Launcher' },
      { hid: 'description', name: 'description', content: '✨ Open-source, secure and lightweight launcher for Minecraft. Always up to date with latest Minecraft updates.' },
      { hid: 'theme-color', name: 'theme-color', content: '#841ee0' },

      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://flexberry.app/' },
      { name: 'og:title', content: 'Flexberry Launcher' },
      { name: 'og:description', content: '✨ Open-source, secure and lightweight launcher for Minecraft. Always up to date with latest Minecraft updates.' },
      { name: 'og:image', content: '/metaimage.png' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://flexberry.app/' },
      { name: 'twitter:title', content: 'Flexberry Launcher' },
      { name: 'twitter:description', content: '✨ Open-source, secure and lightweight launcher for Minecraft. Always up to date with latest Minecraft updates.' },
      { name: 'twitter:image', content: '/metaimage.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
