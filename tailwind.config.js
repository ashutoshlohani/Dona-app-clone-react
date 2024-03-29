/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {},
      borderRadius: {
         none: '0',
         sm: '0.125rem',
         DEFAULT: '0.25rem',
         md: '0.5rem',
         lg: '1rem',
         full: '9999px',
         large: '12px',
      },
   },
   plugins: [],
};
