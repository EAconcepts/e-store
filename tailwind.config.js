/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-1': "url('/src/assets/hero-2.png')",
        'hero-2': "url('/src/assets/hero-3.png')",
        'hero-3': "url('/src/assets/hero-1.webp')",
      },
       colors: {
        'primary-black': '#4c4c4c',
        'price-brown' : '#a8715c',
      },
    },
  },
  plugins: [],
}

