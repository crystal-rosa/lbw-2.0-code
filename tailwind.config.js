/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./pages/**/*.html",
    "./components/**/*.html",
    "./javascript/**/*.js",
    "./assets/**/*.js",
    "./assets/**/*.css"
  ],
  safelist: [
    'bg-green-500',
    'text-white',
    'p-4',
    'text-center',
    'bg-primaryRed',
    'text-cremeAccent',
    'font-bold',
    'text-[18px]',
    'text-desktop-h2',
    'font-brandon',
    'md:text-[28px]',
    'text-desktop-footer',
    'text-[16px]',
    'rounded-[8px]',
    'w-44',
    'h-52',
    'leading-none',
    'shadow-md',
    'px-4',
    'py-2',
    'md:px-4',
    'md:py-2',
    'select-btn', 
    'select-btn.active'
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
        backgroundDefault: "#F5F5F5",
        inactiveGrey: '#A9A9A9',
        boxBorder: '#CCCCCC'
      },
      fontFamily: {
        brandon: ["brandon-grotesque", "sans-serif"],
        source: ["Source Sans 3", "sans-serif"]
      },
      fontSize: {
        'mobile-detail': ['12px'],
        'mobile-paragraph': ['16px', { lineHeight: '18px' }],
        'mobile-h3': ['18px'],
        'mobile-h2': ['24px'],
        'mobile-h1': ['28px'],
        'mobile-footer': ['14px'],
        'desktop-details': ['13px'],
        'desktop-button': ['14px'],
        'desktop-paragraph': ['16px', { lineHeight: '22px' }],
        'desktop-paragraph2': ['14px'],
        'desktop-footer': ['21px'],
        'desktop-h3': ['22px'],
        'desktop-h2': ['28px'],
        'desktop-h1': ['32px'],
        'desktop-decor': ['48px'],
        'desktop-menu-title': ['18px']
      }
    }
  },
  plugins: [],
};
