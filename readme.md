### webpack基础配置

### author: 小橙子

### 安装依赖
```
npm install
```

### 执行本地服务打包
```
npm run dev
```

### 在服务端启动webpack, 端口用服务端端口
借助webpack-dev-middleware的中间件

### 代理的三种方案
1. 直接代理到服务器
```js
// 直接代理到服务器
proxy: {
  '/api': { // 请求时加api前缀
    target: 'http://localhost:3000',
    pathRewrite: {'/api': ''} // 代理到接口端重写接口
  }
}

// 2) 前端单纯的模拟数据
before(app) { 
  app.get('/api/user', (req, res)=> {
    res.json({
      "code": 0 
    })
  });
}
// 3) 有服务端的情况 不用代理处理 在服务端启动webpack, 端口用服务端端口,借助webpack-dev-middleware的中间件
// 参考server.js中的配置，直接运行server.js即可调试本地请求
```

##### 以上配置均在此分支上实现，可参考webapck.config.js、server.js文件中相关配置