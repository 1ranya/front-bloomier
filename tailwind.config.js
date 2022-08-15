/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'title': ['Aboreto', 'cursive'],
      'text-uppercase': ['Carrois Gothic SC', 'sans-serif'],
      'text': ['Raleway', 'sans-serif'] 
    },
    extend: {
      colors: {
        'primary-color': '#2f3e46',
        'secondary-color': '#dda15e',
      },
    },
  },
  plugins: [],
}
