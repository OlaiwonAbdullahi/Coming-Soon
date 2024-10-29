/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        bg: "#FEF7E3",
        primary: "#FFFFFF",
        secondary: "#1D1F16",
      },
    },
  },
  plugins: [],
};
