import express from "express";
import Cors from "cors";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import ConectBD from "./db/db";
import { types } from "./graphql/types";
import { resolvers } from "./graphql/resolvers";

dotenv.config();

const server = new ApolloServer({
  typeDefs: types,
  resolvers: resolvers,
});

const app = express();
app.use(Cors());

app.use(express.json());
app.listen({ port: process.env.PORT || 4000 }, async () => {
  await ConectBD();
  await server.start();
  server.applyMiddleware({ app });
  console.log("¡ Servidor encendido correctamente !");
});
