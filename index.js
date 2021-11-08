const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

async function startApolloServer(schema, resolvers) {
    const server = new ApolloServer({
        typeDefs: schema, 
        resolvers
    });

    await server.start();

    const app = express()

    server.applyMiddleware({ app })

    app.listen({ port: 4000 }, () => console.log(`Servidor rodando na porta localhost:4000/${server.graphqlPath}`))
}

const schema = gql(`
    type Query {
        helloWorld: String!
    }
`);

const resolvers = { 
    Query: {
        helloWorld: () => 'Hello world! our first consultation :)'
    }
};

startApolloServer(schema, resolvers);