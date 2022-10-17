export default {
  head: {
    title: 'Flexberry Launcher — Open-source launcher Minecraft',
    htmlAttrs: {
      lang: 'en'
    },
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-J5TCL94DLD",
        async: true,
      },
      {
        src: "ga.js",
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'title', name: 'title', content: 'Flexberry Launcher — Open-source launcher for Minecraft' },
      { hid: 'description', name: 'description', content: 'Open-source, secure and lightweight launcher for Minecraft. Always up to date with latest Minecraft updates.' },
      { hid: 'theme-color', name: 'theme-color', content: '#6822a8' },

      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://flexberry.app/' },
      { name: 'og:title', content: 'Flexberry Launcher — Open-source launcher for Minecraft' },
      { name: 'og:description', content: 'Open-source, secure and lightweight launcher for Minecraft. Always up to date with latest Minecraft updates.' },
      { name: 'og:image', content: '/metaimage.png' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://flexberry.app/' },
      { name: 'twitter:title', content: 'Flexberry Launcher' },
      { name: 'twitter:description', content: 'Open-source, secure and lightweight launcher for Minecraft. Always up to date with latest Minecraft updates.' },
      { name: 'twitter:image', content: '/metaimage.png' }
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },
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
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
