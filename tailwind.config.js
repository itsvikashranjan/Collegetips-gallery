/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF',
        secondary: '#2DBB69',
        accent: '#A020F0',
        dark: '#212529',
        light: '#F8F9FA',
        hover: '#65DB3D'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 