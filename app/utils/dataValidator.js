// libraries
const Joi = require("@hapi/joi");

/**
 * @desc
 */
const dataValidator = {
  /**
   * @desc validates user input data for signup
   */
  userSignUpSchema: Joi.object({
    firstName: Joi.string().alphanum().min(3).max(50).required(),
    lastName: Joi.string().alphanum().min(3).max(50).required(),
    email: Joi.string().email({ minDomainSegments: 2 }),
    password: Joi.string().min(8),
  }),
  loginSchema: Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }),
    password: Joi.string().min(8),
  }),
};

module.exports = dataValidator;
