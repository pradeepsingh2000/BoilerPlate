const Users = require("../models/users");
const { errorResponse } = require("../utils/responseHandler");
const Message = require("../constants/messageConstant");
const { tryCatchFn } = require("../helper/tryCatch");

module.exports.CheckEmail = tryCatchFn(async (req, res, next) => {
  const checkIsEmailExit = await Users.findOne({ email: req.body.email, isActive: true })
  if (!checkIsEmailExit) {
    next()
  }
  else {
    return errorResponse(
      res,
      400,
      Message.USER_ALREADY_EXIT_PLEASE_LOGIN,
      []
    )
  }

})

module.exports.CheckUser = tryCatchFn(async (req, res, next) => {
  const checkIsEmailExit = await Users.findOne({ email: req.body.email, isActive: true })
  let { role } = req.params
  if (checkIsEmailExit) {
    if (checkIsEmailExit.role == role) {
      req.user = checkIsEmailExit
      next()
    }
    else {
      return errorResponse(
        res,
        400,
        Message.NOT_ALLOW,
        []
      )
    }
  }
  else {
    return errorResponse(
      res,
      400,
      Message.USER_NOT_FOUND,
      []
    )
  }

})
