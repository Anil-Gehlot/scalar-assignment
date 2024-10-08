/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend:{},
      backgroundColor: theme => ({
       ...theme('colors'),
       'primary': '#202222',
       'secondary': '#191a1a',
       'third': '#2d2f2f',
       'custom-rgb': 'rgb(255, 0, 0)'
      })},
  plugins: [],
}