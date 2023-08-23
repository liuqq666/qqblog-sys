const ArticleModel = require("../models/ArticleModel")

const ArticleService = {
    add:async (name,date,type,uid,markdown) => {
        await ArticleModel.create({
            name: name,
            date: date,
            type: type,
            uid: uid,
            markdown: markdown
          });
    }, 
    get: async (skip, limit) => {
        const list = await ArticleModel.find().skip(skip).limit(limit);
        const totalCount = await ArticleModel.countDocuments();
        return {list:list, totalCount:totalCount};
    }
}

module.exports = ArticleService