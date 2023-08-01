import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      tScreen: "601px",
      lScreen: "781px",
      dScreen: "1080px",
    },
  },
  plugins: [],
} satisfies Config;
