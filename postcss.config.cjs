// frontend/postcss.config.cjs
module.exports = {
  plugins: [
    // use the new PostCSS adapter for Tailwind
    require('@tailwindcss/postcss'),
    require('autoprefixer')
  ]
}
