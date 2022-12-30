/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Alegreya : ["Alegreya","sans-serif"],
        Josefin : ["Josefin Sans"],
        Cedarville : ["Cedarville Cursive"]
      },
    },
  },
  plugins: [],
}
