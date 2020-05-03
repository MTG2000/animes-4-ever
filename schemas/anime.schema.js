const { gql } = require("apollo-server-express");

module.exports = gql`
  type Anime {
    id: Int!
    title: String!
    image: String!
    description: String!
    rating: Float
    state: String!
    author: Author
    studio: Studio
  }

  extend type Query {
    anime(id: Int): Anime
    searchAnimes(name: String!): [Anime!]!
    allAnimes: [Anime!]!
    topAnimes(limit: Int): [Anime!]!
    upcomingAnimes(limit: Int): [Anime!]!
    topAiringAnimes(limit: Int): [Anime!]!
  }
`;
