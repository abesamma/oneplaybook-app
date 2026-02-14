/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/svg/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DD2476',
          highlight: '#FF512F',
        }
      },
      fontFamily: {
        header: ['Roboto', 'sans-serif'],
        body: ['Noto Sans JP', 'sans-serif']
      }
    }
  },
  plugins: []
};
