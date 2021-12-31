module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
      },
      screens: {
        1200: "1200px",
      },
      colors: {
        primaryBg: "#0ca59d",
        secondaryBg: "#f7f9fc",
        darkPrimary: "#08756f",
        footerBg: "#182c51",
        footerDarkBg: "#0d1d3b",
      },
    },
  },
  plugins: [],
};
