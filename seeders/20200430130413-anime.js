"use strict";

const animes = [
  {
    id: 1,
    title: "Attack On Titan",
    rating: 9.1,
    authorId: 1,
    studioId: 1,
  },
  {
    id: 2,
    title: "One Punch Man",
    rating: 8.8,
    authorId: 2,
    studioId: 1,
  },
  {
    id: 3,
    title: "Tokyo Ghoul",
    rating: 8.0,
    authorId: 3,
    studioId: 2,
  },
  {
    id: 4,
    title: "My Hero Academia",
    rating: 8.5,
    authorId: 4,
    studioId: 3,
  },
  {
    id: 5,
    title: "Death Note",
    rating: 9.0,
    authorId: 5,
    studioId: 2,
  },
  {
    id: 6,
    title: "Code Gease",
    rating: 9.0,
    authorId: 5,
    studioId: 3,
  },
  {
    id: 7,
    title: "Mob Pshyco",
    rating: 8.8,
    authorId: 2,
    studioId: 4,
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Animes", animes, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Animes", null, {});
  },
};
