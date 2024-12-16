/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#74cb83",
        light: "#ebf2f9",
        background: "#fff",
      },
      fontFamily: {
        pthin: ["Roboto-Thin", "sans-serif"],
        pthinitalic: ["Roboto-ThinItalic", "sans-serif"],
        plight: ["Roboto-Light", "sans-serif"],
        plightItalic: ["Roboto-LightItalic", "sans-serif"],
        pregular: ["Roboto-Regular", "sans-serif"],
        pmedium: ["Roboto-Medium", "sans-serif"],
        pmediumitalic: ["Roboto-MediumItalic", "sans-serif"],
        pbold: ["Roboto-Bold", "sans-serif"],
        pbolditalic: ["Roboto-BoldItalic", "sans-serif"],
        pitalic: ["Roboto-Italic", "sans-serif"],
        pblack: ["Roboto-Black", "sans-serif"],
        pblackitalic: ["Roboto-BlackItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
