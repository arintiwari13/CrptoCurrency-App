/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto Mono", "monospace"],
    },
    colors:{
      white: "#fff",
      myfav:{
        50: "#686D76",
        100: "#180161",
        150: "#F8EDED",
        200: "#C9DABF", 
        250: "#C9DABF" ,
        300: "#FB773C" ,
        350: "#00D515",
        400: "#ff4646"
      },
    }
  },
  plugins: [],
}

