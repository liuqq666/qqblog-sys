const ArticleService = require("../service/ArticleService")
const MarkdownService = require("../service/MarkdownService")

const ImageController = {
    add:async (req,res)=>{
        try {
            if (!req.body) {
                return res.status(400).send('未上传字段');
            }
            const {name,date,type,uid,markdown} = req.body;
            await ArticleService.add(name,date,type,uid);
            await MarkdownService.add(uid,markdown);
            res.status(201).send('文章上传成功并存储在数据库中');
          } catch (error) {
            console.error(error);
            res.status(500).send('出现错误');
          }
    },
    get:async (req,res) => {
        const skip = parseInt(req.query.skip) || 0;
        const limit = parseInt(req.query.limit) || 10;
        try {
            const result = await ArticleService.get(skip,limit)
            res.status(200).send(result);
        } catch (error) {
            console.error(error);
            res.status(500).send('出现错误');
        }
    },
    getArticleMarkdown: async (req,res) => {
        try {
            const uid = req.query.uid;
            console.log(uid);
            const result = await MarkdownService.get(uid);
            const {markdown} = result[0];
            res.status(200).send({uid:uid,markdown:markdown});
        } catch (error) {
            console.error(error);
            res.status(500).send('出现错误');
        }
    }
}

module.exports = ImageController