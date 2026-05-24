/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0B",
        gold: "#F5C400",
        cream: "#F8F5EC",
        smoke: "#151515",
        line: "rgba(255,255,255,0.12)"
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        display: ["Manrope", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        luxury: "0 24px 80px rgba(0,0,0,0.42)",
        gold: "0 18px 48px rgba(245,196,0,0.18)"
      },
      backgroundImage: {
        "gold-glow": "radial-gradient(circle at 30% 10%, rgba(245,196,0,0.18), transparent 34rem)"
      }
    }
  },
  plugins: []
};
