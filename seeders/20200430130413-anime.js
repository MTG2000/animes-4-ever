"use strict";

["airing", "completed", "upcoming"];

const animes = [
  {
    title: "Attack On Titan",
    rating: 9.1,
    state: "airing",
    authorId: 1,
    studioId: 1,
  },
  {
    title: "One Punch Man",
    rating: 8.8,
    state: "airing",
    authorId: 2,
    studioId: 1,
  },
  {
    title: "Tokyo Ghoul",
    rating: 8.0,
    state: "completed",
    authorId: 3,
    studioId: 2,
  },
  {
    title: "My Hero Academia",
    rating: 8.5,
    state: "airing",
    authorId: 4,
    studioId: 3,
  },
  {
    title: "Death Note",
    rating: 9.0,
    state: "completed",
    authorId: 5,
    studioId: 2,
  },
  {
    title: "Code Gease",
    rating: 9.0,
    state: "completed",
    authorId: 5,
    studioId: 3,
  },
  {
    title: "Mob Pshyco",
    rating: 8.8,
    state: "completed",
    authorId: 2,
    studioId: 4,
  },
  {
    title: "Tower Of God",
    state: "upcoming",
    authorId: 3,
    studioId: 3,
  },
  {
    title: "Re Zero",
    state: "upcoming",
    authorId: 2,
    studioId: 4,
  },
  {
    title: "Solo Leveling",
    state: "upcoming",
    authorId: 2,
    studioId: 3,
  },
  {
    title: "Glepinir",
    state: "airing",
    rating: 8.2,
    authorId: 3,
    studioId: 1,
  },
  {
    title: "Sowrd Art Online",
    state: "completed",
    rating: 7.9,
    authorId: 3,
    studioId: 1,
  },
  {
    title: "Fate/Stay Night",
    state: "completed",
    rating: 8.7,
    authorId: 5,
    studioId: 4,
  },
  {
    title: "Demon Slayer",
    state: "airing",
    rating: 8.55,
    authorId: 3,
    studioId: 1,
  },
  {
    title: "Parasyte",
    state: "completed",
    rating: 8.67,
    authorId: 2,
    studioId: 3,
  },
  {
    title: "Darwins Game",
    state: "airing",
    rating: 8.2,
    authorId: 4,
    studioId: 3,
  },
  {
    title: "Beasters",
    state: "airing",
    rating: 8.59,
    authorId: 5,
    studioId: 2,
  },
  {
    title: "Super Scintefic Accelerator",
    state: "completed",
    rating: 7.55,
    authorId: 4,
    studioId: 4,
  },
  {
    title: "Bastards",
    state: "upcoming",
    authorId: 1,
    studioId: 2,
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
