const { CustomAPIError } = require("../error/custom-error");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ err: err.message });
  }
  return res.status(500).json({ err: "something went wront , try again." });
};

module.exports = errorHandlerMiddleware;
