function bodyValidationArticle(req, res, next) {
  const { title, body } = req.body;

  if (!title && !body) {
    res.status(400).send({
      message: 'Field is not complete!',
      statusText: 'Field is not complete!',
      statusCode: 400,
    });
  } else {
    next();
  }
}

module.exports = {
  bodyValidationArticle,
};
