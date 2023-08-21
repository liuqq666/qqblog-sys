var express = require('express');
const ImageController = require('../../controller/ImageController');
const multer = require('multer')
var ImgRouter = express.Router();
//图片上传
// 设置Multer存储
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


ImgRouter.post("/uploadImg",upload.single('file'),ImageController.add)
ImgRouter.get("/getImgs",ImageController.get)

module.exports = ImgRouter;