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


      }, boxShadow: {
        'sm': '0 1px 2px 0 rgba(255, 255, 255, 0.05)', // White small shadow
        'DEFAULT': '0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px -1px rgba(255, 255, 255, 0.1)', // White default shadow
        'md': '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -2px rgba(255, 255, 255, 0.1)', // White medium shadow
        'lg': '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -4px rgba(255, 255, 255, 0.1)', // White large shadow
        'xl': '0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 8px 10px -6px rgba(255, 255, 255, 0.1)', // White extra-large shadow
        '2xl': '0 25px 50px -12px rgba(255, 255, 255, 0.25)', // White 2X large shadow
        'inner': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.05)', // White inner shadow
        'none': '0 0 #0000', // No shadow
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 3s infinite',
      },
    },
  },
  plugins: [],
}
