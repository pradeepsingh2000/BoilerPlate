const express = require("express");
const router = express.Router();
const Validator = require('../../middleware/validator')
const Schema = require('../../validation/user');
const { userSingUp, userLogin, userProfile } = require("../../controller/user/userAuth.controller");
const { userAuth } = require("../../middleware/authentication");
const { CheckEmail, CheckUser } = require("../../middleware/comman");

router.post(
  '/register',
  Validator(Schema.validateSighupInput),
  CheckEmail,
  userSingUp
);

router.post(
  '/login/:role',
  Validator(Schema.validateLoginInput),
  CheckUser,
  userLogin
)

router.get('/profile',
  userAuth,
  userProfile
)








router.all("*", (req, res) => {
  res.status(404).json({ error: 'invalid route' });
});
module.exports = router;