module.exports = {
    plugins: {
        autoprefixer: {overrideBrowserslist: ["last 2 version", "not dead", "> 0.2%"]},
        'postcss-discard-comments': {removeAll: true},
        'postcss-nested': {},
        '@fullhuman/postcss-purgecss': {
            content: [ './hugo_stats.json' ],
            defaultExtractor: (content) => {
                let els = JSON.parse(content).htmlElements;
                return els.tags.concat(els.classes, els.ids);
            }
        },
        'postcss-purgefonts': {to: "public/fonts"},
        'postcss-path-replace' : {
            publicPath: '/',
            mode: 'replace',
            matched: 'public/'
        },
        'postcss-sorting': {'properties-order': 'alphabetical'},
        cssnano: {preset: 'default'},
    }
};