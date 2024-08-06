/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "brand-color-10": "#ffa634",
        "brand-color-20": "#ff267a",
        "dark-10": "#121214",
        "dark-20": "#181818",
        "gray-10": "#a8a8a8",
      },
      backgroundImage: {
        "hero-pattern": "url('../src/images/image.png')",
        "shang-chill": "url('../src/images/image-1.png')",
        "wish-dragon": "url('../src/images/image-2.png')",
        "the-loki": "url('../src/images/image-3.png')",
        "spider-man": "url('../src/images/image-4.png')",
        "the-witcher": "url('../src/images/image-5.png')",
      },
    },
    fontFamily: {
      body: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
