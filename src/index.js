import { ApolloServer as AS } from 'apollo-server-express';
import express from 'express';
import {resolvers} from './resolvers.js';
import {typeDefs} from './typeDefs.js';
import init from './database.js';

const PORT = process.env.PORT || 4001;

const startServer = async () => {

    const app = express();
    const server = new AS({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app });

    app.listen({ port: PORT }, () => {
        console.clear();
        console.log(`🚀 Application ready at http://localhost:${PORT}${server.graphqlPath}`);
    });

}; 

init();
startServer();