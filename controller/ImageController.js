const ImageService = require("../service/ImageService")
const fs = require('fs');
const path = require('path');

const ImageController = {
    add:async (req,res)=>{
        try {
            if (!req.file) {
                return res.status(400).send('未上传文件。');
            }
            const filename = req.file.originalname;
            const contentType = req.file.mimetype;
            if(req.file.buffer){
                const data = req.file.buffer;
                ImageService.add(filename, contentType, data)
            }else{
                const data = fs.readFileSync(req.file.path);
                ImageService.add(filename, contentType, data);
                // 删除上传的文件
                fs.unlink(req.file.path, (err) => {
                if (err) {
                    console.error(err);
                }
                });
            }      
            res.status(201).send('图片上传成功并存储在数据库中');
          } catch (error) {
            console.error(error);
            res.status(500).send('出现错误');
          }
    },
    get:async (req,res) => {
        const skip = parseInt(req.query.skip) || 0;
        const limit = parseInt(req.query.limit) || 10;
        try {
            const images = await ImageService.get(skip,limit);
            const base64Images = images.map(binaryImageData => {
                const imageBuffer = Buffer.from(binaryImageData.data);
                return imageBuffer.toString('base64');
              });
            res.status(200).json(base64Images);
        } catch (error) {
            console.error(error);
            res.status(500).send('出现错误');
        }
    }
}

module.exports = ImageController