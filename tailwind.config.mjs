/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'rowdies': ['Rowdies', 'sans-serif'],
			'righteous': ['Righteous', 'sans-serif'],
			'fira-code': ['Fira Code', 'monospace'],
		},
		extend: {
			colors: {
				'cadet': '#171738',
				'dim-gray': '#726E75',
				'snow': '#FFFCFF'
			}
		},
	},
	plugins: [],
}
