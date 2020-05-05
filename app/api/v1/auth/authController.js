// utils
const { checkPassword } = require("../../../utils/secureHash");
const { userToken } = require("../../../utils/getToken");
const { formatUserData } = require("../../../utils/formatData");

// models
const User = require("../users/userModel");

/**
 * @desc
 */
const authController = {
  /**
   * @desc login a user
   * @param {object} req
   * @param {object} res
   */
  async loginUser(req, res) {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).send({
        message: `Invalid email or password.`,
      });
    }
    const verifyPassword = await checkPassword(password, existingUser.password);
    if (verifyPassword === false) {
      return res.status(400).send({
        message: `Invalid email or password.`,
      });
    }

    try {
      const token = userToken(existingUser);
      const user = formatUserData(existingUser);
      return res.status(200).send({
        message: "User logged in successfully.",
        user,
        token,
      });
    } catch (error) {
      return res.status(500).send({
        message: "An internal error occured.",
        error,
      });
    }
  },
};

module.exports = authController;
