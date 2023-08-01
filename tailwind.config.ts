import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "hsl(266deg, 100%, 60%)",
        idk: "#FFF",
      },
    },
    screens: {
      tScreen: "601px",
      lScreen: "781px",
      dScreen: "1080px",
    },
  },
  extend: {},
  plugins: [],
} satisfies Config;
