/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "REM": "REM, sans-serif"
      }
    },
    colors: {
      "amarillo-cremita": "rgb(255,239,166,1)"
    },
  },
  plugins: [],
}