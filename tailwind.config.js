/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7331FF",
          light: "#B795FF",
          dark: "#5719D9",
        },
      },
    },
  },
  plugins: [],
};
