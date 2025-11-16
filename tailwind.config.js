/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#3f3d56",
        sub: "#757095",
        orange: "#f9a829",
        highlight: "#f87f5c",
        light: "#5e6282",
        "main-label": "#a2a5bf",
        "main-light": "#2b335b",
      },
    },
  },
  plugins: [],
};
