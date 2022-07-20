/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xssmall: '250px',
        supasmall: '410px',
        small: '560px',
        sma: '650px',
      },
    },
  },
  plugins: [],
};
