/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // primary: '#FE8C00',
        //  from-[#34ab85] to-[#008d50]'
        // primary: '#23ffb9',
        // primary: '#00df81',
        primary: '#26cc87',
        secondary: '#008d50',
        white: {
          DEFAULT: '#ffffff',
          100: '#fafafa',
          200: '#FE8C00',
        },
        gray: {
          100: '#878787',
          200: '#878787',
        },
        dark: {
          100: '#181C2E',
        },
        error: '#F14141',
        success: '#2F9B65',
      },
      fontFamily: {
        calSans: ['CalSans-Regular', 'sans-serif'],
        quicksand: ['Quicksand-Regular', 'sans-serif'],
        'quicksand-bold': ['Quicksand-Bold', 'sans-serif'],
        'quicksand-semibold': ['Quicksand-SemiBold', 'sans-serif'],
        'quicksand-light': ['Quicksand-Light', 'sans-serif'],
        'quicksand-medium': ['Quicksand-Medium', 'sans-serif'],
      },
    },
  },
};
