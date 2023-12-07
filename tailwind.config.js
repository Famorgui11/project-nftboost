/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			height: {
				cardNftHeight: "14.75rem",
			},
			maxWidth: {
				grid: "77.5rem",
				cardNftWidth: "17.4rem",
				cardCollectorWidth: "37rem",
				logoMobileWidth: "10rem",
				navHeaderWidth: "48.3rem",
			},
			fontFamily: {
				inter: ["var(--font-inter)"],
				poppins: ["var(--font-poppins)"],
			},
			colors: {
				"blue-primary": "#1D4FFE",
				"green-primary": "#4BCE97",
				"gray-b-card": "#131317",
				"gray-a-card": "#05030A",
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
		screens: {
			"@tablet": "640px",
			"@laptop": "1024px",
			"@desktop": "1280px",
		},
	},
	plugins: [require("tailwindcss-animate")],
};
