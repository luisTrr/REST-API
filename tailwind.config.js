/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#282b33',
        'secondary': '#3c3e44',
        'try': '#cccccc',
      }
    },
  },
  plugins: [],
}