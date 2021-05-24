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

### 1.定义环境变量
可使用webpack自带的插件，来定义环境变量，可通过环境变量来判断当前处于什么环境，执行那些代码
```js
let url = '';
// 使用env变量区分当前环境，使用webpack自带definePlugin插件进行定义环境变量
if (ENV) {
  url = 'http://localhost:3000'
} else {
  url = 'http://www.test.com'
}
console.log('---------', ENV); // 实际取到的是字符串
console.log('---------', EXPORESSION); // 实际取到的是计算结果
console.log('---------', typeof FLAG); // 实际取到的是布尔值
```



