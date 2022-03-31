module.exports = {
    plugins: {
        '@fullhuman/postcss-purgecss': {
            content: ['./layouts/**/*.html'],
        },
        autoprefixer: {},
        cssnano: {preset: 'default'}
    }
};