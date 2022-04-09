const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new EslintWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'public/_redirects' },
      ],
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.html$/i,
      use: ['html-loader'],
    },
    {
      test: /\.(png|svg|jpg|jpeg)$/,
      type: 'asset/resource',
      generator: {
        filename: './images/[name][ext]',
      },
    },
    ],
  },
  devServer: {
    static: './build',
    historyApiFallback: true,
  },
};
