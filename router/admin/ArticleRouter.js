var express = require('express');
const AtricleController = require('../../controller/AtricleController');
var AtricleRouter = express.Router();
const jwt = require('../../utils/JWT')

AtricleRouter.post("/uploadArticle",jwt.authenticateToken,AtricleController.add)
AtricleRouter.get("/getArticlesList",AtricleController.get)
AtricleRouter.get("/getArticleMarkdown",AtricleController.getArticleMarkdown)

module.exports = AtricleRouter;