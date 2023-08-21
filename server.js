const { User } = require('./dbModel')
const express = require('express')
const cors = require('cors');
const ImgRouter = require('./router/admin/ImgRouter');
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/express-auth')


const app = express();

// 允许 http://localhost:8080 的请求访问
app.use(cors({
    origin: '*',
  }));
  
app.use(express.json())

app.post('/api/login',async(req, res) => {
    const user = await User.findOne({
        username: req.body.username
    })
    console.log(`req is ${req.body.username}`);
    if(!user){
        return res.send({
            message: "no user"
        })
    }
    const passwordVaild = require('bcrypt').compareSync(
        req.body.password,
        user.password
    )
    if( !passwordVaild ){
        return res.status(422).send("password wrong")
        }
    //生成token
    const jwt = require('jsonwebtoken')
    const token = jwt.sign({
        id:String(user.id),
    },"lqq")
    res.send({
        user,
        token: token
    })
})

app.use(ImgRouter)

app.listen( 3001, () => {
    console.log('http://127.0.0.1:3001')
} )

module.exports = app;