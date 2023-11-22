module.exports = {
	cssPath: '~/assets/css/tailwind.css',
	corePlugins: {
		aspectRatio: false,
	},
	theme: {
		screens: {
			"2xl": {'max': '1535px'},
			// => @media (max-width: 1535px) { ... }
			// 4 columns
			'xl': {'max': '1279px'},
			// => @media (max-width: 1279px) { ... }
			// 3 Columns
			'desktop': {'max': '1023px'},
			// => @media (max-width: 1023px) { ... }

			'tablet': {'max': '767px'},
			// => @media (max-width: 767px) { ... }

			'phone': {'max': '639px'},
			// => @media (max-width: 639px) { ... }
		},
	},
	daisyui: {
		base: true,
		styled: true,
		utils: true,
		themes: ["light", "dark", "cupcake", 'dracula'],
	},
	plugins: [

		require('daisyui'),
	],



}