module.exports = {
    map: false,
    plugins: {
        '@fullhuman/postcss-purgecss': {
            content: ['./hugo_stats.json'],
            defaultExtractor: (content) => {
                let els = JSON.parse(content).htmlElements;
                return els.tags.concat(els.classes, els.ids);
            }
        },
        autoprefixer: {},
        cssnano: {preset: 'default'}
    }
};