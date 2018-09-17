const path = require('path')
const reactDocgen = require('react-docgen')
const tsDocgen = require('@bebraw/react-docgen-typescript').withCustomConfig('./tsconfig.json');

module.exports = {
    propsParser(filePath, source, resolver, handlers) {
        const parser = path.extname(filePath).startsWith('.ts') ? tsDocgen : reactDocgen

        return parser.parse(source, resolver, handlers)
    },
    components: 'src/components/**/*.{js,jsx,ts,tsx}',
    webpackConfig: require('./config/webpack.config.dev.js')
};