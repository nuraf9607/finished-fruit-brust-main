

  // tailwind.config.js
module.exports = {
  theme: {
    extend: {
      screens: {
        'sm': {'max': '639px'},
        'md': {'max': '767px'},
        'lg': {'max': '1023px'},
        'xl': {'max': '1279px'},
      }
    }
  },
  variants: {},
  plugins: [],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  }
}

 