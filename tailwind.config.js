module.exports = {
  content: ["./**/*.{html,js,liquid}"],
  theme: {
    fontFamily: {
      'platform': ['Platform', 'sans-serif'],
      'gt-super-text': ['GT Super Text', 'serif'],
      'gt-super-display': ['GT Super Display', 'serif']
    },
    extend: {
      colors: {
        yellow: '#E3FF21',
        blue: '#85ABBD',
        green: '#00966E',
        cream: '#F4EDE5'
      },
      screens: {
        '2xl': '1440px'
      }
    },
  },
  plugins: [],
}
