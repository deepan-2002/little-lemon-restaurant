/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      colors: {
        lemonYellow: "#F4CE14",
        lemonGrey: "#495E57",
        lemonSec1: "#EE9972",
        lemonSec2: "#FBDABB",
        lemonWhite: "#EDEFEE",
        lemonBlack: "#333333"
      }
    },
    fontFamily: {
      custom1: ["custom1", "sans-serif"],
      custom2: ["custom2", "sans-serif"],
    },
  },
  plugins: [],
}

