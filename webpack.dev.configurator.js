
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (config) {
  let newConfig = { ...config };

  newConfig.output.filename = 'app.js';  
  newConfig.output.chunkFilename = '[name].js';
  newConfig.output.publicPath = `https://localhost:3001/`;

  newConfig.plugins = [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('development') }
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    ...config.plugins
  ];

  newConfig.devtool = "inline-source-map";

  newConfig.devServer = {
    contentBase: './',
    https: true,
    hot: true,
    inline: false,
    port: 3001,
    publicPath: '/',
    disableHostCheck: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:5005'
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  };
  return newConfig;
}
