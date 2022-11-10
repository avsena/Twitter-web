/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  darkMode: [
    'class'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Nunito, sans-serif'
      },
      fontSize: {
        xs: 13,
        sm: 14,
        base: 15,
        lg: 16,
        xl: 19,
        '2xl': 20,
        '3xl': 21,
        '4xl': 23
      },
      colors: {
        'blue-1': '#1DA1F2',
        'blue-2': '#1A8CD8',
        'flutuar': '#00BFFF',
        'green': '#0CB245',
        black: '#0F1419',
        red: '#F4245E',
        white: '#FFFFFF',
        'dark-1': '#17202A',
        'dark-2': '#1C2733',
        'dark-3': '#283340',
        'dark-4': '#3A444C',
        'dark-5': '#5B7083',
        'dark-6': '#8899A6',
        'dark-7': '#EBEEF0',
        'dark-8': '#F7F9FA'
      }
    },
  },
  plugins: [],
}
