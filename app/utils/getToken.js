// libraries
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

/**
 * @desc generates user token
 * @param {object} user
 */
const userToken = (user) => {
  return jwt.sign(
    {
      userId: user._id,
    },
    process.env.SECRET_KEY,
    { expiresIn: "24h" }
  );
};
