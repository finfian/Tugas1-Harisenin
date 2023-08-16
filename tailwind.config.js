/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['project1.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        eyes: '#14b8a6',
        dark: '#020617',
        light: '#64748b',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

