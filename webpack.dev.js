const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const devConfig = {
  mode: 'development',
  devtool: 'cheap-eval-module-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8090
  }
}

module.exports = webpackMerge.merge(baseConfig, devConfig);