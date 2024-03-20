import colors from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          hover: colors.gray[100],
          border: colors.gray[300],
          text: colors.gray[600],
        },
      },
    },
  },
  plugins: [],
}
