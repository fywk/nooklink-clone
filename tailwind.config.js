module.exports = {
  mode: "jit",
  purge: ["./*.html", "./src/*.css"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Colour pallette used in this project
        // Names from color-name.com
        "alabaster": "#f4f1e3",
        "beaver": "#908669",
        "bone": "#dfd9c9",
        "champagne": "#f4ecca",
        "dark-bronze-coin": "#4d3906",
        "dutch-white": "#ede1b8",
        "pearl-aqua": "#82d7aa",
      },
    },
  },
  variants: {
    extend: {
      scale: ["active"],
    },
  },
  plugins: [],
};
