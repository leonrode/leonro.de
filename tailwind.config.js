module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: "Playfair Display",
    },
    extend: {
      colors: {
        bg: "#201e1f",
        elevated: "#2B292A",
        primary: "#FF00CC",
        sub: "#A5A5A5",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
