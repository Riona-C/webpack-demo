// 搭建http服务器打包脚本  ---  需要安装express/koa、webpack-dev-middleware

const express = require('express'); // 引入express框架创建一个服务
const webpack = require('webpack'); // 引入webpack库
const WebpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js'); // 引入webpack配置文件
// 在node中使用webpack
const complier = webpack(config); // 把配置文件传入webpack函数中后，会返回一个编译器，编译器执行一次，就会重新打包下代码

const app = express(); // 创建一个express的应用
// 创建出的应用使用.use方法，使用中间件
// 只要文件改变，就会重新执行编译，打包后的文件输出路径同配置文件中相同
app.use(WebpackDevMiddleware(complier, {
  publicPath: config.output.publicPath
}))
   
app.listen(3000, () => {
  console.log('server is running!');
})