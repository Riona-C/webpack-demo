### webpack优化配置

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
如：jquery，不需要解析jquery模块，因为jquery中没有依赖其他模块代码
配置方法：在module中配置

### 2.resolve解析配置
```
resolve: { // 解析第三方包 
  modules: [path.resolve('node_modules')], // 只解析node_modules下的文件，若node_modules下查找不到，则不再向外层查找
  alias: { // 给引入的路径取别名
    bootstrap: 'bootstrap/dist/css/bootstrap.css'
  },
  mainFields: ['style', 'main'], // 引入资源的时候先引style样式入口，再找main的js入口
  extensions: ['.js','.css','.json','.vue'] // 自动添加扩展名，先找js文件，找不到就找css文件，再找不到就找json文件
}
```


