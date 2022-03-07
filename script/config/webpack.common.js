const path = require('path');
const HtmlWebapckPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../../src/index.js'),
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: path.resolve(__dirname, '../../dist'),
  },
  plugins: [
    new HtmlWebapckPlugin({
      title: 'development',
      template: path.resolve(__dirname, '../../index.html'),
      filename: 'index.html',
      cache: false,
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
  ],
};
