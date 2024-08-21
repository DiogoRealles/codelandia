import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        about: "url('../assets/img/about-img.jpg')",
      },

      fontFamily: {
        title: ["var(--font-space_grotesk)"],
        body: ["var(--font-inter)"],
      },

      fontSize: {
        // TITLES
        "title-56": [
          "3.5rem",
          {
            lineHeight: "110%",
            letterSpacing: "0px",
            fontWeight: "500",
          },
        ],
        "title-48": [
          "3rem",
          {
            lineHeight: "110%",
            letterSpacing: "0px",
            fontWeight: "500",
          },
        ],
        "title-24": [
          "1.5rem",
          {
            lineHeight: "120%",
            letterSpacing: "0px",
            fontWeight: "600",
          },
        ],
        "title-20": [
          "1.25rem",
          {
            lineHeight: "160%",
            letterSpacing: "0px",
            fontWeight: "500",
          },
        ],

        // BODY
        "body-18": [
          "1.125rem",
          {
            lineHeight: "160%",
            letterSpacing: "0px",
            fontWeight: "600",
          },
        ],
        "body-14": [
          "0.875rem",
          {
            lineHeight: "160%",
            letterSpacing: "0px",
            fontWeight: "500",
          },
        ],
      },

      colors: {
        "orange-normal": "#FF7E1E",
        "green-normal": "#0E3E29",
        "green-dark": "#052014",
      },

      maxWidth: {
        container: "78rem",
      },

      animation: {
        drawLine: "drawLine 1s ease-in .5s forwards",
        floating: "floating 3s ease-in-out .5s alternate infinite",
      },
      keyframes: {
        drawLine: {
          "100%": {
            width: "100%",
          },
        },
        floating: {
          "0%": {
            transform: "translate3d(0px, 0px, 0px)",
          },
          "50%": {
            transform: "translate3d(15px, 0px, 0px)",
          },
          "100%": {
            transform: "translate3d(0px, 0px, 0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
