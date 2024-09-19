import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   
    extend: {
     colors:{
      white:"#fff",
      black:"#171717",
      blue:"#0A767B",
      graysh:"AAAAAA",
      accent:{
        DEFAULT:"#00ff99",
        hover:"#00e187",
      }
     }
    },
  },
  plugins: [],
};
export default config;
