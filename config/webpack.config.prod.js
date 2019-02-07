const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    filename: 'assets/js/bundle.js',
  },

  mode: 'production',

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
              // publicPath: '../',
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
              name: 'assets/fonts/[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CompressionPlugin(),
    new HtmlWebpackPlugin({
      title: 'Online Registration',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        'X-UA-Compatible': { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
      },
    }),
    new HtmlWebpackRootPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'assets/css/[name].css',
      chunkFilename: 'assets/css/[id].css',
    }),
  ],

  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },

  resolve: {
    alias: {
      components: path.resolve(__dirname, '../app/components'),
      containers: path.resolve(__dirname, '../app/containers'),
      assets: path.resolve(__dirname, '../app/assets'),
      utils: path.resolve(__dirname, '../app/utils'),
    },
    extensions: ['.jsx', '.js'],
  },
};
