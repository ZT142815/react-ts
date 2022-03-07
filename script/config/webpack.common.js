const path = require('path');
const HtmlWebapckPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WebapckBar = require('webpackbar');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { isDev } = require('../constants');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../../src/index.tsx'),
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: path.resolve(__dirname, '../../dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  cache: {
    type: 'filesystem',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: {
          name: 'common',
          chunks: 'initial',
          minChunks: 3,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
          priority: -10,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,
            name: '[name].[contenthash:8].[ext]',
            outputPath: 'assets/images',
          },
        },
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[contenthash:8].[ext]',
              outputPath: 'assets/fonts',
            },
          },
        ],
      },
    ],
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
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../../public/'),
          to: path.resolve(__dirname, '../../dist/public'),
        },
      ],
    }),
    new WebapckBar({
      name: isDev ? '正在启动' : '正在打包',
      color: '#fa8c16',
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
};
