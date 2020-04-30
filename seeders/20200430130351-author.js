"use strict";

const authors = [
  { name: "Hajime Isyama" },
  { name: "The One" },
  { name: "Sui Ishida" },
  { name: "Kohei Horikoshi" },
  { name: "Tsugumi Ohba" },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Authors", authors, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Authors", null, {});
  },
};
