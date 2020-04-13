/**
 * @desc
 */
const authController = {
  async loginUser(req, res) {
    return res.status(200).send({ message: "User login" });
  },
};

module.exports = authController;
