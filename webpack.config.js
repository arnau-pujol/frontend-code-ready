const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const webpack = require('webpack');
const path = require('path');

module.exports = {
  devServer: {
    stats: "errors-only",
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
    open: true
  },
  devtool: 'source-map',
  optimization: {
    concatenateModules: true,
    namedModules: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new OptimizeCssAssetsPlugin({}),
    ],
  },
  entry: {
    'main': [
      path.resolve(__dirname, `src/js/main.js`),
      path.resolve(__dirname, `src/styles/main.scss`)
    ]
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: '[name].map'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'img/[name].[hash:6].[ext]',
              publicPath: '../',
              limit: 8192
            },
          }
        ]
      },
      {
        test: /\.(woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'fonts/[name].[hash:6].[ext]',
              publicPath: '../',
              limit: 8192
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.WatchIgnorePlugin([
      path.join(__dirname, "node_modules")
    ]),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src', 'static', 'img'),
        to: path.resolve(__dirname, 'dist', 'img'),
        toType: 'dir',
      },
    ]),
    new HtmlWebpackPlugin({
      inject: true,
      hash: false,
      template: './src/index.html',
      filename: 'index.html',
      favicon: './src/static/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      allChunks: true
    }),
  ]
};
