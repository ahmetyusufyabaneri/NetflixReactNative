/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        darkGrey: '#212121',
        grey: '#737373',
        softGrey: '#cbcbcb',
        red: '#e50914',
      },
    },
  },
  plugins: [],
};
