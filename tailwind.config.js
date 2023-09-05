/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#31223F",
        lineGoldColor: "#FCA411",
        textGoldColor: "#FC940E",
        btnGoldColor: "#FCB815",
      }
    },
  },
  plugins: [],
}

