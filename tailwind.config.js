module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#201E1F",
        elevated: "#403C3E",
        text: "#EEEEEE",
        primary: "#E21ECB",
        darkPrimary: "#5235a6",
        alt: "#C6B9BF",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
