/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html",
    "./pages/**/*.html",
    "./components/**/*.html",
    "./javascript/**/*.js"

  ],
  
  theme: {
    extend: {
      colors: {
        primaryRed: "#A10000",
        darkOrange: "#CC6123",
        lightOrange: "#E67635",
        goldAccent: "#8D6926",
        cremeAccent: "#EDEADD",
        blackAccent: "#181818",
        greyBG: "#F5F5F5",
        blackText: "#252525"
      },
      fontFamily: {
        brandon: ["brandon-grotesque", "sans-serif"],
        source: ["Source Sans 3", "sans-serif"]
      }
    },
  },
  plugins: [],
}; 