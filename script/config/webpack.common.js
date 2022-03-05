const path = require('path')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../../src/app.ts'),
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: path.resolve(__dirname, '../../dist'),
  },
}
