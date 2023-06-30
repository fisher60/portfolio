/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "primary": ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

