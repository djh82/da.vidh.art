module.exports = {
    plugins: {
        '@fullhuman/postcss-purgecss': {
            content: ['./layouts/**/*.html'],
        },
        'postcss-nested': {},
        autoprefixer: {overrideBrowserslist: ["last 2 version"]},
        cssnano: {preset: 'default'}
    }
};