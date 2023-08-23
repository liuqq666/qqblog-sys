
const mongoose  = require("mongoose")
const Schema = mongoose.Schema

const ArticleType = new mongoose.Schema({
    name:String,
    date: String,
    type: Array,
    uid: String,
    markdown: String
  });
  
const ArticleModel = mongoose.model("article",new Schema(ArticleType))

module.exports = ArticleModel