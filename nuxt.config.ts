

// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
	site: {
		url: process.env.BASE_URL
	},
	typescript: {
		strict: false,
	},
	robots: {
		UserAgent: '*',
		Disallow: ''
	},
	runtimeConfig: {
		// The private keys which are only available server-side
		apiSecret: '123',
		// Keys within public are also exposed client-side
		public: {
			baseUrl: process.env.BASE_URL ?? "http://localhost:3000"
		}
	},
	/*  watchers: {
						webpack: {
									aggregateTimeout: 300,
									poll: 1000
						}
			},*/
	devtools: {
		enabled: false,
		
		timeline: {
			enabled: true,
		},
	},
	sitemap: {
		sources: ['/api/sitemap'],
	},
	modules: [ '@nuxtjs/supabase','nuxt-simple-sitemap', 'nuxt-icon', '@pinia/nuxt', '@nuxtjs/tailwindcss', "@nuxtjs/robots"],
	routeRules: {
		'/sandbox': {index: false},
	},
	supabase: {
		redirect: false,
	},
	// @ts-ignore
	app: {
		head: {
			// title: "TikTok Clone",
			link: [
				{
					href: "https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap",
					rel: "stylesheet"
				}
			],
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
	
	tailwindcss: {
		exposeConfig: true,
		viewer: true,
	}
})