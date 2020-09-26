module.exports = {
  purge: ["./**/*.js", "./**/*.html", "./**/*.njk"],
  theme: {
    screens: {
      xs: '380px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
    },
    extend: {
      colors: {
        cyan: "#000000",
      },
    },
  },
  variants: {
    padding: ['last']
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
