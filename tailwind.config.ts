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
          textDecoration: `underline ${theme("colors.mainColor")}`,
        },
        "b:hover": {
          textDecoration: `underline ${theme("colors.mainColor")}`,
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
          fontSize: "14px",
          transition: "all .2s ease-in-out",
          color: theme("colors.white"),
        },
        ".secButton": {
          backgroundColor: theme("colors.bgColor"),
          border: `1px solid ${theme("colors.mainColor")}`,
          padding: "10px 20px",
          borderRadius: "10px",
          fontWeight: "bold",
          fontFamily: "inter",
          fontSize: "14px",
          transition: "all .2s ease-in-out",
          color: theme("colors.white"),
        },
        ".ghostButton": {
          backgroundColor: "transparent",
          border: `1px solid transparent`,
          padding: "10px 20px",
          borderRadius: "10px",
          fontWeight: "bold",
          fontFamily: "inter",
          fontSize: "14px",
          transition: "all .2s ease-in-out",
          color: theme("colors.white"),
        },
        ".linkButton": {
          backgroundColor: "transparent",
          border: `1px solid transparent`,
          padding: "10px 20px",
          borderRadius: "10px",
          fontWeight: "bold",
          fontStyle: "italic",
          fontSize: "14px",
          textDecoration: "underline",
          fontFamily: "inter",
          transition: "all .2s ease-in-out",
          color: theme("colors.white"),
        },
        ".mainButton:hover": {
          backgroundColor: theme("colors.mainColor2"),
          scale: "1.02",
          boxShadow: `0px 0px 20px 0px ${theme("colors.mainColor3")}`,
        },
        ".secButton:hover": {
          scale: "1.02",
          boxShadow: `0px 0px 20px 0px ${theme("colors.mainColor3")}`,
        },
        ".ghostButton:hover": {
          scale: "1.02",
          color: theme("colors.mainColor"),
        },
        ".linkButton:hover": {
          scale: "1.02",
          textDecoration: `underline ${theme("colors.mainColor")}`,
        },
      });
    }),
  ],
} satisfies Config;
