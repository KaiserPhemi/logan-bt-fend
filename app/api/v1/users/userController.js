// utils
const { userSignUpSchema } = require("../../../utils/dataValidator");
const { hashPassword } = require("../../../utils/secureHash");

// model
const User = require("./userModel");

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
    const { body } = req;
    const signUpData = await userSignUpSchema.validate({ ...body });

    // checks for error in data validation
    if (signUpData.error) {
      const { error } = signUpData;
      const details = error.details[0].message;
      return res.status(400).send({
        message: "An error occured while validating data",
        details
      });
    }
    const { value } = signUpData;
    const existingUser = await User.findOne({ email: value.email });

    // checks if user exist already
    if (existingUser) {
      return res.status(400).send({
        message: `User with email '${existingUser.email}' already exist.`
      });
    }
    const hashedPwd = await hashPassword(value.password);
    const userData = { ...value, password: hashedPwd };
    try {
      const createdUser = await User.create({ ...userData });
      return res.status(201).send({
        message: "User created",
        createdUser
      });
    } catch (error) {
      return res.status(500).send({
        message: "An error occured",
        error
      });
    }
  },

  /**
   * @desc retrieves all users
   * @param {object} req
   * @param {object} res
   */
  async getUsers(req, res) {
    try {
      const allUsers = await User.find();
      return res.status(200).send({
        message: "All users retrieved.",
        users: allUsers
      });
    } catch (error) {
      return res.status(500).send({
        message: "An error occured.",
        error
      });
    }
  },

  /**
   * @desc updates a user details
   * @param {object} req
   * @param {object} res
   */
  async updateUser(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const updatedUser = await User.findByIdAndUpdate(id, body, { new: true });
      if (!updatedUser) {
        return res.status(404).send({
          message: "User with the details does not exist"
        });
      }
      return res.status(201).send({
        message: "User details updated",
        user: updatedUser
      });
    } catch (error) {
      return res.status(500).send({
        message: "User details not updated.",
        error
      });
    }
  },

  /**
   * @desc
   * @param {object} req
   * @param {object} res
   */
  async deleteUser(req, res) {}
};

module.exports = userController;
