import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "hsl(266deg, 100%, 60%, 1)",
        mainColor2: "hsl(266deg, 100%, 60%, .8)",
        mainColor3: "hsl(266deg, 100%, 60%, .5)",
        mainColor4: "hsl(266deg, 100%, 60%, .3)",
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
          border: `1px solid ${theme("colors.mainColor")}`,
          padding: "10px 20px",
          borderRadius: "10px",
          fontWeight: "bold",
          fontFamily: "inter",
          transition: "all .2s ease-in-out",
        },
        ".mainButton:hover": {
          backgroundColor: theme("colors.mainColor2"),
          scale: "1.02",
          boxShadow: `0px 0px 20px 0px ${theme("colors.mainColor3")}`,
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
