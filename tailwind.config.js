/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        '10px': '10px',
        '30px': '30px',
        '50px': '50px',
        '55px': '55px',
        '60px': '60px',
        '100px': '100px',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        '30px': '30px',
        '50px': '50px',
        '55px': '55px',
      },
      colors: {
        Black: '#191919',
        Orange: '#FF9200',
      },
      backgroundImage: {
        'overlay-1':
          'background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 52.7%, #000 94.94%), url(<path-to-image>) lightgray 50% / cover no-repeat;',
      },
      lineHeight: {
        '118%': '118%',
        '133%': '133%',
        '175%': '175%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      modifiers: [],
    }),
  ],
};
