/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    extend: {
      boxShadow: {
        'red-xs': '0 10px 15px rgba(255, 0, 0, 0.5), 0 4px 6px rgba(255, 0, 0, 0.1)', // Customize as needed
      }
    },
    extend: {
      colors: {
        customColor: 'rgb(22, 22, 34)',
        customYellow: 'rgb(255, 201, 41)',
        customgray: '#D9D9D9',
      },
        spacing: {
        '72': '18rem',  // e.g., adding pt-72, which is 18rem
        '80': '20rem',  // pt-80 (20rem)
        '96': '24rem',  // pt-96 (24rem)
      },
    },
   
    fontFamily: {
      pthin: ["Poppins-Thin", "sans-serif"],
      pextralight: ["Poppins-ExtraLight", "sans-serif"],
      plight: ["Poppins-Light", "sans-serif"],
      pregular: ["Poppins-Regular", "sans-serif"],
      pmedium: ["Poppins-Medium", "sans-serif"],
      psemibold: ["Poppins-SemiBold", "sans-serif"],
      pbold: ["Poppins-Bold", "sans-serif"],
      pextrabold: ["Poppins-ExtraBold", "sans-serif"],
      pblack: ["Poppins-Black", "sans-serif"],
    },
    // extend: {
    //   spacing: {
    //     '72': '18rem',  // e.g., adding pt-72, which is 18rem
    //     '80': '20rem',  // pt-80 (20rem)
    //     '96': '24rem',  // pt-96 (24rem)
    //   },
    // },
  },
  plugins: [require("tailwindcss-animate")],
}
// tailwind.config.js

