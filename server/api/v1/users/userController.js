/**
 * @desc user controller
 */
const userController = {
  /**
   * @desc creates a user
   * @param {object} req
   * @param {object} res
   */
  async createUser(req, res) {
    return res.status(200).send({
      message: "User Created"
    });
  },

  /**
   * @desc retrieves all users
   * @param {object} req
   * @param {object} res
   */
  async getUsers(req, res) {
    return res.status(200).send({
      message: "All users"
    });
  }
};

module.exports = userController;
