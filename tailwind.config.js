/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Barlow', 'sans-serif'],
      'serif': ['Fraunces', 'serif'],
    },
    fontWeight: {
      'body': '600',
      'bold': '700',
      'boldest': '900'
    },
    colors: {
      'white': '#ffffff',
      'yellow': '#fad400',
      'red': '#fe7867',
      'cyan': '#87C4B8',
      'dark-cyan': '#25564b',
      'blue': '#19536b',
      'neutral': {
        '600': '#a7abae',
        '700': '#818498',
        '800': '#5a636c',
        '900': '#23303e'
      }
    }
  },
  plugins: [],
}

