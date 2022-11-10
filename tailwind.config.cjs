/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // 'lg2': '1300px',
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
}
