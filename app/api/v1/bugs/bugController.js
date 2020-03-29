/**
 * @desc bug controller
 */
const bugController = {
  /**
   * @desc creates a bug case
   * @param {object} req
   * @param {object} res
   */
  async createBug(req, res) {
    console.log("");
    return res.status(200).send({
      message: "All organization retrieved"
    });
  },

  /**
   * @desc updates a bug
   * @param {object} req
   * @param {object} res
   */
  async updateBug(req, res) {
    return true;
  },

  /**
   * @desc retrieve bugs
   * @param {object} req
   * @param {object} res
   */
  async getBugs(req, res) {
    return res.status(200).send({
      message: "All organization retrieved"
    });
  },

  /**
   * @desc deletes a bug
   * @param {object} req
   * @param {object} res
   */
  async deleteBug(req, res) {
    return true;
  }
};

module.exports = bugController;
