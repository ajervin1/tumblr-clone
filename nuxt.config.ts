// https://nuxt.com/docs/api/configuration/nuxt-config

// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
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
      title: "TikTok Clone",
      meta: [
        {name: "description", content: "Everything about nuext 3"}
      ],
      link: [
      
      ],
      htmlAttrs: {
        "data-theme": 'light',
      },
  
    }
  },
  googleFonts: {
    families: {
      // "Open Sans": [100,200,300,400,500,600,700],
      // "Roboto": [100,200,300,400,500,600,700],
      // "Poppins": [100,200,300,400,500,600,700],
      // "Raleway": [100,200,300,400,500,600,700],
      // "Inter": [100,200,300,400,500,600,700],
      Lato: [300,400,500,600,700],
    },
    subsets: ['latin'],
    display: 'swap',
    prefetch: false,
    preconnect: false,
    preload: false,
    download: true,
    base64: false,
    
    // @ts-ignore
    // "Open Sans": true,
  }
})
