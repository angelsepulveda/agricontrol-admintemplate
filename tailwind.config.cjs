/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-primary":"#222D32",
        "green-primary":"#00A65A",
      }
    },
  },
  plugins: [],
}
