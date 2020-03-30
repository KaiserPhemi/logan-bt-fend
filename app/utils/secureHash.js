// libraries
const bcrypt = require("bcrypt");
const saltRounds = 10;

/**
 * @desc
 */
module.exports = {
  /**
   * @desc hashes a password
   * @param {string} plainPwd
   */
  hashPassword(password) {
    return bcrypt.hash(password, saltRounds);
  },

  /**
   * @desc checks for password match
   * @param {string} password
   * @param {string} storedHash
   */
  checkPassword(password, storedHash) {
    return bcrypt.compare(password, storedHash);
  }
};
