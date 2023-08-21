const ImageModel = require("../models/ImageModel")

const ImageService = {
    add:async (filename,contentType,data)=>{
        await ImageModel.create({
            filename: filename,
            contentType: contentType,
            data: data
          });
        console.log('success save img');
    },
    get: async (skip, limit) => {
        const images = await ImageModel.find().skip(skip).limit(limit);
        return images;
    }
}

module.exports = ImageService