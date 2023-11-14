module.exports = {
	cssPath: '~/assets/css/tailwind.css',
	corePlugins: {
		aspectRatio: false,
	},
	theme: {
		screens: {
			'tablet': '640px',
			// => @media (min-width: 640px) { ... }

			'laptop': '1024px',
			// => @media (min-width: 1024px) { ... }

			'desktop': '1280px',
			// => @media (min-width: 1280px) { ... }
		},
	},
	daisyui: {
		base: true,
		styled: true,
		utils: true,
		themes: ["light", "dark", "cupcake", 'dracula'],
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
		require('daisyui'),
	],



}