const UserModel = require("../models/UserModel")

const UserService = {
    login:async ({name,data,contentType})=>{
        return ImageModel.create({
            name,
            data,
            contentType,
        })
    },
}

module.exports = ImageService