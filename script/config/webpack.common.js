const path = require('path');
const HtmlWebapckPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const { isDev } = require('../constants');
const chalk = require('chalk');

const getCssLoader = () => {
  return [
    {
      loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'less-loader',
      options: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  ];
};

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
    // minimize: !isDev,
    minimizer: [
      (compiler) => {
        if (!isDev) {
          new TerserPlugin({
            extractComments: false,
            terserOptions: {
              compress: {
                pure_funcs: ['console.log'],
              },
            },
          }).apply(compiler);
          new OptimizeCssAssetsWebpackPlugin().apply(compiler);
        }
      },
    ],
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
        oneOf: [
          {
            test: /\.(tsx?|js)$/,
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
            exclude: /node_modules/,
          },
          {
            test: /\.(css|less)$/,
            use: getCssLoader(),
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
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
      ignoreOrder: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../../public/'),
          to: path.resolve(__dirname, '../../dist/public'),
        },
      ],
    }),
    new ProgressBarPlugin({
      width: 200,
      format: `  :msg [:bar] ${chalk.green.bold(':percent')} (:elapsed s)`,
      clear: false,
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
};
