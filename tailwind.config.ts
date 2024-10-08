import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#FFF",
          secondaryBackground: "#F7F7F8",
          text: "#2E2E2E",
        },
        dark: {
          background: "#181818",
          secondaryBackground: "#1E1E1E",
          text: "#E3E3E3",
        },
      },
    },
  },
  plugins: [],
};
export default config;
