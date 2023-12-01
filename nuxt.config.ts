

// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
	site: {
		url: "http://localhost:3000"
	},
	typescript: {
		strict: false,
	},
	robots: {
		UserAgent: '*',
		Disallow: ''
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
	modules: ['nuxt-simple-sitemap','@nuxtjs/supabase', 'nuxt-icon', '@pinia/nuxt', '@nuxtjs/tailwindcss', "@nuxtjs/robots"],
	routeRules: {
		'/sandbox': {index: false},
	},

	nitro: {
		prerender: {
			// routes: [
			// 	"/tiktoks", '/user', '/music', '/hashtag', '/hello'
			// ],
			crawlLinks: true,

		}
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
	runtimeConfig: {
		baseUrl: "http://localhost:3000/",
		public: {
			baseUrl: "http://localhost:3000/"
		}
	},
	
	tailwindcss: {
		exposeConfig: true,
		viewer: true,
	}
})