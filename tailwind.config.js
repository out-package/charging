const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  plugins: [
    plugin(({addVariant}) => {
      addVariant('important', ({container}) => {
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`;
          rule.walkDecls(decl => {
            decl.important = true;
          });
        });
      });
    }),
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#48A33C',
      },
      opacity: {
        '01': '0.01',
        '02': '0.02',
        '03': '0.03',
        '04': '0.04',
        '05': '0.05',
        '06': '0.06',
        '07': '0.07',
        '08': '0.08',
        '09': '0.09',
      },
      screens: {
        mxl: '1440px',
      },
    },
  },
  variants: {
    extend: {},
    padding: ['responsive', 'important'],
  },
};
