class TailwindExtractor {
  static extract (content) {
    return content.match(/[A-Za-z0-9-_:/]+/g) || []
  }
}

module.exports = ({ file, options, env }) => ({
  plugins: {
    'postcss-fontpath': { checkFiles: true, ie8Fix: true },
    'tailwindcss': 'tailwind.js',
    'autoprefixer': true,
    '@fullhuman/postcss-purgecss': env === 'production' ? {
      content: ['./src/**/*.html', './src/**/*.svg', './src/**/*.js'],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['html', 'svg', 'js'],
        },
      ],
    } : false,
  },
})
