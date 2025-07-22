/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
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
        100: "#0E958A",
        lightest: "hsla(176,90%,25%,1)",
        lighter: "hsla(176,83%,20%,1)",
        light: "hsla(176,83%,15%,1)",
        DEFAULT: "hsla(176,83%,9%,1)",
        500: "#0A7068",
        dark: "hsla(176,78%,9%,1)",
        darker: "hsla(176,78%,5%,1)",
        darkest: "hsla(176,78%,2%,1)",
        900: "#042A27"
      },
      secondary: {
        100: "#69F2EB",
        light: "hsla(51,100%,50%,1)", // #FFD700
        300: "#31EDE4",
        500: "#14E1D7", // #10BCB3
        DEFAULT: "#10BCB3",
        700: "#0B837D",
        dark: "hsla(51,100%,50%,1)", // #FFD700
        900: "#074B48"
      },
      tertiary: {
        light: "hsla(51,100%,50%,1)", // #FFD700
        DEFAULT: "hsla(177,30%,9%,1)",
        dark: "hsla(51,100%,50%,1)", // #FFD700
      },
      white: {
        light: "hsla(51,100%,50%,1)", // #FFD700
        DEFAULT: "hsla(177,83%,90%,1)",
        dark: "hsla(51,100%,50%,1)", // #FFD700
      },
      black: {
        light: "hsla(51,100%,50%,1)", // #FFD700
        DEFAULT: "hsla(51,100%,50%,1)", // #FFD700
        dark: "hsla(51,100%,50%,1)", // #FFD700
      },
      tan: {
        DEFAULT: "#EEEBDA",
        alt: "#F0EFE8",
      },
      gray: {
        100: "hsla(220,20%,96%,1)", // #F3F4F6
        200: "hsla(220,14%,92%,1)", // #E5E7EB
        300: "hsla(220,13%,87%,1)", // #D1D5DB
        400: "hsla(220,9%,65%,1)",  // #9CA3AF
        500: "hsla(186,31%,40%,1)", // #467E86
        600: "hsla(186,31%,36%,1)", // #3F7278
        700: "hsla(186,31%,32%,1)", // #38656B
        800: "hsla(186,31%,23%,1)", // #2A4C50
        900: "hsla(187,31%,16%,1)",
        DEFAULT: "#467e86"
      },
      alert: {
        100: "hsla(349, 87%, 68%, 1)", // #FDE8E9
        500: "hsla(349, 86%, 56%, 1)", // #EE1b42
        900: "hsla(349, 86%, 36%, 1)", // #AB0D2A
        DEFAULT: "#EE1B42"
      },
      warning: {
        100: "#FFE75C", 
        500: "hsla(51, 100%, 50%, 1)", // #FFD700
        900: "#B89C00", 
        DEFAULT: "#FFD700"
      },
    },
    fontFamily: {
      sans: ["Jost", "sans-serif"],
      bebas: ["var(--font-bebas-neue)"],
      nunito: ["var(--font-nunito)"],
      inter: ["Inter", "sans-serif"],
      jost: ["Jost", "sans-serif"],
    },
    
  },
  plugins: [],
};
