import * as dotenv from "dotenv";
import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import schema from "./graph/schema";
import models from "./db/models";

dotenv.config();
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useCreateIndex: true });
mongoose.connection.once('open', () => {
    console.log('Connected to the MongoDB');
}).on('error', (error) => {
    console.log(error);
});

const server = new ApolloServer({
    schema,
    context: ({ req }) => ({
        models,
        secret: process.env.SECRET,
        req
    }),
    cors: {
      origin: "*",
      credentials: true
    }
});

server.listen({ port: process.env.SERVER_PORT }, () =>
  console.log(`Server ready at http://localhost:${process.env.SERVER_PORT}${server.graphqlPath}`)
)