module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
    },
    backgroundImage: {
      'abstract-image': "url('../public/assets/image/abstract-character.svg')",
      'background-pattern': "url('../public/assets/pattern.png')"
    },
    fontFamily: {
      
    }

  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),],
}
