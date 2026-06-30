/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f7f3',
          100: '#dcebe1',
          200: '#bbd7c5',
          300: '#8fb9a1',
          400: '#5d9476',
          500: '#3d7760',
          600: '#2c5e4b',
          700: '#234b3c',
          800: '#1d3b30',
          900: '#0f2419',
          950: '#08160f',
        },
        gold: {
          50: '#fbf8ef',
          100: '#f5edd3',
          200: '#ead9a6',
          300: '#ddbf6e',
          400: '#d4a847',
          500: '#c8932f',
          600: '#b27626',
          700: '#905a22',
          800: '#774821',
          900: '#623d1f',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 12s ease infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-18px)' } },
        gradient: { '0%,100%': { 'background-position': '0% 50%' }, '50%': { 'background-position': '100% 50%' } },
        shimmer: { '0%': { 'background-position': '-200% 0' }, '100%': { 'background-position': '200% 0' } },
      },
    },
  },
  plugins: [],
};
