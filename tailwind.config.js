/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilmer: ["var(--font-gilmer)"],
      },
    },
    colors: {
      gray: "#373737",
      blue: "#12355B",
      red: "#F25764",
      white: "#fff",
      black: "#000",
    },
  },
  plugins: [],
};
