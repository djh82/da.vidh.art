module.exports = {
    map: false,
    plugins: {
        '@fullhuman/postcss-purgecss': {
            content: ['./layouts/**/*.html'],
        },
        autoprefixer: {},
        cssnano: {preset: 'cssnano-preset-advanced'}
    }
};