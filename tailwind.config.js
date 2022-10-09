

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
        'faded-white': '#fefae0',
      },
      width: {
        'viewport-95': '95vw',
      },
      height: {
        'header-max': '12.7rem',
      },
      backgroundImage: {
        menuBgImg: "url('medias/women_photographer.jpg')"
      },
      screens: {
        'phone': '0px', 
        'widePhone': '500px',
        'tablet': '640px',
        'wideTablet': '900px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out',
        'fadeIn': 'fadeIn 500ms',
        'heartBeat': 'beat 0.2s ease-in-out forwards',
        'appear': 'disappearWithColorChanging 0.6s ease-in-out forwards',
        'appear-1': 'disappearWithColorChanging 0.8s ease-in-out forwards',
        'appear-2': 'disappearWithColorChanging 1s ease-in-out forwards',
        'out': 'disappear 2s normal forwards',
        'in': 'appear 2s normal forwards',
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
            height: '100%',
          }
        },
        fadeOut: {
          '0%': {
            height: '5rem',
          },
          '100%': {
            height: '0',
          }
        },
        beat: {
          '0%': {
            color: '#9b2226',
            opacity: '0.5',
          },
          
          '50%': {
            transform: 'scaleX(1.1)',
            color: '#9b2226',
            opacity: '0.7',
          },
          
          '95%': {
            transform: 'scaleX(1.1)',
          },

          '100%': {
            transform: 'scaleX(1)',
            color: '#9b2226'
          },
        },
        disappearWithColorChanging: {
          '0%': {
            'color': '#9b2226',
            'opacity': 0.6,
          },
          '100%': {
            'color': '#9b2226',
            'opacity': 0,
          },
        }, 
        disappear: {
          '0%': {
            'opacity': 1,
          },
          '100%': {
            'opacity': 0
          }
        },
        appear: {
          '0%': {
            'opacity': 0,
          },
          '100%': {
            'opacity': 1
          }
        }
      },
      gridAutoRows: {
        '2fr': 'minmax(0, 2fr)',
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
