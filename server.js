let express = require('express');

let webpack = require('webpack');
// 中间件
let middle = require('webpack-dev-middleware');
// 引入config配置文件
let config = require('./webpack.config.js');
// 使用webpack处理配置文件
let complier = webpack(config);

let app = express();
app.use(middle(complier));

app.get('/api/user', (req, res)=> {
  res.json({
    "code": 0 
  })
});

app.listen(3000);