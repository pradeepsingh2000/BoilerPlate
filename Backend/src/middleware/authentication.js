const jwt = require('jsonwebtoken');
const { errorResponse } = require('../utils/responseHandler');

const userAuth = async (req, res, next) => {
  try {
    let usertoken;
    const token = req.headers.authorization || req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      return errorResponse(
        res,
        401,
        "Unauthorized access",
        []
      );
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    jwt.verify(token, process.env.JWT_SECRET, async function (error, data) {
      if (error) {
        return responseHandler.errorResponse(
          res,
          401,
          "Unauthorized access",
          []
        );
      } else {
        req.user = decoded.id
        next()
      }
    });
  } catch (e) {
    res.status(401).send({ error: "Please authenticate" });
  }
};

module.exports = { userAuth }