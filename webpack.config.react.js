let path = require('path');
const { webpack } = require('webpack');
let webapck = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    react: ['react', 'react-dom']
  },
  output: {
    filename: '_dll_[name].js', // 打包生成的文件名
    path: path.resolve(__dirname, 'dist'),
    library: '_dll_[name]', // 打包生成文件导出的变量名 
    // libraryTarget: 'var', // var: 变量形式导出 / umd: 统一资源模块 / commonjs: 以exports的形式导出，在node中使用 / this: 
  },
  plugins: [
    new webapck.DllPlugin({ // name == library
      name: '_dll_[name]',
      path: path.resolve(__dirname, 'dist', 'manifest.json') // 资源链入的路径
    })
  ]
}