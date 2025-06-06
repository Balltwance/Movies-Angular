 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {
      colors: {
        redlight: "hsl(var(--redlight))",
        redlight_hover: "hsl(var(--redlight_hover))",
      }
     },
   },
   plugins: [],
 }