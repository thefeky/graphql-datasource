import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { schema } from "./schema.js";
import { resolver } from "./resolver.js";

const server = new ApolloServer({ typeDefs: schema, resolvers: resolver });
const app = express();

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
};

startServer();
