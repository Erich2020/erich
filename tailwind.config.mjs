/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      accent: {
        50: "#eee7f5",
        100: "#d3c4e8",
        200: "#b69dd9",
        300: "#9975ca",
        400: "#8357be",
        500: "#6e39b3",
        600: "#6534ad",
        700: "#592ca4",
        800: "#4e269b",
        900: "#3b1a8d",
      },
    },
    extend: {},
  },
  plugins: [],
};
