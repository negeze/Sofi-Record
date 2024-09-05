/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {


      
      colors:{
        primary:'#CE253F',
        secondary:'#2A2727',
        tertiary:'#FFFFFF',
        'custom-green': '#10B981',
        'custom-white': '#D9D9D9',
        'custom-gray': '#B3B3B3',


      },
      lineHeight: {
        '20':'90px'
      },
      height:{
        '8rem':'25'

      },
      width:{
        '8rem':'25'

      }
    },
  },
  plugins: [],
}

