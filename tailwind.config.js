// @type {import('tailwindcss').Config} 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
      }
    },
    screens: {
      'mobile': '350px',
      // => @media (min-width: 360px) { ... }
  
      'tablet': '600px',
      // => @media (min-width: 640px) { ... }
  
      'laptop': '1150px',
      // => @media (min-width: 1024px) { ... }
  
      'desktop': '1440px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}



