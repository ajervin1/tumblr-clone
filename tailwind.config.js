module.exports = {
	cssPath: '~/assets/css/tailwind.css',

	theme: {
		fontFamily: {
			'inter': ['inter', 'sans-serif'],
			'poppins': ['poppins', 'serif'],
			'fira-mono': ['fira-mono'],
		},
	},
	daisyui: {
		themes: ["light", "dark", "cupcake", 'dracula'],
	},
	plugins: [
		require("@tailwindcss/typography"),
		require('daisyui'),
	],



}