### webpack基础配置

### author: 小橙子

### 安装依赖
```
npm install
```

### 执行打包
```
npx webpack
```

### 多入口
详细查看webpack.config.js的entry、output配置

### html模板文件打包插件
html-webpack-plugin

### 打包前先清除上次打包结果插件
clean-webpack-plugin

### 打包前先清除上次打包结果插件
clean-webpack-plugin

### 打包时拷贝指定文件到打包目录
copy-webpack-plugin

### 打包实时监听
watch、watchOptions实现

### 给打包后的js文件头部添加版权声明
BannerPlugin

##### 以上配置均在此分支上实现，可参考webapck.config.js文件中相关配置