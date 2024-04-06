/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      mobile: '375px',
      desktop: '1440px'
    },
    colors: {
      'Nutmeg': 'hsl(14, 45, 36)',
      'Dark Raspberry': 'hsl(332, 51%, 32%)',
      'Rose White': 'hsl(330, 100%, 98%)',
      'Eggshell': 'hsl(30, 54%, 90%)',
      'Light Grey': 'hsl(30, 18%, 87%)',
      'Wenge Brown': 'hsl(30, 10%, 34%)',
      'Dark Charcoal': 'hsl(24, 5%, 18%)'
    },
    
    extend: {
      fontFamily: {
        YoungSerif: ['"Young-Serif"',"sans-serif"],
        Outfit : ['"Outfit"', "sans-serif"]
      },
    },
  },
  plugins: [],
}

