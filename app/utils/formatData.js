/**
 * @desc cleans up data from database
 * @param {object} userData
 */
const formatUserData = (userData) => {
  return {
    id: userData._id,
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
  };
};

module.exports = { formatUserData };
