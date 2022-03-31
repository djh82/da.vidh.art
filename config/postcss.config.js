module.exports = {
    plugins: {
        '@fullhuman/postcss-purgecss': {
            content: ['./layouts/**/*.html'],
        },
        'postcss-nested': {},
        autoprefixer: {},
        cssnano: {preset: 'default'}
    }
};