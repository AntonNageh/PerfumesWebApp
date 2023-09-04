/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/*.{js,jsx}', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans'],
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semi-bold': 600,
        'bold': 700,
        'extra-bold': 800,
      },
    },
  },
  plugins: [],
}