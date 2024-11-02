/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
   
    extend: {
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Anek Bangla', 'serif'],
      },
      colors: {
        'wedding-pink': '#FFC0CB',
        'wedding-gold': '#FFD700',
        'wedding-lavender': '#E6E6FA',
        'n-1': '#f5f5f5',
        'color-1': '#1a202c',
        'color-50': '#f6f7f9',
        'color-100': '#ecedf2',
        'color-200': '#d5d8e2',
        'color-300': '#b0b5c9',
        'color-400': '#868eaa',
        'color-500': '#666f91',
        'color-600': '#525a77',
        'color-700': '#434861',
        'color-800': '#3a3f52',
        'color-900': '#343846',
        'color-950': '#292b38',
        'olivine-50': '#f6f8f9',
        'olivine-100': '#ecedf2',
        'olivine-200': '#dfdfdf',
        'olivine-300': '#c8c8c8',
        'olivine-400': '#a6a6a6',
        'olivine-500': '#999999',
        'olivine-600': '#888888',
        'olivine-700': '#7b7b7b',
        'olivine-800': '#676767',
        'olivine-900': '#545454',
        'olivine-950': '#212830',

      },

    

  },
  plugins: [ function ({ addUtilities }) {
    const newUtilities = {
      // Define a new utility class .clip-top-right
      '.clip-top-right': {
        clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0% 100%)',
        borderRadius: '20px',      },
    };
    addUtilities(newUtilities);
  }],
}
}
