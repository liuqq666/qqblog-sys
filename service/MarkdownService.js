const MarkdownModel = require("../models/MarkdownModel")

const ArticleService = {
    add: async (uid,markdown) =>{ 
        await MarkdownModel.create({
            uid: uid,
            markdown: markdown
          });
    }
    ,
    get: async (uid) => {
        const res = await MarkdownModel.find({ uid: uid });
        return res;
    }
}

module.exports = ArticleService