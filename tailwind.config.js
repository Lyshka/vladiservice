/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        Fira: "Fira Sans Extra Condensed",
      },
      colors: {
        main: {
          DEFAULT: "#D12F22",
        },
      },
      screens: {
        xl: "1368px",
      },
    },
  },
  plugins: [],
};
