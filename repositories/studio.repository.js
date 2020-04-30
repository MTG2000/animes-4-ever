const DB = require("../models");

class Repository {
  async getAll() {
    return await DB.Studios.findAll({ include: DB.Animes });
  }

  async find(id) {
    return await DB.Studios.findByPk(id);
  }
}

module.exports = new Repository();
