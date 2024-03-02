/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
        secondary: "#64748b",
        dark1: "#1e293b",
        nogizaka: "#812891",
        sakurazaka: "#f09db4",
        hinatazaka: "#5bbee4",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
