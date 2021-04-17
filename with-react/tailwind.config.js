module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0FA9E6",
          light: "#3fbaeb",
          dark: "#0c87b8",
        },
      },
      gridTemplateAreas: {
        lg: ["content image"],
        "2xl": ["content content image image image"],
        "card-lg": ["card-0 card-1"],
        "card-xl": ["card-0 card-1 ."],
      },
      gridTemplateColumns: {
        lg: "repeat(2,minmax(0,1fr))",
        "2xl": "repeat(4,minmax(0,1fr)) 2fr",
        "card-lg": "repeat (2, minmax(0,1fr))",
        "card-xl": "repeat (3, minmax(0,1fr))",
      },
      fontFamily: {
        headline: ["Poppins", "sans-serif"],
      },
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
