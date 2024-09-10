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
        background: "var(--background)",
        lightBackground: "var(--light-background)",
        foreground: "var(--foreground)",
        main: "var(--main)",
        mainHover: "var(--main-hover)",
        border: "var(--border)",
      },
    },
  },
  plugins: [],
};
export default config;
