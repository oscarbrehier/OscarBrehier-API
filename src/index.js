import { ApolloServer as AS } from 'apollo-server-express';
import express from 'express';
import {resolvers} from './resolvers.js';
import {typeDefs} from './typeDefs.js';
import init from './database.js';

const startServer = async () => {

    const app = express();
    const server = new AS({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app });

    app.listen({ port: 4001 }, () => {
        console.clear();
        console.log(`🚀 Application ready at http://localhost:4001${server.graphqlPath}`);
    });

}; 

init();
startServer();