import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `
    type Query {
        megasena: [Int!]!
    }
`;

const resolvers = {
    Query: {
        megasena: () => Array.from({ length: 5 }, () => parseInt(Math.random() * 999)),
    } 
}

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, { listen: { port: 5000 }});

console.log(`Open on ${url}`);