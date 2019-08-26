import * as dotenv from "dotenv";
import { ApolloServer, PubSub } from "apollo-server";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import schema from "./graph/schema";
import models from "./db/models";

dotenv.config();
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('Connected to the MongoDB');
}).on('error', (error) => {
    console.log(error);
});

const app = express();
app.use(cors("*"));

const pubsub = new PubSub();

const server = new ApolloServer({
    schema,
    context: ({ req }) => ({
        models,
        secret: process.env.SECRET,
        req,
        pubsub
    })
});

server.applyMiddleware({app});

app.listen({ port: process.env.SERVER_PORT }, () =>
  console.log(`Server ready at http://localhost:${process.env.SERVER_PORT}${server.graphqlPath}`)
)