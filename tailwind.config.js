/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'thinspaced' : ['Smooch Sans', 'sans-serif'],
        'boldhead' : ['Vina Sans', 'sans-serif'],
        'textnormal' : ['Montserrat', 'sans-serif'],
        'robotic' : ['Zen Dots', 'sans-serif']

      },
      backgroundImage: {
        'main-bg': "url('public/loopbg.gif')",
        'gradient-bg': "url('public/ishu-effect-nobg.png')",
      },
      colors: {
        'light': '#D7BCE8',
        'dark': '#000411',
        'primary': '#4BB923',
        'secondary': '#5035AC',
      },
  

    },
  },
  plugins: [],
}

