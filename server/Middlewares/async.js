const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
      //   res.status(500).json({ msg: error });
    }
  };
};

module.exports = asyncWrapper;
