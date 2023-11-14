// https://nuxt.com/docs/api/configuration/nuxt-config

// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      }
    }
  },
  typescript: {
    strict: false,
  },
  // watchers: {
  //   webpack: {
  //     aggregateTimeout: 300,
  //     poll: 1000
  //   }
  // },
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts','nuxt-icon', '@pinia/nuxt' ],
  // @ts-ignore
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  app: {
    head: {
      htmlAttrs: {
        "data-theme": 'dark',
      },
  
    }
  },
  googleFonts: {
    families: {
      // "Open Sans": [100,200,300,400,500,600,700],
      // "Montserrat": [100,200,300,400,500,600,700],
      // "Roboto": [100,200,300,400,500,600,700],
      // "Poppins": [100,200,300,400,500,600,700],
      // "Raleway": [100,200,300,400,500,600,700],
      // "Inter": [100,200,300,400,500,600,700],
      Lato: [100,200,300,400,500,600,700],
    },
    display: 'swap'
    // @ts-ignore
    // "Open Sans": true,
  }
})
