### webpack 优化配置

### author: 小橙子

### 安装依赖

```
yarn install
```

### 打包

```
npx webpack
```

### 1.对于不需要解析的库配置 noParse

如：jquery，不需要解析 jquery 模块，因为 jquery 中没有依赖其他模块代码
配置方法：在 module 中配置

### 2.resolve 解析配置

````
resolve: { // 解析第三方包
  modules: [path.resolve('node_modules')], // 只解析node_modules下的文件，若node_modules下查找不到，则不再向外层查找
  alias: { // 给引入的路径取别名
    bootstrap: 'bootstrap/dist/css/bootstrap.css'
  },
  mainFields: ['style', 'main'], // 引入资源的时候先引style样式入口，再找main的js入口
  extensions: ['.js','.css','.json','.vue'] // 自动添加扩展名，先找js文件，找不到就找css文件，再找不到就找json文件
### 1.定义环境变量

可使用 webpack 自带的插件，来定义环境变量，可通过环境变量来判断当前处于什么环境，执行那些代码

```js
let url = "";
// 使用env变量区分当前环境，使用webpack自带definePlugin插件进行定义环境变量
if (ENV) {
  url = "http://localhost:3000";
} else {
  url = "http://www.test.com";
}
console.log("---------", ENV); // 实际取到的是字符串
console.log("---------", EXPORESSION); // 实际取到的是计算结果
console.log("---------", typeof FLAG); // 实际取到的是布尔值
````

### 排除和包含

两者配其一即可.

```js
{
  test: /\.js$/,
  exclude: /node_modules/, // 排除
  include: path.resolve('src'), // 包含
  use: {
    loader: 'babel-loader',
    options: { // 配置预设
      presets: [
        '@babel/preset-env',
        '@babel/preset-react'
      ]
    }
  }
}
```

### IgnorePlugin 忽略

当引入一个第三方库，只用到了第三方库的某些 api 时，但第三方库里又引入了其他较大依赖包，不但用不到，而且还会大大增加打包体积，此时可以用 IgnorePlugin 来解决.

```js
new webpack.IgnorePlugin({
  // 配置项
}),
```

### dllPlugin 公共库的抽离

公共库的抽离（每次打包不需要重新编译第三方库，因为库里的代码一般不会被修改）, 单独打包引入的第三方库，打包完成后，在开发过程中直接引入打包好的代码文件即可.

建立单独的 webpack.config.react.js 配置文件, dllPlugin 属于 webpack 内部插件，具体使用如下：

```
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
```

### Happypack --- 可使用多线程来打包

当我们的项目较大时，可使用多线程来打包，提高打包效率，但如果项目较小，分发线程也需要消耗一定的性能，所以对于小项目不宜使用，反而会增加打包时间.

- 安装：let Happypack = require('happypack');
- 引入：yarn add Happypack
- 使用：

```
module: {
    {
      test: /\.js$/,
      exclude: /node_modules/,
      include: path.resolve('src'),
      use: 'Happypack/loader?id=js'
    }]
 },
 plugins: [
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
    })
]
```
