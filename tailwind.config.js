/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        deepGreen: "#26333A",
        brightOrange: "#EF8543",
        brown: "#C2AD93",
        lightBrown: "#E9E0D6",
        darkBrown: "#5C5041",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00b5ee, 7.21%, #ff45a4, 45.05%, #ffba00, 75.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playFair: ["Playfair Display", "serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1280px",
      xl: "1440px",
    },
  },
  plugins: [],
};
