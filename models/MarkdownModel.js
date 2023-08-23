
const mongoose  = require("mongoose")
const Schema = mongoose.Schema

const MarkdownModelType = new mongoose.Schema({
    uid: String,
    markdown: String
  });
  
const MarkdownModel = mongoose.model("Markdown",new Schema(MarkdownModelType))

module.exports = MarkdownModel