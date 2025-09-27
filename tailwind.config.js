/** @type {import('tailwindcss').Config} */
const customColors = require('./app/_styles/colors.json');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: { extend: { colors: customColors } },
  plugins: [],
};
