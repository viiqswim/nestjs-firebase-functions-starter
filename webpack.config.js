const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: ['./src/main.ts'],
  watch: true,
  target: 'node', // <-- Important
  output: {
    filename: 'index.js', // <-- Important
    libraryTarget: 'this' // <-- Important
  },
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?100'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  // mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: [nodeExternals()] // <-- Important
};