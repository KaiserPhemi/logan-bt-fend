/**
 * @desc
 */
const authController = {
  async loginUser(req, res) {
    const { body } = req;
    return res.status(200).send({ message: "User login" });
  },
};

module.exports = authController;
