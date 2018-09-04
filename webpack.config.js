"use strict";
var webpack = require('webpack');
var path = require('path');
const env = process.env.NODE_ENV;
var plugins = [
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(env)
  }),
  new webpack.HotModuleReplacementPlugin()
];

module.exports = {
  mode: env === "production" ? "production" : "development",
  cache: true,
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3002',
    'webpack/hot/only-dev-server',
    './client'
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  optimization: {
    minimize: true
  },
  resolve: {
    extensions: ['.js']
  }
};