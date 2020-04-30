"use strict";
const studios = [
  {
    name: "Wit Studios",
  },
  {
    name: "UFO Table",
  },
  {
    name: "Sunrise",
  },
  {
    name: "Osaka films",
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Studios", studios, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Studios", null, {});
  },
};
