import pkg from './package'

export const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/daveberning.io-css-grid/'
  }
} : {
  router: {
    base: ''
  }
}

export default {
  ...routerBase,
  mode: 'universal',
  head: {
    title: 'Dave Berning | Web Developer | Cincinnati',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: "https://fonts.googleapis.com/css?family=Roboto:400,900&display=swap", rel: "stylesheet" }
    ],
  },
  loading: { color: '#FFFFFF' },
  css: [
    "~/assets/styles.scss",
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  plugins: [
    '~/plugins/fontawesome.js'
  ],
  modules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
  scss: [
    './assets/scss/variables.scss'
  ],
 },
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
