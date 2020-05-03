const DB = require("../models");
const { Op } = require("sequelize");

class Repository {
  async getAll() {
    return await DB.Animes.findAll();
  }

  async getAllByName(name) {
    return await DB.Animes.findAll({
      where: {
        title: {
          [Op.like]: `%${name}%`,
        },
      },
    });
  }

  async find(id) {
    return await DB.Animes.findByPk(id);
  }

  async getTop(limit) {
    return await DB.Animes.findAll({
      order: [["rating", "DESC"]],
      limit,
    });
  }

  async getUpcoming(limit) {
    return await DB.Animes.findAll({
      where: {
        state: "upcoming",
      },
      limit,
    });
  }

  async getTopAiring(limit) {
    return await DB.Animes.findAll({
      where: {
        state: "airing",
      },
      order: [["rating", "DESC"]],
      limit,
    });
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
