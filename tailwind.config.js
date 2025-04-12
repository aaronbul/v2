/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#000000', // Couleur noire pour correspondre au header
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
        slideUp: 'slideUp 0.5s ease-out forwards',
        'progress': 'progress 2s ease-out forwards',
        'shine': 'shine 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        progress: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

