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
      width: {
        'viewport-95': '95vw',
      },
      height: {
        'header-max': '12.7rem',
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out',
        'fadeIn': 'fadeIn 500ms',
      },
      keyframes: {
        wiggle: {
          '50%': { transform: 'rotate(90deg)' },
        },
        fadeIn: {
          '0%': {
            height: '0px',
          },
          '100%': {
            height: '12.7rem',
          }
        },
        fadeOut: {
          '0%': {
            height: '5rem',
          },
          '100%': {
            height: '0',
          }
        }
      },
    },
  },
  plugins: [],
}
