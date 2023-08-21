const mongoose = require('mongoose')

const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        set(val){
            return bcrypt.hashSync(val, 10); 
        }
    }
})

const User = mongoose.model('User', UserSchema)
module.exports = {
    User
}