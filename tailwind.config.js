/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Sky: "#00A1FC",
        Co1: "#D3BC8D",
        Co2: "#244C5A",
      },
      width: {
        Lxll: "50rem",
        Mxll: "30rem",
      },
    },
  },
  plugins: [],
};
