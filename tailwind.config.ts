import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        accent: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          950: "#083344",
        },
      },
      boxShadow: {
        glow: "0 0 24px rgba(6, 182, 212, 0.25)",
        "glow-sm": "0 0 12px rgba(6, 182, 212, 0.15)",
        "glow-lg": "0 0 40px rgba(6, 182, 212, 0.35)",
      },
      dropShadow: {
        glow: "0 0 12px rgba(6, 182, 212, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
