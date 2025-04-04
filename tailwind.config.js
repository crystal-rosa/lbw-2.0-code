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
        blackText: "#252525",
        inactiveGrey: "#A9A9A9",
        backgroundDefault: "#F5F5F5"
      },
      fontFamily: {
        brandon: ["brandon-grotesque", "sans-serif"],
        source: ["Source Sans 3", "sans-serif"]
      },
      fontSize:{
        // mobile sizes
        'mobile-detail': ['10px'],
        'mobile-paragraph':['14px', {lineHeight: '18px'}],
        'mobile-button':['12px'],
        'mobile-h3':['14px'],
        'mobile-h2':['28px'],
        'mobile-h1':['32px'],
        'mobile-footer':['16px'],

        // desktop sizes
        'desktop-details':['12px'],
        'desktop-button':['14px'],
        'desktop-paragraph':['14px',{lineHeight: '22px'}],
        'desktop-paragraph2':['16px'],
        'desktop-footer':['21px'],
        'desktop-h3':['24px'],
        'desktop-h2':['42px'],
        'desktop-h1':['64px'],
        'desktop-menu-title':['28px']
      }
    },
  },
  plugins: [],
}; 