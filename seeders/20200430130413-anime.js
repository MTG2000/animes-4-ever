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
    description:
      "Eren Yeager(Jaeger in the anime adaptation) lives with Mikasa Ackerman and best friend Armin Arlert in the town of Shiganshina adjacent to Wall Maria, outermost of three circular walls protecting humanity from man-eating Titans said to have killed all other humans one hundred years prior. When Shiganshina and Wall Maria are breached by the Colossal(Colossus in the manga) and Armoured Titans, invading Titans force humanity to retreat behind Wall Rose. After a titan devours his mother and his father disappears, a vengeful Eren enlists in the military along with Mikasa and Armin.",
  },
  {
    title: "One Punch Man",
    image: "/images/one-punch-man.jpg",
    rating: 8.8,
    state: "airing",
    authorId: 2,
    studioId: 1,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis obcaecati alias! Quibusdam minus sit, esse excepturi exercitationem accusantium hic dolor deleniti necessitatibus quis eveniet explicabo eaque quae veniam in assumenda optio quo natus numquam et laborum facilis provident aliquid. Maxime voluptate quae earum eius quasi nemo nam minus quis esse cupiditate sint facere doloribus et sit, architecto eos rerum nobis atque incidunt, officia reprehenderit? Labore, ex delectus. Minima, cupiditate ",
  },
  {
    title: "Tokyo Ghoul",
    image: "/images/tokyo-ghoul.jpg",
    rating: 8.0,
    state: "completed",
    authorId: 3,
    studioId: 2,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis obcaecati alias! Quibusdam minus sit, esse excepturi exercitationem accusantium hic dolor deleniti necessitatibus quis eveniet explicabo eaque quae veniam in assumenda optio quo natus numquam et laborum facilis provident aliquid. Maxime voluptate quae earum eius quasi nemo nam minus quis esse cupiditate sint facere doloribus et sit, architecto eos rerum nobis atque incidunt, officia reprehenderit? Labore, ex delectus. Minima, cupiditate ",
  },
  {
    title: "My Hero Academia",
    image: "/images/my-hero-academia.jpg",
    rating: 8.5,
    state: "airing",
    authorId: 4,
    studioId: 3,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis obcaecati alias! Quibusdam minus sit, esse excepturi exercitationem accusantium hic dolor deleniti necessitatibus quis eveniet explicabo eaque quae veniam in assumenda optio quo natus numquam et laborum facilis provident aliquid. Maxime voluptate quae earum eius quasi nemo nam minus quis esse cupiditate sint facere doloribus et sit, architecto eos rerum nobis atque incidunt, officia reprehenderit? Labore, ex delectus. Minima, cupiditate ",
  },
  {
    title: "Death Note",
    image: "/images/death-note.jpg",
    rating: 9.0,
    state: "completed",
    authorId: 5,
    studioId: 2,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis obcaecati alias! Quibusdam minus sit, esse excepturi exercitationem accusantium hic dolor deleniti necessitatibus quis eveniet explicabo eaque quae veniam in assumenda optio quo natus numquam et laborum facilis provident aliquid. Maxime voluptate quae earum eius quasi nemo nam minus quis esse cupiditate sint facere doloribus et sit, architecto eos rerum nobis atque incidunt, officia reprehenderit? Labore, ex delectus. Minima, cupiditate ",
  },
  {
    title: "Code Gease",
    image: "/images/code-gease.jpg",
    rating: 9.0,
    state: "completed",
    authorId: 5,
    studioId: 3,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis obcaecati alias! Quibusdam minus sit, esse excepturi exercitationem accusantium hic dolor deleniti necessitatibus quis eveniet explicabo eaque quae veniam in assumenda optio quo natus numquam et laborum facilis provident aliquid. Maxime voluptate quae earum eius quasi nemo nam minus quis esse cupiditate sint facere doloribus et sit, architecto eos rerum nobis atque incidunt, officia reprehenderit? Labore, ex delectus. Minima, cupiditate ",
  },
  {
    title: "Mob Pshyco 100",
    image: "/images/mob-pshyco-100.jpg",
    rating: 8.8,
    state: "completed",
    authorId: 2,
    studioId: 4,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis obcaecati alias! Quibusdam minus sit, esse excepturi exercitationem accusantium hic dolor deleniti necessitatibus quis eveniet explicabo eaque quae veniam in assumenda optio quo natus numquam et laborum facilis provident aliquid. Maxime voluptate quae earum eius quasi nemo nam minus quis esse cupiditate sint facere doloribus et sit, architecto eos rerum nobis atque incidunt, officia reprehenderit? Labore, ex delectus. Minima, cupiditate ",
  },
  {
    title: "Tower Of God",
    image: "/images/tower-of-god.jpg",
    state: "upcoming",
    authorId: 3,
    studioId: 3,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis obcaecati alias! Quibusdam minus sit, esse excepturi exercitationem accusantium hic dolor deleniti necessitatibus quis eveniet explicabo eaque quae veniam in assumenda optio quo natus numquam et laborum facilis provident aliquid. Maxime voluptate quae earum eius quasi nemo nam minus quis esse cupiditate sint facere doloribus et sit, architecto eos rerum nobis atque incidunt, officia reprehenderit? Labore, ex delectus. Minima, cupiditate ",
  },
  {
    title: "Re Zero",
    image: "/images/re-zero.jpg",
    state: "upcoming",
    authorId: 2,
    studioId: 4,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis obcaecati alias! Quibusdam minus sit, esse excepturi exercitationem accusantium hic dolor deleniti necessitatibus quis eveniet explicabo eaque quae veniam in assumenda optio quo natus numquam et laborum facilis provident aliquid. Maxime voluptate quae earum eius quasi nemo nam minus quis esse cupiditate sint facere doloribus et sit, architecto eos rerum nobis atque incidunt, officia reprehenderit? Labore, ex delectus. Minima, cupiditate ",
  },
  {
    title: "Solo Leveling",
    image: "/images/solo-leveling.jpg",
    state: "upcoming",
    authorId: 2,
    studioId: 3,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis obcaecati alias! Quibusdam minus sit, esse excepturi exercitationem accusantium hic dolor deleniti necessitatibus quis eveniet explicabo eaque quae veniam in assumenda optio quo natus numquam et laborum facilis provident aliquid. Maxime voluptate quae earum eius quasi nemo nam minus quis esse cupiditate sint facere doloribus et sit, architecto eos rerum nobis atque incidunt, officia reprehenderit? Labore, ex delectus. Minima, cupiditate ",
  },
  {
    title: "Glepinir",
    image: "/images/glepinir.jpg",
    state: "airing",
    rating: 8.2,
    authorId: 3,
    studioId: 1,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis obcaecati alias! Quibusdam minus sit, esse excepturi exercitationem accusantium hic dolor deleniti necessitatibus quis eveniet explicabo eaque quae veniam in assumenda optio quo natus numquam et laborum facilis provident aliquid. Maxime voluptate quae earum eius quasi nemo nam minus quis esse cupiditate sint facere doloribus et sit, architecto eos rerum nobis atque incidunt, officia reprehenderit? Labore, ex delectus. Minima, cupiditate ",
  },
  {
    title: "Sword Art Online",
    image: "/images/sword-art-online.jpg",
    state: "completed",
    rating: 7.9,
    authorId: 3,
    studioId: 1,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis obcaecati alias! Quibusdam minus sit, esse excepturi exercitationem accusantium hic dolor deleniti necessitatibus quis eveniet explicabo eaque quae veniam in assumenda optio quo natus numquam et laborum facilis provident aliquid. Maxime voluptate quae earum eius quasi nemo nam minus quis esse cupiditate sint facere doloribus et sit, architecto eos rerum nobis atque incidunt, officia reprehenderit? Labore, ex delectus. Minima, cupiditate ",
  },
  {
    title: "Fate/Stay Night",
    image: "/images/fate-stay-night.jpg",
    state: "completed",
    rating: 8.7,
    authorId: 5,
    studioId: 4,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis obcaecati alias! Quibusdam minus sit, esse excepturi exercitationem accusantium hic dolor deleniti necessitatibus quis eveniet explicabo eaque quae veniam in assumenda optio quo natus numquam et laborum facilis provident aliquid. Maxime voluptate quae earum eius quasi nemo nam minus quis esse cupiditate sint facere doloribus et sit, architecto eos rerum nobis atque incidunt, officia reprehenderit? Labore, ex delectus. Minima, cupiditate ",
  },
  {
    title: "Demon Slayer",
    image: "/images/demon-slayer.jpg",
    state: "airing",
    rating: 8.55,
    authorId: 3,
    studioId: 1,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis obcaecati alias! Quibusdam minus sit, esse excepturi exercitationem accusantium hic dolor deleniti necessitatibus quis eveniet explicabo eaque quae veniam in assumenda optio quo natus numquam et laborum facilis provident aliquid. Maxime voluptate quae earum eius quasi nemo nam minus quis esse cupiditate sint facere doloribus et sit, architecto eos rerum nobis atque incidunt, officia reprehenderit? Labore, ex delectus. Minima, cupiditate ",
  },
  {
    title: "Parasyte",
    image: "/images/parasyte.jpg",
    state: "completed",
    rating: 8.67,
    authorId: 2,
    studioId: 3,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis obcaecati alias! Quibusdam minus sit, esse excepturi exercitationem accusantium hic dolor deleniti necessitatibus quis eveniet explicabo eaque quae veniam in assumenda optio quo natus numquam et laborum facilis provident aliquid. Maxime voluptate quae earum eius quasi nemo nam minus quis esse cupiditate sint facere doloribus et sit, architecto eos rerum nobis atque incidunt, officia reprehenderit? Labore, ex delectus. Minima, cupiditate ",
  },
  {
    title: "Darwins Game",
    image: "/images/darwins-game.jpg",
    state: "airing",
    rating: 8.2,
    authorId: 4,
    studioId: 3,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis obcaecati alias! Quibusdam minus sit, esse excepturi exercitationem accusantium hic dolor deleniti necessitatibus quis eveniet explicabo eaque quae veniam in assumenda optio quo natus numquam et laborum facilis provident aliquid. Maxime voluptate quae earum eius quasi nemo nam minus quis esse cupiditate sint facere doloribus et sit, architecto eos rerum nobis atque incidunt, officia reprehenderit? Labore, ex delectus. Minima, cupiditate ",
  },
  {
    title: "Beastars",
    image: "/images/beastars.jpg",
    state: "airing",
    rating: 8.59,
    authorId: 5,
    studioId: 2,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis obcaecati alias! Quibusdam minus sit, esse excepturi exercitationem accusantium hic dolor deleniti necessitatibus quis eveniet explicabo eaque quae veniam in assumenda optio quo natus numquam et laborum facilis provident aliquid. Maxime voluptate quae earum eius quasi nemo nam minus quis esse cupiditate sint facere doloribus et sit, architecto eos rerum nobis atque incidunt, officia reprehenderit? Labore, ex delectus. Minima, cupiditate ",
  },
  {
    title: "One Piece",
    image: "/images/one-piece.jpg",
    state: "airing",
    rating: 8.55,
    authorId: 4,
    studioId: 4,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis obcaecati alias! Quibusdam minus sit, esse excepturi exercitationem accusantium hic dolor deleniti necessitatibus quis eveniet explicabo eaque quae veniam in assumenda optio quo natus numquam et laborum facilis provident aliquid. Maxime voluptate quae earum eius quasi nemo nam minus quis esse cupiditate sint facere doloribus et sit, architecto eos rerum nobis atque incidunt, officia reprehenderit? Labore, ex delectus. Minima, cupiditate ",
  },
  {
    title: "Bastards",
    image: "/images/bastards.jpg",
    state: "upcoming",
    authorId: 1,
    studioId: 2,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis obcaecati alias! Quibusdam minus sit, esse excepturi exercitationem accusantium hic dolor deleniti necessitatibus quis eveniet explicabo eaque quae veniam in assumenda optio quo natus numquam et laborum facilis provident aliquid. Maxime voluptate quae earum eius quasi nemo nam minus quis esse cupiditate sint facere doloribus et sit, architecto eos rerum nobis atque incidunt, officia reprehenderit? Labore, ex delectus. Minima, cupiditate ",
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
