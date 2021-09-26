const webpack = require('webpack');

module.exports = function (config) {
  let newConfig = { ...config };

  newConfig.plugins = [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    ...config.plugins
  ];

  newConfig.optimization = {
    minimize: true
  };

  return newConfig;
}
