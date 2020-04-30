const { gql } = require("apollo-server-express");

module.exports = gql`
  type Studio {
    id: Int!
    name: String!
    animes: [Anime!]!
  }

  extend type Query {
    studio(id: Int!): Studio
    allStudios: [Studio!]!
  }
`;
