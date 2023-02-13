/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00173C",
          50: "#005DF4",
          100: "#0056DF",
          200: "#0046B6",
          300: "#00368E",
          400: "#002765",
          500: "#00173C",
          600: "#000E24",
          700: "#00060F",
          800: "#010204",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
