// Default config: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Public Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'dark-blue': '#2D314D',
        'lime-green': '#31D35C',
        'bright-cyan': '#2BB7DA',
        'grayish-blue': '#9698A6',
        'light-grayish-blue': '#383F4D',
      },
      spacing: {
        7: '1.75rem',
        9: '2.25rem',
        11: '2.75rem',
        13: '3.25rem',
        14: '3.5rem',
        15: '3.75rem',
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
