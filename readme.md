### webpack打包区分环境配置

### author: 小橙子

### 安装依赖
```
npm install
```

### 执行本地服务打包 --- 会执行webpack.dev.js
```
npm run dev
```

### 执行生产环境打包 --- 会执行webpack.prod.js
```
npm run build
```

### 基础配置文件
webpack.base.js

##### 以上配置均在此分支上实现，可参考webapck.config.js、server.js文件中相关配置