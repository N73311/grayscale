const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const WASMPackPlugin = require('@wasm-tool/wasm-pack-plugin');

module.exports = {
  entry: './public/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html'
    }),
    new WASMPackPlugin({
      crateDirectory: path.resolve(__dirname, '.'),
    })
  ],
  experiments: {
    asyncWebAssembly: true
  }
};