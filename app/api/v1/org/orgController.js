/**
 * @desc
 */
const orgController = {
  /**
   * @desc creates an organization
   * @param {object} req
   * @param {object} res
   */
  async createOrg(req, res) {
    return true;
  },

  /**
   * @desc updates details of an organization
   * @param {object} req
   * @param {object} res
   */
  async updateOrg(req, res) {
    return true;
  },

  /**
   * @desc deletes an organization
   * @param {object} req
   * @param {object} res
   */
  async deleteOrg(req, res) {
    return true;
  },

  /**
   * @desc
   * @param {object} req
   * @param {object} res
   */
  async getOrg(req, res) {
    return await res.status(200).send({
      message: "All organization retrieved"
    });
  }
};

module.exports = orgController;
