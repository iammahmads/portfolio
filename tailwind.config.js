/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#310072",
        secondry: "#e0c7ff",
        shadow: "#e5e1eb",
        textHeading: "#000000",
        textDecription: "#1f1f1f",
      },
      backgroundImage: {
        splashScreen: "url('/SPLASH_BG.png')",
      },
    },
    keyframes: {
      showUp: {
        "0%": {
          opacity: "0",
        },
        "100%": {
          opacity: "100",
        },
      },
    },
  },
  plugins: [],
};
