/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Instrument Serif", "serif"],
        sans: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        ink: "#0e0d13",
        tile: "#17151e",
        line: "#26232f",
        cream: "#f1efe8",
        muted: "#a19eab",
        dim: "#6f6c78",
        accent: { DEFAULT: "#a78bfa", ink: "#1a1230" },
      },
    },
  },
  plugins: [],
};
