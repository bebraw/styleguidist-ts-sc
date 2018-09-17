const path = require('path')
const reactDocgen = require('react-docgen')
const tsDocgen = require('@bebraw/react-docgen-typescript').withCustomConfig('./tsconfig.json');

module.exports = {
    propsParser(filePath, source, resolver, handlers) {
        const isTS = path.extname(filePath).startsWith('.ts')
        const parser = isTS ? tsDocgen : reactDocgen
        const result = parser.parse(source, resolver, handlers)

        isTS && console.log(filePath, result)

        return result
    },
    // Is the resolver really needed?
    resolver: reactDocgen.resolver.findAllComponentDefinitions,
    components: 'src/components/**/*.{js,jsx,ts,tsx}',
    webpackConfig: require('./config/webpack.config.dev.js')
};