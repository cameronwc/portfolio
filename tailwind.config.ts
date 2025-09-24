import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      colors: {
        brand: {
          50: "#f5f7ff",
          100: "#e6ebff",
          200: "#c3ccff",
          300: "#9faeff",
          400: "#7c8fff",
          500: "#5871ff",
          600: "#3e57e6",
          700: "#2f42b4",
          800: "#212d81",
          900: "#13184f"
        }
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.15) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-size": "60px 60px",
      },
      boxShadow: {
        glow: "0 0 60px rgba(88, 113, 255, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
