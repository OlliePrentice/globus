const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
const alpha = { 100: 'FF', 90: 'E6', 80: 'CC', 70: 'B3', 60: '99', 50: '80', 40: '66', 30: '4D', 20: '33', 10: '1A' };

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: {
          700: '#102257',
          800: '#303645',
          DEFAULT: '#102257',
        },
        secondary: colors.teal,   
        gray: {
          100: '#F4F4F4',
          150: '#F3F4F5',
          200: '#DDDDDD',
          300: '#D8D8D8',
          400: '#959595',
          500: '#979797',
          700: '#5D5D5D',
          800: '#535353',
        },       
        brands: {
          facebook: '#3b5998',
          twitter: '#55acee',
          instagram: '#3f729b',
          linkedin: '#0976b4',
          youtube: '#e52d27',
          vimeo: '#1ab7ea',
          pinterest: '#cc2127'
        }
      },
      fontSize: theme => ({
        'zero': ['0', '0'],
        'xxs':   ['0.688rem', '0.875rem'],  // 13
        'xs':   ['0.813rem', '1.25rem'],  // 13
        'sm':   ['0.875rem', '1.375rem'], // 14
        'lsm':   ['0.938rem', '1.4rem'], // 15
        'base': ['1rem', '1.688rem'], // 16
        'smd':  ['1.063rem', '1.813rem'], // 17
        'md':   ['1.125rem', '1.813rem'], // 18
        'lg':   ['1.25rem', '1.813rem'],  // 20
        'sxl':   ['1.438rem', '1.813rem'],  // 23
        'xl':   ['1.563rem', '1.813rem'],   // 25
        '2xl':  ['1.875rem', '2rem'], // 30
        '3sxl':  ['2.313rem', '2.688rem'], // 37
        '3xl':  ['2.438rem', '2.938rem'], // 39
        '4xl':  ['2.625rem', '3.125rem'],  // 42
        '5sxl':  ['3.063rem', '4rem'],     // 49
        '5xl':  ['3.313rem', '3.5rem'],     // 53
        '6sxl':  ['3.688rem', '3.75rem'],     // 59
        '6xl':  ['3.875rem', '4.375rem'],     // 62
        '7xl':  ['4.75rem', '5.313rem']    // 76
      }),
      fontFamily: {
        'sans-primary': [
          'Modern Era TRIAL',
          ...defaultTheme.fontFamily.sans
        ],
        'serif-primary': [
          ...defaultTheme.fontFamily.serif
        ],
        'mono-primary': [
          ...defaultTheme.fontFamily.mono
        ],
      },
      boxShadow: theme => ({
        'outline': '0 0 0 3px ' + theme('colors.primary.500') + alpha[20],
        'focus': '0 0 0 3px ' + theme('colors.primary.500') + alpha[20]
      }),
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem'
        }
      },

      height: {
        '13': '3.125rem',
        'screen-fix': 'calc(var(--vh, 1vh) * 100);'
      },
      minHeight: {
        'inherit': 'inherit'
      },
      width: {
        '13': '3.125rem'
      },
      maxWidth: {
        '3xl': '45.375rem',
        '4xl': '57rem',
        '8xl': '93.75rem',
        '1/3': '33.333333%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      padding: {
        'full': '100%'
      },
      inset: {
        '0': 0,
        '1/2': '50%'
      },
      rotate: {
        '-135': '-135deg',
        '-270': '-270deg',
        '135': '135deg',
        '270': '270deg',
       },
      transitionDuration: {
        DEFAULT: '500ms'
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      // Plugins
      aspectRatio: {
        '1/1': [1, 1],
        '16/9': [16, 9],
        '4/3': [4, 3]
      },
      screens: {
        'xl': '1260px',
        '2xl': '1260px'
        // ...defaultTheme.screens,
      },
    },
 
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      scale: ['group-hover'],
      margin: ['last'],
      padding: ['important'],
      overflow: ['important'],
      inset: ['important'],
      textDecoration: ['important']
    }
  },
  plugins: [
    require('tailwindcss-aspect-ratio')(),
    require('tailwindcss-typography')({ componentPrefix: '' }),
    plugin(function({ addVariant }) {
      addVariant('important', ({ container }) => {
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`;
          rule.walkDecls(decl => {
            decl.important = true
          })
        })
      })
    })
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
}
