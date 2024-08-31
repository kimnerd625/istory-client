import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "dot-bounce": "dot-bounce 1.5s infinite ease-in-out",
      },
      keyframes: {
        "dot-bounce": {
          "0%, 100%": {
            transform: "translateY(0)",
            backgroundColor: "#757575",
            opacity: "1",
          },
          "50%": {
            transform: "translateY(-10px)",
            backgroundColor: "#1c1c1c",
            opacity: "0.7",
          },
        },
      },
      colors: {
        home: {
          bg: "#F4F5FA",
        },
        main: {
          300: "#CADFFF",
          400: "#98BFFB",
          500: "#7DB0FF",
          600: "#5F9AF5",
        },
      },
      backgroundImage: {
        'custom-background': 'url(/images/paper-texture.png)',
      },
    },
  },
  plugins: [],
};
export default config;
