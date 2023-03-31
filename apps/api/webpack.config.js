const path = require('path')
const EsmWebpackPlugin = require('@purtuga/esm-webpack-plugin')

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

  plugins: [new EsmWebpackPlugin()],
}

module.exports = {
  ...config,
}
