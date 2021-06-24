const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// 使用 happypack 模块可以实现多线程打包
let Happypack = require('happypack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    port: 3000,
    open: true,
    contentBase: './dist'
  },
  module: {
    noParse: /jquery/, // 不需要解析jquery模块，因为jquery中没有依赖其他模块代码
    rules: [{
      test: /\.css$/,
      // use: ['style-loader', 'css-loader']
      use: 'Happypack/loader?id=css'
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      include: path.resolve('src'),
      use: 'Happypack/loader?id=js'
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
    new  Happypack({
      id: 'css',
      use: ['style-loader', 'css-loader']
    }),
    new Happypack({
      id: 'js',
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        }
      }]
    }),
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