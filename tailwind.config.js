/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "inter":[`"Inter", sans-serif`]
      },
      colors:{
        "primary-blue":"#0052fe",
        "dark-green":"#0FBA83",
        "light-green":"#EBF9F4",
        "grey-text":"#768396",
        "light-red":"#FDF1ED",
        "dark-red":"#E96A74"
      }
    },
  },
  plugins: [],
}