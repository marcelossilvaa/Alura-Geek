/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        black: '#464646',
        blue: {
          500: '#2a7ae4',
          200: '#5595e9',
          100: '#d4e4fa',
        },
        gray: {
          100: '#f5f5f5',
          200: '#a2a2a2',
        },
      },

      fontSize: {
        sm: '0.75rem',
        md: '0.875rem',
        base: '1rem',
        lg: '1.375rem',
        xl: '2rem',
        xxl: '3.25rem',
      },
    },
  },
  plugins: [],
};
