/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'parallax': "url('./assets/portfolio-background.jpg')",
      },
      backgroundColor: {
        'overlay': 'rgba(62, 52, 91, 0.5)', // Set the overlay color and opacity
      },
      backdropBlur: {
        'modal': '10px', // Set the backdrop blur intensity
      },
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
}
