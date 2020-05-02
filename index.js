const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const path = require("path");
const app = express();
const { sequelize } = require("./models");

app.use(express.static(path.join(__dirname, "static")));

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = require("./schemas");

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = require("./resolvers");

//context:object that get passed to all resolvers (3rd args)
const context = require("./context");
// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});
server.applyMiddleware({ app, path: "/graphql" });

app.get("/", (req, res) => {
  res.send("Hello GraphQl Server , navigate to /graphql !!");
});

const PORT = process.env.PORT || 5000;

sequelize.sync({ force: false, logging: false }).then(async () => {
  app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log("server running on port 5000");
  });
});
