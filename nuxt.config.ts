// https://nuxt.com/docs/api/configuration/nuxt-config

// @ts-ignore
export default defineNuxtConfig({
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      }
    }
  },
  // watchers: {
  //   webpack: {
  //     aggregateTimeout: 300,
  //     poll: 1000
  //   }
  // },
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss',  ],
  // @ts-ignore
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  app: {
    head: {
      htmlAttrs: {
        "data-theme": 'dark',
      },
  
    }
  },
})
