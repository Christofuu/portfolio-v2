/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        88: "22rem",
      },
    },
    colors: {
      primary: {
        light: "hsla(176,83%,15%,100%)",
        DEFAULT: "hsla(176,83%,9%,100%)",
        dark: "#042C2A",
      },
      secondary: {
        light: "#FFD700",
        DEFAULT: "hsla(177,84%,40%,100%)",
        dark: "#FFD700",
      },
      tertiary: {
        light: "#FFD700",
        DEFAULT: "#FFD700",
        dark: "#FFD700",
      },
      white: {
        light: "#FFD700",
        DEFAULT: "#FFD700",
        dark: "#FFD700",
      },
      black: {
        light: "#FFD700",
        DEFAULT: "#FFD700",
        dark: "#FFD700",
      },
    },
    fontFamily: {
      sans: ["Jost", "sans-serif"],
    },
    
  },
  plugins: [],
};
