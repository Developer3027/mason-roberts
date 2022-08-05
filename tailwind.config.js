/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "antique-20": "#dfdacb",
        "bright-yellow": "#faff00",
        "bright-purple": "#ad00ff",
        "bright-green": "#10c500",
        "drk-green": "#075500",
        "link-blue": "#0095d6",
        "st-lt-primary": "#B5E5FF",
        "st-primary": "#3E717E",
        "st-drk-primary": "#40677D",
        "st-lt-secondary": "#FFD7C2",
        "st-secondary": "#FFB389",
        "st-drk-secondary": "#FF9256",
      },
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
        fell: ["IM Fell English SC", "serif"],
        Inconsolata: ["Inconsolata", "monospace"],
        Prompt: ["'Prompt', sans-serif;"],
      },
      backgroundImage: {
        "st-logo": "url(/images/logo.svg)",
      },
    },
  },
  plugins: [],
};
