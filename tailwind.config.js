/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': {max: '480px'},
      // => @media (max-width: 480px) { ... }

      'sm': {max: '640px'},
      // => @media (max-width: 640px) { ... }

      'md': {max: '720px'},
      // => @media (max-width: 768px) { ... }

      'lg': {max: '1024px'},
      // => @media (max-width: 1024px) { ... }

      'xl': {max: '1280px'},
      // => @media (max-width: 1280px) { ... }

      '2xl': {max: '1536px'},
      // => @media (max-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}