const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/qqblog').then(()=>{
    console.log("连接数据库成功");
})