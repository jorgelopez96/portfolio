/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        brand: {
          purple: "#7c3aed",
          violet: "#a855f7",
          blue: "#3b5bdb",
          pink: "#c026d3",
        },
      },
    },
  },
  plugins: [],
};
