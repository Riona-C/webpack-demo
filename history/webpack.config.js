const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  mode: 'development', // 开发环境
  devtool: 'cheap-source-map', // 热更新
  entry: {
    main: './src/index.js' // 打包入口文件
  },
  output: { // 打包输出配置
    publicPath: '/',
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: { // 本地开发服务器
    contentBase: './dist', // 在哪个目录下启动服务器
    open: true,
    port: 8080,
    hot: true,
    hotOnly: true
  },
  module: { // loader模块打包配置
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/, // 对node_modules不需要做转译
      loader: 'babel-loader'
    },{
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '',
          outputPath: 'images/',
          limit: 10240
        }
      }
    },{
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2
          }
        },
        'scss-loader',
        'postcss-loader'
      ]
    },{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }]
  },
  plugins: [ // 插件
    new HtmlWebpackPlugin({
      template: './src/index.html', // 要拷贝的模板
      filename: 'index.html', // 拷贝之后的html文件名
      hash: true // 给引入的js文件加上一个hash值
    }),
    new webpack.HotModuleReplacementPlugin() // 使用webpack的热更新插件
  ]
}