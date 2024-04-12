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
        'brand': {
          'darkPurple': "#13062B",
          'yogiTeal': "#289595",
          'yogiPurple': "#C6ADF4",
          'yellow': "#FFC151",
          'tan': "#FEF5F3",
          'paragraphText': "#5B5368",
        }
      },
      fontFamily: {
        "gasoek": ["Gasoek", "sans-serif"],
        "montserrat": ["Montserrat", "sans-serif"]
      },
      maxWidth: {
        '8xl': "1480px"
      },
      boxShadow: {
        'btn': "0px 4px 0px 0px #13062B"
      },
      fontSize: {
        'title': ["60px", "137%"],
        'mobileTitle': ["40px", "137%"],
      },

      spacing:{
        105:'29.125rem',
        110:"33.25rem",
      }
    },
  },
  plugins: [],
};
export default config;
