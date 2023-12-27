/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "color-primary": "#EBD96B;",
        "color-toby": "#E5C643",
        "color-footer": "#8E8E8E;",
        "color-secondary": "#E0C340 0.13%, #DFC23E 3.97%, #E1C441 7.2%, #E3C743 10.13%, #E4C542 12.98%, #E6C744 15.99%, #E7C845 19.52%, #E5C643 23.96%, #E6C945 30.43%, #E3C743 36.49%, #E9CA48 42.49%, #EDCE49 49.35%, #F0D44C 55.42%, #F4D84F 61.43%, #F6DA52 65.74%, #F7DB53 72.23%, #F9DD55 77.43%, #F9DF56 83.84%, #FAE157 91.52%, #F9DF56 97.87%)",
      },
      borderWidth: {
        DEFAULT: '1px',
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '10': '10px',
        '12': '12px',
        '13': '13px',
        '15': '15px',
        '16': '16px',
        '17': '17px',
      }
    },
  },
  plugins: [],
}

