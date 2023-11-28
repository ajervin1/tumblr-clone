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
				devtools: {
				 enabled: true,

				 timeline: {
					 enabled: true,
					},
				},
				modules: ['@nuxtjs/supabase','@nuxtjs/google-fonts', 'nuxt-icon', '@pinia/nuxt', '@nuxtjs/tailwindcss',],
				// site: {
				// 	url: "localhost:3000"
				// },
				// nitro: {
				// 	prerender: {
				// 		crawlLinks: true,
				//
				// 	}
				// },
				supabase: {
								redirect: false,
				},
				// @ts-ignore
				app: {
								head: {
												// title: "TikTok Clone",
												link: [
																{href: "https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap", rel: "stylesheet"}
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