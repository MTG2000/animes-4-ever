const { gql } = require("apollo-server-express");

module.exports = gql`
  type Anime {
    id: Int!
    title: String!
    rating: Float!
    author: Author
    studio: Studio
  }

  extend type Query {
    allAnimes: [Anime!]!
    topAnimes(limit: Int): [Anime!]!
  }
`;
