 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   corePlugins: {
    //  preflight: false, // Disable preflight to avoid conflicts with other styles
   },
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