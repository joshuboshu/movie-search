/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6D28D9',
        'secondary': '#A78BFA',
        'background': '#1F1F1F',
        'card-bg': '#2D2D2D',
        'text-primary': '#F9FAFB',
        'text-secondary': '#D1D5DB',
        'hover-bg': '#4C1D95',
        'button-bg': '#7C3AED',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'scale-up': 'scaleUp 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
