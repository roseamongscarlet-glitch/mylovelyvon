/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rose-dawn': '#fff5f7',
        'rose-blush': '#ffe4e9',
        'rose-heart': '#ff1744',
        'rose-deep': '#c4004e',
        'rose-night': '#8b0032',
        'cream': '#fff9f0',
        'gold': '#d4af37',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
