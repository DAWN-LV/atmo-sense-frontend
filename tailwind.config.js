/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "shake-horizontal": {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(1rem)" },
          "50%": { transform: "translateX(-1rem)" },
          "75%": { transform: "translateX(1rem)" },
          "100%": { transform: "translateX(0)" }
        }
      },
      animation: {
        "shake-horizontal": "shake-horizontal 0.25s ease-in-out",
      }
    }
  },
  plugins: [],
}