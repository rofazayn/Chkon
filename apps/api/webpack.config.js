const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const { NODE_ENV = 'production' } = process.env

const config = {
  target: 'serverless',
  entry: './src/index.ts',
  mode: NODE_ENV,
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
      },
    ],
  },
  externals: [nodeExternals({ modulesFromFile: true })],
  plugins: [
    // new Dotenv({
    //   path: './.env',
    // }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/keys',
          to: 'keys',
        },
      ],
    }),
  ],
}

module.exports = {
  ...config,
}
