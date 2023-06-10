/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./src/*.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage : {
        'bali' : "url(./images/bali.jpg)",
        'chicago' : "url(./images/chicago.jpg)",
        'europe' : "url(./images/europe.jpg)",
        'iceland' : "url(./images/iceland.jpg)",
        'LA' : "url(./images/LA.jpg)",
        'miami' : "url(./images/miami.jpg)",
        'newYork' : "url(./images/new_york.jpg)",
        'norway' : "url(./images/norway.jpg)",
        'sanFrancisco' : "url(./images/sanFrancisco.jpg)",
        'sanFranciscoDesktop' : "url(./images/sanFranciscoDesktop.jpg)",
        'seattle' : "url(./images/seattle.jpg)",
        'switzerland' : "url(./images/switzerland.jpg)",
        'sydney' : "url(./images/sydney.jpg)",
        'yosemite' : "url(./images/yosemite.jpg)",

        'heart' : "url(./svgs/heart.svg)",
        'home' : "url(./svgs/home.svg)",
        'instagram' : "url(./svgs/instagram.svg)",
        'moon' : "url(./svgs/moon.svg)",
        'search' : "url(./svgs/search.svg)",
        'searchNav' : "url(./svgs/search-nav.svg)",
        'twitter' : "url(./svgs/twitter.svg)",
        'user' : "url(./svgs/user.svg)",
        'userNav' : "url(./svgs/user-nav.svg)"
      },
      backgroundColor : theme => ({
        ...theme('colors'),
        'primary' : '#e56c70',
        'secondary' : '#8ed8f6',
        'tertiary' : '#f5c4b7',
        'quaternary' : '#c0e4f2'
      }),
      textColor : {
        'primary' : '#e56c70',
        'secondary' : '#8ed8f6',
        'tertiary' : '#f5c4b7',
        'quaternary' : '#c0e4f2'
      },
      fill : {
        'primary' : '#e56c70',
        'secondary' : '#8ed8f6',
        'tertiary' : '#f5c4b7',
        'quaternary' : '#c0e4f2'
      },
      borderColor : {
        'primary' : '#e56c70',
        'secondary' : '#8ed8f6',
        'tertiary' : '#f5c4b7',
        'quaternary' : '#c0e4f2'
      },
      fontFamily : {
        Montserrat : ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}