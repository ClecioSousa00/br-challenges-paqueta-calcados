/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradientBar: 'linear-gradient(174deg, #FF8A29 0%, #CF5D00 100%)',
        heroBackground: "url('/banner-hero.png')",
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
        alt: ['var(--font-montserrat)'],
      },
      colors: {
        primary: '#FF8A29',
        'primary-2': '#CF5D00',
        'primary-3': '#F99500',
        secondary: '#383838',
        'secondary-2': '#787878',
        dark: '#121212',
        success: '#65C239',
      },
    },
  },
  plugins: [],
}
