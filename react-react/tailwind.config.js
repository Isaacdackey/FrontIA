// @ts-check
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        crimson: ['"Crimson Text"', 'serif'],
        anonymous: ['"Anonymous Pro"', 'monospace']
      },
      colors: {
        'custom-green': '#1A2212',
        'custom-white': '#FFFFFF'
      }
    }
  },
  plugins: []
}