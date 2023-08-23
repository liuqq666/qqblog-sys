
const jsonwebtoken = require("jsonwebtoken")
const secret = "lqq"
const JWT = {
    generate(value){
        try{
            return jsonwebtoken.sign({value:value},secret, { expiresIn: 86400 })
        }catch(e){
            console.log(e);
        }
    },
    verify(token){
        try{
            return jsonwebtoken.verify(token,secret)
        }catch(e){
            return false
        }
    },
    authenticateToken(req, res, next) {
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
        if (!token) {
          return res.status(401).json({ message: 'Unauthorized' });
        }
        jsonwebtoken.verify(token, secret, (err, user) => {
        console.log("开始验证");
          if (err) {
            return res.status(403).json({ message: 'Forbidden' });
          }
          req.user = user;
          console.log("验证成功");
          next();
        });
      }
}

module.exports = JWT