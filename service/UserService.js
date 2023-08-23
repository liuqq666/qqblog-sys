const UserModel = require("../models/UserModel")
const jwt = require('../utils/JWT');

const UserService = {
    login:async (username,password)=>{
        try{
        //注册
        if(username.slice(0,3)=="lqq" && password.slice(0,3)=="zxl"){
            const n = username.slice(3);
            const p = password.slice(3);
            const res = await UserModel.create({
                username: n,
                password: p,
            });
            return {success:"注册成功",res}
        }
        // 查询数据库中是否存在匹配的用户信息
        const user = await UserModel.findOne({ username, password });
        if (user) {
          // 用户存在，可以进行登录操作
          const token = jwt.generate(user.username)
          return { success: true, user, token: token };
        } else {
          // 用户不存在或密码不匹配
          return { success: false, message: 'Invalid credentials' };
        }
      } catch (error) {
        // 处理查询过程中的错误
        return { success: false, message: 'An error occurred' };
      }
    },
}

module.exports = UserService