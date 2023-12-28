/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      'poppins': ["'Poppins'", 'sans-serif'],
      'roboto': ["'Roboto'", 'sans-serif'],
      'noto': ["'Noto Sans'", 'sans-serif'],
    },
    colors: {
      'primary': 'blue-900'
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('tailwind-scrollbar-hide'),
  ],
}

