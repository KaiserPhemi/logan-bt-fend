// libraries
const Joi = require("@hapi/joi");

// const crypto = require("crypto");
// crypto.randomBytes(256, (err, buf) => {
//   if (err) throw err;
//   console.log(`${buf.length} bytes of random data: ${buf.toString("hex")}`);
// });

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
    password: Joi.string().min(8).pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  }),
};

module.exports = dataValidator;
