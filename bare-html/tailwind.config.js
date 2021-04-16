module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    gridTemplateAreas: {
      lg: ["content image"],
      "2xl": ["content content image image image"],
    },
    gridTemplateColumns: {
      lg: "repeat(2,minmax(0,1fr))",
      "2xl": "repeat(4,minmax(0,1fr)) 2fr",
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
    gridTemplateAreas: ["responsive"],
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
