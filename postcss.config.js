module.exports = {
    plugins: {
        '@fullhuman/postcss-purgecss': {
            content: [
                './layouts/**/*.html',
                './static/js/*.js'
              ],
            whitelist: [
            ]
        },
        autoprefixer: {},
        cssnano: {preset: 'default'}
    }
  };
