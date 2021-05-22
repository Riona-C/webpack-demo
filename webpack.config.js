const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    home: './src/index.js'
  },
  devServer: {
    contentBase: './dist',
    open: true,
    // 1) 直接代理到服务器
    // proxy: {
      // '/api': { // 请求时加api前缀
      //   target: 'http://localhost:3000',
      //   pathRewrite: {'/api': ''} // 代理到接口端重写接口
      // }
    // }
    // 2) 前端单纯的模拟数据
    // before(app) { 
    //   app.get('/api/user', (req, res)=> {
    //     res.json({
    //       "code": 0 
    //     })
    //   });
    // }
    // 3) 有服务端的情况 不用代理处理 在服务端启动webpack, 端口用服务端端口,借助webpack-dev-middleware的中间件
    // 参考server.js中的配置，直接运行server.js即可调试本地请求
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'home.html'
    }),
    new CleanWebpackPlugin() // 要清空的文件夹，如果有多个，可以传入一个数组
  ]
}