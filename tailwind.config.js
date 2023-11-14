module.exports = {
	cssPath: '~/assets/css/tailwind.css',

	theme: {

	},
	daisyui: {
		themes: ["light", "dark", "cupcake", 'dracula'],
	},
	plugins: [
		require("@tailwindcss/typography"),
		require('daisyui'),
	],



}