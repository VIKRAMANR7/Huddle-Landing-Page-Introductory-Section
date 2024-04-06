/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      mobile: { min: "375px", max: "767px" },
    },
    extend: {
      colors: {
        violet: "hsl(257, 40%, 49%)",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        "Open-Sans": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
