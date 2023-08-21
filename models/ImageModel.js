
const mongoose  = require("mongoose")
const Schema = mongoose.Schema
// user模型===>users集合
//暂时只有俺

const imageType = new mongoose.Schema({
    filename:String,
    contentType: String,
    data: Buffer
  });
  
const ImageModel = mongoose.model("image",new Schema(imageType))

module.exports = ImageModel