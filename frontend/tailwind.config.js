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
      backgroundImage: {
        countdown: "url('../public/img/countdown.svg')",
      },
      colors: {
        "shade-1": "#F20089",
        "shade-2": "#E500A4",
        "shade-3": "#DB00B6",
        "shade-4": "#D100D1",
        "shade-5": "#BC00DD",
        "shade-6": "#B100E8",
        "shade-7": "#A100F2",
        "shade-8": "#8900F2",
        "shade-9": "#6A00F4",
        "shade-10": "#2D00F7",
        "shade-bg": "#14032F",
      },
      animation: {
        text: "text 3s ease infinite",
        "text-hover": "text 2s ease infinite",
        spin: "spin 5s linear infinite",
      },
      keyframes: {
        spin: {
          to: {
            transform: "rotate(360deg)",
          },
        },
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

// @keyframes spin {
//   to {
//       transform: rotate(360deg);
//   }
// }
// .animate-spin {
//   animation: spin 1s linear infinite;
// }
