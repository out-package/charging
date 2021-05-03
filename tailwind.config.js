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
      inset: {
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        full: '100%',
      },
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
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        50: '0.5',
        60: '0.6',
        70: '0.7',
        80: '0.8',
        90: '0.9',
      },
      height: {
        '05': '0.15rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },
      width: {
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },
      screens: {
        mxl: '1440px',
        sx: {min: '319px', max: '639px'},
        sm: {min: '640px', max: '767px'},
        md: {min: '768px', max: '1023px'},
        lg: {min: '1024px', max: '1279px'},
        xl: {min: '1280px', max: '1535px'},
        '2xl': {min: '1536px'},
      },

      fontSize: {
        xss: '0.625rem',
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
    },
  },
  variants: {
    extend: {},
    padding: ['responsive', 'important'],
  },
};
