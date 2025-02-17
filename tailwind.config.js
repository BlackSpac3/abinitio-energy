/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          "2xl": "1400px",
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1e764c",
        "primary-light": "#e3ede9",
      },
      gridTemplateColumns: {
        "auto-fill-280": "repeat(auto-fill, minmax(280px, 1fr))",
      },
    },
  },
  plugins: [],
};
