/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00FFFF",
        secondary: "#7B61FF",
        darkBg: "#0B0C10",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // ✅ define the font family
      },
    },
  },
  plugins: [],
};
