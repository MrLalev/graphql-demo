import * as dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import schema from "./graph";

dotenv.config();
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('Connected to the MongoDB');
}).on('error', (error) => {
    console.log(error);
});

const app = express();
app.use(cors("*"));

const server = new ApolloServer({
    schema,
    context: ({ req }) => ({
        secret: process.env.SECRET,
        req
    })
});

server.applyMiddleware({app});

app.listen({ port: process.env.SERVER_PORT }, () =>
  console.log(`Server ready at http://localhost:${process.env.SERVER_PORT}${server.graphqlPath}`)
)