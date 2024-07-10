/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#B98F7D",
        secondary: "#DAA520",
        myColor: "#f5deb3"

      }
    },

    fontFamily:{
      lato:["Lato", "sans-serif"],
      display:['Playfair Display', 'serif']
    }
  },
  plugins: [],
}