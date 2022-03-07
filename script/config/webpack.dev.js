const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 3333,
    compress: true,
    open: true,
    hot: true,
    stats: 'errors-only',
  },
});
