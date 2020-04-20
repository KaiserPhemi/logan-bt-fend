/**
 * @desc
 */
const authController = {
  async loginUser(req, res) {
    const { body } = req;

    return res.status(200).send({
      message: "User logged in successfully.",
      data: body,
    });
  },
};

module.exports = authController;
