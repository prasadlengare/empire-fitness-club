/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        empire: {
          ink: '#101114',
          steel: '#242833',
          red: '#e11d2e',
          gold: '#f7b733',
          mist: '#f4f7f9',
        },
      },
      boxShadow: {
        glow: '0 24px 80px rgba(225, 29, 46, 0.28)',
      },
    },
  },
  plugins: [],
};
