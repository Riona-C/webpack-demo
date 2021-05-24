const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    noParse: /jquery/, // 不需要解析jquery模块，因为jquery中没有依赖其他模块代码
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
  resolve: { // 解析第三方包 
    modules: [path.resolve('node_modules')],
    alias: { // 给引入的路径取别名
      bootstrap: 'bootstrap/dist/css/bootstrap.css'
    },
    mainFields: ['style', 'main'], // 引入资源的时候先引style样式入口，再找main的js入口
    extensions: ['.js','.css','.json','.vue'] // 自动添加扩展名，先找js文件，找不到就找css文件，再找不到就找json文件
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