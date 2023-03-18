/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js, jsx}'],
  theme: {
    extend: {
      colors: {
        'login-blue': '#2952e3',
        'login-hover': '#2546bd'
      },
    },
  },
  plugins: [],
};
