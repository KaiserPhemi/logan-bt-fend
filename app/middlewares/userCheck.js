// model
const User = require("../api/v1/users/userModel");

// utils
const { userSignUpSchema } = require("../utils/dataValidator");

/**
 * @desc checks if user exist
 * @param {object} req
 * @param {object} res
 */
const checkExistingUser = async (req, res, next) => {
  const { email } = req.body;
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res.status(400).send({
      message: `User with email '${existingUser.email}' already exist.`,
    });
  }
  next();
};

/**
 * @desc validates form data
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const validateFormData = async (req, res, next) => {
  const { body } = req;
  const signUpData = await userSignUpSchema.validate({ ...body });
  if (signUpData.error) {
    const { error } = signUpData;
    const details = error.details[0].message;
    return res.status(400).send({
      message: "An error occured while validating form data.",
      details,
    });
  }
  next();
};

module.exports = { checkExistingUser, validateFormData };
