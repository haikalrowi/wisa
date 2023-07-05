/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ws-blue": {
          100: "#CEF0FE",
          200: "#9DDCFD",
          300: "#6CC2FB",
          400: "#47A8F7",
          500: "#0D80F2",
          600: "#0963D0",
          700: "#0649AE",
          800: "#04348C",
          900: "#022474",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
