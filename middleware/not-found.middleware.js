const notFoundMiddleware = (req, res, next) =>
  res.status(404).send("Oh uh, something went wrong");

module.exports = notFoundMiddleware;
