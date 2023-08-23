const UserService = require("../service/UserService")

const UserController = {
    login:async (req,res)=>{
        try {
            const result = await UserService.login(req.body.username,req.body.password)
            res.status(200).send(result)
          } catch (error) {
            console.error(error);
            res.status(500).send('出现错误');
          }
    },
}

module.exports = UserController