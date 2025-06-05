/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        grey: '#737373',
        softGrey: '#cbcbcb',
      },
    },
  },
  plugins: [],
};
