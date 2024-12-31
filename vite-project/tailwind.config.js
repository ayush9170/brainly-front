/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     colors:{
      "grey":{
       "200": "#f8fafb",
       "400":"#b1b3b6",
       "500":"#1f2228"
       
      },
      "blue":{
        "500": "#453cd4",
        "300":"#dce3fc",
        "400":"#8282ba"
        
 
       }
     }
    },
  },
  plugins: [],
}

