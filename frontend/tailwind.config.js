/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1A1A2E',
        accent: '#D32F2F',
        surface: '#111122',
        border: '#2A2A40',
        textPrimary: '#FFFFFF',
        textSecondary: '#A0A0B5'
      }
    }
  },
  plugins: [],
}
