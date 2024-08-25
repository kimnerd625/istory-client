import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};
export default config;
