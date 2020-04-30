const { gql } = require("apollo-server-express");

module.exports = gql`
  type Author {
    id: Int!
    name: String!
    animes: [Anime!]!
  }

  extend type Query {
    allAuthors: [Author!]!
  }
`;
