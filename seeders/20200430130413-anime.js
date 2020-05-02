"use strict";

["airing", "completed", "upcoming"];

const animes = [
  {
    title: "Attack On Titan",
    image: "/images/aot.jpg",
    rating: 9.1,
    state: "airing",
    authorId: 1,
    studioId: 1,
  },
  {
    title: "One Punch Man",
    image: "/images/one-punch-man.jpg",
    rating: 8.8,
    state: "airing",
    authorId: 2,
    studioId: 1,
  },
  {
    title: "Tokyo Ghoul",
    image: "/images/tokyo-ghoul.jpg",
    rating: 8.0,
    state: "completed",
    authorId: 3,
    studioId: 2,
  },
  {
    title: "My Hero Academia",
    image: "/images/my-hero-academia.jpg",
    rating: 8.5,
    state: "airing",
    authorId: 4,
    studioId: 3,
  },
  {
    title: "Death Note",
    image: "/images/death-note.jpg",
    rating: 9.0,
    state: "completed",
    authorId: 5,
    studioId: 2,
  },
  {
    title: "Code Gease",
    image: "/images/code-gease.jpg",
    rating: 9.0,
    state: "completed",
    authorId: 5,
    studioId: 3,
  },
  {
    title: "Mob Pshyco 100",
    image: "/images/mob-pshyco-100.jpg",
    rating: 8.8,
    state: "completed",
    authorId: 2,
    studioId: 4,
  },
  {
    title: "Tower Of God",
    image: "/images/tower-of-god.jpg",
    state: "upcoming",
    authorId: 3,
    studioId: 3,
  },
  {
    title: "Re Zero",
    image: "/images/re-zero.jpg",
    state: "upcoming",
    authorId: 2,
    studioId: 4,
  },
  {
    title: "Solo Leveling",
    image: "/images/solo-leveling.jpg",
    state: "upcoming",
    authorId: 2,
    studioId: 3,
  },
  {
    title: "Glepinir",
    image: "/images/glepinir.jpg",
    state: "airing",
    rating: 8.2,
    authorId: 3,
    studioId: 1,
  },
  {
    title: "Sword Art Online",
    image: "/images/sword-art-online.jpg",
    state: "completed",
    rating: 7.9,
    authorId: 3,
    studioId: 1,
  },
  {
    title: "Fate/Stay Night",
    image: "/images/fate-stay-night.jpg",
    state: "completed",
    rating: 8.7,
    authorId: 5,
    studioId: 4,
  },
  {
    title: "Demon Slayer",
    image: "/images/demon-slayer.jpg",
    state: "airing",
    rating: 8.55,
    authorId: 3,
    studioId: 1,
  },
  {
    title: "Parasyte",
    image: "/images/parasyte.jpg",
    state: "completed",
    rating: 8.67,
    authorId: 2,
    studioId: 3,
  },
  {
    title: "Darwins Game",
    image: "/images/darwins-game.jpg",
    state: "airing",
    rating: 8.2,
    authorId: 4,
    studioId: 3,
  },
  {
    title: "Beastars",
    image: "/images/beastars.jpg",
    state: "airing",
    rating: 8.59,
    authorId: 5,
    studioId: 2,
  },
  {
    title: "One Piece",
    image: "/images/one-piece.jpg",
    state: "airing",
    rating: 8.55,
    authorId: 4,
    studioId: 4,
  },
  {
    title: "Bastards",
    image: "/images/bastards.jpg",
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
