const express = require('express');
const routes = express.Router();

//import Controllers
const ArticleController = require('../../controllers/article/article');

// Middleware
const ArticleMiddleware = require('../../middlewares/article/bodyValidation');

routes.get('/', (req, res, next) => {
  res.send('Welcome to api v1 article routes!');
});

routes.post(
  '/input',
  [ArticleMiddleware.bodyValidationArticle],
  ArticleController.Article
);

module.exports = routes;
