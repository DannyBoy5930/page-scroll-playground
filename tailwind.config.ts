import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        ltGreen: "#5C7f71",
        ltRed: "#802520",
        ltYellow: "#BA8530",
        ltBlack: "#181818",
        ltWhite: "#F5EDDC",
        ltOrange: "#B2653B",
      },
    },
  },
  plugins: [],
} satisfies Config;
