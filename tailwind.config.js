module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary theme variables
        primary: "#FF0000",
        grey: "#3d3d3d",

        // Dark Theme variables
        background_dark: "#000",
        secondary_dark: "#ffffff1a",
        text_dark: "#DDDDDD",

        // Light theme variables
        background_light: "#DDD",
        secondary_light: "#F1F1F1",
        text_light: "#000000",

        // Paragraph text color
      },

      fontFamily: {
        primary: ["var(--font-opensans)"],
        secondary: ["var(--font-cairo)"],
      },

      borderColor: {
        light: "#181D3150",
        dark: "#2e2e2e",
      },

      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-5px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(5px)" },
        },
      },
      animation: {
        shake: "shake 0.7s linear 1",
      },
      backgroundImage: {
        "hero-pattern": "url('/technology.jpg')",
      },
    },
  },
  plugins: [],
};
