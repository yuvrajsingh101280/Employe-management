/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#021526",
        "navy": "#03346E",
        "light-blue": "#6EACDA",
        "beige": "#E2E2B6"
      },
      screens: {
        "phone": "480px",
        "tablet": "760px",
        "laptop": "1024px",
        "desktop": "1280px",
        "large-screen": "1536px"


      }
    },
  },
  plugins: [],
}
