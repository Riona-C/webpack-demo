const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    noParse: /jquery/, // 不需要解析jquery模块，因为jquery中没有依赖其他模块代码
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: { // 配置预设
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        }
      }
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}