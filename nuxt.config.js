import redirects from './assets/redirects.json'

export default {
  // Target: https://go.nuxtjs.dev/config-target  pls
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'GPortal - Giulio Pimenoff Verdolin',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { hid: 'charset', charset: 'utf-8' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Giuliopime\'s personal website for quick access to all his socials!' },
      { hid: 'author', name: 'author', content: 'Giulio Pimenoff Verdolin (https://giuliopime.dev)' },
      { hid: 'publisher', name: 'publisher', content: 'Giulio Pimenoff Verdolin (https://giuliopime.dev)' },
      { hid: 'image', name: 'image', content: 'https://giuliopime.dev/icon.png' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid: 'application-name', name: 'application-name', content: 'GPortal' },
      { hid: 'theme-color', name: 'theme-color', content: '#000' },
      { hid: 'og:title', property: 'og:title', content: 'GPortal' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'GPortal - Giulio Pimenoff Verdolin' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://giuliopime.dev' },
      { hid: 'og:description', property: 'og:description', content: 'Giuliopime\'s personal website for quick access to all his socials!' },
      { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
      { hid: 'og:image', property: 'og:image', content: 'https://giuliopime.dev/icon.png' },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
      { hid: 'og:image:width', property: 'og:image:width', content: '2513' },
      { hid: 'og:image:height', property: 'og:image:height', content: '2513' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'Giuliopime pfp' },
    ],
    link: [
      { rel: 'canonical', href: 'https://giuliopime.dev' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/img/icons/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/img/icons/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/img/icons/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/img/icons/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/img/icons/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/img/icons/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/img/icons/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/img/icons/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/icons/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/icons/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/icons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/img/icons/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/img/icons/android-icon-192x192.png' },
    ]
  },

  generate: {
    routes () {
      return [].concat(
        redirects.map(r => `/${r.id}`)
      )
    },
    fallback: true
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
    'aos/dist/aos.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/aos', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      name: 'GPortal - Giulio Pimenoff Verdolin',
      theme_color: '#000',
      ogHost: 'https://giuliopime.dev'
    },
    manifest: {
      lang: 'en',
      name: 'GPortal - Giulio Pimenoff Verdolin',
      short_name: 'GPortal',
      shortcuts: [
        {
          name: "GitHub",
          short_name: "GitHub",
          description: "My GitHub profile",
          url: "/github",
        },
        {
          name: "Discord",
          short_name: "Discord",
          description: "My Discord server",
          url: "/discord",
        },
        {
          name: "Instagram",
          short_name: "Instagram",
          description: "My Instagram profile",
          url: "/instagram",
        },
        {
          name: "Spotify",
          short_name: "Spotify",
          description: "My Spotify profile",
          url: "/spotify",
        },
        {
          name: "Twitch",
          short_name: "Twitch",
          description: "My Twitch profile",
          url: "/twitch",
        },
      ]
    }
  },

  fontawesome: {
    icons: {
      solid: ['faAt', 'faCode', 'faArrowLeft'],
      brands: ['faGithub', 'faDiscord', 'faInstagram', 'faSpotify', 'faTwitch']
    }
  },

  sitemap: {
    hostname: 'https://rxs.to',
  },
}
