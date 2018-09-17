module.exports = {
    propsParser: require('@bebraw/react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,
    components: 'src/components/**/*.{js,jsx,ts,tsx}',
    webpackConfig: require('./config/webpack.config.dev.js')
};