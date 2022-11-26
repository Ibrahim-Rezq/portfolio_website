/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minHeight: {
      page: "calc(100vh - 5rem)",
      cont: "calc(100vh - 10rem)",
    },
    minWidth: {
      post: "336px",
    },
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      colors: {
        slate: colors.slate,
        sky: colors.sky,
        blue: colors.blue,
        indego: colors.indego,
        green: colors.green,
        teal: colors.teal,
      },
    },
  },
  plugins: [],
}
