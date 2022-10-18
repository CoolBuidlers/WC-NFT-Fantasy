/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Novo: ["Nova Square", "sans-serif"],
      },
      // backgroundImage: {
      //   "tickets-img": "url('../public/img/WC.png')",
      // },
      animation: {
        text: "text 3.1s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "100% 100%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};