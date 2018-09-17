const env = process.env.BABEL_ENV || process.env.NODE_ENV

console.log(`Running Babel using ${env} environment`)

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'styled-components',
      {
        displayName: true,
      },
    ],
    '@babel/plugin-syntax-class-properties',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-object-rest-spread',
    '@babel/plugin-proposal-object-rest-spread',
  ],
}
