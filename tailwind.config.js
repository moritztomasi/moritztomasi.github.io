module.exports = {
  purge: ["./**/*.js", "./**/*.html", "./**/*.njk"],
  theme: {
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
