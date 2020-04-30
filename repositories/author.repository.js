const DB = require("../models");

class Repository {
  async getAll() {
    return await DB.Authors.findAll({ include: DB.Animes });
  }

  async find(id) {
    return await DB.Authors.findByPk(id);
  }
}

module.exports = new Repository();
