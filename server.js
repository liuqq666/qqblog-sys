const express = require('express')
const cors = require('cors');
const ImgRouter = require('./router/admin/ImgRouter');
const ArticleRouter = require('./router/admin/ArticleRouter');
const UserRouter = require('./router/admin/UsersRouter');

//连接数据库
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/express-auth')


const app = express();

// 允许 http://localhost:8080 的请求访问
app.use(cors({
    origin: '*',
  }));
  
app.use(express.json())
app.use(ImgRouter)
app.use(ArticleRouter)
app.use(UserRouter)

app.listen( 3001, () => {
    console.log('http://127.0.0.1:3001')
} )

module.exports = app;