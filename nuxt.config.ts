// https://nuxt.com/docs/api/configuration/nuxt-config

// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({

	typescript: {
		strict: false,
	},
	/*  watchers: {
		 webpack: {
			aggregateTimeout: 300,
			poll: 1000
		 }
	  },*/
	devtools: {enabled: false},
	modules: ['@nuxtjs/google-fonts', 'nuxt-icon', '@pinia/nuxt', '@nuxtjs/tailwindcss',],
	// @ts-ignore
	app: {
		head: {
			// title: "TikTok Clone",
			meta: [
				{charset: "utf-8"},
				{name: "viewport", content: "width=device-width, initial-scale "},
	
			],
			// link: [
			// 	{rel: "icon", type: "image/x-icon", href: "/favicon.ico"}
			// ],
			htmlAttrs: {
				lang: 'en',
				"data-theme": 'light',
			},

		}
	},
	runtimeConfig: {
		baseUrl: "http://localhost:3000/"
	},

	googleFonts: {
		families: {
			/*      "Open Sans": [100,200,300,400,500,600,700],
					"Roboto": [100,200,300,400,500,600,700],*/
			"Poppins": [300, 400, 500, 600, 700],
			// "Raleway": [100,200,300,400,500,600,700],
			// "Inter": [300,400,500,600,700],
			// Lato: [100,200,300,400,500,600,700],
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
	},
	tailwindcss: {
		exposeConfig: true,
		viewer: true,
	}
})
