import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    title: 'おうちで時間割',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'keyword',
        name: 'keyword',
        content: 'CodeforJapan, おうちで時間割, デジタル, 学び, 今後の学習'
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Code for Japan'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'おうちで時間割 | About'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `https://www.studyathome.jp/`
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'おうちで時間割 | About'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '子どもの学びにデジタルの活用を - 臨時休校期間と今後の学習に向けて 簡単に楽しく学べる環境を今だから、みんなでつくろう。'
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'おうちで時間割 | About'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '子どもの学びにデジタルの活用を - 臨時休校期間と今後の学習に向けて 簡単に楽しく学べる環境を今だから、みんなでつくろう。'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'http://www.studyathome.jp/ogp.png'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'http://www.studyathome.jp/ogp.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon-precomposed.png' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~plugins/vue-carousel', mode: 'client' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  webfontloader: {
    google: {
      families: ['Roboto&display=swap', 'NotoSansJP&&display=swap']
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  env: {
    API_KEY: process.env.API_KEY
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
  }
}
