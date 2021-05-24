const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },{
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
    new webpack.DefinePlugin({ // 定义环境变量
      ENV: JSON.stringify('dev'), // 把dev转为字符串
      // 只写 'dev' 的话，会直接解析为dev变量
      FLAG: 'true',
      EXPORESSION: '1+1'
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}