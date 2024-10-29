import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    //font size classes up to 80px
    fontSize:{
      "10px":"10px",
      "20px":"20px",
      "30px":"40px",
      "50px":"50px",
      "60px":"60px",
      "70px":"70px",
      "80px":"80px",


    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
