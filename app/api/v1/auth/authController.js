// utils
const { checkPassword } = require("../../../utils/secureHash");

/**
 * @desc
 */
const authController = {
  /**
   * @desc logins a user
   * @param {object} req
   * @param {object} res
   */
  async loginUser(req, res) {
    const { email, password } = req.body;

    // verify password
    //
    try {
    } catch (error) {}

    return res.status(200).send({
      message: "User logged in successfully.",
      data: body,
    });
  },
};

module.exports = authController;
