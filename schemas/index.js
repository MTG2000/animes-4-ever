const { gql } = require("apollo-server-express");

const animeSchema = require("./anime.schema");
const authorSchema = require("./author.schema");
const studioSchema = require("./studio.schema");

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;
module.exports = [linkSchema, animeSchema, authorSchema, studioSchema];
