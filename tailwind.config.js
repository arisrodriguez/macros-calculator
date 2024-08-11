/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'darkmode-primary':'#212121',
        'darmode-secundary':'#bcbcbc',
        'darkmode-divider':'#3c3c3c',
      },
    },
  },
  plugins: [],
}

