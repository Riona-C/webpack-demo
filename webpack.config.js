const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    // 多入口
    home: './src/index.js',
    other: './src/other.js'
  },
  watch: true, // 实时打包监控
  watchOptions: { // 监控的选项
    poll: 1000, // 一秒问1000次
    aggregateTimeout: 500, // 防抖
    ignored: /node_modules/ // 不需要监控某个东西
  },
  output: {
    // 输出多个出口
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'home.html',
      chunks: ['home'] // 代码块
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'other.html',
      chunks: ['other']
    }),
    new CleanWebpackPlugin(), // 要清空的文件夹，如果有多个，可以传入一个数组
    new CopyWebpackPlugin({  // 拷贝插件
      patterns: [
        {
          from: path.resolve(__dirname, 'doc'), 
          to: 'doc'
        }
      ]
    }),
    new webpack.BannerPlugin('make 2021-05-22 ranran') // 在打包后的js文件头部添加版权声明
  ]
}