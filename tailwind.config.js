/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    _colors: {
      purple: "#9144DE",
    },
    backgroundImage: {
      "bg-mobile": "url('../src/assets/images/background-pattern-mobile.svg",
    },
    extend: {},
  },
  plugins: [],
};
