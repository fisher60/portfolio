/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "primary": ["Roboto"]
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

