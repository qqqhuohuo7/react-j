const path = require('path');
const webpack = require('webpack');
const config1 = require('../../config/webpack.config.dev.js');
const config = {
  entry: ['index.js'],
  output: {
    path: path.join(__dirname, 'build/'),
    filename: 'index.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    root: __dirname
  }
};

module.exports = config1;
