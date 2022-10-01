/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      dark: '#131226',
      primary: '#364C59',
      secondary: '#B0BFAE',
      danger: '#e11d48',
      neutral: '#778C86',
      white:'#EFF2E4'
    },
    extend: {
    },
  },
  plugins: [],
}
