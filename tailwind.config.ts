import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./animations/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#050607",
        graphite: "#101317",
        mist: "#d6dde8",
        acid: "#cdfc52",
        ember: "#ff6747",
        cyan: "#67e8f9",
      },
      boxShadow: {
        glow: "0 0 80px rgba(205, 252, 82, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
