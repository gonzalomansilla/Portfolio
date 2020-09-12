module.exports = {
  feature: {
    removeDeprecatedGapUtilities: true
  },
  purge: [],
  theme: {
    extend: {
      spacing: {
        '14': '3.5rem'
      },
      opacity: {
        '85': '0.85',
        '90': '0.9',
      },
      colors: {
        'primary-40': 'hsl(219, 95%, 46%)',
        'primary-50': 'hsl(219, 95%, 55%)',
        'primary-60': 'hsl(219, 98%, 60%)',
        'gray-dark': 'hsl(0, 0%, 21%)',
        'dark': 'hsl(0, 0%, 16%)'
      },
      fontSize: {
        'base': ['16px', {
          letterSpacing: '0.025em',
        }],
      },
      fontFamily: {
        'header': ['Jura', 'Georgia'],
        'body': ['Overpass', 'sans-serif']
      },
      screens: {
        'ss': '320px',
        '2xl': '1440px'
      },
    },
  },
  variants: {
    backgroundColor: ['focus', 'hover', 'active'],
    display: ['responsive', 'hover']
  },
  plugins: [],
}
