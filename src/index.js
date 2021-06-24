// import jquery from 'jquery';
import 'bootstrap'; // 实际上引入的是bootstrap/dist/css/bootstrap.css，别名引入 
import React from 'react';
import { render } from 'react-dom'; 

render(<h1>jsx</h1>, window.root);
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
