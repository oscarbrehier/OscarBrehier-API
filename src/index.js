import { ApolloServer as AS } from 'apollo-server-express';
import express from 'express';
import {resolvers} from './resolvers';
import {typeDefs} from './typeDefs';
import mongoose from 'mongoose';

const startServer = async () => {

    const app = express();
    const server = new AS({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app });

    await mongoose.connect("mongodb://localhost:27017/test3", {
        useNewUrlParser: true
    });

    app.listen({ port: 4000 }, () => {
        console.clear();
        console.log(`🚀 Application ready at http://localhost:4000${server.graphqlPath}`);
    });

}; 

startServer();