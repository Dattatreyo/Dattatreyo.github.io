module.exports = {
  mode: 'jit',
  content: ["./index.html", "./styles.css"],
  theme: {
    extend: {
      fontFamily: {
        'send-flowers': ['"Send Flowers"', 'cursive'],
        'jura': ['Jura', 'sans-serif'],
        'tilt-warp': ['"Tilt Warp"', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
      colors: {
        customBeige: '#E1D7B7',
      },
    },
  },
  plugins: [],
}
