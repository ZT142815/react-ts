const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const PurgeCssplugin = require('purgecss-webpack-plugin');
const glob = require('glob');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new PurgeCssplugin({
      paths: glob.sync(`${path.resolve(__dirname, '../../src')}/**/*.{tsx,scss,less,css}`, { nodir: true }),
      whitelist: ['html', 'body'],
    }),
  ],
});
