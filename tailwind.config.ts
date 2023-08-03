import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "hsl(266deg, 100%, 60%)",
        bgColor: "#181818",
        white: "#FFF",
      },
    },
    screens: {
      tScreen: "601px",
      lScreen: "781px",
      dScreen: "1080px",
    },
  },
  plugins: [
    plugin(function ({ addBase, addUtilities, theme, addComponents }: { [key: string]: any }) {
      addBase({
        b: {
          color: theme("colors.white"),
          fontFamily: "inter",
          textDecoration: "underline",
        },
      });
      addUtilities({
        ".mainButton": {
          backgroundColor: theme("colors.mainColor"),
          border: "1px solid var(--mainColor)",
          padding: "10px 20px",
          borderRadius: "10px",
          fontWeight: "bold",
          fontFamily: "inter",
        },
        ".secButton": {
          backgroundColor: "var(--mainColor)",
        },
        ".ghostButton": {
          backgroundColor: "var(--mainColor)",
        },
        ".linkButton": {
          backgroundColor: "var(--mainColor)",
        },
      });
    }),
  ],
} satisfies Config;
