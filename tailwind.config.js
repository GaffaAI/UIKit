import { GAFFA_THEME } from "./src/theme";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}", "./.storybook/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      ...GAFFA_THEME.extend,
    },
  },
  plugins: [],
};
