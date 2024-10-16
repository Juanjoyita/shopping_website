/** @type {import ('tailwindcss').config} */
module.exports ={
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding: "15xp"
      },
      colors:{
        accent:"bg-teal-500",
        blackish: "#1b1b1b"
      }, 
    },
  },
  plugins: [],

 }

