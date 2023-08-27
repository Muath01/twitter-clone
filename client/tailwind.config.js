/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        10: "repeat(10, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
      },
      gridRow: {
        "span-9": "span 9 / span 9",
        "span-8": "span 8 / span 8",
      },
    },
  },

  plugins: [],
};
