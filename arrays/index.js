import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const users = [
    { id: 1, name: 'Gabriel Cardoso', email: 'gabrielcardosogirarde@gmail.com' },
    { id: 2, name: 'Gokyo', email: 'gokyo@gmail.com' },
    { id: 3, name: 'Picollo', email: 'picollo@gmail.com' },
]

const typeDefs = `
    type Query {
        megasena: [Int!]!
        users: [User]
    }

    type User {
        id: Int!
        name: String!
        email: String!
    }

`;

const resolvers = {
    Query: {
        megasena: () => Array.from({ length: 5 }, () => parseInt(Math.random() * 999)),
        users: () => users,
    } 
}

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, { listen: { port: 5000 }});

console.log(`Open on ${url}`);