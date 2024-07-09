const Joi = require('joi');
module.exports = {
  validateSighupInput: Joi.object().keys({
    lastName: Joi.string().required(),
    firstName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string().required()
  }),

  validateLoginInput: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  })


};