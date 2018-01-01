// 引入文件模块
const fs = require('fs');
// 引入处理路径的模块
const path = require('path');
// 引入api模块
const api = require('./api');
// 引入处理post数据的模块
const bodyParser = require('body-parser');
// 引入express
const express = require('express');
const app = express();
const port = '8088';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(api);
// // 访问静态资源文件
// app.use(express.static(path.resolve(__dirname, '../dist')));
// // 单页应用，所以的请求都走 /dist/index.html
// app.get('*', (req, res) => {
//   const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
//   res.send(html);
// });
app.listen(port);
console.log("success listen " + port + "...");
