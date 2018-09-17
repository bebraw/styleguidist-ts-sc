module.exports = {
    // propsParser: require('react-docgen-typescript').withDefaultConfig([]).parse,
    components: 'src/components/**/*.{js,jsx,ts,tsx}',
    webpackConfig: require('./config/webpack.config.dev.js')
};