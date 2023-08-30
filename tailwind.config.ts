import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "hsl(266deg, 100%, 60%, 1)",
        mainColor2: "hsl(266deg, 100%, 60%, .5)",
        bgColor: "#181818",
        white: "#FFF",
      },
    },
    screens: {
      ms: "601px",
      ls: "781px",
      xls: "1080px",
    },
  },
  plugins: [
    plugin(function ({ addBase, addUtilities, theme, addComponents }: { [key: string]: any }) {
      addBase({
        b: {
          color: "inherit",
          fontFamily: "inherit",
          fontWeight: "bold",
          textDecoration: `underline ${theme("colors.mainColor")}`,
        },
      });
      addUtilities({
        ".mainButton": {
          backgroundColor: theme("colors.mainColor"),
          border: `2px solid ${theme("colors.mainColor")}`,
          padding: "10px 20px",
          borderRadius: "10px",
          fontWeight: "bold",
          fontFamily: "inter",
          fontSize: "14px",
          transition: "all .2s ease-in-out",
          color: theme("colors.white"),
        },
        ".secButton": {
          backgroundColor: "inherit",
          border: `2px solid ${theme("colors.mainColor")}`,
          padding: "10px 20px",
          borderRadius: "10px",
          fontWeight: "bold",
          fontFamily: "inter",
          fontSize: "14px",
          transition: "all .2s ease-in-out",
          color: "inherit",
        },
        ".ghostButton": {
          backgroundColor: "transparent",
          border: `2px solid transparent`,
          padding: "10px 0px 10px 20px",
          borderRadius: "10px",
          fontWeight: "bold",
          fontFamily: "inter",
          fontSize: "14px",
          transition: "all .2s ease-in-out",
          color: "inherit",
        },
        ".linkButton": {
          backgroundColor: "transparent",
          border: `2px solid transparent`,
          padding: "inherit",
          borderRadius: "10px",
          fontWeight: "bold",
          fontStyle: "italic",
          fontSize: "14px",
          textDecoration: "underline",
          fontFamily: "inter",
          transition: "all .2s ease-in-out",
          color: "inherit",
        },
        ".mainButton:hover": {
          backgroundColor: theme("colors.mainColor"),
          scale: "1.02",
          boxShadow: `0px 0px 20px 0px ${theme("colors.mainColor2")}`,
        },
        ".secButton:hover": {
          scale: "1.02",
          boxShadow: `0px 0px 20px 0px ${theme("colors.mainColor2")}`,
        },
        ".ghostButton:hover": {
          scale: "1.02",
          color: "inherit",
        },
        ".linkButton:hover": {
          scale: "1.02",
          textDecoration: `underline ${theme("colors.mainColor")}`,
        },
        ".mainButton:disabled": {
          opacity: "0.5",
        },
        ".secButton:disabled": {
          opacity: "0.5",
        },
        ".ghostButton:disabled": {
          opacity: "0.5",
        },
        ".linkButton:disabled": {
          opacity: "0.5",
        },
        ".mainButton:hover:disabled": {
          scale: "none",
          boxShadow: "none",
        },
        ".secButton:hover:disabled": {
          scale: "none",
          boxShadow: "none",
        },
        ".ghostButton:hover:disabled": {
          scale: "none",
          boxShadow: "none",
        },
        ".linkButton:hover:disabled": {
          scale: "none",
          boxShadow: "none",
        },
        ".customShadowMainColor1": {
          boxShadow: `0px 0px 30px 0px ${theme("colors.mainColor")}`,
        },
        ".customShadowMainColor2": {
          boxShadow: `0px 0px 30px 0px ${theme("colors.mainColor2")}`,
        },
        ".customTextShadowMainColor1": {
          textShadow: `0px 3px 5px ${theme("colors.mainColor")}`,
        },
        ".customTextShadowMainColor2": {
          textShadow: `0px 3px 5px ${theme("colors.mainColor2")}`,
        },
      });
    }),
  ],
} satisfies Config;
