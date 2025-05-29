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
      animation: {
        typewriter: "typewriter 1.5s steps(12) forwards",
        caret: 'typewriter 1.5s steps(12) forwards, blink 1s steps(12) infinite 2s',
        rotate: 'rotate  10s linear  infinite'
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          }
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
        rotate: {
          "0%" : { transform: 'rotate(0deg) scale(10)'},
          "100%" : { transform: 'rotate(-360deg) scale(10)'},
        }
      },
    },
    colors: {
      primary: {
        lightest: "hsla(176,90%,25%,100%)",
        lighter: "hsla(176,83%,20%,100%)",
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
        DEFAULT: "hsla(177,30%,9%,100%)",
        dark: "#FFD700",
      },
      white: {
        light: "#FFD700",
        DEFAULT: "hsla(177,83%,90%,100%)",
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
