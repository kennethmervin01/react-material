const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './app/main.js',

  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'assets/bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../',
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Online Registration',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        'X-UA-Compatible': { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
      },
    }),
    new HtmlWebpackRootPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],

  resolve: {
    alias: {
      components: path.resolve(__dirname, '../app/components'),
      containers: path.resolve(__dirname, '../app/containers'),
      assets: path.resolve(__dirname, '../app/assets'),
      utils: path.resolve(__dirname, '../app/utils'),
    },
    extensions: ['.jsx', '.js'],
  },

  devServer: {
    contentBase: './dist',
    hot: true,
    host: 'localhost',
    port: 4040,
    historyApiFallback: true,
    publicPath: '/',
  },
};
