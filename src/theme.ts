// src/theme.ts
export const GAFFA_THEME = {
  extend: {
    backgroundImage: {
      "gradient-primary": "linear-gradient(135deg, #E6FAEE 0%, #ACEECA 100%)",
      "gradient-secondary":
        "radial-gradient(circle at center, #ACEECA 0%, #FFFFFF 100%)",
    },
    colors: {
      accent: {
        100: "#E6FAEE",
        200: "#ACEECA",
        300: "#10B981",
        400: "#1CB072",
        DEFAULT: "#1AA767",
        600: "#118150",
        700: "#0B4934",
        800: "#09251B",
      },
      black: {
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#9CA3AF",
        400: "#596980",
        DEFAULT: "#101726",
      },
      white: "#FFFFFF",
      red: "#F23030",
      "light-red": {
        primary: "#FEEBEB",
        secondary: "#FEF3F3",
      },
      orange: "#E36209",
    },
    fontFamily: {
      code: ["Google Sans Code", "monospace"],
      sans: ["Inter", "sans-serif"],
      courier: ["Courier Prime", "monospace"],
    },
  },
};
