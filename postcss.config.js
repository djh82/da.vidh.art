module.exports = {
    plugins: {
        autoprefixer: {overrideBrowserslist: ["last 2 version"]},
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
            publicPath: '../',
            mode: 'replace',
            matched: 'public/'
        },
        cssnano: {preset: 'default'},
    }
};