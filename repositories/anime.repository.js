const DB = require("../models");

class Repository {
  async getAll() {
    return await DB.Animes.findAll();
  }

  async getByAuthor(id) {
    return await DB.Animes.findAll({
      where: {
        authorId: id,
      },
    });
  }

  async getByStudio(id) {
    return await DB.Animes.findAll({
      where: {
        studioId: id,
      },
    });
  }
}

module.exports = new Repository();
