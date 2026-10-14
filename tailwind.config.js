/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#061a12',
          forest: '#0a261a',
          cardDark: '#0e3122',
          mint: '#34d399',
          mintBright: '#10b981',
          mintLight: '#6ee7b7',
          accent: '#00e599'
        }
      }
    },
  },
  plugins: [],
}
